import type { Metadata } from "next";
import Link from "next/link";
import Offers from "@/components/sections/Offers";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tarifs & Offres — Devis Gratuit | Kama Agency",
  description:
    "Nos formules web : site vitrine, boutique Shopify et SaaS sur-mesure. Tarifs transparents, devis gratuit sous 48h. Aucun forfait générique.",
  alternates: { canonical: `${SITE_URL}/tarifs/` },
  openGraph: {
    title: "Tarifs & Offres — Devis Gratuit | Kama Agency",
    description:
      "Site vitrine, Shopify, SaaS — nos formules et tarifs. Devis gratuit et personnalisé sous 48h.",
    url: `${SITE_URL}/tarifs/`,
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
    { "@type": "ListItem", position: 2, name: "Tarifs", item: `${SITE_URL}/tarifs/` },
  ],
};

const included = [
  { icon: "✓", label: "Devis gratuit et sans engagement" },
  { icon: "✓", label: "Design sur-mesure, jamais de template" },
  { icon: "✓", label: "SEO on-page inclus sur chaque livraison" },
  { icon: "✓", label: "Responsive mobile & tablette" },
  { icon: "✓", label: "Hébergement et mise en ligne inclus" },
  { icon: "✓", label: "Formation à la gestion du contenu" },
  { icon: "✓", label: "Support post-livraison 30 jours" },
  { icon: "✓", label: "Code source vous appartient à 100%" },
];

export default function TarifsPage() {
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
              className="absolute w-[600px] h-[600px] rounded-full blur-[130px]"
              style={{ background: "var(--accent)", top: "-15%", right: "0%", opacity: 0.07 }}
            />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <nav className="flex items-center justify-center gap-2 text-sm text-[var(--fg-muted)] mb-8">
              <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span className="text-[var(--fg)]">Tarifs</span>
            </nav>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-5">
              Nos offres
            </span>
            <h1 className="text-section font-bold text-[var(--fg)] mb-6">
              Des tarifs transparents,
              <br />
              <span className="text-[var(--accent)] accent-glow">zéro mauvaise surprise</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto mb-8">
              Chaque projet est devisé sur-mesure après un appel de découverte gratuit.
              Les fourchettes ci-dessous donnent une idée du budget selon la complexité.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_var(--accent-glow)]"
            >
              Obtenir un devis gratuit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        <Offers />

        {/* Ce qui est toujours inclus */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
                Toujours inclus
              </span>
              <h2 className="text-3xl font-bold text-[var(--fg)]">
                Quel que soit votre budget
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]"
                >
                  <span className="w-5 h-5 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-sm text-[var(--fg-muted)]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="processus">
          <Process />
        </div>

        <FAQ />

        {/* CTA final */}
        <section className="py-16 px-6 text-center">
          <p className="text-[var(--fg-muted)] mb-6">
            Prêt à démarrer ? Un devis gratuit et sans engagement sous 48h.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_var(--accent-glow)]"
          >
            Démarrer un projet
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </main>
    </>
  );
}
