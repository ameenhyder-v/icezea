import { SITE_URL, siteConfig } from "@/lib/seo"

/**
 * IceZea digital brand card (`/connect`).
 *
 * Phone, email, WhatsApp and the public site URL come from `siteConfig`
 * in `lib/seo.ts`, so the rest of the website and this page stay in sync.
 * Optional channels are omitted from the page until a real URL is set.
 *
 * Instagram: NEXT_PUBLIC_INSTAGRAM_URL
 * Google Maps: NEXT_PUBLIC_GOOGLE_MAPS_URL, or set `googleMapsUrl` below.
 * Discovery links with an empty href, or a path that is not a real route, are hidden.
 */

const KNOWN_PATHS = new Set(["/", "/about", "/products", "/contact", "/connect"])

export const brand = {
  name: "ICEZEA",
  tagline: "Melt Your Heart With Nostalgia.",
  // description:
  //   "Discover the taste of nostalgia. Explore our world of premium kulfi and popsicles, crafted to bring your favourite memories back to life.",
  category: "Premium Kulfi & Popsicles",
  locationLabel: "Made with love in the UAE",
  footerLine: "Premium Kulfi & Popsicles | Made in UAE",
  websiteUrl: SITE_URL,
  instagramUrl: siteConfig.social.instagram,
  whatsappNumber: siteConfig.phone,
  whatsappUrl: siteConfig.whatsapp,
  email: siteConfig.email,
  phone: siteConfig.phone,
  phoneDisplay: siteConfig.phoneDisplay,
  salesPhone: "+971507922118",
  salesPhoneDisplay: "+971 50 792 2118",
  googleMapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL?.trim() || "",
  logoPath: "/products/icezea-logo.png",
  logoWidth: 398,
  logoHeight: 123,
  addressLabel: `${siteConfig.address.locality}, ${siteConfig.address.countryName}`,
  discovery: [
    {
      label: "Our Story",
      description: "How IceZea is crafted.",
      href: "/about",
    },
    {
      label: "Our Products",
      description: "Kulfi, popsicles and sip-ups.",
      href: "/products",
    },
    {
      label: "Our Flavours",
      description: "A taste of the range.",
      href: "/#flavours",
    },
    {
      label: "Where to Find Us",
      description: "Freezers, kiosks and stockists.",
      href: "",
    },
  ],
}

export type ConnectIcon = "instagram" | "whatsapp" | "mail" | "phone" | "globe" | "map"

export type ConnectLink = {
  id: string
  label: string
  description: string
  href: string
  external: boolean
  icon: ConnectIcon
}

export type DiscoveryLink = {
  label: string
  description: string
  href: string
}

function isPlaceholder(value: string) {
  return /\[CONFIGURE|CHANGE_ME|TODO|placeholder|example\.com|yourhandle|yourpage/i.test(value)
}

function isHttpUrl(value: string) {
  if (!value || isPlaceholder(value)) return false
  try {
    const url = new URL(value)
    return url.protocol === "https:" || url.protocol === "http:"
  } catch {
    return false
  }
}

function isInstagramProfile(value: string) {
  if (!isHttpUrl(value)) return false
  const url = new URL(value)
  const host = url.hostname.replace(/^www\./, "")
  if (host !== "instagram.com") return false
  return url.pathname.replace(/\/+$/, "").length > 1
}

function isWhatsappUrl(value: string) {
  if (!isHttpUrl(value)) return false
  const url = new URL(value)
  const host = url.hostname.replace(/^www\./, "")
  if (host === "wa.me") return /^\/\d{8,15}\/?$/.test(url.pathname)
  if (host === "api.whatsapp.com") return /^\d{8,15}$/.test(url.searchParams.get("phone") ?? "")
  return false
}

function whatsappHref() {
  if (isWhatsappUrl(brand.whatsappUrl)) return brand.whatsappUrl
  const digits = brand.whatsappNumber.replace(/\D/g, "")
  if (digits.length >= 8 && digits.length <= 15) return `https://wa.me/${digits}`
  return ""
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && !isPlaceholder(value)
}

function isPhone(value: string) {
  const digits = value.replace(/\D/g, "")
  return digits.length >= 8 && digits.length <= 15 && !isPlaceholder(value)
}

function isMapsUrl(value: string) {
  if (!isHttpUrl(value)) return false
  const url = new URL(value)
  const host = url.hostname.replace(/^www\./, "")
  if (host === "maps.apple.com") return url.pathname.replace(/\/+$/, "").length > 1
  if (host === "maps.app.goo.gl") return url.pathname.replace(/\/+$/, "").length > 1
  if (host === "goo.gl") return url.pathname.includes("/maps")
  if (host === "maps.google.com") return true
  if (host === "google.com" || host.endsWith(".google.com")) return url.pathname.includes("/maps")
  return false
}

export function websiteHost(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "")
  } catch {
    return "IceZea"
  }
}

export function sitePath(url: string) {
  try {
    const target = new URL(url)
    if (target.origin !== new URL(SITE_URL).origin) return url
    return `${target.pathname}${target.search}${target.hash}` || "/"
  } catch {
    return "/"
  }
}

export function isExternalHttp(url: string) {
  try {
    return new URL(url).origin !== new URL(SITE_URL).origin
  } catch {
    return false
  }
}

function isKnownInternal(href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) return false
  const path = href.split(/[?#]/)[0] || "/"
  return KNOWN_PATHS.has(path)
}

export function getConnectLinks(): ConnectLink[] {
  const chatHref = whatsappHref()
  const homeIsExternal = isExternalHttp(brand.websiteUrl)
  const links: Array<ConnectLink | null> = [
    isInstagramProfile(brand.instagramUrl)
      ? {
          id: "instagram",
          label: "Follow Our Journey",
          description: "The official IceZea Instagram",
          href: brand.instagramUrl,
          external: true,
          icon: "instagram",
        }
      : null,
    chatHref
      ? {
          id: "whatsapp",
          label: "Chat With Us",
          description: "Message IceZea on WhatsApp",
          href: chatHref,
          external: true,
          icon: "whatsapp",
        }
      : null,
    isEmail(brand.email)
      ? {
          id: "email",
          label: "Send Us an Email",
          description: brand.email,
          href: `mailto:${brand.email}`,
          external: false,
          icon: "mail",
        }
      : null,
    isPhone(brand.phone)
      ? {
          id: "phone",
          label: "Give Us a Call",
          description: brand.phoneDisplay || brand.phone,
          href: `tel:${brand.phone.replace(/[^\d+]/g, "")}`,
          external: false,
          icon: "phone",
        }
      : null,
    isPhone(brand.salesPhone)
      ? {
          id: "sales",
          label: "Call Sales",
          description: brand.salesPhoneDisplay || brand.salesPhone,
          href: `tel:${brand.salesPhone.replace(/[^\d+]/g, "")}`,
          external: false,
          icon: "phone",
        }
      : null,
    isHttpUrl(brand.websiteUrl)
      ? {
          id: "website",
          label: "Visit Our Website",
          description: websiteHost(brand.websiteUrl),
          href: homeIsExternal ? brand.websiteUrl : sitePath(brand.websiteUrl),
          external: homeIsExternal,
          icon: "globe",
        }
      : null,
    isMapsUrl(brand.googleMapsUrl)
      ? {
          id: "location",
          label: "Find Us",
          description: brand.addressLabel,
          href: brand.googleMapsUrl,
          external: true,
          icon: "map",
        }
      : null,
  ]

  return links.filter((link): link is ConnectLink => link !== null)
}

export function getDiscoveryLinks(): DiscoveryLink[] {
  return brand.discovery.filter((link) => {
    if (!link.href || isPlaceholder(link.href)) return false
    if (isKnownInternal(link.href)) return true
    return isHttpUrl(link.href) || isMapsUrl(link.href)
  })
}

export function getHomeHref() {
  if (!isHttpUrl(brand.websiteUrl)) return null
  if (isExternalHttp(brand.websiteUrl)) return brand.websiteUrl
  return sitePath(brand.websiteUrl)
}
