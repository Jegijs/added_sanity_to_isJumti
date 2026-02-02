"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Factory, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const mainCategories = [
    {
        icon: Home,
        title: "Privātmājas",
        description: "Jauna jumta montāža un renovācija ģimenes mājām. Dakstiņi, metāls, šīferis.",
        link: "/pakalpojumi",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg",
    },
    {
        icon: Building2,
        title: "Daudzdzīvokļu Nami",
        description: "Pilna cikla renovācija biedrībām. Kausējamie jumti, siltināšana un bēniņu izbūve.",
        link: "/pakalpojumi",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg",
    },
    {
        icon: Factory,
        title: "Komercobjekti",
        description: "Industriālie risinājumi lielām platībām. Angāri, noliktavas un ražošanas ēkas.",
        link: "/pakalpojumi",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg",
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-20 bg-white lg:py-28 border-b border-slate-100">
            <div className="container mx-auto px-4 md:px-6">

                {/* Virsraksts */}
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl uppercase">
                        Mūsu Specializācija
                    </h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
                    <p className="mx-auto max-w-2xl text-slate-600 text-xl font-medium">
                        Izvēlieties sev atbilstošo kategoriju.
                    </p>
                </div>

                {/* Kartītes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {mainCategories.map((service, index) => (
                        <Link href={service.link} key={index} className="block group h-full">

                            <div className="relative h-[450px] w-full overflow-hidden rounded-2xl shadow-lg">

                                {/* 3. OPTIMIZĀCIJA: 'sizes' atribūts.
                        Tas ietaupa ~30KB+ uz katru bildi mobilajā telefonā. 
                    */}
                                <Image
                                    src={service.src}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/70" />

                                {/* Saturs */}
                                <div className="absolute inset-0 flex flex-col justify-between p-8">
                                    <div className="flex justify-start">
                                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/20">
                                            <service.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-200 text-base leading-relaxed mb-6 opacity-90">
                                            {service.description}
                                        </p>

                                        <div className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary group-hover:text-white transition-colors duration-300">
                                            Skatīt piedāvājumu
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Poga */}
                <div className="mt-16 text-center">
                    <Button asChild size="lg" className="bg-white text-slate-900 border-2 border-slate-200 hover:border-primary hover:text-primary hover:bg-white px-8 py-6 text-lg font-bold shadow-sm transition-all">
                        <Link href="/pakalpojumi">
                            Visi Pakalpojumi
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}