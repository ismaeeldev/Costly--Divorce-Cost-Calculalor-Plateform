import { CalculatorForm } from "@/components/form/CalculatorForm";
import { Navbar } from "@/components/layout/Navbar";
import { SlideUp } from "@/components/animations/SlideUp";

export default function RunCalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-[#111111] overflow-x-hidden pt-16">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center p-4 py-20 relative">
        {/* Decorative background blur */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white rounded-full blur-[100px] -z-10 pointer-events-none" />

        <SlideUp yOffset={10} className="w-full">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Calculate Your Future</h1>
            <p className="text-zinc-500 text-lg md:text-xl font-medium px-4">
              Get an instant, anonymous estimate of your monthly obligation based on standard state guidelines.
            </p>
          </div>

          <CalculatorForm />
        </SlideUp>
      </main>
    </div>
  );
}
