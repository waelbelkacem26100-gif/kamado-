import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/blog";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog Agence Web — SEO, Développement & E-commerce | Kama Agency",
  description:
    "Le blog agence web de Kama Agency : conseils pratiques en SEO, développement web et e-commerce pour booster votre présence en ligne et convertir plus de clients.",
  alternates: { canonical: `${SITE_URL}/blog/` },
  openGraph: {
    title: "Blog Agence Web — SEO, Développement & E-commerce | Kama Agency",
    description:
      "Le blog agence web de Kama Agency : conseils pratiques en SEO, développement web et e-commerce pour booster votre présence en ligne et convertir plus de clients.",
    url: `${SITE_URL}/blog/`,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
  },
};

const externalResources = [
  {
    label: "Google Search Console",
    url: "https://search.google.com/search-console",
    description: "Suivez vos performances SEO et détectez les erreurs d'indexation.",
    icon: "G",
    color: "#4285f4",
  },
  {
    label: "Google PageSpeed Insights",
    url: "https://pagespeed.web.dev",
    description: "Testez la vitesse de chargement et les Core Web Vitals de votre site.",
    icon: "P",
    color: "#34a853",
  },
  {
    label: "web.dev",
    url: "https://web.dev",
    description: "Les guides officiels de Google pour la performance et le SEO technique.",
    icon: "W",
    color: "#00bcd4",
  },
  {
    label: "Schema.org",
    url: "https://schema.org",
    description: "La référence pour les données structurées et le balisage sémantique.",
    icon: "S",
    color: "#e91e63",
  },
  {
    label: "Moz Blog",
    url: "https://moz.com/blog",
    description: "Veille SEO de référence mondiale — études et guides avancés.",
    icon: "M",
    color: "#7c3aed",
  },
  {
    label: "Semrush Blog",
    url: "https://www.semrush.com/blog/",
    description: "Stratégies SEO, e-commerce et marketing digital par les experts Semrush.",
    icon: "S",
    color: "#ff6b35",
  },
];

const categoryColors: Record<string, string> = {
  SEO: "#00e5ff",
  "E-commerce": "#10b981",
  Développement: "#a855f7",
  Tarifs: "#f97316",
};

export default function BlogPage() {
  // Trier par date décroissante — le plus récent en featured
  const sorted = [...posts].reverse();
  const [featured, ...rest] = sorted;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog Kama Agency — Agence Web",
    description:
      "Conseils pratiques en SEO, développement web et e-commerce par l'agence Kama Agency.",
    url: `${SITE_URL}/blog/`,
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    hasPart: posts.map((p) => ({
      "@type": "Article",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}/`,
      datePublished: p.date,
      description: p.metaDescription,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Articles du blog Kama Agency",
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/blog/${p.slug}/`,
      name: p.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="min-h-screen pt-28 pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--fg-muted)] mb-10">
            <Link href="/" className="hover:text-[var(--accent)] transition-colors">
              Accueil
            </Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
            <span className="text-[var(--fg)]">Blog</span>
          </nav>

          {/* Header SEO */}
          <header className="mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
              Blog &amp; Ressources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mb-6 leading-tight">
              Blog agence web — Conseils SEO,<br className="hidden md:block" />
              Développement &amp; E-commerce
            </h1>
            <p className="text-lg text-[var(--fg-muted)] max-w-2xl leading-relaxed mb-8">
              Bienvenue sur le blog agence web de Kama Agency. Chaque semaine, nous partageons des
              conseils concrets en{" "}
              <Link href="/services/referencement-seo/" className="text-[var(--accent)] hover:underline">
                référencement SEO
              </Link>
              , en{" "}
              <Link href="/services/creation-site-vitrine/" className="text-[var(--accent)] hover:underline">
                création de site web
              </Link>{" "}
              et en stratégie e-commerce — basés sur nos projets réels avec des clients français.
            </p>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(categoryColors).map(([cat, color]) => (
                <span
                  key={cat}
                  className="text-xs font-semibold px-3 py-1 rounded-full border"
                  style={{
                    color,
                    background: `${color}18`,
                    borderColor: `${color}35`,
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </header>

          {/* Article à la une */}
          <section className="mb-16" aria-label="Article à la une">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-[var(--fg-muted)] mb-6">
              Article à la une
            </h2>
            <Link
              href={`/blog/${featured.slug}/`}
              className="group grid md:grid-cols-2 gap-0 rounded-3xl border border-[var(--border)] overflow-hidden hover:border-[var(--accent)]/40 hover:shadow-[0_0_50px_var(--accent-glow)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={featured.image}
                    alt={`Illustration article : ${featured.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 bg-[var(--surface)] flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{
                      color: categoryColors[featured.category] ?? "var(--accent)",
                      background: `${categoryColors[featured.category] ?? "var(--accent)"}18`,
                      borderColor: `${categoryColors[featured.category] ?? "var(--accent)"}35`,
                    }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-xs text-[var(--fg-muted)]">{featured.readTime} de lecture</span>
                  <span className="text-xs text-[var(--fg-muted)]">·</span>
                  <time className="text-xs text-[var(--fg-muted)]">{featured.date}</time>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--fg)] leading-snug mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {featured.title}
                </h3>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] group-hover:gap-3 transition-all duration-200">
                  Lire l&apos;article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </section>

          {/* Grille des autres articles */}
          <section className="mb-20" aria-label="Tous les articles">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-[var(--fg-muted)] mb-6">
              Tous les articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rest.map((post) => (
                <article key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:border-[var(--accent)]/40 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300 h-full"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                        <Image
                          src={post.image}
                          alt={`Illustration : ${post.title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span
                        className="absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm"
                        style={{
                          color: categoryColors[post.category] ?? "var(--accent)",
                          background: `${categoryColors[post.category] ?? "#00e5ff"}30`,
                          borderColor: `${categoryColors[post.category] ?? "#00e5ff"}40`,
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="absolute bottom-3 right-4 text-xs text-white/70">
                        {post.readTime}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-base font-semibold text-[var(--fg)] leading-snug mb-3 group-hover:text-[var(--accent)] transition-colors duration-300 flex-1">
                        {post.title}
                      </h3>
                      <p className="text-xs text-[var(--fg-muted)] leading-relaxed mb-5 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <time className="text-xs text-[var(--fg-muted)]">{post.date}</time>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] group-hover:gap-2.5 transition-all duration-200">
                          Lire
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {/* Ressources externes — signaux d'autorité */}
          <section className="mb-20" aria-label="Ressources recommandées">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
              <h2 className="text-xl font-bold text-[var(--fg)] mb-2">
                Ressources recommandées
              </h2>
              <p className="text-sm text-[var(--fg-muted)] mb-8 max-w-xl">
                Les outils et références que nous utilisons au quotidien chez Kama Agency pour
                optimiser les sites de nos clients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {externalResources.map((res) => (
                  <a
                    key={res.url}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface-hover)] transition-all duration-200"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: res.color }}
                    >
                      {res.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mb-1">
                        {res.label}
                        <svg
                          className="inline-block ml-1 opacity-50"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </p>
                      <p className="text-xs text-[var(--fg-muted)] leading-relaxed">
                        {res.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* CTA interne */}
          <section
            className="rounded-3xl border border-[var(--accent)]/30 bg-[var(--surface)] p-10 text-center"
            aria-label="Contactez Kama Agency"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
              Passez à l&apos;action
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-4">
              Prêt à booster votre présence en ligne ?
            </h2>
            <p className="text-[var(--fg-muted)] max-w-lg mx-auto mb-8 text-sm leading-relaxed">
              Nos conseils sont gratuits, mais l&apos;expertise qui les applique fait la différence.
              Discutons de votre projet — réponse sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_var(--accent-glow)]"
              >
                Démarrer un projet
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[var(--fg)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors"
              >
                Voir nos services
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
