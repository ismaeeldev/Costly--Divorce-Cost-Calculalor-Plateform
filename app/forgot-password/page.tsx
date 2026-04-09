"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthCard } from "@/components/auth/AuthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Loader2, Mail, CheckCircle2, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Failed to process request");
      }

      setSuccess(true);
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <AuthCard 
        title="Check your email" 
        description="We sent a secure password reset link to your inbox."
      >
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-[#16A34A]/10 text-[#16A34A] rounded-full mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <p className="text-[#111111] font-medium text-lg">
            {email}
          </p>
          <p className="text-zinc-500 text-sm">
            Didn't receive an email? Check your spam folder or try again.
          </p>
          
          <Button asChild variant="outline" className="w-full h-14 text-base rounded-full border-zinc-200">
            <Link href="/login">
              Return to Login
            </Link>
          </Button>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard 
      title="Forgot Password" 
      description="Enter your email to receive a secure recovery link"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3 border border-red-100/50">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-bold text-zinc-700">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10 h-14 bg-zinc-50/50 text-base"
            />
          </div>
        </div>

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full h-14 text-lg bg-[#111111] hover:bg-zinc-800 text-white rounded-full font-bold transition-all shadow-md"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" /> Sending Link...
            </span>
          ) : (
            "Send Reset Link"
          )}
        </Button>
        
        <div className="text-center pt-2">
          <Link href="/login" className="text-sm font-semibold text-zinc-500 hover:text-[#111111] inline-flex items-center gap-2 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Login
          </Link>
        </div>
      </form>
    </AuthCard>
  );
}
