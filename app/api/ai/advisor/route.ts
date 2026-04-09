import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { aiAdvisorGraph } from "@/lib/ai-utils";
import { HumanMessage, AIMessage } from "@langchain/core/messages";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    // 1. AUTH & ACCESS PROTECTION
    // Using getToken is often more resilient in App Router API routes
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    
    if (!token) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const isCore = !!(token.hasFullAccess || token.accessType === "CORE");
    const isSubscribed = !!(token.subscriptionStatus === "active" || token.canUseSubscription);

    if (!isCore || !isSubscribed) {
      return new NextResponse("Premium Access Required", { status: 403 });
    }

    // 2. PARSE REQUEST
    const { messages, currentModel } = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      return new NextResponse("Invalid messages format", { status: 400 });
    }

    // 3. PREPARE STATE
    // We inject the current dashboard model as a system hint if present
    const history = messages.map((m: any) => 
      m.role === "user" ? new HumanMessage(m.content) : new AIMessage(m.content)
    );

    const systemPrompt = `You are the 'Costly' AI Strategic Advisor. 
    You help users navigate divorce finances with precision and empathy.
    
    CRITICAL GUIDELINES:
    1. Accuracy: Use the 'calculate_finances' tool for any numerical "what-if" questions.
    2. Context: Use 'get_user_scenarios' to see their history if they ask about past models.
    3. Current State: The user's live dashboard currently has these values: ${JSON.stringify(currentModel || {})}.
    4. Persona: Professional yet easy to understand. Keep answers concise.
    5. Formatting: Use Markdown for clarity (bolding, lists).
    
    Current User ID: ${token.sub}`;

    const inputMessages = [
      new HumanMessage({ content: systemPrompt }),
      ...history
    ];

    // 4. EXECUTE GRAPH & STREAM
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const eventStream = await aiAdvisorGraph.streamEvents(
            { messages: inputMessages },
            { version: "v2" }
          );

          for await (const event of eventStream) {
            const eventType = event.event;
            
            // 1. Handle Tool Execution Feedback
            if (eventType === "on_tool_start") {
              const toolName = event.name;
              let status = "Processing...";
              if (toolName === "calculate_finances") status = "Refining financial projections...";
              if (toolName === "get_user_scenarios") status = "Comparing with saved history...";
              
              controller.enqueue(encoder.encode(`[TOOL_START:${status}]`));
            }

            if (eventType === "on_tool_end") {
              controller.enqueue(encoder.encode("[TOOL_END]"));
            }

            // 2. Stream tokens from the model
            if (eventType === "on_chat_model_stream") {
              const content = event.data?.chunk?.content;
              if (content) {
                controller.enqueue(encoder.encode(content));
              }
            }
          }
          controller.close();
        } catch (e) {
          controller.error(e);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });

  } catch (error: any) {
    console.error("AI_ADVISOR_ERROR:", error);
    return new NextResponse(error.message || "Internal Server Error", { status: 500 });
  }
}
