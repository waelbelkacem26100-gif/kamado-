"use client";

const clients = [
  { name: "Brainrot Club", tag: "E-commerce Shopify", color: "#a855f7" },
  { name: "Couvetoile", tag: "Site vitrine", color: "#0891b2" },
  { name: "ScreenBuild", tag: "SaaS IA", color: "#3b82f6" },
  { name: "Clustea", tag: "SaaS B2B", color: "#10b981" },
];

const techsRow1 = ["Next.js", "Shopify", "WordPress", "TypeScript", "Tailwind CSS", "Vercel", "Stripe", "PostgreSQL"];
const techsRow2 = ["Framer Motion", "Three.js", "OpenAI API", "Claude AI", "Figma", "React", "Node.js", "Prisma"];

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

        {/* 2-row bidirectional tech marquee */}
        <div className="space-y-3">
          <p className="text-center text-[10px] font-semibold tracking-widest uppercase text-[var(--fg-muted)] mb-4">
            Technologies maîtrisées
          </p>

          {/* Row 1 — left to right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...techsRow1, ...techsRow1].map((t, i) => (
                <span
                  key={`r1-${t}-${i}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--fg-muted)] opacity-60 flex-shrink-0 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent pointer-events-none" />
          </div>

          {/* Row 2 — right to left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap">
              {[...techsRow2, ...techsRow2].map((t, i) => (
                <span
                  key={`r2-${t}-${i}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--fg-muted)] opacity-50 flex-shrink-0 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]"
                >
                  {t}
                </span>
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
