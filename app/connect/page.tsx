import type { Metadata } from "next"
import { ConnectCard } from "@/components/connect-card"
import { JsonLd, breadcrumbSchema, webPageSchema } from "@/components/json-ld"
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/seo"

const title = "IceZea | Connect With Us"
const description = "Premium kulfi and popsicles made in the UAE. Melt Your Heart With Nostalgia."
const socialImageAlt = "IceZea — Melt Your Heart With Nostalgia."

const pageMetadata = createPageMetadata({
  title,
  description,
  path: "/connect",
  keywords: [
    ...siteConfig.keywords,
    "IceZea connect",
    "IceZea contact",
    "premium kulfi UAE",
    "IceZea popsicles",
  ],
  ogImage: "/connect/opengraph-image",
})

export const metadata: Metadata = {
  ...pageMetadata,
  title: { absolute: title },
  openGraph: {
    ...pageMetadata.openGraph,
    title,
    images: [
      {
        url: absoluteUrl("/connect/opengraph-image"),
        width: 1200,
        height: 630,
        alt: socialImageAlt,
        type: "image/png",
      },
    ],
  },
}

export default function ConnectPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title,
            description,
            path: "/connect",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Connect", path: "/connect" },
          ]),
        ]}
      />
      <ConnectCard />
    </>
  )
}
