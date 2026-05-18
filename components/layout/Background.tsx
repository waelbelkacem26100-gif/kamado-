"use client";

const darkParticles = [
  { w: 3, h: 3, top: "12%",  left: "62%",  color: "rgba(0,229,255,0.9)",   glow: "0 0 8px rgba(0,229,255,0.6)",   dur: "11s", delay: "0s"   },
  { w: 2, h: 2, top: "38%",  left: "18%",  color: "rgba(180,100,255,0.8)", glow: "0 0 6px rgba(180,100,255,0.5)", dur: "15s", delay: "2s"   },
  { w: 4, h: 4, top: "68%",  left: "82%",  color: "rgba(0,200,255,0.7)",   glow: "0 0 10px rgba(0,200,255,0.5)", dur: "13s", delay: "4s"   },
  { w: 2, h: 2, top: "22%",  left: "87%",  color: "rgba(255,255,255,0.6)", glow: "0 0 5px rgba(255,255,255,0.4)", dur: "18s", delay: "1s"   },
  { w: 3, h: 3, top: "80%",  left: "33%",  color: "rgba(120,80,255,0.8)",  glow: "0 0 8px rgba(120,80,255,0.5)", dur: "12s", delay: "3s"   },
  { w: 2, h: 2, top: "55%",  left: "52%",  color: "rgba(0,229,255,0.6)",   glow: "0 0 6px rgba(0,229,255,0.4)",  dur: "20s", delay: "5s"   },
  { w: 3, h: 3, top: "48%",  left: "5%",   color: "rgba(255,255,255,0.5)", glow: "0 0 7px rgba(255,255,255,0.3)", dur: "16s", delay: "6s"   },
  { w: 2, h: 2, top: "90%",  left: "70%",  color: "rgba(0,180,255,0.7)",   glow: "0 0 6px rgba(0,180,255,0.4)",  dur: "14s", delay: "7s"   },
];

const lightParticles = [
  { w: 8,  h: 8,  top: "18%", left: "45%", color: "rgba(0,160,255,0.45)",  dur: "10s", delay: "0s"   },
  { w: 6,  h: 6,  top: "60%", left: "75%", color: "rgba(180,0,255,0.35)",  dur: "14s", delay: "1.8s" },
  { w: 10, h: 10, top: "75%", left: "25%", color: "rgba(0,220,180,0.4)",   dur: "11s", delay: "3.6s" },
  { w: 5,  h: 5,  top: "35%", left: "88%", color: "rgba(255,80,160,0.35)", dur: "17s", delay: "5.4s" },
  { w: 7,  h: 7,  top: "85%", left: "60%", color: "rgba(0,180,255,0.35)",  dur: "13s", delay: "7.2s" },
  { w: 9,  h: 9,  top: "12%", left: "70%", color: "rgba(200,0,255,0.3)",   dur: "15s", delay: "9s"   },
];

export default function Background() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* ════════════════════════════════════
          DARK MODE — UNIVERS 3D
      ════════════════════════════════════ */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-700">

        {/* Champ d'étoiles — grand espacement */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "140px 140px",
        }} />
        {/* Champ d'étoiles — petit espacement (décalé) */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.28) 1px, transparent 1px)",
          backgroundSize: "85px 85px",
          backgroundPosition: "42px 42px",
        }} />

        {/* Nébuleuse cyan — haut gauche */}
        <div className="absolute rounded-full" style={{
          width: 1000, height: 750,
          top: "-20%", left: "-18%",
          background: "radial-gradient(circle, rgba(0,229,255,0.13) 0%, rgba(0,100,220,0.07) 45%, transparent 70%)",
          filter: "blur(90px)",
          animation: "blobMove1 28s ease-in-out infinite",
          willChange: "transform", transform: "translateZ(0)",
        }} />
        {/* Nébuleuse violette — droite centre */}
        <div className="absolute rounded-full" style={{
          width: 750, height: 750,
          top: "25%", right: "-18%",
          background: "radial-gradient(circle, rgba(130,0,255,0.11) 0%, rgba(200,0,255,0.05) 50%, transparent 70%)",
          filter: "blur(100px)",
          animation: "blobMove2 34s ease-in-out infinite",
          willChange: "transform", transform: "translateZ(0)",
        }} />
        {/* Nébuleuse bleue profonde — bas */}
        <div className="absolute rounded-full" style={{
          width: 650, height: 500,
          bottom: "-8%", left: "22%",
          background: "radial-gradient(circle, rgba(0,60,220,0.1) 0%, rgba(0,120,255,0.05) 50%, transparent 70%)",
          filter: "blur(110px)",
          animation: "orb-drift-3 38s ease-in-out infinite",
          willChange: "transform", transform: "translateZ(0)",
        }} />

        {/* Particules lumineuses flottantes */}
        {darkParticles.map((p, i) => (
          <div key={i} style={{
            position: "absolute",
            width: p.w, height: p.h,
            top: p.top, left: p.left,
            borderRadius: "50%",
            background: p.color,
            boxShadow: p.glow,
            animation: `particle-drift ${p.dur} ease-in-out infinite`,
            animationDelay: p.delay,
            willChange: "transform",
          }} />
        ))}

        {/* Grille 3D en perspective — sol */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "32%",
          overflow: "hidden",
          perspective: "900px",
        }}>
          <div style={{
            position: "absolute",
            width: "220%", height: "210%",
            left: "-60%", bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(0,229,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.09) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            transformOrigin: "50% 100%",
            animation: "grid-scroll 5s linear infinite",
            willChange: "transform",
            maskImage: "linear-gradient(to top, black 0%, transparent 78%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 78%)",
          }} />
        </div>

        {/* Ligne d'horizon globale (basse, ne croise pas le contenu) */}
        <div style={{
          position: "absolute",
          bottom: "32%", left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.22) 25%, rgba(0,229,255,0.55) 50%, rgba(0,229,255,0.22) 75%, transparent 100%)",
          boxShadow: "0 0 18px 3px rgba(0,229,255,0.07)",
        }} />
      </div>

      {/* ════════════════════════════════════
          LIGHT MODE — LUMIÈRE DOUCE
      ════════════════════════════════════ */}
      <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-700">

        {/* Aurora cyan — haut gauche */}
        <div className="absolute rounded-full" style={{
          width: 900, height: 700, top: "-12%", left: "-16%",
          background: "radial-gradient(ellipse, rgba(0,170,255,0.16) 0%, rgba(0,110,255,0.07) 45%, transparent 70%)",
          filter: "blur(85px)",
          animation: "orb-drift-1 22s ease-in-out infinite",
          willChange: "transform", transform: "translateZ(0)",
        }} />
        {/* Aurora violette — haut droite */}
        <div className="absolute rounded-full" style={{
          width: 720, height: 720, top: "-8%", right: "-12%",
          background: "radial-gradient(ellipse, rgba(160,0,255,0.1) 0%, rgba(210,70,255,0.05) 48%, transparent 70%)",
          filter: "blur(95px)",
          animation: "orb-drift-2 28s ease-in-out infinite",
          willChange: "transform", transform: "translateZ(0)",
        }} />
        {/* Aurora chaude — bas centre */}
        <div className="absolute rounded-full" style={{
          width: 600, height: 480, bottom: "4%", left: "28%",
          background: "radial-gradient(ellipse, rgba(255,140,0,0.08) 0%, rgba(255,70,110,0.04) 52%, transparent 70%)",
          filter: "blur(105px)",
          animation: "orb-drift-3 32s ease-in-out infinite",
          willChange: "transform", transform: "translateZ(0)",
        }} />

        {/* Anneaux flottants */}
        <div style={{
          position: "absolute", width: 480, height: 480, top: "6%", left: "18%",
          borderRadius: "50%", border: "1.5px solid rgba(0,150,255,0.16)",
          animation: "ring-float-1 17s ease-in-out infinite", willChange: "transform",
        }} />
        <div style={{
          position: "absolute", width: 300, height: 300, top: "44%", right: "10%",
          borderRadius: "50%", border: "1px solid rgba(150,0,255,0.13)",
          animation: "ring-float-2 21s ease-in-out infinite", willChange: "transform",
        }} />
        <div style={{
          position: "absolute", width: 220, height: 148, bottom: "14%", left: "7%",
          borderRadius: "50%", border: "1px solid rgba(255,50,170,0.11)",
          animation: "ring-float-3 25s ease-in-out infinite", willChange: "transform",
        }} />
        <div style={{
          position: "absolute", width: 150, height: 150, top: "28%", left: "4%",
          borderRadius: "50%", border: "1px solid rgba(0,210,255,0.16)",
          animation: "ring-float-1 13s ease-in-out infinite reverse", willChange: "transform",
        }} />

        {/* Particules douces */}
        {lightParticles.map((p, i) => (
          <div key={i} style={{
            position: "absolute",
            width: p.w, height: p.h,
            top: p.top, left: p.left,
            borderRadius: "50%",
            background: p.color,
            filter: "blur(1.5px)",
            animation: `particle-drift ${p.dur} ease-in-out infinite`,
            animationDelay: p.delay,
            willChange: "transform",
          }} />
        ))}

        {/* Grille de points légère */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }} />
      </div>

      {/* Grain cinématique — commun */}
      <div className="noise-overlay" />
    </div>
  );
}
