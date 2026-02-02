"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock4 } from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const heroImages = [
    {
        src: "https://images.unsplash.com/photo-1632759988104-29d4c90651bc?q=80&w=2940&auto=format&fit=crop",
        alt: "Jauns metāla jumts privātmājai",
    },
    {
        src: "https://images.unsplash.com/photo-1518463892881-d587bf2c296a?q=80&w=2894&auto=format&fit=crop",
        alt: "Dakstiņu jumta renovācija",
    },
    {
        src: "https://images.unsplash.com/photo-1628120616143-693354474776?q=80&w=2940&auto=format&fit=crop",
        alt: "Jumiķi darba procesā",
    },
];

export default function Hero() {
    return (
        <section className="relative bg-white overflow-hidden">
            {/* Dekoratīvais fona elements */}
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gray-50 hidden lg:block" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col lg:flex-row lg:items-stretch min-h-[600px]">

                    {/* KREISĀ PUSE - TEKSTS */}
                    <div className="w-full lg:w-1/2 py-16 lg:py-24 flex flex-col justify-center relative z-10 bg-white lg:pr-12">

                        <span className="inline-block mb-4 text-sm font-bold uppercase tracking-widest text-red-600">
                            Sertificēti Jumiķi Rīgā & Pierīgā
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            Jūsu mājas jumts — mūsu <span className="text-red-600 underline decoration-red-600/30 decoration-4 underline-offset-4">mūža atbildība</span>.
                        </h1>

                        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                            Nekādu "haltūru". Mēs nodrošinām pilna cikla jumtu izbūvi un renovāciju ar oficiālu līgumu, precīzu tāmi un garantiju, kas reāli strādā.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/cenas"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-red-600 rounded-md hover:bg-red-700 transition-all active:scale-[0.98]"
                            >
                                Aprēķināt Izmaksas
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>

                            <Link
                                href="/projekti"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-white border-2 border-gray-200 rounded-md hover:border-red-600 hover:text-red-600 transition-all"
                            >
                                Mūsu Objekti
                            </Link>
                        </div>

                        {/* Trust Bar */}
                        <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 p-2 bg-red-50 rounded-lg">
                                    <ShieldCheck className="w-6 h-6 text-red-600" />
                                </div>
                                <span className="text-sm font-bold text-gray-900">30 gadu garantija</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 p-2 bg-red-50 rounded-lg">
                                    <Clock4 className="w-6 h-6 text-red-600" />
                                </div>
                                <span className="text-sm font-bold text-gray-900">Tāme 24h laikā</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 p-2 bg-red-50 rounded-lg">
                                    <CheckCircle2 className="w-6 h-6 text-red-600" />
                                </div>
                                <span className="text-sm font-bold text-gray-900">Sertificēti materiāli</span>
                            </div>
                        </div>
                    </div>

                    {/* LABĀ PUSE - CAROUSEL (MANUAL) */}
                    <div className="w-full lg:w-1/2 relative lg:ml-[-1px] min-h-[400px] lg:min-h-full group">
                        <div className="h-full w-full relative z-10 lg:rounded-bl-[80px] overflow-hidden shadow-2xl">

                            <Carousel className="w-full h-full">
                                <CarouselContent className="h-full ml-0">
                                    {heroImages.map((image, index) => (
                                        <CarouselItem key={index} className="pl-0 h-full">
                                            <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                {/* Bultiņas - parādās, kad uzbrauc ar peli */}
                                <CarouselPrevious className="left-4 bg-white/80 hover:bg-white text-gray-900 border-none opacity-0 group-hover:opacity-100 transition-opacity" />
                                <CarouselNext className="right-4 bg-white/80 hover:bg-white text-gray-900 border-none opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Carousel>

                            {/* Sarkans akcenta bloks zem karuseļa */}
                            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-red-600 hidden lg:block -z-10 rounded-bl-[80px]"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}