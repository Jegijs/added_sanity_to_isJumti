# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (see `pnpm-workspace.yaml`, `pnpm-lock.yaml`).

- `pnpm dev` — start Next.js dev server on http://localhost:3000
- `pnpm build` — production build
- `pnpm start` — run built app
- `pnpm lint` — ESLint (flat config, `eslint-config-next`)

There is no test framework configured.

## Architecture

Marketing site for "IS JUMTI" (Latvian roofing company) built with **Next.js 16 App Router + React 19 + Tailwind CSS v4 + shadcn/ui** (style: new-york, base color: neutral, RSC enabled). All UI copy is in Latvian.

### Routing & URL strategy

URLs are public-facing in **Latvian**, but the underlying route folders use **English** names. The mapping is centralized in `next.config.ts` via `rewrites()`:

| Public URL          | Internal route |
|---------------------|----------------|
| `/pakalpojumi`      | `/services`    |
| `/galerija`         | `/gallery`     |
| `/izmaksas`         | `/pricing`     |
| `/padomi`           | `/blog`        |
| `/kontakti`         | `/contact`     |
| `/privatuma-politika` | `/privacy`   |

When adding a new page, create the route under the English folder name in `app/` and add a corresponding rewrite. Navigation links in `lib/constants.ts` (`NAVIGATION_LINKS`) reference the **public** Latvian URLs.

### Directory layout

- `app/` — App Router pages, `layout.tsx` (root shell with `Header` / `Footer` / `WhatsAppButton` / `Toaster` / `CookieConsent`), `error.tsx`, `loading.tsx`, `not-found.tsx`, `robots.ts`, `sitemap.ts`.
- `app/api/send/route.ts` — placeholder POST endpoint for the contact form (Resend/Nodemailer integration is TODO).
- `components/ui/` — shadcn/ui primitives (do not hand-edit unless intentionally customizing). Add new ones via `pnpm dlx shadcn@latest add <name>` — config in `components.json`, alias `@/components/ui`.
- `components/layout/` — `Header`, `Footer`, `Container`, `TopNav`, `MobileNav`.
- `components/sections/` — page-level composed sections (`Hero`, `Features`, `ServicesGrid`, `GalleryPreview`, `ContactSection`, `FAQ`).
- `components/shared/` — cross-cutting widgets (`LeadForm`, `WhatsAppButton`, `CookieConsent`, `Logo`, `SectionHeading`).
- `lib/constants.ts` — `NAVIGATION_LINKS`, `CONTACT_INFO` (phone/email/whatsapp). Use these instead of hardcoding contact info.
- `lib/utils.ts` — `cn()` helper (Tailwind class merge).

### Path aliases

`@/*` resolves to repo root (see `tsconfig.json`). Component aliases in `components.json`: `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks`.

### Forms

`react-hook-form` + `zod` (via `@hookform/resolvers`) for validation; `sonner` for toast feedback. Contact submission posts to `/api/send`.

### Performance config (`next.config.ts`)

- Image formats: AVIF + WebP; remote pattern allowed for `www.isjumti.lv`. Per-image `quality` must be set on `<Image>`, not in config.
- `experimental.optimizePackageImports` covers `lucide-react`, `embla-carousel-react`, `zod`, `date-fns`, `react-hook-form` — prefer these libraries to keep bundle lean.

### Conventions

- Comments and UI strings are written in Latvian; preserve that when editing.
- Theming uses CSS variables (`cssVariables: true` in `components.json`) and `next-themes`.
