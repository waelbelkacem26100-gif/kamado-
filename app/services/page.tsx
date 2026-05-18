import type { Metadata } from "next";
import Link from "next/link";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ValueProp from "@/components/sections/ValueProp";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos Services — Agence Web | Kama Agency",
  description:
    "Création de sites vitrine, boutiques Shopify, SaaS sur-mesure, référencement SEO, webdesign et chatbot IA. Découvrez tous les services de Kama Agency.",
  alternates: { canonical: `${SITE_URL}/services/` },
  openGraph: {
    title: "Nos Services — Agence Web | Kama Agency",
    description:
      "Création de sites vitrine, boutiques Shopify, SaaS sur-mesure, SEO, webdesign et IA. Toutes nos expertises pour faire grandir votre business.",
    url: `${SITE_URL}/services/`,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-20 px-6">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
              style={{ background: "var(--accent)", top: "-10%", left: "20%", opacity: 0.08 }}
            />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <nav className="flex items-center justify-center gap-2 text-sm text-[var(--fg-muted)] mb-8">
              <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span className="text-[var(--fg)]">Services</span>
            </nav>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-5">
              Nos expertises
            </span>
            <h1 className="text-section font-bold text-[var(--fg)] mb-6">
              Tout ce dont votre
              <br />
              <span className="text-[var(--accent)] accent-glow">business a besoin</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto mb-8">
              Du site vitrine au SaaS, en passant par le SEO et l'IA — chaque service est conçu
              pour générer des résultats mesurables pour votre entreprise.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["17 services", "100% sur-mesure", "Livraison rapide", "SEO inclus"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 text-xs text-[var(--fg-muted)] bg-[var(--surface)] border border-[var(--border)] px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <ServicesGrid />
        <ValueProp />

        {/* CTA */}
        <section className="py-20 px-6 text-center">
          <p className="text-[var(--fg-muted)] mb-6 text-lg">
            Vous ne savez pas quelle solution vous convient le mieux ?
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_var(--accent-glow)]"
          >
            Discutons de votre projet
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </main>
    </>
  );
}
