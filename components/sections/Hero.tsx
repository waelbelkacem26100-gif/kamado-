"use client";

import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import dynamic from "next/dynamic";

const HeroBlob = dynamic(() => import("@/components/three/HeroBlob"), { ssr: false });

const name = "Waël Bendou";
const chars = name.split("");

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.3 },
  },
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease },
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease, delay: 0.9 },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: 1.1 },
  },
};

export default function Hero() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const indicator = scrollIndicatorRef.current;
    if (!indicator) return;
    const onScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 200);
      indicator.style.opacity = String(opacity);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Blob WebGL en arrière-plan */}
      <div className="absolute right-[-10%] top-[50%] translate-y-[-50%] w-[55vw] max-w-[700px] aspect-square opacity-30 md:opacity-40">
        <HeroBlob />
      </div>

      {/* Gradient radial sombre pour intégrer le blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, transparent 30%, var(--bg) 80%)",
        }}
        aria-hidden="true"
      />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Nom animé caractère par caractère */}
        <motion.h1
          className="text-display font-bold text-[var(--fg)] overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label={name}
          style={{ perspective: "800px" }}
        >
          {chars.map((char, i) => (
            <motion.span
              key={i}
              variants={charVariants}
              className="inline-block"
              style={{ display: char === " " ? "inline" : "inline-block" }}
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-2xl text-lead"
        >
          Je conçois des sites qui transforment les visiteurs en clients.
        </motion.p>

        {/* Ligne secondaire */}
        <motion.p
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          className="mt-3 text-sm text-[var(--fg-muted)] tracking-wide"
        >
          Créateur de sites & SaaS pour entrepreneurs — basé en France
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors duration-200"
          >
            Démarrer un projet
          </a>
          <a
            href="#projets"
            className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200"
          >
            Voir mes projets
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[var(--fg-muted)] tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-[var(--accent)] origin-top"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
