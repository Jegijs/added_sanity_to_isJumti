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
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden hover:bg-red-50 hover:text-primary">
                    <Menu className="h-8 w-8" />
                    <span className="sr-only">Atvērt izvēlni</span>
                </Button>
            </SheetTrigger>

            {/* PIEVIENOTS: bg-white !important stils */}
            <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-white text-slate-900 p-0 border-l border-red-100 [&>button]:hidden flex flex-col"
            >
                <SheetTitle className="sr-only">Mobilā izvēlne</SheetTitle>
                <SheetDescription className="sr-only">Navigācija</SheetDescription>

                {/* 1. Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white">
                    <span className="text-xl font-black tracking-tighter text-primary">
                        IS JUMTI
                    </span>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="-mr-2 text-slate-400 hover:text-primary hover:bg-red-50">
                            <X className="h-6 w-6" />
                        </Button>
                    </SheetClose>
                </div>

                {/* 2. Links */}
                <div className="flex-1 overflow-y-auto py-6 px-6 bg-white">
                    <nav className="flex flex-col space-y-2">
                        {NAVIGATION_LINKS.map((item) => (
                            <SheetClose asChild key={item.href}>
                                <Link
                                    href={item.href}
                                    className="block text-lg font-semibold text-slate-700 hover:text-primary hover:bg-red-50 rounded-md px-4 py-3 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            </SheetClose>
                        ))}
                    </nav>
                </div>

                {/* 3. Footer (Red Background Area) */}
                <div className="mt-auto p-6 bg-slate-900 text-white">
                    <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">
                        Sazinies
                    </p>

                    <Button asChild className="w-full mb-6 bg-primary hover:bg-red-700 text-white border-0 font-bold h-12">
                        <Link href={`tel:${CONTACT_INFO.phone}`}>
                            <Phone className="mr-2 h-5 w-5" />
                            {CONTACT_INFO.phoneDisplay}
                        </Link>
                    </Button>

                    <div className="flex items-center justify-between px-4">
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                            <Facebook className="h-6 w-6" />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                            <Instagram className="h-6 w-6" />
                        </Link>
                        <Link href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 hover:text-white transition-colors">
                            <Mail className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}