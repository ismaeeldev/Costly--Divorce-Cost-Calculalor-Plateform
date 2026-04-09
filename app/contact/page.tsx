"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Send, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      query: formData.get("query"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
        toast.success("Message Sent Successfully");
      } else {
        toast.error("Failed to send message");
      }
    } catch (err) {
      toast.error("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter text-[#111111] selection:bg-[#111111] selection:text-white pb-24">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: CONTENT */}
          <FadeIn className="space-y-8">
            <div className="space-y-6">
               <Link href="/" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-[#111111] transition-colors group">
                 <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
                 Back to Modeling
               </Link>
               <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-tight">
                 We're here to <span className="text-zinc-300">help.</span>
               </h1>
               <p className="text-xl text-zinc-500 font-bold max-w-md leading-relaxed">
                 Have questions about our calculation engine or strategic modeling? Our team is ready to assist.
               </p>
            </div>

            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-4 p-6 rounded-3xl bg-zinc-50 border border-zinc-100 max-w-sm">
                <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center shadow-sm">
                  <Mail className="w-5 h-5 text-[#111111]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Response Time</p>
                  <p className="font-bold">Typically under 24 hours</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT: FORM */}
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-zinc-100 relative overflow-hidden">
               {isSuccess ? (
                 <div className="py-12 text-center space-y-6">
                    <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
                       <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-black tracking-tight">Message Received</h2>
                    <p className="text-zinc-500 font-bold max-w-xs mx-auto">
                      Thank you for reaching out. A team member will review your query and reply as soon as possible.
                    </p>
                    <Button 
                      onClick={() => setIsSuccess(false)}
                      variant="outline" 
                      className="rounded-full h-12 px-8 font-black uppercase tracking-widest text-[10px] mt-8"
                    >
                      Send Another Message
                    </Button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-8">
                   <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 px-1">Full Name</Label>
                        <Input 
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          required
                          className="h-14 rounded-2xl bg-zinc-50/50 border-zinc-100 placeholder:text-zinc-300 font-bold transition-all focus:ring-0 focus:border-[#111111] focus:bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 px-1">Email Address</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          placeholder="name@email.com"
                          required
                          className="h-14 rounded-2xl bg-zinc-50/50 border-zinc-100 placeholder:text-zinc-300 font-bold transition-all focus:ring-0 focus:border-[#111111] focus:bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="query" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 px-1">Your Inquiry</Label>
                        <Textarea 
                          id="query"
                          name="query"
                          placeholder="How can we help you?"
                          required
                          className="min-h-[160px] rounded-2xl bg-zinc-50/50 border-zinc-100 placeholder:text-zinc-300 font-bold transition-all focus:ring-0 focus:border-[#111111] focus:bg-white resize-none p-4"
                        />
                      </div>
                   </div>

                   <Button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="w-full h-16 rounded-2xl bg-[#111111] text-white font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-black/10 transition-all hover:scale-[1.02] active:scale-[0.98] group"
                   >
                     {isSubmitting ? (
                       <div className="flex items-center gap-2">
                         <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                         Transmitting...
                       </div>
                     ) : (
                       <span className="flex items-center justify-center gap-2">
                         Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                       </span>
                     )}
                   </Button>

                   <p className="text-center text-[9px] text-zinc-400 font-black uppercase tracking-[0.2em]">
                     Protected by 256-bit secure encryption
                   </p>
                 </form>
               )}
            </div>
          </FadeIn>

        </div>
      </main>
    </div>
  );
}
