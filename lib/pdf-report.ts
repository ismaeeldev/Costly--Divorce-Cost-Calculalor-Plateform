"use client";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

/**
 * Generates a high-fidelity SaaS report for the user's financial scenario.
 * Designed with a professional, legal-grade aesthetic.
 */
export const generateProfessionalReport = (data: any, results: any) => {
  const doc = new jsPDF();
  const timestamp = new Date().toLocaleString();

  // 1. Brand Identity & Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(17, 17, 17);
  doc.text("Costly", 14, 22);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text("SECURE STRATEGIC MODEL ANALYSIS", 14, 30);
  doc.text(`Reference ID: ${Math.random().toString(36).substring(7).toUpperCase()}`, 14, 35);
  doc.text(`Timestamp: ${timestamp}`, 14, 40);

  // 2. Scenario Parameters (Input Summary)
  doc.setFontSize(13);
  doc.setTextColor(17, 17, 17);
  doc.setFont("helvetica", "bold");
  doc.text("I. SCENARIO PARAMETERS", 14, 55);

  const formatCurrency = (val: number) => `$${(val || 0).toLocaleString(undefined, { minimumFractionDigits: 0 })}`;

  const inputRows = [
    ["Income (Client)", formatCurrency(data.incomeOwn)],
    ["Income (Spouse)", formatCurrency(data.incomeSpouse)],
    ["Custody Allocation", `${data.custodyPercentage}%`],
    ["Children Count", `${data.childrenCount}`],
    ["Liquid Savings", formatCurrency(data.savings)],
    ["Retirement Assets", formatCurrency(data.retirement)],
    ["Home Equity", formatCurrency(data.homeEquity)],
  ];

  autoTable(doc, {
    startY: 60,
    head: [["Attribute", "Quantitative Parameter"]],
    body: inputRows,
    theme: "striped",
    headStyles: { fillColor: [17, 17, 17], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 10 },
    alternateRowStyles: { fillColor: [250, 250, 250] },
    styles: { cellPadding: 5, fontSize: 10, font: "helvetica" },
  });

  // 3. Strategic Findings (Output Metrics)
  const finalY = (doc as any).lastAutoTable.finalY + 15;
  doc.setFontSize(13);
  doc.text("II. STRATEGIC FINDINGS", 14, finalY);

  const resultRows = [
    ["Financial Reality Score", `${results.realityScore} - ${results.realityScoreLabel}`],
    ["Net Monthly Income", formatCurrency(results.netMonthlyIncome)],
    ["Monthly Support Obligation", formatCurrency(Math.abs(results.monthlySupport))],
    ["Total Monthly Expenses", formatCurrency(results.totalMonthlyExpenses)],
    ["Disposable Income", formatCurrency(results.disposableIncome)],
  ];

  autoTable(doc, {
    startY: finalY + 6,
    head: [["Metric", "Calculated Core Result"]],
    body: resultRows,
    theme: "grid",
    headStyles: { fillColor: [240, 240, 240], textColor: [17, 17, 17], fontStyle: "bold", fontSize: 10 },
    styles: { cellPadding: 6, fontSize: 10, fontStyle: "bold", font: "helvetica" },
  });

  // 4. Legal Notice & Footer
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setFontSize(8);
  doc.setTextColor(140, 140, 140);

  const disclaimer = [
    "LEGAL DISCLAIMER & COMPLIANCE NOTICE:",
    "This report is generated based on user-provided data and automated analysis calculations.",
    "It does not constitute legal, financial, or tax advice. The values provided are projections and may vary",
    "based on jurisdictional rules. Consult a qualified professional before making legal or financial decisions.",
    "",
    "© Costly • Secure Strategic Intelligence Pro System"
  ];

  disclaimer.forEach((line, index) => {
    doc.text(line, 14, pageHeight - 35 + (index * 4));
  });

  doc.save(`Costly_Strategic_Analysis_${Date.now()}.pdf`);
};
