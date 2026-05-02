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
        <section className="bg-white py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-brand">Pakalpojumi</p>
                        <h2 className="mt-3 max-w-md text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                            Jumta darbi no apsekošanas līdz nodošanai.
                        </h2>
                        <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
                            Koncentrējamies uz galveno: pareizs risinājums konkrētai ēkai, skaidra tāme un kvalitatīvi izpildīts darbs.
                        </p>
                        <Link href="/pakalpojumi" className="mt-7 inline-flex items-center text-sm font-bold text-brand hover:text-red-700">
                            Visi pakalpojumi
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="divide-y divide-slate-200 border-y border-slate-200">
                        {services.map((service) => (
                            <Link
                                key={service.title}
                                href="/pakalpojumi"
                                className="group grid gap-5 py-5 sm:grid-cols-[168px_1fr] sm:items-center"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-100">
                                    <Image
                                        src={service.src}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 168px"
                                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                                    />
                                </div>
                                <div className="flex items-start justify-between gap-5">
                                    <div>
                                        <h3 className="text-xl font-black tracking-tight text-slate-950">{service.title}</h3>
                                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">{service.description}</p>
                                    </div>
                                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-brand" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
