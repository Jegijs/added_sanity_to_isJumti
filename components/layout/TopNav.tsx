import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import Container from "@/components/layout/Container";
import { TikTokIcon } from "@/components/shared/SocialLinks";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function TopNav() {
    return (
        <div className="hidden lg:block w-full bg-gradient-to-r from-[#7A030B] via-[#B0040F] to-[#7A030B] text-white text-xs">
            <Container>
                <div className="flex h-9 items-center justify-between">
                    <div className="flex items-center gap-5 text-white/90">
                        <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            P–S: 8:00 – 19:00
                        </span>
                        <span className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" />
                            {CONTACT_INFO.base} · {CONTACT_INFO.serviceArea}
                        </span>
                        <Link href={`mailto:${CONTACT_INFO.email}`} className="hidden xl:flex items-center gap-1.5 hover:text-white transition-colors">
                            <Mail className="h-3.5 w-3.5" />
                            {CONTACT_INFO.email}
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors">
                            <Phone className="h-3.5 w-3.5" />
                            {CONTACT_INFO.phoneDisplay}
                        </Link>
                        <span className="h-4 w-px bg-white/30" />
                        <div className="flex items-center gap-2.5">
                            <Link href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/85 hover:text-white transition-colors">
                                <TikTokIcon className="h-3.5 w-3.5" />
                            </Link>
                            <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/85 hover:text-white transition-colors">
                                <Instagram className="h-3.5 w-3.5" />
                            </Link>
                            <Link href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/85 hover:text-white transition-colors">
                                <Facebook className="h-3.5 w-3.5" />
                            </Link>
                            <Link href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/85 hover:text-white transition-colors">
                                <Youtube className="h-3.5 w-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
