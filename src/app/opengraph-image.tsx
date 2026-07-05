import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#09090b",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#818cf8",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Full-Stack Developer
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "white",
            marginTop: 16,
            letterSpacing: -2,
          }}
        >
          Khalid Siyanbola
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.7)",
            marginTop: 20,
            maxWidth: 900,
          }}
        >
          React, Next.js, Node.js, and Go — marketplaces, real-time apps,
          and fintech tools.
        </div>
      </div>
    ),
    { ...size }
  );
}
