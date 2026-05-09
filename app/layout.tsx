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
