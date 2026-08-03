import type { Metadata } from "next"
import { MapPin, Phone, Mail } from "lucide-react"
import { SiteShell } from "@/components/site-shell"
import { RetailerForm } from "@/components/retailer-form"
import { JsonLd, breadcrumbSchema, webPageSchema } from "@/components/json-ld"
import { createPageMetadata, pageSeo, siteConfig } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata(pageSeo.contact)

export default function ContactPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          webPageSchema({
            title: pageSeo.contact.title,
            description: pageSeo.contact.description,
            path: "/contact",
            type: "ContactPage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <section className="relative overflow-hidden border-b border-gold/15 page-atmosphere pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        <div className="safe-px relative mx-auto max-w-7xl">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-cocoa sm:mt-4 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Want to bring IceZea to{" "}
            <span className="font-script text-[1.12em] font-normal text-gold-deep">your shop?</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
            Partner with a UAE favourite — we&apos;ll help you stock premium kulfi and popsicles your customers love.
          </p>
        </div>
      </section>

      <section className="relative bg-cream py-12 sm:py-16 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.1),transparent_70%)]"
        />
        <div className="safe-px relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.25fr] lg:gap-14">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-cocoa sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Serving 350+ retailers across all Emirates. Tell us about your store and we&apos;ll reply soon.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value: `${siteConfig.address.locality}, ${siteConfig.address.countryName}`,
                  href: null,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: siteConfig.phoneDisplay,
                  href: `tel:${siteConfig.phone}`,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-2xl border border-gold/15 bg-card/70 p-4 shadow-[0_10px_30px_-22px_rgba(60,35,15,0.35)] backdrop-blur-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-cream text-gold-deep">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold-deep/80">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block break-all text-sm font-medium text-cocoa transition-colors hover:text-gold-deep sm:text-[0.95rem]"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-cocoa sm:text-[0.95rem]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel rounded-[1.75rem] border border-gold/20 p-5 sm:rounded-[2rem] sm:p-8 lg:p-10">
            <div className="mb-6">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold-deep">Retail enquiry</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-cocoa sm:text-2xl">Send an inquiry</h3>
            </div>
            <RetailerForm />
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
