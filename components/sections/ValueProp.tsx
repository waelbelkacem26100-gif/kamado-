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
    accent: "#00ff87",
    description:
      "Grâce à l'IA et nos processus rodés, nous livrons 3× plus vite que la moyenne du marché — sans sacrifier la qualité.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Performance",
    accent: "#a855f7",
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
    accent: "#3b82f6",
    description:
      "Aucun template. Chaque projet est construit pour votre business, vos objectifs et votre audience spécifique.",
  },
];

export default function ValueProp() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-6">
      {/* Ambient glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 600, height: 400, top: "10%", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(ellipse, rgba(0,255,135,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
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
              className="group p-8 rounded-2xl border border-white/[0.07] relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${val.accent}12 0%, transparent 70%)` }}
              />
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: val.accent }}
              />

              <div
                className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${val.accent}15`, border: `1px solid ${val.accent}30`, color: val.accent }}
              >
                {val.icon}
              </div>
              <h3 className="relative z-10 text-lg font-semibold text-[var(--fg)] mb-3">{val.title}</h3>
              <p className="relative z-10 text-sm leading-relaxed text-[var(--fg-muted)]">
                {val.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
