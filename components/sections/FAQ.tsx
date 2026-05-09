import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/lib/site-content";
import { faqPageSchema, jsonLd } from "@/lib/schema";

export default function FAQ() {
    return (
        <section className="bg-background py-20 lg:py-28" id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={jsonLd(faqPageSchema(faqData))}
            />
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.35fr_0.65fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary" /> Jautājumi
                        </p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-5xl">
                            Pirms pieteikuma
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((item, index) => (
                            <AccordionItem key={item.question} value={`item-${index}`} className="border-b border-border/60 px-2">
                                <AccordionTrigger className="py-6 text-left text-lg font-bold text-foreground hover:text-primary hover:no-underline transition-colors">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
