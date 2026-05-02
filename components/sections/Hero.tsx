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
        <section className="relative overflow-hidden bg-[#9f0610] text-white">
            <div className="pointer-events-none absolute inset-0 bg-shingle-pattern opacity-[0.08]" />
            <div className="relative container mx-auto px-4 py-12 sm:px-6 lg:py-18">
                <div className="grid gap-8 lg:grid-cols-[0.48fr_0.52fr] lg:items-center lg:gap-12">

                    {/* LEFT — content (always first on mobile) */}
                    <div>
                        <h1 className="max-w-2xl text-[2.5rem] font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                            Jūsu jumts ir mūsu atbildība.
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-relaxed text-red-50/90 sm:text-lg">
                            Jumtu izbūve, renovācija un ekovates siltināšana visā Latvijā ar rūpīgu materiālu izvēli un oficiālu garantiju.
                        </p>

                        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-white/90 lg:max-w-xl">
                            <li className="flex items-center gap-2 whitespace-nowrap">
                                <Check className="h-4 w-4 shrink-0 text-red-100" /> Bezmaksas apsekošana
                            </li>
                            <li className="flex items-center gap-2 whitespace-nowrap">
                                <Check className="h-4 w-4 shrink-0 text-red-100" /> Tāme 24h laikā
                            </li>
                            <li className="flex items-center gap-2 whitespace-nowrap">
                                <Check className="h-4 w-4 shrink-0 text-red-100" /> Garantija darbiem
                            </li>
                        </ul>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <Button
                                asChild
                                size="lg"
                                className="h-12 w-full rounded-md bg-white px-6 font-bold text-red-700 shadow-none hover:bg-red-50 sm:w-auto"
                            >
                                <Link href="/izmaksas">
                                    Aprēķināt izmaksas
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="h-12 w-full rounded-md border-white/35 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white sm:w-auto"
                            >
                                <Link href={`tel:${CONTACT_INFO.phone}`}>
                                    <Phone className="mr-2 h-4 w-4 shrink-0" />
                                    {CONTACT_INFO.phoneDisplay}
                                </Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="mt-8 grid max-w-md grid-cols-3 gap-3 border-t border-white/20 pt-5">
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <div className="text-2xl font-black tracking-tight">{s.value}</div>
                                    <div className="mt-0.5 text-[10px] uppercase tracking-wider text-red-100/70 sm:text-xs">{s.label}</div>
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
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-black/20">
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
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <p className="text-xs font-bold uppercase tracking-wider text-white">
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
                                        className={`h-1.5 flex-1 rounded-full transition ${isActive ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}
                                    >
                                        <span className="sr-only">{slide.category}</span>
                                        <span className="block h-full overflow-hidden rounded-full bg-transparent">
                                            {isActive && (
                                                <span
                                                    key={`bar-${current}`}
                                                    className="block h-full w-full origin-left bg-white"
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
