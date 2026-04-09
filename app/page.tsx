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
  Lock
} from "lucide-react";

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
              See the Real Financial Impact of Divorce — <span className="text-zinc-400">Before It Happens</span>
            </h1>
          </SlideUp>

          <SlideUp yOffset={20} delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
              Understand child support, expenses, and your future income in minutes. Avoid costly mistakes and make smarter decisions for your future.
            </p>
          </SlideUp>

          <SlideUp yOffset={20} delay={0.3}>
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center">
              <Button asChild size="lg" className="bg-[#111111] hover:bg-zinc-800 text-white rounded-2xl px-10 h-16 text-sm font-black uppercase tracking-widest w-full sm:w-auto group shadow-2xl shadow-black/10 transition-all active:scale-95">
                <Link href="/run" className="flex items-center gap-3">
                  Run My Numbers
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">100% Private Engine</p>
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
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Clarity in 3 simple steps</h2>
                <p className="mt-4 text-zinc-600 text-lg">Stop relying on expensive lawyer estimates. Get precise numbers that show you exactly where you stand.</p>
              </div>
            </SlideUp>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <SlideUp delay={0.1} className="relative z-10 flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-zinc-300 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
                <div className="w-20 h-20 rounded-3xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center mb-8">
                  <Calculator className="w-8 h-8 text-[#111111]" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">1. Enter Numbers</h3>
                <p className="mt-4 text-sm text-zinc-500 font-medium leading-relaxed">Input your income and expenses completely anonymously into our precision engine.</p>
              </SlideUp>

              <SlideUp delay={0.2} className="relative z-10 flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-zinc-300 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
                <div className="w-20 h-20 rounded-3xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-8">
                  <Eye className="w-8 h-8 text-[#16A34A]" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">2. Real Vision</h3>
                <p className="mt-4 text-sm text-zinc-500 font-medium leading-relaxed">Instantly view child support estimates and your personalized post-divorce reality score.</p>
              </SlideUp>

              <SlideUp delay={0.3} className="relative z-10 flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-[#111111] text-white transition-all shadow-2xl hover:-translate-y-1">
                <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center mb-8">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">3. Decisive Action</h3>
                <p className="mt-4 text-sm text-zinc-400 font-medium leading-relaxed">Negotiate with confidence. Use hard data to protect your wealth and your future.</p>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-24 bg-zinc-50">
          <div className="container">
            <SlideUp>
              <div className="max-w-3xl mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The difference between guessing and knowing</h2>
              </div>
            </SlideUp>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Avoid costly mistakes", text: "A 10% miscalculation in child support or spousal maintenance could cost you tens of thousands over time. Know your exact liability.", color: "border-[#DC2626]/20 bg-[#DC2626]/5 text-[#DC2626]" },
                { title: "Scenario Comparison", text: "Model primary custody, joint custody, and different asset split ratios to see how they impact your true bottom line in real time.", color: "border-zinc-200 bg-white text-[#111111]" },
                { title: "Empower Your Negotiations", text: "Stop relying entirely on your lawyer's guesswork. Walk into mediation with hard numbers and confidence.", color: "border-[#16A34A]/20 bg-[#16A34A]/5 text-[#16A34A]" },
                { title: "Your 'Reality Score'", text: "Instantly see the critical ratio of your remaining discretionary income after support obligations to ensure you can afford your new life.", color: "border-zinc-200 bg-white text-[#111111]" },
              ].map((benefit, idx) => (
                <SlideUp key={idx} delay={0.1 * idx}>
                  <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center border ${benefit.color}`}>
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-zinc-500 leading-relaxed">{benefit.text}</p>
                  </div>
                </SlideUp>
              ))}
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
              <p className="text-[13px] mr-6 text-center md:text-right text-zinc-400">
                𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖉 𝖇𝖞 <a href="https://ismaeeldev.netlify.app" target="_blank" rel="noopener noreferrer" style={{ color: "#ff0000", fontWeight: "700" }} className="hover:opacity-80 transition-opacity">𝕸𝖚𝖍𝖆𝖒𝖒𝖆𝖉 𝖎𝖘𝖒𝖆𝖊𝖊𝖑</a>
              </p>
            </div>

            <div className="flex gap-6 text-sm font-medium text-zinc-600">
              <Link href="#" className="hover:text-black">Privacy</Link>
              <Link href="#" className="hover:text-black">Terms</Link>
              <Link href="#" className="hover:text-black">Contact</Link>
            </div>

          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full p-4 bg-white/95 backdrop-blur-sm border-t border-zinc-200 z-50 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
        <Button asChild size="lg" className="w-full bg-[#111111] text-white rounded-full h-14 text-lg">
          <Link href="/run">Run My Numbers</Link>
        </Button>
      </div>
    </div>
  );
}
