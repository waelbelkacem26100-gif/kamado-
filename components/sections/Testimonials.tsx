"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Marie Dupont",
    role: "CEO, FleurShop",
    text: "Kama Agency a transformé notre boutique Shopify en machine à vendre. Notre taux de conversion a doublé en 3 mois. Je recommande les yeux fermés.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&auto=format&fit=crop&crop=face",
    accent: "var(--accent)",
  },
  {
    name: "Thomas Bernard",
    role: "Fondateur, TechStart",
    text: "Notre SaaS est passé de maquette à production en 8 semaines. Code propre, design premium, zéro compromis sur la qualité. Exactement ce qu'on voulait.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&auto=format&fit=crop&crop=face",
    accent: "#a855f7",
  },
  {
    name: "Sophie Laurent",
    role: "Directrice, CaféNomade",
    text: "Site livré en 3 semaines, référencé en première page Google en 2 mois. L'équipe est réactive, professionnelle, et surtout — elle obtient des résultats.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&auto=format&fit=crop&crop=face",
    accent: "#3b82f6",
  },
  {
    name: "Lucas Moreau",
    role: "DG, InnovateCo",
    text: "Design haut de gamme, délais respectés, communication irréprochable. Notre site reflète enfin qui nous sommes vraiment.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&auto=format&fit=crop&crop=face",
    accent: "#f97316",
  },
  {
    name: "Amina Benali",
    role: "Fondatrice, ArtisanBox",
    text: "Boutique Shopify sur-mesure livrée en 6 semaines. Les ventes ont augmenté de 60% le premier mois. Un investissement qui se rembourse vite.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80&auto=format&fit=crop&crop=face",
    accent: "#ec4899",
  },
  {
    name: "Paul Renaud",
    role: "CTO, DataFlow",
    text: "Architecture Next.js impeccable, API bien structurée, performance exemplaire. Rare de trouver une agence avec ce niveau technique.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80&auto=format&fit=crop&crop=face",
    accent: "#10b981",
  },
];

function StarRow({ count, accent }: { count: number; accent: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 24 24" fill={accent}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] p-6 rounded-2xl border border-white/[0.07] mx-3 flex flex-col"
      style={{ background: "rgba(255,255,255,0.025)", backdropFilter: "blur(10px)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)` }}
      />
      <StarRow count={t.stars} accent={t.accent} />
      <p className="text-sm leading-relaxed mt-3 mb-5 flex-1" style={{ color: "rgba(240,240,240,0.55)" }}>
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div
          className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0"
          style={{ boxShadow: `0 0 0 2px ${t.accent}30` }}
        >
          <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="36px" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">{t.name}</p>
          <p className="text-[10px]" style={{ color: t.accent }}>{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Cosmos background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #0d0d1f 0%, #11112a 50%, #0d0d1f 100%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(168,85,247,0.05) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="cosmos-nebula-purple absolute pointer-events-none"
        aria-hidden="true"
        style={{ width: 500, height: 500, top: "-20%", left: "-5%", opacity: 0.08 }}
      />
      <div
        className="cosmos-nebula-indigo absolute pointer-events-none"
        aria-hidden="true"
        style={{ width: 400, height: 400, bottom: "-10%", right: "0%", opacity: 0.06 }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-14 px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Témoignages
          </span>
          <h2 className="text-section font-bold text-white">Ils nous font confiance</h2>
          <p className="text-lead mt-4 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>
            Des vrais clients, des vrais résultats.
          </p>
        </div>

        {/* Auto-scroll carousel */}
        <div
          className="relative overflow-hidden"
          style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}
        >
          <div
            className="flex"
            style={{
              animation: "carousel-scroll 40s linear infinite",
              width: "max-content",
            }}
          >
            {doubled.map((t, i) => (
              <div key={i} className="relative">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
