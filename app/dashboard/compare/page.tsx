import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { ComparisonViewWrapper } from "./ComparisonViewWrapper";
import { CalculationInput } from "@/lib/calculator";
import { requireCoreAccess } from "@/lib/access";
import scenariosData from "@/lib/scenarioCompare.json";

interface ComparePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ComparePage({ searchParams }: ComparePageProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/login");
  }

  // ✅ Check Access (CORE only for this comparison workbench)
  const userAccess = session.user as any;
  const isCore = requireCoreAccess(userAccess);

  if (!isCore) {
    redirect("/dashboard");
  }

  const params = await searchParams;
  const modelParam = params.model as string;

  if (!modelParam) {
    redirect("/dashboard");
  }

  let optimizedModel: CalculationInput;

  try {
    const decoded = atob(modelParam);
    optimizedModel = JSON.parse(decoded);
  } catch {
    redirect("/dashboard");
  }

  // ✅ Use Hardcoded Scenarios from JSON
  const formattedScenarios = scenariosData.map((s: any) => ({
    id: s.id,
    name: s.label,
    data: {
      incomeOwn: s.data.incomeOwn,
      incomeSpouse: s.data.incomeSpouse,
      childrenCount: s.data.childrenCount,
      custodyPercentage: s.data.custodyPercentage,
      mortgage: s.data.mortgage,
      childcare: s.data.childcare,
      school: s.data.school,
      activities: s.data.activities,
      utilities: s.data.utilities,
      insurance: s.data.insurance,
      otherExpenses: s.data.otherExpenses,
      savings: s.data.savings,
      retirement: s.data.retirement,
      homeEquity: s.data.homeEquity,
      // Provide defaults for optional fields if not in JSON
      assetSplit: s.data.assetSplit || { stocks: 33, bonds: 33, cash: 34 },
      housingScenario: s.data.housingScenario || { homeValue: 0, mortgage: 0 },
      retirementImpact: s.data.retirementImpact || { currentBalance: 0, monthlyContribution: 0 },
      vaDisability: s.data.vaDisability || { percentage: 0 },
    } as CalculationInput,
  }));

  const initialScenario = formattedScenarios[0];

  return (
    <ComparisonViewWrapper
      initialBaseModel={initialScenario?.data || optimizedModel}
      optimizedModel={optimizedModel}
      scenarios={formattedScenarios}
      initialScenarioId={initialScenario?.id || "balanced"}
    />
  );
}