"use client";

import Link from "next/link";
import { ClipboardEdit, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function MobileStickyCTA() {
    return (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/50 bg-background/90 px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] backdrop-blur-md md:hidden">
            <div className="grid grid-cols-2 gap-3">
                <Link
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground text-sm font-bold text-background shadow-md active:scale-95 transition-transform"
                >
                    <Phone className="h-4 w-4" />
                    Zvanīt
                </Link>
                <Link
                    href="/kontakti"
                    className="flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 active:scale-95 transition-transform"
                >
                    <ClipboardEdit className="h-4 w-4" />
                    Pieteikties
                </Link>
            </div>
        </div>
    );
}
