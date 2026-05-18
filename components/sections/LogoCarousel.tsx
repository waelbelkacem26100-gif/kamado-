"use client";

const clients = [
  { name: "Brainrot Club", tag: "E-commerce Shopify", color: "#a855f7" },
  { name: "Couvetoile", tag: "Site vitrine", color: "#00e5ff" },
  { name: "ScreenBuild", tag: "SaaS IA", color: "#3b82f6" },
  { name: "Clustea", tag: "SaaS B2B", color: "#10b981" },
];

const techs = ["Next.js", "Shopify", "WordPress", "TypeScript", "Tailwind CSS", "Vercel", "Framer Motion", "Stripe"];

export default function LogoCarousel() {
  return (
    <section className="py-14 border-b border-[var(--border)] px-6">
      <div className="max-w-5xl mx-auto">
        {/* Références clients */}
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-[var(--fg-muted)] mb-8">
          Ils nous font confiance
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center justify-center gap-1.5 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-colors duration-200"
            >
              <span
                className="text-sm font-bold"
                style={{ color: c.color }}
              >
                {c.name}
              </span>
              <span className="text-[10px] text-[var(--fg-muted)]">{c.tag}</span>
            </div>
          ))}
        </div>

        {/* Stack technique en marquee */}
        <div className="relative overflow-hidden">
          <p className="text-center text-[10px] font-semibold tracking-widest uppercase text-[var(--fg-muted)] mb-5">
            Technologies maîtrisées
          </p>
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...techs, ...techs].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="inline-flex items-center text-xs font-medium text-[var(--fg-muted)] opacity-50 flex-shrink-0"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
