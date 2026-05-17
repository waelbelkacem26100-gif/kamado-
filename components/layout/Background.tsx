"use client";

export default function Background() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* ─── DARK MODE ─── */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-700">
        <div
          className="absolute rounded-full"
          style={{
            width: 800, height: 800, top: "-15%", left: "-12%",
            background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)",
            opacity: 0.07, filter: "blur(60px)",
            animation: "blobMove1 22s ease-in-out infinite",
            willChange: "transform", transform: "translateZ(0)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 600, height: 600, top: "40%", right: "-10%",
            background: "radial-gradient(circle, #7c3aed 0%, transparent 65%)",
            opacity: 0.07, filter: "blur(70px)",
            animation: "blobMove2 28s ease-in-out infinite",
            willChange: "transform", transform: "translateZ(0)",
          }}
        />
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* ─── LIGHT MODE UNIVERSE ─── */}
      <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-700">

        {/* Aurora blob — cyan, haut gauche */}
        <div
          className="absolute rounded-full"
          style={{
            width: 900, height: 700, top: "-10%", left: "-15%",
            background: "radial-gradient(ellipse, rgba(0,180,255,0.22) 0%, rgba(0,120,255,0.1) 40%, transparent 70%)",
            filter: "blur(80px)",
            animation: "orb-drift-1 20s ease-in-out infinite",
            willChange: "transform", transform: "translateZ(0)",
          }}
        />
        {/* Aurora blob — violet/pink, haut droite */}
        <div
          className="absolute rounded-full"
          style={{
            width: 700, height: 700, top: "-5%", right: "-10%",
            background: "radial-gradient(ellipse, rgba(180,0,255,0.14) 0%, rgba(220,80,255,0.07) 45%, transparent 70%)",
            filter: "blur(90px)",
            animation: "orb-drift-2 26s ease-in-out infinite",
            willChange: "transform", transform: "translateZ(0)",
          }}
        />
        {/* Aurora blob — chaud, bas centre */}
        <div
          className="absolute rounded-full"
          style={{
            width: 600, height: 500, bottom: "5%", left: "30%",
            background: "radial-gradient(ellipse, rgba(255,150,0,0.1) 0%, rgba(255,80,120,0.06) 50%, transparent 70%)",
            filter: "blur(100px)",
            animation: "orb-drift-3 30s ease-in-out infinite",
            willChange: "transform", transform: "translateZ(0)",
          }}
        />

        {/* Anneau flottant 1 — grand, cyan */}
        <div
          style={{
            position: "absolute",
            width: 500, height: 500,
            top: "8%", left: "20%",
            borderRadius: "50%",
            border: "1.5px solid rgba(0,160,255,0.2)",
            animation: "ring-float-1 16s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        {/* Anneau flottant 2 — moyen, violet */}
        <div
          style={{
            position: "absolute",
            width: 320, height: 320,
            top: "45%", right: "12%",
            borderRadius: "50%",
            border: "1px solid rgba(160,0,255,0.18)",
            animation: "ring-float-2 20s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        {/* Anneau flottant 3 — ellipse, rose */}
        <div
          style={{
            position: "absolute",
            width: 240, height: 160,
            bottom: "15%", left: "8%",
            borderRadius: "50%",
            border: "1px solid rgba(255,60,180,0.15)",
            animation: "ring-float-3 24s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        {/* Anneau flottant 4 — petit, cyan vif */}
        <div
          style={{
            position: "absolute",
            width: 160, height: 160,
            top: "30%", left: "5%",
            borderRadius: "50%",
            border: "1px solid rgba(0,220,255,0.2)",
            animation: "ring-float-1 12s ease-in-out infinite reverse",
            willChange: "transform",
          }}
        />

        {/* Particules flottantes */}
        {([
          { w: 8, h: 8, top: "18%", left: "45%", color: "rgba(0,160,255,0.5)", dur: "10s" },
          { w: 6, h: 6, top: "60%", left: "75%", color: "rgba(180,0,255,0.4)", dur: "14s" },
          { w: 10, h: 10, top: "75%", left: "25%", color: "rgba(0,220,180,0.45)", dur: "11s" },
          { w: 5, h: 5, top: "35%", left: "88%", color: "rgba(255,80,160,0.4)", dur: "17s" },
          { w: 7, h: 7, top: "85%", left: "60%", color: "rgba(0,180,255,0.4)", dur: "13s" },
          { w: 9, h: 9, top: "12%", left: "70%", color: "rgba(200,0,255,0.35)", dur: "15s" },
        ] as const).map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: p.w, height: p.h,
              top: p.top, left: p.left,
              borderRadius: "50%",
              background: p.color,
              filter: "blur(1px)",
              animation: `particle-drift ${p.dur} ease-in-out infinite`,
              animationDelay: `${i * 1.8}s`,
              willChange: "transform",
            }}
          />
        ))}

        {/* Grille de points légère */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Grain cinématique — commun aux deux thèmes */}
      <div className="noise-overlay" />
    </div>
  );
}
