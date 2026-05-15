"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Rapidité",
    description:
      "Grâce à l'IA et nos processus rodés, nous livrons 3x plus vite que la moyenne du marché — sans sacrifier la qualité.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Performance",
    description:
      "Chaque site est optimisé SEO, Core Web Vitals, et conversion dès la conception. Pas en rattrapage.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Sur-mesure",
    description:
      "Aucun template. Chaque projet est construit pour votre business, vos objectifs et votre audience spécifique.",
  },
];

export default function ValueProp() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Pourquoi Nexivo
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            Ce qui nous différencie
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {values.map((val) => (
            <motion.div
              key={val.title}
              variants={fadeUp}
              className="group p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:bg-[var(--surface-hover)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-glow)] border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] mb-6">
                {val.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--fg)] mb-3">{val.title}</h3>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
