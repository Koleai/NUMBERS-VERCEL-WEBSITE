"use client"

import { useState } from "react"
import { AnimatedText } from "@/components/ui/AnimatedText"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"

type FormState = "idle" | "submitting" | "success" | "error"

interface FormFields {
  name: string
  email: string
  company: string
  message: string
}

const INITIAL_FIELDS: FormFields = { name: "", email: "", company: "", message: "" }

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "var(--color-surface-raised)",
  border: "1px solid var(--color-border)",
  borderRadius: "2px",
  padding: "12px 14px",
  color: "var(--color-text)",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-small)",
  outline: "none",
  transition: "border-color var(--duration-fast) ease-out",
  boxSizing: "border-box",
}

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.625rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--color-text-muted)",
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(INITIAL_FIELDS)
  const [state, setState] = useState<FormState>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--color-accent)"
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--color-border)"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState("submitting")
    setErrorMsg("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error((data as { error?: string }).error ?? "Submission failed")
      }

      setState("success")
      setFields(INITIAL_FIELDS)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again."
      setErrorMsg(message)
      setState("error")
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        paddingBlock: "var(--space-section)",
        background: "var(--color-surface)",
      }}
    >
      <div className="container">
        <div
          className="contact-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-16)",
            alignItems: "start",
          }}
        >
          {/* Left: CTA text */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-6)",
            position: "sticky",
            top: "calc(68px + 3rem)",
          }}>
            <AnimatedText delay={0}>
              <Badge>Book a free audit</Badge>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2
                id="contact-heading"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "var(--text-h2)",
                  letterSpacing: "-0.04em",
                  color: "var(--color-text)",
                  lineHeight: 1.0,
                }}
              >
                Let&apos;s talk about your business.
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
              }}>
                Tell us a bit about where your team is losing time. If we think we can help, we&apos;ll set up a free 60-minute audit — no commitment required.
              </p>
            </AnimatedText>

            {/* Trust signals */}
            <AnimatedText delay={0.3}>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
                {[
                  "60-minute free session",
                  "No commitment required",
                  "Response within one business day",
                ].map((signal) => (
                  <div key={signal} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                    <span style={{ color: "var(--color-accent)", fontSize: "0.75rem" }}>→</span>
                    <span style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-small)",
                      color: "var(--color-text-muted)",
                    }}>
                      {signal}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedText>
          </div>

          {/* Right: Form */}
          <AnimatedText delay={0.2}>
            {state === "success" ? (
              <div
                style={{
                  border: "1px solid var(--color-border)",
                  padding: "var(--space-12)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-4)",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  letterSpacing: "-0.05em",
                  color: "var(--color-accent)",
                  lineHeight: 1,
                }}>
                  ✓
                </div>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: "var(--text-h3)",
                  letterSpacing: "-0.03em",
                  color: "var(--color-text)",
                }}>
                  We&apos;ll be in touch.
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.6,
                  maxWidth: "36ch",
                }}>
                  Thanks for reaching out. We&apos;ll review your message and get back to you within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-4)",
                  border: "1px solid var(--color-border)",
                  padding: "var(--space-8)",
                }}
              >
                {/* Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                  <label htmlFor="contact-name" style={labelStyle}>
                    Name <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={fields.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={inputStyle}
                    autoComplete="name"
                  />
                </div>

                {/* Email */}
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                  <label htmlFor="contact-email" style={labelStyle}>
                    Email <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={fields.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={inputStyle}
                    autoComplete="email"
                  />
                </div>

                {/* Company */}
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                  <label htmlFor="contact-company" style={labelStyle}>
                    Company <span style={{ color: "var(--color-text-faint)" }}>(optional)</span>
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    value={fields.company}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={inputStyle}
                    autoComplete="organization"
                  />
                </div>

                {/* Message */}
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                  <label htmlFor="contact-message" style={labelStyle}>
                    What&apos;s eating the most time? <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Tell us about the manual work your team does — even rough is fine."
                    value={fields.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                  />
                </div>

                {/* Error */}
                {state === "error" && errorMsg && (
                  <p
                    role="alert"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-small)",
                      color: "#ff4444",
                      padding: "var(--space-3) var(--space-4)",
                      background: "rgba(255, 68, 68, 0.06)",
                      border: "1px solid rgba(255, 68, 68, 0.2)",
                    }}
                  >
                    {errorMsg}
                  </p>
                )}

                {/* Submit */}
                <Button
                  variant="primary"
                  type="submit"
                  disabled={state === "submitting"}
                >
                  {state === "submitting" ? "Sending…" : "Book My Free Audit →"}
                </Button>
              </form>
            )}
          </AnimatedText>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
            gap: var(--space-8) !important;
          }
        }
      `}</style>
    </section>
  )
}
