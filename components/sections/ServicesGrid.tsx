"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

/* ─── Service SVG icons ─── */
function IconVitrine({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <rect x="6" y="10" width="52" height="34" rx="4" stroke={color} strokeWidth="2.5" />
      <line x1="6" y1="20" x2="58" y2="20" stroke={color} strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="12" cy="15" r="2" fill={color} fillOpacity="0.7" />
      <circle cx="20" cy="15" r="2" fill={color} fillOpacity="0.5" />
      <circle cx="28" cy="15" r="2" fill={color} fillOpacity="0.3" />
      <rect x="18" y="28" width="28" height="3" rx="1.5" fill={color} fillOpacity="0.4" />
      <rect x="22" y="34" width="20" height="2" rx="1" fill={color} fillOpacity="0.25" />
      <rect x="26" y="44" width="12" height="4" rx="1" fill={color} fillOpacity="0.4" />
      <line x1="16" y1="48" x2="48" y2="48" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function IconShopify({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M14 22 L18 48 H46 L50 22" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M24 22 C24 16 40 16 40 22" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="50" r="3" fill={color} fillOpacity="0.7" />
      <circle cx="40" cy="50" r="3" fill={color} fillOpacity="0.7" />
      <line x1="22" y1="34" x2="42" y2="34" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
      <path d="M28 38 L32 42 L38 36" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSaaS({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M20 40 C20 40 16 38 16 32 C16 25 22 20 28 22 C29 17 34 14 40 16 C46 18 48 24 46 30 C50 30 52 34 50 38" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 47 L26 50 H38 L40 47" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeOpacity="0.6" />
      <line x1="32" y1="38" x2="32" y2="50" stroke={color} strokeWidth="2" strokeOpacity="0.4" />
      <path d="M27 30 L24 33 L27 36" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37 30 L40 33 L37 36" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="31" y1="29" x2="33" y2="37" stroke={color} strokeWidth="2" strokeOpacity="0.6" />
    </svg>
  );
}

function IconSEO({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <circle cx="28" cy="28" r="14" stroke={color} strokeWidth="2.5" />
      <line x1="38" y1="38" x2="52" y2="52" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M20 32 L24 28 L28 31 L34 24" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="34" cy="24" r="2.5" fill={color} fillOpacity="0.8" />
    </svg>
  );
}

function IconDesign({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M14 50 L18 38 L40 16 C42 14 46 14 48 16 C50 18 50 22 48 24 L26 46 Z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="36" y1="20" x2="44" y2="28" stroke={color} strokeWidth="2" strokeOpacity="0.6" />
      <path d="M14 50 L20 44" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="16" cy="50" r="3" fill={color} fillOpacity="0.5" />
      <rect x="44" y="44" width="8" height="8" rx="2" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
      <rect x="46" y="46" width="4" height="4" rx="1" fill={color} fillOpacity="0.6" />
    </svg>
  );
}

function IconAI({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M10 22 C10 18 14 14 18 14 H38 C42 14 46 18 46 22 V34 C46 38 42 42 38 42 H30 L22 52 V42 H18 C14 42 10 38 10 34 Z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="20" cy="28" r="2.5" fill={color} fillOpacity="0.8" />
      <circle cx="28" cy="28" r="2.5" fill={color} fillOpacity="0.8" />
      <circle cx="36" cy="28" r="2.5" fill={color} fillOpacity="0.8" />
      <path d="M50 16 L52 20 L56 22 L52 24 L50 28 L48 24 L44 22 L48 20 Z" fill={color} fillOpacity="0.7" />
    </svg>
  );
}

const services = [
  {
    num: "01",
    title: "Création site vitrine",
    description: "Un site professionnel qui transforme vos visiteurs en clients. Design sur-mesure, SEO on-page inclus, livré en 3 à 5 semaines.",
    slug: "creation-site-vitrine",
    accent: "var(--accent)",
    Icon: IconVitrine,
  },
  {
    num: "02",
    title: "Boutique Shopify",
    description: "E-commerce performant et optimisé pour vendre. Thème Liquid sur-mesure, tunnel d'achat CRO, intégration paiement & livraison.",
    slug: "boutique-shopify",
    accent: "#a855f7",
    Icon: IconShopify,
  },
  {
    num: "03",
    title: "SaaS sur-mesure",
    description: "Votre produit digital de A à Z. Architecture Next.js scalable, authentification, dashboard, intégration API et déploiement.",
    slug: "saas-sur-mesure",
    accent: "#3b82f6",
    Icon: IconSaaS,
  },
  {
    num: "04",
    title: "Référencement SEO",
    description: "Visibilité durable sur Google. Audit technique, stratégie de mots-clés, contenu optimisé et suivi des positions.",
    slug: "referencement-seo",
    accent: "#f97316",
    Icon: IconSEO,
  },
  {
    num: "05",
    title: "Webdesign sur-mesure",
    description: "Interfaces intuitives et élégantes. UX/UI design, identité visuelle, prototypage Figma et design system complet.",
    slug: "webdesign-sur-mesure",
    accent: "#ec4899",
    Icon: IconDesign,
  },
  {
    num: "06",
    title: "Chatbot & IA",
    description: "Automatisez votre relation client. Chatbots intelligents, intégration OpenAI & Claude, recommandations personnalisées.",
    slug: "chatbot-ia",
    accent: "#10b981",
    Icon: IconAI,
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
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Nos services
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)] max-w-xl">
              Ce qu&apos;on fait pour vous
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-[var(--fg-muted)] max-w-xs leading-relaxed md:text-right">
              Du site vitrine au SaaS — tout ce dont votre business a besoin.
            </motion.p>
          </div>
        </motion.div>

        {/* Grid 3×2 */}
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
              whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] } }}
              className="group relative rounded-2xl border border-[var(--border)] overflow-hidden flex flex-col"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(8px)" }}
            >
              {/* Accent top line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: service.accent }}
              />

              {/* Icon area — replaces image */}
              <div className="relative h-44 overflow-hidden flex-shrink-0 flex items-center justify-center">
                {/* Subtle radial bg glow */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse 70% 70% at 50% 60%, ${service.accent}12 0%, transparent 70%)`,
                  }}
                />
                {/* Watermark number */}
                <span
                  className="absolute right-4 bottom-0 font-black leading-none select-none pointer-events-none"
                  style={{
                    fontSize: "6rem",
                    color: service.accent,
                    opacity: 0.07,
                    letterSpacing: "-0.05em",
                  }}
                  aria-hidden="true"
                >
                  {service.num}
                </span>
                {/* Grid lines decoration */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 300 176" preserveAspectRatio="none" aria-hidden="true">
                  {[40, 80, 120, 160, 200, 240].map((x) => (
                    <line key={x} x1={x} y1="0" x2={x} y2="176" stroke="white" strokeWidth="0.5" />
                  ))}
                  {[44, 88, 132].map((y) => (
                    <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="white" strokeWidth="0.5" />
                  ))}
                </svg>
                {/* Animated icon */}
                <motion.div
                  className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl"
                  style={{
                    background: `${service.accent}10`,
                    border: `1px solid ${service.accent}25`,
                    boxShadow: `0 0 30px ${service.accent}18`,
                  }}
                  whileHover={{
                    scale: 1.12,
                    boxShadow: `0 0 50px ${service.accent}35`,
                    transition: { duration: 0.3 },
                  }}
                >
                  <service.Icon color={service.accent} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-bold text-[var(--fg)] mb-2">{service.title}</h3>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--fg-muted)" }}>
                  {service.description}
                </p>

                {/* Two CTAs */}
                <div className="flex items-center gap-3 flex-wrap border-t border-[var(--border)] pt-4">
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
                  <Link
                    href="/contact/"
                    className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 hover:opacity-80"
                    style={{ borderColor: `${service.accent}40`, color: service.accent, background: `${service.accent}10` }}
                  >
                    Discuter du projet
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
