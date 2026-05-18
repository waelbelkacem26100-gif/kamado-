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

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-2">
        <nav className="flex items-center gap-2 text-sm text-[var(--fg-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          <span className="text-[var(--fg)]">Services</span>
        </nav>
      </div>
      <ServicesGrid />
      <ValueProp />
    </main>
  );
}
