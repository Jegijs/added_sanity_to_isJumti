"use client";

import Link from "next/link";
import { ClipboardEdit, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function MobileStickyCTA() {
    return (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2 shadow-[0_-10px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
            <div className="grid grid-cols-2 gap-2">
                <Link
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 text-sm font-black text-white"
                >
                    <Phone className="h-5 w-5" />
                    Zvanīt
                </Link>
                <Link
                    href="/kontakti"
                    className="flex h-12 items-center justify-center gap-2 rounded-md bg-brand text-sm font-black text-white"
                >
                    <ClipboardEdit className="h-5 w-5" />
                    Pieteikties
                </Link>
            </div>
        </div>
    );
}
