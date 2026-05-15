"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projets" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] block mb-4"
          >
            Projets sélectionnés
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            Ce que je construis
          </motion.h2>
        </motion.div>

        {/* Grille asymétrique */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Première card large */}
          <div className="md:col-span-2">
            <ProjectCard project={projects[0]} large />
          </div>

          {/* Deux cards côte à côte */}
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[2]} />

          {/* Dernière card large */}
          <div className="md:col-span-2">
            <ProjectCard project={projects[3]} large />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
