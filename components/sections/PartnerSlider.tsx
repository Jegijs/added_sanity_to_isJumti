import Image, { type StaticImageData } from "next/image";

import vides from "./previewImages/vides.avif";
import eroof from "./previewImages/eroof.avif";
import ramirent from "./previewImages/ramirent.avif";
import timbero from "./previewImages/timbero.avif";
import essve from "./previewImages/essve.avif";
import stats from "./previewImages/stats.avif";
import RORO from "./previewImages/RORO.jpg";



const partners = [
    {
        name: "Vides",
        src: vides,
    },
    {
        name: "Essve",
        src: essve,
    },
    {
        name: "Timbero",
        src: timbero,
    },
    {
        name: "Stats Rent",
        src: stats,
    },
    {
        name: "Eroof",
        src: eroof,
    },
    {
        name: "RORO",
        src: RORO,
    },
    {
        name: "Ramirent",
        src: ramirent,
    },
];

function PartnerLogo({ name, src }: { name: string; src: StaticImageData }) {
    return (
        <div className="relative h-16 w-44 shrink-0 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-20 sm:w-56">
            <Image src={src} alt={`${name} logo`} fill sizes="(max-width: 640px) 176px, 224px" className="object-contain" />
        </div>
    );
}

export default function PartnerSlider() {
    const loop = [...partners, ...partners];

    return (
        <section className="border-b border-border/50 bg-background py-8 sm:py-10">
            <div className="marquee-pause relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
                <div className="flex w-max items-center gap-12 sm:gap-16 animate-marquee px-10">
                    {loop.map((partner, index) => (
                        <PartnerLogo key={`${partner.name}-${index}`} {...partner} />
                    ))}
                </div>
            </div>
        </section>
    );
}
