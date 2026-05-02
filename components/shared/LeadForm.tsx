"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
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
    name: z.string().min(2, { message: "Norādiet vārdu." }),
    phone: z.string().min(8, { message: "Norādiet tālruņa numuru." }),
    email: z.string().refine((value) => value === "" || z.string().email().safeParse(value).success, {
        message: "Norādiet derīgu e-pastu.",
    }),
    location: z.string().optional(),
    serviceType: z.string().min(1, { message: "Izvēlieties pakalpojumu." }),
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
            location: "",
            serviceType: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 1500));

        const photoInput = document.getElementById("roof-photo") as HTMLInputElement | null;
        const photoName = photoInput?.files?.[0]?.name;

        console.log("Saņemtais pieteikums:", { ...values, photoName });

        toast.success("Pieteikums nosūtīts", {
            description: "Paldies. Sazināsimies tuvākajā laikā.",
            duration: 5000,
        });

        form.reset();
        setIsSubmitting(false);
    }

    return (
        <div className="p-5 sm:p-7">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 lg:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm font-bold text-slate-800">Vārds, uzvārds</FormLabel>
                                <FormControl>
                                    <Input placeholder="Jānis Bērziņš" className="h-11 rounded-md border-slate-300 bg-white px-3" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm font-bold text-slate-800">Tālrunis</FormLabel>
                                <FormControl>
                                    <Input placeholder="+371 2xxxxxxx" type="tel" className="h-11 rounded-md border-slate-300 bg-white px-3" {...field} />
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
                                <FormLabel className="text-sm font-bold text-slate-800">E-pasts <span className="font-medium text-slate-400">(pēc izvēles)</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="janis@epasts.lv" type="email" className="h-11 rounded-md border-slate-300 bg-white px-3" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm font-bold text-slate-800">Objekta vieta <span className="font-medium text-slate-400">(pēc izvēles)</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Jelgava, Rīga, Pierīga..." className="h-11 rounded-md border-slate-300 bg-white px-3" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm font-bold text-slate-800">Pakalpojums</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="h-11 w-full rounded-md border-slate-300 bg-white px-3">
                                            <SelectValue placeholder="Izvēlieties" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="jumta_montaza">Jumta montāža / maiņa</SelectItem>
                                        <SelectItem value="siltinasana">Siltināšana</SelectItem>
                                        <SelectItem value="remonts">Jumta remonts</SelectItem>
                                        <SelectItem value="komerc">Komercobjekts</SelectItem>
                                        <SelectItem value="cits">Cits jautājums</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="lg:col-span-2">
                        <label htmlFor="roof-photo" className="text-sm font-bold text-slate-800">
                            Jumta foto <span className="font-medium text-slate-400">(pēc izvēles)</span>
                        </label>
                        <Input
                            id="roof-photo"
                            type="file"
                            accept="image/*"
                            className="mt-1 h-11 rounded-md border-slate-300 bg-white px-3 py-2 file:mr-3 file:rounded-sm file:border-0 file:bg-slate-100 file:px-3 file:py-1 file:text-sm file:font-bold file:text-slate-700"
                        />
                        <p className="mt-1 text-xs text-slate-500">
                            Foto palīdz ātrāk saprast jumta stāvokli un sagatavot precīzākus jautājumus.
                        </p>
                    </div>

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="lg:col-span-2">
                                <FormLabel className="text-sm font-bold text-slate-800">Objekta apraksts</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Īsi aprakstiet jumtu, aptuveno platību, vietu un vēlamo darbu."
                                        className="min-h-[118px] resize-none rounded-md border-slate-300 bg-white px-3 py-3"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-col gap-3 lg:col-span-2 sm:flex-row sm:items-center">
                        <Button
                            type="submit"
                            className="h-12 rounded-md bg-brand px-8 text-base font-black text-white shadow-none hover:brightness-110"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Sūta...
                                </>
                            ) : (
                                "Nosūtīt pieteikumu"
                            )}
                        </Button>

                        <p className="max-w-md text-xs leading-relaxed text-slate-500">
                            Nosūtot pieteikumu, jūs piekrītat datu apstrādei piedāvājuma sagatavošanai.
                        </p>
                    </div>
                </form>
            </Form>
        </div>
    );
}
