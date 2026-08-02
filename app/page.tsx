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
  Star,
  ArrowRight,
  Play,
} from "lucide-react"
import { SiteShell } from "@/components/site-shell"
import { bestsellers, featuredFlavours } from "@/lib/products"

const heroBadges = [
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

function Stars({ label }: { label: string }) {
  return (
    <div className="mt-2 flex items-center justify-center gap-0.5 text-[#c9a227]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
      ))}
      <span className="ml-1.5 text-[0.7rem] font-medium text-muted-foreground">({label})</span>
    </div>
  )
}

export default function Home() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream pt-24 sm:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_68%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(122,48,64,0.08),transparent_70%)]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:px-8 lg:pb-20">
          <div className="reveal z-10 max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-deep sm:text-[0.8rem]">
              Premium Kulfi & Ice Creams
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-cocoa sm:text-5xl lg:text-[3.6rem]">
              Pure Flavours. Timeless{" "}
              <span className="font-script text-[1.15em] font-normal text-gold-deep">Indulgence.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Authentic kulfi & ice creams crafted with real ingredients and pure milk. Made in UAE, for moments that
              melt your heart.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
              {heroBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-start gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 bg-card text-gold-deep shadow-sm">
                    <Icon size={18} />
                  </div>
                  <span className="text-[0.65rem] font-bold uppercase leading-snug tracking-[0.08em] text-cocoa/80">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-leaf/25 transition-transform hover:scale-[1.02]"
              >
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cocoa/15 bg-card px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-cocoa transition-colors hover:border-gold/40 hover:text-gold-deep"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current">
                  <Play size={10} fill="currentColor" />
                </span>
                Our Story
              </Link>
            </div>
          </div>

          {/* Hero visual collage */}
          <div className="reveal reveal-delay-1 relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute inset-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.9),rgba(253,248,241,0.2)_55%,transparent_75%)]" />

            <div className="relative aspect-[5/5.2]">
              <div className="absolute left-[6%] top-[12%] z-10 w-[42%] float-slow overflow-hidden rounded-2xl shadow-2xl shadow-cocoa/20 ring-1 ring-black/5">
                <Image
                  src="/products/kulfi-badam-boxes.jpg"
                  alt="IceZea Kulfi Badam"
                  width={420}
                  height={520}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div className="absolute right-[4%] top-[4%] z-20 w-[48%] overflow-hidden rounded-2xl shadow-2xl shadow-cocoa/25 ring-1 ring-black/5">
                <Image
                  src="/products/hero-kulfi-badam.jpg"
                  alt="IceZea Kulfi Badam on stick"
                  width={480}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div className="absolute bottom-[6%] left-[18%] z-30 w-[54%] overflow-hidden rounded-2xl shadow-2xl shadow-cocoa/20 ring-1 ring-black/5">
                <Image
                  src="/products/kulfi-malai-boxes.jpg"
                  alt="IceZea Kulfi Malai"
                  width={520}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute right-[2%] bottom-[18%] z-40 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-gold/50 bg-card text-center shadow-xl sm:h-28 sm:w-28">
                <span className="text-[0.55rem] font-bold uppercase leading-tight tracking-[0.12em] text-gold-deep sm:text-[0.62rem]">
                  Proudly
                  <br />
                  Made in
                  <br />
                  UAE
                </span>
                <span className="mt-1 text-lg" aria-hidden>
                  🇦🇪
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="bg-cream pb-6 pt-6 sm:pb-10 sm:pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold/50 sm:w-16" />
            <h2 className="font-display text-2xl font-semibold tracking-[0.08em] text-cocoa sm:text-3xl">
              BESTSELLERS
            </h2>
            <span className="h-px w-10 bg-gold/50 sm:w-16" />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {bestsellers.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group stagger-item overflow-hidden rounded-2xl ${item.bg} p-3 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-white/40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 16vw"
                  />
                </div>
                <h3 className="mt-3 text-center text-[0.72rem] font-bold uppercase tracking-[0.06em] text-cocoa">
                  {item.name}
                </h3>
                <Stars label={item.reviews} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE BAR */}
      <section className="border-y border-gold/15 bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:gap-4 lg:px-8 lg:py-12">
          {valueProps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3 lg:flex-col lg:items-center lg:text-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-cream text-gold-deep">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-cocoa">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPLORE FLAVOURS */}
      <section id="flavours" className="bg-cream py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cocoa sm:text-4xl">
              Explore Our Flavours
            </h2>
            <p className="mt-3 max-w-sm text-muted-foreground">
              A flavour for every mood. A moment for every you.
            </p>
            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-leaf px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-leaf/20 transition-transform hover:scale-[1.02]"
            >
              Explore All Flavours <ArrowRight size={16} />
            </Link>
          </div>

          <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible lg:grid-cols-6 lg:gap-3">
            {featuredFlavours.map((flavour, i) => (
              <Link
                key={flavour.name}
                href={flavour.href}
                className="group flex w-[7.5rem] shrink-0 flex-col items-center sm:w-auto"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="arch relative aspect-[3/4] w-full overflow-hidden bg-cream-deep shadow-md ring-1 ring-gold/15 transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <Image
                    src={flavour.image}
                    alt={flavour.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="120px"
                  />
                </div>
                <span className="mt-3 text-center text-[0.7rem] font-bold uppercase tracking-[0.08em] text-cocoa">
                  {flavour.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/products/picnic-cooler.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cocoa/80 via-cocoa/55 to-cocoa/35" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-5 px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Across the Emirates</p>
          <h2 className="max-w-xl font-display text-3xl font-semibold text-white sm:text-4xl">
            Serving joy in 350+ stores & restaurants
          </h2>
          <p className="max-w-md text-white/85">
            Bring IceZea to your shop — premium kulfi and popsicles your customers will love.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-cocoa transition-transform hover:scale-[1.02]"
          >
            Become a Retailer <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteShell>
  )
}
