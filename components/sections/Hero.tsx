"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { wordContainer, wordReveal, lineReveal } from "@/lib/animations";

const phrases = [
  "machine à vendre",
  "source de revenus",
  "outil de conversion",
  "avantage concurrentiel",
];

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const titleWords = ["Transformez", "votre", "business", "en"];

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 75);
    } else if (!isDeleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length - 1)), 35);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Gradient animé */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-[130px]"
          style={{
            background: "var(--accent)",
            top: "5%",
            left: "10%",
            opacity: 0.12,
            animation: "blobMove1 18s ease-in-out infinite",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        />
        <div
          className="absolute w-[450px] h-[450px] rounded-full blur-[110px]"
          style={{
            background: "#7c3aed",
            top: "20%",
            right: "8%",
            opacity: 0.07,
            animation: "blobMove2 22s ease-in-out infinite",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        />
      </div>

      {/* Grille perspective 3D — sol */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
        style={{ height: "58%", perspective: "700px" }}
        aria-hidden="true"
      >
        <div
          style={{
            position: "absolute",
            width: "220%",
            height: "220%",
            left: "-60%",
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(0,229,255,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.13) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            transformOrigin: "50% 100%",
            animation: "grid-scroll 5s linear infinite",
            willChange: "transform",
            maskImage: "linear-gradient(to top, black 0%, transparent 68%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 68%)",
          }}
        />
      </div>

      {/* Ligne d'horizon */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          bottom: "42%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.5) 30%, rgba(0,229,255,0.8) 50%, rgba(0,229,255,0.5) 70%, transparent 100%)",
          boxShadow: "0 0 40px 8px rgba(0,229,255,0.15)",
        }}
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] backdrop-blur-sm text-sm font-medium text-[var(--fg)] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Disponible pour nouveaux projets
        </motion.div>

        {/* Titre — mot par mot (ou ligne si reduced motion) */}
        <h1 className="text-display font-bold text-[var(--fg)] mb-4">
          {shouldReduce ? (
            <motion.span
              variants={lineReveal}
              initial="hidden"
              animate="visible"
              className="block"
            >
              Transformez votre business en
            </motion.span>
          ) : (
            <motion.span
              variants={wordContainer}
              initial="hidden"
              animate="visible"
              className="block overflow-hidden"
              style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0 0.28em" }}
            >
              {titleWords.map((word) => (
                <motion.span
                  key={word}
                  variants={wordReveal}
                  style={{ display: "inline-block" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          )}

          {/* Ligne typewriter — hauteur fixe pour éviter le layout shift */}
          <span className="block" style={{ minHeight: "1.1em" }}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: shouldReduce ? 0.2 : 0.7 }}
              className="text-[var(--accent)] accent-glow whitespace-nowrap"
            >
              {displayed}
              <span className="animate-pulse">|</span>
            </motion.span>
          </span>
        </h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: shouldReduce ? 0.15 : 0.5, ease }}
          className="text-lead max-w-2xl mx-auto mb-10"
        >
          Nous concevons des sites vitrine, boutiques Shopify et SaaS sur-mesure
          qui convertissent vos visiteurs en clients — pas en spectateurs.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: shouldReduce ? 0.2 : 0.65, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] shadow-[0_0_30px_var(--accent-glow)]"
          >
            Démarrer un projet
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
          <motion.a
            href="#projets"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[var(--fg)] border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] backdrop-blur-sm transition-colors duration-200"
          >
            Voir nos réalisations
          </motion.a>
        </motion.div>
      </div>

      {/* Mockup flottant — desktop uniquement */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 mt-16 w-full max-w-3xl mx-auto hidden md:block"
      >
        {/* Carte flottante avec screenshot */}
        <motion.div
          animate={shouldReduce ? {} : { y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)] bg-[#0d0d1a]"
        >
          {/* Barre de navigateur */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-white/[0.03]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            </div>
            <div className="flex-1 mx-3 h-5 bg-white/[0.06] rounded-full flex items-center px-3 gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400/60" />
              <span className="text-[10px] text-white/30 font-mono">kamaagency.com</span>
            </div>
          </div>
          {/* Screenshot */}
          <div className="relative aspect-[16/7] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85&auto=format&fit=crop"
              alt="Aperçu d'un site web Kama Agency"
              fill
              className="object-cover object-top"
              sizes="768px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a]/80 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Badge flottant gauche */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute -left-8 top-1/3 bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center">
            <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-[var(--fg)]">+247%</p>
            <p className="text-[10px] text-[var(--fg-muted)]">conversions</p>
          </div>
        </motion.div>

        {/* Badge flottant droite */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute -right-8 bottom-1/3 bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/20 border border-[var(--accent)]/30 flex items-center justify-center">
            <svg className="w-4 h-4 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-[var(--fg)]">3 semaines</p>
            <p className="text-[10px] text-[var(--fg-muted)]">délai moyen</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          className="w-px h-12 bg-[var(--accent)] origin-top"
          animate={shouldReduce ? {} : { scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
