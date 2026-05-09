import Link from "next/link";
import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import LeadForm from "@/components/shared/LeadForm";
import SocialLinks from "@/components/shared/SocialLinks";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Bezmaksas tāme – jumiķi Jelgavā un visā Latvijā",
    description:
        "Sazinieties ar IS JUMTI – bezmaksas apsekošana un tāme 24h laikā. Jumtu darbi Jelgavā, Rīgā, Pierīgā, Zemgalē un visā Latvijā.",
};

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen flex flex-col">
            <section className="bg-foreground text-background py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-roof-pattern opacity-[0.05] pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative">
                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-primary" /> Kontakti
                    </p>
                    <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl text-background">
                        Pastāstiet par objektu. Mēs palīdzēsim saprast nākamo soli.
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/80 sm:text-lg">
                        Strādājam no Jelgavas un pieņemam objektus visā Latvijā. Ātrākai atbildei pievienojiet jumta foto,
                        aptuveno platību un atrašanās vietu.
                    </p>
                </div>
            </section>

            <section className="bg-background py-16 lg:py-24 relative -mt-8 z-10">
                <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3 md:px-6">
                    <Link href={`tel:${CONTACT_INFO.phone}`} className="rounded-2xl border border-border/50 bg-card p-8 shadow-sm hover:shadow-md transition-all hover:border-primary/30 group">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Phone className="h-6 w-6" />
                        </div>
                        <h2 className="mt-6 text-xl font-bold text-card-foreground">Tālrunis</h2>
                        <p className="mt-2 text-base font-semibold text-muted-foreground group-hover:text-primary transition-colors">{CONTACT_INFO.phoneDisplay}</p>
                    </Link>
                    <Link href={`mailto:${CONTACT_INFO.email}`} className="rounded-2xl border border-border/50 bg-card p-8 shadow-sm hover:shadow-md transition-all hover:border-primary/30 group">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Mail className="h-6 w-6" />
                        </div>
                        <h2 className="mt-6 text-xl font-bold text-card-foreground">E-pasts</h2>
                        <p className="mt-2 break-all text-base font-semibold text-muted-foreground group-hover:text-primary transition-colors">{CONTACT_INFO.email}</p>
                    </Link>
                    <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h2 className="mt-6 text-xl font-bold text-card-foreground">Darba zona</h2>
                        <p className="mt-2 text-base font-semibold text-muted-foreground">{CONTACT_INFO.address}</p>
                    </div>
                </div>
            </section>

            <section className="bg-muted/10 py-16 lg:py-24 border-y border-border flex-grow">
                <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-[0.4fr_0.6fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-primary" /> Pieteikums
                        </p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl text-foreground">
                            Jo precīzāks apraksts, jo ātrāk varam sagatavot nākamo soli.
                        </h2>
                        <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-inner">
                            <h3 className="text-lg font-bold text-primary">Noderīgi pievienot</h3>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground font-medium">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Jumta vai bojājuma foto</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Aptuveno platību un atrašanās vietu</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Vēlamo segumu, siltinājumu vai remonta mērķi</li>
                            </ul>
                        </div>
                        <div className="mt-10">
                            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground/80">Seko mums</p>
                            <SocialLinks variant="ghost-dark" size="md" />
                        </div>
                    </div>
                    <div className="rounded-2xl bg-card border border-border shadow-2xl p-2 sm:p-4">
                        <LeadForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
