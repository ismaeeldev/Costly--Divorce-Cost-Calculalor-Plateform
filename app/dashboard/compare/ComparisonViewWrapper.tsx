"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ComparisonView } from "@/components/dashboard/ComparisonView";
import { CalculationInput } from "@/lib/calculator";

interface ComparisonViewWrapperProps {
  initialBaseModel: CalculationInput;
  optimizedModel: CalculationInput;
  scenarios: { id: string; name: string; data: CalculationInput }[];
  initialScenarioId: string;
}

export function ComparisonViewWrapper({
  initialBaseModel,
  optimizedModel,
  scenarios,
  initialScenarioId,
}: ComparisonViewWrapperProps) {
  const router = useRouter();
  const [selectedScenarioId, setSelectedScenarioId] = useState(initialScenarioId);

  const selectedScenario =
    scenarios.find((s) => s.id === selectedScenarioId) || scenarios[0];

  return (
    <ComparisonView
      baseModel={selectedScenario?.data || initialBaseModel}
      optimizedModel={optimizedModel}
      scenarios={scenarios}
      selectedScenarioId={selectedScenarioId}
      onScenarioSelect={setSelectedScenarioId}
      onBack={() => router.push("/dashboard")}
    />
  );
}
