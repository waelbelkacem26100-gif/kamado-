import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { cities, getCity, cityJsonLd } from "@/lib/cities";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const data = getCity(city);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `${SITE_URL}/agence-web/${data.slug}/` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${SITE_URL}/agence-web/${data.slug}/`,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
    },
  };
}

const serviceLinks = [
  { label: "Création site vitrine", href: "/services/creation-site-vitrine/", desc: "Site professionnel livré en 3-5 semaines" },
  { label: "Boutique Shopify", href: "/services/boutique-shopify/", desc: "E-commerce clé en main qui vend" },
  { label: "Référencement SEO", href: "/services/referencement-seo/", desc: "Première page Google en 3-6 mois" },
  { label: "SaaS sur-mesure", href: "/services/saas-sur-mesure/", desc: "Application web complexe, livrée vite" },
  { label: "Webdesign sur-mesure", href: "/services/webdesign-sur-mesure/", desc: "Design premium qui convertit" },
  { label: "Chatbot & IA", href: "/services/chatbot-ia/", desc: "Automatisation intelligente de votre business" },
];

const stats = [
  { value: "40+", label: "Projets livrés" },
  { value: "95+", label: "Score Lighthouse" },
  { value: "3-5 sem.", label: "Délai moyen" },
  { value: "100%", label: "Satisfaction client" },
];

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const data = getCity(city);
  if (!data) notFound();

  const ldOrg = cityJsonLd(data);

  const ldFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const ldBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: `Agence web ${data.name}`, item: `${SITE_URL}/agence-web/${data.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
              style={{ background: "var(--accent)", top: "-10%", right: "-5%", opacity: 0.07 }}
            />
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <nav className="flex items-center gap-2 text-sm text-[var(--fg-muted)] mb-10" aria-label="Fil d&apos;Ariane">
              <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              <span className="text-[var(--fg)]">Agence web {data.name}</span>
            </nav>

            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
              {data.name} · {data.region}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--fg)] leading-tight mb-6">
              {data.h1}
            </h1>
            <p className="text-lg text-[var(--fg-muted)] leading-relaxed mb-10 max-w-2xl">
              {data.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_var(--accent-glow)]"
              >
                Démarrer mon projet
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link
                href="/projets/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[var(--fg)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-[var(--accent)] mb-1">{s.value}</p>
                <p className="text-xs text-[var(--fg-muted)] uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contexte local */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
              Ancrage local
            </span>
            <h2 className="text-3xl font-bold text-[var(--fg)] mb-6">
              Kama Agency à {data.name}
            </h2>
            <p className="text-base text-[var(--fg-muted)] leading-relaxed">
              {data.context}
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
                Nos services
              </span>
              <h2 className="text-3xl font-bold text-[var(--fg)]">
                Ce que nous faisons à {data.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/40 transition-all duration-200"
                >
                  <p className="text-base font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mb-2">
                    {s.label}
                  </p>
                  <p className="text-sm text-[var(--fg-muted)]">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
                FAQ
              </span>
              <h2 className="text-3xl font-bold text-[var(--fg)]">
                Questions fréquentes — {data.name}
              </h2>
            </div>
            <div className="space-y-4">
              {data.faq.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-colors duration-300"
                >
                  <h3 className="text-base font-semibold text-[var(--fg)] mb-3 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      ?
                    </span>
                    {item.q}
                  </h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed pl-8">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center p-10 md:p-14 rounded-3xl border border-[var(--accent)]/20 bg-[var(--surface)] relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, var(--accent-glow) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <span className="relative text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
              Démarrons ensemble
            </span>
            <h2 className="relative text-3xl font-bold text-[var(--fg)] mb-4">
              Un projet web à {data.name} ?
            </h2>
            <p className="relative text-[var(--fg-muted)] mb-8 max-w-xl mx-auto">
              Devis gratuit sous 48h. Premier appel de découverte offert. Aucun engagement.
            </p>
            <Link
              href="/contact/"
              className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_var(--accent-glow)]"
            >
              Obtenir un devis gratuit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
