import Link from "next/link";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
// Piezīme: TikTok ikona nav standartā Lucide pakā, 
// bet mēs varam pagaidām izmantot tekstu vai citu ikonu.
import { Button } from "@/components/ui/button";
import { NAVIGATION_LINKS, CONTACT_INFO } from "@/lib/constants";
import MobileNav from "@/components/layout/MobileNav";
import Container from "@/components/layout/Container";
import Logo from "../shared/Logo";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">

            {/* Augšējā sarkanā līnija (Līdzīgi kā vecajā lapā) */}
            <div className="w-full h-1 bg-primary" />

            <Container>
                <div className="flex h-24 items-center justify-between">

                    {/* 1. LOGO */}
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 group">
                            <Logo />
                            <div className="flex flex-col leading-none">
                                <span className="text-lg font-black tracking-tighter text-slate-900 group-hover:text-primary transition-colors">
                                    IS JUMTI
                                </span>
                                <span className="text-[10px] text-slate-500 font-medium tracking-wide">
                                    JUMTU EKSPERTI
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* 2. VIDUS - Navigācija */}
                    <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
                        {NAVIGATION_LINKS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="transition-colors hover:text-primary text-slate-600"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* 3. LABĀ PUSE - Kontakti un Ikonas */}
                    <div className="flex items-center gap-4">

                        {/* Sociālās ikonas (Slēptas uz maziem ekrāniem) */}
                        <div className="hidden xl:flex items-center gap-2 border-r border-slate-200 pr-4 mr-2">
                            <Link href="#" className="p-2 text-slate-400 hover:text-[#1877F2] transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2 text-slate-400 hover:text-[#E4405F] transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href={`mailto:${CONTACT_INFO.email}`} className="p-2 text-slate-400 hover:text-primary transition-colors">
                                <Mail className="h-5 w-5" />
                            </Link>
                        </div>

                        {/* Zvanīt poga (Sarkana, jo Primary krāsa tagad ir sarkana) */}
                        <Button asChild variant="default" className="hidden sm:flex gap-2 font-bold shadow-md hover:shadow-lg transition-all">
                            <Link href={`tel:${CONTACT_INFO.phone}`}>
                                <Phone className="h-4 w-4 fill-current" />
                                <span>{CONTACT_INFO.phoneDisplay}</span>
                            </Link>
                        </Button>

                        {/* Mobilā izvēlne */}
                        <div className="lg:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}