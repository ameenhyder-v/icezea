import { ImageResponse } from "next/og"

export const alt = "IceZea — Premium Kulfi & Ice Creams Made in UAE"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

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
          padding: "64px",
          background: "linear-gradient(145deg, #f7f1e6 0%, #efe4d2 45%, #e8d7b8 100%)",
          color: "#3b2414",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#9a6b1f",
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          IceZea
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 600, maxWidth: 900 }}>
            Pure Flavours. Timeless Indulgence.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: "#6b5340",
              maxWidth: 820,
              fontFamily: "sans-serif",
            }}
          >
            Premium kulfi & ice creams crafted in the UAE with real ingredients and pure milk.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "sans-serif",
            fontSize: 22,
            color: "#9a6b1f",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>Made in UAE</span>
          <span>icezeaicecream.com</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
