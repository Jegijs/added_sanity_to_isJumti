import type { Metadata } from "next";

import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Privātuma politika",
    description: "IS JUMTI privātuma politika un personas datu apstrādes informācija.",
};

export default function PrivacyPage() {
    return (
        <div className="bg-background">
            <section className="bg-foreground text-background py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-roof-pattern opacity-[0.05] pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative">
                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-primary" /> Privātuma politika
                    </p>
                    <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl text-background">
                        Kā apstrādājam pieteikumos norādīto informāciju.
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/80 sm:text-lg">
                        Šī politika skaidro, kā {CONTACT_INFO.company.legalName} izmanto personas datus, lai sagatavotu piedāvājumu,
                        sazinātos par objektu un izpildītu līgumsaistības.
                    </p>
                </div>
            </section>

            <section className="bg-background py-16 lg:py-24 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-3xl space-y-8">
                        {[
                            {
                                title: "Pārzinis",
                                text: `${CONTACT_INFO.company.legalName}, reģ. Nr. ${CONTACT_INFO.company.regNo}. Saziņai: ${CONTACT_INFO.email}, ${CONTACT_INFO.phoneDisplay}.`,
                            },
                            {
                                title: "Kādus datus apstrādājam",
                                text: "Vārdu, tālruņa numuru, e-pastu, objekta atrašanās vietu, ziņas saturu, pievienotos foto un informāciju, kas nepieciešama tāmes vai pakalpojuma sagatavošanai.",
                            },
                            {
                                title: "Apstrādes nolūks",
                                text: "Datus izmantojam, lai atbildētu uz pieprasījumu, sagatavotu piedāvājumu, vienotos par apsekošanu, noslēgtu un izpildītu līgumu, kā arī nodrošinātu klientu apkalpošanu.",
                            },
                            {
                                title: "Glabāšanas termiņš",
                                text: "Pieteikumu informāciju glabājam tik ilgi, cik nepieciešams saziņai un piedāvājuma sagatavošanai. Līgumu un grāmatvedības dokumentus glabājam normatīvajos aktos noteiktajā termiņā.",
                            },
                            {
                                title: "Datu nodošana",
                                text: "Datus varam nodot pakalpojumu sniedzējiem, kas palīdz nodrošināt e-pastu, hostingu, grāmatvedību vai darbu izpildi, tikai nepieciešamajā apjomā.",
                            },
                            {
                                title: "Jūsu tiesības",
                                text: "Jums ir tiesības pieprasīt piekļuvi saviem datiem, labošanu, dzēšanu, apstrādes ierobežošanu vai iebilst pret apstrādi, ja to paredz piemērojamie normatīvie akti.",
                            },
                            {
                                title: "Sīkdatnes",
                                text: "Vietne var izmantot tehniski nepieciešamas sīkdatnes un analītikas rīkus, lai nodrošinātu darbību un uzlabotu lietošanas pieredzi.",
                            },
                        ].map((item) => (
                            <section key={item.title} className="border-b border-border/50 pb-8 last:border-b-0">
                                <h2 className="text-2xl font-bold tracking-tight text-foreground">{item.title}</h2>
                                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.text}</p>
                            </section>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
