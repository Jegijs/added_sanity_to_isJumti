import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CookieConsent = dynamic(() => import("@/components/shared/CookieConsent"));
const WhatsAppButton = dynamic(() => import("@/components/shared/WhatsAppButton"));
const LeadModal = dynamic(() => import("@/components/shared/LeadModal"));
const MobileStickyCTA = dynamic(() => import("@/components/shared/MobileStickyCTA"));

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const SITE_URL = "https://www.isjumti.lv";
const SITE_TITLE = "Jumiķa Pakalpojumi | IS JUMTI";
const SITE_DESCRIPTION = "Profesionāla jumtu izbūve, renovācija un siltināšana visā Latvijā.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: "%s | IS JUMTI" },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "IS JUMTI",
    locale: "lv_LV",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
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
        <LeadModal />
        <MobileStickyCTA />
        <WhatsAppButton />
        <Toaster />

        <CookieConsent />
      </body>
    </html>
  );
}
