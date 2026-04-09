"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  BrainCircuit, 
  User, 
  Loader2, 
  Sparkles, 
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Zap
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AIAdvisorChatProps {
  currentModel: any;
}

export function AIAdvisorChat({ currentModel }: AIAdvisorChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI Strategic Advisor. I've analyzed your current financial model. How can I help you optimize your trajectory today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentTool, setCurrentTool] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "How does $500 more in support affect me?",
    "Analyze my current stability.",
    "Compare with my saved scenarios.",
    "Give me 3 tips for cash flow."
  ];

  // Auto-scroll logic with smooth behavior
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isLoading, currentTool]);

  const handleSubmit = async (e?: React.FormEvent, customPrompt?: string) => {
    if (e) e.preventDefault();
    const prompt = customPrompt || input;
    if (!prompt.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: prompt };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setCurrentTool(null);

    try {
      const response = await fetch("/api/ai/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: [...messages, userMessage],
          currentModel 
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const reader = response.body?.getReader();
      const textDecoder = new TextDecoder();
      
      let assistantMessage = "";
      let hasStartedAssistantMessage = false;

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;
        
        const chunk = textDecoder.decode(value);
        
        // 1. Check for tool start/end markers
        if (chunk.includes("[TOOL_START:")) {
          const toolName = chunk.match(/\[TOOL_START:(.*?)\]/)?.[1];
          if (toolName) setCurrentTool(toolName);
          continue;
        }
        
        if (chunk.includes("[TOOL_END]")) {
          setCurrentTool(null);
          continue;
        }

        // 2. Otherwise treat as text content
        assistantMessage += chunk;
        
        if (!hasStartedAssistantMessage) {
          hasStartedAssistantMessage = true;
          setMessages(prev => [...prev, { role: "assistant", content: chunk }]);
        } else {
          setMessages(prev => {
            const rest = prev.slice(0, -1);
            return [...rest, { role: "assistant", content: assistantMessage }];
          });
        }
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "I encountered an error. Please check your connection and try again." }]);
    } finally {
      setIsLoading(false);
      setCurrentTool(null);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] min-h-[600px] max-w-4xl mx-auto w-full bg-white rounded-[2.5rem] border border-zinc-100 shadow-2xl overflow-hidden">
      
      {/* FIXED HEADER */}
      <div className="p-5 border-b border-zinc-100 bg-[#111] text-white flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <BrainCircuit className="w-5 h-5 text-emerald-500" />
          </div>
          <div>
            <h3 className="text-sm font-black tracking-widest uppercase">Trajectory Advisor</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Active Intelligence V2.1</span>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5">
           <ShieldCheck className="w-4 h-4 text-zinc-400" />
           <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Secure AES-256</span>
        </div>
      </div>

      {/* MESSAGES (INDEPENDENT SCROLL AREA) */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-50/30 no-scrollbar scroll-smooth"
      >
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={cn(
                "flex gap-4 max-w-[90%]",
                m.role === "user" ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-1 shadow-sm transition-transform active:scale-90",
                m.role === "user" ? "bg-[#111] text-white" : "bg-white border border-zinc-100 text-emerald-500"
              )}>
                {m.role === "user" ? <User className="w-4 h-4" /> : <BrainCircuit className="w-4 h-4" />}
              </div>
              <div className={cn(
                "p-4 rounded-2xl text-sm leading-relaxed relative",
                m.role === "user" 
                  ? "bg-[#111] text-white rounded-tr-none shadow-zinc-200/50" 
                  : "bg-white border border-zinc-100 text-[#111] shadow-sm rounded-tl-none"
              )}>
                <div className="prose prose-sm prose-zinc max-w-none prose-p:leading-relaxed prose-pre:bg-zinc-900 prose-pre:text-white">
                  <ReactMarkdown>
                    {m.content}
                  </ReactMarkdown>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* DYNAMIC THINKING/TOOL INDICATOR */}
          {(isLoading || currentTool) && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4 items-start"
            >
              <div className="w-8 h-8 rounded-xl bg-white border border-zinc-100 flex items-center justify-center shrink-0">
                <Loader2 className="w-4 h-4 text-emerald-500 animate-spin" />
              </div>
              <div className="flex flex-col gap-2">
                {currentTool && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full"
                  >
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce" />
                    </div>
                    <span className="text-[10px] font-black uppercase text-emerald-600 tracking-wider">
                      {currentTool}
                    </span>
                  </motion.div>
                )}
                
                {!messages[messages.length - 1].content && !currentTool && (
                  <div className="p-4 bg-white border border-zinc-100 rounded-2xl rounded-tl-none flex gap-1">
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce" />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FIXED FOOTER (QUICK PROMPTS + INPUT) */}
      <div className="shrink-0 bg-white border-t border-zinc-100">
        {/* QUICK PROMPTS */}
        <div className="px-6 py-3 border-b border-zinc-50 overflow-x-auto no-scrollbar whitespace-nowrap flex gap-2">
          {quickPrompts.map((p, i) => (
            <button
              key={i}
              onClick={() => handleSubmit(undefined, p)}
              className="px-4 py-2 bg-zinc-50 hover:bg-zinc-100 text-[9px] font-black uppercase tracking-widest text-zinc-500 rounded-full border border-zinc-100 transition-all hover:border-zinc-300 active:scale-95"
            >
              {p}
            </button>
          ))}
        </div>

        {/* INPUT FORM */}
        <div className="p-6 pt-4">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <div className="flex-1 relative group">
               <input
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 placeholder="Type your strategic question..."
                 className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#111]/10 focus:bg-white transition-all group-hover:border-zinc-300"
                 disabled={isLoading}
               />
               <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-200/50 text-[8px] font-bold text-zinc-500 select-none">
                     <Zap className="w-2 h-2 fill-zinc-500" />
                     SECURE AI
                  </div>
               </div>
            </div>
            <button 
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-14 h-14 bg-[#111] text-white rounded-2xl flex items-center justify-center hover:bg-zinc-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl active:scale-95 shrink-0"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <p className="mt-3 text-center text-[9px] font-black uppercase tracking-widest text-zinc-400 select-none">
            STRATEGIC ADVISORY SESSION • AUTHENTICATED & ENCRYPTED
          </p>
        </div>
      </div>
    </div>
  );
}
