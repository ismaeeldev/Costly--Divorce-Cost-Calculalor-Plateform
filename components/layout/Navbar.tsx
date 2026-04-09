"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  const { data: session, status } = useSession();
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="container h-16 flex items-center">
        {/* LEFT: LOGO */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="group flex items-center transition-all">
            <Image
              src="/costly-logo.png"
              alt="Costly Logo"
              width={160}
              height={44}
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </Link>
        </div>

        {/* CENTER: PRICING (Desktop Only to prevent Mobile Overlap) */}
        <div className="hidden lg:flex flex-1 justify-center">
          <Button variant="ghost" asChild className="text-zinc-500 font-bold hover:text-black hover:bg-zinc-50 rounded-xl px-4 transition-all">
            <Link href="/paywall">Pricing</Link>
          </Button>
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex-1 flex justify-end items-center gap-2 lg:gap-6">
          <div className="flex items-center gap-1 sm:gap-2">
            {/* USER STATE - NO FLICKER */}
            {status === "loading" ? (
              <div className="w-24 h-9 bg-zinc-50 animate-pulse rounded-xl border border-zinc-100/50" />
            ) : status === "authenticated" ? (
              <div className="flex items-center gap-1 sm:gap-2">
                {((session?.user as any)?.hasFullAccess) ? (
                  <Button variant="ghost" asChild className="text-zinc-500 font-bold hover:text-black hover:bg-zinc-50 rounded-xl px-2 sm:px-4 transition-all">
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                ) : (session?.user as any)?.entryPurchased ? (
                  <>
                    <Button variant="ghost" asChild className="text-zinc-500 font-bold hover:text-black hover:bg-zinc-50 rounded-xl px-2 sm:px-4 transition-all whitespace-nowrap">
                      <Link href="/results">Results</Link>
                    </Button>
                    <Button variant="ghost" asChild className="text-zinc-500 font-bold hover:text-black hover:bg-zinc-50 rounded-xl px-2 sm:px-4 transition-all">
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>
                  </>
                ) : (
                  <Button variant="ghost" asChild className="text-zinc-500 font-bold hover:text-black hover:bg-zinc-50 rounded-xl px-2 sm:px-4 transition-all">
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                )}
              </div>
            ) : (
              <Button variant="ghost" asChild className="text-zinc-500 font-bold hover:text-black hover:bg-zinc-50 rounded-xl px-4 transition-all">
                <Link href="/login">Login</Link>
              </Button>
            )}
          </div>

          {/* Desktop CTA */}
          <Button asChild className="hidden sm:flex bg-[#111111] text-white hover:bg-zinc-800 rounded-[14px] px-6 h-11 font-black text-xs uppercase tracking-widest shadow-lg shadow-black/5 transition-all active:scale-95 group">
            <Link href="/run" className="flex items-center gap-2">
              Run My Numbers
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>

          {/* Mobile CTA - Updated to Pricing per user request */}
          <Button asChild className="sm:hidden bg-[#111111] text-white hover:bg-zinc-800 rounded-[14px] px-4 h-10 font-black text-[10px] uppercase tracking-widest shadow-lg shadow-black/5 transition-all active:scale-95 group">
            <Link href="/paywall" className="flex items-center gap-2">
              Pricing
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
