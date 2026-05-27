"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const services = [
  {
    num: "01",
    title: "Création site vitrine",
    description: "Un site professionnel qui transforme vos visiteurs en clients. Design sur-mesure, SEO on-page inclus, livré en 3 à 5 semaines.",
    slug: "creation-site-vitrine",
    accent: "var(--accent)",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Boutique Shopify",
    description: "E-commerce performant et optimisé pour vendre. Thème Liquid sur-mesure, tunnel d'achat CRO, intégration paiement & livraison.",
    slug: "boutique-shopify",
    accent: "#a855f7",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "SaaS sur-mesure",
    description: "Votre produit digital de A à Z. Architecture Next.js scalable, authentification, dashboard, intégration API et déploiement.",
    slug: "saas-sur-mesure",
    accent: "#3b82f6",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Référencement SEO",
    description: "Visibilité durable sur Google. Audit technique, stratégie de mots-clés, contenu optimisé et suivi des positions.",
    slug: "referencement-seo",
    accent: "#f97316",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80&auto=format&fit=crop",
  },
  {
    num: "05",
    title: "Webdesign sur-mesure",
    description: "Interfaces intuitives et élégantes. UX/UI design, identité visuelle, prototypage Figma et design system complet.",
    slug: "webdesign-sur-mesure",
    accent: "#ec4899",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&auto=format&fit=crop",
  },
  {
    num: "06",
    title: "Chatbot & IA",
    description: "Automatisez votre relation client. Chatbots intelligents, intégration OpenAI & Claude, recommandations personnalisées.",
    slug: "chatbot-ia",
    accent: "#10b981",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop",
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

              {/* Image */}
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Number badge */}
                <span
                  className="absolute bottom-3 right-3 text-4xl font-black leading-none select-none opacity-60"
                  style={{ color: service.accent, textShadow: `0 0 20px ${service.accent}80` }}
                  aria-hidden="true"
                >
                  {service.num}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-bold text-[var(--fg)] mb-2">{service.title}</h3>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed flex-1 mb-5">
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
