import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

// Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/shared/CookieConsent"; // <--- JAUNAIS

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <Toaster />

        {/* Banneris satur arī Analytics loģiku, tāpēc liekam to šeit */}
        <CookieConsent />
      </body>
    </html>
  );
}