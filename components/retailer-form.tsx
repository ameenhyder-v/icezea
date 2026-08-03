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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          business: data.get("business"),
          emirate: data.get("emirate"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      })

      const payload = (await res.json().catch(() => ({}))) as { error?: string }

      if (!res.ok) {
        throw new Error(payload.error || "Could not send your inquiry.")
      }

      setSubmitted(true)
      form.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your inquiry.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/20 bg-cream/80 p-8 text-center">
        <h3 className="font-display text-2xl font-semibold text-cocoa">Thanks for reaching out</h3>
        <p className="mt-2 text-muted-foreground">We&apos;ll get back to you soon about stocking IceZea.</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-gold-deep transition-colors hover:text-cocoa"
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-cocoa/80">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={loading}
            className="field-premium"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="business" className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-cocoa/80">
            Business Name
          </label>
          <input
            type="text"
            id="business"
            name="business"
            required
            disabled={loading}
            className="field-premium"
            placeholder="Your business"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <div>
          <label htmlFor="emirate" className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-cocoa/80">
            Emirate
          </label>
          <select
            id="emirate"
            name="emirate"
            required
            defaultValue=""
            disabled={loading}
            className="field-premium"
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
          <label htmlFor="phone" className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-cocoa/80">
            Contact Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            disabled={loading}
            className="field-premium"
            placeholder="+971 50 382 9005"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-cocoa/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          disabled={loading}
          className="field-premium resize-none"
          placeholder="Tell us about your business..."
        />
      </div>

      {error ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <button type="submit" disabled={loading} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:transform-none">
        {loading ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  )
}
