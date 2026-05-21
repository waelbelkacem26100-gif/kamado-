"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Comprendre",
    duration: "Jour 1 — Appel découverte 30 min",
    description: "Ton business, ta cible, tes objectifs. On ne code pas avant d'avoir compris où tu veux aller.",
  },
  {
    number: "02",
    title: "Concevoir",
    duration: "Jours 2-5 — Maquette Figma sur-mesure",
    description: "Maquettes et UX pensés conversion. Chaque décision visuelle guide vers l'action.",
  },
  {
    number: "03",
    title: "Construire",
    duration: "Semaines 2-4 — Développement & tests",
    description: "Code propre, performant, évolutif. La bonne techno pour ton besoin, pas la plus trendy.",
  },
  {
    number: "04",
    title: "Lancer",
    duration: "Semaine 5 — Mise en ligne & formation",
    description: "SEO, analytics, optimisation continue. Le lancement est le début, pas la fin.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Notre méthode
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            Comment on travaille
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
        >
          {/* Ligne de connexion desktop */}
          <div
            className="hidden md:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px"
            style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              custom={i}
              className="relative flex flex-col items-center md:items-start text-center md:text-left"
            >
              {/* Numéro */}
              <div className="w-16 h-16 rounded-2xl border border-[var(--accent)]/40 bg-[var(--accent-glow)] flex items-center justify-center mb-5 relative z-10">
                <span className="text-xl font-bold text-[var(--accent)]">{step.number}</span>
              </div>

              <p className="text-[10px] font-semibold text-[var(--accent)] uppercase tracking-widest mb-1.5">{step.duration}</p>
              <h3 className="text-lg font-semibold text-[var(--fg)] mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
