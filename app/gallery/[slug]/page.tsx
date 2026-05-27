import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { client } from "@/sanity/lib/client";
import GalleryGrid from "../../../components/GalleryGrid";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function RoofGalleryInnerPage({ params }: PageProps) {
    const { slug } = await params;

    // Fetches the straight asset URLs directly from Sanity for the client grid
    const fetchQuery = `*[_type == "roofType" && slug.current == $slug][0]{
        title,
        images[]{
            _key,
            "url": asset->url,
            alt
        }
    }`;

    const gallery = await client.fetch(fetchQuery, { slug });

    if (!gallery) {
        notFound();
    }

    const formattedImages = (gallery.images || []).map((img: any) => ({
        _key: img._key,
        url: img.url || "",
        alt: img.alt || gallery.title
    }));

    return (
        <div className="bg-background min-h-screen py-12 lg:py-16">
            <div className="container mx-auto px-4 md:px-6">
                
                {/* Back Button & Header */}
                <div className="mb-10">
                    <Link 
                        href="/galerija" 
                        className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-4"
                    >
                        <ArrowLeft className="h-4 w-4" /> Atpakaļ uz galeriju
                    </Link>
                    <h1 className="text-3xl font-black tracking-tight md:text-5xl text-foreground">
                        {gallery.title}
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Kopā atrastas {formattedImages.length} bildes no objektiem.
                    </p>
                </div>

                {/* Render Expandable Grid */}
                {formattedImages.length > 0 ? (
                    <GalleryGrid images={formattedImages} />
                ) : (
                    <div className="text-center py-20 border border-dashed border-border rounded-2xl bg-muted/10">
                        <p className="text-muted-foreground">Šajā galerijā vēl nav pievienotu attēlu.</p>
                    </div>
                )}

            </div>
        </div>
    );
}