import type { Metadata } from "next"
import Link from "next/link"
import { SiteShell } from "@/components/site-shell"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist on IceZea.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <SiteShell>
      <section className="page-atmosphere flex min-h-[70vh] flex-col items-center justify-center px-4 py-28 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cocoa sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
          This page may have moved or never existed. Explore our flavours or head back home.
        </p>
        <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Link href="/" className="btn-primary w-full sm:w-auto">
            Back to Home
          </Link>
          <Link href="/products" className="btn-secondary w-full sm:w-auto">
            Browse Flavours
          </Link>
        </div>
      </section>
    </SiteShell>
  )
}
