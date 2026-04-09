"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCalculator } from "@/lib/store/CalculatorContext";
import { Navbar } from "@/components/layout/Navbar";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Loader2 } from "lucide-react";

// For client-side quick scenario generation
import { runCalculationEngine, CalculationResult } from "@/lib/calculator";

interface Scenario {
  title: string;
  custodyPercentage: number;
  results: CalculationResult;
}

export default function ScenariosPage() {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();
  const { data, isLoaded } = useCalculator();
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sessionStatus === "loading" || !isLoaded) return;

    // Strict Access Guard
    const user = session?.user as any;
    if (!user?.hasFullAccess) {
      router.replace("/paywall");
      return;
    }

    // We generate 3 variations: 0%, 40%, 50%
    const variations = [
      { title: "Worst Case (No Custody)", custodyPercentage: 0 },
      { title: "Standard Joint (40/60)", custodyPercentage: 40 },
      { title: "Equal Shared (50/50)", custodyPercentage: 50 },
    ];

    const generated = variations.map((v) => ({
      title: v.title,
      custodyPercentage: v.custodyPercentage,
      results: runCalculationEngine({ ...data, custodyPercentage: v.custodyPercentage }),
    }));

    setScenarios(generated);
    setIsLoading(false);
  }, [data, isLoaded, session, sessionStatus, router]);

  if (isLoading || !isLoaded) {
    return (
      <div className="flex flex-col min-h-screen bg-zinc-50 pt-16">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin text-zinc-300" />
        </div>
      </div>
    );
  }

  const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const colorMap = {
    Green: { bg: "bg-[#16A34A]", text: "text-[#16A34A]", border: "border-[#16A34A]/20" },
    Yellow: { bg: "bg-[#EAB308]", text: "text-[#EAB308]", border: "border-[#EAB308]/20" },
    Red: { bg: "bg-[#DC2626]", text: "text-[#DC2626]", border: "border-[#DC2626]/20" },
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-[#111111] overflow-x-hidden pt-16 pb-24">
      <Navbar />

      <main className="flex-1 container max-w-6xl mx-auto px-4 mt-8 md:mt-12">

        <SlideUp className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Compare Scenarios</h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            See how your custody arrangements drastically impact your total monthly obligation and net available income.
          </p>
        </SlideUp>

        {/* 3 Variations Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16 px-2 md:px-0">
          {scenarios.map((scenario, idx) => {
            const style = colorMap[scenario.results.realityScoreStatus];
            const impactFormatted = (scenario.results.impactPercentage * 100).toFixed(0) + "%";

            return (
              <SlideUp key={idx} delay={0.1 * idx} className="h-full">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-zinc-200 h-full flex flex-col hover:border-zinc-300 transition-colors relative overflow-hidden group">

                  {/* Subtle highlight strictly matching the status */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${style.bg} opacity-[0.03] rounded-bl-full group-hover:opacity-[0.06] transition-opacity`} />

                  <div className="mb-6 border-b border-zinc-100 pb-4">
                    <h2 className="text-xl font-bold mb-1">{scenario.title}</h2>
                    <div className="inline-flex items-center px-2 py-1 bg-zinc-100 text-zinc-600 rounded-md text-sm font-semibold">
                      {scenario.custodyPercentage}% Custody
                    </div>
                  </div>

                  <div className="space-y-6 flex-1">
                    <div>
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Monthly Support</p>
                      <p className="text-3xl font-bold">{formatter.format(scenario.results.monthlySupport)}</p>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Net Remaining Income</p>
                      <p className="text-2xl font-bold text-zinc-700">{formatter.format(scenario.results.disposableIncome)}</p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-zinc-100">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-zinc-500 uppercase">Reality Score</p>
                        <div className={`px-3 py-1 rounded-full border bg-white font-bold ${style.text} ${style.border}`}>
                          {impactFormatted} Impact
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideUp>
            );
          })}
        </div>

        {/* Teaser CTA */}
        <FadeIn delay={0.4}>
          <div className="bg-[#111111] text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none" />

            <Lock className="w-12 h-12 text-zinc-500 mx-auto mb-6" />
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Test unlimited scenarios and see your full financial picture.</h3>
            <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
              Unlock the full dashboard to edit inputs instantly, calculate custom asset splits, and determine specific spousal maintenance models.
            </p>
            <Button asChild size="lg" className="bg-white text-[#111111] hover:bg-zinc-200 rounded-full px-10 h-14 text-lg font-bold shadow-lg">
              <Link href="/paywall">
                Unlock Full Access
              </Link>
            </Button>
          </div>
        </FadeIn>

      </main>
    </div>
  );
}
