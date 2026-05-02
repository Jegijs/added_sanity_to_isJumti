"use client";

import { useEffect, useState } from "react";
import { Loader2, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { CONTACT_INFO } from "@/lib/constants";

const STORAGE_KEY = "isjumti-lead-modal-dismissed-at";
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

export default function LeadModal() {
    const [open, setOpen] = useState(false);
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const dismissedAt = Number(localStorage.getItem(STORAGE_KEY) || 0);
        const recentlyDismissed = Date.now() - dismissedAt < SEVEN_DAYS;

        if (recentlyDismissed) return;

        let armed = false;
        const armTimer = window.setTimeout(() => {
            armed = true;
        }, 12000);

        function handleScroll() {
            if (!armed) return;

            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (pageHeight <= 0) return;

            const progress = window.scrollY / pageHeight;
            if (progress >= 0.55) {
                setOpen(true);
                window.removeEventListener("scroll", handleScroll);
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.clearTimeout(armTimer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleOpenChange(nextOpen: boolean) {
        setOpen(nextOpen);

        if (!nextOpen) {
            localStorage.setItem(STORAGE_KEY, String(Date.now()));
        }
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (phone.trim().length < 8 || !service) {
            toast.error("Norādiet tālruni un pakalpojumu.");
            return;
        }

        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 900));

        console.log("Modal pieteikums:", { phone, service, message });
        toast.success("Pieteikums saņemts", {
            description: "Sazināsimies ar jums tuvākajā laikā.",
        });

        localStorage.setItem(STORAGE_KEY, String(Date.now()));
        setOpen(false);
        setPhone("");
        setService("");
        setMessage("");
        setIsSubmitting(false);
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="max-w-[calc(100%-1.5rem)] gap-0 overflow-hidden rounded-md border-0 bg-[#9f0610] p-0 text-white shadow-2xl sm:max-w-[520px]">
                <div className="relative px-5 py-5 sm:px-7">
                    <div className="pointer-events-none absolute inset-0 bg-shingle-pattern opacity-[0.08]" />
                    <div className="relative">
                        <DialogTitle className="text-2xl font-black leading-tight tracking-tight text-white">
                            Varat atstāt jautājumu
                    </DialogTitle>
                        <DialogDescription className="mt-2 max-w-md text-sm leading-relaxed text-red-50/85">
                            Ja vēlaties, atstājiet kontaktu, un mēs palīdzēsim saprast nākamo soli: apsekošanu, materiālus vai aptuvenās izmaksas.
                    </DialogDescription>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-5 text-slate-950 sm:p-7">
                    <div>
                        <label htmlFor="lead-modal-phone" className="text-sm font-bold text-slate-800">
                            Tālrunis
                        </label>
                        <Input
                            id="lead-modal-phone"
                            type="tel"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            placeholder="+371 2xxxxxxx"
                            className="mt-1 h-11 rounded-md border-slate-300 bg-white"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-bold text-slate-800">
                            Kas aktuāls?
                        </label>
                        <Select value={service} onValueChange={setService}>
                            <SelectTrigger className="mt-1 h-11 w-full rounded-md border-slate-300 bg-white">
                                <SelectValue placeholder="Izvēlieties" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="jumta_montaza">Jumta montāža / maiņa</SelectItem>
                                <SelectItem value="remonts">Jumta remonts</SelectItem>
                                <SelectItem value="siltinasana">Siltināšana</SelectItem>
                                <SelectItem value="tame">Vajadzīga tāme</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label htmlFor="lead-modal-message" className="text-sm font-bold text-slate-800">
                            Īss apraksts
                        </label>
                        <Textarea
                            id="lead-modal-message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            placeholder="Piemēram: jāmaina vecais jumts, objekts Jelgavā..."
                            className="mt-1 min-h-[92px] resize-none rounded-md border-slate-300 bg-white"
                        />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="h-12 flex-1 rounded-md bg-brand font-black text-white shadow-none hover:brightness-110"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Sūta...
                                </>
                            ) : (
                                "Pieteikt konsultāciju"
                            )}
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="h-12 rounded-md border-slate-300 text-slate-700 hover:bg-slate-50"
                            onClick={() => handleOpenChange(false)}
                        >
                            Aizvērt
                        </Button>
                    </div>

                    <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-brand"
                    >
                        <Phone className="h-4 w-4 text-brand" />
                        Steidzami? Zvaniet {CONTACT_INFO.phoneDisplay}
                    </a>
                </form>
            </DialogContent>
        </Dialog>
    );
}
