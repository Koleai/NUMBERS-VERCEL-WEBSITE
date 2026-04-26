"use client"

import { AnimatedText } from "@/components/ui/AnimatedText"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { NanoBananaVisual } from "@/components/hero/NanoBananaVisual"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "calc(68px + 4rem)",
        paddingBottom: "6rem",
        paddingLeft: "var(--container-padding)",
        paddingRight: "var(--container-padding)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Horizontal rule accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "var(--color-border)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "860px", width: "100%" }}>
        <AnimatedText delay={0}>
          <div style={{ marginBottom: "2.5rem" }}>
            <Badge>Automation Agency · Los Angeles</Badge>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h1
            id="hero-heading"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "var(--text-hero)",
              letterSpacing: "-0.04em",
              color: "var(--color-text)",
              lineHeight: 1.0,
              marginBottom: "2.5rem",
            }}
          >
            Stop doing by hand what your business can run on its own.
          </h1>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p
            style={{
              fontSize: "var(--text-body)",
              color: "var(--color-text-secondary)",
              maxWidth: "52ch",
              margin: "0 auto 3rem",
              lineHeight: 1.65,
            }}
          >
            Numbers is an automation agency based in Los Angeles. We build custom workflows that handle the repetitive work your team keeps doing manually — so your people can focus on the work that actually grows the business.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <div style={{ display: "flex", justifyContent: "center", gap: "var(--space-4)", flexWrap: "wrap" }}>
            <Button href="#contact" variant="primary">
              Book a Free Audit →
            </Button>
            <Button href="#how-it-works" variant="secondary">
              See how it works
            </Button>
          </div>
        </AnimatedText>
      </div>

      {/* Nano Banana 3D visual */}
      <div style={{ width: "100%", maxWidth: "760px", marginTop: "4rem", marginBottom: "3rem" }}>
        <NanoBananaVisual />
      </div>

      {/* Stats row */}
      <AnimatedText delay={0.55}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(2rem, 6vw, 5rem)",
            flexWrap: "wrap",
            paddingBottom: "1rem",
          }}
        >
          {[
            { value: "60 min", label: "Free audit call" },
            { value: "No code", label: "Required from your team" },
            { value: "Built for you", label: "Not templated" },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                letterSpacing: "-0.03em",
                color: "var(--color-text)",
                lineHeight: 1,
                marginBottom: "0.375rem",
              }}>
                {value}
              </div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.625rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </AnimatedText>
    </section>
  )
}
