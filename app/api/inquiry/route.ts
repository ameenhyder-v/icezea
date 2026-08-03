import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type InquiryBody = {
  name?: string
  business?: string
  emirate?: string
  phone?: string
  message?: string
}

function env(...names: string[]) {
  for (const name of names) {
    const value = process.env[name]?.trim()
    if (value) return value
  }
  return undefined
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InquiryBody
    const name = body.name?.trim() ?? ""
    const business = body.business?.trim() ?? ""
    const emirate = body.emirate?.trim() ?? ""
    const phone = body.phone?.trim() ?? ""
    const message = body.message?.trim() ?? ""

    if (!name || !business || !emirate || !phone) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 })
    }

    const smtpUser = env("EMAIL_USER", "SMTP_USER")
    const smtpPass = env("EMAIL_PASS", "SMTP_PASS")?.replace(/\s+/g, "")

    if (!smtpUser || !smtpPass) {
      throw new Error("Missing environment variable: EMAIL_USER / EMAIL_PASS")
    }

    const mailTo = env("MAIL_TO") || smtpUser
    const mailFrom = env("MAIL_FROM") || `"IceZea Inquiries" <${smtpUser}>`
    const host = env("SMTP_HOST") || "smtp.gmail.com"
    const port = Number(env("SMTP_PORT") || 465)

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: undefined,
      subject: `IceZea retailer inquiry — ${business}`,
      text: [
        "New retailer inquiry from the IceZea website",
        "",
        `Name: ${name}`,
        `Business: ${business}`,
        `Emirate: ${emirate}`,
        `Phone: ${phone}`,
        `Message: ${message || "(none)"}`,
      ].join("\n"),
      html: `
        <h2>New retailer inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Business:</strong> ${escapeHtml(business)}</p>
        <p><strong>Emirate:</strong> ${escapeHtml(emirate)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message || "(none)").replace(/\n/g, "<br/>")}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[inquiry]", error)
    const message =
      error instanceof Error && error.message.startsWith("Missing environment variable")
        ? "Email is not configured yet. Add Gmail SMTP settings to .env.local."
        : "Could not send your inquiry. Please try again or call us."
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}
