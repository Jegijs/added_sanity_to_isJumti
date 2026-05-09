import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Jumtu montāža",
        description: "Jauna jumta izbūve un seguma maiņa privātmājām. Metāls, dakstiņi, šīferis un bitumena risinājumi.",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg",
    },
    {
        title: "Renovācija un remonts",
        description: "Esošo konstrukciju izvērtēšana, bojājumu novēršana, noteksistēmas un pilna jumta atjaunošana.",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/311005664_521400449994359_8064247804212030749_n-1-600x800.jpg",
    },
    {
        title: "Siltināšana",
        description: "Ekovate, akmensvate un minerālvate bēniņiem, slīpām virsmām un jumta konstrukcijām.",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/ekovate1-600x800.jpg",
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
                                className="group grid gap-6 rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-[0_0_20px_rgba(227,6,19,0.1)] hover:border-primary/40 sm:grid-cols-[200px_1fr] sm:items-center relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted z-10">
                                    <Image
                                        src={service.src}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 640px) 50vw, 350px"
                                        quality={65}
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 h-full">
                                    <div className="flex flex-col justify-center h-full">
                                        <h3 className="text-2xl font-bold tracking-tight text-card-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">{service.description}</p>
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
