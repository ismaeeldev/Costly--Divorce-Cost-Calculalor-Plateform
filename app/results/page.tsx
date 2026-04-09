"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCalculator } from "@/lib/store/CalculatorContext";
import { Navbar } from "@/components/layout/Navbar";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, AlertCircle, Lock } from "lucide-react";
import { useSession } from "next-auth/react";
import { CalculationResult } from "@/lib/calculator";

export default function ResultsPage() {
  const { data, isLoaded } = useCalculator();
  const { data: session } = useSession();
  const user = session?.user as any;
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isFree = !session;
  const isEntry = user?.accessType === "ENTRY" && !user?.hasFullAccess;
  const isCorePlus = user?.hasFullAccess === true;
  const isPaid = isEntry || isCorePlus;

  useEffect(() => {
    if (!isLoaded) return;

    const fetchCalculation = async () => {
      try {
        const res = await fetch("/api/calculate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!res.ok) throw new Error("Calculation failed");

        const json = await res.json();
        setResult(json.data);
      } catch (err) {
        console.error(err);
        setError("Failed to calculate results. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCalculation();
  }, [data, isLoaded]);

  if (isLoading || !isLoaded) {
    return (
      <div className="flex flex-col min-h-screen bg-white text-[#111111] pt-16">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin text-zinc-300" />
        </div>
      </div>
    );
  }

  if (error || !result) {
    return (
      <div className="flex flex-col min-h-screen bg-white text-[#111111] pt-16">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4 text-center">
          <AlertCircle className="w-12 h-12 text-[#DC2626] mb-4 mx-auto" />
          <p className="text-xl font-medium">{error || "Something went wrong."}</p>
          <Button asChild className="mt-6">
            <Link href="/run">Return to Form</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Format currencies dynamically
  const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const totalObligation = result.monthlySupport + result.totalMonthlyExpenses;
  const annualImpact = totalObligation * 12;

  // Determine color variables
  const colorMap = {
    Green: { bg: "bg-[#16A34A]", text: "text-[#16A34A]", border: "border-[#16A34A]/20", lightBg: "bg-[#16A34A]/10" },
    Yellow: { bg: "bg-[#EAB308]", text: "text-[#EAB308]", border: "border-[#EAB308]/20", lightBg: "bg-[#EAB308]/10" },
    Red: { bg: "bg-[#DC2626]", text: "text-[#DC2626]", border: "border-[#DC2626]/20", lightBg: "bg-[#DC2626]/10" },
  };

  const style = colorMap[result.realityScoreStatus];
  const impactFormatted = (result.impactPercentage * 100).toFixed(0) + "%";

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-[#111111] overflow-x-hidden pt-16 pb-20">
      <Navbar />

      <main className="flex-1 container max-w-4xl mx-auto px-4 mt-8 md:mt-12">
        
        {/* Dominant Reality Score Section - HIDDEN FOR FREE */}
        {!isFree && (
          <SlideUp yOffset={20} className="mb-10 text-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Your Reality Score</h1>
            <p className="text-zinc-500 mb-8 max-w-lg mx-auto">
              The percentage of your net income consumed by support and expenses.
            </p>

            <div className="relative inline-flex items-center justify-center">
              {/* Visual glow matching status color behind the score */}
              {isCorePlus && <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full ${style.lightBg} blur-[60px] rounded-full -z-10`} />}
              
              <div className={`w-48 h-48 md:w-64 md:h-64 rounded-full border-[12px] flex flex-col items-center justify-center bg-white shadow-xl relative overflow-hidden ${isCorePlus ? style.border : 'border-zinc-100'}`}>
                {isCorePlus ? (
                  <>
                    <span className={`text-6xl md:text-8xl font-black tracking-tighter ${style.text}`}>
                      {impactFormatted}
                    </span>
                    <span className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-[0.2em] mt-1 text-center px-4 leading-tight">
                      {result.realityScoreLabel}
                    </span>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 bg-zinc-50/50 backdrop-blur-sm h-full w-full">
                    <Lock className="w-8 h-8 text-zinc-400 mb-2" />
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest text-center leading-tight">
                      Reality Score Locked
                    </span>
                  </div>
                )}
              </div>
            </div>
          </SlideUp>
        )}

        {/* Hero for Free Tier ONLY */}
        {isFree && (
          <div className="text-center py-12 mb-8">
             <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-3">Your Free Estimate</h1>
             <p className="text-zinc-500 text-lg font-medium max-w-md mx-auto">
               Based on standard state-level algorithms, your estimated monthly obligation is below.
             </p>
          </div>
        )}

        {/* Short Text Explainer Required by User */}
        <FadeIn delay={0.2} className="text-center mb-12">
          <p className="text-lg font-medium bg-white border border-zinc-200 shadow-sm rounded-xl py-4 px-6 inline-block">
            {isFree 
              ? "Based on your inputs, this is your estimated monthly child support obligation."
              : "Based on your inputs, this is your estimated monthly obligation and financial impact."
            }
          </p>
        </FadeIn>

        {/* Large Number Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Net Monthly Income - Locked for Free (Teaser) */}
          {!isFree && (
            <SlideUp delay={0.3}>
              <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col items-center text-center relative overflow-hidden">
                <span className="text-zinc-500 uppercase tracking-wider text-xs font-bold mb-2">Net Monthly Income</span>
                <div className="space-y-1">
                  <span className="text-3xl md:text-4xl font-bold">{formatter.format(result.netMonthlyIncome)}</span>
                  {isEntry && <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">(Basic Net After Taxes/Support)</p>}
                </div>
              </div>
            </SlideUp>
          )}

          {/* Monthly Obligation (Support) - Always Visible */}
          <SlideUp delay={0.4}>
            <div className="bg-[#111111] text-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-full flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10" />
              <span className="text-zinc-400 uppercase tracking-wider text-xs font-bold mb-2 relative z-10">Monthly Support</span>
              <span className="text-4xl md:text-5xl font-bold relative z-10">{formatter.format(result.monthlySupport)}</span>
            </div>
          </SlideUp>

          {/* Annual Impact - Locked for Free & Entry */}
          {!isFree && (
            <SlideUp delay={0.5}>
              <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col items-center text-center relative overflow-hidden">
                <span className="text-zinc-500 uppercase tracking-wider text-xs font-bold mb-2">Annual Impact</span>
                {isCorePlus ? (
                  <span className="text-3xl md:text-4xl font-bold text-[#DC2626]">{formatter.format(annualImpact)}</span>
                ) : (
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-zinc-300 blur-sm select-none">$XX,XXX</span>
                    <Lock className="w-4 h-4 text-zinc-300 mt-1" />
                  </div>
                )}
              </div>
            </SlideUp>
          )}
        </div>

        <SlideUp delay={0.6} className="text-center">
          <div className="flex flex-col items-center gap-4">
            <Button asChild size="lg" className="bg-[#111111] text-white hover:bg-zinc-800 rounded-full px-10 h-16 text-lg shadow-lg group">
              <Link href={isPaid ? "/dashboard" : "/paywall"}>
                {isPaid ? (
                  <>Enter My Dashboard <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1" /></>
                ) : (
                  <>Unlock My Full Results <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1" /></>
                )}
              </Link>
            </Button>
            
            {isEntry && (
              <p className="text-zinc-400 text-sm font-medium">
                You are currently on the <span className="text-zinc-900 font-bold">Quick Review</span> plan.
              </p>
            )}
          </div>
        </SlideUp>

      </main>
    </div>
  );
}
