import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/sections/ContactForm";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Démarrez votre projet | Kama Agency",
  description:
    "Parlez-nous de votre projet web. Devis gratuit, réponse sous 48h. Site vitrine, Shopify, SaaS ou SEO — on a la solution.",
  alternates: { canonical: `${SITE_URL}/contact/` },
  openGraph: {
    title: "Contact — Démarrez votre projet | Kama Agency",
    description:
      "Remplissez le formulaire et recevez votre devis personnalisé sous 48h. Projet web, Shopify ou SaaS — on vous répond rapidement.",
    url: `${SITE_URL}/contact/`,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-2">
        <nav className="flex items-center gap-2 text-sm text-[var(--fg-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          <span className="text-[var(--fg)]">Contact</span>
        </nav>
      </div>
      <ContactForm />
    </main>
  );
}
