"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const services = [
  {
    num: "01",
    title: "Création site vitrine",
    description:
      "Un site professionnel qui transforme vos visiteurs en clients. Design sur-mesure, SEO on-page inclus, livré en 3 à 5 semaines.",
    slug: "creation-site-vitrine",
    accent: "#00b8d4",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Boutique Shopify",
    description:
      "E-commerce performant et optimisé pour vendre. Thème Liquid sur-mesure, tunnel d'achat CRO, intégration paiement & livraison.",
    slug: "boutique-shopify",
    accent: "#a855f7",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "SaaS sur-mesure",
    description:
      "Votre produit digital de A à Z. Architecture Next.js scalable, authentification, dashboard, intégration API et déploiement.",
    slug: "saas-sur-mesure",
    accent: "#10b981",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Référencement SEO",
    description:
      "Visibilité durable sur Google. Audit technique, stratégie de mots-clés, contenu optimisé et suivi des positions.",
    slug: "referencement-seo",
    accent: "#f97316",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Webdesign sur-mesure",
    description:
      "Interfaces intuitives et élégantes. UX/UI design, identité visuelle, prototypage Figma et design system complet.",
    slug: "webdesign-sur-mesure",
    accent: "#3b82f6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Chatbot & IA",
    description:
      "Automatisez votre relation client. Chatbots intelligents, intégration OpenAI & Claude, recommandations personnalisées.",
    slug: "chatbot-ia",
    accent: "#ec4899",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2a8 8 0 0 1 8 8c0 5.25-8 12-8 12S4 15.25 4 10a8 8 0 0 1 8-8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4"
          >
            Nos services
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)] max-w-xl">
              Ce qu&apos;on fait pour vous
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm text-[var(--fg-muted)] max-w-xs leading-relaxed md:text-right"
            >
              Du site vitrine au SaaS — tout ce dont votre business a besoin pour performer en ligne.
            </motion.p>
          </div>
        </motion.div>

        {/* Grid 3×2 */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.slug}
              variants={fadeUp}
              className="group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/30 hover:shadow-lg"
            >
              {/* Large background number */}
              <span
                className="absolute top-4 right-5 text-7xl font-black leading-none select-none pointer-events-none transition-opacity duration-300"
                style={{ color: service.accent, opacity: 0.06 }}
                aria-hidden="true"
              >
                {service.num}
              </span>

              {/* Accent top line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: service.accent }}
              />

              {/* Icon */}
              <div
                className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
                style={{
                  background: `${service.accent}14`,
                  border: `1px solid ${service.accent}28`,
                  color: service.accent,
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-base font-bold text-[var(--fg)] mb-2.5">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-[var(--fg-muted)] leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Link */}
              <div className="relative z-10 mt-6 pt-5 border-t border-[var(--border)]">
                <Link
                  href={`/services/${service.slug}/`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-3"
                  style={{ color: service.accent }}
                >
                  En savoir plus
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--border)]"
        >
          <p className="text-sm text-[var(--fg-muted)]">
            Vous ne savez pas quelle solution vous convient ?
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] shadow-[0_0_24px_var(--accent-glow)] hover:opacity-90 transition-opacity"
          >
            Discuter de votre projet
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
