"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const categories = [
  {
    number: "01",
    title: "Site internet",
    accent: "#00e5ff",
    shadow: "rgba(0,229,255,0.15)",
    services: [
      { name: "Création site vitrine", slug: "creation-site-vitrine" },
      { name: "Boutique Shopify", slug: "boutique-shopify" },
      { name: "Refonte de site", slug: "refonte-de-site" },
      { name: "Dropshipping", slug: "dropshipping" },
    ],
  },
  {
    number: "02",
    title: "Design",
    accent: "#a855f7",
    shadow: "rgba(168,85,247,0.15)",
    services: [
      { name: "Webdesign sur-mesure", slug: "webdesign-sur-mesure" },
      { name: "UX/UI Design", slug: "ux-ui-design" },
      { name: "Identité visuelle", slug: "identite-visuelle" },
    ],
  },
  {
    number: "03",
    title: "Performance",
    accent: "#10b981",
    shadow: "rgba(16,185,129,0.15)",
    services: [
      { name: "Référencement SEO", slug: "referencement-seo" },
      { name: "Core Web Vitals", slug: "optimisation-core-web-vitals" },
      { name: "Analytics & Suivi", slug: "analytics-et-suivi" },
    ],
  },
  {
    number: "04",
    title: "Technologie",
    accent: "#3b82f6",
    shadow: "rgba(59,130,246,0.15)",
    services: [
      { name: "SaaS sur-mesure", slug: "saas-sur-mesure" },
      { name: "Shopify Liquid", slug: "shopify-liquid" },
      { name: "WordPress", slug: "wordpress" },
      { name: "Next.js & React", slug: "nextjs-et-react" },
    ],
  },
  {
    number: "05",
    title: "Intelligence IA",
    accent: "#f97316",
    shadow: "rgba(249,115,22,0.15)",
    services: [
      { name: "Chatbot & IA", slug: "chatbot-ia" },
      { name: "Automatisation IA", slug: "automatisation-ia" },
      { name: "Intégration API IA", slug: "integration-api-ia" },
    ],
  },
];

function ServiceCard({ cat, wide = false }: { cat: typeof categories[0]; wide?: boolean }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.025] overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col"
      style={
        {
          "--card-accent": cat.accent,
          "--card-shadow": cat.shadow,
        } as React.CSSProperties
      }
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: cat.accent }}
      />

      {/* Hover glow background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${cat.shadow} 0%, transparent 70%)`,
        }}
      />

      {/* Watermark number */}
      <span
        className="absolute bottom-3 right-5 text-8xl font-black select-none leading-none pointer-events-none"
        style={{ color: `${cat.accent}08` }}
      >
        {cat.number}
      </span>

      <div className="relative z-10 p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-[10px] font-bold font-mono px-2 py-1 rounded-md"
            style={{ color: cat.accent, background: `${cat.accent}15` }}
          >
            {cat.number}
          </span>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white/90 transition-colors duration-300">
            {cat.title}
          </h3>
        </div>

        {/* Divider */}
        <div
          className="w-8 h-px mb-6 transition-all duration-500 group-hover:w-full"
          style={{ background: `${cat.accent}40` }}
        />

        {/* Services list */}
        <ul className={`flex-1 ${wide ? "grid grid-cols-2 gap-x-8 gap-y-2" : "space-y-2"}`}>
          {cat.services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}/`}
                className="group/link flex items-center gap-2.5 text-sm py-1.5 px-2.5 -mx-2.5 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="flex-shrink-0 opacity-30 group-hover/link:opacity-100 transition-all duration-200"
                  style={{ color: cat.accent }}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <span className="group-hover/link:text-white transition-colors duration-200">{service.name}</span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="ml-auto flex-shrink-0 opacity-0 group-hover/link:opacity-100 -translate-x-1 group-hover/link:translate-x-0 transition-all duration-200"
                  style={{ color: cat.accent }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <div className="mt-6 pt-5 border-t border-white/[0.06]">
          <Link
            href={`/services/${cat.services[0].slug}/`}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:gap-2.5"
            style={{ color: cat.accent }}
          >
            Explorer
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesGrid() {
  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32 px-6">
      {/* Fond élevé */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #16162a 0%, #1e1e38 50%, #16162a 100%)" }}
      />
      {/* Halo blanc central */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.035) 0%, transparent 70%)" }}
        aria-hidden="true"
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

      <div className="max-w-7xl mx-auto relative z-10">
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
            Un partenaire à chaque étape
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Du design à la performance, nous couvrons l&apos;intégralité du spectre digital pour faire
            grandir votre business.
          </motion.p>
        </motion.div>

        {/* Grille 3 + 2 */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {categories.slice(0, 3).map((cat) => (
            <ServiceCard key={cat.title} cat={cat} />
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
        >
          {categories.slice(3).map((cat) => (
            <ServiceCard key={cat.title} cat={cat} wide />
          ))}
        </motion.div>

        {/* CTA */}
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
              href="/#contact"
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
