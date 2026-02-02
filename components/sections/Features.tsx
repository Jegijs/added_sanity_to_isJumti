"use client";

import { ShieldCheck, Clock, Award, Hammer, HardHat, FileCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
    {
        icon: ShieldCheck,
        title: "30 Gadu Garantija",
        description: "Mēs neizmantojam lētus analogus. Strādājam tikai ar sertificētiem materiāliem (Ruukki, Monier, BMI), kam ražotājs dod oficiālu garantiju.",
    },
    {
        icon: Clock,
        title: "Tāme 24h Laikā",
        description: "Operatīva reakcija. Pēc objekta apsekošanas vai projekta saņemšanas, detalizētu izmaksu tāmi nosūtīsim vienas dienas laikā.",
    },
    {
        icon: HardHat,
        title: "Sertificēti Meistari",
        description: "Jūsu jumtu neliks 'gadījuma strādnieki'. Mūsu komandā ir jumiķi ar 15+ gadu pieredzi un atbilstošiem sertifikātiem.",
    },
    {
        icon: FileCheck,
        title: "Bez Slēptām Izmaksām",
        description: "Cena, kas norādīta tāmē, ir gala cena. Mēs strādājam godīgi – bez pēkšņiem sadārdzinājumiem darbu gaitā.",
    },
    {
        icon: Hammer,
        title: "Pilns Cikls",
        description: "No vecā jumta demontāžas un koka konstrukciju labošanas līdz pat noteksistēmām un sniega barjerām. Viens darbuzņēmējs visam.",
    },
    {
        icon: Award,
        title: "Kvalitāte 'Bez Haltūrām'",
        description: "Mūsu reputācija ir svarīgāka par ātru peļņu. Katrs objekts tiek nodots tā, lai saimniekam nebūtu jāuztraucas nākamās desmitgades.",
    },
];

export default function Features() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Virsraksts un Ievads */}
                <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mb-12 border-b border-slate-100 pb-8">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl uppercase">
                            Kāpēc uzticēt jumtu <span className="text-primary">IS JUMTI</span>?
                        </h2>
                        <div className="w-20 h-1 bg-primary rounded-full" />
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Jumts ir mājas svarīgākā konstrukcija. Kļūdas šeit maksā dārgi.
                            Mēs piedāvājam mierīgu prātu un industriālu precizitāti.
                        </p>
                    </div>

                    {/* Dekorācija labajā pusē (tikai lieliem ekrāniem) */}
                    <div className="hidden md:block text-right">
                        <span className="text-6xl font-black text-slate-100 select-none">
                            15+
                        </span>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                            Gadu pieredze
                        </p>
                    </div>
                </div>

                {/* Iezīmju Režģis */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col group">

                            {/* Ikona ar smalku animāciju */}
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <feature.icon className="h-6 w-6" />
                            </div>

                            {/* Saturs */}
                            <h3 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-base text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}