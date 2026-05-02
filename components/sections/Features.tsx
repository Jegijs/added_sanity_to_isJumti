const points = [
    ["Apsekošana", "Pārbaudām konstrukciju, segumu, noteksistēmas un problemātiskās vietas."],
    ["Tāme", "Sadalām izmaksas saprotami: darbs, materiāli, piegāde un papilddarbi."],
    ["Materiāli", "Iesakām risinājumu pēc ēkas stāvokļa, nevis pēc vienas universālas shēmas."],
    ["Izpilde", "Darbus plānojam pa posmiem, lai ēka procesa laikā būtu pasargāta."],
    ["Garantija", "Pēc nodošanas paliek skaidra atbildība par paveikto darbu un izmantotajiem materiāliem."],
];

export default function Features() {
    return (
        <section className="bg-slate-50 py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-brand">Darba process</p>
                        <h2 className="mt-3 max-w-md text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                            Mazāk solījumu. Vairāk skaidrības.
                        </h2>
                        <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
                            Jumta darbos kļūdas parasti rodas no sasteigtas izvērtēšanas. Tāpēc pirms cenas nosaukšanas sakārtojam informāciju par objektu.
                        </p>
                    </div>

                    <div className="border-y border-slate-200 bg-white">
                        {points.map(([title, description], index) => (
                            <div key={title} className="grid gap-3 border-b border-slate-200 px-5 py-7 last:border-b-0 sm:grid-cols-[72px_1fr] sm:gap-8 sm:px-8 lg:px-10">
                                <div className="pt-1 text-sm font-black text-brand">{String(index + 1).padStart(2, "0")}</div>
                                <div>
                                    <h3 className="text-lg font-black text-slate-950">{title}</h3>
                                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
