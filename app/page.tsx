import Link from "next/link"
import Image from "next/image"
import {
  Leaf,
  Milk,
  Sparkles,
  Flag,
  ShieldCheck,
  ChefHat,
  Droplets,
  Truck,
  ArrowRight,
} from "lucide-react"
import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"
import { HomeHero } from "@/components/home-hero"
import { EveryoneRange } from "@/components/everyone-range"
import { JsonLd, breadcrumbSchema, webPageSchema } from "@/components/json-ld"
import { featuredFlavours } from "@/lib/products"
import { createPageMetadata, pageSeo } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata(pageSeo.home)

const trustStrip = [
  { icon: Leaf, label: "100% Vegetarian" },
  { icon: Milk, label: "Made with Real Milk" },
  { icon: Sparkles, label: "No Artificial Flavours" },
  { icon: Flag, label: "Made in UAE" },
]

const valueProps = [
  {
    icon: Leaf,
    title: "Real Ingredients",
    text: "Finest nuts, fruits & pure milk.",
  },
  {
    icon: ChefHat,
    title: "Authentic Recipes",
    text: "Traditional flavours, crafted to perfection.",
  },
  {
    icon: ShieldCheck,
    title: "Fresh & Hygienic",
    text: "Prepared in a modern hygienic facility.",
  },
  {
    icon: Droplets,
    title: "No Preservatives",
    text: "Pure taste with zero compromise.",
  },
  {
    icon: Truck,
    title: "Delivering Quality",
    text: "Ensuring freshness across UAE.",
  },
]

export default function Home() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          webPageSchema({
            title: pageSeo.home.title,
            description: pageSeo.home.description,
            path: "/",
          }),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />
      <HomeHero />

      <EveryoneRange />

      {/* Mobile: compact trust strip · Desktop/tablet: Crafted with care cards */}
      <section
        aria-labelledby="values-heading"
        className="relative overflow-hidden border-y border-gold/20 bg-gradient-to-b from-card via-cream to-cream"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent"
        />

        {/* Mobile only */}
        <div className="safe-px relative mx-auto max-w-7xl py-6 md:hidden">
          <div className="grid grid-cols-4 gap-1.5">
            {trustStrip.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 bg-white text-gold-deep shadow-[0_6px_14px_-8px_rgba(60,35,15,0.28)]">
                  <Icon className="size-4" strokeWidth={1.6} aria-hidden />
                </div>
                <span className="max-w-[4.75rem] text-[0.5rem] font-bold uppercase leading-tight tracking-[0.04em] text-cocoa/80">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet + desktop */}
        <div className="safe-px relative mx-auto hidden max-w-7xl py-14 md:block lg:py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="eyebrow">Why IceZea</p>
            <h2
              id="values-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-cocoa"
            >
              Crafted with care
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {valueProps.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="value-card flex flex-col items-center rounded-[1.35rem] border border-gold/25 p-6 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-b from-white to-cream text-gold-deep shadow-[0_8px_20px_-10px_rgba(160,120,40,0.35)]">
                  <Icon size={22} strokeWidth={1.6} aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-cocoa">
                  {title}
                </h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE FLAVOURS */}
      <section id="flavours" className="relative overflow-hidden bg-cream py-14 sm:py-20 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_70%)]"
        />
        <div className="safe-px relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="text-center lg:text-left">
            <p className="eyebrow">Taste the range</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-cocoa sm:text-3xl md:text-4xl">
              Explore Our Flavours
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground sm:text-base lg:mx-0">
              A flavour for every mood. A moment for every you.
            </p>
            <Link href="/products" className="btn-primary mt-6 w-full max-w-xs sm:mt-8 sm:w-auto">
              Explore All Flavours <ArrowRight size={16} />
            </Link>
          </div>

          <div className="snap-row no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 md:grid-cols-3 lg:grid-cols-6 lg:gap-3">
            {featuredFlavours.map((flavour) => (
              <Link
                key={flavour.name}
                href={flavour.href}
                className="snap-card group flex w-[38vw] min-w-[6.75rem] max-w-[8.5rem] shrink-0 flex-col items-center sm:w-auto sm:max-w-none"
              >
                <div className="arch relative aspect-[3/4.15] w-full overflow-hidden bg-cream-deep shadow-[0_14px_28px_rgba(60,35,15,0.1)] ring-1 ring-gold/25 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_22px_40px_rgba(160,120,40,0.18)] group-hover:ring-gold/50">
                  <Image
                    src={flavour.image}
                    alt={flavour.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 38vw, 120px"
                  />
                </div>
                <span className="mt-2.5 text-center text-[0.62rem] font-bold uppercase tracking-[0.06em] text-cocoa transition-colors group-hover:text-gold-deep sm:mt-3 sm:text-[0.68rem] sm:tracking-[0.08em]">
                  {flavour.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle CTA */}
      <section className="relative min-h-[22rem] overflow-hidden sm:min-h-[26rem] md:min-h-[28rem]">
        <div className="absolute inset-0">
          <Image
            src="/products/picnic-cooler.jpg"
            alt="IceZea cooler packed with premium kulfi and popsicles for outdoor sharing"
            fill
            className="object-cover object-[center_40%] scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cocoa/92 via-cocoa/68 to-cocoa/40 sm:bg-gradient-to-r sm:from-cocoa/90 sm:via-cocoa/65 sm:to-cocoa/28" />
        </div>
        <div className="safe-px relative mx-auto flex h-full max-w-7xl flex-col items-start justify-end gap-4 py-16 sm:justify-center sm:gap-5 sm:py-20">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-gold sm:text-xs">
            Across the Emirates
          </p>
          <h2 className="max-w-xl font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Serving joy in 350+ stores & restaurants
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
            Bring IceZea to your shop — premium kulfi and popsicles your customers will love.
          </p>
          <Link
            href="/contact"
            className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold to-gold-deep px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-cocoa shadow-[0_14px_32px_-10px_rgba(0,0,0,0.35)] ring-1 ring-white/20 transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
          >
            Become a Retailer <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteShell>
  )
}
