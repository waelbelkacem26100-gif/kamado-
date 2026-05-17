"use client";

import { motion, useReducedMotion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  animate?: boolean;
}

const sizes = {
  sm: { icon: 22, text: "text-base" },
  md: { icon: 28, text: "text-lg" },
  lg: { icon: 40, text: "text-2xl" },
};

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

export default function Logo({ size = "md", animate = true }: LogoProps) {
  const shouldReduce = useReducedMotion();
  const doAnimate = animate && !shouldReduce;
  const { icon, text } = sizes[size];

  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width={icon} height={icon} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        {/* Barre verticale gauche */}
        <rect x="3" y="4" width="5.5" height="24" rx="2.5" fill="currentColor" />
        {/* Bras supérieur — accent, dessiné en premier */}
        <motion.path
          d="M8.5 15 L26 4"
          stroke="var(--accent)"
          strokeWidth="5.5"
          strokeLinecap="round"
          initial={doAnimate ? { pathLength: 0, opacity: 0 } : {}}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease }}
        />
        {/* Bras inférieur — dessiné ensuite */}
        <motion.path
          d="M8.5 15 L26 28"
          stroke="currentColor"
          strokeWidth="5.5"
          strokeLinecap="round"
          initial={doAnimate ? { pathLength: 0, opacity: 0 } : {}}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.18, ease }}
        />
      </svg>

      <span className={`${text} font-bold tracking-tight leading-none`}>
        <span className="text-[var(--fg)]">Kama</span>
        <span className="text-[var(--fg-muted)] font-normal"> Agency</span>
      </span>
    </span>
  );
}
