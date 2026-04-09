"use client";

import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  ShieldCheck, 
  BrainCircuit, 
  LayoutGrid,
  Wallet,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * DASHBOARD PREVIEW MOCK
 * A high-fidelity, non-interactive visual representation of the premium dashboard.
 * Used as a "Behind the Glass" value signal to drive conversions.
 */

interface DashboardPreviewProps {
  className?: string;
  isBlurred?: boolean;
}

export function DashboardPreview({ className, isBlurred = true }: DashboardPreviewProps) {
  return (
    <div className={cn(
      "w-full aspect-[16/10] bg-white rounded-[2.5rem] border border-zinc-100 shadow-2xl overflow-hidden relative",
      className
    )}>
      {/* SIDEBAR MOCK */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 bg-zinc-50 border-r border-zinc-100 flex flex-col items-center py-6 gap-8">
        <div className="w-8 h-8 rounded-xl bg-[#111111]/10 animate-pulse" />
        <div className="flex flex-col gap-6">
          <LayoutGrid className="w-5 h-5 text-zinc-300" />
          <TrendingUp className="w-5 h-5 text-zinc-300" />
          <PieChart className="w-5 h-5 text-zinc-300" />
          <BarChart3 className="w-5 h-5 text-zinc-300" />
          <BrainCircuit className="w-5 h-5 text-zinc-300" />
        </div>
      </div>

      {/* MAIN CONTENT MOCK */}
      <div className={cn(
        "ml-16 md:ml-20 p-6 md:p-10 space-y-8 h-full transition-all duration-1000",
        isBlurred && "blur-xl scale-105"
      )}>
        {/* HEADER BAR */}
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <div className="w-32 h-6 bg-zinc-100 rounded-lg" />
            <div className="w-20 h-4 bg-zinc-50 rounded-lg" />
          </div>
          <div className="flex gap-3">
            <div className="w-24 h-10 bg-zinc-100 rounded-xl" />
            <div className="w-24 h-10 bg-[#111111] rounded-xl" />
          </div>
        </div>

        {/* TOP METRICS ROW */}
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-100 space-y-4">
            <ShieldCheck className="w-6 h-6 text-[#16A34A]" />
            <div className="space-y-2">
              <div className="w-full h-8 bg-zinc-200/50 rounded-lg" />
              <div className="w-2/3 h-4 bg-zinc-100 rounded-lg" />
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-100 space-y-4">
            <Wallet className="w-6 h-6 text-[#111111]" />
            <div className="space-y-2">
              <div className="w-full h-8 bg-zinc-200/50 rounded-lg" />
              <div className="w-2/3 h-4 bg-zinc-100 rounded-lg" />
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-100 space-y-4">
             <Sparkles className="w-6 h-6 text-[#16A34A]" />
             <div className="space-y-2">
              <div className="w-full h-8 bg-emerald-200/50 rounded-lg" />
              <div className="w-2/3 h-4 bg-emerald-100 rounded-lg" />
            </div>
          </div>
        </div>

        {/* LARGE CHART MOCK */}
        <div className="flex-1 p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 min-h-[200px] flex items-end gap-3">
           <div className="flex-1 bg-zinc-200 rounded-t-xl h-[40%]" />
           <div className="flex-1 bg-zinc-300 rounded-t-xl h-[70%]" />
           <div className="flex-1 bg-[#111111] rounded-t-xl h-[90%]" />
           <div className="flex-1 bg-zinc-200 rounded-t-xl h-[50%]" />
           <div className="flex-1 bg-zinc-300 rounded-t-xl h-[85%]" />
           <div className="flex-1 bg-emerald-500 rounded-t-xl h-[65%]" />
           <div className="flex-1 bg-zinc-200 rounded-t-xl h-[30%]" />
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-2 gap-6">
          <div className="h-32 bg-zinc-50 border border-zinc-100 rounded-3xl" />
          <div className="h-32 bg-zinc-50 border border-zinc-100 rounded-3xl" />
        </div>
      </div>

      {/* OVERLAY ICON (Optional, if blurred) */}
      {isBlurred && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-12 text-center pointer-events-none">
          <div className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center mb-6 border border-zinc-50">
             <ShieldCheck className="w-10 h-10 text-emerald-500" />
          </div>
          <div className="max-w-xs space-y-2">
            <div className="h-4 w-40 bg-[#111111]/20 rounded-full mx-auto" />
            <div className="h-3 w-32 bg-zinc-200 rounded-full mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
}
