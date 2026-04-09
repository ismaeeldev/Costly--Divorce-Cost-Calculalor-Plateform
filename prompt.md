// Day  3
[PASTE GLOBAL MASTER PROMPT]

[ADD BRANDING BLOCK]

Task:
Update form submission flow.

Change:
- After submit → redirect to /results (NOT paywall)

Also:
- Store input data in:
  - localStorage OR context

IMPORTANT:
- This data will be reused for:
  - results
  - scenarios


// Day 4 

[PASTE GLOBAL MASTER PROMPT]

Task:
Build calculation engine.

File:
- /lib/calculator.ts

Functions:
- calculateTax
- calculateSupport
- calculateExpenses
- calculateRealityScore

Then:
- Connect API route: /api/calculate

Return:
- full result object

IMPORTANT:
- Handle division by zero
- Clean reusable functions

//Day 5

[PASTE GLOBAL MASTER PROMPT]

[ADD BRANDING BLOCK]

Task:
Build Results Screen (FREE).

Page:
- /app/results/page.tsx

Display:
1. Monthly obligation
2. Annual impact
3. Net income

3. Visual Indicator:
- Green <40%
- Yellow 40–70%
- Red >70%

UI:
- Large number cards
- Color-coded indicator bar or badge

Add Explanation (IMPORTANT):
- Short text under results:
  Example:
  "Based on your inputs, this is your estimated monthly obligation and financial impact."

CTA:
- "Compare Scenarios"

Navigation:
→ /scenarios

Design:
- Clean, high-trust UI
- Not overwhelming

IMPORTANT:
- This page builds trust → must feel valuable


// day 5.5
[PASTE GLOBAL MASTER PROMPT]

[ADD BRANDING BLOCK]

Task:
Build Scenario Comparison Preview (FREE).

Page:
- /app/scenarios/page.tsx

Logic:
Generate 2–3 variations:
- 0% custody
- 40%
- 50%

Display:
For each scenario:
- Custody %
- Monthly support
- Net remaining income
- Reality Score (colored)

UI:
- Card-based comparison
- Side-by-side or stacked (mobile)

Add CTA:
- "Unlock Full Access"

Message:
- "Test unlimited scenarios and see your full financial picture"

IMPORTANT:
- This page is PRE-PAYWALL → must increase desire

Do NOT:
- Allow editing yet (locked feature)


// Day 6 

[PASTE GLOBAL MASTER PROMPT]

[ADD BRANDING BLOCK HERE]

Task:
Build high-converting paywall page.

Page:
- /app/results/page.tsx

UI:
- Show visible:
  - Monthly support
- Blurred:
  - Dashboard
  - Reality Score (important teaser)

CTA:
- "Unlock Full Dashboard — $127"

Design:
- Strong contrast (black/white)
- Use blur overlay elegantly
- Highlight locked features

Psychology:
- Create urgency + curiosity

IMPORTANT:
- This page drives revenue → must look premium


// Day 6 .5

[PASTE GLOBAL MASTER PROMPT]

[ADD BRANDING BLOCK]

Task:
Update Paywall messaging (now AFTER scenarios).

Page:
- /app/paywall/page.tsx (or reuse results CTA modal)

Content:

Headline:
"Unlock Your Full Financial Picture"

What they get:
- Full dashboard
- Unlimited scenario testing
- Advanced recalculations

CTA:
- "Unlock Full Dashboard — $127"

Design:
- Strong contrast
- Highlight locked features

IMPORTANT:
- Reference what they already saw:
  "You’ve seen your estimate — now unlock full control"


// Day 7

[PASTE GLOBAL MASTER PROMPT]

Task:
Build Stripe webhook handler.

API:
- /app/api/webhook/route.ts

Features:
- Handle checkout.session.completed
- Create user if not exists
- Save payment
- Update access:
  - hasFullAccess = true

Also:
- Store Stripe event (prevent duplicates)

CRITICAL:
- Use raw body parsing
- Verify Stripe signature

// Day 7.5

[PASTE GLOBAL MASTER PROMPT]

[ADD BRANDING BLOCK HERE]

Task:
Build authentication UI (Login + Signup).

Pages:
- /app/login/page.tsx
- /app/signup/page.tsx

Design:
- Follow Costly branding exactly
- Centered card layout
- Clean, minimal SaaS style
- Mobile-first

Signup Page:
- Fields:
  - Email
  - Password
  - Confirm Password
- Validation using Zod
- Show errors clearly

Login Page:
- Fields:
  - Email
  - Password

UX:
- Loading state on submit
- Error messages (invalid credentials, etc.)
- Success redirect → /dashboard

Components:
- Reusable AuthCard
- Input fields using shadcn

Security:
- Do NOT expose sensitive data
- Use API routes for auth

Navigation:
- Add links:
  - "Already have an account? Login"
  - "Don’t have an account? Sign up"

Animations:
- Subtle fade-in using Framer Motion

IMPORTANT:
- Must feel premium (not default form)
- Must match landing page design exactly

FINAL:
Ensure this matches the existing Costly design system exactly.
Do not introduce new colors, spacing, or styles.
🔐 BONUS: PRO SaaS BEHAVIOR (IMPORTANT)
👉 After Payment Flow

When user pays:

Stripe webhook creates user
You:
Either auto-login OR
Send them to:
👉 /signup?prefill=email
💡 BEST PRACTICE (ADVANCED)

👉 Use this flow:

Option A (Simple - Good for MVP)
After payment → redirect to /login
Option B (Better UX 🚀)
Auto-create account
Send magic link email

// Day 8 

[PASTE GLOBAL MASTER PROMPT]

[ADD BRANDING BLOCK]

Task:
Build premium SaaS dashboard.

Page:
- /app/dashboard/page.tsx

Sections:

1. 🔴 Reality Score (TOP PRIORITY)
   - Large %
   - Color-coded:
     - Green <40%
     - Yellow 40–70%
     - Red >70%
   - Label:
     - Stable / Moderate strain / High risk

2. Cards:
   - Income Breakdown
   - Child Support
   - Expenses
   - Disposable Income

Design:
- Grid layout
- Card-based UI
- Clean spacing

Animations:
- Subtle card entrance animations

IMPORTANT:
- Reality Score must dominate visually
- This is the product’s MAIN feature


// Day 8.5      

[PASTE GLOBAL MASTER PROMPT]

[ADD BRANDING BLOCK]

Task:
Enhance dashboard interactivity.

Page:
- /app/dashboard/page.tsx

NEW FEATURE:
Editable Inputs:
- Income
- Custody %
- Expenses

UI:
- Sliders or input fields

Behavior:
- On change → recalculate instantly

IMPORTANT:
- Do NOT reload page
- Use client-side state + calculation engine

Goal:
- Make dashboard interactive tool (not static)


// Day 9 
[PASTE GLOBAL MASTER PROMPT]

Task:
Split scenario logic into:

1. FREE preview (no DB save)
2. PAID full scenarios (saved in DB)

Logic:
- Reuse same generator
- Only allow saving if:
  user.hasFullAccess === true

IMPORTANT:
- Avoid duplication of logic

// day 9.5
[PASTE GLOBAL MASTER PROMPT]

Task:
Split scenario logic into:

1. FREE preview (no DB save)
2. PAID full scenarios (saved in DB)

Logic:
- Reuse same generator
- Only allow saving if:
  user.hasFullAccess === true

IMPORTANT:
- Avoid duplication of logic

// Day 10

[PASTE GLOBAL MASTER PROMPT]

[ADD BRANDING BLOCK HERE]

Task:
Design scenario comparison UI.

Components:
- ScenarioCard

UI:
- Each scenario in a card
- Show:
  - Custody %
  - Support
  - Remaining income
  - Reality Score (colored)

UX:
- Easy comparison
- Highlight best/worst scenario

IMPORTANT:
- Must feel like financial decision tool

// Day 11

[PASTE GLOBAL MASTER PROMPT]

Task:
Add-ons system.

Features:
- Unlock modules
- Store in DB

Add-ons:
- Asset Split
- Retirement
- VA Disability
- Housing

Logic:
- Conditional rendering

IMPORTANT:
- Scalable structure

// Day 12

[PASTE GLOBAL MASTER PROMPT]

Task:
Stripe subscription.

Features:
- $19/month
- Enable scenario saving

Handle:
- subscription.created
- subscription.updated

Update:
- user.subscriptionStatus

// Day 13

[PASTE GLOBAL MASTER PROMPT]

[ADD BRANDING BLOCK HERE]

Task:
Build account page UI.

Page:
- /app/account/page.tsx

Sections:
- Saved scenarios
- Add-ons
- Subscription status

Design:
- Clean SaaS dashboard style
- Card sections

IMPORTANT:
- Consistent with dashboard UI

// Day 14
[PASTE GLOBAL MASTER PROMPT]

Task:
Production optimization.

Checklist:
- Loading states
- Error boundaries
- Mobile responsiveness
- Performance optimization
- SEO basics

Add:
- Skeleton loaders
- Transitions

Ensure:
- No UI inconsistency


/run (input)
   ↓
/results (FREE results + indicator + explanation)
   ↓
/scenarios (FREE comparison preview)
   ↓
/paywall (unlock)
   ↓
/dashboard (full access)