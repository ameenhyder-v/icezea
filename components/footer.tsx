import Link from "next/link"
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react"
import { Logo } from "@/components/logo"
import { siteConfig } from "@/lib/seo"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Flavours" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
]

const helpLinks = [
  { href: "/contact", label: "Become a Retailer" },
  { href: "/contact", label: "Wholesale Enquiries" },
  { href: "/products", label: "All Flavours" },
  { href: "/about", label: "About IceZea" },
]

const socialLinks = [
  {
    href: siteConfig.social.instagram || "https://www.instagram.com/",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: siteConfig.social.facebook || "https://www.facebook.com/",
    label: "Facebook",
    Icon: Facebook,
  },
  {
    href: siteConfig.whatsapp,
    label: "WhatsApp",
    Icon: MessageCircle,
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-gold/15 bg-cream-deep pb-[env(safe-area-inset-bottom)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <div className="safe-px relative mx-auto max-w-7xl py-8 sm:py-10 lg:py-12">
        <div className="grid gap-8 border-b border-gold/15 pb-7 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-8 lg:pb-8">
          {/* Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left lg:col-span-1">
            <Logo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium kulfi & ice creams crafted with love, real ingredients and nostalgic flavours. Made in UAE.
            </p>

            <div className="mt-4 flex items-center justify-center gap-2.5 md:justify-start">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 bg-card text-gold-deep transition-all duration-300 hover:border-gold hover:bg-gold hover:text-cocoa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 active:scale-95"
                >
                  <Icon size={16} aria-hidden />
                </a>
              ))}
            </div>

            <Link
              href="/contact"
              className="btn-primary mt-4 w-full max-w-xs px-5 py-2.5 text-[0.68rem] md:w-auto"
            >
              Become a Retailer <ArrowRight size={14} />
            </Link>
          </div>

          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold-deep">Quick Links</p>
            <nav className="mt-3 flex flex-col gap-1.5" aria-label="Footer quick links">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-cocoa/80 transition-colors hover:text-gold-deep"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold-deep">Help</p>
            <nav className="mt-3 flex flex-col gap-1.5" aria-label="Footer help links">
              {helpLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-cocoa/80 transition-colors hover:text-gold-deep"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold-deep">Contact Us</p>
            <div className="mt-3 space-y-2.5 text-sm text-muted-foreground">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 transition-colors hover:text-gold-deep"
              >
                <Mail size={14} className="shrink-0 text-gold" aria-hidden />
                <span className="break-all">{siteConfig.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 transition-colors hover:text-gold-deep"
              >
                <Phone size={14} className="shrink-0 text-gold" aria-hidden />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="shrink-0 text-gold" aria-hidden />
                <span>
                  {siteConfig.address.locality}, {siteConfig.address.countryName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/12 bg-cream/55">
        <div className="safe-px mx-auto flex max-w-7xl flex-col items-center gap-2 py-3 text-center text-[0.7rem] text-muted-foreground sm:flex-row sm:justify-between sm:text-left sm:text-xs">
          <span>© {new Date().getFullYear()} IceZea Ice Creams. All Rights Reserved.</span>
          <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.16em] text-gold-deep">
            <svg className="h-3 w-4 overflow-hidden rounded-[1px]" viewBox="0 0 12 6" aria-hidden>
              <rect width="12" height="2" y="0" fill="#00732F" />
              <rect width="12" height="2" y="2" fill="#FFFFFF" />
              <rect width="12" height="2" y="4" fill="#000000" />
              <rect width="3" height="6" fill="#FF0000" />
            </svg>
            Made in UAE
          </span>
        </div>
      </div>
    </footer>
  )
}
