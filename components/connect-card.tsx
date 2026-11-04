import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import {
  brand,
  getConnectLinks,
  getDiscoveryLinks,
  getHomeHref,
  type ConnectIcon,
  type ConnectLink,
} from "@/lib/brand"

const icons = {
  instagram: Instagram,
  mail: Mail,
  phone: Phone,
  globe: Globe,
  map: MapPin,
} satisfies Record<Exclude<ConnectIcon, "whatsapp">, typeof Instagram>

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  )
}

function LinkIcon({ icon }: { icon: ConnectIcon }) {
  if (icon === "whatsapp") return <WhatsAppIcon className="h-5 w-5" />
  const Icon = icons[icon]
  return <Icon size={20} strokeWidth={1.75} aria-hidden />
}

function SmartLink({
  href,
  external,
  className,
  children,
}: {
  href: string
  external: boolean
  className: string
  children: ReactNode
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

function ConnectRow({ link }: { link: ConnectLink }) {
  return (
    <SmartLink
      href={link.href}
      external={link.external}
      className="group flex min-h-16 items-center gap-3.5 px-4 py-3 transition-colors duration-200 hover:bg-[#FBF9F3] focus-visible:relative focus-visible:z-10 focus-visible:outline-offset-[-3px] active:bg-[#F3EFE4] sm:gap-4 sm:px-5"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#6D0808]/12 bg-[#EEEAD7]/80 text-[#6D0808] transition-colors duration-200 group-hover:border-[#6D0808] group-hover:bg-[#6D0808] group-hover:text-[#EEEAD7]">
        <LinkIcon icon={link.icon} />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block text-[0.98rem] font-medium tracking-tight text-[#2D0000]">{link.label}</span>
        <span className="mt-0.5 block text-sm break-words text-[#4A5144]">{link.description}</span>
      </span>
      {link.external ? (
        <ArrowUpRight
          size={16}
          strokeWidth={1.75}
          className="shrink-0 text-[#757D6F] transition-colors duration-200 group-hover:text-[#6D0808]"
          aria-hidden
        />
      ) : (
        <ChevronRight
          size={16}
          strokeWidth={1.75}
          className="shrink-0 text-[#757D6F] transition-colors duration-200 group-hover:text-[#6D0808]"
          aria-hidden
        />
      )}
      {link.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </SmartLink>
  )
}

export function ConnectCard() {
  const links = getConnectLinks()
  const discovery = getDiscoveryLinks()
  const homeHref = getHomeHref()
  const year = new Date().getFullYear()

  return (
    <div className="min-h-dvh bg-[#EEEAD7] text-[#2D0000]">
      <div aria-hidden className="h-[3px] bg-[#6D0808]" />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#6D0808] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#EEEAD7]"
      >
        Skip to content
      </a>

      <main id="main-content" className="mx-auto w-full max-w-[33rem] px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-10 sm:px-6 sm:pt-14">
        <header className="reveal text-center">
          <SmartLink
            href={homeHref ?? "/"}
            external={Boolean(homeHref?.startsWith("http"))}
            className="inline-flex rounded-sm transition-opacity duration-200 hover:opacity-80"
          >
            <Image
              src={brand.logoPath}
              alt=""
              width={brand.logoWidth}
              height={brand.logoHeight}
              priority
              quality={90}
              sizes="240px"
              className="h-16 w-auto max-w-[15.5rem] sm:h-[4.75rem] sm:max-w-[17.5rem]"
            />
            <span className="sr-only">IceZea home</span>
          </SmartLink>

          <h1 className="mt-7 pl-[0.42em] text-[0.78rem] font-medium uppercase tracking-[0.42em] text-[#6D0808]">
            {brand.name}
          </h1>
          <p className="mt-2 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#4A5144]">{brand.category}</p>

          <div aria-hidden className="mx-auto mt-5 flex items-center justify-center gap-2.5">
            <span className="h-px w-8 bg-[#B89B6A]" />
            <span className="h-1 w-1 rotate-45 bg-[#B89B6A]" />
            <span className="h-px w-8 bg-[#B89B6A]" />
          </div>

          <p className="mx-auto mt-5 max-w-[16rem] font-display text-[1.85rem] italic leading-[1.15] text-balance text-[#6D0808] sm:max-w-[18rem] sm:text-[2.05rem]">
            {brand.tagline}
          </p>
          <p className="mt-4 text-sm text-[#4A5144]">
            {brand.locationLabel} <span aria-hidden="true">🇦🇪</span>
          </p>

          {homeHref ? (
            <SmartLink
              href={homeHref}
              external={homeHref.startsWith("http")}
              className="group mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#6D0808] px-6 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#EEEAD7] transition-colors duration-200 hover:bg-[#2D0000]"
            >
              Explore Our Website
              <ArrowRight
                size={15}
                strokeWidth={1.75}
                className="transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
                aria-hidden
              />
            </SmartLink>
          ) : null}
        </header>

        {links.length > 0 ? (
          <section id="connect" aria-labelledby="connect-heading" className="reveal reveal-delay-1 mt-12">
            <h2
              id="connect-heading"
              className="text-center font-display text-[1.65rem] font-medium tracking-tight text-[#2D0000]"
            >
              Connect with IceZea
            </h2>
            <nav aria-label="Connect with IceZea" className="mt-5 overflow-hidden rounded-2xl border border-[#6D0808]/12 bg-[#F8F5EC]">
              <ul className="divide-y divide-[#6D0808]/10">
                {links.map((link) => (
                  <li key={link.id}>
                    <ConnectRow link={link} />
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        ) : null}

        {discovery.length > 0 ? (
          <section aria-labelledby="discover-heading" className="reveal mt-12">
            <h2
              id="discover-heading"
              className="text-center font-display text-[1.45rem] font-medium tracking-tight text-[#2D0000]"
            >
              Discover the World of IceZea
            </h2>
            <nav aria-label="Discover IceZea" className="mt-5">
              <ul className="divide-y divide-[#6D0808]/10 border-y border-[#6D0808]/10">
                {discovery.map((item) => {
                  const external = item.href.startsWith("http")
                  return (
                    <li key={item.label}>
                      <SmartLink
                        href={item.href}
                        external={external}
                        className="group flex min-h-14 items-center justify-between gap-4 py-3 transition-colors duration-200 hover:text-[#6D0808]"
                      >
                        <span className="min-w-0 text-left">
                          <span className="block text-[0.98rem] font-medium text-[#2D0000] group-hover:text-[#6D0808]">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-sm text-[#4A5144]">{item.description}</span>
                        </span>
                        {external ? (
                          <ArrowUpRight size={16} strokeWidth={1.75} className="shrink-0 text-[#757D6F]" aria-hidden />
                        ) : (
                          <ChevronRight size={16} strokeWidth={1.75} className="shrink-0 text-[#757D6F]" aria-hidden />
                        )}
                        {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                      </SmartLink>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </section>
        ) : null}

        <footer className="mt-14 border-t border-[#6D0808]/10 pt-8 text-center">
          <p className="pl-[0.38em] text-[0.72rem] font-medium uppercase tracking-[0.38em] text-[#6D0808]">{brand.name}</p>
          <p className="mt-3 font-display text-xl italic leading-snug text-[#2D0000]">{brand.tagline}</p>
          <p className="mt-3 text-xs tracking-wide text-[#4A5144]">
            {brand.footerLine} <span aria-hidden="true">🇦🇪</span>
          </p>
          <p className="mt-5 text-[0.7rem] tracking-wide text-[#4A5144]">© {year} IceZea. All rights reserved.</p>
        </footer>
      </main>
      <div aria-hidden className="h-[3px] bg-[#6D0808]" />
    </div>
  )
}
