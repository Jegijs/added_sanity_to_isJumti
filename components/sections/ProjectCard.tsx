"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, X, Maximize2 } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const builder = createImageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source).auto("format");
}

interface ProjectCardProps {
    title: string;
    images?: Array<{
        asset: { _ref: string };
        alt?: string;
    }>;
}

export default function ProjectCard({ title, images = [] }: ProjectCardProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const hasImages = images && images.length > 0;
    const currentImage = hasImages ? images[currentIndex] : null;

    const nextImage = (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Keyboard support for Lightbox (ESC to close, Left/Right arrows to navigate)
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden"; // Prevent background scrolling

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, images.length]);

    return (
        <>
            {/* CARD COMPONENT */}
            <div 
                onClick={() => hasImages && setIsOpen(true)}
                className="group border border-border/50 rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-all h-full flex flex-col cursor-pointer"
            >
                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                    {currentImage?.asset ? (
                        <Image
                            src={urlFor(currentImage).width(600).height(450).url()}
                            alt={currentImage.alt || title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-all duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                            Nav pievienotu attēlu
                        </div>
                    )}

                    {/* Expand icon overlay prompt */}
                    <div className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10">
                        <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Carousel Navigation */}
                    {images.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                                aria-label="Iepriekšējais attēls"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                type="button"
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                                aria-label="Nākamais attēls"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>

                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm z-10">
                                {images.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={`h-1.5 rounded-full transition-all ${
                                            idx === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
                                        }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-primary shrink-0" />
                            {title}
                        </h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 font-medium">
                        {images.length} {images.length === 1 ? "attēls" : "attēli no leņķiem"}
                    </p>
                </div>
            </div>

            {/* FULL-SCREEN LIGHTBOX MODAL */}
            {isOpen && currentImage && (
                <div 
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 md:p-8 animate-in fade-in duration-200"
                    onClick={() => setIsOpen(false)}
                >
                    {/* Header Controls */}
                    <div className="flex items-center justify-between text-white z-20">
                        <div>
                            <h2 className="text-lg md:text-xl font-bold">{title}</h2>
                            <p className="text-xs md:text-sm text-white/70">
                                Attēls {currentIndex + 1} no {images.length}
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                            aria-label="Aizvērt"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Main Image Container */}
                    <div 
                        className="relative flex-1 my-4 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={urlFor(currentImage).width(1920).height(1080).url()}
                            alt={currentImage.alt || title}
                            fill
                            className="object-contain"
                            priority
                        />

                        {/* Full-screen Next / Prev Controls */}
                        {images.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    onClick={prevImage}
                                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 md:p-4 rounded-full transition-colors z-20"
                                    aria-label="Iepriekšējais"
                                >
                                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                                </button>
                                <button
                                    type="button"
                                    onClick={nextImage}
                                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 md:p-4 rounded-full transition-colors z-20"
                                    aria-label="Nākamais"
                                >
                                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Bottom Thumbnail Strip */}
                    {images.length > 1 && (
                        <div 
                            className="flex justify-center gap-2 overflow-x-auto py-2 z-20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`relative w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                                        idx === currentIndex ? "border-primary scale-105" : "border-transparent opacity-50 hover:opacity-100"
                                    }`}
                                >
                                    <Image
                                        src={urlFor(img).width(150).height(150).url()}
                                        alt={img.alt || title}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}