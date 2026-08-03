import type { Metadata } from "next"
import { Suspense } from "react"
import { ProductsCatalog } from "@/components/products-catalog"
import { SiteShell } from "@/components/site-shell"
import { JsonLd, breadcrumbSchema, productListSchema, webPageSchema } from "@/components/json-ld"
import { getAllProducts } from "@/lib/products"
import { createPageMetadata, pageSeo } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata(pageSeo.products)

export default function ProductsPage() {
  const products = getAllProducts()

  return (
    <SiteShell>
      <JsonLd
        data={[
          webPageSchema({
            title: pageSeo.products.title,
            description: pageSeo.products.description,
            path: "/products",
            type: "CollectionPage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Flavours", path: "/products" },
          ]),
          productListSchema(
            products.map((p) => ({
              name: p.name,
              description: p.description,
              image: p.image,
              category: p.category,
            })),
          ),
        ]}
      />
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center pt-28 text-muted-foreground" role="status">
            Loading products…
          </div>
        }
      >
        <ProductsCatalog />
      </Suspense>
    </SiteShell>
  )
}
