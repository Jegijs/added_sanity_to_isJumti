"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqData = [
    {
        question: "Cik ilgā laikā varat sagatavot tāmi?",
        answer: "Mēs saprotam, ka laiks ir nauda. Pēc objekta apsekošanas vai precīza projekta saņemšanas e-pastā, detalizētu izmaksu tāmi nosūtām 24 stundu laikā.",
    },
    {
        question: "Vai jūs strādājat arī ziemas periodā?",
        answer: "Jā. Daudzus jumta darbus (piemēram, konstrukciju izbūvi, skārda jumtu montāžu vai bēniņu siltināšanu) var veikt arī ziemā. Sazinieties ar mums, lai izvērtētu jūsu konkrēto situāciju.",
    },
    {
        question: "Kādus materiālus jūs izmantojat?",
        answer: "Mēs neekonomējam uz kvalitāti. Strādājam ar sertificētiem materiāliem no vadošajiem ražotājiem (Ruukki, Balex Metal, BMI Monier, Eternit), kam ir oficiāla rūpnīcas garantija.",
    },
    {
        question: "Vai ir iespējams veikt jumta nomaiņu, kamēr mājā dzīvo cilvēki?",
        answer: "Protams. 90% gadījumu jumta nomaiņa netraucē mājas iedzīvotājiem. Mēs plānojam darbus pa posmiem, lai jumts nekad nepaliktu pilnībā atvērts un māja būtu pasargāta no nokrišņiem.",
    },
    {
        question: "Kā veidojas jumta nomaiņas cena?",
        answer: "Cenu ietekmē jumta platība, izvēlētais segums (metāls, dakstiņš, bitumens), jumta ģeometrijas sarežģītība un esošo konstrukciju stāvoklis. Lai uzzinātu precīzas izmaksas, piesakiet bezmaksas apsekošanu.",
    },
];

export default function FAQ() {
    return (
        <section className="py-16 lg:py-24 bg-slate-50" id="faq">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">

                {/* Virsraksts */}
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl uppercase">
                        Biežāk uzdotie jautājumi
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="text-slate-600 text-lg">
                        Atbildes uz jautājumiem, ko mūsu klienti uzdod visbiežāk.
                    </p>
                </div>

                {/* Akordeons - pielāgots dizains */}
                <Accordion type="single" collapsible className="space-y-4">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-white border border-slate-200 rounded-lg px-6 shadow-sm data-[state=open]:border-primary/50 data-[state=open]:shadow-md transition-all duration-200"
                        >
                            <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-primary hover:no-underline py-6 text-left">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-slate-600 leading-relaxed pb-6">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Papildus CTA - ja neatrod atbildi */}
                <div className="mt-12 text-center bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-lg font-semibold text-slate-900 mb-4">
                        Neatradāt atbildi uz savu jautājumu?
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild variant="outline" className="border-slate-300 hover:border-primary hover:text-primary">
                            <Link href="mailto:info@isjumti.lv">Rakstīt E-pastu</Link>
                        </Button>
                        <Button asChild className="bg-primary hover:bg-red-700 font-bold shadow-lg shadow-red-100">
                            <Link href="tel:+37120555606">Zvanīt Mums</Link>
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}