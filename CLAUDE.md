# CLAUDE.md — Kama Agency

## Projet

| Champ | Valeur |
|---|---|
| Nom | Kama Agency |
| URL prod | https://kamaagency.com |
| Chemin local | `C:\Users\waelb\OneDrive\Bureau\kamado` |
| Déploiement | GitHub → Vercel (auto-deploy sur push `main`) |
| Framework | Next.js 15.5 App Router, TypeScript strict |

## Commandes

```bash
# Développement (Turbopack)
cd "C:\Users\waelb\OneDrive\Bureau\kamado" && npm run dev

# Build prod (vider .next avant si EINVAL)
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run build

# Lint
npm run lint
```

> **Note PowerShell** : Le Bash tool réinitialise le cwd sur `C:\Users\waelb\Desktop\kamado` (vide). Toujours utiliser le PowerShell tool avec `Push-Location "C:\Users\waelb\OneDrive\Bureau\kamado"` ou chemins absolus.

## Env vars

| Variable | Emplacement |
|---|---|
| `RESEND_API_KEY` | `.env.local` uniquement — ne JAMAIS committer |
| `NEXT_PUBLIC_GA_ID` | `.env.local` + Vercel Dashboard (G-0JG8BC596P) |

> **Google Search Console** token `jLA41AIAjJ9o95yAdnShagpFrg3Vemd1IOBYHhft1_4` dans `app/layout.tsx` — NE JAMAIS TOUCHER.

## Architecture

```
kamado/
├── app/
│   ├── layout.tsx              ← RootLayout, GA4, fonts, metadata globale
│   ├── page.tsx                ← Homepage
│   ├── a-propos/page.tsx
│   ├── agence-web/[city]/page.tsx   ← 9 pages locales générées
│   ├── agence-web-[city]/page.tsx   ← RÉSIDU — à supprimer (git rm)
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contact/page.tsx
│   ├── mentions-legales/page.tsx
│   ├── not-found.tsx
│   ├── projets/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── tarifs/page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── animations/variants.ts
│   ├── layout/
│   │   ├── Background.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── JsonLd.tsx          ← Organisation + LocalBusiness schema global
│   │   ├── LenisProvider.tsx
│   │   ├── PageTransition.tsx
│   │   ├── Providers.tsx       ← ThemeProvider (next-themes)
│   │   └── ScrollProgress.tsx
│   ├── sections/               ← Sections homepage et pages
│   │   ├── Hero.tsx, About.tsx, BentoGrid.tsx, Blog.tsx, BlogPreview.tsx
│   │   ├── ChiffresKeys.tsx, Contact.tsx, ContactFAQ.tsx, ContactForm.tsx
│   │   ├── CTABand.tsx, FAQ.tsx, Intro.tsx, LogoCarousel.tsx
│   │   ├── Offers.tsx, PressBar.tsx, ProblemSolution.tsx, Process.tsx
│   │   ├── Projects.tsx, Reviews.tsx, ServicesGrid.tsx, Stack.tsx
│   │   ├── Stats.tsx, TerminalSection.tsx, Testimonials.tsx
│   │   ├── ValueProp.tsx, ZoneIntervention.tsx
│   ├── three/
│   │   ├── GlobeCanvas.tsx     ← Globe Three.js (page contact ?)
│   │   └── HeroCanvas.tsx      ← Canvas 3D hero
│   └── ui/
│       ├── BackButton.tsx, FadeInUp.tsx, Logo.tsx, MagneticButton.tsx
│       ├── MarqueeText.tsx, NewsletterForm.tsx, ProjectCard.tsx
│       └── SectionReveal.tsx
├── lib/
│   ├── blog.ts                 ← Interface BlogPost + tableau posts[]
│   ├── cities.ts               ← Interface CityData + tableau cities[] (9 villes)
│   ├── constants.ts            ← SITE_URL, SITE_NAME, CONTACT, STATS, STACK_MARQUEE
│   ├── faq.ts
│   ├── services.ts             ← 17 services avec FAQ (6 questions/service)
│   ├── projects.ts
│   └── animations.ts
└── public/
    ├── favicon.ico, icon.svg, apple-touch-icon.png
    └── manifest.json
```

## Stack technique

| Couche | Technologie |
|---|---|
| Framework | Next.js 15 App Router + TypeScript strict |
| Styles | Tailwind CSS v4 (`@import "tailwindcss"` dans globals.css) |
| Animations | Framer Motion v12 + GSAP ScrollTrigger |
| Scroll | Lenis v1.3.23 (smooth scroll) |
| 3D | Three.js via @react-three/fiber + three-globe |
| Emails | Resend v6 (API route `/api/contact`) |
| Analytics | Google Analytics 4 via @next/third-parties (`afterInteractive`) |
| Thème | next-themes (dark/light) |
| Fonts | Geist (corps) + Syne (titres, 700/800) |

## Design system

### CSS variables clés
```css
var(--background)      /* fond principal */
var(--foreground)      /* texte principal */
var(--border)          /* bordures subtiles */
var(--muted)           /* texte secondaire */
```

### Conventions
- Titres display : font Syne, weight 700-800
- Corps : font Geist, weight 400-600
- Couleurs accent : gradients Tailwind (cyan→blue, orange→amber, etc.)
- Bordures : `border border-[var(--border)]`
- Cartes : `rounded-2xl` ou `rounded-3xl`
- Espacement sections : `py-24 md:py-32`
- Pas d'emojis sauf si explicitement demandé

## SEO — ce qui est en place

### Données structurées Schema.org
- `Organisation` + `LocalBusiness` → `components/layout/JsonLd.tsx` (global)
- `FAQPage` → pages services + blog
- `BreadcrumbList` → pages services, blog, villes
- `BlogPosting` + `Person` → `app/blog/[slug]/page.tsx`
- `LocalBusiness` + `FAQPage` + `BreadcrumbList` → `app/agence-web/[city]/page.tsx`

### Sitemap (`app/sitemap.ts`)
~60 URLs : home + 17 services + 23 blog + 4 projets + 9 villes + pages fixes
Priority : home 1.0, services 0.9, villes 0.85, blog 0.8

### Robots (`app/robots.ts`)
`User-agent: * Allow: / Sitemap: https://kamaagency.com/sitemap.xml`

## Pages locales (9 villes)

Fichier : `lib/cities.ts` → `app/agence-web/[city]/page.tsx`

| Slug | Ville |
|---|---|
| romans-sur-isere | Romans-sur-Isère |
| valence | Valence |
| grenoble | Grenoble |
| lyon | Lyon |
| paris | Paris |
| bordeaux | Bordeaux |
| marseille | Marseille |
| toulouse | Toulouse |
| nantes | Nantes |

## Blog (`lib/blog.ts`)

### Interface BlogPost
```typescript
{
  slug: string
  title: string
  category: string         // "SEO" | "Création Web" | "E-commerce" | "SaaS" | "Local"
  date: string             // "12 mai 2026"
  dateModified?: string
  readTime: string         // "8 min"
  excerpt: string
  metaTitle: string        // max 60 cars
  metaDescription: string  // max 155 cars
  keywords: string[]
  isPilier?: boolean
  intro: string            // 80-100 mots, stat dans les 50 premiers mots
  sections: { h2: string; body: string }[]   // 6-7 sections pour piliers, 4 pour satellites
  faq: { q: string; a: string }[]            // 5 questions piliers, 3 satellites
  gradient: string         // "from-X-500 to-Y-600"
  image: string            // URL Unsplash (w=800&q=85&auto=format&fit=crop)
  externalLinks: { label: string; url: string; description: string }[]
}
```

### Posts existants (41 articles au 2026-05-28)
| Slug | Catégorie | Pilier |
|---|---|---|
| seo-2026-nouveaux-criteres-google | SEO | oui |
| shopify-vs-woocommerce-2026 | E-commerce | non |
| pourquoi-nextjs-standard-agences-web-premium | Création Web | non |
| cout-site-web-2026 | Création Web | oui |
| agence-web-romans-sur-isere-drome | Local | non |
| vitesse-chargement-site-core-web-vitals | SEO | non |
| intelligence-artificielle-site-web-2026 | Création Web | non |
| creation-site-vitrine-professionnel | Création Web | non |
| refonte-site-web-quand-comment | Création Web | non |
| site-web-artisan-pme | Création Web | non |
| agence-seo-france-comment-choisir | SEO | non |
| seo-local-google-business-profile | SEO | non |
| audit-seo-complet-checklist | SEO | non |
| creation-boutique-en-ligne-guide | E-commerce | non |
| optimisation-taux-conversion-ecommerce | E-commerce | non |
| agence-web-valence-drome | Local | non |
| agence-web-auvergne-rhone-alpes | Local | non |
| creation-site-web-grenoble-isere | Local | non |
| wordpress-vs-nextjs-comparatif | Création Web | non |
| shopify-headless-nextjs-performance | E-commerce | non |
| tarif-agence-web-province-vs-paris | Création Web | non |

## Services (17 services dans `lib/services.ts`)
Chaque service : 6 questions FAQ enrichies (prix, géo, technique, process)

## Règles de performance
- Pas de `use client` inutile — préférer Server Components
- Images : toujours URL Unsplash avec `w=800&q=85&auto=format&fit=crop`
- Fonts : `display: swap`, `preload: true` sur Geist
- GA4 : chargé via `@next/third-parties` (afterInteractive, pas bloquant)
- Lenis : smooth scroll global, pas de scroll natif hors canvas 3D

## Git — règles importantes
- Commit messages : utiliser des tirets (pas d'apostrophes) → évite les erreurs shell
- Format : `git commit -m @'...'@` (here-string single-quote PowerShell)
- Ne jamais committer `.env.local`, `.next/`, `node_modules/`
- Branche principale : `main`

## À faire / À nettoyer
- [ ] Supprimer `app/agence-web-[city]/page.tsx` (résidu, ne pas garder)
- [ ] Remplacer le placeholder téléphone `"+33-XXXXXXXXX"` dans `JsonLd.tsx`
- [ ] Créer profil Clutch.co et Sortlist.fr (backlinks)
- [ ] Ajouter `NEXT_PUBLIC_GA_ID` dans Vercel Dashboard

## Déjà fait (SEO & technique)
- [x] GA4 installé via @next/third-parties
- [x] Google Search Console vérifié (token dans layout.tsx)
- [x] Sitemap.ts avec ~60 URLs prioritisées
- [x] Robots.ts configuré
- [x] Schema.org complet (Organisation, LocalBusiness, FAQPage, BreadcrumbList, BlogPosting, Person)
- [x] 9 pages locales /agence-web/[city]/ avec JSON-LD
- [x] FAQ enrichie sur 17 services (6 questions/service)
- [x] Blog : articles similaires filtrés par catégorie (3 cartes)
- [x] 41 articles de blog en place (21 existants + 20 nouveaux cocons SEO)
- [x] Maillage interne blog → services → homepage
