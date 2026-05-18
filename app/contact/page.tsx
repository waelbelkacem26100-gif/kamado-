import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/sections/ContactForm";
import { SITE_URL, SITE_NAME, CONTACT } from "@/lib/constants";

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

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 rue Étienne Dolet",
    addressLocality: "Romans-sur-Isère",
    postalCode: "26100",
    addressCountry: "FR",
  },
  sameAs: [CONTACT.linkedin, CONTACT.twitter],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact/` },
  ],
};

const promises = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Réponse sous 48h",
    desc: "On s'engage à vous répondre avec une proposition concrète, pas un email générique.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Devis 100% gratuit",
    desc: "L'appel de découverte et le devis sont gratuits et sans engagement de votre part.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Disponibles France entière",
    desc: "100% remote. Nous travaillons avec des clients de Paris à Marseille et partout en France.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-16 px-6">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
              style={{ background: "var(--accent)", top: "-10%", left: "20%", opacity: 0.08 }}
            />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <nav className="flex items-center justify-center gap-2 text-sm text-[var(--fg-muted)] mb-8">
              <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span className="text-[var(--fg)]">Contact</span>
            </nav>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-5">
              Démarrons ensemble
            </span>
            <h1 className="text-section font-bold text-[var(--fg)] mb-6">
              Votre projet mérite
              <br />
              <span className="text-[var(--accent)] accent-glow">mieux qu'un template</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto mb-12">
              Décrivez votre projet en quelques lignes. On vous répond sous 48h avec
              une proposition concrète et un devis transparent.
            </p>

            {/* Promesses */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {promises.map((p) => (
                <div
                  key={p.title}
                  className="flex flex-col items-center text-center p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/15 border border-[var(--accent)]/25 text-[var(--accent)] flex items-center justify-center mb-3">
                    {p.icon}
                  </div>
                  <p className="text-sm font-semibold text-[var(--fg)] mb-1">{p.title}</p>
                  <p className="text-xs text-[var(--fg-muted)] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />

        {/* Info complémentaire */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                <h3 className="font-semibold text-[var(--fg)] mb-3">Nous contacter directement</h3>
                <p className="text-sm text-[var(--fg-muted)] mb-4">
                  Préférez-vous un échange direct ?
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-[var(--accent)] hover:underline font-medium"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                <h3 className="font-semibold text-[var(--fg)] mb-3">Notre localisation</h3>
                <p className="text-sm text-[var(--fg-muted)] mb-1">2 rue Étienne Dolet</p>
                <p className="text-sm text-[var(--fg-muted)]">26100 Romans-sur-Isère, France</p>
                <p className="text-xs text-[var(--fg-muted)] mt-3 italic">
                  Interventions partout en France — 100% remote
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
