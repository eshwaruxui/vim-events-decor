# VIM Events & Décor

Production website for VIM Events & Décor — "Elegance in every emotion."

## Stack

- **Framework:** Next.js 14 (App Router), statically exported
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with VIM brand tokens (`tailwind.config.ts`)
- **Hosting:** Cloudflare Pages (static export, image optimization disabled)
- **Data (planned):** Supabase — see [`docs/SCHEMA.md`](docs/SCHEMA.md)

## Project structure

```
app/                  App Router pages
  gallery/            Gallery listing
  case-studies/        Case study listing + [slug] detail
  contact/            Contact page
components/           Nav, Footer, WhatsAppFloat, LanguageToggle
context/              LanguageContext (EN / Tamil language state)
lib/                  constants.ts (brand tokens), translations.ts (i18n copy)
public/               Static assets (logo, patterns, decorative SVGs)
docs/                 Planned Supabase schema
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Produces a static export in `out/`, deployed automatically to Cloudflare Pages on push to `main`.

## Language system

Four modes — `en`, `ta`, `ta-native`, `ta-modern` — managed by `context/LanguageContext.tsx` and persisted to `localStorage` under the `vim-lang` key. Copy lives in `lib/translations.ts`.
