import type React from "react"
import type { Metadata, Viewport } from "next"
import { Fraunces, DM_Sans, Great_Vibes } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import {
  JsonLd,
  organizationSchema,
  websiteSchema,
} from "@/components/json-ld"
import { SITE_URL, createPageMetadata, pageSeo, siteConfig } from "@/lib/seo"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
})

const homeMeta = createPageMetadata(pageSeo.home)

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${pageSeo.home.title} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: homeMeta.description,
  keywords: homeMeta.keywords,
  authors: homeMeta.authors,
  creator: homeMeta.creator,
  publisher: homeMeta.publisher,
  category: homeMeta.category,
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: homeMeta.robots,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: `${siteConfig.name} — ${siteConfig.tagline}`,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@icezea",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "color-scheme": "light",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.themeColor },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.themeColor },
  ],
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AE" className="overflow-x-clip">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`font-sans ${dmSans.variable} ${fraunces.variable} ${greatVibes.variable} min-h-dvh overflow-x-clip`}
      >
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
