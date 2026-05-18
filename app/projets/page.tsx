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

export default function ProjetsPage() {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-2">
        <nav className="flex items-center gap-2 text-sm text-[var(--fg-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          <span className="text-[var(--fg)]">Réalisations</span>
        </nav>
      </div>
      <Projects />
    </main>
  );
}
