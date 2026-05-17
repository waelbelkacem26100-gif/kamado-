import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { services, getService } from "@/lib/services";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import BackButton from "@/components/ui/BackButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/services/${service.slug}/`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${service.slug}/`,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/${service.slug}/`,
    areaServed: { "@type": "Country", name: "France" },
    serviceType: service.name,
    inLanguage: "fr-FR",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/#services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${SITE_URL}/services/${service.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="min-h-screen pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <BackButton fallback="/#services" label="Retour aux services" />
          </div>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--fg-muted)] mb-10" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-[var(--accent)] transition-colors">
              Accueil
            </Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
            <Link href="/#services" className="hover:text-[var(--accent)] transition-colors">
              Services
            </Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
            <span className="text-[var(--fg)]">{service.name}</span>
          </nav>

          {/* Header */}
          <header className="mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
              Service
            </span>
            <h1 className="text-section font-bold text-[var(--fg)] mb-6">
              {service.name}
            </h1>
            <p className="text-lead max-w-2xl">
              {service.intro}
            </p>
          </header>

          {/* Article */}
          <article className="space-y-10 mb-16">
            {service.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-[var(--fg)] mb-4">
                  {section.h2}
                </h2>
                <p className="text-base text-[var(--fg-muted)] leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </article>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              {service.faq.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
                >
                  <h3 className="text-base font-semibold text-[var(--fg)] mb-3">
                    {item.q}
                  </h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="p-8 md:p-12 rounded-3xl border border-[var(--accent)]/30 bg-[var(--surface)] text-center">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-4">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-[var(--fg-muted)] mb-8 max-w-xl mx-auto">
              Parlons de votre projet autour de {service.name.toLowerCase()}. On vous répond sous 48h avec une proposition concrète.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity duration-200 shadow-[0_0_30px_var(--accent-glow)]"
            >
              Démarrer un projet
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Autres services */}
          <div className="mt-16">
            <h2 className="text-lg font-semibold text-[var(--fg)] mb-6">
              Nos autres services
            </h2>
            <div className="flex flex-wrap gap-3">
              {services
                .filter((s) => s.slug !== service.slug)
                .slice(0, 6)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}/`}
                    className="px-4 py-2 rounded-full text-sm border border-[var(--border)] text-[var(--fg-muted)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all duration-200"
                  >
                    {s.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
