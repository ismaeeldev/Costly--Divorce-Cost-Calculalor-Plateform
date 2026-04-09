import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { SlideUp } from "@/components/animations/SlideUp";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  Calculator,
  Eye,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Users,
  CheckCircle2,
  Lock,
  BrainCircuit,
  Sparkles,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

// Using Lucide icons to avoid any missing imports or issues with the original design logic
export default function LandingPage() {


  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] text-[#111111] overflow-x-hidden pt-16">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative px-4 pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center">
          {/* Subtle background glow effect for an upscale SaaS look */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-100/50 rounded-full blur-[100px] -z-10 pointer-events-none" />

          <SlideUp yOffset={20}>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-zinc-100 border border-zinc-200 text-sm font-medium text-zinc-600">
              <span className="flex w-2 h-2 rounded-full bg-[#EAB308]"></span>
              Financial Clarity for Divorcing Dads
            </div>
          </SlideUp>

          <SlideUp yOffset={20} delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
              Get Instant Clarity on Your <span className="text-zinc-400">Child Support Liability</span>
            </h1>
          </SlideUp>

          <SlideUp yOffset={20} delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
              Calculate your estimated monthly child support in 60 seconds. Unlock full financial modeling for expenses, future income, and scenario testing.
            </p>
          </SlideUp>

          <SlideUp yOffset={20} delay={0.3}>
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center">
              <Button asChild size="lg" className="bg-[#111111] hover:bg-zinc-800 text-white rounded-2xl px-10 h-16 text-sm font-black uppercase tracking-widest w-full sm:w-auto group shadow-2xl shadow-black/10 transition-all active:scale-95">
                <Link href="/run" className="flex items-center gap-3">
                  Preview My Numbers
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Free Liability Vision</p>
              </div>
            </div>
          </SlideUp>
        </section>

        {/* SOCIAL PROOF */}
        <FadeIn delay={0.5}>
          <section className="border-y border-zinc-100 bg-zinc-50/50 py-10">
            <div className="container">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center text-zinc-400 font-bold text-xs ring-1 ring-black/5 shadow-sm">
                        <Users className="w-4 h-4" />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-lg">1,200+</p>
                    <p className="text-xs text-zinc-500 font-medium">Trusted Users</p>
                  </div>
                </div>

                <div className="hidden md:block w-px h-12 bg-zinc-200"></div>

                <div className="text-left flex items-start gap-4">
                  <ShieldCheck className="w-10 h-10 text-[#16A34A] shrink-0" />
                  <div>
                    <p className="font-bold text-lg">Bank-Level Privacy</p>
                    <p className="text-xs text-zinc-500 font-medium whitespace-nowrap">Your data is never shared</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-white">
          <div className="container">
            <SlideUp>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Financial vision in 3 simple steps</h2>
                <p className="mt-4 text-zinc-600 text-lg">Stop relying on expensive lawyer guesswork. Get precise numbers that show you exactly where you stand.</p>
              </div>
            </SlideUp>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <SlideUp delay={0.1} className="relative z-10 flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-zinc-300 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
                <div className="w-20 h-20 rounded-3xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center mb-8">
                  <Calculator className="w-8 h-8 text-[#111111]" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">1. Enter 3 Metrics</h3>
                <p className="mt-4 text-sm text-zinc-500 font-medium leading-relaxed">Input your income, custody percentage, and basic expenses into our precision engine.</p>
              </SlideUp>

              <SlideUp delay={0.2} className="relative z-10 flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-zinc-300 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
                <div className="w-20 h-20 rounded-3xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-8">
                  <Eye className="w-8 h-8 text-[#16A34A]" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">2. Support Vision</h3>
                <p className="mt-4 text-sm text-zinc-500 font-medium leading-relaxed">Instantly view your estimated child support obligations — no credit card or login required.</p>
              </SlideUp>

              <SlideUp delay={0.3} className="relative z-10 flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-[#111111] text-white transition-all shadow-2xl hover:-translate-y-1">
                <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center mb-8">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">3. Full Strategy</h3>
                <p className="mt-4 text-sm text-zinc-400 font-medium leading-relaxed">Upgrade to unlock scenario modeling, spousal maintenance analysis, and your complete Reality Score.</p>
              </SlideUp>
            </div>
          </div>
        </section>



        {/* PRICING SECTION */}
        <section className="py-24 bg-white border-t border-zinc-100">
          <div className="container">
            <SlideUp>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16A34A] bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 mb-6 inline-block">Simple, Transparent Pricing</span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight">Choose your path to clarity</h2>
              </div>
            </SlideUp>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* FREE */}
              <SlideUp delay={0.1}>
                <div className="p-8 rounded-[2rem] border border-zinc-100 bg-white h-full flex flex-col">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2">Free Preview</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-black">$0</span>
                    <span className="text-zinc-400 text-sm font-bold uppercase tracking-widest">Forever</span>
                  </div>
                  <div className="space-y-4 mb-10 flex-1">
                    {[
                      { text: "Child Support Estimate", included: true },
                      { text: "State-Specific Formulas", included: true },
                      { text: "Instant Results", included: true },
                      { text: "Net Income Breakdown", included: false },
                      { text: "Interactive Dashboard", included: false },
                      { text: "Reality Risk Score", included: false },
                    ].map((f, i) => (
                      <div key={i} className={cn("flex items-center gap-3", !f.included && "opacity-40")}>
                        {f.included ? (
                          <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 shrink-0" />
                        )}
                        <span className="text-xs font-bold text-zinc-600 uppercase tracking-wide">{f.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full border-zinc-200 hover:bg-zinc-50 rounded-xl h-12 font-black uppercase tracking-widest text-xs">
                    <Link href="/run">Start Free</Link>
                  </Button>
                </div>
              </SlideUp>

              {/* ENTRY */}
              <SlideUp delay={0.2}>
                <div className="p-8 rounded-[2rem] border border-zinc-200 bg-zinc-50/50 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-4 py-1 bg-[#16A34A] text-white text-[10px] font-black uppercase tracking-widest rounded-bl-xl">Best for Beginners</div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2">Quick Review</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-black">$19</span>
                    <span className="text-zinc-400 text-sm font-bold uppercase tracking-widest">One-Time</span>
                  </div>
                  <div className="space-y-4 mb-10 flex-1">
                    {[
                      { text: "Net Income Breakdown", included: true },
                      { text: "Full Expense Profile", included: true },
                      { text: "Liability Breakdown", included: true },
                      { text: "Interative Dashboard", included: false },
                      { text: "Reality Risk Score", included: false },
                      { text: "Scenario Comparison", included: false },
                    ].map((f, i) => (
                      <div key={i} className={cn("flex items-center gap-3", !f.included && "opacity-40")}>
                        {f.included ? (
                          <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 shrink-0" />
                        )}
                        <span className="text-xs font-bold text-zinc-600 uppercase tracking-wide">{f.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-[#111111] text-white hover:bg-zinc-800 rounded-xl h-12 font-black uppercase tracking-widest text-xs">
                    <Link href="/paywall">Unlock Entry</Link>
                  </Button>
                </div>
              </SlideUp>

              {/* CORE */}
              <SlideUp delay={0.3}>
                <div className="p-8 rounded-[2rem] border-2 border-[#111111] bg-[#111111] text-white h-full flex flex-col shadow-2xl shadow-black/20 text-white">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2">Strategic Unlock</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-black">$127</span>
                    <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Full Access</span>
                  </div>
                  <div className="space-y-4 mb-10 flex-1">
                    {[
                      { text: "Interactive Dashboard", included: true },
                      { text: "Reality Risk Score", included: true },
                      { text: "Full Financial Modeling", included: true },
                      { text: "Scenario Comparison", included: true },
                      { text: "AI Advisory Access", included: true },
                      { text: "Unlimited Simulations", included: true },
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-xs font-bold text-zinc-300 uppercase tracking-wide">{f.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-white text-black hover:bg-zinc-50 rounded-xl h-12 font-black uppercase tracking-widest text-xs transition-colors">
                    <Link href="/paywall">Get Full Access</Link>
                  </Button>
                </div>
              </SlideUp>
            </div>

            <div className="mt-16 bg-zinc-50 border border-zinc-200 rounded-[2rem] p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
                <BrainCircuit className="w-8 h-8 text-[#111111]" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-black uppercase tracking-tight mb-1">Looking for ongoing AI support?</h4>
                <p className="text-sm text-zinc-500">After unlocking **Core**, you can subscribe for **$19/month** to access our **AI Strategic Advisor**. Save unlimited scenarios, re-run simulations at any time, and get instant answers to your complex modeling questions.</p>
              </div>
              <Button variant="outline" asChild className="border-[#111111] text-[#111111] hover:bg-zinc-100 rounded-xl px-6 h-12 font-black uppercase tracking-widest text-xs whitespace-nowrap">
                <Link href="/paywall">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* TRUST UI */}
        <section className="py-24 bg-[#111111] text-white overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#EAB308]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="container relative z-10 flex flex-col items-center text-center">
            <Lock className="w-16 h-16 text-zinc-400 mb-8" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Your data is 100% private.</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mb-12">
              Costly uses secure encryption. We don't ask for your name or social security number, and your data is never sold.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-70">
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">256-bit</p>
                <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">Encryption</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">Zero</p>
                <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">Name Required</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">Anonymous</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">Delete</p>
                <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">Any Time</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 bg-white text-center">
          <div className="container max-w-4xl">
            <SlideUp>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to see your real numbers?</h2>
              <p className="text-xl text-zinc-500 mb-10">Stop guessing. Take 5 minutes to get the financial clarity you need.</p>
              <Button asChild size="lg" className="bg-[#111111] hover:bg-zinc-800 text-white rounded-full px-10 h-16 text-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all">
                <Link href="/run">
                  Run My Numbers Now
                </Link>
              </Button>
            </SlideUp>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-zinc-50 py-12 pb-28 sm:pb-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-100 hover:opacity-100">
            <Link href="/" className="group flex items-center transition-all">
              <Image
                src="/costly-logo.png"
                alt="Costly Logo"
                width={200}
                height={40}
                className="h-12 w-auto object-contain transition-opacity group-hover:opacity-100"
              />
            </Link>

            <div className="flex flex-col items-center md:items-end gap-1">
              <p className="text-sm font-medium text-zinc-600 text-center md:text-left">
                &copy; {new Date().getFullYear()} Costly. Financial clarity for your future.
              </p>
            </div>

            <div className="flex gap-6 text-sm font-medium text-zinc-600">
              <Link href="/privacy" className="hover:text-black">Privacy</Link>
              <Link href="/terms" className="hover:text-black">Terms</Link>
              <Link href="/contact" className="hover:text-black">Contact</Link>
            </div>

          </div>
        </div>
      </footer>

      <div className="sm:hidden fixed bottom-0 left-0 w-full p-4 bg-white/95 backdrop-blur-sm border-t border-zinc-200 z-50 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
        <Button asChild size="lg" className="w-full bg-[#111111] text-white rounded-full h-14 text-lg">
          <Link href="/run">Preview My Numbers</Link>
        </Button>
      </div>
    </div>
  );
}
