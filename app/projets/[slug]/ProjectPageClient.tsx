"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export default function ProjectPageClient({ project, prevProject, nextProject }: Props) {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero projet */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden flex items-end">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 px-6 pb-16 max-w-7xl mx-auto w-full"
        >
          <Link
            href="/#projets"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-6 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Retour
          </Link>
          <h1 className="text-section font-bold text-white">{project.name}</h1>
          <p className="text-lead text-white/70 mt-3">{project.tagline}</p>
        </motion.div>
      </section>

      {/* Contenu */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Méta */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 pb-16 border-b border-[var(--border)]"
          >
            {[
              { label: "Rôle", value: project.role },
              { label: "Durée", value: project.duration },
              { label: "Lien", value: "Voir le projet", href: project.url },
              { label: "Stack", value: project.stack.slice(0, 2).join(", ") },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeUp}>
                <p className="text-xs text-[var(--fg-muted)] uppercase tracking-widest mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--accent)] hover:underline">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-[var(--fg)]">{item.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Stack complète */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="mb-16">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--fg-muted)]">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="space-y-16"
          >
            {[
              { label: "Le projet", content: project.description },
              { label: "Le défi", content: project.challenge },
              { label: "La solution", content: project.solution },
              { label: "Le résultat", content: project.result },
            ].map((block) => (
              <motion.div key={block.label} variants={fadeUp}>
                <h2 className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-4">{block.label}</h2>
                <p className="text-lead leading-relaxed">{block.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Navigation projet */}
      <nav className="border-t border-[var(--border)] px-6 py-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          {prevProject ? (
            <Link href={`/projets/${prevProject.slug}`} className="group flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--fg-muted)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[var(--fg-muted)] mb-0.5">Précédent</p>
                <p className="text-sm font-medium text-[var(--fg)]">{prevProject.name}</p>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link href={`/projets/${nextProject.slug}`} className="group flex items-center gap-4 text-right ml-auto">
              <div>
                <p className="text-xs text-[var(--fg-muted)] mb-0.5">Suivant</p>
                <p className="text-sm font-medium text-[var(--fg)]">{nextProject.name}</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--fg-muted)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ) : <div />}
        </div>
      </nav>
    </div>
  );
}
