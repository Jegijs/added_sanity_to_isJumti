import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVIGATION_LINKS, CONTACT_INFO } from "@/lib/constants";
import MobileNav from "@/components/layout/MobileNav";
import TopNav from "@/components/layout/TopNav";
import Container from "@/components/layout/Container";
import Logo from "../shared/Logo";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-hero-brand text-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.4)]">

            <TopNav />

            {/* Subtle shingle texture on the navbar */}
            <div className="absolute inset-0 bg-shingle-pattern opacity-15 pointer-events-none" />

            <Container>
                <div className="relative flex h-20 items-center justify-between">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-lg bg-white/10 blur-md group-hover:bg-white/25 transition-all" />
                            <div className="relative">
                                <Logo width={52} height={52} />
                            </div>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-xl font-black tracking-tight text-white">
                                IS JUMTI
                            </span>
                            <span className="text-[10px] text-red-100 font-bold tracking-[0.2em] uppercase mt-1">
                                Jumtu Eksperti
                            </span>
                        </div>
                    </Link>

                    {/* NAV */}
                    <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold">
                        {NAVIGATION_LINKS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative px-4 py-2 text-white/85 hover:text-white transition-colors group"
                            >
                                {item.name}
                                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        ))}
                    </nav>

                    {/* RIGHT */}
                    <div className="flex items-center gap-3">
                        <Button
                            asChild
                            className="hidden sm:flex gap-2 font-bold h-11 px-5 bg-white hover:bg-red-50 text-red-700 hover:text-red-800 shadow-lg shadow-black/20 transition-all"
                        >
                            <Link href={`tel:${CONTACT_INFO.phone}`}>
                                <Phone className="h-4 w-4 fill-current" />
                                <span>{CONTACT_INFO.phoneDisplay}</span>
                            </Link>
                        </Button>

                        <div className="lg:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </Container>

            {/* Bottom dark accent line — separates header from hero */}
            <div className="h-[2px] w-full bg-black/20" />
        </header>
    );
}
