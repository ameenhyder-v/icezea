import Link from "next/link"
import { Instagram, Facebook, Phone, Mail, MapPin, Leaf, BadgeCheck } from "lucide-react"
import { Logo } from "@/components/logo"

const quickLinks = [
  { href: "/products", label: "Shop" },
  { href: "/products", label: "Flavours" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
]

const helpLinks = [
  { href: "/contact", label: "Become a Retailer" },
  { href: "/contact", label: "Shipping & Delivery" },
  { href: "/contact", label: "FAQs" },
  { href: "/contact", label: "Wholesale Enquiries" },
]

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-cream-deep">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Premium kulfi & ice creams crafted with love, real ingredients and nostalgic flavours. Made in UAE.
          </p>
          <div className="flex gap-3 pt-1">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-card text-gold-deep transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              <Instagram size={17} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-card text-gold-deep transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              <Facebook size={17} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">Quick Links</h3>
          <nav className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            {quickLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-gold-deep">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">Help</h3>
          <nav className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            {helpLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-gold-deep">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-5">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">Contact Us</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2.5">
              <Phone size={15} className="shrink-0 text-gold" />
              <span>+971 XX XXX XXXX</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={15} className="shrink-0 text-gold" />
              <span>hello@icezea.ae</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin size={15} className="shrink-0 text-gold" />
              <span>Ajman, United Arab Emirates</span>
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full border border-leaf/40 bg-card text-center">
              <Leaf size={16} className="text-leaf" />
              <span className="mt-0.5 text-[0.5rem] font-bold uppercase leading-tight tracking-wide text-leaf">
                100% Natural
              </span>
            </div>
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full border border-gold/40 bg-card text-center">
              <BadgeCheck size={16} className="text-gold-deep" />
              <span className="mt-0.5 text-[0.5rem] font-bold uppercase leading-tight tracking-wide text-gold-deep">
                Halal
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} IceZea Ice Creams. All Rights Reserved.</span>
          <span className="font-semibold uppercase tracking-[0.18em] text-gold-deep">Made in UAE</span>
        </div>
      </div>
    </footer>
  )
}
