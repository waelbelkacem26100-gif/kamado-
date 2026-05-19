import type { Metadata } from "next";
import Link from "next/link";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ValueProp from "@/components/sections/ValueProp";
import Offers from "@/components/sections/Offers";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos Services & Tarifs — Agence Web | Kama Agency",
  description:
    "Création de sites vitrine, boutiques Shopify, SaaS sur-mesure, SEO, webdesign et IA. Tarifs transparents, devis gratuit sous 48h.",
  alternates: { canonical: `${SITE_URL}/services/` },
  openGraph: {
    title: "Nos Services & Tarifs — Agence Web | Kama Agency",
    description:
      "Sites vitrine, Shopify, SaaS, SEO, webdesign et IA. Tarifs clairs, devis gratuit sous 48h.",
    url: `${SITE_URL}/services/`,
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
    { "@type": "ListItem", position: 2, name: "Nos Services", item: `${SITE_URL}/services/` },
  ],
};

const included = [
  "Devis gratuit et sans engagement",
  "Design sur-mesure, jamais de template",
  "SEO on-page inclus sur chaque livraison",
  "Responsive mobile & tablette",
  "Hébergement et mise en ligne inclus",
  "Formation à la gestion du contenu",
  "Support post-livraison 30 jours",
  "Code source vous appartient à 100%",
];

export default function ServicesPage() {
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
              className="absolute rounded-full blur-[130px]"
              style={{ width: 600, height: 600, background: "var(--accent)", top: "-10%", left: "20%", opacity: 0.07 }}
            />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <nav className="flex items-center justify-center gap-2 text-sm text-[var(--fg-muted)] mb-8">
              <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span className="text-[var(--fg)]">Nos Services</span>
            </nav>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-5">
              Services & Tarifs
            </span>
            <h1 className="text-section font-bold text-[var(--fg)] mb-6">
              Tout ce dont votre
              <br />
              <span className="text-[var(--accent)] accent-glow">business a besoin</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto mb-8">
              Du site vitrine au SaaS — chaque service conçu pour générer des résultats mesurables.
              Tarifs transparents, devis gratuit sous 48h.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {["6 services", "100% sur-mesure", "Livraison rapide", "SEO inclus", "Devis gratuit"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center text-xs text-[var(--fg-muted)] bg-[var(--surface)] border border-[var(--border)] px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
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

        {/* Services avec photos */}
        <ServicesGrid />

        {/* Ce qui est toujours inclus */}
        <section className="py-20 px-6 border-t border-[var(--border)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
                Toujours inclus
              </span>
              <h2 className="text-3xl font-bold text-[var(--fg)]">
                Quel que soit votre budget
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-xl border border-[var(--border)]"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(0,255,135,0.15)", color: "#00ff87" }}
                  >
                    ✓
                  </span>
                  <span className="text-sm text-[var(--fg-muted)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Différenciateurs */}
        <ValueProp />

        {/* Tarifs / Offres */}
        <Offers />

        {/* Notre process */}
        <Process />

        {/* FAQ */}
        <FAQ />

        {/* CTA final */}
        <section className="py-20 px-6 text-center">
          <div
            className="max-w-3xl mx-auto p-10 rounded-3xl border border-[var(--accent)]/20 relative overflow-hidden"
            style={{ background: "rgba(0,255,135,0.04)", backdropFilter: "blur(12px)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,255,135,0.08) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <span className="relative text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
              Votre projet
            </span>
            <h2 className="relative text-3xl font-bold text-[var(--fg)] mb-4">
              Prêt à démarrer ?
            </h2>
            <p className="relative text-[var(--fg-muted)] mb-8">
              Devis gratuit et personnalisé sous 48h. Aucun engagement.
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
