"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

const heroSlides = [
    {
        id: 1,
        category: "Privātmājas",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg",
        alt: "Privātmājas jumta renovācija",
    },
    {
        id: 2,
        category: "Daudzdzīvokļu nami",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/450512551_1004194185048314_1571388777996338156_n-1-1200x800.jpg",
        alt: "Daudzdzīvokļu mājas jumta renovācija",
    },
    {
        id: 3,
        category: "Siltināšana",
        src: "https://www.isjumti.lv/wp-content/uploads/2025/01/5976776786199034863-1200x800.jpeg",
        alt: "Jumta siltināšanas un renovācijas darbi",
    },
];

const stats = [
    { value: "12+", label: "Gadu pieredze" },
    { value: "850+", label: "Pabeigti jumti" },
    { value: "30", label: "Gadu garantija" },
];

const SLIDE_DELAY = 6000;

export default function Hero() {
    const [current, setCurrent] = React.useState(0);
    const [paused, setPaused] = React.useState(false);

    React.useEffect(() => {
        if (paused) return;
        const id = window.setInterval(() => {
            setCurrent((c) => (c + 1) % heroSlides.length);
        }, SLIDE_DELAY);
        return () => window.clearInterval(id);
    }, [paused]);

    return (
        <section className="relative overflow-hidden bg-[#8f050d] text-primary-foreground border-b border-primary/20">
            {/* Rich brand color background with stronger roof texture */}
            <div className="absolute inset-0 bg-[linear-gradient(145deg,#b50712_0%,#8f050d_46%,#430106_100%)] pointer-events-none" />
            <div className="absolute inset-0 bg-shingle-pattern opacity-45 pointer-events-none mix-blend-multiply" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.13),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.36))] pointer-events-none" />
            <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-white/8 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative container mx-auto px-4 py-12 sm:px-6 lg:py-18">
                <div className="grid gap-8 lg:grid-cols-[0.48fr_0.52fr] lg:items-center lg:gap-12">

                    {/* LEFT — content (always first on mobile) */}
                    <div>
                        <div className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-sm font-medium text-primary-foreground mb-6 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-primary-foreground mr-2" />
                            Premium jumtu risinājumi
                        </div>
                        <h1 className="max-w-2xl text-[2.5rem] font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl text-primary-foreground">
                            Jūsu jumts ir mūsu atbildība.
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
                            Jumtu izbūve, renovācija un ekovates siltināšana visā Latvijā ar rūpīgu materiālu izvēli un oficiālu garantiju.
                        </p>

                        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-primary-foreground lg:max-w-xl">
                            <li className="flex items-center gap-2 whitespace-nowrap">
                                <Check className="h-4 w-4 shrink-0 text-primary-foreground" /> Bezmaksas apsekošana
                            </li>
                            <li className="flex items-center gap-2 whitespace-nowrap">
                                <Check className="h-4 w-4 shrink-0 text-primary-foreground" /> Tāme 24h laikā
                            </li>
                            <li className="flex items-center gap-2 whitespace-nowrap">
                                <Check className="h-4 w-4 shrink-0 text-primary-foreground" /> Garantija darbiem
                            </li>
                        </ul>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                            <Link href="/izmaksas" className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full bg-background px-8 font-black text-primary hover:bg-background/90 shadow-xl active:scale-95 transition-all">
                                Aprēķināt izmaksas
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link href={`tel:${CONTACT_INFO.phone}`} className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full border border-primary-foreground/30 bg-black/10 backdrop-blur-sm px-8 font-bold text-primary-foreground hover:bg-black/20 active:scale-95 transition-all">
                                <Phone className="mr-2 h-5 w-5 shrink-0 text-primary-foreground" />
                                {CONTACT_INFO.phoneDisplay}
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mt-10 grid max-w-md grid-cols-3 gap-3 border-t border-primary-foreground/20 pt-6">
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <div className="text-3xl font-black tracking-tight text-primary-foreground">{s.value}</div>
                                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground/70">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — image slider (below content on mobile) */}
                    <div
                        className="w-full"
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-primary-foreground/10 bg-black/10 shadow-2xl">
                            {heroSlides.map((slide, i) => (
                                <div
                                    key={slide.id}
                                    className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
                                    aria-hidden={i !== current}
                                >
                                    <Image
                                        src={slide.src}
                                        alt={slide.alt}
                                        fill
                                        priority={i === 0}
                                        fetchPriority={i === 0 ? "high" : "auto"}
                                        loading={i === 0 ? "eager" : "lazy"}
                                        sizes="(max-width: 1024px) 100vw, 640px"
                                        quality={i === 0 ? 75 : 65}
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                                <p className="text-sm font-bold uppercase tracking-widest text-white">
                                    {heroSlides[current].category}
                                </p>
                            </div>
                        </div>

                        <div className="mt-3 flex gap-2">
                            {heroSlides.map((slide, index) => {
                                const isActive = index === current;
                                return (
                                    <button
                                        key={slide.id}
                                        type="button"
                                        onClick={() => setCurrent(index)}
                                        aria-label={`Rādīt: ${slide.category}`}
                                        className={`h-2 flex-1 rounded-full transition-all duration-300 ${isActive ? "bg-primary-foreground" : "bg-primary-foreground/30 hover:bg-primary-foreground/50"}`}
                                    >
                                        <span className="sr-only">{slide.category}</span>
                                        <span className="block h-full overflow-hidden rounded-full bg-transparent">
                                            {isActive && (
                                                <span
                                                    key={`bar-${current}`}
                                                    className="block h-full w-full origin-left bg-primary-foreground"
                                                    style={{ animation: `slideProgress ${SLIDE_DELAY}ms linear forwards` }}
                                                />
                                            )}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
