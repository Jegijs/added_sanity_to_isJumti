import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import metalajumti from "./previewImages/metalajumti.jpg";
import kokaKonstrukcia from "./previewImages/kokaKonstrukcia.jpg";
import daudzdz from "./previewImages/daudzdz.jpg";
import saimn from "./previewImages/saimn.jpg";

const projects = [
    {
        title: "Privātmājas jumta renovācija",
        meta: "Metāla segums · Pierīga",
        src: metalajumti,
    },
    {
        title: "Daudzdzīvokļu nama jumta darbi",
        meta: "Kausējamais jumts · Rīga",
        src: daudzdz,
    },
    {
        title: "Saimniecības ēkas jumta darbi",
        meta: "Saimniecības ēku jumti · Vidzeme",
        src: saimn,
    },
];

export default function GalleryPreview() {
    return (
        <section className="bg-gradient-to-b from-background to-primary/5 py-20 lg:py-28 border-y border-border relative">
            <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary" /> Galerija
                        </p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-5xl">
                            Paveiktie darbi
                        </h2>
                    </div>
                    <Link href="/galerija" className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                        Skatīt pilnu galeriju
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-3 mt-4">
                    {projects.map((project) => (
                        <Link key={project.title} href="/galerija" className="group flex flex-col gap-4">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted border border-border/50 shadow-sm transition-all group-hover:shadow-[0_0_15px_rgba(227,6,19,0.2)] group-hover:border-primary/40">
                                <Image
                                    src={project.src}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 450px"
                                    quality={65}
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 mix-blend-overlay" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="mt-1.5 text-sm text-muted-foreground">{project.meta}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
