import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4efe6",
          color: "#4a3426",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            bottom: -220,
            width: 620,
            height: 620,
            borderRadius: 9999,
            border: "2px solid #a88462",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 40,
            bottom: -60,
            width: 300,
            height: 300,
            borderRadius: 9999,
            background: "#d8cbb5",
            display: "flex",
          }}
        />
        <div style={{ fontSize: 22, letterSpacing: 6, textTransform: "uppercase", display: "flex" }}>
          {site.tagline}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 132, lineHeight: 1, letterSpacing: -3 }}>Sole Mio</div>
          <div style={{ fontSize: 26, letterSpacing: 10, textTransform: "uppercase", marginTop: 18 }}>
            Candle Lab
          </div>
        </div>
      </div>
    ),
    size,
  );
}
