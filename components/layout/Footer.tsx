import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO, NAVIGATION_LINKS } from "@/lib/constants";
import Container from "@/components/layout/Container";
import SocialLinks from "@/components/shared/SocialLinks";
import Logo from "../shared/Logo";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const serviceLinks = [
        { name: "Jumtu ieklāšana", href: "/pakalpojumi" },
        { name: "Jumtu renovācija", href: "/pakalpojumi" },
        { name: "Siltināšana (Ekovate)", href: "/pakalpojumi" },
        { name: "Noteku sistēmas", href: "/pakalpojumi" },
    ];

    return (
        <footer className="border-t border-border bg-background text-muted-foreground">
            <Container>
                <div className="py-12 md:py-16">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                        {/* Brand */}
                        <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
                            <Link href="/" className="flex items-center gap-3 group w-fit">
                                <div className="text-primary">
                                    <Logo width={48} height={48} />
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
                                        IS JUMTI
                                    </span>
                                    <span className="text-[10px] text-muted-foreground font-bold tracking-[0.2em] uppercase mt-1">
                                        Jumtu Eksperti
                                    </span>
                                </div>
                            </Link>

                            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                                Profesionāli jumtu darbi ar 15+ gadu pieredzi. Bāze {CONTACT_INFO.base}, strādājam visā Latvijā.
                            </p>

                            <div>
                                <p className="text-[10px] font-bold text-muted-foreground/80 mb-2 uppercase tracking-widest">
                                    Seko mums
                                </p>
                                <SocialLinks variant="ghost-dark" size="md" />
                            </div>
                        </div>

                        {/* Sections */}
                        <div>
                            <h3 className="text-base font-bold text-foreground mb-5 uppercase tracking-wider">Sadaļas</h3>
                            <ul className="space-y-3 text-sm">
                                {NAVIGATION_LINKS.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="hover:text-foreground transition-colors duration-200"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services + areas */}
                        <div>
                            <h3 className="text-base font-bold text-foreground mb-5 uppercase tracking-wider">Pakalpojumi</h3>
                            <ul className="space-y-3 text-sm">
                                {serviceLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="hover:text-foreground transition-colors duration-200"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-base font-bold text-foreground mt-8 mb-3 uppercase tracking-wider">Apkalpojam</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {CONTACT_INFO.serviceCities.join(" · ")}
                            </p>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-base font-bold text-foreground mb-5 uppercase tracking-wider">Kontakti</h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-start gap-3">
                                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                    <span>
                                        <span className="text-foreground font-semibold">{CONTACT_INFO.base}</span>
                                        <span className="block text-xs text-muted-foreground">{CONTACT_INFO.serviceArea}</span>
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="h-4 w-4 text-primary shrink-0" />
                                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-foreground hover:text-primary transition-colors font-bold">
                                        {CONTACT_INFO.phoneDisplay}
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="h-4 w-4 text-primary shrink-0" />
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-foreground transition-colors break-all">
                                        {CONTACT_INFO.email}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom: tiny legal */}
                    <div className="mt-12 pt-6 border-t border-border flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center text-[11px] text-muted-foreground/60">
                        <div className="space-y-0.5">
                            <p>&copy; {currentYear} {CONTACT_INFO.company.legalName}. Visas tiesības aizsargātas.</p>
                            <p>Reģ. Nr. {CONTACT_INFO.company.regNo}</p>
                        </div>
                        <div className="flex gap-5">
                            <Link href="/privatuma-politika" className="hover:text-foreground transition-colors">
                                Privātuma politika
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
