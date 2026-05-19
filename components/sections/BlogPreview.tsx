import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/blog";

export default function BlogPreview() {
  const preview = posts.slice(0, 3);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-3">
              Blog
            </span>
            <h2 className="text-section font-bold text-[var(--fg)]">
              Nos derniers articles
            </h2>
          </div>
          <Link
            href="/blog/"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
          >
            Tout voir
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:border-[var(--accent)]/30 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 left-3 text-xs font-semibold text-[var(--accent)] bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-[var(--fg-muted)] mb-3">
                  <time>{post.date}</time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-base font-semibold text-[var(--fg)] leading-snug mb-3 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)]">
                  Lire l&apos;article
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
          >
            Voir tous les articles
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
