# Costly - Financial Clarity for a New Future

![Costly Logo](/public/costly-logo.png)

**Costly** is a premium Divorce Cost Calculator platform designed to provide financial clarity for individuals navigating the complexities of divorce. Built with a focus on privacy, precision, and ease of use, Costly helps users understand the real financial impact of divorce—before it happens—enabling smarter decisions and more confident negotiations.

## 🚀 Key Features

### 📊 Precision Financial Engine
- **Child Support Estimates**: Instant calculations based on income and custody arrangements.
- **Spousal Maintenance (Alimony)**: Accurate projections of future liability.
- **Reality Score**: A unique metric that analyzes your post-divorce discretionary income to ensure financial sustainability.

### 🔄 Scenario Comparison Workbench
- Save and model multiple outcomes (e.g., primary vs. joint custody).
- Side-by-side comparison of net delta effects.
- Dynamic adjustments for assets, retirement accounts, and housing.

### 🤖 AI Advisor
- Powered by OpenAI, the built-in advisor provides instant answers to common divorce-related financial questions.
- Integrated directly into your dashboard for immediate guidance.

### 🛡️ Bank-Level Privacy
- **100% Anonymous**: We never ask for your name or Social Security Number.
- **Encrypted Data**: 256-bit encryption ensures your data remains yours alone.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js 14](https://nextjs.org/) (App Router), [Tailwind CSS](https://tailwindcss.com/)
- **Logic & Animations**: [Framer Motion](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/)
- **Database & ORM**: [Prisma](https://www.prisma.io/) with [PostgreSQL](https://www.postgresql.org/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Payments**: [Stripe Integration](https://stripe.com/)
- **AI Integration**: [OpenAI API](https://openai.com/)
- **Email**: SMTP integration for authentication and reports.

---

## 🏁 Getting Started

### Prerequisites

- Node.js 18.x or higher
- A PostgreSQL database (e.g., [Neon](https://neon.tech/))
- Stripe Account (for payments)
- OpenAI API Key (for AI Advisor)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ismaeeldev/Costly--Divorce-Cost-Calculalor-Plateform.git
   cd divorce_calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   # Database
   DATABASE_URL="your_postgresql_url"
   DIRECT_URL="your_direct_postgresql_url"

   # Authentication
   NEXTAUTH_SECRET="your_nextauth_secret"
   NEXTAUTH_URL="http://localhost:3000"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"

   # Stripe
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_WEBHOOK_SECRET="whsec_..."
   STRIPE_PRICE_ID_ENTRY="..."
   STRIPE_PRICE_ID_CORE="..."
   STRIPE_PRICE_ID_SUBSCRIPTION="..."

   # AI
   OPENAI_API_KEY="sk-..."

   # Email (SMTP)
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="587"
   SMTP_USER="your_email@gmail.com"
   SMTP_PASS="your_app_password"
   SMTP_FROM="your_email@gmail.com"
   ```

4. **Initialize Database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖉 𝖇𝖞 [𝕸𝖚𝖍𝖆𝖒𝖒𝖆𝖉 𝖎𝖘𝖒𝖆𝖊𝖊𝖑](https://ismaeeldev.netlify.app)
> **Branding developed by Muhammad Ismaeel**
