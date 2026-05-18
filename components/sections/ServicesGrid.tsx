"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const services = [
  {
    title: "Création site vitrine",
    description:
      "Un site professionnel qui transforme vos visiteurs en clients. Design sur-mesure, SEO on-page inclus, livré en 3 à 5 semaines.",
    slug: "creation-site-vitrine",
    accent: "#00e5ff",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Boutique Shopify",
    description:
      "E-commerce performant et optimisé pour vendre. Thème Liquid sur-mesure, tunnel d'achat CRO, intégration paiement & livraison.",
    slug: "boutique-shopify",
    accent: "#a855f7",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    title: "SaaS sur-mesure",
    description:
      "Votre produit digital de A à Z. Architecture Next.js scalable, authentification, dashboard, intégration API et déploiement.",
    slug: "saas-sur-mesure",
    accent: "#10b981",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Référencement SEO",
    description:
      "Visibilité durable sur Google. Audit technique, stratégie de mots-clés, contenu optimisé et suivi des positions.",
    slug: "referencement-seo",
    accent: "#f97316",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    title: "Webdesign sur-mesure",
    description:
      "Interfaces intuitives et élégantes. UX/UI design, identité visuelle, prototypage Figma et design system complet.",
    slug: "webdesign-sur-mesure",
    accent: "#3b82f6",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Chatbot & IA",
    description:
      "Automatisez votre relation client. Chatbots intelligents, intégration OpenAI & Claude, recommandations personnalisées.",
    slug: "chatbot-ia",
    accent: "#ec4899",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2a8 8 0 0 1 8 8c0 5.25-8 12-8 12S4 15.25 4 10a8 8 0 0 1 8-8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32 px-6">
      {/* Fond */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #16162a 0%, #1e1e38 50%, #16162a 100%)" }}
      />
      {/* Grille subtile */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4"
          >
            Nos services
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-white">
            Ce qu&apos;on fait pour vous
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Du site vitrine au SaaS, en passant par le SEO et l&apos;IA — on couvre tout
            ce dont votre business a besoin pour performer en ligne.
          </motion.p>
        </motion.div>

        {/* Grille 3×2 */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.slug}
              variants={fadeUp}
              className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.025] p-8 flex flex-col overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04]"
              style={{ "--card-accent": service.accent } as React.CSSProperties}
            >
              {/* Ligne accent haut */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: service.accent }}
              />

              {/* Glow hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 70% 40% at 50% 0%, ${service.accent}18 0%, transparent 70%)`,
                }}
              />

              {/* Icône */}
              <div
                className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0 transition-all duration-300"
                style={{
                  background: `${service.accent}14`,
                  border: `1px solid ${service.accent}30`,
                  color: service.accent,
                }}
              >
                {service.icon}
              </div>

              {/* Titre */}
              <h3 className="relative z-10 text-lg font-bold text-white mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="relative z-10 text-sm leading-relaxed flex-1"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {service.description}
              </p>

              {/* Lien */}
              <div className="relative z-10 mt-6 pt-5 border-t border-white/[0.06]">
                <Link
                  href={`/services/${service.slug}/`}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                  style={{ color: service.accent }}
                >
                  Démarrer mon projet
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA bas */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]"
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            Vous ne savez pas quelle solution vous convient ?
          </p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] shadow-[0_0_30px_var(--accent-glow)]"
            >
              Discuter de votre projet
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
