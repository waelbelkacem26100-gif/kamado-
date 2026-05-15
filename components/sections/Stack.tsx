"use client";

import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "@/lib/animations";
import { STACK_MARQUEE } from "@/lib/constants";
import MarqueeText from "@/components/ui/MarqueeText";

export default function Stack() {
  return (
    <section className="py-24 border-y border-[var(--border)] overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mb-10 px-6 max-w-7xl mx-auto"
      >
        <p className="text-xs font-medium tracking-widest uppercase text-[var(--fg-muted)]">
          Stack & outils
        </p>
      </motion.div>

      <div className="space-y-6">
        <MarqueeText items={STACK_MARQUEE} direction="left" speed={35} />
        <MarqueeText items={[...STACK_MARQUEE].reverse()} direction="right" speed={28} />
      </div>
    </section>
  );
}
