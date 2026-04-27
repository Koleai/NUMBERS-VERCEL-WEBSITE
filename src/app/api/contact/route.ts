import { NextRequest, NextResponse } from "next/server"

interface ContactPayload {
  name: string
  email: string
  company?: string
  message: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  let body: unknown

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const { name, email, company, message } = body as ContactPayload

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json({ error: "Name is required" }, { status: 422 })
  }

  if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
    return NextResponse.json({ error: "A valid email address is required" }, { status: 422 })
  }

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return NextResponse.json({ error: "Message is required" }, { status: 422 })
  }

  // Stub — log to console in development, wire up email/CRM in production
  if (process.env.NODE_ENV === "development") {
    console.info("[contact] Submission received:", {
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() ?? "",
      message: message.trim(),
    })
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
