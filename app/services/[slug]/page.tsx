import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

const serviceImages: Record<string, string> = {
  "creation-site-vitrine":
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=85&auto=format&fit=crop",
  "boutique-shopify":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85&auto=format&fit=crop",
  "refonte-de-site":
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=85&auto=format&fit=crop",
  "dropshipping":
    "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1200&q=85&auto=format&fit=crop",
  "webdesign-sur-mesure":
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85&auto=format&fit=crop",
  "ux-ui-design":
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=85&auto=format&fit=crop",
  "identite-visuelle":
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=85&auto=format&fit=crop",
  "referencement-seo":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85&auto=format&fit=crop",
  "optimisation-core-web-vitals":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format&fit=crop",
  "analytics-et-suivi":
    "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=1200&q=85&auto=format&fit=crop",
  "saas-sur-mesure":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85&auto=format&fit=crop",
  "shopify-liquid":
    "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=1200&q=85&auto=format&fit=crop",
  "wordpress":
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=85&auto=format&fit=crop",
  "nextjs-et-react":
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=85&auto=format&fit=crop",
  "chatbot-ia":
    "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85&auto=format&fit=crop",
  "automatisation-ia":
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=85&auto=format&fit=crop",
  "integration-api-ia":
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=85&auto=format&fit=crop",
};

const defaultSteps = [
  { num: "01", title: "Découverte", desc: "Appel de 30 min pour comprendre votre business, vos objectifs et vos contraintes." },
  { num: "02", title: "Proposition", desc: "Devis détaillé, planning et roadmap adaptés à vos besoins spécifiques." },
  { num: "03", title: "Création", desc: "Notre équipe travaille en itérations courtes avec des points réguliers." },
  { num: "04", title: "Livraison", desc: "Mise en ligne, formation et support post-livraison pendant 30 jours." },
];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const imgSrc = serviceImages[slug] ?? serviceImages["creation-site-vitrine"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "2 rue Étienne Dolet",
        addressLocality: "Romans-sur-Isère",
        postalCode: "26100",
        addressCountry: "FR",
      },
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
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${SITE_URL}/services/${service.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main>
        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden pt-32 pb-0 px-6">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute w-[700px] h-[700px] rounded-full blur-[150px]"
              style={{ background: "var(--accent)", top: "-20%", right: "-10%", opacity: 0.07 }}
            />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="mb-6">
              <BackButton fallback="/services/" label="Retour aux services" />
            </div>

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[var(--fg-muted)] mb-10" aria-label="Fil d'Ariane">
              <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <Link href="/services/" className="hover:text-[var(--accent)] transition-colors">Services</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span className="text-[var(--fg)]">{service.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
                  Service
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--fg)] leading-tight mb-6">
                  {service.name}
                </h1>
                <p className="text-lg text-[var(--fg-muted)] leading-relaxed mb-8">
                  {service.shortDesc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact/"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_var(--accent-glow)]"
                  >
                    Démarrer ce projet
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/tarifs/"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[var(--fg)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors"
                  >
                    Voir les tarifs
                  </Link>
                </div>
              </div>

              {/* Image hero */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.03]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                  </div>
                  <div className="flex-1 mx-3 h-4 bg-white/[0.05] rounded-full" />
                </div>
                <div className="relative aspect-[16/9]">
                  <Image
                    src={imgSrc}
                    alt={`${service.name} — Kama Agency`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 600px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Intro ─── */}
        <section className="py-16 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[var(--fg-muted)] leading-relaxed">
              {service.intro}
            </p>
          </div>
        </section>

        {/* ─── Article ─── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contenu principal */}
              <div className="lg:col-span-2 space-y-12">
                {service.sections.map((section, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/20 px-2.5 py-1 rounded-full">
                        0{i + 1}
                      </span>
                      <h2 className="text-xl font-bold text-[var(--fg)]">
                        {section.h2}
                      </h2>
                    </div>
                    <p className="text-base text-[var(--fg-muted)] leading-relaxed pl-10">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Sidebar sticky */}
              <aside className="space-y-4">
                <div className="sticky top-28 space-y-4">
                  <div className="p-6 rounded-2xl border border-[var(--accent)]/25 bg-[var(--surface)]">
                    <h3 className="text-sm font-bold text-[var(--fg)] mb-4">
                      Prêt à démarrer ?
                    </h3>
                    <p className="text-xs text-[var(--fg-muted)] mb-5 leading-relaxed">
                      Devis gratuit, réponse sous 48h, sans engagement.
                    </p>
                    <Link
                      href="/contact/"
                      className="block w-full text-center px-5 py-2.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity"
                    >
                      Obtenir un devis
                    </Link>
                  </div>

                  <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                    <h3 className="text-xs font-bold text-[var(--fg)] mb-3">Autres services</h3>
                    <ul className="space-y-1.5">
                      {services
                        .filter((s) => s.slug !== slug)
                        .slice(0, 5)
                        .map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}/`}
                              className="text-xs text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                            >
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                              {s.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ─── Process ─── */}
        <section className="py-20 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
                Notre processus
              </span>
              <h2 className="text-3xl font-bold text-[var(--fg)]">
                Comment on travaille ensemble
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {defaultSteps.map((step) => (
                <div
                  key={step.num}
                  className="relative p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] group hover:border-[var(--accent)]/40 transition-colors duration-300"
                >
                  <span className="text-4xl font-black text-[var(--accent)]/15 group-hover:text-[var(--accent)]/25 transition-colors mb-3 block">
                    {step.num}
                  </span>
                  <h3 className="text-base font-bold text-[var(--fg)] mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
                FAQ
              </span>
              <h2 className="text-3xl font-bold text-[var(--fg)]">
                Questions fréquentes
              </h2>
            </div>
            <div className="space-y-4">
              {service.faq.map((item, i) => (
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
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed pl-8">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA final ─── */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center p-10 md:p-14 rounded-3xl border border-[var(--accent)]/20 bg-[var(--surface)] relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 60% at 50% 0%, var(--accent-glow) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <span className="relative text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
              Démarrons ensemble
            </span>
            <h2 className="relative text-3xl font-bold text-[var(--fg)] mb-4">
              Un projet de {service.name.toLowerCase()} ?
            </h2>
            <p className="relative text-[var(--fg-muted)] mb-8 max-w-xl mx-auto">
              On vous répond sous 48h avec une proposition concrète et un devis détaillé, adapté à votre projet.
            </p>
            <Link
              href="/contact/"
              className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_var(--accent-glow)]"
            >
              Démarrer mon projet
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ─── Autres services ─── */}
        <section className="pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg font-semibold text-[var(--fg)] mb-6">Nos autres services</h2>
            <div className="flex flex-wrap gap-3">
              {services
                .filter((s) => s.slug !== slug)
                .slice(0, 8)
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
        </section>
      </main>
    </>
  );
}
