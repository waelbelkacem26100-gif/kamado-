import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À propos — Kama Agency, agence web Drôme et France",
  description:
    "Kama Agency, agence web fondée en 2022 à Romans-sur-Isère. Spécialistes Next.js, Shopify et SaaS. Plus de 40 projets livrés en France. Découvrez notre équipe et notre méthode.",
  alternates: { canonical: `${SITE_URL}/a-propos/` },
  openGraph: {
    title: "À propos — Kama Agency",
    description:
      "Agence web fondée en 2022 à Romans-sur-Isère (Drôme). Spécialistes Next.js, Shopify, SEO et SaaS. Plus de 40 projets livrés partout en France.",
    url: `${SITE_URL}/a-propos/`,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wael Belkacem",
  jobTitle: "Fondateur & Développeur Lead",
  worksFor: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Shopify",
    "Supabase",
    "SEO technique",
    "Intelligence artificielle",
    "UX/UI Design",
  ],
  url: `${SITE_URL}/a-propos/`,
  sameAs: ["https://www.linkedin.com/company/kama-agency"],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  foundingDate: "2022",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Romans-sur-Isère",
      postalCode: "26100",
      addressCountry: "FR",
    },
  },
  description:
    "Kama Agency est une agence web française spécialisée en création de sites vitrine Next.js, boutiques Shopify et SaaS sur-mesure. Fondée en 2022 à Romans-sur-Isère, nous accompagnons les entreprises de toute la France dans leur développement digital.",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 5 },
  member: [
    {
      "@type": "OrganizationRole",
      member: { "@type": "Person", name: "Wael Belkacem", jobTitle: "Fondateur & Développeur Lead" },
      startDate: "2022",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "À propos", item: `${SITE_URL}/a-propos/` },
  ],
};

const stats = [
  { value: "40+", label: "Projets livrés" },
  { value: "2022", label: "Année de création" },
  { value: "3–5 sem.", label: "Délai moyen" },
  { value: "95+", label: "Score Lighthouse" },
];

const values = [
  {
    title: "Performance avant tout",
    body: "Chaque site que nous livrons atteint 95+/100 sur Google Lighthouse. Ce n'est pas un bonus — c'est notre standard minimum. Les performances se traduisent directement en positions SEO et en conversions.",
  },
  {
    title: "Transparence totale",
    body: "Devis détaillé sous 48h, planning semaine par semaine, preview Vercel en temps réel pendant le développement. Vous savez exactement où en est votre projet à tout moment.",
  },
  {
    title: "Code qui dure",
    body: "Nous écrivons du TypeScript strict, des composants réutilisables et une architecture qui tient sur 5 ans. Pas de dette technique cachée, pas de dépendances fragiles.",
  },
  {
    title: "Résultats mesurables",
    body: "On ne livre pas des sites beaux — on livre des machines à générer des leads. Chaque projet inclut la configuration Analytics et Search Console pour mesurer le ROI dès le premier mois.",
  },
];

const expertise = [
  { name: "Next.js 15", level: 98 },
  { name: "React / TypeScript", level: 97 },
  { name: "Shopify / Liquid", level: 92 },
  { name: "Tailwind CSS", level: 96 },
  { name: "Supabase / PostgreSQL", level: 88 },
  { name: "SEO technique", level: 90 },
  { name: "Framer Motion", level: 93 },
  { name: "IA / APIs LLM", level: 85 },
];

const projects = [
  {
    name: "ScreenBuild",
    desc: "SaaS IA qui génère des thèmes Shopify depuis des screenshots via Claude AI.",
    result: "Lighthouse 98/100 — 200+ utilisateurs actifs en 3 mois",
    tags: ["Next.js", "Supabase", "Claude API", "Stripe"],
  },
  {
    name: "Brainrot Club",
    desc: "Boutique e-commerce headless Next.js + Shopify Storefront API.",
    result: "+340% CA mensuel en 4 mois, conversion 1.2% → 3.8%",
    tags: ["Next.js", "Shopify Headless", "Klaviyo"],
  },
  {
    name: "Clustea",
    desc: "SaaS d'audit SEO automatisé avec recommandations IA priorisées.",
    result: "Livré en 8 semaines — dashboard complet avec Supabase Realtime",
    tags: ["Next.js", "Supabase Auth", "IA", "SEO"],
  },
  {
    name: "Couvetoile",
    desc: "Site vitrine artisanat d'art sur-mesure avec CMS headless.",
    result: "×2.4 leads en 3 mois — Lighthouse 97/100",
    tags: ["Next.js", "Sanity CMS", "SEO local"],
  },
];

export default function APropos() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen pt-24 pb-20">

        {/* ─── Hero ─── */}
        <section className="relative px-6 pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div
              className="absolute w-[600px] h-[600px] rounded-full blur-[140px]"
              style={{ background: "var(--accent)", top: "-15%", right: "-8%", opacity: 0.06 }}
            />
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[var(--fg-muted)] mb-10">
              <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              <span className="text-[var(--fg)]">À propos</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
                  L&apos;agence
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] leading-tight mb-6">
                  On transforme votre business en machine à vendre
                </h1>
                <p className="text-lg text-[var(--fg-muted)] leading-relaxed mb-8">
                  Kama Agency est une agence web fondée en 2022 à Romans-sur-Isère (Drôme). Nous créons des sites vitrine, boutiques Shopify et SaaS qui génèrent vraiment des clients — pas de beaux sites qui ne convertissent pas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact/"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_var(--accent-glow)]"
                  >
                    Démarrer un projet
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link
                    href="/projets/"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[var(--fg)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors"
                  >
                    Voir nos réalisations
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-colors"
                  >
                    <p className="text-3xl font-bold text-[var(--accent)] mb-1">{s.value}</p>
                    <p className="text-sm text-[var(--fg-muted)]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Fondateur ─── */}
        <section className="py-20 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
              {/* Avatar placeholder */}
              <div className="flex justify-center md:justify-start">
                <div
                  className="w-40 h-40 rounded-2xl border-2 border-[var(--accent)]/40 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--accent-glow), transparent)" }}
                  aria-label="Wael Belkacem — Fondateur Kama Agency"
                >
                  <span className="text-5xl font-bold text-[var(--accent)]">W</span>
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-2">
                  Fondateur
                </span>
                <h2 className="text-2xl font-bold text-[var(--fg)] mb-1">Wael Belkacem</h2>
                <p className="text-sm text-[var(--fg-muted)] mb-5">Développeur full-stack · Romans-sur-Isère, Drôme (26)</p>
                <div className="space-y-4 text-[var(--fg-muted)] text-sm leading-relaxed">
                  <p>
                    J&apos;ai fondé Kama Agency en 2022 avec une conviction simple : les PME françaises méritent des sites web aussi performants que ceux des grandes entreprises, pour un budget PME. Trop souvent, j&apos;ai vu des entreprises sérieuses perdre des clients chaque jour à cause d&apos;un site lent, mal référencé ou visuellement dépassé.
                  </p>
                  <p>
                    Ma spécialité : Next.js, Shopify et les SaaS sur-mesure. Je m&apos;appuie sur les meilleures technologies open-source du marché pour livrer des sites qui atteignent systématiquement 95+/100 sur Google Lighthouse — le standard des leaders comme TikTok, Vercel et Notion.
                  </p>
                  <p>
                    Basé à Romans-sur-Isère, je travaille avec des clients dans toute la France — de Paris à Marseille en passant par Lyon, Grenoble et Bordeaux. La distance ne change rien à la qualité quand les outils sont bons.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["Next.js", "React", "TypeScript", "Shopify", "Supabase", "SEO", "IA / LLM"].map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-[var(--border)] text-[var(--fg-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Valeurs ─── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">Notre approche</span>
              <h2 className="text-3xl font-bold text-[var(--fg)]">Ce en quoi on croit vraiment</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/15 border border-[var(--accent)]/25 flex items-center justify-center mb-4">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-[var(--fg)] mb-2">{v.title}</h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Expertise technique ─── */}
        <section className="py-20 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">Stack technique</span>
              <h2 className="text-3xl font-bold text-[var(--fg)]">Technologies maîtrisées</h2>
            </div>
            <div className="space-y-4">
              {expertise.map((e) => (
                <div key={e.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium text-[var(--fg)]">{e.name}</span>
                    <span className="text-xs text-[var(--fg-muted)]">{e.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${e.level}%`, background: "var(--accent)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Réalisations ─── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">Projets</span>
              <h2 className="text-3xl font-bold text-[var(--fg)]">Ce qu&apos;on a construit</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {projects.map((p) => (
                <div
                  key={p.name}
                  className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-colors group"
                >
                  <h3 className="text-base font-bold text-[var(--fg)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-[var(--fg-muted)] mb-3 leading-relaxed">{p.desc}</p>
                  <p className="text-xs font-semibold text-[var(--accent)] mb-4">{p.result}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/projets/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                Voir tous les projets
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Zone d'intervention ─── */}
        <section className="py-20 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">Localisation</span>
            <h2 className="text-3xl font-bold text-[var(--fg)] mb-6">Basés en Drôme, actifs partout en France</h2>
            <p className="text-[var(--fg-muted)] leading-relaxed mb-10 max-w-2xl mx-auto">
              Notre siège est à Romans-sur-Isère (26100, Drôme), mais nous travaillons 100% à distance avec des clients dans toute la France. Paris, Lyon, Bordeaux, Marseille, Grenoble, Strasbourg — la distance n&apos;a aucun impact sur la qualité ou les délais.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Romans-sur-Isère", "Valence", "Grenoble", "Lyon", "Paris", "Bordeaux", "Marseille", "Toulouse", "Nantes", "Strasbourg"].map((city) => (
                <span
                  key={city}
                  className="text-sm px-4 py-1.5 rounded-full border border-[var(--border)] text-[var(--fg-muted)]"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center p-10 rounded-3xl border border-[var(--accent)]/20 bg-[var(--surface)] relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, var(--accent-glow) 0%, transparent 70%)" }}
              aria-hidden
            />
            <span className="relative text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
              Travaillons ensemble
            </span>
            <h2 className="relative text-3xl font-bold text-[var(--fg)] mb-4">
              Un projet en tête ?
            </h2>
            <p className="relative text-[var(--fg-muted)] mb-8 max-w-md mx-auto">
              Devis gratuit sous 48h. On vous explique exactement ce qu&apos;on va faire, comment et pour combien — sans surprise.
            </p>
            <Link
              href="/contact/"
              className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_var(--accent-glow)]"
            >
              Démarrer mon projet
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
