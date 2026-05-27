import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page introuvable | Kama Agency",
  description: "La page que vous cherchez n'existe pas. Retournez à l'accueil.",
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Ambient glows */}
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "radial-gradient(ellipse, rgba(0,255,135,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 300,
            height: 300,
            bottom: "15%",
            right: "15%",
            background: "radial-gradient(ellipse, rgba(168,85,247,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Static stars */}
        {[
          { top: "12%", left: "8%", size: 2, opacity: 0.6 },
          { top: "22%", left: "18%", size: 1, opacity: 0.4 },
          { top: "7%", left: "35%", size: 1.5, opacity: 0.5 },
          { top: "18%", left: "55%", size: 2, opacity: 0.7 },
          { top: "8%", left: "72%", size: 1, opacity: 0.3 },
          { top: "25%", left: "85%", size: 2, opacity: 0.5 },
          { top: "38%", left: "92%", size: 1.5, opacity: 0.4 },
          { top: "55%", left: "88%", size: 1, opacity: 0.6 },
          { top: "70%", left: "78%", size: 2, opacity: 0.3 },
          { top: "80%", left: "90%", size: 1, opacity: 0.5 },
          { top: "65%", left: "5%", size: 1.5, opacity: 0.4 },
          { top: "78%", left: "20%", size: 1, opacity: 0.6 },
          { top: "88%", left: "40%", size: 2, opacity: 0.3 },
          { top: "82%", left: "60%", size: 1, opacity: 0.5 },
          { top: "45%", left: "3%", size: 1.5, opacity: 0.4 },
          { top: "33%", left: "48%", size: 1, opacity: 0.2 },
          { top: "52%", left: "62%", size: 1, opacity: 0.35 },
          { top: "60%", left: "30%", size: 2, opacity: 0.3 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              background: "var(--accent)",
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 3}px var(--accent)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl mx-auto">
        {/* UFO / Astronaut emoji alternative — big glowing 404 */}
        <div className="mb-8 select-none" aria-hidden="true">
          <span
            className="text-[clamp(80px,18vw,160px)] font-black leading-none"
            style={{
              background: "linear-gradient(135deg, var(--accent) 0%, rgba(0,255,135,0.4) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(0,255,135,0.3))",
            }}
          >
            404
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-4">
          Vous vous êtes perdu dans l&apos;espace ?
        </h1>
        <p className="text-[var(--fg-muted)] mb-10 leading-relaxed max-w-md mx-auto">
          La page que vous cherchez n&apos;existe pas ou a été déplacée. Pas de panique — retournez à la base.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(0,255,135,0.25)]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[var(--fg)] border border-[var(--border)] hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-all duration-200"
          >
            Démarrer un projet
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {[
            { label: "Nos services", href: "/services/" },
            { label: "Nos réalisations", href: "/projets/" },
            { label: "Blog", href: "/blog/" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors px-3 py-1.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)]/30"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
