import type { ReactNode } from "react"
import type { Viewport } from "next"

export const viewport: Viewport = {
  themeColor: "#EEEAD7",
  colorScheme: "light",
}

export default function ConnectLayout({ children }: { children: ReactNode }) {
  return children
}
