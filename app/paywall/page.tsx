"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { Navbar } from "@/components/layout/Navbar";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import {
  Lock,
  Unlock,
  Check,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Shield,
  CreditCard,
  CheckCircle2,
  LockKeyhole,
  Info
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

/**
 * PRODUCTION-GRADE PAYWALL
 * Standardized Tiered Pricing following BrandPrompt.txt
 */

function PaywallContent() {
  const { data: session, update: updateSession } = useSession();
  const searchParams = useSearchParams();
  const user = session?.user as any;
  const [isRedirecting, setIsRedirecting] = useState<string | null>(null);

  // Parse access levels
  const isEntry = user?.accessType === "ENTRY" || user?.entryPurchased;
  const isCore = !!user?.hasFullAccess;
  const isPro = user?.subscriptionStatus === "active";

  // Check for checkout status from URL params
  useEffect(() => {
    const status = searchParams.get("checkout");
    if (status === "success") {
      toast.success("Strategic Access Unlocked", {
        description: "Your account has been upgraded. Head to your dashboard to start."
      });
      updateSession(); // Refresh session to get new access rights
    } else if (status === "canceled") {
      toast.error("Checkout Canceled", {
        description: "No charges were made. You can try again when you're ready."
      });
    }
  }, [searchParams, updateSession]);

  async function handleCheckout(productType: string, addOnType?: string) {
    setIsRedirecting(productType + (addOnType || ""));
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productType, addOnType }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error("Payment Error", { description: data.error || "Failed to initiate checkout" });
      }
    } catch (error) {
      console.error(error);
      toast.error("Connection Error", { description: "Secure payment gateway is currently unavailable." });
    } finally {
      setIsRedirecting(null);
    }
  }

  const tiers = [
    {
      id: "ENTRY",
      name: "Entry Strategy",
      price: "19",
      period: "One-time",
      description: "Baseline financial overview .",
      features: [
        { text: "Net Income Breakdown", included: true },
        { text: "Full Expense Profile", included: true },
        { text: "Expanded PDF Report", included: false },
        { text: "Interactive Modeling", included: false },
        { text: "Scenario Comparison", included: false },
        { text: "AI Strategic Advisor", included: false },
      ],
      buttonText: isEntry ? "Active" : "Unlock Entry",
      disabled: isEntry || isCore,
      highlight: false
    },
    {
      id: "CORE",
      name: "Core Strategic Control",
      price: "127",
      period: "One-time",
      description: "Complete financial control system with full interactive modeling.",
      features: [
        { text: "Interactive Dashboard", included: true },
        { text: "Reality Risk Score", included: true },
        { text: "Full Financial Modeling", included: true },
        { text: "Live Scenario Comparison", included: false },
        { text: "AI Advisory", included: false },
        { text: "Unlimited Modeling history", included: false },
        { text: "AI Advisor Interaction", included: false },
      ],
      buttonText: isCore ? "Active" : isEntry ? "Complete Unlock" : "Unlock Everything",
      disabled: isCore,
      highlight: true
    },
    {
      id: "SUBSCRIPTION",
      name: "Subscription Plan",
      price: "19",
      period: "/month",
      description: "Add-on strategic intelligence powered by specialized AI.",
      features: [
        { text: "Direct AI Chat Access", included: true },
        { text: "Complex Scenario Analysis", included: true },
        { text: "Save Scenarios", included: true },
        { text: "PDF Reports", included: true },
        { text: "Unlimited AI Queries", included: true },
        { text: "Requires Core Unlock", included: true },
      ],
      buttonText: isPro ? "Active" : "Activate Pro",
      disabled: isPro,
      prerequisite: !isCore,
      highlight: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#111111] pt-20">
      <Navbar />

      <main className="flex-1 container max-w-6xl mx-auto px-4 py-16">

        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Secure Strategic Control</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Unlock Your <br className="hidden md:block" /> Financial Future
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-medium">
              Eliminate uncertainty with precision tools. Choose the level of insight you need to navigate your settlement.
            </p>
          </FadeIn>
        </div>

        {/* STRATEGIC NOTICE FOR NEW USERS - HIGH IMPORTANCE */}
        <FadeIn delay={0.2} className="mb-16">
          <div className="max-w-3xl mx-auto p-8 md:p-10 rounded-[2.5rem] bg-[#EAB308]/5 border-2 border-[#EAB308]/20 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-[0_20px_50px_rgba(234,179,8,0.05)] relative overflow-hidden group">
            {/* Animated Background Pulse */}
            <div className="absolute inset-0 bg-[#EAB308]/5 animate-pulse" />
            
            <div className="p-4 rounded-2xl bg-[#EAB308] text-white shadow-xl shadow-[#EAB308]/20 shrink-0 relative z-10">
              <Sparkles className="w-6 h-6 animate-spin-slow" />
            </div>
            <div className="relative z-10 text-center md:text-left">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#EAB308] mb-3">Critical Onboarding Instruction</p>
              <h4 className="text-xl font-black text-[#111111] mb-3 leading-tight">New Users: Read This Before Checkout</h4>
              <p className="text-sm text-zinc-600 font-bold leading-relaxed">
                To link your purchase correctly: You <span className="text-[#111111] underline decoration-[#EAB308] underline-offset-4 decoration-2">must enter the exact email address</span> you wish to use for your account on the Stripe checkout page. We will instantly deliver a secure password-setup link to that address once your payment is confirmed. Check your <span className="text-[#EAB308]">spam folder</span> if it doesn't arrive in your main inbox.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* PRICING GRID */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-24">
          {tiers.map((tier, idx) => (
            <FadeIn key={tier.id} delay={idx * 0.1} className={cn(
              "relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500",
              tier.highlight
                ? "bg-[#111111] text-white border-[#111111] shadow-[0_32px_80px_rgba(0,0,0,0.1)] ring-8 ring-zinc-50 scale-[1.02] z-10"
                : "bg-white border-zinc-100 hover:border-zinc-300 shadow-sm"
            )}>
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#16A34A] text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5" /> Most Trusted
                </div>
              )}

              <div className="mb-8">
                <h2 className={cn("text-2xl font-black mb-1", tier.highlight ? "text-white" : "text-[#111111]")}>{tier.name}</h2>
                <p className={cn("text-xs font-medium", tier.highlight ? "text-zinc-400" : "text-zinc-500")}>{tier.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className={cn("text-5xl font-black tracking-tight", tier.highlight ? "text-white" : "text-[#111111]")}>${tier.price}</span>
                <span className={cn("text-[10px] font-black uppercase tracking-widest", tier.highlight ? "text-zinc-500" : "text-zinc-400")}>
                  {tier.period}
                </span>
              </div>

              <div className="flex-1 space-y-6 mb-10">
                <ul className="space-y-4">
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} className={cn(
                      "flex items-start gap-3 text-xs font-bold leading-tight",
                      feature.included
                        ? (tier.highlight ? "text-zinc-200" : "text-zinc-700")
                        : "text-zinc-400/50"
                    )}>
                      {feature.included ? (
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-red-500 shrink-0" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                {tier.prerequisite && !isCore ? (
                  <div className="p-4 bg-zinc-50/50 border border-zinc-100/50 rounded-2xl mb-4 flex gap-3 items-start">
                    <Info className="w-4 h-4 text-zinc-400 shrink-0" />
                    <p className="text-[10px] font-bold text-zinc-400 leading-relaxed uppercase tracking-widest">
                      Requires Strategic Core Unlock to Activate.
                    </p>
                  </div>
                ) : null}

                <button
                  disabled={tier.disabled || !!isRedirecting || (tier.prerequisite && !isCore)}
                  onClick={() => handleCheckout(tier.id)}
                  className={cn(
                    "w-full h-14 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest transition-all active:scale-[0.98] shadow-sm",
                    tier.highlight
                      ? "bg-white text-[#111111] hover:bg-zinc-100"
                      : "bg-[#111111] text-white hover:bg-zinc-800",
                    (tier.disabled || (tier.prerequisite && !isCore)) && "opacity-40 cursor-not-allowed grayscale"
                  )}
                >
                  {isRedirecting === tier.id ? (
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      {tier.disabled ? <Shield className="w-4 h-4" /> : <CreditCard className="w-4 h-4" />}
                      {tier.buttonText}
                      {!tier.disabled && !(tier.prerequisite && !isCore) && <ArrowRight className="w-4 h-4 ml-1" />}
                    </>
                  )}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* TRUST SECTION */}
        <section className="pt-20 border-t border-zinc-50 text-center">
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300 mb-12">Secured Infrastructure</h3>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-30 grayscale pointer-events-none">
            <div className="text-2xl font-black italic tracking-tighter">STRIPE</div>
            <div className="text-2xl font-bold tracking-tight">SECURE</div>
            <div className="text-2xl font-black uppercase tracking-[0.2em]">PCI-DSS</div>
            <div className="text-2xl font-medium line-through">BANK-V2</div>
          </div>

          <div className="mt-20 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 text-left">
            <div className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100">
              <LockKeyhole className="w-8 h-8 text-[#111111] mb-4" />
              <h4 className="text-sm font-black uppercase tracking-wider mb-2">Privacy First Data</h4>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                Your financial metrics are encrypted and never shared. Strategic modeling is performed on-the-fly and persists only with your explicit saving.
              </p>
            </div>
            <div className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100">
              <CreditCard className="w-8 h-8 text-[#16A34A] mb-4" />
              <h4 className="text-sm font-black uppercase tracking-wider mb-2">Flexible Lifecycle</h4>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                Unlocks are one-time payments for permanent tool access. Subscriptions can be managed or canceled at any time via your secure Stripe billing portal.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-16 border-t border-zinc-50 bg-white">
        <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Image 
              src="/costly-logo.png" 
              alt="Costly Logo" 
              width={140} 
              height={36} 
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#111111] mb-1">Costly Financial Modeling</p>
            <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">© 2026 Precise Strategic Engine</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function PaywallPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-zinc-100 border-t-black rounded-full animate-spin" />
      </div>
    }>
      <PaywallContent />
    </Suspense>
  );
}
