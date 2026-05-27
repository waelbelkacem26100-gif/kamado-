"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const GlobeCanvas = dynamic(() => import("@/components/three/GlobeCanvas"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full h-full"
      style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,255,135,0.05) 0%, transparent 70%)" }}
    />
  ),
});

const regions = [
  { flag: "🇫🇷", label: "France" },
  { flag: "🌍", label: "Europe" },
  { flag: "🌎", label: "Amériques" },
  { flag: "🌏", label: "Monde entier" },
];

const presenceCities = ["Paris", "Bruxelles", "Genève", "Montréal"];

export default function ZoneIntervention() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Globe — 100% width mobile, max 600px desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full max-w-[600px] mx-auto h-[360px] sm:h-[440px] lg:h-[500px] order-2 lg:order-1"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(0,255,135,0.06) 0%, transparent 70%)" }}
            />
            <GlobeCanvas />
          </motion.div>

          {/* Texte */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="order-1 lg:order-2"
          >
            <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
              Présence mondiale
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)] mb-6">
              On construit pour{" "}
              <span style={{ color: "var(--accent)" }}>toute la planète.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lead mb-8">
              Basés à Romans-sur-Isère (Drôme), nous livrons des projets web pour des clients en France, en Europe et partout dans le monde — 100% à distance, sans surcoût.
            </motion.p>

            {/* Region pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
              {regions.map((r) => (
                <span
                  key={r.label}
                  className="px-4 py-2 rounded-full text-sm border"
                  style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--fg-muted)" }}
                >
                  {r.flag} {r.label}
                </span>
              ))}
            </motion.div>

            {/* Liste compacte des villes — une ligne sobre */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {presenceCities.map((city, i) => (
                <span key={city} className="flex items-center gap-1.5 text-sm" style={{ color: "var(--fg-muted)" }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)", boxShadow: "0 0 6px var(--accent)" }} />
                  {city}
                  {i < presenceCities.length - 1 && <span className="ml-3 opacity-30">·</span>}
                </span>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
