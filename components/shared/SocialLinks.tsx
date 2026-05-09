import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

// TikTok isn't in lucide — small inline SVG
function TikTokIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.42a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.37Z" />
        </svg>
    );
}

type Variant = "default" | "filled" | "ghost-dark" | "drawer";
type Size = "sm" | "md" | "lg";

const sizeMap = {
    sm: { btn: "h-8 w-8", icon: "h-4 w-4" },
    md: { btn: "h-9 w-9", icon: "h-4 w-4" },
    lg: { btn: "h-11 w-11", icon: "h-5 w-5" },
};

const variantMap: Record<Variant, string> = {
    // For light backgrounds (header, contact section)
    default:
        "text-muted-foreground hover:text-primary-foreground hover:bg-primary border border-border/50 hover:border-primary shadow-sm",
    // Filled brand chips on light bg
    filled:
        "text-primary-foreground bg-foreground hover:bg-primary shadow-md",
    // For dark backgrounds (footer, mobile-nav drawer footer)
    "ghost-dark":
        "text-muted-foreground hover:text-primary-foreground bg-primary/5 border border-primary/20 hover:bg-primary hover:border-primary",
    drawer:
        "text-white bg-white/10 border border-white/15 hover:bg-white hover:text-primary hover:border-white",
};

const links: { key: keyof typeof SOCIAL_LINKS; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
    { key: "tiktok", label: "TikTok", Icon: TikTokIcon },
    { key: "instagram", label: "Instagram", Icon: Instagram },
    { key: "facebook", label: "Facebook", Icon: Facebook },
    { key: "youtube", label: "YouTube", Icon: Youtube },
];

export default function SocialLinks({
    variant = "default",
    size = "md",
    className,
}: {
    variant?: Variant;
    size?: Size;
    className?: string;
}) {
    const s = sizeMap[size];
    return (
        <div className={cn("flex items-center gap-2", className)}>
            {links.map(({ key, label, Icon }) => (
                <Link
                    key={key}
                    href={SOCIAL_LINKS[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={cn(
                        "inline-flex items-center justify-center rounded-full transition-colors",
                        s.btn,
                        variantMap[variant]
                    )}
                >
                    <Icon className={s.icon} />
                </Link>
            ))}
        </div>
    );
}

export { TikTokIcon };
