import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import crypto from "crypto";
import { sendSetPasswordEmail } from "@/lib/email";

import type { AddonType as DbAddonType, ProductType as DbProductType } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

if (!STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}
if (!STRIPE_WEBHOOK_SECRET) {
  throw new Error("Missing STRIPE_WEBHOOK_SECRET environment variable");
}

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  // Use default API version
});

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ received: false, error: "Missing stripe-signature header" }, { status: 400 });
  }

  let rawBody: string;
  try {
    rawBody = await req.text();
  } catch {
    return NextResponse.json({ received: false, error: "Failed to read request body" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { received: false, error: `Webhook signature verification failed: ${message}` },
      { status: 400 }
    );
  }

  // Idempotency: Check if we've already processed this event
  const alreadyProcessed = await prisma.stripeEvent.findUnique({
    where: { eventId: event.id },
  });
  if (alreadyProcessed && alreadyProcessed.processed) {
    return NextResponse.json({ received: true, skipped: true });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutSessionCompleted(session, event.id);
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        if ((invoice as any).subscription) {
          await handleSubscriptionRenewal(invoice, event.id);
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionDeleted(subscription, event.id);
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        console.warn(`Payment failed for invoice ${invoice.id} (Customer: ${invoice.customer})`);
        break;
      }

      default:
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error(`Webhook Error [${event.type}]:`, error);
    return NextResponse.json({ received: false, error: "Internal server error during processing" }, { status: 500 });
  }
}

/**
 * STRATEGY: Handle Initial Purchase
 */
async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session, eventId: string) {
  const metadata = session.metadata ?? {};
  const productType = metadata.productType as DbProductType;
  const addOnType = metadata.addOnType as DbAddonType;
  let userId = metadata.userId as string | undefined;

  if (!productType) {
     throw new Error("Missing critical metadata (productType) in checkout session");
  }

  // Extract identifying information from Stripe session
  const stripeCustomerId = typeof session.customer === "string" ? session.customer : null;
  const customerEmail = session.customer_details?.email ?? (session.customer_email as string | undefined);

  if (!userId && !customerEmail && !stripeCustomerId) {
      throw new Error("Cannot associate purchase: missing userId, customerEmail, and stripeCustomerId");
  }

  await prisma.$transaction(async (tx) => {
    // 1. Mark event as started processing
    await tx.stripeEvent.upsert({
      where: { eventId },
      create: { eventId, type: "checkout.session.completed", processed: false },
      update: {},
    });

    // 1.5. Find or Create User
    let user = null;
    
    if (userId) {
        user = await tx.user.findUnique({ where: { id: userId } });
    }
    
    if (!user && stripeCustomerId) {
        user = await tx.user.findUnique({ where: { stripeCustomerId } });
    }
    
    if (!user && customerEmail) {
        user = await tx.user.findUnique({ where: { email: customerEmail } });
    }

    if (!user) {
        if (!customerEmail) {
            throw new Error("Cannot create user without customer email");
        }
        
        /**
         * AUTO-CREATE STRATEGY:
         * Silent account creation for frictionless checkout.
         */
        const fallbackName = session.customer_details?.name ?? customerEmail.split("@")[0];
        const resetToken = crypto.randomBytes(32).toString("hex");
        const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now

        user = await tx.user.create({
            data: {
                email: customerEmail,
                name: fallbackName,
                stripeCustomerId: stripeCustomerId ?? undefined,
                resetToken,
                resetTokenExpiry,
                accessType: "NONE"
            }
        });

        // Fire & Forget email delivery (avoids blocking transaction rollback)
        sendSetPasswordEmail(customerEmail, resetToken).catch(e => {
            console.error("Failed to send set password email during hook execution", e);
        });
    }

    // Ensure we have the definitive database userId
    userId = user.id;

    // 2. Update User Access
    if (productType === "ENTRY") {
      await tx.user.update({
        where: { id: userId },
        data: { accessType: "ENTRY", entryPurchased: true },
      });
    } else if (productType === "CORE") {
      await tx.user.update({
        where: { id: userId },
        data: { 
          accessType: "CORE", 
          hasFullAccess: true,
          canUseSubscription: true 
        },
      });
    } else if (productType === "SUBSCRIPTION") {
      await tx.user.update({
        where: { id: userId },
        data: { 
          accessType: "SUBSCRIPTION",
          subscriptionId: session.subscription as string,
          subscriptionStatus: "active",
          hasAIAdvisor: true
        },
      });
    } else if (productType === "ADDON" && addOnType) {
      // Manual check-then-upsert since we lack a unique constraint on [userId, type]
      const existingAddon = await tx.addon.findFirst({
        where: { userId, type: addOnType }
      });

      if (existingAddon) {
          await tx.addon.update({
              where: { id: existingAddon.id },
              data: { isActive: true }
          });
      } else {
          await tx.addon.create({
              data: { userId, type: addOnType, isActive: true }
          });
      }

      // Mirror to user model
      const userUpdate: any = {};
      if (addOnType === "ASSET_SPLIT") userUpdate.assetSplit = true;
      if (addOnType === "RETIREMENT") userUpdate.retirementImpact = true;
      if (addOnType === "VA_DISABILITY") userUpdate.vaDisability = true;
      if (addOnType === "HOUSING") userUpdate.housingScenario = true;
      
      await tx.user.update({ where: { id: userId }, data: userUpdate });
    }

    // 3. Create Payment Record
    await tx.payment.create({
      data: {
        userId,
        stripeSessionId: session.id,
        stripePaymentId: session.payment_intent as string || undefined,
        stripePriceId: session.line_items?.data?.[0]?.price?.id || undefined,
        amount: session.amount_total || 0,
        currency: (session.currency || "usd").toLowerCase(),
        productType,
      },
    });

    // 4. Link Stripe Customer ID
    if (session.customer) {
        await tx.user.update({
            where: { id: userId },
            data: { stripeCustomerId: session.customer as string }
        });
    }

    // 5. Finalize event
    await tx.stripeEvent.update({
      where: { eventId },
      data: { processed: true },
    });
  });
}

async function handleSubscriptionRenewal(invoice: Stripe.Invoice, eventId: string) {
  const subscriptionId = (invoice as any).subscription as string;
  
  await prisma.$transaction(async (tx) => {
    await tx.stripeEvent.upsert({
      where: { eventId },
      create: { eventId, type: "invoice.payment_succeeded", processed: false },
      update: {},
    });

    const user = await tx.user.findFirst({
      where: { subscriptionId },
    });

    if (user) {
      await tx.user.update({
        where: { id: user.id },
        data: { subscriptionStatus: "active", hasAIAdvisor: true },
      });

      await tx.payment.create({
        data: {
          userId: user.id,
          stripeSessionId: invoice.id,
          amount: invoice.amount_paid,
          currency: invoice.currency.toLowerCase(),
          productType: "SUBSCRIPTION",
        },
      });
    }

    await tx.stripeEvent.update({
      where: { eventId },
      data: { processed: true },
    });
  });
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription, eventId: string) {
  const subscriptionId = subscription.id;

  await prisma.$transaction(async (tx) => {
    await tx.stripeEvent.upsert({
      where: { eventId },
      create: { eventId, type: "customer.subscription.deleted", processed: false },
      update: {},
    });

    const user = await tx.user.findFirst({
      where: { subscriptionId },
    });

    if (user) {
      await tx.user.update({
        where: { id: user.id },
        data: { 
          subscriptionStatus: "canceled",
          hasAIAdvisor: false,
          accessType: user.hasFullAccess ? "CORE" : "ENTRY"
        },
      });
    }

    await tx.stripeEvent.update({
      where: { eventId },
      data: { processed: true },
    });
  });
}
