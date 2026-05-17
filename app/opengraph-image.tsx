import { ImageResponse } from "next/og";

export const alt = "Nexivo — Agence Web France";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #080810 0%, #0d0d1f 50%, #080810 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow haut-gauche */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,229,255,0.18) 0%, transparent 65%)",
          }}
        />
        {/* Glow bas-droite */}
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: -60,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 24px",
            borderRadius: 100,
            border: "1px solid rgba(0,229,255,0.35)",
            background: "rgba(0,229,255,0.07)",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#00e5ff",
            }}
          />
          <span
            style={{
              color: "#00e5ff",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            AGENCE WEB FRANCE
          </span>
        </div>

        {/* Nom */}
        <div
          style={{
            fontSize: 110,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -5,
            lineHeight: 1,
            marginBottom: 28,
          }}
        >
          Nexivo
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.5)",
            fontWeight: 400,
            marginBottom: 52,
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Transformez votre business en machine à vendre
        </div>

        {/* Pills services */}
        <div style={{ display: "flex", gap: 14 }}>
          {["Sites vitrine", "Shopify", "SaaS", "SEO", "IA"].map((s) => (
            <div
              key={s}
              style={{
                padding: "12px 26px",
                borderRadius: 100,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.75)",
                fontSize: 19,
                fontWeight: 500,
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* URL bas */}
        <div
          style={{
            position: "absolute",
            bottom: 38,
            color: "rgba(255,255,255,0.22)",
            fontSize: 18,
            letterSpacing: 1,
          }}
        >
          nexivo.fr
        </div>
      </div>
    ),
    { ...size }
  );
}
