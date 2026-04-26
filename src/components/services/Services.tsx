"use client"

import { AnimatedText } from "@/components/ui/AnimatedText"
import { Badge } from "@/components/ui/Badge"

const OUTCOMES = [
  {
    label: "Time",
    headline: "Your team gets their hours back.",
    body: "Think about everything your team does each week that doesn't actually require a human. Data entry, status updates, follow-up emails, recurring reports. Automate those touchpoints and those hours go back to the work that moves your business — not the work that just maintains it.",
  },
  {
    label: "Revenue",
    headline: "Your pipeline stops leaking.",
    body: "A lead comes in on a Friday night. Without automation, it sits until Monday. With it, they receive a personalized follow-up within minutes — while you're at dinner. The deals that used to slip through because of timing start closing instead.",
  },
  {
    label: "Accuracy",
    headline: "Human error leaves the equation.",
    body: "Most business mistakes aren't careless — they happen because someone had to manually move data from one place to another and got something wrong. When a system handles those touchpoints, the margin for error disappears entirely.",
  },
  {
    label: "Scale",
    headline: "You grow without the workload growing with you.",
    body: "With manual processes, every new client adds more to your team's plate. With automation, onboarding your fiftieth client takes the same effort as onboarding your first. You build capacity without building headcount.",
  },
]

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{
        paddingBlock: "var(--space-section)",
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="container">

        {/* Section header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-8)",
          alignItems: "end",
          marginBottom: "var(--space-16)",
        }}
        className="services-header"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <AnimatedText delay={0}>
              <Badge>What changes</Badge>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2
                id="services-heading"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "var(--text-h2)",
                  letterSpacing: "-0.04em",
                  color: "var(--color-text)",
                  lineHeight: 1.0,
                }}
              >
                When the repetitive work runs itself, here&apos;s what you get back.
              </h2>
            </AnimatedText>
          </div>

          <AnimatedText delay={0.15}>
            <p style={{
              fontSize: "var(--text-body)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              maxWidth: "44ch",
              marginLeft: "auto",
            }}>
              Automation isn't just about saving time. It changes what your business is capable of — and what your team has to spend their energy on.
            </p>
          </AnimatedText>
        </div>

        {/* Outcome rows */}
        {OUTCOMES.map((outcome, i) => (
          <AnimatedText key={outcome.label} delay={0.1 + i * 0.08}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "var(--space-12)",
                alignItems: "start",
                paddingBlock: "var(--space-8)",
                borderTop: "1px solid var(--color-border)",
                transition: "border-color 200ms ease-out",
              }}
              className="outcome-row"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border-strong)"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)"
              }}
            >
              {/* Large label */}
              <div style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                letterSpacing: "-0.03em",
                color: "var(--color-text-faint)",
                lineHeight: 1,
                paddingTop: "0.25rem",
              }}>
                {outcome.label}
              </div>

              {/* Content */}
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: "var(--text-h4)",
                  letterSpacing: "-0.02em",
                  color: "var(--color-text)",
                  lineHeight: 1.2,
                }}>
                  {outcome.headline}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.7,
                  maxWidth: "64ch",
                }}>
                  {outcome.body}
                </p>
              </div>
            </div>
          </AnimatedText>
        ))}

        {/* Final border */}
        <div style={{ borderTop: "1px solid var(--color-border)" }} />

        {/* Scenario callout */}
        <AnimatedText delay={0.5}>
          <div style={{
            marginTop: "var(--space-16)",
            padding: "var(--space-8) var(--space-8)",
            borderLeft: "2px solid var(--color-accent)",
            background: "var(--color-accent-muted)",
          }}>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.625rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: "var(--space-4)",
            }}>
              In practice
            </div>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              maxWidth: "72ch",
            }}>
              A client signs a contract at 11pm. Without anyone on your team lifting a finger, that client wakes up to a welcome email, a completed onboarding checklist, access to their project portal, and a kickoff call already on their calendar. No one set that in motion. The system did — the moment the contract was signed.
            </p>
          </div>
        </AnimatedText>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .services-header {
            grid-template-columns: 1fr !important;
          }
          .outcome-row {
            grid-template-columns: 1fr !important;
            gap: var(--space-4) !important;
          }
        }
      `}</style>
    </section>
  )
}
