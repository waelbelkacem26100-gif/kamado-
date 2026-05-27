"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, slideLeft, slideRight, defaultViewport } from "@/lib/animations";

const LINES = [
  { text: "$ screenbuild convert --input screenshot.png", color: "var(--accent)", delay: 0 },
  { text: "▸ Analyzing design with Claude Vision API...",  color: "#666",          delay: 1400 },
  { text: "▸ Detecting components: navbar, hero, cards...", color: "#666",         delay: 2800 },
  { text: "▸ Generating Liquid templates...",              color: "#666",          delay: 4200 },
  { text: "▸ Compiling theme.zip (47 files)...",           color: "#666",          delay: 5600 },
  { text: "✓ theme.zip ready — Deploy to Shopify",        color: "var(--accent)", delay: 7000 },
];

const LOOP_DELAY = 10000;

const STEPS = [
  { num: "01", title: "Capture d'écran", desc: "Upload n'importe quelle image — maquette, site existant, wireframe" },
  { num: "02", title: "Analyse IA",      desc: "Claude Vision API détecte chaque composant, couleur et structure" },
  { num: "03", title: "Thème Shopify",   desc: "Export Liquid OS 2.0 complet, prêt à déployer en boutique" },
];

function TypingLine({ text, color }: { text: string; color: string }) {
  const [displayed, setDisplayed] = useState("");
  const idx = useRef(0);

  useEffect(() => {
    idx.current = 0;
    setDisplayed("");
    const iv = setInterval(() => {
      idx.current++;
      setDisplayed(text.slice(0, idx.current));
      if (idx.current >= text.length) clearInterval(iv);
    }, 22);
    return () => clearInterval(iv);
  }, [text]);

  return <span style={{ color }}>{displayed}</span>;
}

export default function TerminalSection() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [isInView,     setIsInView]     = useState(false);
  const sectionRef  = useRef<HTMLElement>(null);
  const loopRef     = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const lineTimers  = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const runLoop = () => {
      /* Nettoyer les anciens timers de lignes */
      lineTimers.current.forEach(clearTimeout);
      lineTimers.current = [];

      setVisibleLines([]);

      LINES.forEach((line, i) => {
        const t = setTimeout(() => {
          setVisibleLines((prev) => [...prev, i]);
        }, line.delay);
        lineTimers.current.push(t);
      });

      loopRef.current = setTimeout(
        runLoop,
        LOOP_DELAY + LINES[LINES.length - 1].delay
      );
    };

    runLoop();

    return () => {
      if (loopRef.current) clearTimeout(loopRef.current);
      lineTimers.current.forEach(clearTimeout);
      lineTimers.current = [];
    };
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Projet phare
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            ScreenBuild — Screenshot to Shopify
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead mt-4 max-w-xl mx-auto">
            De la capture d&apos;écran au thème Shopify déployable en 2 minutes. Propulsé par Claude Vision API.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 items-center">

          {/* Terminal */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: "rgba(255,255,255,0.08)", background: "#0a0a0a" }}
          >
            {/* Chrome */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-xs text-white/30 ml-2 font-mono">screenbuild — terminal</span>
            </div>

            {/* Body */}
            <div className="p-6 font-mono text-sm min-h-[280px] space-y-2">
              {LINES.map((line, i) =>
                visibleLines.includes(i) ? (
                  <div key={i} className="leading-relaxed">
                    <TypingLine text={line.text} color={line.color} />
                  </div>
                ) : null
              )}
              {visibleLines.length > 0 && visibleLines.length < LINES.length && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 align-middle bg-[var(--accent)]"
                />
              )}
            </div>
          </motion.div>

          {/* Right — description */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="space-y-8"
          >
            <div className="space-y-6">
              {STEPS.map((step) => (
                <div key={step.num} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold"
                    style={{
                      background:   "var(--accent-glow)",
                      color:        "var(--accent)",
                      border:       "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--fg)] mb-0.5">{step.title}</p>
                    <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://screenbuild.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#0a0a0a] bg-[var(--accent)] transition-opacity hover:opacity-90"
              >
                Essayer ScreenBuild
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>

              <div
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-medium border border-[var(--border)]"
                style={{ color: "var(--fg-muted)" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Powered by Anthropic Claude
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
