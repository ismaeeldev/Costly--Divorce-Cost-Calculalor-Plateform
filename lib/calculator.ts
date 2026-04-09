export interface CalculationInput {
  incomeOwn: number;
  incomeSpouse: number;
  childrenCount: number;
  custodyPercentage: number;
  state?: string | null;
  
  // High-level Lump Sum (for Free Preview)
  expenses?: number;

  // Granular Expenses (Summed to total if provided)
  mortgage?: number;
  childcare?: number;
  school?: number;
  activities?: number;
  utilities?: number;
  insurance?: number;
  otherExpenses?: number;

  // Assets (Core Feature)
  savings?: number;
  retirement?: number;
  homeEquity?: number;

  // PREMIUM ADD-ONS
  assetSplit?: {
    stocks?: number;
    bonds?: number;
    cash?: number;
  };
  retirementImpact?: {
    currentBalance?: number;
    monthlyContribution?: number;
  };
  vaDisability?: {
    percentage?: number;
  };
  housingScenario?: {
    homeValue?: number;
    mortgage?: number;
  };
}

export interface CalculationResult {
  netMonthlyIncome: number;
  monthlySupport: number;
  totalMonthlyExpenses: number;
  disposableIncome: number;
  impactPercentage: number;
  realityScore: number;
  realityScoreStatus: "Green" | "Yellow" | "Red";
  realityScoreLabel: string;
}

/**
 * Core Calculation Engine for Costly
 * Using strict deterministic SaaS logic mapping.
 */

export function calculateTax(monthlyGross: number): number {
  // Convert standard monthly inputs to Annual for bracket detection.
  const annualGross = monthlyGross * 12;

  let taxRate = 0.28; // < 150k
  if (annualGross >= 150000 && annualGross <= 300000) {
    taxRate = 0.30;
  } else if (annualGross > 300000) {
    taxRate = 0.33;
  }

  return taxRate;
}

export function calculateSupport(
  ownNetIncome: number,
  spouseNetIncome: number,
  childrenCount: number,
  custodyPercentage: number,
  state?: string | null
): number {
  const combinedNetIncome = ownNetIncome + spouseNetIncome;
  let childSupportRate = 0;

  // State-specific multipliers to increase estimate "legitimacy"
  const highRatioStates = ["CA", "NY", "FL", "MA", "CT", "NJ", "WA"];
  const conservativeStates = ["TX", "GA", "UT", "ID", "NE"];
  
  let stateMultiplier = 1.0;
  if (state && highRatioStates.includes(state)) stateMultiplier = 1.10;
  if (state && conservativeStates.includes(state)) stateMultiplier = 0.95;

  if (childrenCount === 1) {
    childSupportRate = 0.20 * stateMultiplier;
  } else if (childrenCount === 2) {
    childSupportRate = 0.25 * stateMultiplier;
  } else if (childrenCount >= 3) {
    childSupportRate = 0.30 * stateMultiplier;
  }

  /**
   * CHILD SUPPORT (Income Shares Model)
   */
  const annualCombined = combinedNetIncome * 12;
  let adjustment = 1.0;
  if (annualCombined > 100000) adjustment = 0.95;
  if (annualCombined > 200000) adjustment = 0.90;

  const totalHouseholdObligation = (combinedNetIncome * childSupportRate) * adjustment;
  const userProportion = combinedNetIncome > 0 ? ownNetIncome / combinedNetIncome : 1;
  const userBaseChildSupport = totalHouseholdObligation * userProportion;
  
  // Adjusted for custody: If you have 40% custody, you pay for 60% of time.
  const netChildSupport = userBaseChildSupport * ((100 - custodyPercentage) / 100);

  /**
   * SPOUSAL SUPPORT (Alimony)
   * Formula: (High Earner * 30%) - (Low Earner * 20%)
   * We apply this logic if the income disparity is > 20%.
   */
  let alimony = 0;
  const disparityRaw = Math.abs(ownNetIncome - spouseNetIncome);
  const incomeDisparity = combinedNetIncome > 0 ? disparityRaw / combinedNetIncome : 0;

  if (incomeDisparity > 0.20) {
    if (ownNetIncome > spouseNetIncome) {
      // You pay spouse
      alimony = (ownNetIncome * 0.3) - (spouseNetIncome * 0.2);
    } else {
      // You receive from spouse (represented as negative payment here)
      alimony = -((spouseNetIncome * 0.3) - (ownNetIncome * 0.2));
    }
  }

  return netChildSupport + alimony;
}

export function calculateRealityScoreStatus(impactPercentage: number): { status: "Green" | "Yellow" | "Red"; label: string } {
  if (impactPercentage < 0.40) return { status: "Green", label: "Stable" };
  if (impactPercentage >= 0.40 && impactPercentage <= 0.70) return { status: "Yellow", label: "Moderate strain" };
  return { status: "Red", label: "High risk" };
}

export function runCalculationEngine(input: CalculationInput): CalculationResult {
  /**
   * BASE FORMULA 1: Tax Logic
   */
  const taxRateOwn = calculateTax(input.incomeOwn);
  const taxRateSpouse = calculateTax(input.incomeSpouse);

  /**
   * BASE FORMULA 2: Net Income (Plus Add-ons & Yield)
   */
  let netIncomeOwn = input.incomeOwn - (input.incomeOwn * taxRateOwn);
  const netIncomeSpouse = input.incomeSpouse - (input.incomeSpouse * taxRateSpouse);

  // VA Disability Boost (Add-on)
  if (input.vaDisability?.percentage) {
    const vaRates: Record<number, number> = {
      10: 171, 20: 338, 30: 524, 40: 754, 50: 1075,
      60: 1361, 70: 1716, 80: 1995, 90: 2241, 100: 3737
    };
    netIncomeOwn += (vaRates[input.vaDisability.percentage] || 0);
  }

  /**
   * REFINEMENT: Asset Yield (Core Assets + Add-ons)
   * Transforms static balances into active monthly returns.
   */
  const totalLiquidAssets = (input.savings || 0) + (input.retirement || 0) + (input.retirementImpact?.currentBalance || 0);
  let monthlyYieldRate = 0.003; // Default 0.3% (3.6% APY)

  // Asset Split Weighting (Add-on)
  if (input.assetSplit) {
    const s = (input.assetSplit.stocks || 0) / 100;
    const b = (input.assetSplit.bonds || 0) / 100;
    const c = (input.assetSplit.cash || 0) / 100;
    // Weighted Avg: Stocks (0.7%), Bonds (0.4%), Cash (0.2%)
    monthlyYieldRate = (s * 0.007) + (b * 0.004) + (c * 0.002);
    // Fallback if weights are 0
    if (monthlyYieldRate === 0 && totalLiquidAssets > 0) monthlyYieldRate = 0.003;
  }

  const monthlyAssetIncome = totalLiquidAssets * monthlyYieldRate;
  netIncomeOwn += monthlyAssetIncome;

  const combinedNet = netIncomeOwn + netIncomeSpouse;

  /**
   * BASE FORMULA 3: Support Logic (Including Child + Alimony)
   */
  const monthlySupport = calculateSupport(
    netIncomeOwn,
    netIncomeSpouse,
    input.childrenCount,
    input.custodyPercentage,
    input.state
  );

  /**
   * BASE FORMULA 4: Granular Expenses (Summed)
   * Housing Override from ADD-ON: If housingScenario.mortgage exists, 
   * it overrides the main mortgage input.
   */
  const currentMortgage = input.housingScenario?.mortgage ?? (input.mortgage || 0);
  const retirementContrib = input.retirementImpact?.monthlyContribution || 0;

  const totalMonthlyExpenses = 
    (input.expenses || 0) +
    currentMortgage + 
    (input.childcare || 0) + 
    (input.school || 0) + 
    (input.activities || 0) + 
    (input.utilities || 0) + 
    (input.insurance || 0) + 
    (input.otherExpenses || 0) +
    retirementContrib;

  /**
   * BASE FORMULA 5: Disposable Income
   */
  const netMonthlyIncome = netIncomeOwn;
  const disposableIncome = netIncomeOwn - monthlySupport - totalMonthlyExpenses;

  // Reality Score Impact (Including Stability Buffer)
  let impactPercentage = 0;
  if (netIncomeOwn > 0) {
    /**
     * REFINEMENT: Stability Buffer
     * Total Net Worth (Equity + Liquid) provides a buffer against monthly expenses.
     * Every $50k in total assets reduces the Impact % by 1% (up to 20% max buffer).
     */
    const totalEquity = totalLiquidAssets + (input.homeEquity || 0) + (input.housingScenario?.homeValue || 0);
    const buffer = Math.min(0.20, (totalEquity / 50000) * 0.01);
    
    impactPercentage = (monthlySupport + totalMonthlyExpenses) / netIncomeOwn;
    impactPercentage *= (1 - buffer); // Apply the wealth buffer
  } else if (monthlySupport + totalMonthlyExpenses > 0) {
    impactPercentage = 1;
  }

  const { status: realityScoreStatus, label: realityScoreLabel } = calculateRealityScoreStatus(impactPercentage);

  const realityScore = Math.min(100, Math.round(impactPercentage * 100));

  return {
    netMonthlyIncome,
    monthlySupport,
    totalMonthlyExpenses,
    disposableIncome,
    impactPercentage,
    realityScore,
    realityScoreStatus,
    realityScoreLabel
  };
}
