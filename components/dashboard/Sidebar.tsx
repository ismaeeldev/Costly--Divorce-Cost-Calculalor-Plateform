"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Calculator,
  History,
  Sparkles,
  Lock,
  ChevronRight,
  ShieldCheck,
  Settings,
  LogOut,
  TrendingUp,
  Loader2
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { ProfileDrawer } from "./ProfileDrawer";

interface SidebarProps {
  accessType: string;
  hasFullAccess: boolean;
  isSubscriptionActive: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userName: string;
  userEmail: string;
}

export function Sidebar({
  accessType,
  hasFullAccess,
  isSubscriptionActive,
  activeTab,
  setActiveTab,
  userName,
  userEmail,
  isOpen,
  setIsOpen
}: SidebarProps & { isOpen?: boolean; setIsOpen?: (open: boolean) => void }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
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

  const isCore = hasFullAccess || accessType?.toUpperCase() === "CORE";

  const initials = userName
    .split(" ")
    .map((n) => n ? n[0] : "")
    .join("")
    .toUpperCase()
    .slice(0, 2) || "??";

  const allItems = [
    {
      id: "estimate",
      label: "Detailed Estimate",
      icon: Calculator,
      locked: false,
      hideForCore: true
    },
    {
      id: "analysis",
      label: "Interactive Analysis",
      icon: LayoutDashboard,
      locked: !isCore
    },
    {
      id: "scenarios",
      label: "Scenario Library",
      icon: History,
      locked: !isCore || !isSubscriptionActive
    },
    {
      id: "advisor",
      label: "AI Advisor",
      icon: Sparkles,
      locked: !isCore || !isSubscriptionActive
    },
    {
      id: "compare",
      label: "Compare Live",
      icon: TrendingUp,
      locked: !isCore || !isSubscriptionActive
    },
  ];

  const menuItems = allItems.filter(item => !isCore || !item.hideForCore);

  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-50 w-72 h-full bg-white border-r border-zinc-100 flex flex-col py-8 px-6 overflow-hidden transition-transform duration-300 lg:static lg:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      {/* Mobile Close Button */}
      <button 
        onClick={() => setIsOpen?.(false)}
        className="lg:hidden absolute top-4 right-4 p-2 text-zinc-400 hover:text-black hover:bg-zinc-50 rounded-xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>

      <div className="mb-8 flex justify-center group transition-all duration-300">
        <Link href="/" className="inline-block transition-transform duration-500 group-hover:scale-110">
          <Image
            src="/costly-logo.png"
            alt="Costly Logo"
            width={200}
            height={40}
            className="h-15 w-auto object-contain"
            priority
          />
        </Link>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              disabled={item.locked}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 text-left",
                activeTab === item.id
                  ? "bg-[#111111] text-white shadow-xl shadow-black/10"
                  : "text-zinc-500 hover:bg-zinc-50",
                item.locked && "opacity-40 cursor-not-allowed grayscale"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "p-2 rounded-xl transition-all duration-300",
                  activeTab === item.id ? "bg-white/10 scale-110" : "bg-zinc-100 group-hover:bg-white group-hover:scale-105"
                )}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm tracking-tight">{item.label}</span>
              </div>

              {item.locked ? (
                <Lock className="w-3.5 h-3.5 text-zinc-300" />
              ) : (
                activeTab === item.id && <ChevronRight className="w-4 h-4 text-white/50" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto space-y-6 shrink-0">
        {/* User Tier Badge */}
        <div className="p-4 bg-zinc-50 rounded-3xl border border-zinc-100 group transition-all duration-300 hover:shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <div className={cn(
              "w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110",
              isCore ? "bg-[#16A34A] text-white shadow-lg shadow-green-200" : "bg-zinc-200 text-zinc-500"
            )}>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Current Plan</p>
              <p className="text-sm font-black text-[#111111] uppercase tracking-tight">
                {isCore ? "Core Strategic" : "Entry Access"}
              </p>
            </div>
          </div>

          {isSubscriptionActive ? (
            <button
              onClick={() => setActiveTab("advisor")}
              className="w-full block text-center py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-sm border bg-white border-zinc-200 text-[#16A34A] hover:bg-zinc-50"
            >
              Subscription Active
            </button>
          ) : (
            <button
              onClick={() => handleCheckout(isCore ? "SUBSCRIPTION" : "CORE")}
              disabled={!!isRedirecting}
              className="w-full block text-center py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-sm border bg-[#111111] text-white hover:bg-zinc-800 shadow-black/5"
            >
              {isRedirecting === (isCore ? "SUBSCRIPTION" : "CORE") ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin mx-auto" />
              ) : (
                isCore ? "Buy Subscription $19" : "Level Up To Core"
              )}
            </button>
          )}
        </div>

        {/* PROFILE SECTION */}
        <div className="pt-6 border-t border-zinc-100">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-2xl bg-[#111111] text-white flex items-center justify-center font-black text-xs shadow-xl shadow-black/10 shrink-0">
                {initials}
              </div>
              <div className="flex flex-col min-w-0">
                <p className="text-xs font-black text-[#111111] truncate">{userName}</p>
                <p className="text-[10px] font-bold text-zinc-400 truncate">{userEmail}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => setIsProfileOpen(true)}
                className="p-2 hover:bg-zinc-100 rounded-xl text-zinc-400 hover:text-[#111111] transition-all active:scale-90"
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="p-2 hover:bg-red-50 rounded-xl text-zinc-400 hover:text-red-500 transition-all active:scale-90"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>


      </div>

      <ProfileDrawer
        isOpen={isProfileOpen}
        onOpenChange={setIsProfileOpen}
        userName={userName}
        userEmail={userEmail}
        accessType={accessType}
        isCore={isCore}
        isSubscriptionActive={isSubscriptionActive}
      />
    </div>
  );
}
