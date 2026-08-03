import { siteConfig, absoluteUrl, SITE_URL } from "@/lib/seo"

type JsonLd = Record<string, unknown>

export function JsonLd({ data }: { data: JsonLd | JsonLd[] }) {
  const payload = Array.isArray(data) ? data : [data]
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload.length === 1 ? payload[0] : payload).replace(/</g, "\\u003c"),
      }}
    />
  )
}

export function organizationSchema(): JsonLd {
  const sameAs = [siteConfig.social.instagram, siteConfig.social.facebook, siteConfig.whatsapp].filter(
    Boolean,
  )

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "IceCreamShop", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: SITE_URL,
    logo: absoluteUrl("/products/icezea-logo.png"),
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    priceRange: "$$",
    ...(sameAs.length ? { sameAs } : {}),
  }
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-AE",
  }
}

export function webPageSchema({
  title,
  description,
  path,
  type = "WebPage",
}: {
  title: string
  description: string
  path: string
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage"
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-AE",
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function productListSchema(
  products: { name: string; description: string; image: string; category: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "IceZea Flavours",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: absoluteUrl(product.image),
        category: product.category,
        brand: {
          "@type": "Brand",
          name: siteConfig.name,
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "AED",
          url: absoluteUrl("/products"),
          seller: { "@id": `${SITE_URL}/#organization` },
        },
      },
    })),
  }
}
