import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Koovis AI — From Model to Market";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Cyan glow */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(34, 211, 238, 0.08)",
            filter: "blur(80px)",
          }}
        />

        {/* Diamond logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: 56,
            height: 56,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 40,
              height: 40,
              border: "3px solid #22d3ee",
              borderRadius: 4,
              transform: "rotate(45deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 18,
              height: 18,
              background: "#22d3ee",
              borderRadius: 2,
              transform: "rotate(45deg)",
            }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#ffffff",
            }}
          >
            KOOVIS
          </span>
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#22d3ee",
            }}
          >
            AI
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 22,
            color: "#737373",
            letterSpacing: "0.08em",
          }}
        >
          From Model to Market
        </p>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 14,
            color: "#525252",
          }}
        >
          <span>Custom AI Product Development</span>
          <span style={{ color: "#22d3ee" }}>&#9670;</span>
          <span>ML Engineering</span>
          <span style={{ color: "#22d3ee" }}>&#9670;</span>
          <span>www.koovis.ai</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
