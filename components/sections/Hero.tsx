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

const heroSlides = [
    {
        id: 1,
        category: "Privātmājas",
        title: "Jumti, kas sargā ģimeni",
        description: "Metāla un dakstiņu jumtu montāža ar 30 gadu garantiju.",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg",
        alt: "IS JUMTI veiktais jumta renovācijas projekts",
    },
    {
        id: 2,
        category: "Daudzdzīvokļu Nami",
        title: "Renovācija biedrībām",
        description: "Pilna cikla siltināšana un jumta maiņa bez slēptām izmaksām.",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg",
        alt: "Daudzdzīvokļu mājas jumta renovācija",
    },
    {
        id: 3,
        category: "Komercobjekti",
        title: "Industriālie Risinājumi",
        description: "Lielu platību jumtu ieklāšana ar precīziem termiņiem.",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg",
        alt: "Jumiķi uz komercēkas jumta",
    },
];

export default function Hero() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    return (
        <section className="w-full bg-white py-8 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">

                    {/* KREISĀ PUSE */}
                    <div className="flex flex-col space-y-6 lg:space-y-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <div className="inline-flex items-center space-x-2 text-sm font-semibold text-red-600">
                                <ShieldCheck className="h-5 w-5" />
                                <span>Sertificēti jumiķi Rīgā un Pierīgā</span>
                            </div>

                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                                Jūsu mājas jumts — <span className="text-red-600">mūsu atbildība.</span>
                            </h1>

                            <p className="max-w-[600px] text-base sm:text-lg text-gray-600 leading-relaxed">
                                Mēs strādājam bez "haltūrām". Nodrošinām pilna cikla jumtu izbūvi,
                                siltināšanu un oficiālu garantiju līdz 30 gadiem.
                            </p>

                            <ul className="grid gap-2 py-2 text-gray-600 text-sm sm:text-base">
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-red-600" /> Bezmaksas objekta apsekošana
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-red-600" /> Tāme 24 stundu laikā
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold h-12 px-8 rounded-md shadow-lg shadow-red-100 w-full sm:w-auto">
                                <Link href="/cenas">
                                    Aprēķināt Izmaksas
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50 h-12 px-8 rounded-md w-full sm:w-auto">
                                <Link href="/galerija">
                                    Skatīt Paveikto
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* LABĀ PUSE: Karuselis */}
                    <div className="order-1 lg:order-2 w-full">
                        <Carousel
                            plugins={[plugin.current]}
                            className="w-full"
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                            opts={{ loop: true }}
                        >
                            <CarouselContent>
                                {heroSlides.map((slide, index) => (
                                    <CarouselItem key={slide.id}>
                                        <div className="relative aspect-square sm:aspect-[3/2] w-full overflow-hidden rounded-xl shadow-xl bg-gray-100 group">

                                            {/* 4. OPTIMIZĀCIJA: 'priority' un 'sizes'
                          Pirmais slaids (index 0) tiek ielādēts uzreiz (priority). 
                      */}
                                            <Image
                                                src={slide.src}
                                                alt={slide.alt}
                                                fill
                                                priority={index === 0}
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />

                                            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:left-6 md:right-6 bg-slate-950/75 backdrop-blur-md border border-white/10 p-4 sm:p-5 rounded-xl shadow-2xl">
                                                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-500 mb-1 drop-shadow-sm">
                                                    {slide.category}
                                                </p>
                                                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight mb-1 drop-shadow-md">
                                                    {slide.title}
                                                </h3>
                                                <p className="hidden sm:block text-slate-200 text-sm line-clamp-2 drop-shadow-sm mt-1">
                                                    {slide.description}
                                                </p>
                                            </div>

                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

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