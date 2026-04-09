import { NextRequest, NextResponse } from "next/server";
import { runCalculationEngine, CalculationInput } from "@/lib/calculator";

export async function POST(req: NextRequest) {
  try {
    const body: CalculationInput = await req.json();

    if (
      typeof body.incomeOwn !== 'number' ||
      typeof body.childrenCount !== 'number' ||
      typeof body.expenses !== 'number'
    ) {
      return NextResponse.json({ error: "Invalid numerical inputs for calculation" }, { status: 400 });
    }

    const results = runCalculationEngine(body);

    return NextResponse.json({
      success: true,
      data: results
    });

  } catch (error) {
    console.error("Calculation Engine Error: ", error);
    return NextResponse.json({ error: "Failed to process calculation" }, { status: 500 });
  }
}
