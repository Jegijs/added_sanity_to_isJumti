import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
// Importējam Next.js Script komponenti
import Script from "next/script"; 

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { localBusinessSchema, jsonLd } from "@/lib/schema";

const CookieConsent = dynamic(() => import("@/components/shared/CookieConsent"));
const WhatsAppButton = dynamic(() => import("@/components/shared/WhatsAppButton"));
const MobileStickyCTA = dynamic(() => import("@/components/shared/MobileStickyCTA"));

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "optional",
  style: ["normal"],
  variable: "--font-inter",
});

const SITE_URL = "https://www.isjumti.lv";
const SITE_TITLE = "Jumtu darbi Latvijā – montāža, remonts, renovācija | IS JUMTI";
const SITE_DESCRIPTION =
  "Profesionāli jumtu darbi visā Latvijā: jumtu montāža, remonts, renovācija, bēniņu siltināšana un noteksistēmas. 15 gadu pieredze, bezmaksas tāme un garantija.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: "%s | IS JUMTI" },
  description: SITE_DESCRIPTION,
  keywords: [
    "jumtu darbi",
    "jumta remonts",
    "jumtu renovācija",
    "jumta segums",
    "jumtu ieklāšana",
    "metāla jumti",
    "dakstiņu jumti",
    "bitumena šindeļi",
    "bēniņu siltināšana",
    "noteksistēmas",
    "jumiķis Jelgavā",
    "jumtu firma Latvijā",
  ],
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
        {/* Hotjar izsekošanas kods ar tavu ID 847712 */}
        <Script id="hotjar-setup" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:847712,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(localBusinessSchema)}
        />
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <MobileStickyCTA />
        <WhatsAppButton />
        <Toaster />

        <CookieConsent />
      </body>
    </html>
  );
}