"use client";

import { Navbar } from "@/components/layout/Navbar";
import { FadeIn } from "@/components/animations/FadeIn";
import { LegalDisclaimer } from "@/components/legal/LegalDisclaimer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white font-inter text-[#111111] selection:bg-[#111111] selection:text-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <FadeIn>
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Last Updated: April 9, 2026</p>
          </div>

          {/* REQUIRED LEGAL SIGNAL */}
          <LegalDisclaimer />

          <div className="space-y-12 text-zinc-600 font-bold leading-extraloose">
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-[#111111] tracking-tight">1. Information We Collect</h2>
              <p>
                Costly operates as a high-fidelity financial modeling platform. To provide our analysis, we collect data you voluntarily input into our calculators, including income, expenses, and demographic details. If you create an account, we store your email address and authentication credentials securely via encrypted providers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-[#111111] tracking-tight">2. Payment Processing</h2>
              <p>
                Financial transactions are handled exclusively by Stripe, our secure payment gateway. Costly does not store your credit card numbers or sensitive billing data on our own servers. Your billing information is managed subject to the Stripe Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-[#111111] tracking-tight">3. Data Usage & Security</h2>
              <p>
                We use your data strictly to generate financial projections and model scenarios. We do not sell, rent, or trade your personal information to third-party marketers. All data transmission is protected by 256-bit SSL encryption.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-[#111111] tracking-tight">4. Cookies & Tracking</h2>
              <p>
                We use essential cookies to maintain your session and security. We may use anonymized analytics to improve the platform's performance and user experience.
              </p>
            </section>
          </div>
        </FadeIn>
      </main>

      <footer className="border-t border-zinc-100 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">© 2026 Costly – Professional Strategic Modeling</p>
          <div className="flex gap-8">
             <a href="/" className="text-[10px] font-black uppercase tracking-widest text-[#111111] hover:text-zinc-500 transition-colors">Home</a>
             <a href="/contact" className="text-[10px] font-black uppercase tracking-widest text-[#111111] hover:text-zinc-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
