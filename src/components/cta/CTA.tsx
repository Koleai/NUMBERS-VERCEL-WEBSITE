"use client"

import { AnimatedText } from "@/components/ui/AnimatedText"
import { Button } from "@/components/ui/Button"

export function CTA() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      style={{
        paddingBlock: "var(--space-section)",
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        textAlign: "center",
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: "640px",
            marginInline: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-8)",
            alignItems: "center",
          }}
        >
          <AnimatedText delay={0}>
            <h2
              id="cta-heading"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "var(--text-h1)",
                letterSpacing: "-0.04em",
                color: "var(--color-text)",
                lineHeight: 1.0,
              }}
            >
              Give us an hour.
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <p
              style={{
                fontSize: "var(--text-body)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                maxWidth: "44ch",
              }}
            >
              We'll walk through your business, identify what can be automated,
              and show you exactly what changes. No technical knowledge required.
              No commitment expected.
            </p>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <Button href="#contact" variant="primary">
              Book a Free Audit →
            </Button>
          </AnimatedText>

          <AnimatedText delay={0.25}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-label)",
                letterSpacing: "0.08em",
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
              }}
            >
              Free · No commitment · No tech knowledge needed
            </p>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}
