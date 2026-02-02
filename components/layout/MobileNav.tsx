import Link from "next/link";
import { Menu, Phone, X, Facebook, Instagram, Mail } from "lucide-react";
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

export default function MobileNav() {
    return (
        <Sheet>
            {/* TRIGGER BUTTON (HAMBURGER) */}
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden h-14 w-14 hover:bg-red-50 hover:text-primary rounded-xl"
                >
                    <Menu className="h-10 w-10 stroke-[2.5]" />
                    <span className="sr-only">Atvērt izvēlni</span>
                </Button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="w-[320px] sm:w-[400px] bg-white text-slate-900 p-0 border-l-4 border-primary [&>button]:hidden flex flex-col h-full"
            >
                <SheetTitle className="sr-only">Mobilā izvēlne</SheetTitle>
                <SheetDescription className="sr-only">Navigācija</SheetDescription>

                {/* 1. Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white shrink-0">
                    <span className="text-2xl font-black tracking-tighter text-primary">
                        IS JUMTI
                    </span>

                    {/* CLOSE BUTTON (X) */}
                    <SheetClose asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-12 w-12 bg-slate-100 hover:bg-red-100 hover:text-primary rounded-full transition-colors"
                        >
                            <X className="h-8 w-8 stroke-[2.5]" />
                            <span className="sr-only">Aizvērt</span>
                        </Button>
                    </SheetClose>
                </div>

                {/* 2. Links */}
                {/* IZMAIŅA: Noņemts 'overflow-y-auto', atstāts tikai 'flex-1', lai aizņemtu brīvo vietu */}
                <div className="flex-1 py-8 px-6 bg-white flex flex-col justify-start">
                    <nav className="flex flex-col space-y-4">
                        {NAVIGATION_LINKS.map((item) => (
                            <SheetClose asChild key={item.href}>
                                <Link
                                    href={item.href}
                                    className="block text-xl font-bold text-slate-800 hover:text-primary hover:bg-red-50 rounded-lg px-4 py-4 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            </SheetClose>
                        ))}
                    </nav>
                </div>

                {/* 3. Footer */}
                <div className="mt-auto p-6 bg-slate-900 text-white shrink-0">
                    <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">
                        Sazinies
                    </p>

                    <Button asChild className="w-full mb-6 bg-primary hover:bg-red-700 text-white border-0 font-bold h-14 text-lg shadow-lg">
                        <Link href={`tel:${CONTACT_INFO.phone}`}>
                            <Phone className="mr-3 h-6 w-6 fill-current" />
                            {CONTACT_INFO.phoneDisplay}
                        </Link>
                    </Button>

                    <div className="flex items-center justify-between px-6 pb-4">
                        <Link href="#" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
                            <Facebook className="h-8 w-8" />
                        </Link>
                        <Link href="#" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
                            <Instagram className="h-8 w-8" />
                        </Link>
                        <Link href={`mailto:${CONTACT_INFO.email}`} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
                            <Mail className="h-8 w-8" />
                        </Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}