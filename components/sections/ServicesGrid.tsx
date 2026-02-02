"use client";

import Link from "next/link";
import { ArrowRight, Building2, Factory, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Kategoriju dati
const mainCategories = [
    {
        icon: Home,
        title: "Privātmājas",
        description: "Jauna jumta montāža un renovācija ģimenes mājām. Dakstiņi, metāls, šīferis.",
        link: "/pakalpojumi",
        // Ikonas krāsa paliek, lai atšķirtu kategorijas, bet fons būs neitrāls
        iconColor: "text-red-600",
        iconBg: "bg-red-100",
    },
    {
        icon: Building2,
        title: "Daudzdzīvokļu Nami",
        description: "Pilna cikla renovācija biedrībām. Kausējamie jumti, siltināšana un bēniņu izbūve.",
        link: "/pakalpojumi",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-100",
    },
    {
        icon: Factory,
        title: "Komercobjekti",
        description: "Industriālie risinājumi lielām platībām. Angāri, noliktavas un ražošanas ēkas.",
        link: "/pakalpojumi",
        iconColor: "text-amber-600",
        iconBg: "bg-amber-100",
    },
];

export default function ServicesGrid() {
    return (
        // Fons: Slate-50 (ļoti gaiši pelēks), lai atdalītu no baltā Header un Footer
        <section className="py-16 bg-slate-50 lg:py-24 border-b border-slate-200">
            <div className="container mx-auto px-4 md:px-6">

                {/* Virsrakstu sadaļa - Identiska stila kā pārējā lapā */}
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl uppercase">
                        Mūsu Specializācija
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" /> {/* Sarkanā svītra - zīmola elements */}
                    <p className="mx-auto max-w-[700px] text-slate-600 text-lg">
                        Mēs sadalām savu darbu trīs galvenajos sektoros, lai nodrošinātu visaugstāko kvalitāti katrā no tiem.
                    </p>
                </div>

                {/* Kartītes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {mainCategories.map((service, index) => (
                        <Card
                            key={index}
                            className="relative group bg-white border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                        >
                            <CardHeader>
                                {/* Ikonas aplis - saglabājam krāsu kodus TIKAI šeit */}
                                <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                                </div>
                                <CardTitle className="text-xl font-bold text-slate-900">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <CardDescription className="text-base leading-relaxed text-slate-600">
                                    {service.description}
                                </CardDescription>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    variant="ghost"
                                    className="p-0 hover:bg-transparent font-semibold text-slate-900 group-hover:text-primary transition-colors duration-300"
                                    asChild
                                >
                                    <Link href={service.link} className="flex items-center">
                                        Uzzināt vairāk
                                        {/* Bultiņa iekrāsojas sarkanā tikai pie hover */}
                                        <ArrowRight className="ml-2 w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                                    </Link>
                                </Button>
                            </CardFooter>

                            {/* Sarkanā līnija kartītes apakšā pie hover (atsauce uz header/footer) */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Card>
                    ))}
                </div>

                {/* Poga uz pilno sarakstu */}
                <div className="mt-12 text-center">
                    <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-white hover:text-primary hover:border-primary shadow-sm">
                        <Link href="/pakalpojumi">
                            Skatīt visus pakalpojumus
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}