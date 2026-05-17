import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "linear-gradient(135deg, #00e5ff 0%, #7c3aed 100%)",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          fontWeight: 700,
          fontSize: 18,
          color: "#000000",
          letterSpacing: -1,
        }}
      >
        N
      </div>
    ),
    { ...size }
  );
}
