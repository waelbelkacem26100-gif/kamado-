"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Comprendre",
    description:
      "Ton business, ta cible, tes objectifs. Avant d'écrire une ligne de code, je comprends où tu veux aller — et pourquoi.",
  },
  {
    number: "02",
    title: "Concevoir",
    description:
      "Maquettes et UX pensés conversion. Chaque décision visuelle a une raison : guider l'œil, baisser la friction, inciter à l'action.",
  },
  {
    number: "03",
    title: "Construire",
    description:
      "Code propre, performant, évolutif. Next.js, Shopify, WordPress — j'utilise la bonne technologie pour ton besoin, pas la plus tendance.",
  },
  {
    number: "04",
    title: "Lancer",
    description:
      "SEO, analytics, optimisation continue. Le lancement n'est pas la fin — c'est le début de l'itération.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const imageIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 3]);

  return (
    <section id="approche" ref={containerRef} className="relative py-24 md:py-0" style={{ minHeight: "300vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Visuel gauche sticky */}
          <div className="relative hidden md:block">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="relative aspect-square rounded-3xl overflow-hidden border border-[var(--border)]"
            >
              {steps.map((step, i) => (
                <StepVisual key={step.number} step={step} index={i} progress={imageIndex} />
              ))}
            </motion.div>
          </div>

          {/* Étapes droite */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] block mb-6"
            >
              Mon approche
            </motion.span>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="space-y-10"
            >
              {steps.map((step) => (
                <motion.div key={step.number} variants={fadeUp} className="flex gap-6 group">
                  <span className="text-4xl font-bold text-[var(--accent)] opacity-30 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 leading-none">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--fg)] mb-2">{step.title}</h3>
                    <p className="text-lead text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepVisual({
  step,
  index,
  progress,
}: {
  step: (typeof steps)[0];
  index: number;
  progress: MotionValue<number>;
}) {
  const gradients = [
    "from-blue-900 to-indigo-900",
    "from-emerald-900 to-teal-900",
    "from-orange-900 to-rose-900",
    "from-purple-900 to-pink-900",
  ];

  const opacity = useTransform(progress, [index - 0.5, index, index + 0.5], [0, 1, 0]);

  return (
    <motion.div
      className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} flex flex-col items-center justify-center p-10 text-center`}
      style={{ opacity: index === 0 ? 1 : opacity }}
    >
      <span className="text-8xl font-bold text-white/10">{step.number}</span>
      <h3 className="text-3xl font-bold text-white mt-4">{step.title}</h3>
    </motion.div>
  );
}
