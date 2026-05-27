"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "@/lib/animations";

export default function CTABand() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="relative rounded-3xl border border-[var(--accent)]/20 overflow-hidden p-10 md:p-14 text-center"
          style={{ background: "rgba(0,255,135,0.04)", backdropFilter: "blur(12px)" }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,255,135,0.08) 0%, transparent 70%)" }}
          />
          {/* Top accent line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
            style={{ width: "60%", background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-5">
              <span className="inline-flex h-1.5 w-1.5 rounded-full animate-pulse bg-[var(--accent)]" />
              Disponible pour nouveaux projets
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-4 max-w-xl mx-auto">
              Votre site pourrait générer 2× plus de clients dès ce mois-ci
            </h2>
            <p className="text-[var(--fg-muted)] text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Audit gratuit de votre site actuel, devis sous 48h, livraison en 3 à 5 semaines. Sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(0,255,135,0.2)]"
              >
                Démarrer mon projet
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/projets/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[var(--fg)] border border-[var(--border)] hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-all duration-200"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
