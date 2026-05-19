"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const reviews = [
  {
    name: "Julien R.",
    company: "Couvetoile",
    text: "2,4× plus de leads qualifiés. Livraison en 4 semaines, délai tenu.",
    metric: "×2,4",
    metricLabel: "leads",
    accent: "#00ff87",
  },
  {
    name: "Camille D.",
    company: "BotanicShop",
    text: "Tunnel d'achat repensé, +38% de CA le mois suivant la mise en ligne.",
    metric: "+38%",
    metricLabel: "CA",
    accent: "#a855f7",
  },
  {
    name: "Alexandre M.",
    company: "TechStart",
    text: "SaaS livré en 12 semaines, solide, scalable. Un vrai partenaire technique.",
    metric: "12sem",
    metricLabel: "délai",
    accent: "#3b82f6",
  },
  {
    name: "Nadia B.",
    company: "AgriTech Sud",
    text: "Première page Google sur 3 mots-clés. Trafic organique doublé en 4 mois.",
    metric: "×2",
    metricLabel: "trafic",
    accent: "#f97316",
  },
];

export default function Reviews() {
  return (
    <section className="py-20 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="flex items-end justify-between mb-10 gap-4 flex-wrap"
        >
          <div>
            <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-3">
              Avis clients
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[var(--fg)]">
              Ce qu&apos;ils disent de nous
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-sm text-[var(--fg-muted)]">
            4 projets · 4 résultats mesurables
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative p-5 rounded-2xl border border-[var(--border)] overflow-hidden group cursor-default"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: r.accent }} />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${r.accent}10 0%, transparent 70%)` }}
              />

              {/* Metric */}
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-3xl font-black" style={{ color: r.accent }}>{r.metric}</span>
                <span className="text-xs font-medium" style={{ color: r.accent, opacity: 0.7 }}>{r.metricLabel}</span>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill={r.accent}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-4">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-[var(--border)] pt-3">
                <p className="text-xs font-semibold text-[var(--fg)]">{r.name}</p>
                <p className="text-[10px] text-[var(--fg-muted)]" style={{ color: r.accent }}>{r.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
