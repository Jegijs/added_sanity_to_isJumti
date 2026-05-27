import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import ContactSection from "@/components/sections/ContactSection";
import { client } from "@/sanity/lib/client"; 
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source);
}

export const metadata: Metadata = {
    title: "Paveiktie jumtu darbi un projekti Latvijā",
    description:
        "Paveiktie IS JUMTI darbi: jumtu montāža un renovācija privātmājām, daudzdzīvokļu namiem un komercobjektiem visā Latvijā. Metāla, dakstiņu un bitumena segumi.",
};

// Modeled explicitly to match your exact roofType schema structure
interface SanityRoofGalleryCard {
    _id: string;
    title: string;
    slug: { current: string };
    images?: Array<{
        asset: { _ref: string };
        alt?: string; // Captures your custom alt field
    }>;
}

export default async function GalleryPage() {
    // Fetches the exact properties from your schema definition
    const fetchQuery = `*[_type == "roofType"][0...6]{
        _id,
        title,
        slug,
        images[]{
            asset,
            alt
        }
    }`;
    
    const liveGalleries: SanityRoofGalleryCard[] = await client.fetch(fetchQuery);

    return (
        <div className="bg-background">
            {/* Header Section */}
            <section className="bg-foreground text-background py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-roof-pattern opacity-[0.05] pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="max-w-4xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-primary" /> Galerija
                        </p>
                        <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl text-background">
                            Paveiktie jumtu darbi ar redzamu darba kontekstu.
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/80 sm:text-lg">
                            Rādām privātmāju, daudzdzīvokļu namu, komercobjektu un siltināšanas darbus ar īsu
                            kontekstu par paveikto, atrašanās vietu un izmantoto risinājumu.
                        </p>
                    </div>
                </div>
            </section>

            {/* Grid Section displaying your 6 categories */}
            <section className="bg-background py-14 lg:py-18 relative">
                <div className="absolute inset-0 bg-muted/20 skew-y-1 transform -z-10" />
                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {liveGalleries.map((gallery) => {
                            // Extract the very first uploaded image from the list to serve as the cover card
                            const coverImage = gallery.images && gallery.images.length > 0 ? gallery.images[0] : null;

                            return (
                                <Link 
                                    href={`/gallery/${gallery.slug.current}`} 
                                    key={gallery._id}
                                    className="group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-md transition-all hover:border-primary/30 block"
                                >
                                    <article>
                                        <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                                            {coverImage ? (
                                                <Image
                                                    src={urlFor(coverImage).width(600).height(450).url()}
                                                    // Pulls your customized alt string, falling back to the title if left empty
                                                    alt={coverImage.alt || gallery.title}
                                                    fill
                                                    sizes="(max-width: 768px) 50vw, 450px"
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center h-full text-muted-foreground/50 text-sm">Nav pievienotu attēlu</div>
                                            )}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest">
                                                <span className="text-primary">Skatīt Galeriju</span>
                                            </div>
                                            <h2 className="mt-2 text-xl font-bold tracking-tight text-card-foreground group-hover:text-primary transition-colors">
                                                {gallery.title}
                                            </h2>
                                            <p className="mt-2 text-sm text-muted-foreground flex items-center gap-1">
                                                Kopā attēli: {gallery.images ? gallery.images.length : 0} <ArrowRight className="h-3 w-3 inline" />
                                            </p>
                                        </div>
                                    </article>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA and Contact Components */}
            <section className="bg-primary py-16 text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-roof-pattern opacity-10 pointer-events-none" />
                <div className="container mx-auto flex flex-col gap-6 px-4 md:px-6 lg:flex-row lg:items-center lg:justify-between relative">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Vēlaties līdzīgu risinājumu?</h2>
                        <p className="mt-3 text-base text-primary-foreground/90 max-w-xl">Atsūtiet foto un īsu aprakstu, mēs palīdzēsim saprast piemērotāko darbu secību.</p>
                    </div>
                    <Link href="/izmaksas" className="inline-flex h-14 items-center justify-center rounded-full bg-background px-8 text-base font-black text-primary hover:bg-background/90 transition-colors shadow-xl">
                        Noskaidrot izmaksas
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}