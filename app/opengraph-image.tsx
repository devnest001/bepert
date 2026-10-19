import { ImageResponse } from "next/og";
import { company } from "@/lib/site";

export const alt = `${company.name} — ${company.category}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b1220",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#0f9f9a",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {company.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            {company.headline}
          </div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 28 }}>
            {company.category}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
