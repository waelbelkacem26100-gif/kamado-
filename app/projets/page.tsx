import type { Metadata } from "next";
import Link from "next/link";
import Projects from "@/components/sections/Projects";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos Réalisations — Projets Web | Kama Agency",
  description:
    "Découvrez les projets réalisés par Kama Agency : sites vitrine, boutiques Shopify, SaaS et applications web sur-mesure. Résultats concrets et mesurables.",
  alternates: { canonical: `${SITE_URL}/projets/` },
  openGraph: {
    title: "Nos Réalisations — Projets Web | Kama Agency",
    description:
      "Sites vitrine, Shopify, SaaS. Des résultats concrets : +47% de conversion, ×2,4 leads, première page Google.",
    url: `${SITE_URL}/projets/`,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Nos Réalisations", item: `${SITE_URL}/projets/` },
  ],
};

const results = [
  {
    client: "Brainrot Club",
    tag: "E-commerce Shopify",
    color: "#a855f7",
    quote: "Taux de conversion passé de 1,2% à 1,8% après refonte du tunnel d'achat et optimisation SEO. Première page Google sur les mots-clés cibles.",
    metric: "+47%",
    metricLabel: "taux de conversion",
  },
  {
    client: "Couvetoile",
    tag: "Site vitrine",
    color: "#00e5ff",
    quote: "Le formulaire de contact génère 2,4× plus de leads qualifiés qu'avant la refonte. Livraison en 6 semaines dans les délais.",
    metric: "×2,4",
    metricLabel: "leads qualifiés",
  },
];

export default function ProjetsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-20 px-6">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute w-[500px] h-[500px] rounded-full blur-[130px]"
              style={{ background: "var(--accent)", top: "-5%", right: "10%", opacity: 0.07 }}
            />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <nav className="flex items-center justify-center gap-2 text-sm text-[var(--fg-muted)] mb-8">
              <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span className="text-[var(--fg)]">Nos Réalisations</span>
            </nav>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-5">
              Portfolio
            </span>
            <h1 className="text-section font-bold text-[var(--fg)] mb-6">
              Nos Réalisations
            </h1>
            <p className="text-lead max-w-2xl mx-auto">
              Des projets concrets, des résultats mesurables. Voici ce que nous avons construit pour nos clients.
            </p>
          </div>
        </section>

        <Projects />

        {/* Résultats clients réels */}
        <section className="py-20 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
                Résultats
              </span>
              <h2 className="text-3xl font-bold text-[var(--fg)]">
                Ce que nos clients ont obtenu
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((r) => (
                <div
                  key={r.client}
                  className="p-7 rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="font-bold text-[var(--fg)]" style={{ color: r.color }}>{r.client}</p>
                      <p className="text-xs text-[var(--fg-muted)]">{r.tag}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black" style={{ color: r.color }}>{r.metric}</p>
                      <p className="text-[10px] text-[var(--fg-muted)]">{r.metricLabel}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                    {r.quote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center p-10 md:p-14 rounded-3xl border border-[var(--accent)]/20 bg-[var(--surface)] relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, var(--accent-glow) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <span className="relative text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
              Votre projet
            </span>
            <h2 className="relative text-3xl font-bold text-[var(--fg)] mb-4">
              Votre projet sera le prochain.
            </h2>
            <p className="relative text-[var(--fg-muted)] mb-8">
              Discutons de vos objectifs — devis gratuit, réponse sous 48h.
            </p>
            <Link
              href="/contact/"
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_var(--accent-glow)]"
            >
              Discuter de votre projet
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
