"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const offers = [
  {
    name: "Site Vitrine",
    tagline: "Votre meilleur commercial en ligne",
    features: [
      "Design sur-mesure premium",
      "SEO on-page complet",
      "Formulaire de contact intégré",
      "Optimisé mobile & performance",
      "Livraison en 2 à 4 semaines",
    ],
    accent: false,
  },
  {
    name: "Boutique Shopify",
    tagline: "E-commerce optimisé pour vendre",
    features: [
      "Thème Liquid sur-mesure",
      "Tunnel d'achat optimisé CRO",
      "Intégration paiement & livraison",
      "Fiches produits SEO",
      "Analytics & suivi conversions",
    ],
    accent: true,
  },
  {
    name: "SaaS Sur-mesure",
    tagline: "Votre produit digital de A à Z",
    features: [
      "Architecture Next.js scalable",
      "Authentification & dashboard",
      "Intégration API & webhooks",
      "Design system complet",
      "Déploiement & maintenance",
    ],
    accent: false,
  },
];

export default function Offers() {
  return (
    <section id="offres" className="py-24 md:py-32 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Nos offres
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            Choisissez votre formule
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead mt-4 max-w-xl mx-auto">
            Chaque projet est devisé sur-mesure. Les tarifs varient selon vos besoins.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.name}
              variants={fadeUp}
              className={`relative p-8 rounded-2xl border flex flex-col transition-all duration-300 ${
                offer.accent
                  ? "border-[var(--accent)] bg-[var(--surface-hover)] shadow-[0_0_40px_var(--accent-glow)]"
                  : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/50 hover:shadow-[0_0_30px_var(--accent-glow)]"
              }`}
            >
              {offer.accent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-[#050508] bg-[var(--accent)]">
                  Populaire
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[var(--fg)] mb-1">{offer.name}</h3>
                <p className="text-sm text-[var(--fg-muted)]">{offer.tagline}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {offer.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-[var(--fg-muted)]">
                    <svg className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  offer.accent
                    ? "text-[#050508] bg-[var(--accent)] hover:opacity-90"
                    : "text-[var(--fg)] border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
              >
                Obtenir un devis
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
