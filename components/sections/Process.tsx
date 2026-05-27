"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Comprendre",
    duration: "Jour 1 — Appel découverte 30 min",
    description: "Ton business, ta cible, tes objectifs. On ne code pas avant d'avoir compris où tu veux aller.",
    accent: "var(--accent)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Concevoir",
    duration: "Jours 2-5 — Maquette Figma sur-mesure",
    description: "Maquettes et UX pensés conversion. Chaque décision visuelle guide vers l'action.",
    accent: "#a855f7",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Construire",
    duration: "Semaines 2-4 — Développement & tests",
    description: "Code propre, performant, évolutif. La bonne techno pour ton besoin, pas la plus trendy.",
    accent: "#3b82f6",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Lancer",
    duration: "Semaine 5 — Mise en ligne & formation",
    description: "SEO, analytics, optimisation continue. Le lancement est le début, pas la fin.",
    accent: "#f97316",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
  },
];

function TimelineConnector({ accent, index }: { accent: string; index: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="hidden lg:flex items-center flex-1 mx-2" aria-hidden="true">
      <svg ref={ref} className="w-full h-6" viewBox="0 0 100 24" preserveAspectRatio="none">
        {/* Base dim line */}
        <line x1="0" y1="12" x2="100" y2="12" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        {/* Animated glowing line */}
        <motion.line
          x1="0" y1="12" x2="100" y2="12"
          stroke={accent}
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2, ease: "easeInOut" }}
          style={{ filter: `drop-shadow(0 0 3px ${accent})` }}
        />
        {/* Travelling star dot */}
        <motion.circle
          cx="0" cy="12" r="2.5"
          fill={accent}
          initial={{ opacity: 0 }}
          animate={inView ? { cx: ["0", "100"], opacity: [0, 1, 0] } : {}}
          transition={{ duration: 1.2, delay: index * 0.2 + 0.3, ease: "easeInOut" }}
          style={{ filter: `drop-shadow(0 0 4px ${accent})` }}
        />
      </svg>
    </div>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={sectionRef} className="relative py-24 md:py-32 px-6 overflow-hidden cosmos-section">
      {/* Cosmos background nebula */}
      <div
        className="cosmos-nebula-green absolute pointer-events-none"
        aria-hidden="true"
        style={{ width: 600, height: 400, top: "20%", left: "50%", transform: "translateX(-50%)", opacity: 0.04 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-20"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Notre méthode
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            Comment on travaille
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead mt-4 max-w-lg mx-auto">
            4 étapes, 5 semaines en moyenne, 100% de projets livrés dans les délais.
          </motion.p>
        </motion.div>

        {/* Desktop: horizontal connected steps */}
        <div className="hidden lg:flex items-start gap-0 relative">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-start flex-1 min-w-0">
              {/* Step card */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                custom={i}
                className="flex-shrink-0 group"
                style={{ width: 180 }}
              >
                {/* Orb */}
                <motion.div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 mx-auto"
                  style={{ background: `${step.accent}12`, border: `1px solid ${step.accent}30`, color: step.accent }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={sectionInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15, type: "spring", stiffness: 260, damping: 20 }}
                  whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${step.accent}40` }}
                >
                  {step.icon}
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{ border: `1px solid ${step.accent}`, opacity: 0 }}
                    animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
                    transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, repeatDelay: 3 }}
                  />
                </motion.div>

                <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5 text-center" style={{ color: step.accent }}>
                  {step.duration}
                </p>
                <h3 className="text-base font-bold text-[var(--fg)] mb-2 text-center">{step.title}</h3>
                <p className="text-xs text-[var(--fg-muted)] leading-relaxed text-center">{step.description}</p>
              </motion.div>

              {/* Connector (not after last) */}
              {i < steps.length - 1 && (
                <TimelineConnector accent={step.accent} index={i} />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="lg:hidden space-y-0 relative"
        >
          {/* Vertical line */}
          <div
            className="absolute left-8 top-8 bottom-8 w-px"
            style={{ background: "linear-gradient(180deg, var(--accent), #a855f7, #3b82f6, #f97316)" }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              custom={i}
              className="flex gap-6 pb-10 last:pb-0"
            >
              {/* Orb */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10"
                style={{ background: `${step.accent}12`, border: `1px solid ${step.accent}30`, color: step.accent }}
              >
                {step.icon}
              </div>
              <div className="pt-2">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: step.accent }}>{step.duration}</p>
                <h3 className="text-base font-bold text-[var(--fg)] mb-1.5">{step.title}</h3>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
