"use client";

export default function Background() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* Orb cyan — haut gauche */}
      <div
        className="absolute rounded-full"
        style={{
          width: 800,
          height: 800,
          top: "-15%",
          left: "-12%",
          background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)",
          opacity: 0.07,
          filter: "blur(60px)",
          animation: "blobMove1 22s ease-in-out infinite",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
      {/* Orb violet — milieu droite */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "40%",
          right: "-10%",
          background: "radial-gradient(circle, #7c3aed 0%, transparent 65%)",
          opacity: 0.07,
          filter: "blur(70px)",
          animation: "blobMove2 28s ease-in-out infinite",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />

      {/* Grille de points globale — couleur adaptée au thème */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, var(--border) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Grain cinématique */}
      <div className="noise-overlay" />
    </div>
  );
}
