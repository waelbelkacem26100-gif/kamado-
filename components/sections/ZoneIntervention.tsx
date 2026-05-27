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

const cities = [
  { name: "Romans-sur-Isère", desc: "Drôme · Siège", accent: true },
  { name: "Paris",             desc: "Île-de-France" },
  { name: "Lyon",              desc: "Auvergne-Rhône-Alpes" },
  { name: "Bordeaux",          desc: "Nouvelle-Aquitaine" },
  { name: "Marseille",         desc: "Provence-Alpes-Côte d'Azur" },
  { name: "Toulouse",          desc: "Occitanie" },
  { name: "Nantes",            desc: "Pays de la Loire" },
  { name: "Strasbourg",        desc: "Grand Est" },
  { name: "Lille",             desc: "Hauts-de-France" },
];

export default function ZoneIntervention() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Zone d&apos;intervention
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            100% à distance,{" "}
            <span style={{ color: "var(--accent)" }}>partout en France</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead mt-4 max-w-xl mx-auto">
            Basés à Romans-sur-Isère (Drôme), nous intervenons pour des clients dans toute la France et en Europe francophone — sans surcoût lié à la distance.
          </motion.p>
        </motion.div>

        {/* Globe + city list side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative h-[380px] lg:h-[460px]"
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,255,135,0.06) 0%, transparent 70%)",
              }}
            />
            <GlobeCanvas />
          </motion.div>

          {/* City list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {cities.map((city) => (
                <motion.div
                  key={city.name}
                  variants={fadeUp}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border transition-colors duration-200 ${
                    city.accent
                      ? "border-[var(--accent)]/30 bg-[var(--accent)]/[0.05]"
                      : "border-[var(--border)] bg-[var(--surface)]"
                  }`}
                >
                  {/* Dot indicator */}
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{
                      background: city.accent ? "var(--accent)" : "rgba(255,255,255,0.25)",
                      boxShadow: city.accent ? "0 0 6px var(--accent)" : "none",
                    }}
                  />
                  <div>
                    <p
                      className={`text-sm font-semibold leading-tight ${
                        city.accent ? "text-[var(--accent)]" : "text-[var(--fg)]"
                      }`}
                    >
                      {city.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>{city.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeUp}
              className="text-sm mt-5"
              style={{ color: "var(--fg-muted)" }}
            >
              Et bien d&apos;autres villes — la distance n&apos;est jamais un obstacle.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
