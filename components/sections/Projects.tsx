"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";
import { projects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

const accentMap: Record<string, string> = {
  screenbuild:   "#3b82f6",
  clustea:       "#10b981",
  couvetoile:    "#f97316",
  "brainrot-club": "#a855f7",
};

const metricMap: Record<string, { value: string; label: string }> = {
  screenbuild:     { value: "−90%", label: "temps développement" },
  clustea:         { value: "8 sem", label: "MVP en production" },
  couvetoile:      { value: "×2,4", label: "leads qualifiés" },
  "brainrot-club": { value: "+47%", label: "taux de conversion" },
};

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef     = useRef<HTMLDivElement>(null);
  /* SSR-safe: démarre en mode grille (mobile), switch desktop après hydration */
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ── GSAP horizontal scroll ── */
  useGSAP(
    () => {
      if (isMobile) return;
      const track     = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      const scrollDist = () => track.scrollWidth - window.innerWidth + 96;

      gsap.to(track, {
        x: () => -scrollDist(),
        ease: "none",
        scrollTrigger: {
          trigger:          container,
          start:            "top top",
          end:              () => `+=${scrollDist()}`,
          scrub:            1.5,
          pin:              true,
          anticipatePin:    1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: containerRef, dependencies: [isMobile] }
  );

  return (
    <section id="projets" className="py-24 md:py-32">
      {/* Header */}
      <div className="px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="max-w-7xl mx-auto mb-12"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Réalisations
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
              Nos derniers projets
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-[var(--fg-muted)] md:text-right max-w-xs">
              {isMobile ? "Swipez pour voir tous les projets" : "Scrollez pour explorer nos réalisations →"}
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Cards — horizontal scroll on desktop, grid on mobile */}
      {isMobile ? (
        <div className="px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-7xl mx-auto"
          >
            {projects.map((project) => (
              <motion.div key={project.slug} variants={fadeUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        <div ref={containerRef} className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 pl-12 pr-24"
            style={{ width: "max-content" }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const ref      = useRef<HTMLDivElement>(null);
  const accent   = accentMap[project.slug] ?? "#00D1FF";
  const metric   = metricMap[project.slug];
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setTilt({
      x: ((e.clientY - rect.top)  / rect.height - 0.5) * -14,
      y: ((e.clientX - rect.left) / rect.width  - 0.5) *  14,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      style={{ perspective: "900px", width: "680px", maxWidth: "85vw", flexShrink: 0 }}
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
        className="will-change-transform"
      >
        <Link
          href={`/projets/${project.slug}/`}
          className="group block rounded-3xl border overflow-hidden transition-all duration-500"
          style={{
            borderColor: hovered ? `${accent}50` : "rgba(255,255,255,0.07)",
            boxShadow:   hovered ? `0 0 50px ${accent}22, 0 24px 60px rgba(0,0,0,0.4)` : "0 8px 40px rgba(0,0,0,0.3)",
            background:  "rgba(255,255,255,0.03)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Accent top bar */}
          <div
            className="h-[2px] transition-opacity duration-300"
            style={{ background: accent, opacity: hovered ? 1 : 0 }}
          />

          {/* Image */}
          <div className="relative h-80 overflow-hidden bg-[#141414]">
            <motion.div
              className="absolute inset-0"
              animate={{ scale: hovered ? 1.06 : 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 90vw, 680px"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

            {/* Browser chrome */}
            <div className="absolute inset-x-4 top-4 h-7 rounded-lg bg-black/40 backdrop-blur-sm border border-white/20 flex items-center gap-2 px-3">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400/80" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                <div className="w-2 h-2 rounded-full bg-green-400/80" />
              </div>
              <div className="flex-1 h-3 bg-white/10 rounded-full" />
            </div>

            {/* Metric badge */}
            {metric && (
              <div
                className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl backdrop-blur-sm border text-sm font-bold"
                style={{ color: accent, background: `${accent}18`, borderColor: `${accent}35` }}
              >
                {metric.value} <span className="font-normal text-xs opacity-70">{metric.label}</span>
              </div>
            )}

            {/* Stack pills */}
            <div className="absolute bottom-4 right-4 flex gap-1.5 flex-wrap justify-end">
              {project.stack.slice(0, 2).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/50 text-white/85 backdrop-blur-sm border border-white/12"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-1.5">{project.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed line-clamp-2">{project.tagline}</p>
              </div>
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300"
                style={{
                  borderColor:     hovered ? accent : "rgba(255,255,255,0.1)",
                  background:      hovered ? `${accent}18` : "transparent",
                  color:           hovered ? accent : "rgba(255,255,255,0.4)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
