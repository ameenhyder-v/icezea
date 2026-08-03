"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { bestsellers } from "@/lib/products"

export function EveryoneRange() {
  const outerRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const maxShiftRef = useRef(0)
  const [maxShift, setMaxShift] = useState(0)
  const [outerHeight, setOuterHeight] = useState<number | undefined>(undefined)
  const [shift, setShift] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    const desktop = window.matchMedia("(min-width: 640px)")
    let frame = 0

    const updateShift = () => {
      const outer = outerRef.current
      if (!outer || desktop.matches || prefersReduced.matches || maxShiftRef.current <= 0) {
        setShift(0)
        return
      }
      const rect = outer.getBoundingClientRect()
      const travel = outer.offsetHeight - (stickyRef.current?.offsetHeight || window.innerHeight)
      if (travel <= 0) {
        setShift(0)
        return
      }
      const progress = Math.min(1, Math.max(0, -rect.top / travel))
      setShift(progress * maxShiftRef.current)
    }

    const measure = () => {
      const track = trackRef.current
      const sticky = stickyRef.current
      if (!track || !sticky || desktop.matches || prefersReduced.matches) {
        maxShiftRef.current = 0
        setMaxShift(0)
        setOuterHeight(undefined)
        setShift(0)
        return
      }

      const viewport = track.parentElement?.clientWidth ?? window.innerWidth
      const overflow = Math.max(0, track.scrollWidth - viewport)
      maxShiftRef.current = overflow
      setMaxShift(overflow)

      // Outer height = pinned panel + just enough scroll to scrub all cards
      const panelH = sticky.offsetHeight
      setOuterHeight(overflow > 0 ? panelH + overflow : undefined)
      updateShift()
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updateShift)
    }

    measure()
    // Remeasure after images settle
    const t = window.setTimeout(measure, 350)

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", measure)
    desktop.addEventListener("change", measure)
    prefersReduced.addEventListener("change", measure)

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null
    if (trackRef.current) ro?.observe(trackRef.current)
    if (stickyRef.current) ro?.observe(stickyRef.current)

    return () => {
      window.clearTimeout(t)
      cancelAnimationFrame(frame)
      ro?.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", measure)
      desktop.removeEventListener("change", measure)
      prefersReduced.removeEventListener("change", measure)
    }
  }, [])

  const activeIndex =
    maxShift > 0
      ? Math.min(
          bestsellers.length - 1,
          Math.max(0, Math.round((shift / maxShift) * (bestsellers.length - 1))),
        )
      : 0

  const scrubbing = maxShift > 0

  return (
    <section
      ref={outerRef}
      className="relative bg-cream sm:pb-16 sm:pt-6 lg:pb-20"
      style={outerHeight ? { height: outerHeight } : undefined}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_65%)]"
      />

      <div
        ref={stickyRef}
        className="sticky top-16 z-10 bg-cream pt-2 pb-8 sm:static sm:top-auto sm:pt-0 sm:pb-0"
      >
        <div className="safe-px relative mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-xl text-center">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/55 sm:w-14" />
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-gold-deep sm:text-xs">
                Customer favourites
              </p>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/55 sm:w-14" />
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cocoa sm:text-4xl md:text-[2.75rem]">
              Something for Everyone
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              The IceZea range retailers and families reach for first.
            </p>
          </div>

          <div className="mt-9 sm:mt-12">
            <div
              className={`-mx-4 sm:mx-0 sm:overflow-visible ${
                scrubbing ? "overflow-hidden" : "no-scrollbar overflow-x-auto"
              }`}
            >
              <div
                ref={trackRef}
                  className="flex w-max gap-3.5 px-4 will-change-transform sm:grid sm:w-auto sm:grid-cols-2 sm:gap-4 sm:px-0 sm:will-change-auto md:grid-cols-3 lg:grid-cols-5 lg:gap-5"
                style={{
                  transform: scrubbing ? `translate3d(-${shift}px, 0, 0)` : undefined,
                }}
              >
                {bestsellers.map((item, i) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex w-[72vw] max-w-[17.5rem] shrink-0 flex-col overflow-hidden rounded-[1.35rem] ${item.bg} p-3 transition-all duration-500 stagger-item hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 active:scale-[0.98] sm:w-auto sm:max-w-none sm:rounded-[1.5rem] sm:p-3.5 sm:active:scale-100`}
                    style={{ animationDelay: `${i * 70}ms` }}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-white/40 ring-1 ring-white/50 sm:rounded-[1.1rem] sm:bg-white/45 sm:ring-white/60">
                      <Image
                        src={item.image}
                        alt={`${item.name} — IceZea ${item.tag.toLowerCase()} range`}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        sizes="(max-width: 640px) 72vw, (max-width: 1024px) 33vw, 18vw"
                      />
                      <div className="absolute inset-0 hidden bg-gradient-to-t from-cocoa/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block" />
                      <span className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 translate-y-2 items-center gap-1 rounded-full bg-cream/95 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-cocoa opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:flex">
                        View <ArrowRight size={12} />
                      </span>
                    </div>
                    <div className="flex min-h-[4.25rem] flex-col items-center justify-center px-1 pt-3 text-center sm:min-h-[4.75rem] sm:px-1.5 sm:pt-3.5">
                      <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-gold-deep/85 sm:text-[0.62rem] sm:tracking-[0.2em]">
                        {item.tag}
                      </p>
                      <h3 className="mt-1 font-display text-[0.95rem] font-semibold leading-snug tracking-tight text-cocoa transition-colors group-hover:text-gold-deep sm:mt-1.5 md:text-[1.02rem]">
                        {item.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-1.5 sm:hidden" aria-hidden>
              {bestsellers.map((item, i) => (
                <span
                  key={item.name}
                  className={`h-1.5 rounded-full transition-all ${
                    activeIndex === i ? "w-5 bg-gold-deep" : "w-1.5 bg-cocoa/20"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center sm:mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-cocoa/70 transition-colors hover:text-gold-deep"
            >
              See full range <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
