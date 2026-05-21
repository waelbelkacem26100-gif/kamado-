"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), { ssr: false });

const phrases = ["machine à vendre", "actif digital", "levier de croissance"];

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const stats = [
  { value: "+47%", label: "taux de conversion", sub: "Brainrot Club" },
  { value: "×2,4", label: "leads qualifiés", sub: "Couvetoile" },
  { value: "<5sem", label: "délai de livraison", sub: "en moyenne" },
];

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState(phrases[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20 bg-[#0a0a0a]">
      {/* Three.js particle canvas */}
      {!shouldReduce && <HeroCanvas />}

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full blur-[160px]"
          style={{
            width: 600,
            height: 600,
            background: "#00ff87",
            top: "25%",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.06,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm text-sm font-medium text-white/70 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff87] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff87]" />
          </span>
          Disponible pour nouveaux projets
        </motion.div>

        {/* Headline */}
        <h1
          className="font-bold text-white mb-4"
          style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
            className="block"
          >
            Transformez votre business en
          </motion.span>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="block"
            style={{
              color: "#00ff87",
              minHeight: "1.1em",
              fontSize: "clamp(1.9rem, 4.2vw, 4.2rem)",
              textShadow: "0 0 40px rgba(0,255,135,0.35)",
            }}
          >
            {mounted ? displayed : phrases[0]}
            {mounted && (
              <span
                className="inline-block w-0.5 align-middle ml-1"
                style={{ height: "0.85em", background: "#00ff87", opacity: isDeleting || displayed.length < phrases[phraseIndex].length ? 1 : 0.5 }}
              />
            )}
          </motion.span>
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4, ease }}
          className="max-w-2xl mx-auto mb-10 text-white/50 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}
        >
          Sites vitrine, boutiques Shopify et SaaS sur-mesure qui convertissent vos
          visiteurs en clients — livrés plus vite, sans compromis sur la qualité.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="/contact/"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#0a0a0a] bg-[#00ff87]"
            style={{ boxShadow: "0 0 32px rgba(0,255,135,0.3)" }}
          >
            Démarrer un projet
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
          <motion.a
            href="/projets/"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white/75 border border-white/12 hover:border-white/25 backdrop-blur-sm transition-colors duration-200"
          >
            Voir nos réalisations
          </motion.a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease }}
          className="mt-16 pt-10 border-t border-white/[0.06] flex items-center justify-center gap-12 flex-wrap"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-bold" style={{ color: "#00ff87", letterSpacing: "-0.02em" }}>
                {s.value}
              </p>
              <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
              <p className="text-[10px] text-white/22 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          className="w-px h-12 origin-top"
          style={{ background: "#00ff87" }}
          animate={shouldReduce ? {} : { scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
