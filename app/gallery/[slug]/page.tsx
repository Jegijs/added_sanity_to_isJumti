import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { client } from "@/sanity/lib/client";
import ProjectCard from "@/components/sections/ProjectCard";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function RoofGalleryInnerPage({ params }: PageProps) {
    const { slug } = await params;

    // GROQ QUERY: Explicitly requests projects and their gallery array
    const fetchQuery = `*[_type == "roofType" && slug.current == $slug][0]{
        _id,
        title,
        projects[]{
            _key,
            title,
            "slug": slug.current,
            gallery[]{
                asset,
                alt
            }
        }
    }`;

    // Force Next.js to fetch fresh data on every request during testing
    const category = await client.fetch(
        fetchQuery, 
        { slug }, 
        { cache: "no-store" }
    );

    if (!category) {
        notFound();
    }

    const projects = category.projects || [];
    const totalPhotos = projects.reduce((sum: number, p: any) => sum + (p.gallery?.length || 0), 0);

    return (
        <div className="bg-background min-h-screen py-12 lg:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-10">
                    <Link 
                        href="/gallery" 
                        className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-4"
                    >
                        <ArrowLeft className="h-4 w-4" /> Atpakaļ uz galeriju
                    </Link>
                    <h1 className="text-3xl font-black tracking-tight md:text-5xl text-foreground">
                        {category.title}
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Kopā atrasti {projects.length} objekti ({totalPhotos} bildes).
                    </p>
                </div>

                {/* Grid of Project Cards */}
                {projects.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project: any, index: number) => {
    return (
        <ProjectCard
            key={project._key || index}
            title={project.title}
            images={project.gallery}
        />
    );
})}
                    </div>
                ) : (
                    <div className="text-center py-20 border border-dashed rounded-2xl">
                        <p className="text-muted-foreground">Šajā kategorijā vēl nav pievienotu objektu.</p>
                    </div>
                )}
            </div>
        </div>
    );
}