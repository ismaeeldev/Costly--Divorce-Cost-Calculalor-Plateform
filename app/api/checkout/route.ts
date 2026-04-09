import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import Stripe from "stripe";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // Use the default API version provided by the SDK
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    const { productType, addOnType } = await req.json();

    if (!productType) {
      return NextResponse.json({ error: "Product type is required" }, { status: 400 });
    }

    // 1. Fetch current user state from DB, if logged in
    let user = null;
    if (session?.user?.email) {
       user = await prisma.user.findUnique({
         where: { email: session.user.email },
         select: {
           id: true,
           hasFullAccess: true,
           entryPurchased: true,
         },
       });
    }

    /**
     * BUSINESS LOGIC ENCRYPTION:
     * - SUBSCRIPTION and ADDONS require CORE ($127) unlock.
     * - Protects the premium tier from direct bypass.
     */
    if ((productType === "SUBSCRIPTION" || productType === "ADDON")) {
       if (!user || !user.hasFullAccess) {
         return NextResponse.json(
           { error: "Core Strategic Unlock is required before accessing Pro features and add-ons. Please log in if you already have Core access." },
           { status: 403 }
         );
       }
    }

    if (productType === "ENTRY" && user?.entryPurchased) {
      return NextResponse.json({ error: "You already have Entry access." }, { status: 400 });
    }

    // MAP Product Types to Price IDs from ENV
    let priceId: string | undefined;
    switch (productType) {
      case "ENTRY":
        priceId = process.env.STRIPE_PRICE_ID_ENTRY;
        break;
      case "CORE":
        priceId = process.env.STRIPE_PRICE_ID_CORE;
        break;
      case "SUBSCRIPTION":
        priceId = process.env.STRIPE_PRICE_ID_SUBSCRIPTION;
        break;
      case "ADDON":
        if (addOnType === "ASSET_SPLIT") priceId = process.env.STRIPE_PRICE_ID_ADDON_ASSET;
        if (addOnType === "RETIREMENT") priceId = process.env.STRIPE_PRICE_ID_ADDON_RETIREMENT;
        if (addOnType === "VA_DISABILITY") priceId = process.env.STRIPE_PRICE_ID_ADDON_VA;
        if (addOnType === "HOUSING") priceId = process.env.STRIPE_PRICE_ID_ADDON_HOUSING;
        break;
    }

    if (!priceId) {
      console.error(`Missing Price ID for ${productType} ${addOnType || ""}`);
      return NextResponse.json({ error: "Service configuration error. Please contact support." }, { status: 400 });
    }

    // 3. Create Stripe Checkout Session
    const checkoutParams: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: productType === "SUBSCRIPTION" ? "subscription" : "payment",
      
      // PRODUCTION REDIRECTS:
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?productType=${productType}&isNew=${!user}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/paywall?checkout=canceled`,
      
      metadata: {
        productType,
        addOnType: addOnType || "",
        ...(user && { userId: user.id }),
      },
      // Allow customers to manage their billing in Stripe for Subscriptions
      allow_promotion_codes: true,
      billing_address_collection: "required",
    };

    if (session?.user?.email) {
       checkoutParams.customer_email = session.user.email;
    }
    if (user?.id) {
       checkoutParams.client_reference_id = user.id;
    }

    const checkoutSession = await stripe.checkout.sessions.create(checkoutParams);

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: "Secure payment system is temporarily unavailable." }, { status: 500 });
  }
}
