"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer, defaultViewport } from "@/lib/animations";

interface Props {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function SectionReveal({ children, className = "", stagger = false }: Props) {
  const shouldReduce = useReducedMotion();

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
      variants={shouldReduce ? fadeIn : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      {children}
    </motion.div>
  );
}
