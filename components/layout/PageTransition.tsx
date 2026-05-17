"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={shouldReduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
