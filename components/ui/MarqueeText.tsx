"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MarqueeTextProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

export default function MarqueeText({ items, direction = "left", speed = 30 }: MarqueeTextProps) {
  const duplicated = [...items, ...items];
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPaused(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={isPaused ? {} : { x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={isPaused ? {} : { duration: speed, ease: "linear", repeat: Infinity }}
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
