import type { Metadata } from "next"

/**
 * Canonical production origin for IceZea on Vercel.
 * Always prefer NEXT_PUBLIC_SITE_URL; default is the live domain (never *.vercel.app).
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://icezeaicecream.com")
  .replace(/\/$/, "")
  .replace(/^(?!https?:\/\/)/, "https://")

export const siteConfig = {
  name: "IceZea",
  legalName: "IceZea Ice Creams",
  tagline: "Frozen Indulgence",
  description:
    "Premium kulfi & ice creams crafted in the UAE with real ingredients and pure milk. Authentic flavours for retailers and families across the Emirates.",
  url: SITE_URL,
  locale: "en_AE",
  language: "en",
  email: "hello@icezeaicecream.com",
  phone: "+971503829005",
  phoneDisplay: "+971 50 382 9005",
  whatsapp: "https://wa.me/971503829005",
  address: {
    locality: "Ajman",
    region: "Ajman",
    country: "AE",
    countryName: "United Arab Emirates",
  },
  social: {
    // Replace with real profiles when available
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
  },
  ogImage: "/opengraph-image",
  themeColor: "#f7f1e6",
  author: "IceZea Ice Creams",
  keywords: [
    "IceZea",
    "kulfi UAE",
    "premium ice cream UAE",
    "milk popsicles",
    "Ajman ice cream",
    "wholesale kulfi",
    "Halal ice cream",
    "Made in UAE ice cream",
    "retailer ice cream supplier",
  ],
} as const

export type PageSeo = {
  title: string
  description: string
  path: string
  keywords?: readonly string[]
  ogImage?: string
  type?: "website" | "article"
  noIndex?: boolean
}

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = siteConfig.keywords,
  ogImage = siteConfig.ogImage,
  type = "website",
  noIndex = false,
}: PageSeo): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(ogImage)

  return {
    title,
    description,
    keywords: [...keywords],
    authors: [{ name: siteConfig.author, url: SITE_URL }],
    creator: siteConfig.author,
    publisher: siteConfig.legalName,
    category: "Food & Beverage",
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url,
      title,
      description,
      siteName: `${siteConfig.name} — ${siteConfig.tagline}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${title}`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@icezea",
    },
  }
}

export const pageSeo = {
  home: {
    title: "Premium Kulfi & Ice Creams Made in UAE",
    description:
      "IceZea crafts authentic kulfi, milk popsicles and sip-ups with real milk and natural flavours. Serving 350+ retailers across the UAE.",
    path: "/",
    keywords: [
      ...siteConfig.keywords,
      "best kulfi Dubai",
      "ice cream manufacturer UAE",
    ],
  },
  about: {
    title: "Our Story — Crafted with Real Ingredients",
    description:
      "Discover how IceZea makes premium kulfi and ice creams in Ajman, UAE — real fruit, pure milk, and recipes made for the Gulf.",
    path: "/about",
    keywords: [...siteConfig.keywords, "IceZea story", "kulfi manufacturer Ajman"],
  },
  products: {
    title: "Our Flavours — Kulfis, Popsicles & Sip-Ups",
    description:
      "Explore IceZea's full flavour range: classic kulfis, milk popsicles, fruit popsicles and sip-ups. Premium wholesale ice cream for UAE retailers.",
    path: "/products",
    keywords: [
      ...siteConfig.keywords,
      "buy kulfi wholesale UAE",
      "milk popsicle flavours",
    ],
  },
  contact: {
    title: "Contact & Become a Retailer",
    description:
      "Partner with IceZea. Contact our Ajman team for wholesale kulfi and ice cream supply across Dubai, Abu Dhabi, Sharjah and all Emirates.",
    path: "/contact",
    keywords: [
      ...siteConfig.keywords,
      "become IceZea retailer",
      "wholesale ice cream UAE contact",
    ],
  },
} as const
