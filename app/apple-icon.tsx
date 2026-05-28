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
          background: "#0a0a0a",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="130"
          height="130"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="4" width="5.5" height="24" rx="2.5" fill="#f0f0f0" />
          <path d="M8.5 15 L26 4" stroke="#00ff87" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M8.5 15 L26 28" stroke="#f0f0f0" strokeWidth="5.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
