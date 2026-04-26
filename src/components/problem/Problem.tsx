"use client"

import { AnimatedText } from "@/components/ui/AnimatedText"
import { Badge } from "@/components/ui/Badge"

const PAIN_POINTS = [
  "Your team is manually following up with every new lead — or not following up at all because no one had time to get to it.",
  "Every new client kicks off the same onboarding process. Someone has to remember to run it, set up the right tools, and send the right emails. Sometimes they forget.",
  "Your weekly report takes two hours to pull together. The data exists — it just lives in five different places and someone has to move it by hand.",
  "A task gets missed. Not because your team is careless, but because it depended on a person remembering at the right moment.",
  "You're hiring to handle the growth. But a significant portion of what you're paying for is work a system could handle automatically.",
]

export function Problem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      style={{
        paddingBlock: "var(--space-section)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "var(--space-16)",
        }}>

          {/* Header row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-8)",
            alignItems: "end",
          }}
          className="problem-header"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              <AnimatedText delay={0}>
                <Badge>Sound familiar?</Badge>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <h2
                  id="problem-heading"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "var(--text-h2)",
                    letterSpacing: "-0.04em",
                    color: "var(--color-text)",
                    lineHeight: 1.0,
                  }}
                >
                  Your business is growing. But the manual work is growing with it.
                </h2>
              </AnimatedText>
            </div>

            <AnimatedText delay={0.2}>
              <p style={{
                fontSize: "var(--text-body)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                maxWidth: "44ch",
                marginLeft: "auto",
              }}>
                Most businesses reach a point where the day-to-day work of running things becomes its own full-time job. Here's what that usually looks like.
              </p>
            </AnimatedText>
          </div>

          {/* Ledger list */}
          <div>
            {PAIN_POINTS.map((point, i) => (
              <AnimatedText key={i} delay={0.1 + i * 0.07}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "3rem 1fr",
                    gap: "var(--space-6)",
                    alignItems: "start",
                    paddingBlock: "var(--space-6)",
                    borderTop: "1px solid var(--color-border)",
                    cursor: "default",
                    transition: "border-color 200ms ease-out",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border-strong)"
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)"
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.625rem",
                    letterSpacing: "0.1em",
                    color: "var(--color-accent)",
                    paddingTop: "0.25rem",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body)",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.65,
                  }}>
                    {point}
                  </p>
                </div>
              </AnimatedText>
            ))}

            {/* Final row */}
            <AnimatedText delay={0.6}>
              <div style={{
                paddingTop: "var(--space-6)",
                borderTop: "1px solid var(--color-border)",
              }}>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  color: "var(--color-text-muted)",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}>
                  None of this is a people problem. It's a systems problem — and it's fixable.
                </p>
              </div>
            </AnimatedText>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .problem-header {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
