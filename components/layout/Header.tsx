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
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">

            <TopNav />

            <Container>
                <div className="relative flex h-20 items-center justify-between">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-lg bg-primary/10 blur-md group-hover:bg-primary/20 transition-all" />
                            <div className="relative text-primary">
                                <Logo width={52} height={52} />
                            </div>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-xl font-black tracking-tight text-foreground">
                                IS JUMTI
                            </span>
                            <span className="text-[10px] text-muted-foreground font-bold tracking-[0.2em] uppercase mt-1">
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
                                className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors group"
                            >
                                {item.name}
                                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <Button
                            asChild
                            className="hidden sm:flex gap-2 font-bold h-11 px-5 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-all"
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
        </header>
    );
}
