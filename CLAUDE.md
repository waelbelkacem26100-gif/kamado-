# CLAUDE.md — Kama Agency
> Lis ce fichier EN ENTIER avant toute action.
> Ne pose aucune question dont la réponse est ici.

---

## PROJET
- **Nom** : kamaagency.com
- **Stack** : Next.js 15 App Router + TypeScript strict + Tailwind CSS v4
- **Déploiement** : Vercel via push GitHub (branche `main`)
- **Repo** : https://github.com/waelbelkacem26100-gif/kamado-
- **Chemin local** : `C:\Users\waelb\OneDrive\Bureau\kamado`

---

## COMMANDES
```bash
# Développement (Turbopack)
npm run dev

# Build production
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run build

# Deploy
git push origin main

# TypeScript check
npx tsc --noEmit
```

> **Bash tool** : réinitialise le cwd sur `Desktop\kamado` (vide).
> Toujours utiliser le **PowerShell tool** avec `Push-Location "C:\Users\waelb\OneDrive\Bureau\kamado"`.

---

## VARIABLES D'ENVIRONNEMENT
```
NEXT_PUBLIC_GA_ID=G-0JG8BC596P        # dans .env.local + Vercel Dashboard
RESEND_API_KEY=re_UDGNfFU2_...        # dans .env.local uniquement — NE JAMAIS committer
```
> Google Search Console token `jLA41AIAjJ9o95yAdnShagpFrg3Vemd1IOBYHhft1_4` dans `app/layout.tsx` → **NE JAMAIS TOUCHER**.

---

## ARCHITECTURE
```
kamado/
├── app/
│   ├── layout.tsx                    ← RootLayout, GA4, fonts Geist+Syne, metadata
│   ├── page.tsx                      ← Homepage (Hero → LogoCarousel → ServicesGrid → … → FAQ → ContactForm)
│   ├── a-propos/page.tsx
│   ├── agence-web/[city]/page.tsx    ← 9 pages locales (LocalBusiness + FAQPage + BreadcrumbList JSON-LD)
│   ├── agence-web-[city]/page.tsx    ← RÉSIDU à supprimer (git rm -r)
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx           ← BlogPosting + FAQPage + BreadcrumbList JSON-LD
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
│   ├── sitemap.ts                    ← ~80 URLs (home + 17 services + 41 blog + 9 villes + projets + fixes)
│   └── robots.ts
├── components/
│   ├── animations/variants.ts
│   ├── layout/
│   │   ├── Background.tsx            ← 6 couches Three.js (voir section dédiée)
│   │   ├── CustomCursor.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── JsonLd.tsx                ← Organisation + LocalBusiness schema global
│   │   ├── LenisProvider.tsx         ← Smooth scroll (voir section dédiée)
│   │   ├── PageTransition.tsx
│   │   ├── Providers.tsx             ← ThemeProvider next-themes (defaultTheme="dark")
│   │   └── ScrollProgress.tsx
│   ├── sections/
│   │   ├── Hero.tsx, About.tsx, BentoGrid.tsx, Blog.tsx, BlogPreview.tsx
│   │   ├── ChiffresKeys.tsx, Contact.tsx, ContactFAQ.tsx, ContactForm.tsx
│   │   ├── CTABand.tsx, FAQ.tsx, Intro.tsx, LogoCarousel.tsx, Offers.tsx
│   │   ├── PressBar.tsx, ProblemSolution.tsx, Process.tsx, Projects.tsx
│   │   ├── Reviews.tsx, ServicesGrid.tsx, Stack.tsx, Stats.tsx
│   │   ├── TerminalSection.tsx, Testimonials.tsx, ValueProp.tsx, ZoneIntervention.tsx
│   ├── three/
│   │   ├── GlobeCanvas.tsx           ← Globe interactif (voir section dédiée)
│   │   └── HeroCanvas.tsx            ← Canvas 3D hero (1200 particles + mouse parallax)
│   └── ui/
│       ├── BackButton.tsx, FadeInUp.tsx, Logo.tsx, MagneticButton.tsx
│       ├── MarqueeText.tsx, NewsletterForm.tsx, ProjectCard.tsx, SectionReveal.tsx
├── lib/
│   ├── blog.ts                       ← Interface BlogPost + tableau posts[] (41 articles)
│   ├── cities.ts                     ← Interface CityData + tableau cities[] (9 villes)
│   ├── constants.ts                  ← SITE_URL, SITE_NAME, CONTACT, STATS, STACK_MARQUEE
│   ├── faq.ts
│   ├── services.ts                   ← 17 services + 6 FAQ questions chacun
│   ├── projects.ts                   ← 4 projets (Clustea, ScreenBuild, Couvetoile, Brainrot Club)
│   └── animations.ts
├── public/
│   ├── favicon.ico, icon.svg, apple-touch-icon.png, manifest.json
├── docs/
│   └── seo/progress.md              ← Suivi 20 articles SEO (20/20 complétés)
├── CLAUDE.md                         ← CE FICHIER
├── next.config.ts                    ← trailingSlash:true, CSP, images AVIF/WebP
└── .env.local                        ← NE JAMAIS COMMITTER
```

---

## DESIGN SYSTEM

### CSS Variables (globals.css)
| Token | Dark | Light |
|---|---|---|
| `--bg` | `#0a0a0a` | `#ffffff` |
| `--bg-secondary` | `#141414` | `#f5f5f5` |
| `--fg` | `#f0f0f0` | `#000000` |
| `--fg-muted` | `rgba(240,240,240,0.45)` | `rgba(0,0,0,0.5)` |
| `--accent` | `#00ff87` | `#00c853` |
| `--accent-hover` | `#44ffaa` | `#00a847` |
| `--border` | `rgba(255,255,255,0.07)` | `rgba(0,0,0,0.1)` |
| `--surface` | `rgba(255,255,255,0.04)` | `rgba(0,0,0,0.04)` |

### Thème
- **Mode par défaut** : dark (`Providers.tsx` → `defaultTheme="dark"`)
- **Fonts** : Geist (corps, `--font-geist-sans`) + Syne (titres h1/h2, `--font-syne-var`, weight 700/800)
- **Breakpoint mobile** : `768px`
- **Particules accent** : `0x00ff87` (Background layer 2)

### Tailwind v4
```css
/* globals.css */
@import "tailwindcss";
@custom-variant dark (&:is(.dark, .dark *));
/* Variables mappées via @theme inline */
```

### Utilitaires classes
```
.glass        → backdrop-filter blur(16px), bg:surface, border:border, rounded-[20px]
.glow-cyan    → box-shadow accent-glow
.noise-overlay → body::after (opacity 0.032, z-index 9998)
```

---

## COMPOSANTS CRITIQUES

### Background.tsx
6 couches Three.js — `fixed inset-0 z-[-1]` :
1. **bgStars** — Starfield blanc dense (720 desktop / 360 mobile), opacity 0.09
2. **midStars** — Particules vertes énergie (360 / 180), couleur `0x00ff87`, opacity 0.18
3. **fgStars** — Étoiles brillantes premier plan (48 / 24), opacity 0.35
4. **neb1** — Nébuleuse violette `0xa855f7`, AdditiveBlending, opacity 0.07
5. **neb2** — Nébuleuse indigo `0x6366f1`, AdditiveBlending, opacity 0.06
6. **mwStars** — Bande Voie Lactée `0xddeeff` (480 / 240), opacity 0.06

Règles :
- `setPixelRatio(Math.min(devicePixelRatio, 1.5))`
- Parallax scroll : `camera.position.y = -scrollY * 0.012`
- `scroll` listener : `{ passive: true }`
- `visibilitychange` : pause animation quand onglet masqué
- **isMobile** (`< 768`) : réduit les comptes de particules, ne désactive PAS le parallax

### GlobeCanvas.tsx
- Package `three-globe`
- Rayon natif du globe = 100 unités monde
- **Camera** : `PerspectiveCamera(50, ..., 1, 3000)`, `position.z = 250`
- `setPixelRatio(Math.min(devicePixelRatio, 2))`
- Drag interactif : mousedown/mousemove + touch
- Auto-rotation : `globe.rotation.y += 0.0015` quand pas en drag
- **4 points** :
  - Paris : `{ lat: 48.85, lng: 2.35 }`
  - Bruxelles : `{ lat: 50.85, lng: 4.35 }`
  - Genève : `{ lat: 46.20, lng: 6.15 }`
  - Montréal : `{ lat: 45.50, lng: -73.57 }`
- Couleur points : `#00ff88`
- Container : `width: 100%, height: 100%, minHeight: 360px`
- Importé via `next/dynamic` + `ssr: false`

### LenisProvider.tsx
- Smooth scroll **désactivé** sur mobile `< 768px` ET `prefers-reduced-motion`
- Config : `duration: 1.2`, `wheelMultiplier: 0.8`, `touchMultiplier: 0`
- Synchronisé GSAP ScrollTrigger via `lenis.on("scroll", ScrollTrigger.update)`
- **RAF natif** — jamais `gsap.ticker` (passe des secondes × 1000 ≠ timestamp absolu)
- **Jamais** `addEventListener("scroll")` natif dans les autres composants

### HeroCanvas.tsx
- 1200 particules Three.js + parallax souris
- `dynamic import + ssr: false`

---

## BLOG — Format lib/blog.ts

Les articles sont des **objets TypeScript** dans `lib/blog.ts` (pas MDX).

```typescript
interface BlogPost {
  slug: string
  title: string
  category: string           // "SEO" | "Création Web" | "E-commerce" | "SaaS" | "Local"
  date: string               // "28 mai 2026"
  dateModified?: string
  readTime: string           // "8 min"
  excerpt: string
  metaTitle: string          // max 60 cars
  metaDescription: string    // max 155 cars
  keywords: string[]
  isPilier?: boolean
  intro: string              // 80-100 mots, stat dans les 50 premiers mots
  sections: { h2: string; body: string }[]  // 6 pilier / 4 satellite
  faq: { q: string; a: string }[]           // 5 pilier / 3 satellite
  gradient: string           // "from-X-500 to-Y-600"
  image: string              // Unsplash ?w=800&q=85&auto=format&fit=crop
  externalLinks: { label: string; url: string; description: string }[]
}
```

Le body de chaque section est du **plain text** (rendu via `<p>{section.body}</p>`).
Pas de markdown, pas de HTML dans les strings body.

---

## PROJETS RÉFÉRENCÉS (lib/projects.ts)

| Slug | Nom | Type | URL |
|---|---|---|---|
| `clustea` | Clustea | SaaS SEO | clustea.com |
| `screenbuild` | ScreenBuild | SaaS screenshot→Shopify | screenbuild.com |
| `couvetoile` | Couvetoile | Site vitrine artisan couvreur | couvetoile.fr |
| `brainrot-club` | Brainrot Club | Shopify dropshipping / e-commerce | brainrot-club.com |

---

## SEO — État au 2026-05-28

### Données structurées Schema.org
- `Organisation` + `LocalBusiness` → `JsonLd.tsx` (global, toutes les pages)
- `FAQPage` → pages services + blog
- `BreadcrumbList` → services, blog, villes
- `BlogPosting` + `Person` → `app/blog/[slug]/page.tsx`
- `LocalBusiness` + `FAQPage` + `BreadcrumbList` → `app/agence-web/[city]/page.tsx`

### Sitemap (app/sitemap.ts)
~80 URLs — home + 17 services + 41 blog (isPilier=0.85, satellite=0.75) + 9 villes (0.85) + projets + pages fixes

### GA4
Installé via `@next/third-parties` dans `app/layout.tsx` :
```tsx
<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
```
Stratégie `afterInteractive` — ne bloque pas le LCP.

---

## RÈGLES PERFORMANCES ABSOLUES
- `setPixelRatio(Math.min(devicePixelRatio, 2))` sur GlobeCanvas
- `setPixelRatio(Math.min(devicePixelRatio, 1.5))` sur Background
- `visibilitychange` → pause animation sur onglet masqué (Background)
- `viewport={{ once: true }}` sur tous les `whileInView` Framer Motion
- `dynamic import + ssr: false` pour **tous** les composants Three.js
- **Jamais** `addEventListener("scroll")` natif — toujours Lenis ou `{ passive: true }`
- Images : Unsplash avec `?w=800&q=85&auto=format&fit=crop` (auto-WebP/AVIF)
- `next.config.ts` : `compress: true`, `images.formats: ["avif", "webp"]`, `trailingSlash: true`

---

## DÉJÀ FAIT — NE PAS REFAIRE
- [x] GA4 installé (@next/third-parties, afterInteractive)
- [x] Google Search Console configuré + sitemap soumis
- [x] Clustea mis en projet phare (slug `clustea`)
- [x] Performances Background.tsx optimisées (6 couches réduites)
- [x] Lenis fluide desktop, désactivé mobile < 768px
- [x] 9 pages locales /agence-web/[city]/ avec JSON-LD complet
- [x] FAQ enrichie 17 services (6 questions/service)
- [x] Blog : articles similaires filtrés par catégorie (3 cards)
- [x] 41 articles de blog (21 existants + 20 cocons SEO)
- [x] Sitemap ~80 URLs
- [x] next.config.ts : CSP + security headers + trailingSlash

---

## TÂCHES EN COURS
- [ ] Supprimer `app/agence-web-[city]/` (git rm -r — résidu route partielle)
- [ ] Remplacer `"+33-XXXXXXXXX"` par vrai numéro dans `JsonLd.tsx`
- [ ] Continents visibles sur le globe (image satellite actuellement — utiliser image topo)
- [ ] Créer profils Clutch.co et Sortlist.fr (backlinks)
- [ ] Ajouter `NEXT_PUBLIC_GA_ID` dans Vercel Dashboard si pas encore fait

---

## INSTRUCTION DE REPRISE
Si les tokens s'épuisent :
```
Lis CLAUDE.md puis docs/seo/progress.md
et reprends exactement là où tu t'es arrêté.
```
