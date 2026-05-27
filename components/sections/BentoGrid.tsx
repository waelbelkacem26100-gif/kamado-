"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const stats = [
  { value: "3×", label: "plus rapide que la concurrence", accent: "var(--accent)" },
  { value: "95+", label: "score Lighthouse moyen", accent: "#a855f7" },
  { value: "0", label: "template — 100% sur-mesure", accent: "#3b82f6" },
  { value: "48h", label: "délai de réponse max", accent: "#f97316" },
];

const features = [
  {
    title: "Rapidité",
    description: "Grâce à l'IA et nos processus rodés, nous livrons 3× plus vite que la moyenne du marché — sans sacrifier la qualité.",
    accent: "var(--accent)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    size: "large",
  },
  {
    title: "Performance",
    description: "Chaque site optimisé SEO, Core Web Vitals, et conversion dès la conception — pas en rattrapage.",
    accent: "#a855f7",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    size: "medium",
  },
  {
    title: "Sur-mesure",
    description: "Aucun template. Chaque projet est construit pour votre business, vos objectifs et votre audience spécifique.",
    accent: "#3b82f6",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    size: "medium",
  },
];

function FeatureCard({ feat, index }: { feat: typeof features[0]; index: number }) {
  const isLarge = feat.size === "large";
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] } }}
      className={`group relative p-8 rounded-2xl border border-[var(--border)] overflow-hidden flex flex-col ${
        isLarge ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
      style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
    >
      {/* Cosmos nebula glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${feat.accent}10 0%, transparent 70%)` }}
      />
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${feat.accent}, transparent)` }}
      />
      {/* Star decoration */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity duration-500" aria-hidden="true">
        {[0, 1, 2].map(i => (
          <div key={i} className="absolute rounded-full" style={{
            width: 2, height: 2,
            background: feat.accent,
            top: i * 10,
            right: i * 8,
            boxShadow: `0 0 4px ${feat.accent}`,
          }} />
        ))}
      </div>

      {/* Icon */}
      <div
        className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
        style={{ background: `${feat.accent}12`, border: `1px solid ${feat.accent}25`, color: feat.accent }}
      >
        {feat.icon}
      </div>

      <h3 className={`relative z-10 font-bold text-[var(--fg)] mb-3 ${isLarge ? "text-2xl" : "text-lg"}`}>
        {feat.title}
      </h3>
      <p className={`relative z-10 text-[var(--fg-muted)] leading-relaxed flex-1 ${isLarge ? "text-base" : "text-sm"}`}>
        {feat.description}
      </p>

      {isLarge && (
        <div className="relative z-10 mt-8 grid grid-cols-2 gap-3">
          {stats.slice(0, 2).map((s) => (
            <div key={s.value} className="p-3 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
              <span className="text-2xl font-black" style={{ color: s.accent }}>{s.value}</span>
              <p className="text-xs text-[var(--fg-muted)] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-6 cosmos-section">
      {/* Nebula decorations */}
      <div
        className="cosmos-nebula-purple"
        aria-hidden="true"
        style={{ width: 500, height: 500, top: "5%", left: "-10%", opacity: 0.08 }}
      />
      <div
        className="cosmos-nebula-indigo"
        aria-hidden="true"
        style={{ width: 400, height: 400, bottom: "10%", right: "-5%", opacity: 0.06 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
          <motion.p variants={fadeUp} className="text-lead mt-4 max-w-xl mx-auto">
            Rapidité, performance, sur-mesure — trois piliers qui font la différence sur votre ROI.
          </motion.p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feat, i) => (
            <FeatureCard key={feat.title} feat={feat} index={i} />
          ))}

          {/* Stats cards row */}
          {stats.slice(2).map((s, i) => (
            <motion.div
              key={s.value}
              variants={fadeUp}
              custom={features.length + i}
              className="p-6 rounded-2xl border border-[var(--border)] flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300"
              style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(8px)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${s.accent}12`, border: `1px solid ${s.accent}25` }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: s.accent, boxShadow: `0 0 8px ${s.accent}` }} />
              </div>
              <div>
                <span className="text-3xl font-black" style={{ color: s.accent }}>{s.value}</span>
                <p className="text-sm text-[var(--fg-muted)] mt-1">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
