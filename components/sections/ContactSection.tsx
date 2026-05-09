import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import LeadForm from "@/components/shared/LeadForm";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactSection() {
    return (
        <section className="bg-foreground py-20 text-background lg:py-28 relative overflow-hidden" id="kontakti">
            <div className="absolute inset-0 bg-roof-pattern opacity-[0.05] pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 grid gap-8 md:grid-cols-[0.6fr_0.4fr] md:items-end">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-primary" /> Kontakti
                            </p>
                            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
                                Pastāstiet par objektu. Mēs sagatavosim nākamo soli.
                            </h2>
                        </div>
                        <div className="space-y-4 text-sm text-background/70 md:text-right">
                            <Link href={`tel:${CONTACT_INFO.phone}`} className="inline-flex items-center gap-3 font-bold text-background hover:text-primary transition-colors md:justify-end text-lg">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                                    <Phone className="h-4 w-4 text-primary" />
                                </span>
                                {CONTACT_INFO.phoneDisplay}
                            </Link>
                            <br />
                            <Link href={`mailto:${CONTACT_INFO.email}`} className="inline-flex items-center gap-3 font-bold text-background hover:text-primary transition-colors md:justify-end text-lg mt-2">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                                    <Mail className="h-4 w-4 text-primary" />
                                </span>
                                {CONTACT_INFO.email}
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-background p-2 text-foreground shadow-2xl">
                        <LeadForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
