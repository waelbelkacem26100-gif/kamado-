"use client";

import { useRef, useState } from "react";
import Link from "next/link";
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
          {/* Browser mockup */}
          <div className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            {/* Browser window frame */}
            <div className="absolute inset-x-5 top-5 bottom-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden flex flex-col shadow-2xl">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-3 py-2.5 bg-white/10 border-b border-white/10 flex-shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400/80" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                  <div className="w-2 h-2 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 mx-2 h-4 bg-white/10 rounded-full flex items-center px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 mr-1.5" />
                  <div className="h-1.5 bg-white/20 rounded w-3/4" />
                </div>
              </div>
              {/* Mock page content */}
              <div className="flex-1 p-3 space-y-2">
                <div className="h-2.5 bg-white/20 rounded-full w-2/3" />
                <div className="h-2 bg-white/15 rounded-full w-full" />
                <div className="h-2 bg-white/15 rounded-full w-5/6" />
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div className="h-10 bg-white/10 rounded-lg" />
                  <div className="h-10 bg-white/15 rounded-lg" />
                  <div className="h-10 bg-white/10 rounded-lg" />
                </div>
                <div className="h-2 bg-white/10 rounded-full w-1/2 mt-1" />
              </div>
            </div>
            {/* Stack badges */}
            <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 2).map((tech) => (
                <span key={tech} className="text-xs font-medium px-2 py-0.5 rounded-full bg-black/30 text-white/90 backdrop-blur-sm border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Infos */}
          <div className="p-5 bg-[var(--bg-secondary)]">
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
          className="mb-14"
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
