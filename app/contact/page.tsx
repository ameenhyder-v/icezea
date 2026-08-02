import { MapPin, Phone, Mail } from "lucide-react"
import { SiteShell } from "@/components/site-shell"
import { RetailerForm } from "@/components/retailer-form"

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="border-b border-gold/15 bg-cream pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-deep">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-cocoa sm:text-5xl">
            Want to bring IceZea to your shop?
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">Let&apos;s scoop up a partnership.</p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-cocoa">Get in touch</h2>
              <p className="mt-2 text-muted-foreground">
                Serving 350+ retailers across all Emirates. We&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-gold" size={18} />
                <div>
                  <p className="font-medium text-cocoa">Location</p>
                  <p className="text-muted-foreground">Ajman, United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 shrink-0 text-gold" size={18} />
                <div>
                  <p className="font-medium text-cocoa">Phone</p>
                  <p className="text-muted-foreground">+971 XX XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 shrink-0 text-gold" size={18} />
                <div>
                  <p className="font-medium text-cocoa">Email</p>
                  <p className="text-muted-foreground">hello@icezea.ae</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gold/20 bg-card p-6 shadow-sm sm:p-8">
            <RetailerForm />
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
