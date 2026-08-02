import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex flex-col leading-none", className)}>
      <span className="font-display text-3xl font-bold tracking-tight text-gold-deep transition-colors group-hover:text-gold sm:text-4xl">
        Ice<span className="text-gold">Zea</span>
      </span>
      <span className="mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.28em] text-gold">
        Frozen Indulgence
      </span>
    </Link>
  )
}
