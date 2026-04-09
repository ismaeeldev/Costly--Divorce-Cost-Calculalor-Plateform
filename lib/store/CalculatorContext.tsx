"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface CalculatorState {
  incomeOwn: number;
  incomeSpouse: number;
  expenses: number;
  custodyPercentage: number;
  childrenCount: number;
  mortgage: number;
  childcare: number;
  school: number;
  activities: number;
  utilities: number;
  insurance: number;
  otherExpenses: number;
  savings: number;
  retirement: number;
  homeEquity: number;
  assetsOwn: number;
  assetsSpouse: number;
}

interface CalculatorContextType {
  data: CalculatorState;
  updateData: (newData: Partial<CalculatorState>) => void;
  resetData: () => void;
  isLoaded: boolean;
}

const defaultState: CalculatorState = {
  incomeOwn: 0,
  incomeSpouse: 0,
  expenses: 0,
  custodyPercentage: 50,
  childrenCount: 1,
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
  assetsOwn: 0,
  assetsSpouse: 0,
};

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<CalculatorState>(defaultState);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount (Client-side only)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("costly_calculator_data");
      if (stored) {
        setData({ ...defaultState, ...JSON.parse(stored) });
      }
    } catch (e) {
      console.error("Failed to parse calculator data from localStorage", e);
    }
    // Ensures hydration matches
    setIsLoaded(true);
  }, []);

  // Save to localStorage when data changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("costly_calculator_data", JSON.stringify(data));
    }
  }, [data, isLoaded]);

  const updateData = (newData: Partial<CalculatorState>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const resetData = () => {
    setData(defaultState);
  };

  return (
    <CalculatorContext.Provider value={{ data, updateData, resetData, isLoaded }}>
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error("useCalculator must be used within a CalculatorProvider");
  }
  return context;
}
