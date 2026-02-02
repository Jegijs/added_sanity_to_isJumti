"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        id: 1,
        title: "Privātmājas Jumta Renovācija",
        category: "Metāla Dakstiņš",
        location: "Mārupe, Pierīga",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg",
        size: "col-span-1 md:col-span-2 md:row-span-2 h-[350px] md:h-full",
    },
    {
        id: 2,
        title: "Daudzdzīvokļu Nama Siltināšana",
        category: "Kausējamais Jumts",
        location: "Rīga, Centrs",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg",
        size: "col-span-1 md:col-span-1 md:row-span-1 h-[300px] md:h-full",
    },
    {
        id: 3,
        title: "Industriāls Angārs",
        category: "Valcprofils",
        location: "Jelgava",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg",
        size: "col-span-1 md:col-span-1 md:row-span-1 h-[300px] md:h-full",
    },
];

export default function GalleryPreview() {
    return (
        <section className="py-16 lg:py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl font-black tracking-tight sm:text-4xl uppercase">
                            Paveikto darbu <span className="text-primary">Galerija</span>
                        </h2>
                        <div className="w-20 h-1 bg-primary rounded-full" />
                        <p className="text-lg text-slate-400 leading-relaxed">
                            Labāk vienreiz redzēt, nekā simts reizes dzirdēt.
                            Aplūkojiet mūsu pēdējos projektus un darba kvalitāti.
                        </p>
                    </div>

                    <Button asChild className="hidden md:flex bg-primary hover:bg-red-700 text-white font-bold px-8">
                        <Link href="/galerija">
                            Visi Projekti <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[600px]">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`relative group overflow-hidden rounded-xl border border-slate-800 bg-slate-800 w-full ${project.size}`}
                        >
                            {/* Attēls - Spilgts, bez overlay */}
                            <Image
                                src={project.src}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* INFO BLOKS - Tikai tekstam */}
                            {/* bg-slate-950/90 -> Tumšs fons, gandrīz necaurspīdīgs
                  backdrop-blur-sm -> Neliels "stikla" efekts fonam
                  border-t -> Smalka līnija atdalīšanai
              */}
                            <div className="absolute bottom-0 left-0 w-full bg-slate-950/90 backdrop-blur-sm border-t border-slate-800 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                                            {project.category}
                                        </p>
                                        <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                                            {project.title}
                                        </h3>
                                    </div>
                                    {/* Bultiņa stūrī */}
                                    <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary transition-colors duration-300">
                                        <ArrowRight className="w-5 h-5 text-primary group-hover:text-white" />
                                    </div>
                                </div>

                                {/* Lokācija - parādās tikai pie hover, lai nepārslogotu skatu */}
                                <div className="flex items-center text-slate-400 text-xs font-medium mt-2 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
                                    <MapPin className="w-3 h-3 mr-1 text-slate-500" />
                                    {project.location}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Mobilā poga */}
                <div className="mt-8 md:hidden text-center">
                    <Button asChild size="lg" className="w-full bg-primary hover:bg-red-700">
                        <Link href="/galerija">
                            Skatīt Vairāk <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    );
}