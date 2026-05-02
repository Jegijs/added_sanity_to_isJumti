import Link from "next/link";
import { Menu, Phone, X, MapPin, Clock, ShieldCheck } from "lucide-react";
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
                    className="lg:hidden h-14 w-14 text-white hover:bg-white/15 hover:text-white rounded-xl"
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
                    <div className="flex items-center justify-between p-5 border-b border-white/15 shrink-0">
                        <span className="text-xl font-black tracking-tight text-white">
                            IS JUMTI
                        </span>
                        <SheetClose asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-14 w-14 bg-white/10 hover:bg-white/20 text-white hover:text-white rounded-full transition-colors"
                            >
                                <X className="size-8 stroke-[2.5]" />
                                <span className="sr-only">Aizvērt</span>
                            </Button>
                        </SheetClose>
                    </div>

                    {/* Links */}
                    <div className="flex-1 overflow-y-auto py-5 px-4">
                        <nav className="flex flex-col gap-1">
                            {NAVIGATION_LINKS.map((item) => (
                                <SheetClose asChild key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="block text-lg font-bold text-white hover:bg-white/10 rounded-lg px-4 py-3 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </SheetClose>
                            ))}
                        </nav>

                        {/* Trust mini-card */}
                        <div className="mt-6 space-y-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm p-4 text-sm">
                            <div className="flex items-start gap-2.5">
                                <MapPin className="h-4 w-4 text-red-200 mt-0.5 shrink-0" />
                                <span className="text-white/90">
                                    <span className="font-bold text-white">{CONTACT_INFO.base}</span> · {CONTACT_INFO.serviceArea}
                                </span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <Clock className="h-4 w-4 text-red-200 mt-0.5 shrink-0" />
                                <span className="text-white/90">P–S 8:00 – 19:00</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <ShieldCheck className="h-4 w-4 text-red-200 mt-0.5 shrink-0" />
                                <span className="text-white/90">Sertificēti meistari · 30 g. garantija</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto p-5 border-t border-white/15 bg-black/20 backdrop-blur-sm shrink-0 space-y-4">
                        <Button asChild className="w-full bg-white hover:bg-red-50 text-red-700 hover:text-red-800 border-0 font-bold h-12 text-base shadow-lg shadow-black/20">
                            <Link href={`tel:${CONTACT_INFO.phone}`}>
                                <Phone className="mr-2 h-5 w-5 fill-current" />
                                {CONTACT_INFO.phoneDisplay}
                            </Link>
                        </Button>

                        <div>
                            <p className="text-[10px] font-bold text-white/60 mb-2 uppercase tracking-widest">
                                Seko mums
                            </p>
                            <SocialLinks variant="ghost-dark" size="md" />
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
