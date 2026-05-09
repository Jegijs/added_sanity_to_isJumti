import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import ContactSection from "@/components/sections/ContactSection";
import { blogPosts } from "@/lib/site-content";

export const metadata: Metadata = {
    title: "Padomi | IS JUMTI",
    description: "Praktiski padomi par jumtu uzturēšanu, tāmēšanu, siltināšanu un izmaksām Latvijas mājām.",
};

const dateFormatter = new Intl.DateTimeFormat("lv-LV", {
    year: "numeric",
    month: "long",
    day: "numeric",
});

export default function BlogPage() {
    return (
        <div className="bg-background">
            <section className="bg-foreground text-background py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-roof-pattern opacity-[0.05] pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative">
                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-primary" /> Padomi
                    </p>
                    <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl text-background">
                        Noderīgi raksti pirms jumta remonta, siltināšanas vai tāmes pieprasījuma.
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/80 sm:text-lg">
                        Praktiski ceļveži par noteku uzturēšanu, ekovati, tāmēšanu un jumiķa pakalpojumu izmaksām,
                        lai pirms darbu sākšanas lēmumi būtu skaidrāki.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-background">
                        {["Apkope", "Siltināšana", "Tāmēšana", "Izmaksas"].map((item) => (
                            <span key={item} className="rounded-full border border-background/20 px-5 py-2.5 bg-background/5 hover:bg-background/10 transition-colors">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background py-16 lg:py-24 relative">
                <div className="absolute inset-0 bg-muted/20 skew-y-1 transform -z-10" />
                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="grid gap-8 md:grid-cols-2">
                        {blogPosts.map((post) => (
                            <article key={post.slug} className="group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-md transition-all hover:border-primary/30">
                                <Link href={`/padomi/${post.slug}`} className="block">
                                    <div className="relative aspect-[16/9] overflow-hidden bg-muted text-transparent">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 600px"
                                            quality={65}
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                    </div>
                                    <div className="p-8">
                                        <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest">
                                            <span className="text-primary">{post.category}</span>
                                            <span className="text-muted-foreground/50">/</span>
                                            <time className="text-muted-foreground" dateTime={post.date}>
                                                {dateFormatter.format(new Date(post.date))}
                                            </time>
                                        </div>
                                        <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-card-foreground group-hover:text-primary transition-colors">{post.title}</h2>
                                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                                        <span className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-primary/10 px-6 text-sm font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                            Lasīt rakstu
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </span>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}
