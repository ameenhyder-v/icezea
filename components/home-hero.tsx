"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Leaf, Milk, Sparkles, Flag } from "lucide-react"

const desktopBadges = [
  { icon: Leaf, label: "100% Vegetarian" },
  { icon: Milk, label: "Made with Real Milk" },
  { icon: Sparkles, label: "No Artificial Flavours" },
  { icon: Flag, label: "Made in UAE" },
]

export function HomeHero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(window.innerHeight * 0.85, 1)))
        setOffset(progress)
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const mainY = offset * 28
  const floatY = offset * -18
  const mobileBgY = offset * 40

  return (
    <>
      {/* ========== MOBILE HERO (dark cinematic) ========== */}
      <section
        className="relative isolate min-h-[100dvh] overflow-hidden md:hidden"
        style={{ background: "linear-gradient(180deg, #14261c 0%, #0c1a14 42%, #08110d 100%)" }}
      >
        {/* Product plane — fills most of the viewport so no empty band above imagery */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute inset-x-[-10%] inset-y-[-4%] will-change-transform"
            style={{ transform: `translate3d(0, ${mobileBgY}px, 0) scale(1.05)` }}
          >
            <div className="absolute left-1/2 top-[42%] h-[55%] w-[100%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.5)_0%,rgba(255,248,235,0.16)_40%,transparent_70%)] blur-2xl" />
            <Image
              src="/products/hero-mango-kulfi.jpg"
              alt=""
              fill
              className="object-cover object-[50%_42%] opacity-95"
              sizes="100vw"
              priority
            />
          </div>
          <div
            className="absolute -left-[8%] bottom-[4%] w-[46%] will-change-transform"
            style={{ transform: `translate3d(0, ${floatY}px, 0)` }}
          >
            <div className="relative aspect-[3/4] drop-shadow-[0_18px_30px_rgba(0,0,0,0.55)]">
              <Image
                src="/products/hero-kulfi-marble.jpg"
                alt=""
                fill
                className="object-cover object-center [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
                sizes="48vw"
              />
            </div>
          </div>
          <div
            className="absolute -right-[6%] bottom-[8%] w-[44%] will-change-transform"
            style={{ transform: `translate3d(0, ${floatY * 0.7}px, 0)` }}
          >
            <div className="relative aspect-square drop-shadow-[0_18px_30px_rgba(0,0,0,0.55)]">
              <Image
                src="/products/hero-fruit-duo.jpg"
                alt=""
                fill
                className="object-cover object-center [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
                sizes="46vw"
              />
            </div>
          </div>
          {/* Soft scrim so centered copy stays readable over products */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a14]/70 via-[#0c1a14]/45 to-[#08110d]/75" />
        </div>

        {/* Copy centered over the product scene — same model as desktop */}
        <div className="safe-px relative z-10 flex min-h-[100dvh] flex-col justify-center pb-8 pt-16">
          <div className="mx-auto w-full max-w-sm text-center">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-gold drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
              Premium Kulfi &amp; Ice Creams
            </p>
            <h1 className="mt-4 font-display text-[2.35rem] font-semibold leading-[1.1] tracking-tight text-[#f6f0e6] drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
              Melt your heart with{" "}
              <span className="font-script text-[1.15em] font-normal text-gold">nostalgia</span>
            </h1>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-[#f6f0e6]/78 drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)]">
              Authentic kulfi &amp; ice creams crafted with real ingredients and pure milk. Made in UAE, for moments
              that melt your heart.
            </p>
          </div>
          <span className="sr-only">IceZea premium kulfi and ice cream products</span>
        </div>
      </section>

      {/* ========== DESKTOP / TABLET HERO (cream) ========== */}
      <section className="relative hidden overflow-hidden bg-cream pt-24 lg:pt-28 md:block">
        <div aria-hidden className="cream-glow pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[34%] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(255,248,235,0.55)_40%,transparent_70%)] blur-2xl lg:left-[72%] lg:top-1/2 lg:-translate-y-1/2"
        />

        <div className="safe-px relative mx-auto grid max-w-7xl items-center gap-10 pb-14 md:grid-cols-2 lg:grid-cols-[1fr_1.05fr] lg:gap-6 lg:pb-10 lg:pt-2">
          <div className="reveal reveal-delay-1 relative order-2 mx-auto w-full max-w-none lg:mx-0">
            <div className="relative mx-auto aspect-square w-full md:aspect-[1/1.02]">
              <div
                aria-hidden
                className="absolute left-[8%] top-[14%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle_at_35%_40%,#fff_0%,#fff8ef_45%,transparent_70%)] opacity-90"
              />

              <div
                className="absolute inset-[8%_10%_14%_16%] z-20 overflow-hidden rounded-[1.75rem] shadow-[0_24px_48px_rgba(60,35,15,0.16)] ring-1 ring-white/60 will-change-transform"
                style={{ transform: `translate3d(0, ${mainY}px, 0)` }}
              >
                <Image
                  src="/products/hero-kulfi-badam.jpg"
                  alt="IceZea Kulfi Badam premium kulfi"
                  fill
                  className="object-cover object-[50%_35%]"
                  sizes="45vw"
                  priority
                />
              </div>

              <div
                className="float-slow absolute left-[1%] top-[20%] z-30 w-[32%] overflow-hidden rounded-2xl shadow-[0_14px_28px_rgba(60,35,15,0.18)] ring-1 ring-white/70 will-change-transform"
                style={{ transform: `translate3d(0, ${floatY}px, 0)` }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/products/hero-popsicle-stacks.jpg"
                    alt="IceZea milk popsicle stacks in sunlight"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
              </div>

              <div
                className="float-slow float-delay absolute bottom-[4%] right-[2%] z-30 w-[38%] overflow-hidden rounded-2xl shadow-[0_16px_32px_rgba(60,35,15,0.2)] ring-1 ring-white/70 will-change-transform"
                style={{ transform: `translate3d(0, ${floatY * 0.7}px, 0)` }}
              >
                <div className="relative aspect-[5/4]">
                  <Image
                    src="/products/hero-picnic-pops.jpg"
                    alt="IceZea popsicles iced in a picnic cooler"
                    fill
                    className="object-cover object-center"
                    sizes="180px"
                  />
                </div>
              </div>

              <div
                className="absolute bottom-[22%] left-[6%] z-30 w-[28%] overflow-hidden rounded-2xl shadow-[0_14px_28px_rgba(60,35,15,0.18)] ring-1 ring-white/70 will-change-transform"
                style={{ transform: `translate3d(0, ${floatY * 1.1}px, 0)` }}
              >
                <div className="relative aspect-square">
                  <Image
                    src="/products/hero-mango-kulfi.jpg"
                    alt="IceZea Mango Kulfi splash"
                    fill
                    className="object-cover"
                    sizes="140px"
                  />
                </div>
              </div>

              <div className="absolute right-[8%] top-[8%] z-40 flex h-[5.5rem] w-[5.5rem] flex-col items-center justify-center rounded-full border border-gold/45 bg-gradient-to-b from-card to-cream text-center shadow-lg md:h-28 md:w-28">
                <span className="text-[0.52rem] font-bold uppercase leading-[1.1] tracking-[0.08em] text-gold-deep md:text-[0.6rem]">
                  Proudly
                  <br />
                  Made in
                  <br />
                  UAE
                </span>
                <svg className="mt-1.5 h-3.5 w-5 overflow-hidden rounded-[1px]" viewBox="0 0 12 6" aria-hidden>
                  <rect width="12" height="2" y="0" fill="#00732F" />
                  <rect width="12" height="2" y="2" fill="#FFFFFF" />
                  <rect width="12" height="2" y="4" fill="#000000" />
                  <rect width="3" height="6" fill="#FF0000" />
                </svg>
              </div>
            </div>
          </div>

          <div className="reveal z-10 order-1 max-w-xl lg:pb-8">
            <p className="eyebrow tracking-[0.28em]">Premium Kulfi & Ice Creams</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-cocoa md:text-[2.75rem] lg:text-[3.4rem]">
              Pure Flavours. Timeless{" "}
              <span className="font-script text-[1.15em] font-normal text-gold-deep">Indulgence.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Authentic kulfi & ice creams crafted with real ingredients and pure milk. Made in UAE, for moments that
              melt your heart.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {desktopBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-start gap-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-card/80 text-gold-deep shadow-sm backdrop-blur-sm">
                    <Icon size={17} strokeWidth={1.75} />
                  </div>
                  <span className="max-w-[5.5rem] text-[0.62rem] font-bold uppercase leading-snug tracking-[0.08em] text-cocoa/75">
                    {label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
