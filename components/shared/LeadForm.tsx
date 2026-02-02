"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
    name: z.string().min(2, { message: "Lūdzu, norādiet vārdu (vismaz 2 burti)." }),
    phone: z.string().min(8, { message: "Lūdzu, norādiet korektu tālruņa numuru." }),
    email: z.string().email({ message: "Nepieciešams derīgs e-pasts piedāvājuma nosūtīšanai." }),
    serviceType: z.string().min(1, { message: "Lūdzu, izvēlieties objekta tipu." }),
    message: z.string().optional(),
});

export default function LeadForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            serviceType: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Saņemtais pieteikums:", values);

        toast.success("Pieteikums veiksmīgi nosūtīts!", {
            description: "Paldies! Mēs ar Jums sazināsimies tuvākajā laikā.",
            duration: 5000,
        });

        form.reset();
        setIsSubmitting(false);
    }

    return (
        <div className="bg-white p-6 md:p-8 h-full flex flex-col justify-center">
            <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 uppercase">
                    Pieteikt Konsultāciju
                </h3>
                <p className="text-slate-500 mt-2 text-sm">
                    Aizpildiet formu, lai saņemtu bezmaksas objekta apsekošanu vai tāmes aprēķinu.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold text-slate-700">Vārds, Uzvārds</FormLabel>
                                <FormControl>
                                    <Input placeholder="Jānis Bērziņš" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-semibold text-slate-700">Tālrunis</FormLabel>
                                    <FormControl>
                                        <Input placeholder="2xxxxxxx" type="tel" className="bg-slate-50 border-slate-200 focus:bg-white" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-semibold text-slate-700">E-pasts</FormLabel>
                                    <FormControl>
                                        <Input placeholder="janis@epasts.lv" type="email" className="bg-slate-50 border-slate-200 focus:bg-white" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold text-slate-700">Kas Jūs interesē?</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="bg-slate-50 border-slate-200 focus:bg-white">
                                            <SelectValue placeholder="Izvēlieties tēmu..." />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="jumta_montaza">Jumta montāža / Maiņa</SelectItem>
                                        <SelectItem value="siltinasana">Bēniņu siltināšana</SelectItem>
                                        <SelectItem value="remonts">Steidzams remonts</SelectItem>
                                        <SelectItem value="komerc">Industriālais objekts</SelectItem>
                                        <SelectItem value="cits">Cits jautājums</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold text-slate-700">Papildus info (pēc izvēles)</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Vēlos nomainīt veco šīferi uz metāla jumtu. Aptuvenā platība 150m2..."
                                        className="min-h-[100px] bg-slate-50 border-slate-200 focus:bg-white resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-red-700 text-white font-bold py-6 text-lg shadow-md transition-all active:scale-[0.98]"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Sūta...
                            </>
                        ) : (
                            <>
                                Saņemt Piedāvājumu <Send className="ml-2 h-5 w-5" />
                            </>
                        )}
                    </Button>

                    <p className="text-xs text-center text-slate-400 mt-4">
                        Nosūtot pieteikumu, Jūs piekrītat datu apstrādei piedāvājuma sagatavošanas nolūkos.
                    </p>
                </form>
            </Form>
        </div>
    );
}