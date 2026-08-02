"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/products", label: "Shop" },
  { href: "/#flavours", label: "Flavours" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gold/15 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-colors",
                pathname === link.href && link.label !== "Flavours"
                  ? "text-gold-deep"
                  : "text-cocoa/70 hover:text-gold-deep",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card px-5 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-deep shadow-sm transition-all hover:border-gold hover:shadow-md"
          >
            <ShoppingCart size={15} />
            Cart (0)
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-cocoa md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="space-y-1 border-t border-gold/15 bg-cream px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-cocoa/80 hover:bg-cream-deep hover:text-gold-deep"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="mt-2 flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-card px-3 py-3 text-sm font-bold uppercase tracking-[0.12em] text-gold-deep"
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingCart size={16} />
            Cart (0)
          </Link>
        </nav>
      )}
    </header>
  )
}
