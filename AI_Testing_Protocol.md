# 🛡️ AI Advisor: Strategic Testing Protocol (v1.0)

Welcome to the official testing suite for the **Costly AI Strategic Advisor**. This document provides a standardized set of test cases to verify the advisor's mathematical precision, database integration, and strategic reasoning capabilities.

---

## 📋 Testing Instructions
1.  **Environment**: Ensure you are logged in to the [Dashboard](http://localhost:3000/dashboard) with an active **Core + AI** account.
2.  **Tab**: Navigate to the **AI Advisor** tab.
3.  **Process**: Copy and paste the test queries below one by one.
4.  **Verification**: Compare the AI's response against the "Expected Success Criteria" provided.

---

## 🧪 Phase 1: Mathematical Precision (Core Engine)
**Objective**: Verify the AI correctly invokes the internal financial modeling tools for complex calculations.

### **Test Case A: Support Analysis**
> **Query**: *"Calculate my monthly support and disposable income for a $9,000 gross monthly income, $4,000 spouse income, 2 children, and 50/50 custody."*
*   **✅ Success Criteria**: The AI should trigger the `calculate_finances` tool and return a specific breakdown of alimony/child support that aligns with the live dashboard logic.

### **Test Case B: Stability Check**
> **Query**: *"What is my Financial Reality Score if my mortgage is $3,500 and my total childcare costs are $1,200? (Assume I earn $10,000 monthly)"*
*   **✅ Success Criteria**: AI must calculate a color-coded Reality Score (e.g., "Dangerous", "Strained", or "Stable") and provide a brief explanation of the impact.

---

## 💾 Phase 2: Database Integration (Scenario Context)
**Objective**: Verify the AI can successfully retrieve and analyze the user's historical saved data from Prisma.

### **Test Case C: Historical Comparison**
> **Query**: *"What was the disposable income in my last saved scenario? Compare it to my current live model."*
*   **✅ Success Criteria**: AI triggers `get_user_scenarios`, identifies the latest entry, and provides a delta analysis (e.g., "You have $200 more disposable income now than in the 'Initial Filing' scenario").

### **Test Case D: Scenario Optimization**
> **Query**: *"I have multiple saved scenarios. Which specific model resulted in the highest monthly cash flow for me?"*
*   **✅ Success Criteria**: AI scans all scenarios and correctly ranks them by the `disposableIncome` field.

---

## 💡 Phase 3: Strategic "What-If" Reasoning
**Objective**: Verify the AI's ability to interpret financial shifts and offer proactive strategy.

### **Test Case E: Income Shift Impact**
> **Query**: *"If my spouse gets a 20% raise tomorrow, how does that legally impact the alimony I currently pay/receive in this model?"*
*   **✅ Success Criteria**: AI runs a comparative calculation and explains the reciprocal relationship between spouse income and support obligations.

### **Test Case F: Lifestyle Adjustment**
> **Query**: *"If I move to a smaller apartment that saves me $1,500 in monthly rent, how does my overall Financial Stability Score change?"*
*   **✅ Success Criteria**: AI recalculates the score with lower expenses and explains the trajectory improvement.

---

## 🛠️ Phase 4: Multi-Step Advanced Logic
**Objective**: Verify the LangGraph can chain multiple tools in a single turn.

### **Test Case G: The "Roadmap" Query**
> **Query**: *"Analyze my most recent saved scenario, then tell me exactly how much I would need to earn to bring its Reality Score up to 85%."*
*   **✅ Success Criteria**: AI performs two steps: (1) retrieves the scenario, (2) uses the calculator iteratively to find the income threshold.

---

## 🚩 Reporting Issues
If you encounter behavior that deviates from the success criteria (e.g., "Model Not Found", infinite loading, or mathematical errors), please provide:
1.  **The Specific Query**: Which test case failed?
2.  **Error Log**: A screenshot of any red error messages in the UI.
3.  **Actual vs. Expected**: What did the AI say vs. what you expected it to say?

---
> [!IMPORTANT]
> **Data Privacy**: All testing sessions are secure and encrypted. Data retrieved during these tests is sourced directly from your private account database.
