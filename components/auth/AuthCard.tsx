import { ReactNode } from "react";
import { FadeIn } from "@/components/animations/FadeIn";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function AuthCard({ title, description, children }: AuthCardProps) {
  return (
    <main className="flex min-h-screen bg-zinc-50 flex-col items-center justify-center p-4">
      <FadeIn className="w-full max-w-[420px]">
        {/* Brand Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-[#111111] rounded-2xl flex items-center justify-center mb-4 shadow-sm">
            <span className="text-white font-black text-xl tracking-tighter">C</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111] mb-2">{title}</h1>
          <p className="text-zinc-500 text-center font-medium">{description}</p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {children}
        </div>
        
        {/* Safe security footer */}
        <p className="text-center text-xs text-zinc-400 font-medium tracking-wide mt-8 uppercase flex items-center justify-center gap-2">
          Secure Encrypted Connection
        </p>
      </FadeIn>
    </main>
  );
}
