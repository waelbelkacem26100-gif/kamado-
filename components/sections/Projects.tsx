"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";
import { projects } from "@/lib/projects";

function ProjectCard3D({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glowing, setGlowing] = useState(false);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotation({
      x: ((y - rect.height / 2) / rect.height) * -12,
      y: ((x - rect.width / 2) / rect.width) * 12,
    });
  };

  return (
    <motion.div variants={fadeUp} style={{ perspective: "800px" }}>
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setGlowing(true)}
        onMouseLeave={() => {
          setRotation({ x: 0, y: 0 });
          setGlowing(false);
        }}
        animate={{ rotateX: rotation.x, rotateY: rotation.y }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="will-change-transform"
      >
        <Link
          href={`/projets/${project.slug}`}
          className={`group block rounded-2xl border overflow-hidden transition-all duration-300 ${
            glowing
              ? "border-[var(--accent)]/60 shadow-[0_0_40px_var(--accent-glow)]"
              : "border-[var(--border)]"
          }`}
        >
          {/* Zone image */}
          <div className="relative h-52 overflow-hidden bg-[var(--bg-secondary)]">

            {/* Photo de fond avec zoom au hover */}
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>

            {/* Overlay gradient coloré (garde l'identité du projet) */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent`}
            />

            {/* Overlay hover "Voir le projet" */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 z-10 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white border border-white/40 bg-white/10 backdrop-blur-sm">
                Voir le projet
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </div>

            {/* Browser frame miniature en haut */}
            <div className="absolute inset-x-4 top-4 h-6 rounded-lg bg-black/40 backdrop-blur-sm border border-white/20 flex items-center gap-1.5 px-2.5 z-10">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400/80" />
              </div>
              <div className="flex-1 h-3 bg-white/10 rounded-full" />
            </div>

            {/* Stack badges en bas */}
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-10">
              {project.stack.slice(0, 2).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/50 text-white/90 backdrop-blur-sm border border-white/15"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Infos */}
          <div className="p-5" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(8px)" }}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-[var(--fg)]">{project.name}</h3>
                <p className="text-xs text-[var(--fg-muted)] mt-1 line-clamp-2">{project.tagline}</p>
              </div>
              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--fg-muted)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-[#050508] transition-all duration-300">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projets" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Réalisations
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            Nos derniers projets
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {projects.map((project) => (
            <ProjectCard3D key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
