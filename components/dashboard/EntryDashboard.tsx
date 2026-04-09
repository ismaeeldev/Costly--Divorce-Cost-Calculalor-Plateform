"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCalculator } from "@/lib/store/CalculatorContext";
import { runCalculationEngine, CalculationResult } from "@/lib/calculator";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  Users,
  Home,
  ShieldCheck,
  GraduationCap,
  Droplets,
  Heart,
  FileText,
  Lock,
  ArrowUpRight,
  TrendingUp,
  PieChart,
  History as HistoryIcon,
  Loader2
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

/**
 * Entry ($19) Tier Dashboard
 * Focus: High-precision calculation engine (Estimate Tab).
 * Results: Expanded Summary, but Locked Analytics.
 */

export function EntryDashboard({ userName, isCore }: { userName: string; isCore: boolean }) {
  const { data, updateData } = useCalculator();
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isRedirecting, setIsRedirecting] = useState<string | null>(null);

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

  // Expanded fields for Entry/Core
  const [mortgage, setMortgage] = useState(0);
  const [childcare, setChildcare] = useState(0);
  const [school, setSchool] = useState(0);
  const [activities, setActivities] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [other, setOther] = useState(0);

  // Recalculate on any change
  useEffect(() => {
    const totalExpenses = mortgage + childcare + school + activities + utilities + insurance + other;

    // Sync to global state with granular fields
    updateData({
      expenses: totalExpenses,
      mortgage,
      childcare,
      school,
      activities,
      utilities,
      insurance,
      otherExpenses: other
    });

    const calculation = runCalculationEngine({
      ...data,
      expenses: totalExpenses,
      mortgage,
      childcare,
      school,
      activities,
      utilities,
      insurance,
      otherExpenses: other
    });
    setResult(calculation);
  }, [mortgage, childcare, school, activities, utilities, insurance, other, data.incomeOwn, data.incomeSpouse, data.childrenCount, data.custodyPercentage]);

  const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start">

      {/* Left: Deep Data Input (The Engine) */}
      <div className="lg:col-span-7 space-y-8">
        <section className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-5 h-5 text-[#111111]" />
            <h3 className="text-xl font-black text-[#111111]">Detailed Financial Parameters</h3>
          </div>

          <div className="space-y-10">
            {/* Income Section */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label className="text-xs font-black uppercase tracking-widest text-zinc-400">Monthly Income (Own)</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-300 w-4 h-4" />
                  <Input
                    type="number"
                    className="pl-9 h-12 bg-zinc-50/50 rounded-xl"
                    value={data.incomeOwn || ""}
                    onChange={(e) => updateData({ incomeOwn: Number(e.target.value) })}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <Label className="text-xs font-black uppercase tracking-widest text-zinc-400">Monthly Income (Spouse)</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-300 w-4 h-4" />
                  <Input
                    type="number"
                    className="pl-9 h-12 bg-zinc-50/50 rounded-xl"
                    value={data.incomeSpouse || ""}
                    onChange={(e) => updateData({ incomeSpouse: Number(e.target.value) })}
                  />
                </div>
              </div>
            </div>

            {/* Custody Slider */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-black uppercase tracking-widest text-zinc-400">Custody Allocation</Label>
                <span className="text-sm font-black text-[#111111]">{data.custodyPercentage}%</span>
              </div>
              <Slider
                defaultValue={[data.custodyPercentage]}
                max={100}
                onValueChange={(vals) => updateData({ custodyPercentage: vals[0] })}
              />
            </div>

            {/* EXPENSES BREAKDOWN - THE $19 VALUE */}
            <div className="pt-6 border-t border-zinc-50 space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16A34A]">Unlocked Detailed Expenses</p>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Home className="w-3.5 h-3.5 text-zinc-300" />
                    <Label className="text-xs font-bold text-zinc-600">Housing/Mortgage</Label>
                  </div>
                  <Input
                    type="number"
                    className="h-10 bg-zinc-50/50"
                    value={mortgage || ""}
                    onChange={(e) => setMortgage(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-3.5 h-3.5 text-zinc-300" />
                    <Label className="text-xs font-bold text-zinc-600">Utilities</Label>
                  </div>
                  <Input
                    type="number"
                    className="h-10 bg-zinc-50/50"
                    value={utilities || ""}
                    onChange={(e) => setUtilities(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Heart className="w-3.5 h-3.5 text-zinc-300" />
                    <Label className="text-xs font-bold text-zinc-600">Childcare</Label>
                  </div>
                  <Input
                    type="number"
                    className="h-10 bg-zinc-50/50"
                    value={childcare || ""}
                    onChange={(e) => setChildcare(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-zinc-300" />
                    <Label className="text-xs font-bold text-zinc-600">Education</Label>
                  </div>
                  <Input
                    type="number"
                    className="h-10 bg-zinc-50/50"
                    value={school || ""}
                    onChange={(e) => setSchool(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Heart className="w-3.5 h-3.5 text-zinc-300" />
                    <Label className="text-xs font-bold text-zinc-600">Child Activities</Label>
                  </div>
                  <Input
                    type="number"
                    className="h-10 bg-zinc-50/50"
                    value={activities || ""}
                    onChange={(e) => setActivities(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
                    <Label className="text-xs font-bold text-zinc-600">Insurance</Label>
                  </div>
                  <Input
                    type="number"
                    className="h-10 bg-zinc-50/50"
                    value={insurance || ""}
                    onChange={(e) => setInsurance(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-zinc-300" />
                    <Label className="text-xs font-bold text-zinc-600">Other Obligations</Label>
                  </div>
                  <Input
                    type="number"
                    className="h-10 bg-zinc-50/50"
                    value={other || ""}
                    onChange={(e) => setOther(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Right: Summary & Upsell */}
      <div className="lg:col-span-5 space-y-6">

        {/* Expanded Summary Card */}
        <section className="bg-[#111111] text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#16A34A]/20 blur-[60px] rounded-full -mr-16 -mt-16" />

          <div className="mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#16A34A] block mb-2">Detailed Analysis Snapshot</span>
            <h3 className="text-3xl font-black">Financial Summary</h3>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center py-4 border-b border-white/10">
              <span className="text-zinc-400 font-bold text-sm">Disposable Monthly Income</span>
              <span className="text-xl font-black text-[#16A34A]">{formatter.format(result?.disposableIncome || 0)}</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-white/10">
              <span className="text-zinc-400 font-bold text-sm">Monthly Child Support</span>
              <span className="text-xl font-black text-white">{formatter.format(result?.monthlySupport || 0)}</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-white/10">
              <span className="text-zinc-400 font-bold text-sm">Net Monthly Surplus</span>
              <span className="text-xl font-black text-white">{formatter.format(result?.netMonthlyIncome || 0)}</span>
            </div>
          </div>

          <div className="mt-8 pt-8 flex items-center gap-4 border-t border-white/10">
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Reality Risk Score</p>
              <div className="flex items-center gap-2">
                {isCore ? (
                  <>
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      result?.realityScoreStatus === "Green" ? "bg-[#16A34A]" :
                        result?.realityScoreStatus === "Yellow" ? "bg-[#EAB308]" : "bg-[#DC2626]"
                    )} />
                    <span className="text-xl font-black text-white">
                      {(result?.impactPercentage || 0 * 100).toFixed(1)}%
                    </span>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                      ({result?.realityScoreLabel})
                    </span>
                  </>
                ) : (
                  <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm shadow-inner">
                    <Lock className="w-8 h-8 text-[#16A34A] animate-pulse" />
                    <span className="text-[10px] font-black text-zinc-500 tracking-[0.1em] uppercase select-none flex items-center gap-2">
                      <span className="blur-[3.5px] tabular-nums">88.88%</span>
                      <span className="opacity-20 text-white">|</span>
                      <span className="blur-[2.5px] opacity-60">Strategic Stability Locked</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
            {!isCore && (
              <Button 
                onClick={() => handleCheckout("CORE")}
                disabled={!!isRedirecting}
                variant="ghost" 
                className="bg-white text-black font-black rounded-xl h-10 px-4 text-xs cursor-pointer hover:bg-zinc-100 hover:text-black min-w-[120px]"
              >
                {isRedirecting === "CORE" ? (
                  <Loader2 className="w-4 h-4 animate-spin text-black" />
                ) : (
                  <>Unlock Score <ArrowUpRight className="ml-1 w-3 h-3" /></>
                )}
              </Button>
            )}
          </div>
        </section>

        <div className="grid grid-cols-2 gap-4">
          <div className={cn(
            "bg-white border border-zinc-100 p-6 rounded-[2rem] text-center transition-all",
            !isCore && "opacity-70 group"
          )}>
            <div className="w-10 h-10 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <PieChart className={cn("w-5 h-5", isCore ? "text-[#16A34A]" : "text-zinc-300")} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">AI Advisory</p>
            {!isCore && (
              <div className="flex items-center justify-center gap-1.5 py-1 px-3 bg-zinc-100 rounded-full w-fit mx-auto">
                <Lock className="w-3 h-3 text-zinc-400" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase">Core</span>
              </div>
            )}
          </div>
          <div className={cn(
            "bg-white border border-zinc-100 p-6 rounded-[2rem] text-center transition-all",
            !isCore && "opacity-70 group"
          )}>
            <div className="w-10 h-10 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <HistoryIcon className={cn("w-5 h-5", isCore ? "text-[rgb(79,70,229)]" : "text-zinc-300")} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Scenario History</p>
            {!isCore && (
              <div className="flex items-center justify-center gap-1.5 py-1 px-3 bg-zinc-100 rounded-full w-fit mx-auto">
                <Lock className="w-3 h-3 text-zinc-400" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase">Core</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
