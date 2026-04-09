"use client";

import { useState, useEffect, ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { FadeIn } from "@/components/animations/FadeIn";
import { EntryDashboard } from "@/components/dashboard/EntryDashboard";
import { InteractiveDashboard } from "@/components/dashboard/InteractiveDashboard";
import { ScenarioLibrary } from "@/components/dashboard/ScenarioLibrary";
import { AIAdvisorChat } from "@/components/dashboard/AIAdvisorChat";
import { ComparisonView } from "@/components/dashboard/ComparisonView";
import { Lock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CalculationInput } from "@/lib/calculator";

interface DashboardShellProps {
  accessType: string;
  userName: string;
  userEmail: string;
  isCore: boolean;
  isSubscriptionActive: boolean;
  initialState: any;
  initialScenarioName: string;
  canSaveScenarios: boolean;
}

export function DashboardShell({
  accessType,
  userName,
  userEmail,
  isCore,
  isSubscriptionActive,
  initialState,
  initialScenarioName,
  canSaveScenarios
}: DashboardShellProps) {
  const [activeTab, setActiveTab] = useState(isCore ? "analysis" : "estimate");
  const [currentModel, setCurrentModel] = useState<CalculationInput>(initialState);
  const [scenarios, setScenarios] = useState<any[]>([]);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>("");
  const [isLoadingScenarios, setIsLoadingScenarios] = useState(false);

  // Fetch scenarios for comparison view
  useEffect(() => {
    if (isCore && isSubscriptionActive) {
      const fetchScenarios = async () => {
        setIsLoadingScenarios(true);
        try {
          const res = await fetch("/api/scenarios?limit=50");
          const json = await res.json();
          if (json.success && json.data) {
            // Map database records to CalculationInput format
            const mapped = json.data.map((s: any) => ({
              id: s.id,
              name: s.name,
              data: {
                incomeOwn: s.userIncome || 0,
                incomeSpouse: s.spouseIncome || 0,
                childrenCount: s.childrenCount || 0,
                custodyPercentage: s.custodyPercent || 50,
                mortgage: s.mortgage || 0,
                utilities: s.utilities || 0,
                childcare: s.childcare || 0,
                school: s.school || 0,
                activities: s.activities || 0,
                insurance: s.insurance || 0,
                otherExpenses: s.otherExpenses || 0,
                savings: s.savings || 0,
                retirement: s.retirement || 0,
                homeEquity: s.homeEquity || 0,
                assetSplit: s.assetSplit || { stocks: 33, bonds: 33, cash: 34 },
                retirementImpact: s.retirementImpact || { currentBalance: 0, monthlyContribution: 0 },
                vaDisability: s.vaDisability || { percentage: 0 },
                housingScenario: s.housingScenario || { homeValue: 0, mortgage: 0 }
              }
            }));
            setScenarios(mapped);
            if (mapped.length > 0 && !selectedScenarioId) {
              setSelectedScenarioId(mapped[0].id);
            }
          }
        } catch (err) {
          console.error("Failed to fetch scenarios for comparison", err);
        } finally {
          setIsLoadingScenarios(false);
        }
      };
      fetchScenarios();
    }
  }, [isCore, isSubscriptionActive]);

  const selectedScenario = scenarios.find(s => s.id === selectedScenarioId);
  const baseModel = selectedScenario?.data || initialState;

  const isComparisonBench = activeTab === "compare";

  return (
    <div className="flex h-screen bg-zinc-50 overflow-hidden">

      {/* Sidebar Navigation - Hidden during Full-Page Comparison */}
      {!isComparisonBench && (
        <Sidebar
          accessType={accessType}
          hasFullAccess={isCore}
          isSubscriptionActive={isSubscriptionActive}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          userName={userName}
          userEmail={userEmail}
        />
      )}

      {/* Main Content Area */}
      <main className={cn(
        "flex-1 overflow-y-auto relative transition-all duration-300",
        isComparisonBench ? "p-0" : (activeTab === "advisor" ? "p-4 pt-2" : "p-8")
      )}>
        <div className={cn(
          "mx-auto transition-all",
          isComparisonBench ? "max-w-none" : (activeTab === "advisor" ? "max-w-7xl" : "max-w-6xl")
        )}>
          <FadeIn key={activeTab}>
            
            {/* Header / Context - Hidden during Comparison */}
            {!isComparisonBench && (
              <div className={cn("flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-zinc-100 transition-all", 
                (activeTab === "advisor") ? "mb-4 pb-4 mt-2" : "mb-10 pb-10"
              )}>
                <div className="space-y-2">
                  <h1 className="text-4xl font-black tracking-tight text-[#111111]  tracking-[0.08em] ">
                    {activeTab === "estimate" && "Detailed Analysis"}
                    {activeTab === "analysis" && (isCore ? "Financial Model" : "Interactive Dashboard")}
                    {activeTab === "scenarios" && "Scenario Library"}
                    {activeTab === "advisor" && "AI Advisor"}
                  </h1>
                  <p className="text-zinc-500 font-medium">
                    {isCore ? "Premium Access Active." : "Welcome back,"} <span className="text-[#111111] font-bold">{userName}</span>.
                  </p>
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-zinc-100 shadow-sm">
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Analysis Status</span>
                    <span className="text-xs font-bold text-[#16A34A] uppercase tracking-widest">Active & Secure</span>
                  </div>
                  <div className="w-1.5 h-10 bg-[#16A34A] rounded-full" />
                </div>
              </div>
            )}

            {/* Tab Rendering Logic */}
            <div className={cn("w-full h-full", !isComparisonBench && "pb-20")}>
              {activeTab === "estimate" && (
                <EntryDashboard userName={userName} isCore={isCore} />
              )}

              {activeTab === "analysis" && isCore && (
                <InteractiveDashboard
                  initialState={currentModel}
                  initialScenarioName={initialScenarioName}
                  canSaveScenarios={canSaveScenarios}
                  userName={userName}
                  onStateChange={setCurrentModel}
                  onTabChange={setActiveTab}
                />
              )}

              {activeTab === "scenarios" && isCore && isSubscriptionActive && (
                <ScenarioLibrary />
              )}

              {activeTab === "advisor" && isCore && isSubscriptionActive && (
                <AIAdvisorChat currentModel={currentModel} />
              )}

              {activeTab === "compare" && isCore && isSubscriptionActive && (
                <ComparisonView 
                  baseModel={baseModel}
                  optimizedModel={currentModel}
                  scenarios={scenarios}
                  selectedScenarioId={selectedScenarioId}
                  onScenarioSelect={setSelectedScenarioId}
                  onBack={() => setActiveTab("analysis")}
                />
              )}

              {/* Catch-all for locked tabs */}
              {((activeTab === "scenarios" || activeTab === "advisor" || activeTab === "compare") && (!isCore || !isSubscriptionActive)) || 
               (activeTab === "analysis" && !isCore) ? (
                <div className="bg-white rounded-3xl p-12 border border-zinc-100 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mb-6">
                    <Lock className="w-8 h-8 text-zinc-300" />
                  </div>
                  <h2 className="text-2xl font-black mb-2 tracking-tight">Feature Restricted</h2>
                  <p className="text-zinc-500 max-w-sm mb-8">
                    {!isCore
                      ? "This advanced analytics tab is reserved for Core members. Upgrade to unlock full interactive modeling."
                      : "Premium features like Comparison, Scenario Library, and AI Advisor require an active subscription."}
                  </p>
                  <Link href="/paywall" className="bg-[#111111] text-white px-8 py-3 rounded-2xl font-black hover:bg-zinc-800 transition-all">
                    {!isCore ? "Upgrade to Core Unlock" : "View Subscription Plans"}
                  </Link>
                </div>
              ) : null}
            </div>
          </FadeIn>
        </div>

        {/* Subtle decorative elements */}
        <div className="fixed bottom-0 right-0 w-[600px] h-[300px] bg-white rounded-full blur-[120px] -z-10 opacity-50" />
      </main>
    </div>
  );
}
