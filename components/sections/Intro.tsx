"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  "Un", "site", "n'est", "pas", "une", "carte", "de", "visite.",
  "C'est", "ton", "meilleur", "commercial", "—", "il", "travaille",
  "pour", "toi", "24h/24.", "Je", "construis", "des", "sites",
  "pensés", "conversion", ":", "Shopify,", "WordPress,", "SaaS", "sur-mesure.",
];

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-section font-bold text-[var(--fg)] leading-tight">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            return (
              <Word
                key={i}
                word={word}
                progress={scrollYProgress}
                range={[start * 0.7, Math.min(end * 0.7 + 0.1, 1)]}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block mr-[0.3em] mb-1"
    >
      {word}
    </motion.span>
  );
}
