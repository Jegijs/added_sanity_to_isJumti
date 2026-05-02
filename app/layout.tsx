import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

// Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/shared/CookieConsent";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import LeadModal from "@/components/shared/LeadModal";
import MobileStickyCTA from "@/components/shared/MobileStickyCTA";

import "./globals.css";

// 1. OPTIMIZĀCIJA: Pievienots 'display: swap' un 'variable', lai teksts parādītos uzreiz
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Jumiķa Pakalpojumi | IS JUMTI",
  description: "Profesionāla jumtu izbūve, renovācija un siltināšana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lv" className="scroll-smooth">
      {/* 2. OPTIMIZĀCIJA: 'min-h-screen flex flex-col' garantē, ka Footer vienmēr ir apakšā */}
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Header />

        {/* 'flex-1' liek saturam aizņemt visu brīvo vietu */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <LeadModal />
        <MobileStickyCTA />
        <WhatsAppButton />
        <Toaster />

        <CookieConsent />
      </body>
    </html>
  );
}
