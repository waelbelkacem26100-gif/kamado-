import type { Metadata } from "next";
import Link from "next/link";
import Offers from "@/components/sections/Offers";
import Process from "@/components/sections/Process";
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

export default function TarifsPage() {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-2">
        <nav className="flex items-center gap-2 text-sm text-[var(--fg-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          <span className="text-[var(--fg)]">Tarifs</span>
        </nav>
      </div>
      <Offers />
      <Process />
    </main>
  );
}
