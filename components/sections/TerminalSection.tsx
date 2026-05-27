"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, slideLeft, slideRight, defaultViewport } from "@/lib/animations";

const STEPS = [
  { num: "01", title: "Gestion d'équipes",         desc: "Invitez vos collaborateurs et organisez vos projets en quelques clics" },
  { num: "02", title: "Workflows automatisés",     desc: "Créez des processus sans code, gagnez en efficacité opérationnelle" },
  { num: "03", title: "Dashboard analytique",      desc: "Visualisez les performances de vos équipes en temps réel" },
];

const dashStats = [
  { label: "Tâches complétées", value: "1 284", delta: "+12%", color: "#10b981" },
  { label: "Membres actifs",    value: "47",     delta: "+3",   color: "#a855f7" },
  { label: "Projets en cours",  value: "9",      delta: "2 en retard", color: "#f97316" },
];

const barData = [42, 67, 55, 80, 91, 74, 88];
const barLabels = ["L", "M", "M", "J", "V", "S", "D"];

function DashboardMockup() {
  const maxBar = Math.max(...barData);
  return (
    <div
      className="rounded-2xl overflow-hidden border"
      style={{ borderColor: "rgba(255,255,255,0.08)", background: "#0d0d1a" }}
    >
      {/* Chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <span className="text-xs text-white/30 ml-2 font-mono">clustea — dashboard</span>
      </div>

      {/* Body */}
      <div className="p-5 space-y-4">
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-3">
          {dashStats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-3"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-[10px] text-white/40 mb-1.5 leading-tight">{s.label}</p>
              <p className="text-lg font-black text-white leading-none">{s.value}</p>
              <p className="text-[10px] mt-1 font-semibold" style={{ color: s.color }}>{s.delta}</p>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div
          className="rounded-xl p-4"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-[10px] text-white/40 mb-3">Activité hebdomadaire</p>
          <div className="flex items-end gap-2 h-[72px]">
            {barData.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <motion.div
                  className="w-full rounded-sm"
                  style={{ background: i === 4 ? "#a855f7" : "rgba(168,85,247,0.3)" }}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(v / maxBar) * 64}px` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
                />
                <span className="text-[9px] text-white/30">{barLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Task list */}
        <div className="space-y-2">
          {[
            { label: "Intégration Stripe Billing", done: true,  tag: "Dev" },
            { label: "Onboarding flow v2",         done: false, tag: "Design" },
            { label: "Dashboard permissions",      done: false, tag: "Dev" },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div
                className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center border"
                style={{
                  borderColor: t.done ? "#10b981" : "rgba(255,255,255,0.15)",
                  background:  t.done ? "#10b98122" : "transparent",
                }}
              >
                {t.done && (
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </div>
              <span className="text-xs flex-1" style={{ color: t.done ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.65)", textDecoration: t.done ? "line-through" : "none" }}>
                {t.label}
              </span>
              <span
                className="text-[9px] font-semibold px-1.5 py-0.5 rounded"
                style={{ background: "rgba(168,85,247,0.15)", color: "#a855f7" }}
              >
                {t.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TerminalSection() {
  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Projet phare
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            Clustea — SaaS B2B
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead mt-4 max-w-xl mx-auto">
            Plateforme de gestion d&apos;équipes et de workflows. MVP en production en 8 semaines.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 items-center">

          {/* Dashboard mockup */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <DashboardMockup />
          </motion.div>

          {/* Right — description */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="space-y-8"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["Next.js 15", "TypeScript", "Prisma", "Supabase"].map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-3 py-1 rounded-full border"
                  style={{ borderColor: "rgba(168,85,247,0.3)", color: "#a855f7", background: "rgba(168,85,247,0.08)" }}
                >
                  {t}
                </span>
              ))}
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: "rgba(16,185,129,0.12)", color: "#10b981", border: "1px solid rgba(16,185,129,0.25)" }}
              >
                8 sem — MVP en production
              </span>
            </div>

            <div className="space-y-6">
              {STEPS.map((step) => (
                <div key={step.num} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "rgba(168,85,247,0.12)",
                      color:      "#a855f7",
                      border:     "1px solid rgba(168,85,247,0.25)",
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--fg)] mb-0.5">{step.title}</p>
                    <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://clustea.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: "#a855f7", color: "#fff" }}
            >
              Découvrir Clustea
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
