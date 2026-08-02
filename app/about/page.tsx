import Image from "next/image"
import Link from "next/link"
import { Leaf, Milk, ChefHat, ArrowRight } from "lucide-react"
import { SiteShell } from "@/components/site-shell"

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="border-b border-gold/15 bg-cream pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-deep">Our Story</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-cocoa sm:text-5xl">
            Melt your heart with{" "}
            <span className="font-script text-[1.15em] font-normal text-gold-deep">nostalgia</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            IceZea is a UAE-based premium ice cream manufacturer dedicated to crafting the finest frozen treats —
            authentic kulfi, milk popsicles, and sip-ups.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-5">
            <p className="text-lg leading-relaxed text-foreground/90">
              We believe in using only the best ingredients — real fruit, pure milk, and authentic flavours that bring
              joy to every scoop.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Our commitment to quality has made us a trusted name across the Emirates, serving over 350+ retailers and
              bringing smiles to families everywhere.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-leaf px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-transform hover:scale-[1.02]"
            >
              See our flavours <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-gold/15">
            <Image
              src="/products/kulfi-range-boxes.jpg"
              alt="IceZea kulfi range"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-gold/15 bg-cream-deep py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-cocoa sm:text-4xl">How we craft</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Simple principles. Honest ingredients. Recipes made for the Gulf.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-card text-gold-deep">
                <Leaf size={22} />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-cocoa">Real fruit & nuts</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Badam, mango, coconut and more — natural taste in every stick.
              </p>
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-card text-gold-deep">
                <Milk size={22} />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-cocoa">Pure milk</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Creamy bases built on quality dairy for kulfis and milk popsicles.
              </p>
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-card text-gold-deep">
                <ChefHat size={22} />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-cocoa">Handcrafted</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Traditional methods with modern care — every batch made to delight.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
