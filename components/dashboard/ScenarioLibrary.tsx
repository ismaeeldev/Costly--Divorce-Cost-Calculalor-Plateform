"use client";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  LayoutGrid,
  List,
  Trash2,
  Edit,
  ChevronLeft,
  ChevronRight,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  FileText,
  Save,
  Home,
  Droplets,
  Heart,
  GraduationCap,
  PlusCircle,
  ShieldCheck,
  Sparkles,
  Calculator,
  Lock,
  ChevronRight as ChevronRightIcon,
  LayoutDashboard,
  Wallet,
  Settings,
} from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { runCalculationEngine, CalculationResult } from "@/lib/calculator";
import { cn } from "@/lib/utils";

function currency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

const statusColors = {
  green: {
    color: "text-[#16A34A]",
    bg: "bg-[#16A34A]/5",
    border: "border-[#16A34A]/20",
    accent: "#16A34A",
  },
  yellow: {
    color: "text-[#EAB308]",
    bg: "bg-[#EAB308]/5",
    border: "border-[#EAB308]/20",
    accent: "#EAB308",
  },
  red: {
    color: "text-[#DC2626]",
    bg: "bg-[#DC2626]/5",
    border: "border-[#DC2626]/20",
    accent: "#DC2626",
  },
};

/* --- SUBCOMPONENTS --- */
function RadialRiskGauge({ score, status }: { score: number; status: string }) {
  const current =
    statusColors[status.toLowerCase() as keyof typeof statusColors] ||
    statusColors.yellow;
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-16 h-16">
      <svg className="w-full h-full -rotate-90">
        <circle
          cx="32"
          cy="32"
          r={radius}
          className="stroke-slate-100 fill-none"
          strokeWidth="6"
        />
        <motion.circle
          cx="32"
          cy="32"
          r={radius}
          className="fill-none"
          stroke={current.accent}
          strokeWidth="6"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-0.5">
        <span className={cn("text-sm font-bold leading-none text-slate-800")}>
          {score.toFixed(0)}%
        </span>
        <span className="text-[8px] font-bold uppercase tracking-tight text-slate-400">
          Risk
        </span>
      </div>
    </div>
  );
}

export function ScenarioLibrary() {
  const [scenarios, setScenarios] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"grid" | "table">("grid");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  // Edit Modal Sidebar Stats
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingScenario, setEditingScenario] = useState<any>(null);
  const [editInputs, setEditInputs] = useState<any>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [userAddons, setUserAddons] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("identity");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [scenarioToDelete, setScenarioToDelete] = useState<any>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  // Real-time calculation within the modal
  const liveResults = useMemo(() => {
    if (!editInputs) return null;
    return runCalculationEngine({
      incomeOwn: editInputs.incomeOwn,
      incomeSpouse: editInputs.incomeSpouse,
      childrenCount: editInputs.childrenCount,
      custodyPercentage: editInputs.custodyPercentage,
      mortgage: editInputs.mortgage,
      childcare: editInputs.childcare,
      school: editInputs.school,
      activities: editInputs.activities,
      utilities: editInputs.utilities,
      insurance: editInputs.insurance,
      otherExpenses: editInputs.otherExpenses,
      savings: editInputs.savings,
      retirement: editInputs.retirement,
      homeEquity: editInputs.homeEquity,
      assetSplit: editInputs.assetSplit,
      retirementImpact: editInputs.retirementImpact,
      vaDisability: editInputs.vaDisability,
      housingScenario: editInputs.housingScenario,
    });
  }, [editInputs]);

  useEffect(() => {
    const fetchAddons = async () => {
      try {
        const res = await fetch("/api/addons");
        const data = await res.json();
        setUserAddons(data);
      } catch (err) {
        console.error("Failed to fetch addons", err);
      }
    };
    fetchAddons();
  }, []);

  const hasAddonAccess = (type: string) =>
    userAddons?.some((a) => a.type === type && a.isActive);

  async function fetchScenarios(p: number, s: string) {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/scenarios?page=${p}&limit=10&search=${encodeURIComponent(s)}`
      );
      const json = await res.json();
      if (json.success) {
        setScenarios(json.data);
        setTotalPages(json.pagination.totalPages || 1);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchScenarios(page, search);
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [page, search]);

  function openEditModal(scenario: any) {
    setEditingScenario(scenario);
    setActiveTab("identity");
    setEditInputs({
      name: scenario.name,
      incomeOwn: scenario.userIncome,
      incomeSpouse: scenario.spouseIncome,
      childrenCount: scenario.childrenCount,
      custodyPercentage: scenario.custodyPercent,
      mortgage: scenario.mortgage,
      childcare: scenario.childcare,
      school: scenario.school,
      activities: scenario.activities,
      utilities: scenario.utilities,
      insurance: scenario.insurance,
      otherExpenses: scenario.otherExpenses,
      savings: scenario.savings,
      retirement: scenario.retirement,
      homeEquity: scenario.homeEquity,
      assetSplit: scenario.assetSplit || { stocks: 33, bonds: 33, cash: 34 },
      retirementImpact: scenario.retirementImpact || {
        currentBalance: 0,
        monthlyContribution: 0,
      },
      vaDisability: scenario.vaDisability || { percentage: 0 },
      housingScenario: scenario.housingScenario || { homeValue: 0, mortgage: 0 },
    });
    setIsEditModalOpen(true);
  }

  async function handleUpdate() {
    if (!editingScenario) return;
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/scenarios/${editingScenario.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editInputs),
      });
      if (res.ok) {
        setIsEditModalOpen(false);
        fetchScenarios(page, search);
        toast.success("Changes applied");
      } else {
        throw new Error(await res.text());
      }
    } catch (err: any) {
      console.error(err);
      toast.error("Failed to update scenario");
    } finally {
      setIsUpdating(false);
    }
  }

  function triggerDelete(scenario: any) {
    setScenarioToDelete(scenario);
    setIsDeleteDialogOpen(true);
  }

  async function handleConfirmDelete() {
    if (!scenarioToDelete) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/scenarios/${scenarioToDelete.id}`, { method: "DELETE" });
      if (res.ok) {
        fetchScenarios(page, search);
        toast.success("Scenario deleted", {
          description: `"${scenarioToDelete.name}" has been removed from your vault.`
        });
        setIsDeleteDialogOpen(false);
      } else {
        throw new Error(await res.text());
      }
    } catch (err: any) {
      console.error(err);
      toast.error("Deletion failed");
    } finally {
      setIsDeleting(false);
      setScenarioToDelete(null);
    }
  }

  const updateEditField = (field: string, value: any) => {
    setEditInputs((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex flex-col h-full space-y-6">
      {/* HEADER & CONTROLS */}
      <div className="bg-white rounded-[2rem] border border-zinc-100 p-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow-[0_8px_40px_rgba(0,0,0,0.03)]">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <Input
            placeholder="Search by scenario name..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="pl-10 h-11 bg-zinc-50 border-none rounded-xl font-medium focus-visible:ring-1 focus-visible:ring-black/5"
          />
        </div>
        <div className="flex items-center gap-2 bg-zinc-50 p-1 rounded-xl">
          <button
            onClick={() => setView("grid")}
            className={cn(
              "p-2 rounded-lg transition-all",
              view === "grid"
                ? "bg-white shadow text-[#111]"
                : "text-zinc-400 hover:text-black"
            )}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setView("table")}
            className={cn(
              "p-2 rounded-lg transition-all",
              view === "table"
                ? "bg-white shadow text-[#111]"
                : "text-zinc-400 hover:text-black"
            )}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-8 h-8 text-black animate-spin" />
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">
                  Vault Opening...
                </span>
              </div>
            </motion.div>
          ) : scenarios.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-zinc-50/20 rounded-[2.5rem] border border-dashed border-zinc-200"
            >
              <FileText className="w-12 h-12 text-zinc-200 mb-4" />
              <h3 className="text-xl font-black text-[#111111]">
                Library is Empty
              </h3>
              <p className="text-sm text-zinc-500 max-w-sm mt-2">
                Start modeling in the Analysis tab to save your first financial
                projection.
              </p>
            </motion.div>
          ) : view === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {scenarios.map((s, idx) => {
                // Dynamic color based on actual reality score thresholds
                const getRealityColor = (score: number) => {
                  if (score < 40) return {
                    border: "border-t-emerald-500",
                    badge: "bg-emerald-50 text-emerald-700",
                    badgeIcon: CheckCircle2,
                    badgeText: "Low Impact",
                    bg: "bg-emerald-50/30",
                    hoverBg: "group-hover:bg-emerald-50/20"
                  };
                  if (score >= 40 && score <= 70) return {
                    border: "border-t-amber-500",
                    badge: "bg-amber-50 text-amber-700",
                    badgeIcon: AlertTriangle,
                    badgeText: "Medium Impact",
                    bg: "bg-amber-50/30",
                    hoverBg: "group-hover:bg-amber-50/20"
                  };
                  return {
                    border: "border-t-rose-500",
                    badge: "bg-rose-50 text-rose-700",
                    badgeIcon: AlertTriangle,
                    badgeText: "High Impact",
                    bg: "bg-rose-50/30",
                    hoverBg: "group-hover:bg-rose-50/20"
                  };
                };

                const realityColor = getRealityColor(s.realityScore);
                const BadgeIcon = realityColor.badgeIcon;
                const truncatedTitle = s.name.split(" ").slice(0, 2).join(" ");

                // Calculate impact percentage for display
                const impactPercentage = ((s.monthlySupport + s.totalExpenses) / s.netIncome) * 100;

                return (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group h-full"
                    onClick={() => openEditModal(s)}
                  >
                    <Card className={cn(
                      "relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col cursor-pointer border-t-4",
                      realityColor.border
                    )}>
                      <div className="p-5 flex flex-col flex-1 gap-4">
                        {/* Header Section */}
                        <div className="flex justify-between items-start gap-3">
                          <div className="space-y-1.5 flex-1 min-w-0">
                            {/* Dynamic Status Badge based on reality score */}
                            <div className={cn(
                              "inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider",
                              realityColor.badge
                            )}>
                              <BadgeIcon className="w-2.5 h-2.5" />
                              {realityColor.badgeText}
                            </div>

                            <CardTitle className="text-lg font-bold text-slate-900 truncate pr-2">
                              {truncatedTitle}
                            </CardTitle>

                            <p className="text-slate-400 text-[10px] font-medium">
                              Updated {new Date(s.updatedAt).toLocaleDateString(undefined, {
                                month: "short",
                                day: "numeric",
                              })}
                            </p>
                          </div>

                          <div className="flex-shrink-0 -mt-1">
                            <RadialRiskGauge score={s.realityScore} status={s.realityLevel} />
                          </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className={cn(
                            "bg-slate-50/80 p-3 rounded-xl border border-slate-100 transition-all duration-300",
                            "hover:bg-opacity-100",
                            realityColor.hoverBg
                          )}>
                            <p className="text-slate-400 text-[9px] font-bold uppercase tracking-wider mb-1.5">
                              Net Monthly
                            </p>
                            <div className="flex items-center gap-1.5">
                              <Wallet className="w-3 h-3 text-slate-500" />
                              <p className="text-slate-900 font-bold text-sm">{currency(s.netIncome)}</p>
                            </div>
                          </div>

                          <div className={cn(
                            "bg-slate-50/80 p-3 rounded-xl border border-slate-100 transition-all duration-300",
                            "hover:bg-opacity-100",
                            realityColor.hoverBg
                          )}>
                            <p className="text-slate-400 text-[9px] font-bold uppercase tracking-wider mb-1.5">
                              Impact
                            </p>
                            <div className="flex items-center gap-1.5">
                              <div className={cn(
                                "w-1.5 h-1.5 rounded-full",
                                s.realityScore < 40 ? "bg-emerald-500" :
                                  s.realityScore <= 70 ? "bg-amber-500" : "bg-rose-500"
                              )} />
                              <p className="text-slate-900 font-bold text-sm">{impactPercentage.toFixed(0)}%</p>
                            </div>
                          </div>
                        </div>

                        {/* Support & Disposable Row */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <p className="text-slate-400 text-[8px] font-bold uppercase tracking-wider">
                              Monthly Support
                            </p>
                            <div className="flex items-center gap-1.5">
                              <Heart className="w-3 h-3 text-rose-400" />
                              <p className="text-slate-900 font-bold text-sm">{currency(s.monthlySupport)}</p>
                            </div>
                          </div>

                          <div className="space-y-1 text-right">
                            <p className="text-slate-400 text-[8px] font-bold uppercase tracking-wider">
                              Disposable
                            </p>
                            <div className="flex items-center justify-end gap-1.5">
                              <p className="text-slate-900 font-bold text-sm">{currency(s.disposableIncome)}</p>
                              <Sparkles className="w-3 h-3 text-emerald-400" />
                            </div>
                          </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="flex gap-2 pt-1 mt-auto">
                          <Button
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              openEditModal(s);
                            }}
                            className="flex-1 h-9 rounded-lg border-slate-200 text-[11px] font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all gap-1.5"
                          >
                            <Edit className="w-3.5 h-3.5" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              triggerDelete(s);
                            }}
                            className="flex-1 h-9 rounded-lg border-slate-200 text-[11px] font-bold text-rose-600 hover:bg-rose-50 hover:border-rose-200 transition-all gap-1.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Delete
                          </Button>
                        </div>


                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="table"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-2xl sm:rounded-[2rem] border border-zinc-100 shadow-[0_8px_40px_rgba(0,0,0,0.02)] overflow-hidden hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-gradient-to-r from-zinc-50/80 to-white border-b border-zinc-100">
                    <tr>
                      <th className="px-6 sm:px-8 py-4 sm:py-5 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-500 transition-colors">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-3 rounded-full bg-zinc-300" />
                          Library Object
                        </div>
                      </th>
                      <th className="px-6 sm:px-8 py-4 sm:py-5 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-3 rounded-full bg-zinc-300" />
                          Date Logged
                        </div>
                      </th>
                      <th className="px-6 sm:px-8 py-4 sm:py-5 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-1 h-3 rounded-full bg-zinc-300" />
                          Stability Index
                        </div>
                      </th>
                      <th className="px-6 sm:px-8 py-4 sm:py-5 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="w-1 h-3 rounded-full bg-zinc-300" />
                          Disposable
                        </div>
                      </th>
                      <th className="px-6 sm:px-8 py-4 sm:py-5 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="w-1 h-3 rounded-full bg-zinc-300" />
                          Support
                        </div>
                      </th>
                      <th className="px-6 sm:px-8 py-4 sm:py-5 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50">
                    {scenarios.map((s, idx) => {
                      const Status =
                        statusColors[s.realityLevel as keyof typeof statusColors] ||
                        statusColors.yellow;

                      return (
                        <motion.tr
                          key={s.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="hover:bg-gradient-to-r hover:from-zinc-50/50 hover:to-transparent transition-all duration-300 group cursor-pointer"
                          onClick={() => openEditModal(s)}
                        >
                          <td className="px-6 sm:px-8 py-4 sm:py-5">
                            <div className="flex items-center gap-3">
                              {/* Premium icon indicator */}
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                                <FileText className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
                              </div>
                              <div>
                                <span className="font-black text-[#111] group-hover:text-black transition-colors">
                                  {s.name}
                                </span>
                                {/* Optional: Show truncated name on hover for full name */}
                                {s.name.length > 30 && (
                                  <div className="absolute invisible group-hover:visible bg-black text-white text-[10px] px-2 py-1 rounded-lg -mt-8 ml-0 whitespace-nowrap z-10">
                                    {s.name}
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 sm:px-8 py-4 sm:py-5">
                            <div className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-zinc-400 transition-colors" />
                              <span className="text-zinc-500 font-medium group-hover:text-zinc-700 transition-colors text-xs sm:text-sm">
                                {new Date(s.updatedAt).toLocaleDateString(undefined, {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 sm:px-8 py-4 sm:py-5">
                            <div className="flex items-center justify-center">
                              <div className="relative group/status">
                                {/* Glow effect on hover */}
                                <div
                                  className="absolute inset-0 rounded-full blur-md opacity-0 group-hover/status:opacity-100 transition-opacity duration-300"
                                  style={{ backgroundColor: Status.accent }}
                                />
                                <span
                                  className={cn(
                                    "relative px-3 py-1 text-[9px] sm:text-[10px] font-black rounded-full border transition-all duration-300 group-hover/status:scale-105",
                                    Status.border,
                                    Status.bg,
                                    Status.color
                                  )}
                                >
                                  {s.realityScore.toFixed(0)}% Impact
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 sm:px-8 py-4 sm:py-5">
                            <div className="text-right group/disposable">
                              <span className="font-black text-[#111] group-hover:text-black transition-colors text-sm sm:text-base">
                                {currency(s.disposableIncome)}
                              </span>
                              <div className="text-[8px] font-black uppercase tracking-wider text-zinc-400 opacity-0 group-hover/disposable:opacity-100 transition-opacity">
                                Net Monthly
                              </div>
                            </div>
                          </td>
                          <td className="px-6 sm:px-8 py-4 sm:py-5">
                            <div className="text-right group/support">
                              <span className="font-black text-[#111] group-hover:text-black transition-colors text-sm sm:text-base">
                                {currency(s.monthlySupport)}
                              </span>
                              <div className="text-[8px] font-black uppercase tracking-wider text-zinc-400 opacity-0 group-hover/support:opacity-100 transition-opacity">
                                Monthly Obligation
                              </div>
                            </div>
                          </td>
                          <td className="px-6 sm:px-8 py-4 sm:py-5">
                            <div className="flex justify-end gap-2 sm:gap-3">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openEditModal(s);
                                }}
                                className="relative p-1.5 sm:p-2 bg-zinc-50 text-zinc-500 rounded-lg hover:bg-[#111] hover:text-white transition-all shadow-sm group/btn overflow-hidden"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                                <Edit className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 transition-transform group-hover/btn:scale-110" />
                              </button>
                              <button
                                  onClick={(e) => {
                                   e.stopPropagation();
                                   triggerDelete(s);
                                 }}
                                className="relative p-1.5 sm:p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all shadow-sm group/delete overflow-hidden"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/delete:translate-x-full transition-transform duration-700" />
                                <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 transition-transform group-hover/delete:scale-110" />
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Optional: Footer with row count */}
              {scenarios.length > 0 && (
                <div className="px-6 sm:px-8 py-3 sm:py-4 border-t border-zinc-100 bg-zinc-50/30">
                  <div className="flex justify-between items-center text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-zinc-400">
                    <span>Total Scenarios</span>
                    <span className="bg-white px-2 py-0.5 rounded-full border border-zinc-100">
                      {scenarios.length} {scenarios.length === 1 ? 'Item' : 'Items'}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="bg-white rounded-3xl border border-zinc-100 p-2 flex justify-between items-center shadow-sm max-w-md mx-auto w-full mt-8">
          <Button
            variant="ghost"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-2xl font-black text-[9px] uppercase tracking-widest h-10 px-4"
          >
            <ChevronLeft className="w-3.5 h-3.5 mr-2" />
            Prev
          </Button>
          <div className="flex gap-1.5">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={cn(
                  "w-10 h-10 rounded-2xl font-black text-xs transition-all",
                  page === i + 1
                    ? "bg-[#111] text-white shadow-lg shadow-black/10 scale-110"
                    : "bg-transparent text-zinc-400 hover:text-[#111]"
                )}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <Button
            variant="ghost"
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="rounded-2xl font-black text-[9px] uppercase tracking-widest h-10 px-4"
          >
            Next
            <ChevronRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>
      )}

      {/* NEW PREMIUM EDIT MODAL */}
      {/* RIGHT SIDE DRAWER - REPLACES MODAL */}
      <AnimatePresence>
        {isEditModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEditModalOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />

            {/* Drawer - Reduced Width */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[500px] md:w-[550px] lg:w-[600px] bg-white shadow-2xl z-50 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 md:p-6 border-b border-zinc-100 bg-white sticky top-0 z-10">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#111] tracking-tight">
                    Edit Scenario
                  </h3>
                  <p className="text-[9px] sm:text-[10px] md:text-[11px] font-medium text-zinc-400 uppercase tracking-widest mt-0.5">
                    Modify your financial model
                  </p>
                </div>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-full flex items-center justify-center hover:bg-zinc-100 transition-all"
                >
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
                </button>
              </div>

              {/* Tabs Navigation */}
              <div className="flex flex-wrap gap-1 p-3 sm:p-4 md:px-6 border-b border-zinc-100 bg-zinc-50/30 sticky top-[65px] sm:top-[73px] md:top-[77px] z-10">
                {[
                  { id: "identity", label: "Identity", icon: Settings },
                  { id: "financials", label: "Economics", icon: Calculator },
                  { id: "living", label: "Living", icon: Home },
                  { id: "expansion", label: "Add-ons", icon: Sparkles },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-black text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider transition-all",
                      activeTab === item.id
                        ? "bg-black text-white shadow-md"
                        : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
                    )}
                  >
                    <item.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    <span className="hidden xs:inline">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Live Results Bar - Compact */}
              <div className="flex items-center justify-between gap-3 p-3 sm:p-4 md:px-6 bg-gradient-to-r from-zinc-50 to-white border-b border-zinc-100">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="scale-50 sm:scale-75 md:scale-90 origin-left">
                    <RadialRiskGauge
                      score={
                        liveResults?.impactPercentage
                          ? liveResults.impactPercentage * 100
                          : 0
                      }
                      status={liveResults?.realityScoreStatus || "Yellow"}
                    />
                  </div>
                  <div>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-wider text-zinc-400">
                      Net Disposable
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-black text-[#111]">
                      {currency(liveResults?.disposableIncome || 0)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-wider text-zinc-400">
                    Support
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-black text-[#111]">
                    {currency(liveResults?.monthlySupport || 0)}
                  </p>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-6 lg:p-7 custom-scrollbar">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5 sm:space-y-6 md:space-y-8"
                  >
                    {/* IDENTITY TAB */}
                    {activeTab === "identity" && (
                      <div className="space-y-4 sm:space-y-5 md:space-y-7">
                        <div className="space-y-2">
                          <Label className="text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-wider text-[#111]">
                            Scenario Name
                          </Label>
                          <Input
                            value={editInputs?.name || ""}
                            onChange={(e) => updateEditField("name", e.target.value)}
                            className="h-11 sm:h-12 md:h-14 bg-zinc-50 border-none rounded-xl md:rounded-2xl font-medium text-base md:text-lg px-4 md:px-6 focus-visible:ring-1 focus-visible:ring-black/10"
                            placeholder="e.g., Conservative Plan"
                          />
                        </div>
                        <div className="p-3 sm:p-4 md:p-5 bg-blue-50/30 rounded-xl border border-blue-100">
                          <p className="text-[10px] sm:text-xs md:text-sm text-zinc-600">
                            <span className="font-black text-[#111]">💡 Tip:</span> Use a descriptive name to easily identify this scenario.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* FINANCIALS TAB */}
                    {activeTab === "financials" && (
                      <div className="space-y-6 sm:space-y-7 md:space-y-9">
                        {/* Income Section */}
                        <div className="space-y-3 sm:space-y-4">
                          <h4 className="text-[10px] sm:text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] text-[#111] flex items-center gap-2 pb-2 border-b border-zinc-100">
                            <Wallet className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Income & Custody
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            <div className="space-y-2">
                              <Label className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase text-zinc-500 tracking-wider">
                                Your Income
                              </Label>
                              <Input
                                type="number"
                                value={editInputs?.incomeOwn ?? ""}
                                onChange={(e) => updateEditField("incomeOwn", Number(e.target.value))}
                                className="h-10 sm:h-11 md:h-12 bg-zinc-50 border-none rounded-lg sm:rounded-xl"
                                placeholder="$0"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase text-zinc-500 tracking-wider">
                                Spouse Income
                              </Label>
                              <Input
                                type="number"
                                value={editInputs?.incomeSpouse ?? ""}
                                onChange={(e) => updateEditField("incomeSpouse", Number(e.target.value))}
                                className="h-10 sm:h-11 md:h-12 bg-zinc-50 border-none rounded-lg sm:rounded-xl"
                                placeholder="$0"
                              />
                            </div>
                          </div>
                          <div className="space-y-3 pt-2">
                            <div className="flex justify-between items-center">
                              <Label className="text-[9px] sm:text-[10px] font-black uppercase text-[#111]">
                                Custody Split
                              </Label>
                              <span className="text-xs sm:text-sm font-black bg-black text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                                {editInputs?.custodyPercentage ?? 0}% / {100 - (editInputs?.custodyPercentage ?? 0)}%
                              </span>
                            </div>
                            <Slider
                              value={[editInputs?.custodyPercentage || 0]}
                              onValueChange={(v) => updateEditField("custodyPercentage", v[0])}
                              max={100}
                              step={1}
                              className="cursor-pointer"
                            />
                            <div className="flex justify-between text-[7px] sm:text-[8px] md:text-[9px] font-black text-zinc-400 px-1">
                              <span>Other Parent</span>
                              <span>Equal</span>
                              <span>You</span>
                            </div>
                          </div>
                        </div>

                        {/* Assets Section */}
                        <div className="space-y-3 sm:space-y-4">
                          <h4 className="text-[10px] sm:text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] text-[#EAB308] flex items-center gap-2 pb-2 border-b border-zinc-100">
                            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Asset Balances
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                            <div className="space-y-2">
                              <Label className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase text-zinc-500 tracking-wider">
                                Savings
                              </Label>
                              <Input
                                type="number"
                                value={editInputs?.savings ?? ""}
                                onChange={(e) => updateEditField("savings", Number(e.target.value))}
                                className="h-10 sm:h-11 md:h-12 bg-zinc-50 border-none rounded-lg sm:rounded-xl"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase text-zinc-500 tracking-wider">
                                Retirement
                              </Label>
                              <Input
                                type="number"
                                value={editInputs?.retirement ?? ""}
                                onChange={(e) => updateEditField("retirement", Number(e.target.value))}
                                className="h-10 sm:h-11 md:h-12 bg-zinc-50 border-none rounded-lg sm:rounded-xl"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase text-zinc-500 tracking-wider">
                                Home Equity
                              </Label>
                              <Input
                                type="number"
                                value={editInputs?.homeEquity ?? ""}
                                onChange={(e) => updateEditField("homeEquity", Number(e.target.value))}
                                className="h-10 sm:h-11 md:h-12 bg-zinc-50 border-none rounded-lg sm:rounded-xl"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* LIVING TAB */}
                    {activeTab === "living" && (
                      <div className="space-y-4 sm:space-y-5">
                        <h4 className="text-[10px] sm:text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] text-[#111] flex items-center gap-2 pb-2 border-b border-zinc-100">
                          <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Monthly Expenses
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                          {[
                            { id: "mortgage", label: "Housing", icon: Home },
                            { id: "utilities", label: "Utilities", icon: Droplets },
                            { id: "childcare", label: "Childcare", icon: Heart },
                            { id: "school", label: "Education", icon: GraduationCap },
                            { id: "activities", label: "Activities", icon: FileText },
                            { id: "insurance", label: "Insurance", icon: ShieldCheck },
                            { id: "otherExpenses", label: "Other", icon: PlusCircle },
                          ].map((f) => (
                            <div key={f.id} className="space-y-1.5 sm:space-y-2">
                              <div className="flex items-center gap-1.5 sm:gap-2">
                                <f.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-400" />
                                <Label className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-tight text-zinc-600">
                                  {f.label}
                                </Label>
                              </div>
                              <Input
                                type="number"
                                value={editInputs?.[f.id] ?? ""}
                                onChange={(e) => updateEditField(f.id, Number(e.target.value))}
                                className="h-9 sm:h-10 md:h-11 bg-zinc-50 border-none rounded-lg sm:rounded-xl"
                                placeholder="$0"
                              />
                            </div>
                          ))}
                          <div className="space-y-1.5 sm:space-y-2">
                            <Label className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-tight text-zinc-600">
                              Children
                            </Label>
                            <Input
                              type="number"
                              value={editInputs?.childrenCount || 0}
                              onChange={(e) => updateEditField("childrenCount", Number(e.target.value))}
                              className="h-9 sm:h-10 md:h-11 bg-zinc-50 border-none rounded-lg sm:rounded-xl"
                              placeholder="0"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* EXPANSION TAB */}
                    {activeTab === "expansion" && (
                      <div className="space-y-5 sm:space-y-6">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h4 className="text-[10px] sm:text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] text-green-600 flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Premium Features
                          </h4>
                        </div>

                        <div className="space-y-4 sm:space-y-5">
                          {hasAddonAccess("ASSET_SPLIT") && (
                            <div className="p-4 sm:p-5 bg-gradient-to-br from-zinc-50 to-white rounded-xl sm:rounded-2xl border border-zinc-100 space-y-3 sm:space-y-4">
                              <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2">
                                <Label className="text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase text-[#111]">
                                  Asset Allocation
                                </Label>
                                <span className="text-[7px] sm:text-[8px] font-black uppercase bg-green-100 text-green-700 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                                  ✓ Active
                                </span>
                              </div>
                              <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4">
                                {["stocks", "bonds", "cash"].map((a) => (
                                  <div key={a} className="space-y-1.5 sm:space-y-2">
                                    <Label className="text-[8px] sm:text-[9px] font-black uppercase text-zinc-500">
                                      {a} (%)
                                    </Label>
                                    <Input
                                      type="number"
                                      value={editInputs?.assetSplit?.[a] ?? 0}
                                      onChange={(e) =>
                                        updateEditField("assetSplit", {
                                          ...editInputs.assetSplit,
                                          [a]: Number(e.target.value),
                                        })
                                      }
                                      className="bg-white rounded-lg sm:rounded-xl h-9 sm:h-10 md:h-11"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {hasAddonAccess("RETIREMENT") && (
                            <div className="p-4 sm:p-5 bg-gradient-to-br from-zinc-50 to-white rounded-xl sm:rounded-2xl border border-zinc-100 space-y-3 sm:space-y-4">
                              <Label className="text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase text-[#111]">
                                Retirement Analysis
                              </Label>
                              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                                <div className="space-y-1.5 sm:space-y-2">
                                  <Label className="text-[8px] sm:text-[9px] font-black uppercase text-zinc-500">
                                    Balance
                                  </Label>
                                  <Input
                                    type="number"
                                    value={editInputs?.retirementImpact?.currentBalance ?? 0}
                                    onChange={(e) =>
                                      updateEditField("retirementImpact", {
                                        ...editInputs.retirementImpact,
                                        currentBalance: Number(e.target.value),
                                      })
                                    }
                                    className="bg-white rounded-lg sm:rounded-xl h-9 sm:h-10 md:h-11"
                                  />
                                </div>
                                <div className="space-y-1.5 sm:space-y-2">
                                  <Label className="text-[8px] sm:text-[9px] font-black uppercase text-zinc-500">
                                    Monthly Contrib.
                                  </Label>
                                  <Input
                                    type="number"
                                    value={editInputs?.retirementImpact?.monthlyContribution ?? 0}
                                    onChange={(e) =>
                                      updateEditField("retirementImpact", {
                                        ...editInputs.retirementImpact,
                                        monthlyContribution: Number(e.target.value),
                                      })
                                    }
                                    className="bg-white rounded-lg sm:rounded-xl h-9 sm:h-10 md:h-11"
                                  />
                                </div>
                              </div>
                            </div>
                          )}

                          {hasAddonAccess("VA_DISABILITY") && (
                            <div className="p-4 sm:p-5 bg-gradient-to-br from-zinc-50 to-white rounded-xl sm:rounded-2xl border border-zinc-100 space-y-3 sm:space-y-4">
                              <Label className="text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase text-[#111]">
                                VA Disability
                              </Label>
                              <div className="max-w-full xs:max-w-[250px] sm:max-w-[300px] space-y-1.5 sm:space-y-2">
                                <Label className="text-[8px] sm:text-[9px] font-black uppercase text-zinc-500">
                                  Rating (%)
                                </Label>
                                <Input
                                  type="number"
                                  value={editInputs?.vaDisability?.percentage ?? 0}
                                  onChange={(e) =>
                                    updateEditField("vaDisability", {
                                      percentage: Number(e.target.value),
                                    })
                                  }
                                  className="bg-white rounded-lg sm:rounded-xl h-9 sm:h-10 md:h-11"
                                />
                              </div>
                            </div>
                          )}

                          {hasAddonAccess("HOUSING") && (
                            <div className="p-4 sm:p-5 bg-gradient-to-br from-zinc-50 to-white rounded-xl sm:rounded-2xl border border-zinc-100 space-y-3 sm:space-y-4">
                              <Label className="text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase text-[#111]">
                                Housing Planning
                              </Label>
                              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                                <div className="space-y-1.5 sm:space-y-2">
                                  <Label className="text-[8px] sm:text-[9px] font-black uppercase text-zinc-500">
                                    Future Value
                                  </Label>
                                  <Input
                                    type="number"
                                    value={editInputs?.housingScenario?.homeValue ?? 0}
                                    onChange={(e) =>
                                      updateEditField("housingScenario", {
                                        ...editInputs.housingScenario,
                                        homeValue: Number(e.target.value),
                                      })
                                    }
                                    className="bg-white rounded-lg sm:rounded-xl h-9 sm:h-10 md:h-11"
                                  />
                                </div>
                                <div className="space-y-1.5 sm:space-y-2">
                                  <Label className="text-[8px] sm:text-[9px] font-black uppercase text-zinc-500">
                                    Target Payment
                                  </Label>
                                  <Input
                                    type="number"
                                    value={editInputs?.housingScenario?.mortgage ?? 0}
                                    onChange={(e) =>
                                      updateEditField("housingScenario", {
                                        ...editInputs.housingScenario,
                                        mortgage: Number(e.target.value),
                                      })
                                    }
                                    className="bg-white rounded-lg sm:rounded-xl h-9 sm:h-10 md:h-11"
                                  />
                                </div>
                              </div>
                            </div>
                          )}

                          {!hasAddonAccess("ASSET_SPLIT") &&
                            !hasAddonAccess("RETIREMENT") &&
                            !hasAddonAccess("VA_DISABILITY") &&
                            !hasAddonAccess("HOUSING") && (
                              <div className="py-8 sm:py-10 flex flex-col items-center justify-center text-center bg-zinc-50/30 rounded-xl sm:rounded-2xl border-2 border-dashed border-zinc-200">
                                <Lock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-zinc-300 mb-2 sm:mb-3" />
                                <h3 className="text-xs sm:text-sm md:text-base font-black text-[#111]">
                                  Premium Features Locked
                                </h3>
                                <p className="text-[9px] sm:text-[10px] md:text-xs text-zinc-400 max-w-[200px] sm:max-w-[240px] mt-1 sm:mt-2">
                                  Upgrade to unlock advanced features
                                </p>
                              </div>
                            )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-2 sm:gap-3 p-4 sm:p-5 md:p-6 border-t border-zinc-100 bg-white sticky bottom-0">
                <Button
                  variant="outline"
                  onClick={() => setIsEditModalOpen(false)}
                  className="h-9 sm:h-10 md:h-11 px-4 sm:px-5 md:px-7 rounded-lg sm:rounded-xl font-black text-[9px] sm:text-[10px] uppercase tracking-wider border-zinc-200 hover:bg-zinc-100"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleUpdate}
                  disabled={isUpdating}
                  className="h-9 sm:h-10 md:h-11 px-5 sm:px-6 md:px-8 rounded-lg sm:rounded-xl bg-black text-white font-black text-[9px] sm:text-[10px] uppercase tracking-wider hover:bg-black/90 transition-all shadow-lg"
                >
                  {isUpdating ? (
                    <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin mr-1.5 sm:mr-2" />
                  ) : (
                    <Save className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  )}
                  Save
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* PREMIUM DELETE CONFIRMATION DIALOG */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="max-w-md rounded-[2.5rem] p-0 border-none bg-white overflow-hidden shadow-2xl">
          <div className="relative p-8 flex flex-col items-center text-center">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-rose-50 rounded-full blur-[80px] -z-10" />

            {/* Premium Icon Container */}
            <div className="w-16 h-16 rounded-2xl bg-rose-500 flex items-center justify-center mb-6 shadow-xl shadow-rose-200">
              <AlertTriangle className="h-7 w-7 text-white" />
            </div>

            <div className="space-y-2 mb-8">
              <DialogTitle className="text-2xl font-black text-[#111111] tracking-tight">
                Confirm Scenario Erasure
              </DialogTitle>
              <DialogDescription className="text-sm font-medium text-zinc-500 max-w-xs mx-auto leading-relaxed">
                This action is permanent. You will lose the <span className="text-[#111] font-bold">"{scenarioToDelete?.name}"</span> model and all associated strategic data.
              </DialogDescription>
            </div>

            <div className="w-full flex flex-col gap-3">
              <Button
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="w-full h-12 rounded-xl bg-rose-600 text-white font-black uppercase tracking-widest hover:bg-rose-700 transition-all active:scale-95 shadow-lg shadow-rose-100"
              >
                {isDeleting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Delete Permanently"
                )}
              </Button>
              <Button
                variant="ghost"
                onClick={() => setIsDeleteDialogOpen(false)}
                disabled={isDeleting}
                className="w-full h-12 rounded-xl text-zinc-400 font-bold uppercase tracking-widest hover:bg-zinc-50 hover:text-zinc-600 transition-all"
              >
                Cancel
              </Button>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-50 w-full">
              <p className="text-[8px] font-black uppercase tracking-[0.5em] text-zinc-200">
                Data Permanence Protocol • Active
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}