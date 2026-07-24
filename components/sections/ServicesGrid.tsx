import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Jumtu montāža",
        description: "Jauna jumta izbūve un seguma maiņa privātmājām. Metāls, dakstiņi, šīferis un bitumena risinājumi.",
        src: "/images/jumtuMontaza.png",
        alt: "Jumtu montāža",
    },
    {
        title: "Renovācija un remonts",
        description: "Esošo konstrukciju izvērtēšana, bojājumu novēršana, noteksistēmas un pilna jumta atjaunošana.",
        src: "/images/renovacija.png",
        alt: "Jumtu renovācija un remonts",
    },
    {
        title: "Siltināšana",
        description: "Ekovate, akmensvate un minerālvate bēniņiem, slīpām virsmām un jumta konstrukcijām.",
        src: "/images/siltinasana.png",
        alt: "Jumtu siltināšana",
    },
];

export default function ServicesGrid() {
    return (
        <section className="bg-primary/5 py-20 lg:py-28 relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary" /> Pakalpojumi
                        </p>
                        <h2 className="mt-3 max-w-md text-3xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
                            Jumta darbi no apsekošanas līdz nodošanai.
                        </h2>
                        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                            Koncentrējamies uz galveno: pareizs risinājums konkrētai ēkai, skaidra tāme un augstākās kvalitātes izpildījums.
                        </p>
                        <Link href="/pakalpojumi" className="mt-8 inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                            Skatīt visus pakalpojumus
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-6">
                        {services.map((service) => (
                            <Link
                                key={service.title}
                                href="/pakalpojumi"
                                className="group grid gap-6 rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-[0_0_20px_rgba(227,6,19,0.1)] hover:border-primary/40 sm:grid-cols-[140px_1fr] sm:items-center relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Container resized and fitted with object-contain */}
                                <div className="relative z-10 aspect-square w-28 sm:w-36 shrink-0 overflow-hidden rounded-xl bg-primary/5 p-2 flex items-center justify-center">
                                    <Image
                                        src={service.src}
                                        alt={service.alt}
                                        fill
                                        sizes="144px"
                                        className="object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 h-full">
                                    <div className="flex flex-col justify-center h-full">
                                        <h3 className="text-2xl font-bold tracking-tight text-card-foreground group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:self-center">
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}