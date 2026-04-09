import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CalculatorProvider } from "@/lib/store/CalculatorContext";
import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Costly | See the Real Cost of Divorce",
  description: "Understand child support, expenses, and your future income in minutes.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <AuthProvider>
          <Toaster position="top-center" richColors expand={false} duration={3000} />
          <CalculatorProvider>
            {children}
          </CalculatorProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
