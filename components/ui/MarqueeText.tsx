"use client";

import { motion } from "framer-motion";

interface MarqueeTextProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

export default function MarqueeText({ items, direction = "left", speed = 30 }: MarqueeTextProps) {
  const duplicated = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-sm font-medium tracking-widest uppercase text-[var(--fg-muted)]"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-[var(--accent)]" aria-hidden="true" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
