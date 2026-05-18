import type { Metadata } from "next";
import Link from "next/link";
import Projects from "@/components/sections/Projects";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos Réalisations — Projets Web | Kama Agency",
  description:
    "Découvrez les projets réalisés par Kama Agency : sites vitrine, boutiques Shopify, SaaS et applications web sur-mesure pour nos clients français.",
  alternates: { canonical: `${SITE_URL}/projets/` },
  openGraph: {
    title: "Nos Réalisations — Projets Web | Kama Agency",
    description:
      "Sites vitrine, Shopify, SaaS et applications web. Découvrez nos réalisations concrètes et les résultats obtenus pour nos clients.",
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
    { "@type": "ListItem", position: 2, name: "Réalisations", item: `${SITE_URL}/projets/` },
  ],
};

const stats = [
  { value: "4", label: "Projets livrés" },
  { value: "100%", label: "Clients satisfaits" },
  { value: "3×", label: "Plus rapide que la concurrence" },
  { value: "48h", label: "Délai de réponse garanti" },
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
            <div
              className="absolute w-[400px] h-[400px] rounded-full blur-[110px]"
              style={{ background: "#a855f7", bottom: "10%", left: "5%", opacity: 0.06 }}
            />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <nav className="flex items-center justify-center gap-2 text-sm text-[var(--fg-muted)] mb-8">
              <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span className="text-[var(--fg)]">Réalisations</span>
            </nav>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-5">
              Portfolio
            </span>
            <h1 className="text-section font-bold text-[var(--fg)] mb-6">
              Des projets qui
              <br />
              <span className="text-[var(--accent)] accent-glow">parlent d&apos;eux-mêmes</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto mb-12">
              Chaque projet est une collaboration unique. Voici ce que nous avons construit pour
              nos clients — des solutions qui génèrent de vrais résultats business.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-[var(--accent)] mb-1">{stat.value}</div>
                  <div className="text-xs text-[var(--fg-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Projects />

        {/* CTA final */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center p-10 md:p-16 rounded-3xl border border-[var(--accent)]/20 bg-[var(--surface)] relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 50% at 50% 0%, var(--accent-glow) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
              Votre projet
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-4">
              Prêt à rejoindre nos clients satisfaits ?
            </h2>
            <p className="text-[var(--fg-muted)] mb-8">
              Décrivez votre projet — on vous revient sous 48h avec une proposition concrète et un devis détaillé.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_var(--accent-glow)]"
            >
              Démarrer votre projet
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
