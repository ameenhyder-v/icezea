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
      <section className="border-b border-gold/15 bg-cream pt-28 pb-12 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-deep">Our Collection</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-cocoa sm:text-5xl">Shop Flavours</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Premium kulfis, milk popsicles and sip-ups — crafted in the UAE with real ingredients.
          </p>
        </div>
      </section>

      <section className="sticky top-[4.5rem] z-30 border-b border-gold/15 bg-cream/95 backdrop-blur-md sm:top-20">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-4 sm:px-6 lg:px-8">
          {categoryFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveCategory(filter.id)}
              className={cn(
                "shrink-0 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors",
                activeCategory === filter.id
                  ? "bg-leaf text-white shadow-md shadow-leaf/20"
                  : "bg-card text-cocoa/70 ring-1 ring-gold/20 hover:text-gold-deep",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {products.map((product, index) => (
            <article
              key={`${product.category}-${product.name}`}
              className="stagger-item group overflow-hidden rounded-2xl border border-gold/15 bg-card shadow-sm transition-shadow hover:shadow-xl"
              style={{ animationDelay: `${(index % 6) * 60}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <span
                  className={cn(
                    "inline-block rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.1em]",
                    categoryMeta[product.category].accent,
                  )}
                >
                  {categoryMeta[product.category].label}
                </span>
                <h2 className="mt-3 font-display text-xl font-semibold text-cocoa">{product.name}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-gold/15 bg-cream-deep py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-cocoa">Stock these flavours</h2>
          <p className="mt-2 text-muted-foreground">Partner with IceZea — marketing support for retailers across UAE.</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-leaf px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-leaf/20 transition-transform hover:scale-[1.02]"
          >
            Become a Retailer
          </Link>
        </div>
      </section>
    </>
  )
}
