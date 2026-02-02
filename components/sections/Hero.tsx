"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// Dati
const heroSlides = [
    {
        id: 1,
        category: "Privātmājas",
        title: "Jumti, kas sargā ģimeni",
        description: "Metāla un dakstiņu jumtu montāža ar 30 gadu garantiju.",
        src: "https://images.unsplash.com/photo-1632759988104-29d4c90651bc?q=80&w=2940&auto=format&fit=crop",
        alt: "Renovēts privātmājas jumts",
    },
    {
        id: 2,
        category: "Daudzdzīvokļu Nami",
        title: "Renovācija biedrībām",
        description: "Pilna cikla siltināšana un jumta maiņa bez slēptām izmaksām.",
        src: "https://images.unsplash.com/photo-1518463892881-d587bf2c296a?q=80&w=2894&auto=format&fit=crop",
        alt: "Daudzdzīvokļu mājas jumta renovācija",
    },
    {
        id: 3,
        category: "Komercobjekti",
        title: "Industriālie Risinājumi",
        description: "Lielu platību jumtu ieklāšana ar precīziem termiņiem.",
        src: "https://images.unsplash.com/photo-1628120616143-693354474776?q=80&w=2940&auto=format&fit=crop",
        alt: "Jumiķi uz komercēkas jumta",
    },
];

export default function Hero() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    return (
        <section className="w-full bg-white py-12 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

                    {/* KREISĀ PUSE: Saturs */}
                    <div className="flex flex-col space-y-6 lg:space-y-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            {/* Vienkāršs, profesionāls badge */}
                            <div className="inline-flex items-center space-x-2 text-sm font-semibold text-red-600">
                                <ShieldCheck className="h-5 w-5" />
                                <span>Sertificēti jumiķi Rīgā un Pierīgā</span>
                            </div>

                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                                Jūsu mājas jumts — <span className="text-red-600">mūsu atbildība.</span>
                            </h1>

                            <p className="max-w-[600px] text-lg text-gray-600 leading-relaxed">
                                Mēs strādājam bez "haltūrām". Nodrošinām pilna cikla jumtu izbūvi,
                                siltināšanu un oficiālu garantiju līdz 30 gadiem.
                            </p>

                            {/* Saraksts ar priekšrocībām (Trust signals) */}
                            <ul className="grid gap-2 py-2 text-gray-600">
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-red-600" /> Bezmaksas objekta apsekošana
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-red-600" /> Tāme 24 stundu laikā
                                </li>
                            </ul>
                        </div>

                        {/* Pogas - klasiskas un skaidras */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold text-base h-12 px-8 rounded-md">
                                <Link href="/cenas">
                                    Aprēķināt Izmaksas
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50 text-base h-12 px-8 rounded-md">
                                <Link href="/galerija">
                                    Skatīt Paveikto
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* LABĀ PUSE: Attēlu karuselis (Tīrāks dizains) */}
                    <div className="order-1 lg:order-2 w-full">
                        <Carousel
                            plugins={[plugin.current]}
                            className="w-full"
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                            opts={{ loop: true }}
                        >
                            <CarouselContent>
                                {heroSlides.map((slide) => (
                                    <CarouselItem key={slide.id}>
                                        <div className="relative aspect-[4/3] lg:aspect-square xl:aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg bg-gray-100">
                                            <Image
                                                src={slide.src}
                                                alt={slide.alt}
                                                fill
                                                priority={slide.id === 1}
                                                className="object-cover"
                                            />

                                            {/* Minimāls info panelis apakšā */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                                <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                                                    {slide.category}
                                                </p>
                                                <h3 className="text-xl font-bold">{slide.title}</h3>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            {/* Navigācija apakšā pa labi - neuzkrītoša */}
                            <div className="hidden lg:flex absolute -bottom-12 right-0 gap-2">
                                <CarouselPrevious className="static translate-y-0 border-gray-300 hover:bg-gray-100" />
                                <CarouselNext className="static translate-y-0 border-gray-300 hover:bg-gray-100" />
                            </div>
                        </Carousel>
                    </div>

                </div>
            </div>
        </section>
    );
}