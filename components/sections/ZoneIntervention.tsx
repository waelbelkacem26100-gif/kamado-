"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const GlobeCanvas = dynamic(() => import("@/components/three/GlobeCanvas"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full h-full rounded-2xl"
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

const cities = [
  { name: "Romans-sur-Isère", desc: "Drôme · Siège", accent: true },
  { name: "Paris",             desc: "Île-de-France" },
  { name: "Lyon",              desc: "Auvergne-Rhône-Alpes" },
  { name: "Bordeaux",          desc: "Nouvelle-Aquitaine" },
  { name: "Marseille",         desc: "Provence-Alpes-Côte d'Azur" },
  { name: "Lille",             desc: "Hauts-de-France" },
  { name: "Bruxelles",         desc: "Belgique" },
  { name: "Genève",            desc: "Suisse" },
  { name: "Montréal",          desc: "Canada" },
];

export default function ZoneIntervention() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative h-[380px] lg:h-[480px] order-2 lg:order-1"
          >
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,255,135,0.06) 0%, transparent 70%)" }}
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
              Basés à Romans-sur-Isère (Drôme), nous livrons des projets web pour des clients en France, en Europe et partout dans le monde — 100% à distance, sans surcoût lié à la distance.
            </motion.p>

            {/* Region pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              {regions.map((r) => (
                <span
                  key={r.label}
                  className="px-4 py-2 rounded-full text-sm border"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                    color: "var(--fg-muted)",
                  }}
                >
                  {r.flag} {r.label}
                </span>
              ))}
            </motion.div>

            {/* City grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-colors duration-200 ${
                    city.accent
                      ? "border-[var(--accent)]/30 bg-[var(--accent)]/[0.05]"
                      : "border-[var(--border)] bg-[var(--surface)]"
                  }`}
                >
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{
                      background: city.accent ? "var(--accent)" : "rgba(255,255,255,0.2)",
                      boxShadow: city.accent ? "0 0 6px var(--accent)" : "none",
                    }}
                  />
                  <div>
                    <p className={`text-sm font-semibold leading-tight ${city.accent ? "text-[var(--accent)]" : "text-[var(--fg)]"}`}>
                      {city.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>{city.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
