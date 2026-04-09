# Project Feature Report: Costly Platform
**Version:** 1.0.0 | **Product:** High-Fidelity Strategic Divorce Calculator

---

## 1. Executive Summary
**Costly** is a premium, white-labeled SaaS platform designed to transform complex divorce financial data into actionable strategic insights. Moving beyond simple calculators, it provides a comprehensive "Command Center" for users to model scenarios, assess long-term sustainability via the **Reality Score**, and generate professional-grade strategic reports.

---

## 2. Tiered Feature Architecture

### 🟢 FREE TIER: The Baseline Signal
*   **State-Aware Estimation**: Real-time calculation based on regional multipliers (all 50 US States supported).
*   **Core Input Engine**: Capture of gross annual income (self & spouse), children count, and custody percentages.
*   **"Behind the Glass" Preview**: High-fidelity blurred dashboard preview to drive premium conversion.
*   **Financial Delta**: Immediate baseline estimate of monthly child support obligations.

### 🔵 ENTRY TIER: The Net Breakdown
*   **Net Financial Transparency**: Detailed breakdown of post-tax net income and projected post-divorce expenses.
*   **Wealth Tracking**: Basic visualization of net cash flow position.
*   **Payment Integration**: Secure one-time unlock via Stripe.

### 🔥 CORE STRATEGIC TIER: The Command Center
*   **Interactive Scenario Workbench**: Real-time slider-based modeling for "What-If" scenarios.
*   **Proprietary Reality Score**: A dominant, color-coded health metric (Green/Yellow/Red) assessing the long-term feasibility of a chosen financial path.
*   **Scenario Library**: Save and compare multiple separation models side-by-side to find the optimal outcome.
*   **AI Strategic Advisor**: Context-aware AI chat that analyzes current scenario data to provide strategic feedback and "red flag" alerts.
*   **Professional PDF Reports**: One-click generation of a multi-page professional report for legal or personal preparation.

---

## 3. Core Calculation Engine
*   **State-Specific Guideline Weighting**: Leverages regional multipliers to align with local support guidelines.
*   **Dynamic Custody Modeling**: Adjusts obligations based on overnights and primary/joint custody percentages.
*   **Strategic Expense Modeling**: Models post-split lifestyle costs vs. income to determine "Reality Scores."

---

## 4. Professional Infrastructure

### 🛡️ Legal & Compliance
*   **Unified Disclosure System**: Prominent "Not Legal Advice" disclaimers across all critical touchpoints.
*   **Privacy & Terms Suite**: Documented data handling and usage policies following industry standards.
*   **Data Encryption**: 256-bit secure transport for all financial inputs.

### ✉️ Communication & Support
*   **Premium Contact System**: Integrated support form with success-confirmation logic.
*   **Admin Email Automation**: Sophisticated HTML email delivery to the platform owner for all user inquiries.

### 🔑 Authentication
*   **NextAuth.js Integration**: Secure Credentials-based login and session management.
*   **Subscription Persistence**: Global access tracking across the user's account lifecycle.

---

## 5. Technical Stack & UX Standards
*   **Framework**: Next.js 14+ (App Router).
*   **Styling**: Tailwind CSS v4 using the **Costly Premium Theme** (#111111).
*   **Animations**: Framer Motion for high-end micro-interactions (FadeIn, SlideUp, Hover-Reveal).
*   **UI Foundation**: Radix UI (Headless components) with custom stability patches for scrollbar layout shifts.
*   **Design Language**: Card-based, ultra-rounded (`rounded-[2.5rem]`), glassmorphism overlays.

---

## 6. Strategic Monetization Model
*   **Stripe Checkout Integration**: Secure processing for one-time unlocks and core subscriptions.
*   **Add-on Micro-services**: Integrated modules for specialized calculations (Asset Split, Retirement, Housing Impact, etc.).

---

## 7. Technical Configuration & Environment
To ensure a successful transition to production, the following environment variables must be configured in the deployment environment (e.g., Vercel, AWS).

### 🗄️ Database (Prisma/PostgreSQL)
```bash
DATABASE_URL="your_postgresql_connection_string"
DIRECT_URL="your_direct_postgresql_connection_string"
```

### 🔑 Authentication (NextAuth)
```bash
NEXTAUTH_SECRET="your_secure_random_hash"
NEXTAUTH_URL="https://yourdomain.com"
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
```

### 💳 Payment Integration (Stripe)
```bash
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Price Identifiers
STRIPE_PRICE_ID_ENTRY="price_..."
STRIPE_PRICE_ID_CORE="price_..."
STRIPE_PRICE_ID_SUBSCRIPTION="price_..."

# Add-on Identifiers
STRIPE_PRICE_ID_ADDON_ASSET="price_..."
STRIPE_PRICE_ID_ADDON_RETIREMENT="price_..."
STRIPE_PRICE_ID_ADDON_VA="price_..."
STRIPE_PRICE_ID_ADDON_HOUSING="price_..."
```

### ✉️ Communication (SMTP)
```bash
SMTP_HOST="smtp.provider.com"
SMTP_PORT="587"
SMTP_SECURE="false" # false for 587, true for 465
SMTP_USER="sender@yourdomain.com"
SMTP_PASS="your_secure_password"
SMTP_FROM="Costly <noreply@yourdomain.com>"
```

### 🤖 Intelligence (AI Strategic Advisor)
```bash
OPENAI_API_KEY="sk-..."
```

---
*Developed by Muhammad Ismaeel – Professional Strategic Implementation*
