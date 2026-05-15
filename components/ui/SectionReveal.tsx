"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, defaultViewport } from "@/lib/animations";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function SectionReveal({ children, className = "", stagger = false }: SectionRevealProps) {
  if (stagger) {
    return (
      <motion.div
        className={className}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      {children}
    </motion.div>
  );
}
