"use client";

import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "@/lib/animations";

const press = [
  { name: "Le Figaro", style: "font-serif italic" },
  { name: "BFM Business", style: "font-sans font-black" },
  { name: "Le Monde", style: "font-serif" },
  { name: "Challenges", style: "font-sans font-bold" },
  { name: "Le Point", style: "font-sans font-semibold" },
];

export default function PressBar() {
  return (
    <section className="py-14 px-6 border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center text-xs font-semibold tracking-widest uppercase text-[var(--fg-muted)] mb-10"
        >
          Ils parlent de nous
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-16"
        >
          {press.map((outlet) => (
            <span
              key={outlet.name}
              className={`${outlet.style} text-lg md:text-xl text-[var(--fg-muted)] opacity-30 hover:opacity-70 transition-opacity duration-300 cursor-default select-none`}
            >
              {outlet.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
