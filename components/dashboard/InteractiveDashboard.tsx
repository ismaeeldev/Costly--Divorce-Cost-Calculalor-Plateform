"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
   Lock,
   Loader2,
   Save,
   Sparkles,
   BrainCircuit,
   LayoutGrid,
   CheckCircle2,
   Home,
   Droplets,
   Heart,
   GraduationCap,
   FileText,
   ShieldCheck,
   PlusCircle,
   TrendingUp,
   Users,
   Calculator,
   Wallet,
   XIcon,
   FileDown
} from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { generateProfessionalReport } from "@/lib/pdf-report";
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { requireCoreAccess, requireSubscription } from "@/lib/access";

import { cn } from "@/lib/utils";
import { runCalculationEngine, CalculationInput } from "@/lib/calculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";

type DashboardInput = CalculationInput;

interface InteractiveDashboardProps {
   initialState: DashboardInput;
   initialScenarioName: string;
   canSaveScenarios: boolean;
   userName: string;
   onStateChange?: (state: DashboardInput) => void;
   onTabChange?: (tab: string) => void;
}

function currency(value: number) {
   return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
   }).format(value);
}

type Addon = {
   type: string;
   isActive: boolean;
};

export function InteractiveDashboard({
   initialState,
   initialScenarioName,
   canSaveScenarios,
   userName,
   onStateChange,
   onTabChange
}: InteractiveDashboardProps) {
   const { data: session } = useSession();
   const router = useRouter();
   const userAccess = session?.user as any;
   const isCore = requireCoreAccess(userAccess);
   const isSubscribed = requireSubscription(userAccess);

   const [inputs, setInputs] = useState<DashboardInput>(initialState);

   // Sync state with parent for AI Advisor context
   useEffect(() => {
      onStateChange?.(inputs);
   }, [inputs, onStateChange]);
   const [scenarioName, setScenarioName] = useState(initialScenarioName);
   const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
   const [isSaving, setIsSaving] = useState(false);
   const [isRedirecting, setIsRedirecting] = useState<string | null>(null);
   const [userAddons, setUserAddons] = useState<Addon[]>([]);
   const [activeAddonTab, setActiveAddonTab] = useState<string | null>(null);

   const hasAddonAccess = (type: string) =>
      userAddons?.some((a) => a.type === type && a.isActive);

   const allAddons = [
      { id: "assetSplit", label: "Asset Split", key: "ASSET_SPLIT", price: 39 },
      { id: "retirementImpact", label: "Retirement", key: "RETIREMENT", price: 29 },
      { id: "vaDisability", label: "VA Disability", key: "VA_DISABILITY", price: 29 },
      { id: "housingScenario", label: "Housing Impact", key: "HOUSING", price: 29 },
   ];

   const purchasedAddons = allAddons.filter(a => hasAddonAccess(a.key));
   const availableAddons = allAddons.filter(a => !hasAddonAccess(a.key));

   useEffect(() => {
      const fetchAddons = async () => {
         try {
            const res = await fetch("/api/addons");
            const data = await res.json();
            setUserAddons(data);

            // Set first unlocked addon as default tab if exists
            if (!activeAddonTab) {
               const firstUnlocked = data.find((a: Addon) => a.isActive);
               if (firstUnlocked) setActiveAddonTab(firstUnlocked.type);
            }
         } catch (err) {
            console.error("Failed to fetch addons", err);
         }
      };

      fetchAddons();
   }, []);

   const results = runCalculationEngine(inputs);
   const statusStyles = {
      Green: { ring: "border-[#16A34A] text-[#16A34A] bg-[#16A34A]/5", glow: "bg-[#16A34A]/10", accent: "bg-[#16A34A]" },
      Yellow: { ring: "border-[#EAB308] text-[#EAB308] bg-[#EAB308]/5", glow: "bg-[#EAB308]/10", accent: "bg-[#EAB308]" },
      Red: { ring: "border-[#DC2626] text-[#DC2626] bg-[#DC2626]/5", glow: "bg-[#DC2626]/10", accent: "bg-[#DC2626]" },
   }[results.realityScoreStatus];

   const impactFormatted = `${(results.impactPercentage * 100).toFixed(0)}%`;

   function updateField<K extends keyof DashboardInput>(field: K, value: DashboardInput[K]) {
      setInputs((current) => ({ ...current, [field]: value }));
   }

   function handleCompare() {
      const encodedData = btoa(JSON.stringify(inputs));
      router.push(`/dashboard/compare?model=${encodedData}`);
   }

   const handleDownloadReport = async () => {
      if (!isSubscribed) {
         handleCheckout("SUBSCRIPTION");
         return;
      }

      const toastId = toast.loading("Synthesizing strategic analysis...");
      try {
         // Subtle delay for premium "Heavy lifting" perception
         await new Promise(resolve => setTimeout(resolve, 1200));
         generateProfessionalReport(inputs, results);
         toast.success("Report Ready", { id: toastId });
      } catch (error) {
         console.error("PDF generation error:", error);
         toast.error("Failed to generate report", { id: toastId });
      }
   };

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

   async function handleSave() {
      if (!isSubscribed) {
         router.push("/paywall?plan=CORE");
         return;
      }
      setIsSaving(true);
      try {
         const response = await fetch("/api/scenarios/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: scenarioName, ...inputs }),
         });
         const payload = await response.json();
         if (!response.ok) throw new Error(payload?.error || "Failed to save scenario");
         toast.success("Saved successfully");
      } catch (error) {
         toast.error("Save failed");
      } finally {
         setIsSaving(false);
      }
   }

   return (
      <div className="flex flex-col gap-10 pb-20">

         {/* 1. MODELING HEADER */}

         <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">

               <SlideUp yOffset={10} className="bg-white rounded-[2.5rem] border border-zinc-100 p-8 shadow-[0_8px_40px_rgba(0,0,0,0.03)]">
                  <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
                     <div>
                        <h2 className="text-3xl font-black text-[#111111] tracking-tight">Interactive Modeling</h2>
                        <p className="text-zinc-500 font-medium">Fine-tune your financial future.</p>
                     </div>
                     <div className="flex flex-col gap-3 min-w-[300px]">
                        <div className="bg-zinc-50 p-2 rounded-2xl border border-zinc-100 flex items-center gap-3">
                           <Input
                              value={scenarioName}
                              onChange={(e) => setScenarioName(e.target.value)}
                              className="h-10 border-none bg-transparent shadow-none font-bold"
                           />
                           <TooltipProvider>
                              <Tooltip delayDuration={0}>
                                 <TooltipTrigger asChild>
                                    <button
                                       onClick={() => isSubscribed ? handleSave() : setIsSaveDialogOpen(true)}
                                       disabled={isSaving}
                                       className={cn(
                                          "h-10 rounded-xl px-5 transition-all active:scale-95 flex items-center justify-center font-bold text-sm shrink-0",
                                          isSubscribed
                                             ? "bg-[#111111] text-white hover:bg-zinc-800"
                                             : "bg-white text-zinc-400 border border-zinc-200 hover:border-zinc-300 opacity-80 cursor-not-allowed"
                                       )}
                                    >
                                       {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                                          isSubscribed ? <Save className="w-4 h-4 mr-2" /> : <Lock className="w-3.5 h-3.5 mr-2 opacity-50" />
                                       )}
                                       {isSubscribed ? "Save" : "Save — $19"}
                                    </button>
                                 </TooltipTrigger>
                                 {!isSubscribed && (
                                    <TooltipContent side="bottom" className="bg-white border-zinc-100 text-[#111111] font-black text-[10px] uppercase tracking-widest shadow-xl py-3 px-4 rounded-xl">
                                       Available with Subscription plan
                                    </TooltipContent>
                                 )}
                              </Tooltip>
                           </TooltipProvider>
                        </div>
                     </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                     <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                           <LayoutGrid className="w-4 h-4 text-zinc-300" />
                           <h4 className="text-[10px] uppercase font-black tracking-widest text-zinc-400">Core Household</h4>
                        </div>
                        <div className="grid gap-6">
                           <div className="space-y-2">
                              <Label className="text-xs font-bold text-zinc-600">Income (Own)</Label>
                              <Input type="number" value={inputs.incomeOwn || ""} onChange={(e) => updateField("incomeOwn", Number(e.target.value))} className="h-11 bg-zinc-50/50 rounded-xl" />
                           </div>
                           <div className="space-y-2">
                              <Label className="text-xs font-bold text-zinc-600">Income (Spouse)</Label>
                              <Input type="number" value={inputs.incomeSpouse || ""} onChange={(e) => updateField("incomeSpouse", Number(e.target.value))} className="h-11 bg-zinc-50/50 rounded-xl" />
                           </div>
                           <div className="space-y-6 pt-4">
                              <div className="flex justify-between">
                                 <Label className="text-xs font-bold text-zinc-600">Custody Allocation</Label>
                                 <span className="text-xs font-black">{inputs.custodyPercentage}%</span>
                              </div>
                              <Slider value={[inputs.custodyPercentage]} onValueChange={(v) => updateField("custodyPercentage", v[0])} max={100} />
                           </div>
                        </div>
                     </div>

                     <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                           <Sparkles className="w-4 h-4 text-[#EAB308]" />
                           <h4 className="text-[10px] uppercase font-black tracking-widest text-[#EAB308]">Premium Assets</h4>
                        </div>
                        <div className="grid gap-6">
                           <div className="space-y-2">
                              <Label className="text-xs font-bold text-zinc-600">Liquid Savings</Label>
                              <Input type="number" value={inputs.savings || ""} onChange={(e) => updateField("savings", Number(e.target.value))} className="h-11 bg-white border-[#EAB308]/20 rounded-xl" />
                           </div>
                           <div className="space-y-2">
                              <Label className="text-xs font-bold text-zinc-600">Retirement Accounts</Label>
                              <Input type="number" value={inputs.retirement || ""} onChange={(e) => updateField("retirement", Number(e.target.value))} className="h-11 bg-white border-[#EAB308]/20 rounded-xl" />
                           </div>
                           <div className="space-y-2">
                              <Label className="text-xs font-bold text-zinc-600">Home Equity (Est.)</Label>
                              <Input type="number" value={inputs.homeEquity || ""} onChange={(e) => updateField("homeEquity", Number(e.target.value))} className="h-11 bg-white border-[#EAB308]/20 rounded-xl" />
                           </div>
                        </div>
                     </div>
                  </div>
               </SlideUp>

               <SlideUp yOffset={10} delay={0.1} className="bg-white rounded-[2.5rem] border border-zinc-100 p-8 shadow-[0_8px_40px_rgba(0,0,0,0.03)]">
                  <div className="flex items-center gap-2 mb-8">
                     <Calculator className="w-4 h-4 text-zinc-300" />
                     <h4 className="text-[10px] uppercase font-black tracking-widest text-zinc-400">Monthly Obligations Breakdown</h4>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        { id: "mortgage", label: "Housing", icon: Home },
                        { id: "utilities", label: "Utilities", icon: Droplets },
                        { id: "childcare", label: "Childcare", icon: Heart },
                        { id: "school", label: "Education", icon: GraduationCap },
                        { id: "activities", label: "Child Activities", icon: FileText },
                        { id: "insurance", label: "Insurance", icon: ShieldCheck },
                        { id: "otherExpenses", label: "Other Bills", icon: PlusCircle }
                     ].map((field) => (
                        <div key={field.id} className="space-y-2">
                           <div className="flex items-center gap-1.5 opacity-60">
                              <field.icon className="w-3 h-3" />
                              <Label className="text-[10px] font-bold uppercase tracking-tight">{field.label}</Label>
                           </div>
                           <Input type="number" value={(inputs as any)[field.id] || ""} onChange={(e) => updateField(field.id as any, Number(e.target.value))} className="h-10 bg-zinc-50/50 rounded-xl text-sm" />
                        </div>
                     ))}
                     <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-tight text-zinc-400">Children Count</Label>
                        <Input type="number" value={inputs.childrenCount} onChange={(e) => updateField("childrenCount", Number(e.target.value))} className="h-10 bg-zinc-50/50 rounded-xl" />
                     </div>
                  </div>
               </SlideUp>

               {/* FINANCIAL ADD-ONS SECTION */}
               <SlideUp
                  yOffset={10}
                  delay={0.2}
                  className="bg-white rounded-[2.5rem] border border-zinc-100 p-8 shadow-[0_8px_40px_rgba(0,0,0,0.03)]"
               >
                  <div className="flex items-center gap-2 mb-8">
                     <LayoutGrid className="w-4 h-4 text-zinc-300" />
                     <h4 className="text-[10px] uppercase font-black tracking-widest text-zinc-400">Premium Add-ons Suite</h4>
                  </div>

                  {/* ADD-ON TABS (Only shown if purchased) */}
                  {purchasedAddons.length > 0 && (
                     <div className="mb-8 border-b border-zinc-200 flex gap-2 overflow-x-auto pb-px">
                        {purchasedAddons.map(addon => (
                           <button
                              key={addon.key}
                              onClick={() => setActiveAddonTab(addon.key)}
                              className={`px-6 py-3 rounded-t-2xl font-black text-[10px] uppercase tracking-widest transition-all ${activeAddonTab === addon.key ? "bg-[#111111] text-white" : "bg-zinc-50 text-zinc-500 hover:bg-zinc-100"}`}
                           >
                              {addon.label}
                           </button>
                        ))}
                     </div>
                  )}

                  {/* ADD-ON CONTENT AREA */}
                  {activeAddonTab && (
                     <div className="p-8 bg-zinc-50/50 rounded-[2rem] border border-zinc-100 mb-10 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        {activeAddonTab === "ASSET_SPLIT" && (
                           <div className="grid md:grid-cols-3 gap-8">
                              <div className="space-y-2">
                                 <Label className="text-[10px] font-black uppercase text-zinc-500">Stocks Allocation (%)</Label>
                                 <Input type="number" value={inputs.assetSplit?.stocks || ""} onChange={e => updateField("assetSplit", { ...inputs.assetSplit, stocks: Number(e.target.value) })} className="bg-white rounded-xl h-11" />
                              </div>
                              <div className="space-y-2">
                                 <Label className="text-[10px] font-black uppercase text-zinc-500">Bonds Allocation (%)</Label>
                                 <Input type="number" value={inputs.assetSplit?.bonds || ""} onChange={e => updateField("assetSplit", { ...inputs.assetSplit, bonds: Number(e.target.value) })} className="bg-white rounded-xl h-11" />
                              </div>
                              <div className="space-y-2">
                                 <Label className="text-[10px] font-black uppercase text-zinc-500">Cash Reserves (%)</Label>
                                 <Input type="number" value={inputs.assetSplit?.cash || ""} onChange={e => updateField("assetSplit", { ...inputs.assetSplit, cash: Number(e.target.value) })} className="bg-white rounded-xl h-11" />
                              </div>
                           </div>
                        )}
                        {activeAddonTab === "RETIREMENT" && (
                           <div className="grid md:grid-cols-2 gap-8">
                              <div className="space-y-2">
                                 <Label className="text-[10px] font-black uppercase text-zinc-500">Current Portfolio Balance</Label>
                                 <Input type="number" value={inputs.retirementImpact?.currentBalance || ""} onChange={e => updateField("retirementImpact", { ...inputs.retirementImpact, currentBalance: Number(e.target.value) })} className="bg-white rounded-xl h-11" />
                              </div>
                              <div className="space-y-2">
                                 <Label className="text-[10px] font-black uppercase text-zinc-500">Monthly Post-Divorce Contribution</Label>
                                 <Input type="number" value={inputs.retirementImpact?.monthlyContribution || ""} onChange={e => updateField("retirementImpact", { ...inputs.retirementImpact, monthlyContribution: Number(e.target.value) })} className="bg-white rounded-xl h-11" />
                              </div>
                           </div>
                        )}
                        {activeAddonTab === "VA_DISABILITY" && (
                           <div className="max-w-md space-y-2">
                              <Label className="text-[10px] font-black uppercase text-zinc-500">VA Disability Rating (%)</Label>
                              <div className="flex gap-4 items-center">
                                 <Input type="number" value={inputs.vaDisability?.percentage || ""} onChange={e => updateField("vaDisability", { percentage: Number(e.target.value) })} className="bg-white rounded-xl h-11" />
                                 <span className="text-[11px] font-bold text-zinc-400 italic">Adjusts non-taxable net income.</span>
                              </div>
                           </div>
                        )}
                        {activeAddonTab === "HOUSING" && (
                           <div className="grid md:grid-cols-2 gap-8">
                              <div className="space-y-2">
                                 <Label className="text-[10px] font-black uppercase text-zinc-500">Assessed Home Value</Label>
                                 <Input type="number" value={inputs.housingScenario?.homeValue || ""} onChange={e => updateField("housingScenario", { ...inputs.housingScenario, homeValue: Number(e.target.value) })} className="bg-white rounded-xl h-11" />
                              </div>
                              <div className="space-y-2">
                                 <Label className="text-[10px] font-black uppercase text-zinc-500">New Mortgage/Rent Payment</Label>
                                 <Input type="number" value={inputs.housingScenario?.mortgage || ""} onChange={e => updateField("housingScenario", { ...inputs.housingScenario, mortgage: Number(e.target.value) })} className="bg-white rounded-xl h-11" />
                              </div>
                           </div>
                        )}
                     </div>
                  )}

                  {/* UNLOCK GRID (Filter out purchased) */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                     {availableAddons.map((addon) => (
                        <div key={addon.id} className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50/30 flex flex-col items-center text-center gap-3 relative overflow-hidden group">
                           <p className="text-xs font-bold text-zinc-600">{addon.label}</p>
                           <p className="text-[14px] font-black text-zinc-900 uppercase tracking-widest">${addon.price}</p>
                           <Button
                              onClick={() => handleCheckout(isCore ? "ADDON" : "CORE", isCore ? addon.key : undefined)}
                              disabled={!!isRedirecting}
                              variant="outline"
                              className="h-9 rounded-full text-[10px] font-black uppercase tracking-widest px-6 border-zinc-200 hover:bg-[#111111] hover:text-white transition-all min-w-[120px]"
                           >
                              {isRedirecting === (isCore ? "ADDON" + addon.key : "CORE") ? (
                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              ) : (
                                isCore ? "Unlock Access" : "Upgrade Core"
                              )}
                           </Button>
                        </div>
                     ))}
                     {availableAddons.length === 0 && purchasedAddons.length > 0 && (
                        <div className="col-span-full py-10 flex flex-col items-center justify-center text-center bg-zinc-50/50 rounded-3xl border border-dashed border-zinc-200">
                           <CheckCircle2 className="w-8 h-8 text-[#16A34A] mb-3 opacity-20" />
                           <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">All Expansion Modules Unlocked</p>
                        </div>
                     )}
                  </div>
               </SlideUp>
            </div>

            {/* 2. STICKY SCORE SIDEBAR */}
            {/* 2. RIGHT PANEL (FIXED HEIGHT + NO SCROLL) */}
            <div className="lg:col-span-4 lg:sticky lg:top-6 h-[calc(100vh-40px)] flex flex-col gap-4 pb-10">

               {/* ============================= */}
               {/* TOP: REALITY SCORE (REDUCED) */}
               {/* ============================= */}
               <FadeIn delay={0.2}>
                  <Card className="rounded-[2rem] border-none bg-[#111111] text-white shadow-[0_32px_100px_rgba(0,0,0,0.12)] overflow-hidden flex-shrink-0">
                     <CardHeader className="p-6 pb-0 border-none">
                        <div className="flex justify-between items-start">
                           <div>
                              <CardTitle className="text-lg font-semibold tracking-[0.08em] text-white/90">
                                 Financial Reality
                              </CardTitle>

                              <div className="flex items-center gap-2 mt-1">
                                 <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                                    Live Modeling Result
                                 </p>

                                 {isCore && (
                                    <button
                                       onClick={handleCompare}
                                       className="text-[12px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border border-emerald-600 text-emerald-600 hover:border-emerald-500 hover:text-emerald-500 transition-all animate-pulse cursor-pointer"
                                    >
                                       Compare
                                    </button>
                                 )}
                              </div>
                           </div>

                           <div className={`p-2 rounded-xl ${statusStyles.ring} bg-white/5`}>
                              <ShieldCheck className="w-4 h-4" />
                           </div>
                        </div>
                     </CardHeader>

                     <CardContent className="p-6 pt-2">
                        {/* SCORE SECTION - Original size */}
                        <div className="relative flex items-center justify-center py-2">
                           <div className={`absolute h-32 w-32 rounded-full blur-[50px] opacity-30 ${statusStyles.glow}`} />

                           <div className={`relative flex h-28 w-28 flex-col items-center justify-center rounded-full border-[0.6rem] border-white/5 ${statusStyles.ring}`}>
                              <span className="text-2xl font-black">{impactFormatted}</span>
                              <span className="text-[7px] font-black uppercase tracking-[0.2em] text-zinc-500 text-center px-1">
                                 {results.realityScoreLabel}
                              </span>
                           </div>
                        </div>

                        {/* MINI METRICS - Compact */}
                        <div className="grid gap-2 mt-4">
                           {/* Disposable Income */}
                           <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center hover:bg-white/10 transition-all group">
                              <div>
                                 <p className="text-[9px] text-zinc-400 uppercase tracking-widest mb-0.5">
                                    Disposable Income
                                 </p>
                                 <p className="text-base font-black tracking-tight">
                                    <span className={results.disposableIncome > 0 ? "text-emerald-500" : "text-rose-500"}>
                                       {currency(results.disposableIncome)}
                                    </span>
                                 </p>
                              </div>
                              <TrendingUp className={`w-3.5 h-3.5 ${results.disposableIncome > 0 ? "text-emerald-500/70" : "text-rose-500/70"} group-hover:scale-110 transition-transform`} />
                           </div>

                           {/* Monthly Support */}
                           <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center hover:bg-white/10 transition-all group">
                              <div>
                                 <p className="text-[9px] text-zinc-400 uppercase tracking-widest mb-0.5">
                                    {results.monthlySupport < 0 ? "Support Received" : "Monthly Support"}
                                 </p>
                                 <p className="text-base font-black tracking-tight">
                                    <span className={
                                       results.monthlySupport < 0 ? "text-emerald-500" :
                                          results.realityScore < 40 ? "text-emerald-500" :
                                             results.realityScore <= 70 ? "text-amber-500" : "text-rose-500"
                                    }>
                                       {currency(Math.abs(results.monthlySupport))}
                                    </span>
                                 </p>
                              </div>
                              <Users className={`w-3.5 h-3.5 transition-transform group-hover:scale-110 ${results.monthlySupport < 0 ? "text-emerald-500/70" :
                                 results.realityScore < 40 ? "text-emerald-500/70" :
                                    results.realityScore <= 70 ? "text-amber-500/70" : "text-rose-500/70"
                                 }`} />
                           </div>

                           {/* Net Income */}
                           <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center hover:bg-white/10 transition-all group">
                              <div>
                                 <p className="text-[9px] text-zinc-400 uppercase tracking-widest mb-0.5">
                                    Net Monthly Income
                                 </p>
                                 <p className="text-base font-black tracking-tight text-white">
                                    {currency(results.netMonthlyIncome)}
                                 </p>
                              </div>
                              <Wallet className="w-3.5 h-3.5 text-zinc-400 transition-transform group-hover:scale-110" />
                           </div>
                        </div>

                        {/* Impact Bar - Compact */}
                        <div className="mt-4 pt-1">
                           <div className="flex justify-between items-center mb-1.5">
                              <span className="text-[7px] font-black uppercase tracking-wider text-zinc-500">
                                 Impact Level
                              </span>
                              <span className={`text-[7px] font-black uppercase tracking-wider ${results.realityScore < 40 ? "text-emerald-500" :
                                 results.realityScore <= 70 ? "text-amber-500" : "text-rose-500"
                                 }`}>
                                 {results.realityScoreLabel}
                              </span>
                           </div>
                           <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                              <div
                                 className={`h-full transition-all duration-500 rounded-full ${results.realityScore < 40 ? "bg-emerald-500" :
                                    results.realityScore <= 70 ? "bg-amber-500" : "bg-rose-500"
                                    }`}
                                 style={{ width: `${results.realityScore}%` }}
                              />
                           </div>
                           <div className="flex justify-between mt-1">
                              <span className="text-[5px] font-black uppercase tracking-wider text-zinc-600">Low</span>
                              <span className="text-[5px] font-black uppercase tracking-wider text-zinc-600">Medium</span>
                              <span className="text-[5px] font-black uppercase tracking-wider text-zinc-600">High</span>
                           </div>
                        </div>

                        {/* PREMIUM PDF ACTION */}
                        <div className="mt-8 px-1">
                           <TooltipProvider>
                              <Tooltip delayDuration={0}>
                                 <TooltipTrigger asChild>
                                    <button
                                       onClick={handleDownloadReport}
                                       className={cn(
                                          "w-full h-12 rounded-2xl flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] border font-black text-[11px] uppercase tracking-[0.2em] shadow-sm",
                                          isSubscribed
                                             ? "bg-white text-[#111111] border-zinc-200 hover:bg-zinc-50"
                                             : "bg-white/5 text-zinc-500 border-white/5 opacity-60 cursor-not-allowed"
                                       )}
                                    >
                                       {isSubscribed ? (
                                          <>
                                             <FileDown className="w-4 h-4" />
                                             Download Analysis Report
                                          </>
                                       ) : (
                                          <>
                                             <Lock className="w-3.5 h-3.5 opacity-40" />
                                             Unlock Report — $19
                                          </>
                                       )}
                                    </button>
                                 </TooltipTrigger>
                                 {!isSubscribed && (
                                    <TooltipContent side="top" className="bg-white border-zinc-100 text-[#111111] font-black text-[10px] uppercase tracking-widest shadow-xl py-3 px-4 rounded-xl">
                                       Available with Subscription plan
                                    </TooltipContent>
                                 )}
                              </Tooltip>
                           </TooltipProvider>
                        </div>
                     </CardContent>
                  </Card>
               </FadeIn>

            </div>
         </div>

         <Dialog open={isSaveDialogOpen} onOpenChange={setIsSaveDialogOpen}>
            <DialogContent className="max-w-sm rounded-[2.5rem] p-0 border-none bg-white overflow-hidden shadow-2xl">
               <div className="relative p-7 flex flex-col items-center text-center">
                  {/* Background Decorative Element */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-zinc-50 rounded-full blur-[80px] -z-10" />

                  {/* Close Button - Premium Top Right */}
                  <DialogPrimitive.Close className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-50 transition-colors group">
                     <XIcon className="w-4 h-4 text-zinc-300 group-hover:text-zinc-600" />
                  </DialogPrimitive.Close>

                  {/* Premium Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-[#111111] flex items-center justify-center mb-5 shadow-xl shadow-black/20">
                     <Lock className="h-5 w-5 text-white" />
                  </div>

                  <div className="space-y-1.5 mb-6">
                     <DialogTitle className="text-xl font-black text-[#111111] tracking-tight">
                        Unlock Strategic Pass
                     </DialogTitle>
                     <DialogDescription className="text-[10px] font-medium text-zinc-500 max-w-[220px] mx-auto leading-relaxed">
                        Persist modeling history and unlock strategic insights for just $19.
                     </DialogDescription>
                  </div>

                  {/* Benefits Checklist - Ultra Compact */}
                  <div className="w-full space-y-1.5 mb-6">
                     {[
                        "Save & Persist Infinite Models",
                        "AI Strategic Support Guidance",
                        "Multi-Scenario Comparison"
                     ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-50/50 border border-zinc-100/30">
                           <div className="shrink-0 w-3.5 h-3.5 rounded-full bg-[#16A34A]/10 flex items-center justify-center">
                              <CheckCircle2 className="w-2 h-2 text-[#16A34A]" />
                           </div>
                           <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500">
                              {feature}
                           </span>
                        </div>
                     ))}
                  </div>

                  <div className="w-full space-y-2">
                     <Button
                        onClick={() => handleCheckout(isCore ? "SUBSCRIPTION" : "CORE")}
                        disabled={!!isRedirecting}
                        className="w-full rounded-xl bg-[#111111] h-11 text-[9px] font-black uppercase tracking-[0.2em] text-white hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-lg shadow-black/5"
                     >
                        {isRedirecting === (isCore ? "SUBSCRIPTION" : "CORE") ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          isCore ? "Activate Professional Pass" : "Unlock Core Intelligence"
                        )}
                     </Button>

                     <DialogPrimitive.Close asChild>
                        <button
                           className="text-[8px] font-black uppercase tracking-widest text-zinc-300 hover:text-zinc-500 transition-colors py-1"
                        >
                           Maybe Later
                        </button>
                     </DialogPrimitive.Close>
                  </div>

                  <div className="mt-4 pt-4 border-t border-zinc-50 w-full">
                     <p className="text-[7px] font-black uppercase tracking-[0.5em] text-zinc-200">
                        Costly • System Pro
                     </p>
                  </div>
               </div>
            </DialogContent>
         </Dialog>
      </div>
   );
}
