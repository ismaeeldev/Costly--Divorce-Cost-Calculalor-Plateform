"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Premium SaaS Loading State for Costly Dashboard
 * Features a cinematic pulsing engine and strategic status cycling.
 */
export default function DashboardLoading() {
  const [statusIndex, setStatusIndex] = useState(0);
  const statuses = [
    "Synthesizing Strategic Data",
    "Calibrating State Guidelines",
    "Optimizing Household Ratios",
    "Preparing Strategic Workbench",
    "Aligning Future Scenarios"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [statuses.length]);

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Cinematic Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-50/50 rounded-full blur-[120px] -z-10 animate-pulse" 
           style={{ animationDelay: "1s" }} />

      <div className="relative flex flex-col items-center">
        {/* The Pulsing Engine Core */}
        <div className="relative">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl scale-150"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-24 h-24 rounded-[2rem] bg-[#111111] shadow-2xl shadow-black/20 flex items-center justify-center z-10"
          >
            <BrainCircuit className="w-10 h-10 text-white" />
            
            {/* Corner Sparkle */}
            <motion.div
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-6 h-6 text-emerald-500" />
            </motion.div>
          </motion.div>
        </div>

        {/* Loading Content */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300">
              Active Strategy Engine
            </span>
            <motion.p
              key={statusIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-sm font-black text-[#111111] uppercase tracking-widest min-h-[1.5rem]"
            >
              {statuses[statusIndex]}
            </motion.p>
          </div>

          {/* Progress Bar (Indeterminate) */}
          <div className="w-48 h-1 bg-zinc-100 rounded-full overflow-hidden mx-auto">
            <motion.div
              animate={{ 
                x: ["-100%", "100%"]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-1/2 h-full bg-emerald-500 rounded-full"
            />
          </div>
        </div>

        {/* Brand Signifier */}
        <div className="absolute bottom-[-150px] flex flex-col items-center gap-2 opacity-20">
           <div className="w-px h-12 bg-zinc-300" />
           <span className="text-[8px] font-black uppercase tracking-[1em] text-zinc-400">
             Costly Compute
           </span>
        </div>
      </div>
    </div>
  );
}
