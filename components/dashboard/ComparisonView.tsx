"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  TrendingUp,
  Users,
  ShieldCheck,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Wallet,
  Info,
  ChevronRight,
  Database
} from "lucide-react";
import Link from "next/link";
import { runCalculationEngine, CalculationInput } from "@/lib/calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import React from "react";
import { cn } from "@/lib/utils";

interface ComparisonViewProps {
  baseModel: CalculationInput;
  optimizedModel: CalculationInput;
  scenarios: { id: string; name: string; data: CalculationInput }[];
  selectedScenarioId: string;
  onScenarioSelect?: (id: string) => void;
  onBack?: () => void;
}

function currency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function ComparisonView({
  baseModel,
  optimizedModel,
  scenarios,
  selectedScenarioId,
  onScenarioSelect,
  onBack
}: ComparisonViewProps) {
  // Dynamic Baseline Logic: Use selected scenario data if exists, fallback to baseModel
  const currentScenario = scenarios.find(s => s.id === selectedScenarioId);
  const effectiveBaseModel = currentScenario ? currentScenario.data : baseModel;

  const baseResults = runCalculationEngine(effectiveBaseModel);
  const liveResults = runCalculationEngine(optimizedModel);
  const [isAnalyzing, setIsAnalyzing] = React.useState(true);

  React.useEffect(() => {
    setIsAnalyzing(true);
    const t = setTimeout(() => setIsAnalyzing(false), 600);
    return () => clearTimeout(t);
  }, [selectedScenarioId]);

  const getStatusColor = (score: number) => {
    if (score < 40) return "text-[#16A34A]";
    if (score <= 70) return "text-[#EAB308]";
    return "text-[#DC2626]";
  };

  const getStatusBg = (score: number) => {
    if (score < 40) return "bg-[#16A34A]/5";
    if (score <= 70) return "bg-[#EAB308]/5";
    return "bg-[#DC2626]/5";
  };

  const getStatusBorder = (score: number) => {
    if (score < 40) return "border-[#16A34A]/20";
    if (score <= 70) return "border-[#EAB308]/20";
    return "border-[#DC2626]/20";
  };

  const disposableDelta = liveResults.disposableIncome - baseResults.disposableIncome;
  const supportDelta = liveResults.monthlySupport - baseResults.monthlySupport;

  return (
    <div className="flex flex-col lg:flex-row bg-[#F9FAFB] lg:rounded-3xl overflow-hidden border-b lg:border border-zinc-200 shadow-sm h-full min-h-screen lg:h-[calc(100vh-2rem)] lg:m-4">
      
      {/* SIDEBAR: Scenario Selection (Desktop) / TOP BAR (Mobile) */}
      <aside className="w-full lg:w-80 border-b lg:border-r border-zinc-100 bg-white/80 backdrop-blur-xl flex flex-col shrink-0">
        <div className="p-6 lg:p-8 border-b border-zinc-50">
           {/* BACK BUTTON */}
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-zinc-400 hover:text-[#111111] transition-all mb-4 lg:mb-8 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span className="text-[10px] font-black uppercase tracking-widest">Return to Base</span>
            </button>
          )}

          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-1.5 h-4 bg-black rounded-full" />
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111]">Library Access</h2>
          </div>
          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest leading-relaxed">
            Comparative Benchmark Set
          </p>
        </div>

        {/* Mobile Scenario Selector: Horizontal Scroll */}
        <div className="lg:hidden flex overflow-x-auto p-4 gap-3 no-scrollbar bg-white/50">
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => onScenarioSelect?.(s.id)}
              className={cn(
                "px-4 py-2 rounded-xl border whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-all",
                selectedScenarioId === s.id 
                  ? "bg-[#111] text-white border-black" 
                  : "bg-white text-zinc-400 border-zinc-100"
              )}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Desktop Scenario List */}
        <div className="hidden lg:flex flex-1 overflow-y-auto p-4 space-y-2 no-scrollbar">
          {scenarios.map((s, idx) => (
            <motion.button
              key={s.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => onScenarioSelect?.(s.id)}
              className={cn(
                "w-full p-5 rounded-2xl text-left transition-all duration-300 border flex items-center justify-between group relative overflow-hidden",
                selectedScenarioId === s.id 
                  ? "bg-[#111] border-black text-white shadow-2xl scale-[1.02] z-10" 
                  : "bg-white border-zinc-100 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50"
              )}
            >
              <div className="flex flex-col gap-1 relative z-10">
                <span className={cn("text-[8px] font-black uppercase tracking-[0.2em]", selectedScenarioId === s.id ? "text-zinc-500" : "text-zinc-400")}>
                  Ref ID: {s.id.slice(-4).toUpperCase()}
                </span>
                <span className="font-black text-xs sm:text-sm tracking-tight truncate max-w-[170px]">
                  {s.name}
                </span>
              </div>
              <ChevronRight className={cn("w-4 h-4 transition-all duration-300", selectedScenarioId === s.id ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100")} />
            </motion.button>
          ))}

          {scenarios.length === 0 && (
            <div className="p-10 text-center border-2 border-dashed border-zinc-100 rounded-[2rem] bg-zinc-50/50">
              <Database className="w-10 h-10 text-zinc-200 mx-auto mb-4" />
              <p className="text-[9px] text-zinc-400 font-black uppercase tracking-widest leading-loose">Initialization Required<br/>No models detected</p>
            </div>
          )}
        </div>

        <div className="hidden lg:block p-6 bg-white border-t border-zinc-50">
          <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-[1.5rem] border border-zinc-100">
             <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-lg shadow-black/10">
                <BrainCircuit className="w-5 h-5 text-white" />
             </div>
             <div>
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-zinc-900 leading-none mb-1">Compute Center</p>
                <div className="flex items-center gap-1.5 font-black text-[8px] text-emerald-600 uppercase tracking-widest">
                   <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                   Active Engine
                </div>
             </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT: Cinematic Workbench */}
      <main className="flex-1 overflow-x-hidden flex flex-col bg-white overflow-y-auto no-scrollbar">
        <div className="max-w-5xl mx-auto w-full p-4 md:p-8 lg:p-12 flex flex-col min-h-full">
          
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-16 shrink-0">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#16A34A]/5 border border-[#16A34A]/10">
                <div className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#16A34A]">High-Precision Delta Analysis</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-[#111] tracking-tighter leading-none">Strategic Workbench</h1>
              <p className="text-[10px] md:text-sm text-zinc-400 font-bold uppercase tracking-widest max-w-md">Absolute disparity metrics across independent settlement models.</p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#111] px-6 py-4 md:px-8 md:py-6 rounded-3xl md:rounded-[2.5rem] shadow-2xl flex items-center justify-between md:justify-start gap-4 md:gap-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="flex flex-col relative z-10">
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-1">Net Delta Outcome</span>
                <span className="text-xl md:text-2xl font-black text-white tabular-nums">
                  {disposableDelta >= 0 ? "+" : ""}{currency(disposableDelta)}
                </span>
              </div>
              <div className="hidden md:block w-px h-10 bg-zinc-800 relative z-10" />
              <div className={cn("px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-3 relative z-10", disposableDelta >= 0 ? "bg-[#16A34A]/10" : "bg-[#DC2626]/10")}>
                {disposableDelta >= 0 ? <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-[#16A34A]" /> : <XCircle className="w-3 h-3 md:w-4 md:h-4 text-[#DC2626]" />}
                <span className="text-[8px] md:text-xs font-black uppercase tracking-widest text-inherit whitespace-nowrap">
                  {disposableDelta >= 0 ? "Improved" : "Reduced"}
                </span>
              </div>
            </motion.div>
          </header>

          <AnimatePresence mode="wait">
            {isAnalyzing ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col items-center justify-center gap-8 py-20"
              >
                <div className="relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 md:w-24 md:h-24 border-[3px] border-zinc-100 border-t-black rounded-full" 
                  />
                  <div className="absolute inset-2 border-[1px] border-zinc-100 rounded-full border-dashed" />
                  <BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125" />
                </div>
                <div className="text-center p-4">
                   <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-zinc-900 mb-2">Aligning Neural Models</p>
                   <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-zinc-300">Syncing comparative computation nodes...</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 flex-1"
              >
                
                {/* 1. SAVED SCENARIO CARD */}
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", damping: 20, stiffness: 100 }}
                  className="group"
                >
                  <Card className="rounded-[2.5rem] md:rounded-[3rem] border border-zinc-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full ring-1 ring-zinc-50">
                    <CardHeader className="p-6 md:p-8 pb-4 shrink-0">
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <Database className="w-3.5 h-3.5 text-zinc-300" />
                          <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">Baseline Target Model</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-black text-[#111] tracking-tight truncate">
                        {scenarios.find(s => s.id === selectedScenarioId)?.name || "Saved Scenario"}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-6 md:p-8 pt-0 flex-1 flex flex-col gap-6 md:gap-8">
                      {/* Status Score */}
                      <div className={cn(
                        "py-10 md:py-12 rounded-[2rem] md:rounded-[2.5rem] border flex flex-col items-center justify-center gap-2 transition-all duration-1000 group-hover:scale-[1.02]",
                        getStatusBorder(baseResults.realityScore), getStatusBg(baseResults.realityScore)
                      )}>
                        <span className={cn("text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]", getStatusColor(baseResults.realityScore))}>
                          {baseResults.realityScoreLabel} Status
                        </span>
                        <span className="text-6xl md:text-8xl font-black tracking-tighter text-[#111] tabular-nums">
                          {baseResults.realityScore}<span className="text-3xl md:text-4xl opacity-20">%</span>
                        </span>
                        <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-zinc-300 mt-2">Stability Index</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <div className="p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-zinc-50 border border-zinc-100 flex flex-col gap-1 transition-all hover:bg-white hover:shadow-md">
                          <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-zinc-400">Disposable</p>
                          <p className="text-sm md:text-lg font-black text-[#111] tabular-nums">{currency(baseResults.disposableIncome)}</p>
                        </div>
                        <div className="p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-zinc-50 border border-zinc-100 flex flex-col gap-1 transition-all hover:bg-white hover:shadow-md">
                          <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-zinc-400">Obligation</p>
                          <p className="text-sm md:text-lg font-black text-[#111] tabular-nums">{currency(Math.abs(baseResults.monthlySupport))}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* 2. LIVE MODEL CARD */}
                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", damping: 20, stiffness: 100 }}
                  className="group"
                >
                  <Card className="rounded-[2.5rem] md:rounded-[3rem] border-none bg-[#111] shadow-[0_40px_100px_rgba(0,0,0,0.15)] flex flex-col relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    
                    <CardHeader className="p-6 md:p-8 pb-4 relative z-10 shrink-0">
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <BrainCircuit className="w-3.5 h-3.5 text-[#16A34A]" />
                          <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-[#16A34A]">Live Intelligent Forecast</span>
                        </div>
                        <div className="px-3 py-1 bg-[#16A34A] text-white rounded-full text-[7px] md:text-[8px] font-black uppercase tracking-widest flex items-center gap-1">
                           <div className="w-1 h-1 bg-white rounded-full animate-ping" />
                           Real-time
                        </div>
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-black text-white tracking-tight">
                        Optimized View
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-6 md:p-8 pt-0 flex-1 flex flex-col gap-6 md:gap-8 relative z-10">
                      {/* Status Score */}
                      <div className={cn(
                        "py-10 md:py-12 rounded-[2rem] md:rounded-[2.5rem] border flex flex-col items-center justify-center gap-2 transition-all duration-1000 group-hover:scale-[1.02] shadow-2xl shadow-black/40",
                        getStatusBorder(liveResults.realityScore), getStatusBg(liveResults.realityScore)
                      )}>
                        <span className={cn("text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]", getStatusColor(liveResults.realityScore))}>
                          {liveResults.realityScoreLabel} Status
                        </span>
                        <span className="text-6xl md:text-8xl font-black tracking-tighter text-white tabular-nums">
                          {liveResults.realityScore}<span className="text-3xl md:text-4xl opacity-20">%</span>
                        </span>
                        <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#16A34A]/40 mt-2">Stability Index</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                         <div className="p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 flex flex-col gap-1 transition-all hover:bg-white/10">
                          <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-zinc-500">Target Net</p>
                          <div className="flex items-baseline gap-2">
                            <p className="text-sm md:text-lg font-black text-white tabular-nums">{currency(liveResults.disposableIncome)}</p>
                            <span className={cn("text-[7px] md:text-[8px] font-black px-1.5 py-0.5 rounded-full tabular-nums", disposableDelta >= 0 ? "bg-[#16A34A]/20 text-[#16A34A]" : "bg-[#DC2626]/20 text-[#DC2626]")}>
                              {disposableDelta >= 0 ? "+" : ""}{currency(disposableDelta)}
                            </span>
                          </div>
                        </div>
                        <div className="p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 flex flex-col gap-1 transition-all hover:bg-white/10">
                          <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-zinc-500">Optimizer Result</p>
                          <p className="text-sm md:text-lg font-black text-white tabular-nums">{currency(Math.abs(liveResults.monthlySupport))}</p>
                        </div>
                      </div>

                      {/* Premium Strategic Insight Bar */}
                      <div className="p-4 md:p-5 bg-white shadow-xl rounded-[1.5rem] md:rounded-[2rem] flex gap-3 md:gap-4 items-center shrink-0 border-b-4 border-emerald-500 transition-transform hover:-translate-y-1">
                         <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#16A34A]" />
                         </div>
                         <p className="text-[9px] md:text-[10px] text-zinc-600 font-black leading-relaxed uppercase tracking-tighter">
                           Modeling predicts a <span className="text-[#16A34A]">{disposableDelta >= 0 ? "favorable delta" : "structural deficit"}</span> of <span className="text-[#111]">{currency(Math.abs(disposableDelta))}</span>.
                         </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <footer className="mt-8 md:mt-16 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6 pb-20 md:pb-8">
             <div className="flex items-center gap-6">
                <div className="flex flex-col">
                   <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-1">Compute Precision</span>
                   <span className="text-[9px] md:text-[10px] font-black text-[#111]">99.98% Delta Fidelity</span>
                </div>
                <div className="w-px h-8 bg-zinc-100" />
                <div className="flex flex-col">
                   <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-1">Active Protocols</span>
                   <span className="text-[9px] md:text-[10px] font-black text-[#111]">Secure Benchmarking V4</span>
                </div>
             </div>
          </footer>
        </div>
      </main>
    </div>
  );
}