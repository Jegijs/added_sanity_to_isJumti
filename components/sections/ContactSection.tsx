"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import LeadForm from "@/components/shared/LeadForm";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactSection() {
    return (
        <section className="bg-slate-950 py-16 text-white lg:py-20" id="kontakti">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-8 grid gap-6 md:grid-cols-[0.58fr_0.42fr] md:items-end">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-wider text-red-300">Kontakti</p>
                            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                                Pastāstiet par objektu. Mēs sagatavosim nākamo soli.
                            </h2>
                        </div>
                        <div className="space-y-2 text-sm text-slate-300 md:text-right">
                            <Link href={`tel:${CONTACT_INFO.phone}`} className="inline-flex items-center gap-2 font-bold text-white hover:text-red-200 md:justify-end">
                                <Phone className="h-4 w-4 text-red-300" />
                                {CONTACT_INFO.phoneDisplay}
                            </Link>
                            <br />
                            <Link href={`mailto:${CONTACT_INFO.email}`} className="inline-flex items-center gap-2 font-bold text-white hover:text-red-200 md:justify-end">
                                <Mail className="h-4 w-4 text-red-300" />
                                {CONTACT_INFO.email}
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-md bg-white text-slate-950">
                        <LeadForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
