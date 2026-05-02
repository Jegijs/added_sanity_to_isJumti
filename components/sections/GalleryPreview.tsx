import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Privātmājas jumta renovācija",
        meta: "Metāla segums · Pierīga",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg",
    },
    {
        title: "Daudzdzīvokļu nama jumta darbi",
        meta: "Kausējamais jumts · Rīga",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/450512551_1004194185048314_1571388777996338156_n-1-1200x800.jpg",
    },
    {
        title: "Jumta konstrukcijas izbūve",
        meta: "Koka konstrukcija · Jelgava",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/310536736_521400699994334_5860770553268751557_n-1-1067x800.jpg",
    },
];

export default function GalleryPreview() {
    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-brand">Galerija</p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                            Paveiktie darbi
                        </h2>
                    </div>
                    <Link href="/galerija" className="inline-flex items-center text-sm font-bold text-brand hover:text-red-700">
                        Skatīt galeriju
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((project) => (
                        <Link key={project.title} href="/galerija" className="group">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-100">
                                <Image
                                    src={project.src}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                                />
                            </div>
                            <h3 className="mt-3 text-base font-black text-slate-950">{project.title}</h3>
                            <p className="mt-1 text-sm text-slate-500">{project.meta}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
