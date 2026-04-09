# Complete Stripe Integration Guide for Costly (Beginner-Friendly)

This guide takes you step-by-step through setting up Stripe for the **Costly SaaS**, making sure the products match your exact `app/api/webhook/route.ts` architecture.

We will focus on **Test Mode** first, but everything here is identical for the **Live Mode** once you are ready.

---

## 1. Getting Your API Keys

You need APIs to communicate with Stripe safely.
1. Create an account at [Stripe.com](https://stripe.com).
2. Look at the top right of the dashboard. Make sure **"Test mode"** toggle is ON (it will turn orange/yellow).
3. On the left sidebar, click **"Developers"** -> **"API keys"**.
4. You will see a **Publishable key** and a **Secret key**.
5. Copy your **Secret key** (it looks like `sk_test_...`).
6. In your code project, open the `.env.local` (or `.env`) file. Put the key inside:
   ```env
   STRIPE_SECRET_KEY="sk_test_..."
   ```

---

## 2. Setting Up Your Products in Stripe

Since our code relies on **metadata**, this step is extremely important. By setting metadata on Stripe products, the Webhook code we just checked knows exactly *what* was bought without needing complex database mapping.

Go to your Stripe Dashboard -> **Products** -> **Add Product**.

### Product 1: Entry Product ($19)
- **Name**: Entry Calculator
- **Price**: $19 (One-Time)
- **CRITICAL STEP**: On the product/price creation page, look for **Additional Options** -> **Metadata**.
- Add the following exact Match:
  - **Key**: `productType`
  - **Value**: `ENTRY`
- Save.

### Product 2: Core Unlock ($127)
- **Name**: Core Dashboard Unlock
- **Price**: $127 (One-Time)
- **Metadata**:
  - **Key**: `productType`
  - **Value**: `CORE`
- Save.

### Product 3: Subscription ($19/month)
- **Name**: Pro Monthly Subscription
- **Price**: $19 (**Recurring - Monthly**)
- **Metadata**:
  - **Key**: `productType`
  - **Value**: `SUBSCRIPTION`
- Save.

### Product 4: Add-Ons
Create your Add-ons just like above. Ensure they are priced correctly as "One-Time", with the following exact metadata properties!

1. **Asset Split ($39)**
   - **Key 1**: `productType` -> `ADDON`
   - **Key 2**: `addOnType` -> `ASSET_SPLIT`
2. **Retirement Impact ($29)**
   - **Key 1**: `productType` -> `ADDON`
   - **Key 2**: `addOnType` -> `RETIREMENT`
3. **VA Disability ($29)**
   - **Key 1**: `productType` -> `ADDON`
   - **Key 2**: `addOnType` -> `VA_DISABILITY`
4. **Housing Scenario ($29)**
   - **Key 1**: `productType` -> `ADDON`
   - **Key 2**: `addOnType` -> `HOUSING`

---

## 3. Webhook Setup (How Stripe Talks to Your App)

When a payment succeeds, Stripe must ping your website silently via `/api/webhook`.

### For Testing Locally (Your Computer)
Because your computer runs on `localhost` (Stripe has no access to it directly over the internet), you use a tool called Stripe CLI.
1. Download the [Stripe CLI](https://stripe.com/docs/stripe-cli).
2. Open your terminal and run: `stripe login`
3. Then run:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook
   ```
4. The terminal will print a webhook secret that looks like `whsec_...`
5. Copy it and put it in your `.env`:
   ```env
   STRIPE_WEBHOOK_SECRET="whsec_xxxxx..."
   ```

### For Live Mode / Production
When you publish your site on Vercel or your hosting platform:
1. In the Live Stripe Dashboard -> **Developers** -> **Webhooks**.
2. Click **Add an endpoint**.
3. URL: `https://yourdomain.com/api/webhook`
4. Events to Listen For: Look for `checkout.session.completed` and add it.
5. Click **Add Endpoint**. 
6. Click the "Reveal" button under "Signing Secret" (it starts with `whsec_`).
7. Paste this live secret into your *Production Environment Variables* on Vercel as `STRIPE_WEBHOOK_SECRET`. Don't forget the live `STRIPE_SECRET_KEY` (`sk_live_...`) as well.

---

## 4. How to Test Your Payments Safely

Now that Webhooks and Products exist, testing is easy and 100% free while running in "Test Mode".

1. Start your Next.js app: `npm run dev`
2. Make sure the `stripe listen ...` command is actively running in a *separate* terminal window.
3. Grab the **Payment Link** representing your `$127 Core Unlock` from the Stripe Dashboard Products page (Stripe generates Payment Links automatically for Test Mode products).
4. Open the Payment Link in your browser and check out using Stripe's fake test cards.
   - Example fake card: type `4242 4242 4242 4242` for the card number, and random future dates/CVC.
5. Once payment completes, check your `stripe listen` terminal. You will see a `200 OK` response.
6. Open your database (via Prisma Studio) -> `npx prisma studio`. Provide proof visually that the users table `hasFullAccess` just flipped to `true`.

You are completely integrated!
