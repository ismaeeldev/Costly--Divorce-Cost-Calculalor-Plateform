import { ChatOpenAI } from "@langchain/openai";
import { StateGraph, START, END, Annotation } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { BaseMessage } from "@langchain/core/messages";
import { runCalculationEngine, CalculationInput } from "./calculator";
import { prisma } from "./prisma";

// Define the state schema using Annotation for LangGraph.js
const GraphState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y),
    default: () => [],
  }),
});

/**
 * 1. TOOL: Financial Calculator 
 * Directly uses the production calculation engine to ensure 100% accuracy.
 */
const calculatorSchema = z.object({
  incomeOwn: z.number().describe("Monthly gross income of the user"),
  incomeSpouse: z.number().describe("Monthly gross income of the spouse"),
  childrenCount: z.number().describe("Number of children"),
  custodyPercentage: z.number().describe("User's custody percentage (0-100)"),
  mortgage: z.number().optional().describe("Monthly mortgage payment"),
  childcare: z.number().optional().describe("Monthly childcare costs"),
  savings: z.number().optional().describe("Total liquid savings"),
  retirement: z.number().optional().describe("Total retirement balance"),
  homeEquity: z.number().optional().describe("Total home equity value"),
});

const calculateFinancesTool = tool(
  async (input) => {
    try {
      const results = runCalculationEngine(input as CalculationInput);
      return JSON.stringify({
        success: true,
        summary: `Calculation complete. Net Monthly Income: $${results.netMonthlyIncome.toLocaleString()}, Monthly Support: $${Math.abs(results.monthlySupport).toLocaleString()}, Disposable Income: $${results.disposableIncome.toLocaleString()}. Reality Score: ${results.realityScore}% (${results.realityScoreLabel}).`,
        details: results
      });
    } catch (error) {
      return JSON.stringify({ success: false, error: "Calculation failed" });
    }
  },
  {
    name: "calculate_finances",
    description: "Run the official financial engine to calculate support, disposable income, and stability impact based on provided inputs.",
    schema: calculatorSchema,
  }
);

/**
 * 2. TOOL: Scenario Retrieval
 * Fetches the user's saved scenarios for context and comparison.
 */
const getScenariosSchema = z.object({
  userId: z.string().describe("The unique ID of the user"),
});

const getScenariosTool = tool(
  async ({ userId }) => {
    try {
      const scenarios = await prisma.scenario.findMany({
        where: { userId },
        orderBy: { updatedAt: 'desc' },
        take: 5
      });
      
      if (scenarios.length === 0) return "No saved scenarios found for this user.";
      
      return JSON.stringify(scenarios.map(s => ({
        id: s.id,
        name: s.name,
        summary: `Income: $${s.userIncome}, Support: $${s.monthlySupport}, Disposable: $${s.disposableIncome}, Score: ${s.realityScore}%`,
        data: s
      })));
    } catch (error) {
      return "Failed to fetch scenarios from database.";
    }
  },
  {
    name: "get_user_scenarios",
    description: "Retrieve a list of the user's previously saved financial scenarios for comparison or background context.",
    schema: getScenariosSchema,
  }
);

const tools = [calculateFinancesTool, getScenariosTool];
const toolNode = new ToolNode(tools);

/**
 * 3. LANGGRAPH DEFINITION
 */
const model = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
  temperature: 0,
  streaming: true,
}).bindTools(tools);

function shouldContinue(state: typeof GraphState.State) {
  const { messages } = state;
  const lastMessage = messages[messages.length - 1] as any;
  if (lastMessage?.tool_calls?.length) {
    return "tools";
  }
  return END;
}

async function callModel(state: typeof GraphState.State) {
  const { messages } = state;
  const response = await model.invoke(messages);
  return { messages: [response] };
}

const workflow = new StateGraph(GraphState)
  .addNode("agent", callModel)
  .addNode("tools", toolNode)
  .addEdge(START, "agent")
  .addConditionalEdges("agent", shouldContinue)
  .addEdge("tools", "agent");

export const aiAdvisorGraph = workflow.compile();
