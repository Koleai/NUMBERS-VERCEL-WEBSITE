"use client"

import { AnimatedText } from "@/components/ui/AnimatedText"
import { Badge } from "@/components/ui/Badge"

const STEPS = [
  {
    number: "01",
    name: "Audit",
    headline: "We learn how your business actually runs.",
    copy: "Not the org chart version — the real one. Where the spreadsheets live, what your team does between tools, and where time disappears. We map it all in a free 60-minute session.",
  },
  {
    number: "02",
    name: "Build",
    headline: "We design and build the workflows.",
    copy: "Every automation we build is custom to your process. We handle the technical setup, test thoroughly before anything goes live, and walk you through how it works.",
  },
  {
    number: "03",
    name: "Launch & Monitor",
    headline: "We deploy — and we stay.",
    copy: "Once live, we monitor every workflow we build. We track performance, catch issues before they affect your business, and adjust as your needs change.",
  },
]

export function Process() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="process-heading"
      style={{
        paddingBlock: "var(--space-section)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="container">

        {/* Header */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-6)",
          marginBottom: "var(--space-16)",
          maxWidth: "48ch",
        }}>
          <AnimatedText delay={0}>
            <Badge>The process</Badge>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2
              id="process-heading"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "var(--text-h2)",
                letterSpacing: "-0.04em",
                color: "var(--color-text)",
                lineHeight: 1.0,
              }}
            >
              Three steps from where you are to a business that runs cleaner.
            </h2>
          </AnimatedText>
        </div>

        {/* Steps grid */}
        <div
          className="process-steps"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-4)",
          }}
        >
          {STEPS.map((step, i) => (
            <AnimatedText key={step.number} delay={0.1 + i * 0.1}>
              <div
                style={{
                  padding: "var(--space-8)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-8)",
                  transition: "border-color 200ms ease-out, background 200ms ease-out",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = "var(--color-border-strong)"
                  el.style.background = "var(--color-surface)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = "var(--color-border)"
                  el.style.background = "transparent"
                }}
              >
                {/* Big step number */}
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "clamp(3.5rem, 7vw, 6rem)",
                    letterSpacing: "-0.05em",
                    color: "var(--color-accent)",
                    lineHeight: 1,
                  }}
                >
                  {step.number}.
                </div>

                {/* Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.625rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                  }}>
                    {step.name}
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: "var(--text-h4)",
                    letterSpacing: "-0.02em",
                    color: "var(--color-text)",
                    lineHeight: 1.2,
                  }}>
                    {step.headline}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body)",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                  }}>
                    {step.copy}
                  </p>
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .process-steps {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
