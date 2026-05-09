import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { NAVIGATION_LINKS, CONTACT_INFO } from "@/lib/constants";
import SocialLinks from "@/components/shared/SocialLinks";

export default function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden h-14 w-14 rounded-xl text-foreground hover:bg-primary/10 hover:text-primary"
                >
                    <Menu className="size-9 stroke-[2.5]" />
                    <span className="sr-only">Atvērt izvēlni</span>
                </Button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="w-[88vw] max-w-[400px] bg-hero-brand text-white p-0 [&>button]:hidden flex flex-col h-full border-l-0"
            >
                <SheetTitle className="sr-only">Mobilā izvēlne</SheetTitle>
                <SheetDescription className="sr-only">Navigācija</SheetDescription>

                {/* Shingle texture overlay */}
                <div className="absolute inset-0 bg-shingle-pattern opacity-20 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">

                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/15 shrink-0">
                        <span className="text-lg font-black tracking-tight text-white">
                            IS JUMTI
                        </span>
                        <SheetClose asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-12 w-12 bg-white/10 hover:bg-white/20 text-white hover:text-white rounded-full transition-colors"
                            >
                                <X className="size-7 stroke-[2.5]" />
                                <span className="sr-only">Aizvērt</span>
                            </Button>
                        </SheetClose>
                    </div>

                    {/* Links */}
                    <div className="flex-1 min-h-0 overflow-y-auto py-3 px-3">
                        <nav className="flex flex-col gap-0.5">
                            {NAVIGATION_LINKS.map((item) => (
                                <SheetClose asChild key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="block text-base font-bold text-white hover:bg-white/10 rounded-lg px-4 py-2.5 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </SheetClose>
                            ))}
                        </nav>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto px-4 py-3 border-t border-white/15 bg-black/20 backdrop-blur-sm shrink-0 space-y-3">
                        <Button asChild className="w-full bg-white hover:bg-red-50 text-red-700 hover:text-red-800 border-0 font-bold h-11 text-base shadow-lg shadow-black/20">
                            <Link href={`tel:${CONTACT_INFO.phone}`}>
                                <Phone className="mr-2 h-5 w-5 fill-current" />
                                {CONTACT_INFO.phoneDisplay}
                            </Link>
                        </Button>

                        <div>
                            <p className="text-[10px] font-bold text-white/60 mb-1.5 uppercase tracking-widest">
                                Seko mums
                            </p>
                            <SocialLinks variant="drawer" size="lg" />
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
