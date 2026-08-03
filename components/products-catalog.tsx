"use client"

import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  categoryFilters,
  getProductsByCategory,
  type Category,
  categoryMeta,
} from "@/lib/products"
import { cn } from "@/lib/utils"

function isCategory(value: string | null): value is Category {
  return value === "all" || value === "kulfis" || value === "popsicles" || value === "sipup"
}

export function ProductsCatalog() {
  const searchParams = useSearchParams()
  const paramCategory = searchParams.get("category")
  const [activeCategory, setActiveCategory] = useState<Category>(
    isCategory(paramCategory) ? paramCategory : "all",
  )

  useEffect(() => {
    if (isCategory(paramCategory)) {
      setActiveCategory(paramCategory)
    }
  }, [paramCategory])

  const products = useMemo(() => getProductsByCategory(activeCategory), [activeCategory])

  return (
    <>
      <section className="relative overflow-hidden border-b border-gold/15 page-atmosphere pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-32">
        <div className="safe-px relative mx-auto max-w-7xl">
          <p className="eyebrow">Our Collection</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cocoa sm:mt-4 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Our Flavours
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Premium kulfis, milk popsicles and sip-ups — crafted in the UAE with real ingredients.
          </p>
        </div>
      </section>

      <section className="sticky top-16 z-30 border-b border-gold/15 bg-cream/95 backdrop-blur-xl sm:top-[4.5rem] lg:top-[4.85rem]">
        <div className="safe-px mx-auto max-w-7xl">
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto py-3.5 sm:py-4">
            {categoryFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveCategory(filter.id)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] transition-all sm:px-5 sm:text-xs",
                  activeCategory === filter.id
                    ? "bg-gradient-to-b from-gold to-gold-deep text-cocoa shadow-[0_10px_24px_-12px_rgba(160,120,40,0.45)]"
                    : "bg-card/90 text-cocoa/70 ring-1 ring-gold/20 hover:ring-gold/40 active:bg-cream-deep",
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-10 sm:py-14 lg:py-20" aria-labelledby="products-heading">
        <div className="safe-px mx-auto max-w-7xl">
          <h2 id="products-heading" className="sr-only">
            Product catalogue
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={`${product.category}-${product.name}`}
              className="stagger-item group overflow-hidden rounded-[1.5rem] border border-gold/15 bg-card shadow-[0_14px_36px_-28px_rgba(60,35,15,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(60,35,15,0.28)]"
              style={{ animationDelay: `${(index % 6) * 60}ms` }}
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-cream-deep sm:aspect-[4/5]">
                <Image
                  src={product.image}
                  alt={`${product.name} — IceZea ${categoryMeta[product.category].label}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-5 sm:p-6">
                <span
                  className={cn(
                    "inline-block rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.1em]",
                    categoryMeta[product.category].accent,
                  )}
                >
                  {categoryMeta[product.category].label}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-cocoa sm:text-xl">
                  {product.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
              </div>
            </article>
          ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-gold/15 bg-cream-deep py-14 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_70%)]"
        />
        <div className="safe-px relative mx-auto max-w-7xl text-center">
          <p className="eyebrow justify-center">Partnership</p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-cocoa sm:text-3xl">
            Stock these flavours
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
            Partner with IceZea — premium products and support for retailers across UAE.
          </p>
          <Link href="/contact" className="btn-primary mt-7 w-full max-w-xs sm:w-auto">
            Become a Retailer
          </Link>
        </div>
      </section>
    </>
  )
}
