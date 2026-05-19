"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const cities = [
  { name: "Paris", desc: "Île-de-France" },
  { name: "Lyon", desc: "Auvergne-Rhône-Alpes" },
  { name: "Bordeaux", desc: "Nouvelle-Aquitaine" },
  { name: "Marseille", desc: "Provence-Alpes-Côte d'Azur" },
  { name: "Toulouse", desc: "Occitanie" },
  { name: "Nantes", desc: "Pays de la Loire" },
  { name: "Strasbourg", desc: "Grand Est" },
  { name: "Lille", desc: "Hauts-de-France" },
  { name: "Romans-sur-Isère", desc: "Drôme · Siège" },
];

export default function ZoneIntervention() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Zone d&apos;intervention
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            100% à distance,
            <br />
            <span className="text-[var(--accent)]">partout en France</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead mt-4 max-w-xl mx-auto">
            Basés à Romans-sur-Isère (Drôme), nous intervenons pour des clients dans toute la France et en Europe francophone — sans surcoût lié à la distance.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3"
        >
          {cities.map((city) => (
            <motion.div
              key={city.name}
              variants={fadeUp}
              className={`p-4 rounded-xl border transition-colors duration-200 ${
                city.desc.includes("Siège")
                  ? "border-[var(--accent)]/40 bg-[var(--accent)]/[0.06]"
                  : "border-[var(--border)] bg-[var(--surface)]"
              }`}
            >
              <p className={`text-sm font-semibold ${city.desc.includes("Siège") ? "text-[var(--accent)]" : "text-[var(--fg)]"}`}>
                {city.name}
              </p>
              <p className="text-xs text-[var(--fg-muted)] mt-0.5">{city.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center text-sm text-[var(--fg-muted)] mt-8"
        >
          Et bien d&apos;autres villes — la distance n&apos;est jamais un obstacle.
        </motion.p>
      </div>
    </section>
  );
}
