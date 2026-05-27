"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  large?: boolean;
}

export default function ProjectCard({ project, large = false }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={`/projets/${project.slug}`} className="group block relative overflow-hidden rounded-2xl border border-[var(--border)]">
        {/* Visuel gradient */}
        <div
          className={`relative overflow-hidden ${large ? "aspect-[16/10]" : "aspect-[4/3]"} bg-gradient-to-br ${project.gradient}`}
        >
          {/* Overlay au hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

          {/* Nom du projet centré */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-2xl md:text-3xl tracking-tight opacity-30 group-hover:opacity-0 transition-opacity duration-300">
              {project.name}
            </span>
          </div>

          {/* Zoom image au hover */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>

        {/* Infos bas de carte */}
        <div className="p-5 bg-[var(--bg-secondary)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-[var(--fg)] text-lg">{project.name}</h3>
              <p className="text-sm text-[var(--fg-muted)] mt-0.5">{project.tagline}</p>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--fg-muted)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white transition-all duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
