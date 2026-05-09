import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import Container from "@/components/layout/Container";
import { TikTokIcon } from "@/components/shared/SocialLinks";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function TopNav() {
    return (
        <div className="hidden lg:block w-full border-b border-border bg-muted/30 text-muted-foreground text-xs backdrop-blur-sm">
            <Container>
                <div className="flex h-9 items-center justify-between">
                    <div className="flex items-center gap-5">
                        <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            24/7
                        </span>
                        <span className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" />
                            {CONTACT_INFO.base} · {CONTACT_INFO.serviceArea}
                        </span>
                        <Link href={`mailto:${CONTACT_INFO.email}`} className="hidden xl:flex items-center gap-1.5 hover:text-foreground transition-colors">
                            <Mail className="h-3.5 w-3.5" />
                            {CONTACT_INFO.email}
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-1.5 font-semibold hover:text-foreground transition-colors">
                            <Phone className="h-3.5 w-3.5" />
                            {CONTACT_INFO.phoneDisplay}
                        </Link>
                        <span className="h-4 w-px bg-border" />
                        <div className="flex items-center gap-2.5">
                            <Link href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-foreground transition-colors">
                                <TikTokIcon className="h-3.5 w-3.5" />
                            </Link>
                            <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-foreground transition-colors">
                                <Instagram className="h-3.5 w-3.5" />
                            </Link>
                            <Link href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-foreground transition-colors">
                                <Facebook className="h-3.5 w-3.5" />
                            </Link>
                            <Link href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-foreground transition-colors">
                                <Youtube className="h-3.5 w-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
