"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";
import type { Project } from "@/lib/projects";

const TECH_COLORS: Record<string, string> = {
  "Next.js": "#ffffff",
  "Next.js 14": "#ffffff",
  "Next.js 15": "#ffffff",
  "React": "#61dafb",
  "TypeScript": "#3178c6",
  "Tailwind CSS": "#38bdf8",
  "Shopify": "#96bf48",
  "Liquid": "#96bf48",
  "Shopify Liquid": "#96bf48",
  "WordPress": "#21759b",
  "Supabase": "#3ecf8e",
  "Prisma": "#2d3748",
  "Stripe": "#635bff",
  "Claude API": "#d97706",
  "Vercel": "#ffffff",
  "Resend": "#ffffff",
  "Klaviyo": "#1a1a1a",
  "Meta Pixel": "#1877f2",
  "Google Analytics 4": "#e37400",
  "SEO": "#00b894",
  "CRO": "#e17055",
  "JavaScript": "#f7df1e",
  "CSS custom": "#264de4",
};

function getTechColor(tech: string): string {
  return TECH_COLORS[tech] ?? "var(--accent)";
}
import BackButton from "@/components/ui/BackButton";

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
          <div className="mb-6">
            <BackButton fallback="/projets/" label="Retour aux projets" variant="light" />
          </div>
          <h1 className="text-section font-bold text-white">{project.name}</h1>
          <p className="text-lead text-white/70 mt-3">{project.tagline}</p>
        </motion.div>
      </section>

      {/* Meta bar */}
      <section className="py-12 px-6 border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Rôle", value: project.role },
              { label: "Durée", value: project.duration },
              { label: "Lien", value: "Voir le projet →", href: project.url },
              { label: "Stack", value: project.stack.slice(0, 3).join(", ") },
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
        </div>
      </section>

      {/* Métriques clés */}
      {project.metrics && (
        <section className="py-12 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {project.metrics.map((m) => (
                <motion.div
                  key={m.label}
                  variants={fadeUp}
                  className="text-center p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
                >
                  <p className="text-3xl font-black text-[var(--accent)] mb-1">{m.value}</p>
                  <p className="text-xs text-[var(--fg-muted)]">{m.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Image principale */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.4)] aspect-video">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 960px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {[
              { label: "Le projet", content: project.description },
              { label: "Le défi", content: project.challenge },
              { label: "La solution", content: project.solution },
              { label: "Le résultat", content: project.result },
            ].map((block) => (
              <motion.div key={block.label} variants={fadeUp}>
                <h2 className="text-xs font-bold tracking-widest uppercase text-[var(--accent)] mb-3">{block.label}</h2>
                <p className="text-base text-[var(--fg-muted)] leading-relaxed">{block.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stack complète + Features */}
      <section className="py-16 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Stack */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport}>
            <motion.h2 variants={fadeUp} className="text-sm font-bold text-[var(--fg)] mb-5">Stack technique</motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {project.stack.map((tech) => {
                const color = getTechColor(tech);
                return (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border bg-[var(--surface)]"
                    style={{ borderColor: `${color}30`, color: "var(--fg-muted)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                    {tech}
                  </span>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Features */}
          {project.features && (
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport}>
              <motion.h2 variants={fadeUp} className="text-sm font-bold text-[var(--fg)] mb-5">Fonctionnalités livrées</motion.h2>
              <motion.ul variants={staggerContainer} className="space-y-2.5">
                {project.features.map((feat) => (
                  <motion.li key={feat} variants={fadeUp} className="flex items-start gap-2.5 text-sm text-[var(--fg-muted)]">
                    <svg className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feat}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </div>
      </section>

      {/* Timeline du projet */}
      {project.timeline && project.timeline.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.div variants={fadeUp} className="mb-10">
                <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
                  Chronologie
                </span>
                <h2 className="text-2xl font-bold text-[var(--fg)]">Déroulé du projet</h2>
              </motion.div>

              <div className="relative">
                {/* Ligne horizontale desktop */}
                <div className="hidden md:block absolute top-5 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)", opacity: 0.3 }} aria-hidden="true" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {project.timeline.map((phase, i) => (
                    <motion.div key={i} variants={fadeUp} custom={i} className="relative">
                      {/* Bullet */}
                      <div className="w-10 h-10 rounded-xl border border-[var(--accent)]/40 bg-[var(--bg)] flex items-center justify-center mb-4 relative z-10">
                        <span className="text-xs font-bold text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-full mb-2">
                        {phase.duration}
                      </span>
                      <h3 className="text-sm font-bold text-[var(--fg)] mb-1.5">{phase.phase}</h3>
                      <p className="text-xs text-[var(--fg-muted)] leading-relaxed">{phase.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto p-10 rounded-3xl border border-[var(--accent)]/20 bg-[var(--surface)] relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, var(--accent-glow) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <h2 className="relative text-2xl font-bold text-[var(--fg)] mb-3">Vous voulez le même résultat ?</h2>
          <p className="relative text-[var(--fg-muted)] text-sm mb-6 max-w-md mx-auto">
            Discutons de votre projet. Devis gratuit, réponse sous 48h.
          </p>
          <Link
            href="/contact/"
            className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_var(--accent-glow)]"
          >
            Démarrer mon projet
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Navigation projet */}
      <nav className="border-t border-[var(--border)] px-6 py-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          {prevProject ? (
            <Link href={`/projets/${prevProject.slug}/`} className="group flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--fg-muted)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-[#050508] transition-all duration-300">
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
            <Link href={`/projets/${nextProject.slug}/`} className="group flex items-center gap-4 text-right ml-auto">
              <div>
                <p className="text-xs text-[var(--fg-muted)] mb-0.5">Suivant</p>
                <p className="text-sm font-medium text-[var(--fg)]">{nextProject.name}</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--fg-muted)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-[#050508] transition-all duration-300">
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
