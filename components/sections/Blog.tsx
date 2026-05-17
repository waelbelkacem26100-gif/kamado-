"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";
import { posts } from "@/lib/blog";


export default function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Blog & Ressources
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            Nos derniers articles
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead mt-4 max-w-xl mx-auto">
            Conseils, décryptages et guides pratiques pour faire les bons choix digitaux.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <motion.article
              key={post.slug}
              variants={fadeUp}
              className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:border-[var(--accent)]/40 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300"
            >
              {/* Image thumbnail avec parallax hover */}
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Badge catégorie */}
                <span className="absolute top-4 left-4 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-[var(--accent)]/30">
                  {post.category}
                </span>
                {/* Temps de lecture */}
                <span className="absolute bottom-3 right-4 text-xs text-white/70">
                  {post.readTime}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-[var(--fg)] leading-snug mb-3 group-hover:text-[var(--accent)] transition-colors duration-300 flex-1">
                  {post.title}
                </h3>

                <p className="text-xs text-[var(--fg-muted)] leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <time className="text-xs text-[var(--fg-muted)]">{post.date}</time>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:gap-2.5 transition-all duration-200"
                  >
                    Lire l&apos;article
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA vers la page blog complète */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mt-12"
        >
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[var(--fg)] border border-[var(--border)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all duration-200"
          >
            Voir tous les articles
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
