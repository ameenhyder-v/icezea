"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Flavours" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const darkHeroChrome = isHome && !scrolled && !isMenuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMenuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("resize", onResize)
    }
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || isMenuOpen
          ? "border-b border-gold/20 bg-cream/95 shadow-[0_10px_40px_rgba(60,35,15,0.07)] backdrop-blur-xl"
          : darkHeroChrome
            ? "border-b border-transparent bg-transparent md:bg-cream/80 md:backdrop-blur-md"
            : "border-b border-transparent bg-cream/80 backdrop-blur-md",
      )}
    >
      <div className="safe-px mx-auto flex h-16 max-w-7xl items-center justify-between sm:h-[4.5rem] lg:h-[4.85rem]">
        <Logo priority />

        <nav className="hidden items-center gap-7 md:flex lg:gap-9" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(link.href)
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors lg:text-[0.74rem]",
                  active ? "text-gold-deep" : "text-cocoa/60 hover:text-gold-deep",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-1/2 h-px w-5 -translate-x-1/2 rounded-full bg-gold transition-opacity",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="ml-1 rounded-full bg-gradient-to-b from-gold to-gold-deep px-5 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-cocoa shadow-[0_10px_24px_-10px_rgba(160,120,40,0.5)] transition-transform hover:scale-[1.02]"
          >
            Become a Retailer
          </Link>
        </nav>

        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm md:hidden",
            darkHeroChrome
              ? "border-gold/40 bg-white/10 text-[#f6f0e6] backdrop-blur-sm"
              : "border-gold/25 bg-card/90 text-cocoa",
          )}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-gold/15 bg-cream/98 backdrop-blur-xl md:hidden",
          isMenuOpen ? "block" : "hidden",
        )}
      >
        <nav
          className="safe-px mx-auto flex max-w-7xl flex-col gap-1 py-3 pb-[max(1rem,env(safe-area-inset-bottom))]"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-xl px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-cocoa/85 active:bg-cream-deep"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded-full bg-gradient-to-b from-gold to-gold-deep px-4 py-3.5 text-center text-sm font-bold uppercase tracking-[0.12em] text-cocoa"
            onClick={() => setIsMenuOpen(false)}
          >
            Become a Retailer
          </Link>
        </nav>
      </div>
    </header>
  )
}
