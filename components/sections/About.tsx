"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, scaleIn, defaultViewport } from "@/lib/animations";

export default function About() {
  return (
    <section id="a-propos" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Photo placeholder */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0071e3]/20 to-[#1a1aff]/20 border border-[var(--border)] flex items-center justify-center">
            {/* Avatar SVG placeholder */}
            <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-auto opacity-30">
              <circle cx="100" cy="85" r="45" fill="currentColor" />
              <path d="M10 260c0-49.7 40.3-90 90-90s90 40.3 90 90" fill="currentColor" />
            </svg>
            <span className="absolute bottom-6 left-6 text-xs text-[var(--fg-muted)]">
              Photo à venir
            </span>
          </div>

          {/* Badges flottants */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -right-4 top-16 bg-[var(--surface)] backdrop-blur-xl border border-[var(--border)] rounded-2xl px-4 py-3"
          >
            <p className="text-xs text-[var(--fg-muted)]">Projets livrés</p>
            <p className="text-2xl font-bold text-[var(--fg)]">12+</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -left-4 bottom-20 bg-[var(--surface)] backdrop-blur-xl border border-[var(--border)] rounded-2xl px-4 py-3"
          >
            <p className="text-xs text-[var(--fg-muted)]">Basé en</p>
            <p className="text-base font-semibold text-[var(--fg)]">Romans / Genève</p>
          </motion.div>
        </motion.div>

        {/* Texte */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.span variants={fadeUp} className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] block mb-6">
            À propos
          </motion.span>

          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)] mb-8">
            Pas un dev. Un partenaire de croissance.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lead mb-6">
            22 ans, formé en Négociation et Digitalisation de la Relation Client (BTS NDRC), j&apos;ai appris le code en autodidacte pour répondre à ce que je voyais manquer chez les entrepreneurs : des sites qui vendent vraiment.
          </motion.p>

          <motion.p variants={fadeUp} className="text-lead mb-8">
            Aujourd&apos;hui je construis des sites et des SaaS — souvent les deux pour le même client. Je travaille avec Claude Code pour aller plus vite sans sacrifier la qualité.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {["Shopify Expert", "WordPress", "Next.js", "SaaS Builder", "IA-augmented"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--fg-muted)]"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
