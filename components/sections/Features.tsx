const points = [
    ["Apsekošana", "Pārbaudām konstrukciju, segumu, noteksistēmas un problemātiskās vietas."],
    ["Tāme", "Sadalām izmaksas saprotami: darbs, materiāli, piegāde un papilddarbi."],
    ["Materiāli", "Iesakām risinājumu pēc ēkas stāvokļa, nevis pēc vienas universālas shēmas."],
    ["Izpilde", "Darbus plānojam pa posmiem, lai ēka procesa laikā būtu pasargāta."],
    ["Garantija", "Pēc nodošanas paliek skaidra atbildība par paveikto darbu un izmantotajiem materiāliem."],
];

export default function Features() {
    return (
        <section className="bg-foreground py-20 lg:py-28 relative overflow-hidden border-y border-border">
            <div className="absolute inset-0 bg-roof-pattern opacity-10 pointer-events-none mix-blend-overlay" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
                    <div className="flex flex-col justify-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary" /> Darba process
                        </p>
                        <h2 className="mt-3 max-w-md text-3xl font-black leading-tight tracking-tight text-background sm:text-5xl">
                            Mazāk solījumu.<br />
                            Vairāk skaidrības.
                        </h2>
                        <p className="mt-6 max-w-md text-base leading-relaxed text-background/80">
                            Jumta darbos kļūdas parasti rodas no sasteigtas izvērtēšanas. Tāpēc pirms cenas nosaukšanas mēs rūpīgi sakārtojam visu informāciju par objektu.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {points.map(([title, description], index) => (
                            <div key={title} className="group relative rounded-2xl border border-primary/20 bg-background/5 p-6 backdrop-blur-sm shadow-xl transition-all hover:shadow-[0_0_20px_rgba(227,6,19,0.15)] hover:border-primary/50 hover:bg-primary/5 flex gap-6 items-start">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-lg font-black text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground shadow-[0_0_10px_rgba(227,6,19,0.2)]">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-background mb-2 group-hover:text-primary transition-colors">{title}</h3>
                                    <p className="text-sm leading-relaxed text-background/70 group-hover:text-background/90 transition-colors">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
