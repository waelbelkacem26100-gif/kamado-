"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const problems = [
  "Un site vieillissant qui ne convertit pas",
  "Invisible sur Google, zéro trafic organique",
  "Freelance qui disparaît après livraison",
  "Template générique que vos concurrents utilisent aussi",
  "Délais non respectés, scope qui gonfle",
];

const solutions = [
  "Design sur-mesure optimisé pour convertir dès la 1ère visite",
  "SEO technique intégré dès la conception, résultats durables",
  "Accompagnement 30j post-livraison inclus, puis maintenance dispo",
  "Code 100% custom, jamais de template revendu",
  "Planning contractuel respecté, vous êtes informé chaque semaine",
];

export default function ProblemSolution() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Pourquoi Kama Agency
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            Le problème est connu.
            <br />
            <span className="text-[var(--accent)] accent-glow">La solution aussi.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Problems */}
          <motion.div variants={fadeUp} className="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-7">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg">❌</span>
              <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider">Ce que vous vivez maintenant</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--fg-muted)]">
                  <span className="text-red-400/60 mt-0.5 flex-shrink-0">✕</span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent)]/[0.04] p-7"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg">✅</span>
              <h3 className="text-sm font-bold text-[var(--accent)] uppercase tracking-wider">Avec Kama Agency</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--fg-muted)]">
                  <span className="text-[var(--accent)] mt-0.5 flex-shrink-0">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
