"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const testimonials = [
  {
    name: "Marie Dupont",
    role: "CEO, FleurShop",
    text: "Nexivo a transformé notre boutique Shopify en machine à vendre. Notre taux de conversion a doublé en 3 mois. Je recommande les yeux fermés.",
    stars: 5,
    initials: "MD",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Thomas Bernard",
    role: "Fondateur, TechStart",
    text: "Notre SaaS est passé de maquette à production en 8 semaines. Code propre, design premium, zéro compromis sur la qualité. Exactement ce qu'on voulait.",
    stars: 5,
    initials: "TB",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Sophie Laurent",
    role: "Directrice, CaféNomade",
    text: "Site livré en 3 semaines, référencé en première page Google en 2 mois. L'équipe est réactive, professionnelle, et surtout — elle obtient des résultats.",
    stars: 5,
    initials: "SL",
    color: "from-emerald-500 to-teal-600",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[var(--accent)]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Témoignages
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            Ils nous font confiance
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="p-7 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/40 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300"
            >
              <Stars count={t.stars} />
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--fg)]">{t.name}</p>
                  <p className="text-xs text-[var(--fg-muted)]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
