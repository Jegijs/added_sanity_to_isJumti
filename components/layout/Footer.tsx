import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { CONTACT_INFO, NAVIGATION_LINKS } from "@/lib/constants";
import Container from "@/components/layout/Container";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // SEO Service Links
    const serviceLinks = [
        { name: "Jumtu ieklāšana", href: "/pakalpojumi" },
        { name: "Jumtu renovācija", href: "/pakalpojumi" },
        { name: "Siltināšana (Ekovate)", href: "/pakalpojumi" },
        { name: "Noteku sistēmas", href: "/pakalpojumi" },
    ];

    return (
        // Added a top red border (border-t-4 border-primary) to match the brand style
        <footer className="bg-slate-900 text-slate-300 border-t-4 border-primary">
            <Container>
                <div className="py-12 md:py-16">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

                        {/* 1. Brand & Logo */}
                        <div className="flex flex-col gap-6">
                            <Link href="/" className="flex items-center gap-2 group">
                                {/* Same House Icon as Header, but White/Red adapted for dark background */}
                                <div className="bg-primary text-white p-1.5 rounded flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M3 21h18" /><path d="M5 21V7l8-5 8 5v14" /></svg>
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-xl font-black tracking-tighter text-white group-hover:text-primary transition-colors">
                                        IS JUMTI
                                    </span>
                                    <span className="text-[10px] text-slate-500 font-bold tracking-wide uppercase">
                                        Jumtu Eksperti
                                    </span>
                                </div>
                            </Link>

                            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                                Profesionāli jumtu darbi ar vairāk nekā 15 gadu pieredzi.
                                Mēs garantējam kvalitāti, kas kalpo paaudzēm.
                            </p>

                            <div className="flex gap-4">
                                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                                    <Facebook className="h-5 w-5" />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                                    <Instagram className="h-5 w-5" />
                                    <span className="sr-only">Instagram</span>
                                </Link>
                            </div>
                        </div>

                        {/* 2. Navigation */}
                        <div>
                            <h3 className="text-lg font-bold text-white mb-6">Sadaļas</h3>
                            <ul className="space-y-3 text-sm font-medium">
                                {NAVIGATION_LINKS.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="hover:text-primary transition-colors duration-200"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 3. Services */}
                        <div>
                            <h3 className="text-lg font-bold text-white mb-6">Pakalpojumi</h3>
                            <ul className="space-y-3 text-sm font-medium">
                                {serviceLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="hover:text-primary transition-colors duration-200"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 4. Contact Info */}
                        <div>
                            <h3 className="text-lg font-bold text-white mb-6">Kontakti</h3>
                            <ul className="space-y-5 text-sm">
                                <li className="flex items-start gap-3 group">
                                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                                    <span className="group-hover:text-white transition-colors">{CONTACT_INFO.address}</span>
                                </li>
                                <li className="flex items-center gap-3 group">
                                    <Phone className="h-5 w-5 text-primary shrink-0 group-hover:text-white transition-colors" />
                                    <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors font-semibold">
                                        {CONTACT_INFO.phoneDisplay}
                                    </a>
                                </li>
                                <li className="flex items-center gap-3 group">
                                    <Mail className="h-5 w-5 text-primary shrink-0 group-hover:text-white transition-colors" />
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                                        {CONTACT_INFO.email}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                        <p>
                            &copy; {currentYear} IS JUMTI. Visas tiesības aizsargātas.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privatuma-politika" className="hover:text-white transition-colors">
                                Privātuma politika
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}