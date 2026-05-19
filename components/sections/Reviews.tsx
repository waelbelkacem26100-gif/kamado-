"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const reviews = [
  {
    name: "Julien R.",
    company: "Couvetoile",
    role: "Fondateur",
    text: "Kama Agency a refait notre site vitrine en 4 semaines. Résultat : notre formulaire de contact génère maintenant 2,4 fois plus de leads qualifiés. L'équipe est réactive, pro et force de proposition.",
    metric: "×2,4 leads",
    accent: "#0891b2",
  },
  {
    name: "Camille D.",
    company: "BotanicShop",
    role: "Directrice e-commerce",
    text: "La refonte de notre boutique Shopify a transformé notre taux de conversion. Le tunnel d'achat repensé par Kama est fluide, rapide, et nos clients le remarquent. Je recommande sans hésitation.",
    metric: "+38% CA",
    accent: "#10b981",
  },
  {
    name: "Alexandre M.",
    company: "TechStart",
    role: "CEO",
    text: "Nous avons confié le développement de notre SaaS à Kama Agency. Ils ont livré une plateforme robuste, bien architecturée, et scalable — en 12 semaines. Un vrai partenaire technique.",
    metric: "12 sem.",
    accent: "#3b82f6",
  },
  {
    name: "Nadia B.",
    company: "AgriTech Sud",
    role: "Responsable marketing",
    text: "Depuis la refonte SEO de notre site, nous sommes passés en première page sur nos 3 mots-clés principaux. Le trafic organique a doublé en 4 mois. Investissement largement rentabilisé.",
    metric: "×2 trafic",
    accent: "#f97316",
  },
];

export default function Reviews() {
  return (
    <section className="py-20 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-12"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Avis clients
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[var(--fg)]">
            Ce qu&apos;ils disent de nous
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: r.accent }}
              />
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-bold text-[var(--fg)]">{r.name}</p>
                  <p className="text-xs text-[var(--fg-muted)]">
                    {r.role} — <span style={{ color: r.accent }}>{r.company}</span>
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-black" style={{ color: r.accent }}>{r.metric}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill={r.accent} stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                &ldquo;{r.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
