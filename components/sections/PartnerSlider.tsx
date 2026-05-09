import Image from "next/image";

const partners = [
    {
        name: "Ruukki",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/Screenshot-2024-07-29-at-07-38-39-Jumtu-buvnieciba-un-renovacija-IG-Jumti-SIA.png",
    },
    {
        name: "BMI",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/Screenshot-2024-07-29-at-07-39-41-Jumtu-buvnieciba-un-renovacija-IG-Jumti-SIA.png",
    },
    {
        name: "Velux",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/07/Screenshot-2024-07-29-at-07-39-56-Jumtu-buvnieciba-un-renovacija-IG-Jumti-SIA.png",
    },
    {
        name: "Stats Rent",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/08/Screenshot-2024-08-03-at-16-15-43-STATS-Rent-BUVTEHNIKAS-NOMA.png",
    },
    {
        name: "Eroof",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/08/eroof_jumtu_segumi_logo.jpg",
    },
    {
        name: "Ramirent",
        src: "https://www.isjumti.lv/wp-content/uploads/2024/08/Screenshot-2024-08-03-at-16-03-53-Kontakti-Ramirent-Latvija.png",
    },
];

function PartnerLogo({ name, src }: { name: string; src: string }) {
    return (
        <div className="relative h-10 w-32 shrink-0 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:w-40">
            <Image src={src} alt={`${name} logo`} fill sizes="160px" className="object-contain" />
        </div>
    );
}

export default function PartnerSlider() {
    const loop = [...partners, ...partners];

    return (
        <section className="border-b border-border/50 bg-background py-6">
            <div className="marquee-pause relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
                <div className="flex w-max items-center gap-10 animate-marquee px-10">
                    {loop.map((partner, index) => (
                        <PartnerLogo key={`${partner.name}-${index}`} {...partner} />
                    ))}
                </div>
            </div>
        </section>
    );
}
