"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { useCalculator } from "@/lib/store/CalculatorContext";
import { runCalculationEngine } from "@/lib/calculator";
import { US_STATES } from "@/lib/states";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { formatThousands, parseThousands } from "@/lib/formatters";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  DollarSign, 
  Wallet, 
  Lock, 
  LayoutDashboard, 
  Sparkles, 
  MapPin, 
  Users2,
  TrendingUp,
  HelpCircle
} from "lucide-react";
import { DashboardPreview } from "@/components/dashboard/DashboardPreview";

/**
 * Expanded Calculator Form for Free Preview (Phase 2 Alignment)
 * Features a "Behind the Glass" dashboard preview for premium conversion.
 */

export function CalculatorForm() {
  const { data: session } = useSession();
  const user = session?.user as any;
  const isPaid = user?.hasFullAccess === true || user?.entryPurchased === true || user?.accessType === "ENTRY" || user?.accessType === "CORE";

  const { data, updateData } = useCalculator();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEstimate, setShowEstimate] = useState(false);
  const [result, setResult] = useState<import("@/lib/calculator").CalculationResult | null>(null);

  // Local states for display formatting (Context stores raw Monthly Monthly)
  const [incomeOwnDisplay, setIncomeOwnDisplay] = useState(formatThousands(data.incomeOwn ? data.incomeOwn * 12 : 0));
  const [incomeSpouseDisplay, setIncomeSpouseDisplay] = useState(formatThousands(data.incomeSpouse ? data.incomeSpouse * 12 : 0));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const promise = new Promise((resolve) => {
      // Calculate locally
      const calculation = runCalculationEngine(data);
      setResult(calculation);
      setTimeout(() => resolve(calculation), 1500);
    });

    toast.promise(promise, {
      loading: 'Calculating Your Estimate...',
      success: 'Estimate Ready.',
      error: 'Calculation mismatch. Please verify inputs.',
    });

    await promise;
    setShowEstimate(true);
    setIsSubmitting(false);
  };

  const handleIncomeOwnChange = (val: string) => {
    const rawValue = val.replace(/,/g, "");
    if (isNaN(Number(rawValue)) && rawValue !== "") return;
    
    setIncomeOwnDisplay(formatThousands(rawValue));
    updateData({ incomeOwn: Number(rawValue) / 12 });
  };

  const handleIncomeSpouseChange = (val: string) => {
    const rawValue = val.replace(/,/g, "");
    if (isNaN(Number(rawValue)) && rawValue !== "") return;
    
    setIncomeSpouseDisplay(formatThousands(rawValue));
    updateData({ incomeSpouse: Number(rawValue) / 12 });
  };

  const formatter = new Intl.NumberFormat("en-US", { 
    style: "currency", 
    currency: "USD", 
    maximumFractionDigits: 0 
  });

  if (showEstimate) {
    return (
      <div className="w-full max-w-5xl mx-auto px-4 relative">
        <FadeIn>
          {/* THE "BEHIND THE GLASS" SIGNAL */}
          <div className="relative group">
            {/* The Blurred Dashboard Background */}
            <div className="absolute inset-x-0 -inset-y-12 md:-inset-24 opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
               <DashboardPreview isBlurred={true} className="w-full h-full shadow-none border-zinc-100/50" />
            </div>

            {/* The Result Card (Foreground) */}
            <div className="relative z-20 max-w-xl mx-auto">
              <div className="bg-white/95 backdrop-blur-md rounded-[3rem] p-8 sm:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-white text-center overflow-hidden">
                {/* Subtle animated background accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A34A]/5 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
                
                <div className="relative z-10 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                       <div className="px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-[#16A34A] flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                         State Guidelines Applied: {data.state || "US Default"}
                       </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">Baseline Monthly Estimate</span>
                      <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#111111]">
                        {formatter.format(result?.monthlySupport || 0)}
                      </h2>
                    </div>

                    {/* REALITY SCORE INDICATOR - NEW */}
                    <div className="pt-4 flex flex-col items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-3 h-3 rounded-full animate-pulse",
                          result?.realityScoreStatus === "Green" ? "bg-[#16A34A]" :
                          result?.realityScoreStatus === "Yellow" ? "bg-[#EAB308]" : "bg-[#DC2626]"
                        )} />
                        <span className={cn(
                          "text-[10px] font-black uppercase tracking-[0.2em]",
                          result?.realityScoreStatus === "Green" ? "text-[#16A34A]" :
                          result?.realityScoreStatus === "Yellow" ? "text-[#EAB308]" : "text-[#DC2626]"
                        )}>
                          Sustainability: {result?.realityScoreLabel || "Analyzing..."}
                        </span>
                      </div>
                      
                      <div className="w-full max-w-[280px] h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full transition-all duration-1000 ease-out rounded-full",
                            result?.realityScoreStatus === "Green" ? "bg-[#16A34A]" :
                            result?.realityScoreStatus === "Yellow" ? "bg-[#EAB308]" : "bg-[#DC2626]"
                          )}
                          style={{ width: `${result?.realityScore || 0}%` }}
                        />
                      </div>
                      <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest italic">
                        Financial impact assessment
                      </p>
                    </div>
                  </div>

                  {!isPaid && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-2">
                      <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col items-center justify-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-zinc-300" />
                        <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">Net Breakdown</span>
                      </div>
                      <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col items-center justify-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-zinc-300" />
                        <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">Asset Split</span>
                      </div>
                      <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col items-center justify-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-zinc-300" />
                        <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">Maintenance Risk</span>
                      </div>
                      <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col items-center justify-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-zinc-300" />
                        <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">Reality Score</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 pt-2">
                    <Button 
                      asChild 
                      className="w-full h-16 rounded-[1.5rem] bg-[#111111] text-white font-black hover:bg-zinc-800 transition-all text-sm uppercase tracking-widest shadow-2xl shadow-black/20 group scale-105"
                    >
                      <Link href={isPaid ? "/dashboard" : "/paywall"}>
                        {isPaid ? (
                          <>
                            <LayoutDashboard className="w-4 h-4 mr-2" /> View Full Analysis
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" /> Unlock My Dashboard
                          </>
                        )}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    
                    {/* REVISION: Social Proof commented out to match landing page removal */}
                    {/*
                       <div className="flex flex-col items-center gap-3">
                         <div className="flex -space-x-2">
                           {[1,2,3,4].map(i => (
                             <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-zinc-100" />
                           ))}
                         </div>
                         <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.1em]">
                           Join 4,200+ users modeling their future.
                         </p>
                       </div>
                    */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto px-2">
      <FadeIn>
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.06)] border border-zinc-100 relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#16A34A]/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            
            {/* ROW 1: STATE & CHILDREN */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {/* Select State */}
               <div className="space-y-3">
                 <div className="flex items-center justify-between px-1">
                   <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Step 1: Your State</Label>
                   <MapPin className="w-3 h-3 text-zinc-300" />
                 </div>
                  <Select value={data.state || "CA"} onValueChange={(val) => updateData({ state: val })}>
                    <SelectTrigger className="w-full h-14 rounded-2xl bg-zinc-50/50 border-zinc-100 text-sm font-black focus:ring-[#111111] focus:border-[#111111] transition-colors">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent position="popper" align="start" className="w-(--radix-select-trigger-width) max-h-[300px] rounded-2xl border-zinc-100 bg-white/95 backdrop-blur-xl shadow-2xl z-[100]">
                      <SelectItem value="CA" className="rounded-xl focus:bg-zinc-50 font-black text-[10px] uppercase tracking-widest">
                        California (2026 Guidelines)
                      </SelectItem>
                    </SelectContent>
                  </Select>
               </div>

               {/* Children Count */}
               <div className="space-y-3">
                 <div className="flex items-center justify-between px-1">
                   <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Step 2: Number of Children</Label>
                   <Users2 className="w-3 h-3 text-zinc-300" />
                 </div>
                 <Select value={data.childrenCount.toString()} onValueChange={(val) => updateData({ childrenCount: Number(val) })}>
                   <SelectTrigger className="w-full h-14 rounded-2xl bg-zinc-50/50 border-zinc-100 text-sm font-bold focus:ring-[#111111] focus:border-[#111111] transition-colors">
                     <SelectValue placeholder="Count" />
                   </SelectTrigger>
                   <SelectContent position="popper" align="start" className="w-(--radix-select-trigger-width) rounded-2xl border-zinc-100 bg-white/95 backdrop-blur-xl shadow-2xl z-[100]">
                     {[1, 2, 3, 4, 5].map((num) => (
                       <SelectItem key={num} value={num.toString()} className="rounded-xl focus:bg-zinc-50 font-medium">
                         {num === 5 ? "5+ Children" : `${num} Child${num > 1 ? 'ren' : ''}`}
                       </SelectItem>
                     ))}
                   </SelectContent>
                 </Select>
               </div>
            </div>

            {/* ROW 2: OWN INCOME */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <Label htmlFor="incomeOwn" className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  Monthly Income
                </Label>
                <DollarSign className="w-3 h-3 text-zinc-300" />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <span className="text-xl font-bold text-zinc-400">$</span>
                </div>
                <Input 
                  id="incomeOwn"
                  type="text"
                  placeholder="100,000"
                  className="pl-10 h-16 text-2xl font-black bg-zinc-50/50 border-zinc-100 rounded-2xl focus:ring-[#111111] focus:border-[#111111] transition-colors group-hover:bg-zinc-50"
                  value={incomeOwnDisplay}
                  onChange={(e) => handleIncomeOwnChange(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* ROW 3: SPOUSE INCOME */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <Label htmlFor="incomeSpouse" className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  Spouse Monthly Income
                </Label>
                <Wallet className="w-3 h-3 text-zinc-300" />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <span className="text-xl font-bold text-zinc-400">$</span>
                </div>
                <Input 
                  id="incomeSpouse"
                  type="text"
                  placeholder="85,000"
                  className="pl-10 h-16 text-2xl font-black bg-zinc-50/50 border-zinc-100 rounded-2xl focus:ring-[#111111] focus:border-[#111111] transition-colors group-hover:bg-zinc-50"
                  value={incomeSpouseDisplay}
                  onChange={(e) => handleIncomeSpouseChange(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* ROW 4: CUSTODY */}
            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between px-1">
                <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  Custody Percentage
                </Label>
                <div className="bg-[#111111] text-white px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase">
                  {data.custodyPercentage}%
                </div>
              </div>
              <div className="pt-2 px-1">
                <Slider 
                  defaultValue={[data.custodyPercentage]} 
                  max={100} 
                  step={1}
                  onValueChange={(vals) => updateData({ custodyPercentage: vals[0] })}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-[8px] font-black uppercase tracking-[0.2em] text-zinc-300">
                <span>Weekend Only</span>
                <span>Joint (50/50)</span>
                <span>Primary</span>
              </div>
            </div>

            {/* STRATEGIC SCOPE - NEW SECTION */}
            <div className="pt-4 space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#EAB308]">Strategic Scope</span>
                <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">Optional: Add for better accuracy</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Marital Assets */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-1">
                    <Label htmlFor="assetsMarital" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                      Total Marital Assets
                      <div className="group/tip relative">
                        <HelpCircle className="w-3 h-3 text-zinc-300 cursor-help" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-3 bg-zinc-900 text-white text-[9px] font-bold rounded-xl w-40 opacity-0 group-hover/tip:opacity-100 transition-opacity pointer-events-none z-50 shadow-2xl leading-relaxed">
                          Anchors your Reality Score by comparing monthly support against your total net worth.
                        </div>
                      </div>
                    </Label>
                    <LayoutDashboard className="w-3 h-3 text-zinc-300" />
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <span className="text-xl font-bold text-zinc-400">$</span>
                    </div>
                    <Input 
                      id="assetsMarital"
                      type="text"
                      placeholder="250,000"
                      className="pl-10 h-16 text-lg font-black bg-zinc-50/50 border-zinc-100 rounded-2xl focus:ring-[#111111] focus:border-[#111111] transition-colors group-hover:bg-zinc-50"
                      value={formatThousands(data.assetsMarital)}
                      onChange={(e) => updateData({ assetsMarital: parseThousands(e.target.value) })}
                    />
                  </div>
                </div>

                {/* Spousal Support */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-1">
                    <Label htmlFor="spousalSupport" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                      Est. Maintenance
                      <div className="group/tip relative">
                        <HelpCircle className="w-3 h-3 text-zinc-300 cursor-help" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-3 bg-zinc-900 text-white text-[9px] font-bold rounded-xl w-40 opacity-0 group-hover/tip:opacity-100 transition-opacity pointer-events-none z-50 shadow-2xl leading-relaxed">
                          Combined with child support to show your total monthly financial liability.
                        </div>
                      </div>
                    </Label>
                    <TrendingUp className="w-3 h-3 text-zinc-300" />
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <span className="text-xl font-bold text-zinc-400">$</span>
                    </div>
                    <Input 
                      id="spousalSupport"
                      type="text"
                      placeholder="2,500"
                      className="pl-10 h-16 text-lg font-black bg-zinc-50/50 border-zinc-100 rounded-2xl focus:ring-[#111111] focus:border-[#111111] transition-colors group-hover:bg-zinc-50"
                      value={formatThousands(data.spousalSupport)}
                      onChange={(e) => updateData({ spousalSupport: parseThousands(e.target.value) })}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#111111] text-white hover:bg-zinc-800 rounded-[1.25rem] h-16 text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-black/10 flex items-center justify-center gap-3 transition-colors active:scale-[0.98] group"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Generating Estimate...
                  </div>
                ) : (
                  <>
                    See My Estimate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>

            <p className="text-center text-[9px] text-zinc-400 font-black uppercase tracking-[0.2em] bg-zinc-50 py-4 rounded-2xl border border-zinc-100">
              🔒 Standardized State Calculation Tool
            </p>
          </form>
        </div>
      </FadeIn>
    </div>
  );
}
