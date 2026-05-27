"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryGridProps {
    images: Array<{
        _key: string;
        url: string;
        alt: string;
    }>;
}

export default function GalleryGrid({ images }: GalleryGridProps) {
    const [index, setIndex] = useState<number | null>(null);

    // Close lightbox when hitting the "Escape" key
    useEffect(() => {
        if (index === null) return;
        
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIndex(null);
            if (e.key === "ArrowRight") setIndex((index + 1) % images.length);
            if (e.key === "ArrowLeft") setIndex((index - 1 + images.length) % images.length);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [index, images.length]);

    const openLightbox = (i: number) => setIndex(i);
    const closeLightbox = () => setIndex(null);

    const showNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (index !== null) {
            setIndex((index + 1) % images.length);
        }
    };

    const showPrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (index !== null) {
            setIndex((index - 1 + images.length) % images.length);
        }
    };

    return (
        <>
            {/* 1. Image Thumbnail Grid Grid Layout */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {images.map((image, i) => (
                    <div
                        key={image._key}
                        onClick={() => openLightbox(i)}
                        className="relative aspect-[4/3] bg-muted rounded-xl overflow-hidden group border border-border/40 shadow-sm hover:shadow-md transition-all cursor-pointer"
                    >
                        <Image
                            src={image.url}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 300px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Hover Overlay Visual Hint */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                            <span className="bg-background/90 text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-sm scale-95 group-hover:scale-100 transition-transform duration-300">
                                Palielināt
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* 2. Interactive Lightbox Backdrop Modal */}
            {index !== null && (
                <div 
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md select-none animate-in fade-in duration-200"
                    onClick={closeLightbox}
                >
                    {/* Top Action Header: Close button */}
                    <button 
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50 shadow-md"
                        aria-label="Aizvērt"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    {/* Navigation: Left Arrow */}
                    {images.length > 1 && (
                        <button 
                            onClick={showPrev}
                            className="absolute left-4 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors z-50"
                            aria-label="Iepriekšējais attēls"
                        >
                            <ChevronLeft className="h-8 w-8" />
                        </button>
                    )}

                    {/* Central Display Viewport */}
                    <div className="relative w-full max-w-5xl h-[80vh] flex flex-col justify-center items-center">
                        <div className="relative w-full h-full max-h-[75vh]">
                            <Image
                                src={images[index].url}
                                alt={images[index].alt}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        
                        {/* Caption Context Overlay */}
                        {images[index].alt && (
                            <p className="text-white/90 text-sm mt-4 text-center bg-black/40 border border-white/10 px-4 py-2 rounded-xl max-w-md backdrop-blur-sm truncate">
                                {images[index].alt}
                            </p>
                        )}
                    </div>

                    {/* Navigation: Right Arrow */}
                    {images.length > 1 && (
                        <button 
                            onClick={showNext}
                            className="absolute right-4 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors z-50"
                            aria-label="Nākamais attēls"
                        >
                            <ChevronRight className="h-8 w-8" />
                        </button>
                    )}
                </div>
            )}
        </>
    );
}