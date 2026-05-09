import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import ContactSection from "@/components/sections/ContactSection";
import { processSteps, serviceItems } from "@/lib/site-content";

export const metadata: Metadata = {
    title: "Pakalpojumi | IS JUMTI",
    description: "Jumtu montāža, remonts, tāmēšana, projektēšana, inspekcija, noteku sistēmas un siltināšana visā Latvijā.",
};

export default function ServicesPage() {
    return (
        <div className="bg-background">
            <section className="bg-foreground text-background">
                <div className="container mx-auto grid gap-10 px-4 py-14 md:px-6 lg:grid-cols-[0.5fr_0.5fr] lg:items-center lg:py-20">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-3">
                            <span className="w-6 h-[2px] bg-primary" /> Pakalpojumi
                        </p>
                        <h1 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl text-background">
                            Jumtu darbi ar skaidru procesu un atbildību par rezultātu.
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/80 sm:text-lg">
                            Jumta montāža, remonts, noteku izbūve un siltināšana privātmājām, daudzdzīvokļu namiem un komercobjektiem.
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Link href="/izmaksas" className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full bg-primary px-8 font-black text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95">
                                Saņemt tāmi
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link href="/galerija" className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full border border-background/40 bg-transparent px-8 font-bold text-background hover:bg-background/10 hover:text-background transition-all active:scale-95">
                                Skatīt darbus
                            </Link>
                        </div>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted border border-border/20 shadow-2xl">
                        <Image
                            src="https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg"
                            alt="IS JUMTI jumta renovācijas darbi"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-background py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12 max-w-3xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary" /> Ko darām
                        </p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-5xl">
                            Ko varam izdarīt jūsu objektā.
                        </h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {serviceItems.map((service) => {
                            const Icon = service.icon;
                            return (
                                <article key={service.title} className="group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-md transition-all hover:border-primary/30">
                                    <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            quality={70}
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="mt-2 text-xl font-bold tracking-tight text-card-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-muted/10 py-16 lg:py-20 border-y border-border relative">
                <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-[0.4fr_0.6fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary" /> Darba gaita
                        </p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-5xl">
                            Kā notiek darbs.
                        </h2>
                        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                            Īsa secība, lai pirms darbu sākuma būtu skaidrs apjoms, cena un atbildība.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {processSteps.map((step, index) => (
                            <div key={step} className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-start gap-4">
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-black text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">{String(index + 1).padStart(2, "0")}</span>
                                <p className="text-base font-bold leading-relaxed text-card-foreground group-hover:text-primary transition-colors">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-primary py-16 text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-roof-pattern opacity-10 pointer-events-none" />
                <div className="container mx-auto flex flex-col gap-6 px-4 md:px-6 lg:flex-row lg:items-center lg:justify-between relative">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Nepieciešama jumta pārbaude?</h2>
                        <p className="mt-3 text-base leading-relaxed text-primary-foreground/90 max-w-xl">
                            Atsūtiet objektu, platību un foto. Sagatavosim nākamo soli bez liekas minēšanas.
                        </p>
                    </div>
                    <Link href="/kontakti" className="inline-flex h-14 items-center justify-center rounded-full bg-background px-8 text-base font-black text-primary hover:bg-background/90 transition-colors shadow-xl">
                        Sazināties
                        <CheckCircle2 className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}
