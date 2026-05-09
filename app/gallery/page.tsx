import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import ContactSection from "@/components/sections/ContactSection";
import { galleryProjects } from "@/lib/site-content";

export const metadata: Metadata = {
    title: "Paveiktie jumtu darbi un projekti Latvijā",
    description:
        "Paveiktie IS JUMTI darbi: jumtu montāža un renovācija privātmājām, daudzdzīvokļu namiem un komercobjektiem visā Latvijā. Metāla, dakstiņu un bitumena segumi.",
};

export default function GalleryPage() {
    return (
        <div className="bg-background">
            <section className="bg-foreground text-background py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-roof-pattern opacity-[0.05] pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="max-w-4xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-primary" /> Galerija
                        </p>
                        <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl text-background">
                            Paveiktie jumtu darbi ar redzamu darba kontekstu.
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/80 sm:text-lg">
                            Rādām privātmāju, daudzdzīvokļu namu, komercobjektu un siltināšanas darbus ar īsu
                            kontekstu par paveikto, atrašanās vietu un izmantoto risinājumu.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-background">
                            {["Privātmājas", "Daudzdzīvokļu nami", "Komercobjekti", "Siltināšana"].map((item) => (
                                <span key={item} className="rounded-full border border-background/20 px-5 py-2.5 bg-background/5 hover:bg-background/10 transition-colors">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-background py-14 lg:py-18 relative">
                <div className="absolute inset-0 bg-muted/20 skew-y-1 transform -z-10" />
                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {galleryProjects.map((project) => (
                            <article key={project.title} className="group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-md transition-all hover:border-primary/30">
                                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 50vw, 450px"
                                        quality={65}
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest">
                                        <span className="text-primary">{project.category}</span>
                                        <span className="text-muted-foreground/50">/</span>
                                        <span className="text-muted-foreground">{project.location}</span>
                                    </div>
                                    <h2 className="mt-4 text-xl font-bold tracking-tight text-card-foreground group-hover:text-primary transition-colors">{project.title}</h2>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.work}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-primary py-16 text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-roof-pattern opacity-10 pointer-events-none" />
                <div className="container mx-auto flex flex-col gap-6 px-4 md:px-6 lg:flex-row lg:items-center lg:justify-between relative">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Vēlaties līdzīgu risinājumu?</h2>
                        <p className="mt-3 text-base text-primary-foreground/90 max-w-xl">Atsūtiet foto un īsu aprakstu, mēs palīdzēsim saprast piemērotāko darbu secību.</p>
                    </div>
                    <Link href="/izmaksas" className="inline-flex h-14 items-center justify-center rounded-full bg-background px-8 text-base font-black text-primary hover:bg-background/90 transition-colors shadow-xl">
                        Noskaidrot izmaksas
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}
