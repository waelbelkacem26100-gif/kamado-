"use client";

const clients = [
  { name: "Brainrot Club", tag: "E-commerce Shopify", color: "#a855f7" },
  { name: "Couvetoile", tag: "Site vitrine", color: "#0891b2" },
  { name: "ScreenBuild", tag: "SaaS IA", color: "#3b82f6" },
  { name: "Clustea", tag: "SaaS B2B", color: "#10b981" },
];

interface Tech {
  name: string;
  icon: string;
}

const techsRow1: Tech[] = [
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Shopify", icon: "shopify" },
  { name: "WordPress", icon: "wordpress" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Vercel", icon: "vercel" },
  { name: "Stripe", icon: "stripe" },
  { name: "PostgreSQL", icon: "postgresql" },
];

const techsRow2: Tech[] = [
  { name: "Framer Motion", icon: "framer" },
  { name: "Three.js", icon: "threedotjs" },
  { name: "OpenAI", icon: "openai" },
  { name: "Anthropic", icon: "anthropic" },
  { name: "Figma", icon: "figma" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Prisma", icon: "prisma" },
];

function TechPill({ tech }: { tech: Tech }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium text-[var(--fg-muted)] flex-shrink-0 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.simpleicons.org/${tech.icon}/ffffff`}
        alt=""
        width={14}
        height={14}
        className="opacity-70"
        aria-hidden="true"
      />
      {tech.name}
    </span>
  );
}

export default function LogoCarousel() {
  return (
    <section className="py-14 border-b border-[var(--border)] px-6 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        {/* Client references */}
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-[var(--fg-muted)] mb-8">
          Ils nous font confiance
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center justify-center gap-1.5 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-colors duration-200"
            >
              <span className="text-sm font-bold" style={{ color: c.color }}>
                {c.name}
              </span>
              <span className="text-[10px] text-[var(--fg-muted)]">{c.tag}</span>
            </div>
          ))}
        </div>

        {/* 2-row bidirectional tech marquee with logos */}
        <div className="space-y-3">
          <p className="text-center text-[10px] font-semibold tracking-widest uppercase text-[var(--fg-muted)] mb-4">
            Technologies maîtrisées
          </p>

          {/* Row 1 — left to right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...techsRow1, ...techsRow1].map((t, i) => (
                <TechPill key={`r1-${t.name}-${i}`} tech={t} />
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent pointer-events-none" />
          </div>

          {/* Row 2 — right to left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap">
              {[...techsRow2, ...techsRow2].map((t, i) => (
                <TechPill key={`r2-${t.name}-${i}`} tech={t} />
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
