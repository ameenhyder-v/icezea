"use client"

import type { FormEvent } from "react"
import { useState } from "react"

const emirates = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Umm Al Quwain",
  "Ras Al Khaimah",
  "Fujairah",
]

export function RetailerForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/20 bg-cream p-8 text-center">
        <h3 className="font-display text-2xl font-semibold text-cocoa">Thanks for reaching out</h3>
        <p className="mt-2 text-muted-foreground">We&apos;ll get back to you soon about stocking IceZea.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-cocoa">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="business" className="mb-2 block text-sm font-medium text-cocoa">
            Business Name
          </label>
          <input
            type="text"
            id="business"
            name="business"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
            placeholder="Your business"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="emirate" className="mb-2 block text-sm font-medium text-cocoa">
            Emirate
          </label>
          <select
            id="emirate"
            name="emirate"
            required
            defaultValue=""
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="" disabled>
              Select Emirate
            </option>
            {emirates.map((emirate) => (
              <option key={emirate} value={emirate}>
                {emirate}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-cocoa">
            Contact Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
            placeholder="+971 XX XXX XXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-cocoa">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
          placeholder="Tell us about your business..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-leaf px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-leaf/20 transition-transform hover:scale-[1.01]"
      >
        Send Inquiry
      </button>
    </form>
  )
}
