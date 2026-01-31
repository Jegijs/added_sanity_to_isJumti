"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [consentGranted, setConsentGranted] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Check localStorage on mount
        const savedConsent = localStorage.getItem("cookieConsent");

        if (savedConsent === "granted") {
            setConsentGranted(true);
        } else if (savedConsent === null) {
            // If no choice made yet, show banner after a small delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "granted");
        setConsentGranted(true);
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookieConsent", "denied");
        setConsentGranted(false);
        setIsVisible(false);
    };

    if (!isMounted) return null;

    return (
        <>
            {/* 1. Conditionally render Google Analytics based on consent */}
            {consentGranted && (
                <GoogleAnalytics gaId="G-XXXXXXXXXX" /> // <--- Ievieto šeit klienta ID
            )}

            {/* 2. The Banner UI */}
            <div
                className={cn(
                    "fixed bottom-0 left-0 right-0 z-50 p-4 transition-transform duration-500 ease-in-out md:p-6",
                    isVisible ? "translate-y-0" : "translate-y-full"
                )}
            >
                <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-6 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] md:flex md:items-center md:justify-between md:gap-6">

                    {/* Text Content */}
                    <div className="flex items-start gap-4">
                        <div className="hidden rounded-full bg-red-50 p-2 md:block">
                            <Cookie className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-slate-900">
                                Mēs cienām Jūsu privātumu
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                                Mēs izmantojam sīkdatnes (cookies), lai analizētu vietnes plūsmu un uzlabotu lietotāja pieredzi.
                                Nospiežot "Piekrītu", jūs atļaujat mums izmantot Google Analytics.
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-col gap-3 md:mt-0 md:flex-row md:shrink-0">
                        <Button
                            variant="outline"
                            onClick={declineCookies}
                            className="w-full md:w-auto font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                        >
                            Noraidīt
                        </Button>
                        <Button
                            onClick={acceptCookies}
                            className="w-full md:w-auto bg-primary hover:bg-red-700 text-white font-bold shadow-md"
                        >
                            Piekrītu visām
                        </Button>
                    </div>

                </div>
            </div>
        </>
    );
}