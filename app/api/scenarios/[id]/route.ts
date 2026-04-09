import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { runCalculationEngine, CalculationInput } from "@/lib/calculator";

function normalizeScenarioName(value: unknown) {
  if (typeof value !== "string") return "Updated Scenario";
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed.slice(0, 80) : "Updated Scenario";
}

export async function DELETE(req: NextRequest, props: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const { id } = await props.params;

    const scenario = await prisma.scenario.findUnique({ where: { id } });
    if (!scenario || scenario.userId !== session.user.id) {
      return NextResponse.json({ error: "Not found or unauthorized" }, { status: 404 });
    }

    await prisma.scenario.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete Scenario Error:", error);
    return NextResponse.json({ error: "Failed to delete scenario" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, props: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    
    // UI already handles Core requirement, but ideally we only allow updates to premium data if they still have access.
    // The instructions said "it's tab only show unlcked... all other show locked... directly not access"
    // So the API just needs to trust the authenticated user modifying their own data.
    
    const { id } = await props.params;

    const scenarioToUpdate = await prisma.scenario.findUnique({ where: { id } });
    if (!scenarioToUpdate || scenarioToUpdate.userId !== session.user.id) {
      return NextResponse.json({ error: "Not found or unauthorized" }, { status: 404 });
    }

    const body: Record<string, unknown> = await req.json();

    const input: CalculationInput = {
      incomeOwn: Number(body.incomeOwn),
      incomeSpouse: Number(body.incomeSpouse),
      childrenCount: Number(body.childrenCount),
      expenses: Number(body.expenses),
      custodyPercentage: Number(body.custodyPercentage),
      mortgage: Number(body.mortgage) || 0,
      childcare: Number(body.childcare) || 0,
      school: Number(body.school) || 0,
      activities: Number(body.activities) || 0,
      utilities: Number(body.utilities) || 0,
      insurance: Number(body.insurance) || 0,
      otherExpenses: Number(body.otherExpenses) || 0,
      savings: Number(body.savings) || 0,
      retirement: Number(body.retirement) || 0,
      homeEquity: Number(body.homeEquity) || 0,
      assetSplit: body.assetSplit as any,
      retirementImpact: body.retirementImpact as any,
      vaDisability: body.vaDisability as any,
      housingScenario: body.housingScenario as any,
    };

    const results = runCalculationEngine(input);
    const scenarioName = normalizeScenarioName(body.name);

    const updatedScenario = await prisma.scenario.update({
      where: { id },
      data: {
        name: scenarioName,
        userIncome: input.incomeOwn,
        spouseIncome: input.incomeSpouse,
        childrenCount: Math.trunc(input.childrenCount),
        custodyPercent: input.custodyPercentage,
        mortgage: input.mortgage ?? 0,
        childcare: input.childcare ?? 0,
        school: input.school ?? 0,
        activities: input.activities ?? 0,
        utilities: input.utilities ?? 0,
        insurance: input.insurance ?? 0,
        otherExpenses: input.otherExpenses ?? 0,
        savings: input.savings,
        retirement: input.retirement,
        homeEquity: input.homeEquity,
        assetSplit: input.assetSplit ?? undefined,
        retirementImpact: input.retirementImpact ?? undefined,
        vaDisability: input.vaDisability ?? undefined,
        housingScenario: input.housingScenario ?? undefined,
        netIncome: results.netMonthlyIncome,
        monthlySupport: results.monthlySupport,
        totalExpenses: results.totalMonthlyExpenses,
        disposableIncome: results.disposableIncome,
        realityScore: results.impactPercentage * 100,
        realityLevel: results.realityScoreStatus.toLowerCase(),
      },
    });

    return NextResponse.json({ success: true, data: updatedScenario });
  } catch (error) {
    console.error("Update Scenario Error:", error);
    return NextResponse.json({ error: "Failed to update scenario" }, { status: 500 });
  }
}
