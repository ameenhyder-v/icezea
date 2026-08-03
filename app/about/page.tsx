import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Leaf, Milk, ChefHat, ArrowRight } from "lucide-react"
import { SiteShell } from "@/components/site-shell"
import { JsonLd, breadcrumbSchema, webPageSchema } from "@/components/json-ld"
import { createPageMetadata, pageSeo } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata(pageSeo.about)

const craftSteps = [
  {
    icon: Leaf,
    title: "Real fruit & nuts",
    text: "Badam, mango, coconut and more — natural taste in every stick.",
  },
  {
    icon: Milk,
    title: "Pure milk",
    text: "Creamy bases built on quality dairy for kulfis and milk popsicles.",
  },
  {
    icon: ChefHat,
    title: "Handcrafted",
    text: "Traditional methods with modern care — every batch made to delight.",
  },
]

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          webPageSchema({
            title: pageSeo.about.title,
            description: pageSeo.about.description,
            path: "/about",
            type: "AboutPage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Story", path: "/about" },
          ]),
        ]}
      />

      <section className="relative overflow-hidden border-b border-gold/15 page-atmosphere pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        <div className="safe-px relative mx-auto max-w-7xl">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-cocoa sm:mt-4 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Melt your heart with{" "}
            <span className="font-script text-[1.15em] font-normal text-gold-deep">nostalgia</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
            IceZea is a UAE-based premium ice cream manufacturer dedicated to crafting the finest frozen treats —
            authentic kulfi, milk popsicles, and sip-ups.
          </p>
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16 lg:py-24">
        <div className="safe-px mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 space-y-5 lg:order-1">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-cocoa sm:text-3xl">
              Made for the Emirates
            </h2>
            <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
              We believe in using only the best ingredients — real fruit, pure milk, and authentic flavours that bring
              joy to every scoop.
            </p>
            <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
              Our commitment to quality has made us a trusted name across the Emirates, serving over 350+ retailers and
              bringing smiles to families everywhere.
            </p>
            <Link href="/products" className="btn-primary mt-2 w-full max-w-xs sm:w-auto">
              See our flavours <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-[0_28px_60px_-28px_rgba(60,35,15,0.35)] ring-1 ring-gold/20 sm:rounded-[2rem] lg:order-2">
            <Image
              src="/products/kulfi-range-boxes.jpg"
              alt="Assorted IceZea kulfi boxes including Badam and Malai flavours"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-gold/15 bg-cream-deep py-14 sm:py-16 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-40 w-[min(90%,40rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.14),transparent_70%)]"
        />
        <div className="safe-px relative mx-auto max-w-7xl">
          <p className="eyebrow">Craft</p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-cocoa sm:text-3xl md:text-4xl">
            How we craft
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Simple principles. Honest ingredients. Recipes made for the Gulf.
          </p>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
            {craftSteps.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="surface-panel rounded-[1.5rem] border border-gold/15 p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-cream text-gold-deep">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <span className="font-display text-2xl font-semibold text-gold/35">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-cocoa">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
