import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import ContactSection from "@/components/sections/ContactSection";
import FAQ from "@/components/sections/FAQ";
import { Button } from "@/components/ui/button";
import { estimateChecklist, pricingDeliverables, pricingFactors } from "@/lib/site-content";

export const metadata: Metadata = {
    title: "Jumta izmaksas | IS JUMTI",
    description: "Noskaidrojiet jumta montāžas, renovācijas un siltināšanas izmaksas. Precīza tāme pēc objekta informācijas un apsekošanas.",
};

export default function PricingPage() {
    return (
        <div className="bg-background">
            <section className="bg-foreground text-background">
                <div className="container mx-auto grid gap-10 px-4 py-16 md:px-6 lg:grid-cols-[0.58fr_0.42fr] lg:items-center lg:py-24">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-primary" /> Izmaksas
                        </p>
                        <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl text-background">
                            Cik maksā jumta maiņa vai remonts?
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/80 sm:text-lg">
                            Jumta izmaksas ietekmē materiāli, konstrukcijas stāvoklis, darba sarežģītība, drošība un piekļuve.
                            Tāpēc piedāvājumu sagatavojam pēc informācijas par objektu vai apsekošanas, nevis pēc viena universāla m² skaitļa.
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Link href="#pieteikums" className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full bg-primary px-8 font-black text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95">
                                Nosūtīt pieteikumu
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link href="/pakalpojumi" className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full border border-background/40 bg-transparent px-8 font-bold text-background hover:bg-background/10 hover:text-background transition-all active:scale-95">
                                Skatīt pakalpojumus
                            </Link>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-background/10 bg-background/5 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
                        <h2 className="text-xl font-bold text-background">Kas jānosūta ātrākai tāmei?</h2>
                        <ul className="mt-6 space-y-4">
                            {estimateChecklist.map((item) => (
                                <li key={item} className="flex gap-4 text-sm leading-relaxed text-background/80">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-background py-16 lg:py-24 relative">
                <div className="absolute inset-0 bg-muted/20 skew-y-1 transform -z-10" />
                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="mb-12 max-w-3xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-primary" /> Cenas faktori
                        </p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-5xl">
                            Kāpēc jumti ar līdzīgu platību var maksāt atšķirīgi.
                        </h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {pricingFactors.map((item) => (
                            <article key={item.title} className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-md transition-all hover:border-primary/30">
                                <h3 className="text-xl font-bold text-card-foreground">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-muted/10 py-16 lg:py-24 border-y border-border">
                <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-[0.42fr_0.58fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-primary" /> Piedāvājums
                        </p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-5xl">
                            Tāmē redzamas pozīcijas, nevis tikai gala summa.
                        </h2>
                        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                            Tas palīdz salīdzināt piedāvājumus godīgi: vai cenā ir iekļauti mezgli, drošības elementi,
                            transports un darbi, kas parasti atklājas tikai pēc detalizētas sarunas.
                        </p>
                    </div>
                    <div className="grid gap-4">
                        {pricingDeliverables.map((item) => (
                            <div key={item} className="flex gap-4 rounded-2xl border border-border/50 bg-card p-5 text-base font-bold leading-relaxed text-card-foreground shadow-sm hover:shadow-md transition-shadow group items-center">
                                <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ />
            <div id="pieteikums">
                <ContactSection />
            </div>
        </div>
    );
}
