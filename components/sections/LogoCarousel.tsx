"use client";

const logos = [
  { name: "Shopify", abbr: "Sh" },
  { name: "WordPress", abbr: "Wp" },
  { name: "Next.js", abbr: "Nx" },
  { name: "React", abbr: "Re" },
  { name: "TypeScript", abbr: "Ts" },
  { name: "Tailwind", abbr: "Tw" },
  { name: "Vercel", abbr: "Vc" },
  { name: "Figma", abbr: "Fi" },
  { name: "Node.js", abbr: "No" },
  { name: "GSAP", abbr: "Gs" },
  { name: "Framer", abbr: "Fr" },
  { name: "Stripe", abbr: "St" },
];

const doubled = [...logos, ...logos];

export default function LogoCarousel() {
  return (
    <section className="py-10 border-b border-[var(--border)] overflow-hidden">
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-[var(--fg-muted)] mb-8">
        Technologies maîtrisées
      </p>
      <div className="relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="inline-flex items-center gap-3 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-xs font-bold text-[var(--accent)] group-hover:border-[var(--accent)]/40 transition-colors">
                {logo.abbr}
              </div>
              <span className="text-sm font-medium text-[var(--fg-muted)] group-hover:text-[var(--fg)] transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
