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
          background: "#0b0b16",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span
          style={{
            fontSize: 21,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: -1,
            lineHeight: 1,
          }}
        >
          K
        </span>
        <div
          style={{
            position: "absolute",
            top: 5,
            right: 5,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#00e5ff",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
