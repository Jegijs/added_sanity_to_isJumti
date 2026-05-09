import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import ContactSection from "@/components/sections/ContactSection";
import { blogPosts } from "@/lib/site-content";

type BlogPostPageProps = {
    params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat("lv-LV", {
    year: "numeric",
    month: "long",
    day: "numeric",
});

type BlogPost = (typeof blogPosts)[number];

function BlogVisualGuide({ visualGuide }: { visualGuide: BlogPost["visualGuide"] }) {
    return (
        <section className="mb-12 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
            <div className="border-b border-border/60 bg-muted/30 p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-widest text-primary">{visualGuide.eyebrow}</p>
                <h2 className="mt-2 text-2xl font-black leading-tight tracking-tight text-foreground sm:text-3xl">
                    {visualGuide.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {visualGuide.description}
                </p>
            </div>

            <div className="grid gap-0 sm:grid-cols-2">
                {visualGuide.steps.map((step, index) => (
                    <div key={step.label} className="relative border-b border-border/60 p-6 last:border-b-0 sm:border-r sm:last:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
                        <div className="flex items-start gap-4">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground">
                                {index + 1}
                            </span>
                            <div>
                                <h3 className="text-base font-black tracking-tight text-foreground">{step.label}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((item) => item.slug === slug);

    if (!post) {
        return {};
    }

    return {
        title: `${post.title} | IS JUMTI`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((item) => item.slug === slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

    return (
        <div className="bg-background min-h-screen">
            <article>
                <section className="bg-foreground text-background relative overflow-hidden">
                    <div className="absolute inset-0 bg-roof-pattern opacity-[0.05] pointer-events-none" />
                    <div className="container mx-auto px-4 py-10 md:px-6 lg:py-16 relative">
                        <Link href="/padomi" className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Visi padomi
                        </Link>
                        <div className="mt-8 grid gap-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
                            <div>
                                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest">
                                    <span className="text-primary">{post.category}</span>
                                    <span className="text-muted-foreground/50">/</span>
                                    <time className="text-muted-foreground/80" dateTime={post.date}>
                                        {dateFormatter.format(new Date(post.date))}
                                    </time>
                                </div>
                                <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-4xl lg:text-5xl text-background">
                                    {post.title}
                                </h1>
                            </div>
                            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted text-transparent shadow-2xl border border-border/20">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 45vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-background py-16 lg:py-24">
                    <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,0.68fr)_minmax(280px,0.32fr)]">
                        <div className="max-w-3xl">
                            <div className="mb-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 shadow-inner">
                                <h2 className="text-xl font-bold tracking-tight text-primary">Īsumā</h2>
                                <ul className="mt-6 space-y-4">
                                    {post.takeaways.map((item) => (
                                        <li key={item} className="flex gap-4 text-base font-medium leading-relaxed text-foreground">
                                            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <BlogVisualGuide visualGuide={post.visualGuide} />
                            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight">
                                {post.sections.map((section) => (
                                    <section key={section.heading} className="border-b border-border/50 py-10 first:pt-0 last:border-0">
                                        <h2 className="text-3xl font-black tracking-tight text-foreground">{section.heading}</h2>
                                        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{section.body}</p>
                                    </section>
                                ))}
                            </div>
                        </div>

                        <aside className="h-fit rounded-2xl border border-border/50 bg-card p-8 shadow-sm">
                            <h2 className="text-xl font-bold text-card-foreground border-b border-border/50 pb-4 mb-6">Saistītie padomi</h2>
                            <div className="space-y-6">
                                {relatedPosts.map((item) => (
                                    <Link key={item.slug} href={`/padomi/${item.slug}`} className="group block">
                                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{item.category}</p>
                                        <h3 className="text-base font-bold leading-snug text-card-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                                    </Link>
                                ))}
                            </div>
                            <Link href="/izmaksas" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary/10 px-6 py-3 text-sm font-black text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                                Pieprasīt tāmi
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </aside>
                    </div>
                </section>
            </article>

            <ContactSection />
        </div>
    );
}
