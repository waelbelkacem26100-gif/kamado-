"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const testimonials = [
  {
    name: "Marie Dupont",
    role: "CEO, FleurShop",
    text: "Kama Agency a transformé notre boutique Shopify en machine à vendre. Notre taux de conversion a doublé en 3 mois. Je recommande les yeux fermés.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&auto=format&fit=crop&crop=face",
  },
  {
    name: "Thomas Bernard",
    role: "Fondateur, TechStart",
    text: "Notre SaaS est passé de maquette à production en 8 semaines. Code propre, design premium, zéro compromis sur la qualité. Exactement ce qu'on voulait.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&auto=format&fit=crop&crop=face",
  },
  {
    name: "Sophie Laurent",
    role: "Directrice, CaféNomade",
    text: "Site livré en 3 semaines, référencé en première page Google en 2 mois. L'équipe est réactive, professionnelle, et surtout — elle obtient des résultats.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&auto=format&fit=crop&crop=face",
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
    <section className="relative overflow-hidden py-24 md:py-32 px-6">
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #050508 0%, #08080f 55%, #040410 100%)" }} />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 600, height: 600, top: "-15%", left: "-5%", background: "radial-gradient(circle, #a855f7 0%, transparent 65%)", opacity: 0.05, filter: "blur(80px)", animation: "blobMove1 20s ease-in-out infinite", willChange: "transform", transform: "translateZ(0)" }} aria-hidden="true" />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 400, height: 400, bottom: "0%", right: "0%", background: "radial-gradient(circle, #00e5ff 0%, transparent 65%)", opacity: 0.04, filter: "blur(70px)", animation: "blobMove2 26s ease-in-out infinite", willChange: "transform", transform: "translateZ(0)" }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
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
          <motion.h2 variants={fadeUp} className="text-section font-bold text-white">
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
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-7 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-[var(--accent)]/40 hover:shadow-[0_0_40px_var(--accent-glow)] transition-colors duration-300"
            >
              <Stars count={t.stars} />
              <p className="text-sm leading-relaxed mt-4 mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {/* Avatar photo réelle */}
                <motion.div
                  className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[var(--accent)]/20"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
