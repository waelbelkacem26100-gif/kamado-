import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { posts, getPost } from "@/lib/blog";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import BackButton from "@/components/ui/BackButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}/` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}/`,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    url: `${SITE_URL}/blog/${post.slug}/`,
    inLanguage: "fr-FR",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <BackButton fallback="/blog/" label="Retour au blog" />
          </div>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--fg-muted)] mb-10">
            <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            <Link href="/blog/" className="hover:text-[var(--accent)] transition-colors">Blog</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            <span className="text-[var(--fg)] line-clamp-1">{post.category}</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--accent-glow)] border border-[var(--accent)]/20">
                {post.category}
              </span>
              <span className="text-xs text-[var(--fg-muted)]">{post.readTime} de lecture</span>
              <span className="text-xs text-[var(--fg-muted)]">·</span>
              <time className="text-xs text-[var(--fg-muted)]">{post.date}</time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--fg)] leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-[var(--fg-muted)] leading-relaxed border-l-2 border-[var(--accent)] pl-5">
              {post.intro}
            </p>
          </header>

          {/* Article */}
          <article className="space-y-10 mb-16">
            {post.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-[var(--fg)] mb-4">{section.h2}</h2>
                <p className="text-base text-[var(--fg-muted)] leading-relaxed">{section.body}</p>
              </div>
            ))}
          </article>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-8">Questions fréquentes</h2>
            <div className="space-y-5">
              {post.faq.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                  <h3 className="text-base font-semibold text-[var(--fg)] mb-3">{item.q}</h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="p-8 rounded-3xl border border-[var(--accent)]/30 bg-[var(--surface)] text-center">
            <h2 className="text-xl font-bold text-[var(--fg)] mb-3">Un projet en tête ?</h2>
            <p className="text-[var(--fg-muted)] text-sm mb-6 max-w-md mx-auto">
              Discutons de votre projet. On vous répond sous 48h avec une proposition concrète.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_var(--accent-glow)]"
            >
              Démarrer un projet
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Liens externes — ressources recommandées */}
          {post.externalLinks && post.externalLinks.length > 0 && (
            <section className="mb-10">
              <h2 className="text-base font-semibold text-[var(--fg)] mb-4">Ressources recommandées</h2>
              <div className="space-y-3">
                {post.externalLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface-hover)] transition-all duration-200"
                  >
                    <svg className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                        {link.label}
                      </p>
                      <p className="text-xs text-[var(--fg-muted)] mt-0.5">{link.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Other posts */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-semibold text-[var(--fg)]">Autres articles</h2>
              <Link href="/blog/" className="text-xs font-semibold text-[var(--accent)] hover:underline">
                Voir tous →
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {posts.filter((p) => p.slug !== post.slug).map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}/`}
                  className="text-sm px-4 py-2 rounded-full border border-[var(--border)] text-[var(--fg-muted)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all duration-200">
                  {p.category} — {p.title.substring(0, 40)}...
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
