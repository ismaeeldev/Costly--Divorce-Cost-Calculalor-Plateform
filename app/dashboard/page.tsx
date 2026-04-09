import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { requireEntryAccess, requireCoreAccess, requireSubscription } from "@/lib/access";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

function sumExpenses(scenario: {
  mortgage: number;
  childcare: number;
  school: number;
  activities: number;
  utilities: number;
  insurance: number;
  otherExpenses: number;
}) {
  return (
    scenario.mortgage +
    scenario.childcare +
    scenario.school +
    scenario.activities +
    scenario.utilities +
    scenario.insurance +
    scenario.otherExpenses
  );
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      accessType: true,
      hasFullAccess: true,
      entryPurchased: true,
      subscriptionStatus: true,
      hasAIAdvisor: true,
      canUseSubscription: true,
      assetSplit: true,
      retirementImpact: true,
      vaDisability: true,
      housingScenario: true,
    },
  });

  if (!user || !requireEntryAccess(user as any)) {
    redirect("/paywall");
  }

  const isCore = requireCoreAccess(user as any);

  const latestScenario = await prisma.scenario.findFirst({
    where: { userId: user.id },
    orderBy: { updatedAt: "desc" },
  });

  const initialState = latestScenario
    ? {
      incomeOwn: latestScenario.userIncome,
      incomeSpouse: latestScenario.spouseIncome,
      childrenCount: latestScenario.childrenCount,
      custodyPercentage: latestScenario.custodyPercent,
      expenses: 0,
      mortgage: latestScenario.mortgage,
      childcare: latestScenario.childcare,
      school: latestScenario.school,
      activities: latestScenario.activities,
      utilities: latestScenario.utilities,
      insurance: latestScenario.insurance,
      otherExpenses: latestScenario.otherExpenses,
      savings: latestScenario.savings ?? 0,
      retirement: latestScenario.retirement ?? 0,
      homeEquity: latestScenario.homeEquity ?? 0,
      assetSplit: latestScenario.assetSplit as any,
      retirementImpact: latestScenario.retirementImpact as any,
      vaDisability: latestScenario.vaDisability as any,
      housingScenario: latestScenario.housingScenario as any,
    }
    : {
      incomeOwn: 0,
      incomeSpouse: 0,
      childrenCount: 1,
      custodyPercentage: 50,
      expenses: 0,
      mortgage: 0,
      childcare: 0,
      school: 0,
      activities: 0,
      utilities: 0,
      insurance: 0,
      otherExpenses: 0,
      savings: 0,
      retirement: 0,
      homeEquity: 0,
      assetSplit: { stocks: 0, bonds: 0, cash: 0 },
      retirementImpact: { currentBalance: 0, monthlyContribution: 0 },
      vaDisability: { percentage: 0 },
      housingScenario: { homeValue: 0, mortgage: 0 },
    };


  const isSubscriptionActive = requireSubscription(user as any);

  return (
    <DashboardShell
      accessType={user.accessType || "ENTRY"}
      userName={user.name ?? session.user.name ?? "Friend"}
      userEmail={user.email ?? session.user.email ?? ""}
      isCore={isCore}
      isSubscriptionActive={isSubscriptionActive}
      initialState={initialState}
      initialScenarioName={latestScenario?.name ?? "Live Scenario"}
      canSaveScenarios={isSubscriptionActive}
    />
  );
}