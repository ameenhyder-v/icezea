import { ImageResponse } from "next/og"
import { brand, websiteHost } from "@/lib/brand"

export const alt = "IceZea — Melt Your Heart With Nostalgia."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function ConnectOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#EEEAD7",
          color: "#2D0000",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "sans-serif",
            letterSpacing: "0.34em",
            textTransform: "uppercase",
            fontSize: 26,
            color: "#6D0808",
          }}
        >
          <span>IceZea</span>
          <span style={{ color: "#B89B6A" }}>—</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 76,
              lineHeight: 1.05,
              color: "#6D0808",
              maxWidth: 920,
            }}
          >
            {brand.tagline}
          </div>
          <div
            style={{
              marginTop: 28,
              fontFamily: "sans-serif",
              fontSize: 28,
              lineHeight: 1.4,
              color: "#4A5144",
              maxWidth: 820,
            }}
          >
            Premium kulfi and popsicles, made in the UAE.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "sans-serif",
            fontSize: 22,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#6D0808",
          }}
        >
          <span>Connect with us</span>
          <span>{websiteHost(brand.websiteUrl)}</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
