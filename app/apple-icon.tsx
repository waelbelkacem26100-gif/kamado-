import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "linear-gradient(135deg, #080810 0%, #111120 100%)",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -20,
            left: -20,
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,229,255,0.25) 0%, transparent 70%)",
          }}
        />
        <span
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          N
        </span>
      </div>
    ),
    { ...size }
  );
}
