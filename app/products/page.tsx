import { Suspense } from "react"
import { ProductsCatalog } from "@/components/products-catalog"
import { SiteShell } from "@/components/site-shell"

export default function ProductsPage() {
  return (
    <SiteShell>
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center pt-28 text-muted-foreground">
            Loading products…
          </div>
        }
      >
        <ProductsCatalog />
      </Suspense>
    </SiteShell>
  )
}
