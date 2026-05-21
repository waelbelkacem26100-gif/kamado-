"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const stats = [
  { value: 4, suffix: "+", label: "Projets livrés", desc: "Sites, Shopify & SaaS" },
  { value: 100, suffix: "%", label: "Clients satisfaits", desc: "Zéro litige, zéro remboursement" },
  { value: 47, suffix: "%", label: "Conversion en plus", desc: "Moyenne sur nos projets e-commerce" },
  { value: 3, suffix: " sem", label: "Délai moyen", desc: "Du brief à la mise en ligne" },
];

function CountUp({ end, suffix, duration = 1600 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(end);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      setCount(0);
      const startTime = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * end));
        if (progress < 1) requestAnimationFrame(step);
        else setCount(end);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) run(); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function ChiffresKeys() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Chiffres clés
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            Des résultats qui parlent d&apos;eux-mêmes
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
            >
              <p className="text-4xl font-black text-[var(--accent)] mb-2 leading-none">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm font-semibold text-[var(--fg)] mb-1">{stat.label}</p>
              <p className="text-xs text-[var(--fg-muted)]">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
