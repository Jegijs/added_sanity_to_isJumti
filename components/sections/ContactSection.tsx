"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import LeadForm from "@/components/shared/LeadForm";

export default function ContactSection() {
    return (
        <section className="py-16 lg:py-24 bg-white" id="kontakti">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* KREISĀ PUSE: Kontaktinformācija & Teksts */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl uppercase">
                                Sazinieties ar mums
                            </h2>
                            <div className="w-20 h-1 bg-primary rounded-full" />
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Vai jums ir jautājumi par jumta nomaiņu vai remontu?
                                Mūsu speciālisti ir gatavi sniegt bezmaksas konsultāciju un sagatavot tāmi 24 stundu laikā.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Telefons */}
                            <div className="flex items-start space-x-4 group">
                                <div className="bg-red-50 p-3 rounded-lg mt-1 group-hover:bg-primary transition-colors duration-300">
                                    <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Zvaniet mums</h3>
                                    <p className="text-slate-500 text-sm mb-1">Darba dienās 9:00 - 18:00</p>
                                    <Link href="tel:+37120555606" className="text-2xl font-black text-primary hover:text-red-700 hover:underline decoration-2 underline-offset-4">
                                        +371 2055 5606
                                    </Link>
                                </div>
                            </div>

                            {/* E-pasts */}
                            <div className="flex items-start space-x-4 group">
                                <div className="bg-red-50 p-3 rounded-lg mt-1 group-hover:bg-primary transition-colors duration-300">
                                    <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Rakstiet mums</h3>
                                    <p className="text-slate-500 text-sm mb-1">Nosūtiet projektu vai jautājumus</p>
                                    <Link href="mailto:info@isjumti.lv" className="text-lg font-medium text-slate-900 hover:text-primary transition-colors">
                                        info@isjumti.lv
                                    </Link>
                                </div>
                            </div>

                            {/* Rekvizīti / Atrašanās vieta */}
                            <div className="flex items-start space-x-4">
                                <div className="bg-slate-100 p-3 rounded-lg mt-1">
                                    <MapPin className="w-6 h-6 text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">SIA "Baltijas jumtu būve un renovācija"</h3>
                                    <p className="text-slate-600">
                                        Rīga un Pierīga<br />
                                        <span className="text-sm text-slate-400">Reģ. Nr. 40203426065</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Papildus uzticības teksts */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-4">
                            <div className="flex items-center space-x-2 text-slate-900 font-bold mb-2">
                                <Clock className="w-5 h-5 text-primary" />
                                <span>Cik ātri mēs atbildam?</span>
                            </div>
                            <p className="text-slate-600 text-sm">
                                Mēs cenšamies atbildēt uz visiem e-pastiem un pieteikumiem 2 stundu laikā darba dienās.
                            </p>
                        </div>
                    </div>

                    {/* LABĀ PUSE: Pieteikuma forma */}
                    <div className="lg:mt-0 bg-white rounded-2xl shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
                        {/* Importējam LeadForm komponenti, ko izveidojām iepriekš */}
                        <LeadForm />
                    </div>

                </div>
            </div>
        </section>
    );
}