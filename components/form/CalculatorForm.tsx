"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useCalculator } from "@/lib/store/CalculatorContext";
import { runCalculationEngine } from "@/lib/calculator";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, DollarSign, Wallet, Lock, LayoutDashboard, Sparkles } from "lucide-react";

/**
 * Simplified Calculator Form for Free Preview (Top Funnel)
 * Strictly: Annual Income, Custody %, Monthly Expenses
 * Displays result in-place without page reload.
 */

export function CalculatorForm() {
  const { data: session } = useSession();
  const user = session?.user as any;
  const isPaid = user?.hasFullAccess === true || user?.entryPurchased === true || user?.accessType === "ENTRY" || user?.accessType === "CORE";

  const { data, updateData } = useCalculator();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEstimate, setShowEstimate] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  // Local state for Annual Income display (Context stores Monthly)
  const [annualIncome, setAnnualIncome] = useState(data.incomeOwn ? data.incomeOwn * 12 : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Ensure defaults for free tier
    const inputData = { 
        ...data,
        childrenCount: Math.max(data.childrenCount, 1),
        incomeSpouse: 0 
    };
    updateData(inputData);

    // Calculate locally
    const calculation = runCalculationEngine(inputData);
    setResult(calculation.monthlySupport);

    // Simulate premium SaaS feel
    setTimeout(() => {
      setShowEstimate(true);
      setIsSubmitting(false);
    }, 800);
  };

  const handleIncomeChange = (val: string) => {
    const annual = Number(val);
    setAnnualIncome(annual);
    updateData({ incomeOwn: annual / 12 });
  };

  const formatter = new Intl.NumberFormat("en-US", { 
    style: "currency", 
    currency: "USD", 
    maximumFractionDigits: 0 
  });

  if (showEstimate) {
    return (
      <div className="w-full max-w-xl mx-auto">
        <FadeIn>
          <div className="bg-white rounded-[2.5rem] p-10 sm:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-zinc-100 text-center relative overflow-hidden">
            {/* Subtle animated background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A34A]/5 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none animate-pulse" />
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-black uppercase tracking-[0.3em] text-zinc-400">Estimated Monthly Child Support</span>
                <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-[#111111]">
                  {formatter.format(result || 0)}
                </h2>
              </div>

              {!isPaid && (
                <div className="py-6 px-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex items-center justify-center gap-3">
                  <Lock className="w-4 h-4 text-zinc-300" />
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest leading-tight">
                    Advanced Breakdown Locked (Upgrade Required)
                  </p>
                </div>
              )}

              <div className="space-y-4 pt-4">
                <Button 
                  asChild 
                  className="w-full h-16 rounded-[1.25rem] bg-[#111111] text-white font-black hover:bg-zinc-800 transition-all text-lg shadow-xl shadow-black/10 group"
                >
                  <Link href={isPaid ? "/dashboard" : "/paywall"}>
                    {isPaid ? (
                      <>
                        <LayoutDashboard className="w-5 h-5 mr-2" /> Enter My Dashboard
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" /> Unlock Full Analysis
                      </>
                    )}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                {!isPaid && (
                   <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">
                     Save, model scenarios, and see your reality score.
                   </p>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <FadeIn>
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-zinc-100 relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#16A34A]/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            
            {/* Input 1: Annual Income */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="annualIncome" className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                  Household Annual Income
                </Label>
                <DollarSign className="w-4 h-4 text-zinc-300" />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <span className="text-xl font-bold text-zinc-400">$</span>
                </div>
                <Input 
                  id="annualIncome"
                  type="number"
                  placeholder="0"
                  className="pl-10 h-16 text-2xl font-bold bg-zinc-50/50 border-zinc-100 rounded-2xl focus:ring-black focus:border-black transition-all group-hover:bg-white"
                  value={annualIncome || ""}
                  onChange={(e) => handleIncomeChange(e.target.value)}
                  required
                />
              </div>
              <p className="text-xs text-zinc-400 font-medium px-1">Gross income before taxes and deductions.</p>
            </div>

            {/* Input 2: Custody Percentage */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                  Custody Percentage
                </Label>
                <div className="bg-[#111111] text-white px-3 py-1 rounded-full text-sm font-black tracking-tight">
                  {data.custodyPercentage}%
                </div>
              </div>
              <div className="pt-2">
                <Slider 
                  defaultValue={[data.custodyPercentage]} 
                  max={100} 
                  step={1}
                  onValueChange={(vals) => updateData({ custodyPercentage: vals[0] })}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-300">
                <span>Every other weekend</span>
                <span>Joint (50/50)</span>
                <span>Primary</span>
              </div>
            </div>

            {/* Input 3: Basic Expenses */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="expenses" className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                  Projected Monthly Expenses
                </Label>
                <Wallet className="w-4 h-4 text-zinc-300" />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <span className="text-xl font-bold text-zinc-400">$</span>
                </div>
                <Input 
                  id="expenses"
                  type="number"
                  placeholder="0"
                  className="pl-10 h-16 text-2xl font-bold bg-zinc-50/50 border-zinc-100 rounded-2xl focus:ring-black focus:border-black transition-all group-hover:bg-white"
                  value={data.expenses || ""}
                  onChange={(e) => updateData({ expenses: Number(e.target.value) })}
                  required
                />
              </div>
              <p className="text-xs text-zinc-400 font-medium px-1">Estimate housing, food, and basic necessities.</p>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#111111] text-white hover:bg-zinc-800 rounded-[1.25rem] h-16 text-lg font-black shadow-xl shadow-black/10 flex items-center justify-center gap-3 group transition-all active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>Calculating Analysis...</>
              ) : (
                <>
                  See My Estimate <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>

            <p className="text-center text-xs text-zinc-400 font-medium bg-zinc-50 py-3 rounded-xl border border-zinc-100">
              🔒 Private calculation. We do not store your data.
            </p>
          </form>
        </div>
      </FadeIn>
    </div>
  );
}
