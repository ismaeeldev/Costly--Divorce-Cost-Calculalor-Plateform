import { ShieldAlert, Info } from "lucide-react";

export function LegalDisclaimer() {
  return (
    <div className="w-full bg-zinc-50 border border-zinc-100 rounded-3xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden group">
      <div className="w-12 h-12 rounded-2xl bg-[#111111] text-white flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-transform">
        <ShieldAlert className="w-6 h-6" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111111]">Required Legal Notice</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>
        <h3 className="text-xl font-black italic tracking-tight">Not Legal Advice</h3>
        <p className="text-sm text-zinc-500 font-bold leading-relaxed max-w-2xl">
          Costly is a financial modeling and strategic analysis tool designed for educational and informational purposes only. We are not a law firm and do not provide legal, tax, or professional advice. The information provided by this tool should not be used as a substitute for competent legal advice from a licensed professional attorney in your jurisdiction.
        </p>
      </div>
      
      {/* Subtle accent icon */}
      <Info className="absolute top-4 right-4 w-4 h-4 text-zinc-200" />
    </div>
  );
}
