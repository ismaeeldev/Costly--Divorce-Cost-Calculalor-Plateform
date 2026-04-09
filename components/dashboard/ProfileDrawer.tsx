"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  User, 
  Lock, 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle2,
  Loader2,
  ArrowRight
} from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProfileDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  userName: string;
  userEmail: string;
  accessType: string;
  isCore: boolean;
  isSubscriptionActive: boolean;
}

export function ProfileDrawer({ 
  isOpen, 
  onOpenChange, 
  userName, 
  userEmail, 
  accessType,
  isCore,
  isSubscriptionActive
}: ProfileDrawerProps) {
  const [activeTab, setActiveTab] = useState<"general" | "security" | "plan">("general");
  const [isLoading, setIsLoading] = useState(false);
  
  const [newName, setNewName] = useState(userName);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const handleUpdateName = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || newName === userName) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/user/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName }),
      });

      if (!res.ok) throw new Error(await res.text());
      
      toast.success("Changes applied");
    } catch (err: any) {
      toast.error(err.message || "Update failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      toast.error("Passwords mismatch");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/user/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          currentPassword: passwords.current, 
          newPassword: passwords.new 
        }),
      });

      if (!res.ok) throw new Error(await res.text());
      
      toast.success("Security updated");
      setPasswords({ current: "", new: "", confirm: "" });
    } catch (err: any) {
      toast.error(err.message || "Update failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-full sm:max-w-md p-0 bg-white border-r border-zinc-100 flex flex-col h-full shadow-2xl">
        <SheetHeader className="p-8 pb-4">
           <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-[#111111] text-white flex items-center justify-center font-black text-[10px]">
                 {userName.charAt(0).toUpperCase()}
              </div>
              <SheetTitle className="text-xl font-black tracking-tight">Account Settings</SheetTitle>
           </div>
           <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Manage Your Strategic Profile</p>
        </SheetHeader>

        {/* Tab Navigation (Sticky Top-ish) */}
        <div className="flex gap-2 px-8 py-4 border-b border-zinc-50 overflow-x-auto no-scrollbar">
           {[
             { id: "general", label: "General", icon: User },
             { id: "security", label: "Security", icon: Lock },
             { id: "plan", label: "Plan", icon: ShieldCheck },
           ].map((tab) => (
             <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shrink-0 border",
                activeTab === tab.id 
                  ? "bg-[#111111] text-white border-black shadow-lg shadow-black/10" 
                  : "bg-white text-zinc-400 border-zinc-100 hover:border-zinc-300"
              )}
             >
               <tab.icon className="w-3 h-3" />
               {tab.label}
             </button>
           ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-8 pt-6">
          <AnimatePresence mode="wait">
            {activeTab === "general" && (
              <motion.div
                key="general"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <form onSubmit={handleUpdateName} className="space-y-6">
                  <div className="space-y-2">
                     <Label className="text-[10px] font-black uppercase tracking-widest text-[#111111] ml-1">Email Address</Label>
                     <Input disabled value={userEmail} className="bg-zinc-50 border-zinc-100 text-zinc-400 cursor-not-allowed rounded-xl py-6" />
                     <p className="text-[9px] font-medium text-zinc-400 ml-1 italic">Email cannot be changed.</p>
                  </div>
                  <div className="space-y-2">
                     <Label className="text-[10px] font-black uppercase tracking-widest text-[#111111] ml-1">Display Name</Label>
                     <Input 
                      value={newName} 
                      onChange={(e) => setNewName(e.target.value)}
                      className="bg-white border-zinc-100 focus:border-[#111111] transition-all rounded-xl py-6" 
                     />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading || newName === userName}
                    className="w-full bg-[#111111] hover:bg-zinc-800 text-white font-black uppercase tracking-widest rounded-xl py-7 shadow-xl shadow-black/5"
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Sync Changes"}
                  </Button>
                </form>
              </motion.div>
            )}

            {activeTab === "security" && (
              <motion.div
                 key="security"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="space-y-6"
              >
                <form onSubmit={handleUpdatePassword} className="space-y-6">
                  <div className="space-y-2">
                     <Label className="text-[10px] font-black uppercase tracking-widest text-[#111111] ml-1">Current Password</Label>
                     <Input 
                      type="password" 
                      required
                      value={passwords.current}
                      onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                      className="bg-zinc-50 border-zinc-100 rounded-xl py-6" 
                     />
                  </div>
                  <div className="space-y-2 pt-4 border-t border-zinc-50">
                     <Label className="text-[10px] font-black uppercase tracking-widest text-[#111111] ml-1">New Password</Label>
                     <Input 
                      type="password" 
                      required
                      value={passwords.new}
                      onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                      className="bg-zinc-50 border-zinc-100 rounded-xl py-6" 
                     />
                  </div>
                  <div className="space-y-2">
                     <Label className="text-[10px] font-black uppercase tracking-widest text-[#111111] ml-1">Confirm Identity</Label>
                     <Input 
                      type="password" 
                      required
                      value={passwords.confirm}
                      onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                      className="bg-zinc-50 border-zinc-100 rounded-xl py-6" 
                     />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-[#111111] hover:bg-zinc-800 text-white font-black uppercase tracking-widest rounded-xl py-7 shadow-xl shadow-black/5"
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Rekey Password"}
                  </Button>
                </form>
              </motion.div>
            )}

            {activeTab === "plan" && (
              <motion.div
                key="plan"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 flex flex-col items-center text-center group">
                  <div className={cn(
                    "w-16 h-16 rounded-[2rem] flex items-center justify-center transition-transform group-hover:scale-110 mb-4",
                    isSubscriptionActive ? "bg-[#16A34A] text-white shadow-xl shadow-green-200" : isCore ? "bg-[#111111] text-white" : "bg-zinc-200 text-zinc-500"
                  )}>
                    {isSubscriptionActive ? <ShieldCheck className="w-8 h-8" /> : <ShieldAlert className="w-8 h-8" />}
                  </div>
                  <h4 className="text-lg font-black text-[#111111] uppercase tracking-tight">
                    {isSubscriptionActive 
                      ? "Core Strategic Active" 
                      : isCore 
                        ? "Advisor Pass Required" 
                        : "Entry Access Path"
                    }
                  </h4>
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-1">
                    {isSubscriptionActive 
                      ? "Full Intelligence Active" 
                      : isCore 
                        ? "Unlock AI Advisor & Scenarios" 
                        : "Level Up for Full Intelligence"
                    }
                  </p>
                </div>

                <div className="space-y-4">
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">Active Entitlements</p>
                   <div className="space-y-2">
                      {[
                        { l: "Interactive Financial Modeling", active: isCore || isSubscriptionActive },
                        { l: "AI Strategic Advisor Access", active: isSubscriptionActive },
                        { l: "Scenario Persistence (Save/Load)", active: isSubscriptionActive },
                        { l: "Entry Risk Modeling", active: true },
                      ].map((f, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white border border-zinc-50 rounded-2xl group hover:border-zinc-200 transition-all">
                           <div className="flex items-center gap-3">
                              <div className={cn("w-1.5 h-1.5 rounded-full", f.active ? "bg-[#16A34A]" : "bg-zinc-200")} />
                              <span className={cn("text-[11px] font-bold", f.active ? "text-[#111111]" : "text-zinc-300 line-through")}>
                                 {f.l}
                              </span>
                           </div>
                           {f.active ? <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" /> : <ArrowRight className="w-3.5 h-3.5 text-zinc-100" />}
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-8 border-t border-zinc-50 bg-zinc-50/20">
           <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
             Costly • Secure Strategic Intelligence
           </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
