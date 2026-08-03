import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "group relative inline-flex max-w-[min(58vw,11.5rem)] shrink-0 items-center transition-opacity hover:opacity-90 sm:max-w-[14rem] md:max-w-none",
        className,
      )}
      aria-label="IceZea home — Frozen Indulgence"
    >
      <Image
        src="/products/icezea-logo.png"
        alt="IceZea logo"
        width={398}
        height={123}
        priority={priority}
        className="h-8 w-auto max-w-full object-contain object-left sm:h-11 md:h-12"
      />
    </Link>
  )
}
