"use client"

import { AnimatedText } from "@/components/ui/AnimatedText"
import { Badge } from "@/components/ui/Badge"

export function Why() {
  return (
    <section
      id="why-numbers"
      aria-labelledby="why-heading"
      style={{
        paddingBlock: "var(--space-section)",
        background: "var(--color-surface)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: "var(--space-16)",
          alignItems: "start",
        }}
        className="why-layout"
        >
          {/* Sticky label column */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-6)",
            position: "sticky",
            top: "calc(68px + 3rem)",
          }}>
            <AnimatedText delay={0}>
              <Badge>Why Numbers</Badge>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2
                id="why-heading"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "var(--text-h3)",
                  letterSpacing: "-0.04em",
                  color: "var(--color-text)",
                  lineHeight: 1.1,
                }}
              >
                Built for your business. Not a template with your logo on it.
              </h2>
            </AnimatedText>
          </div>

          {/* Body copy */}
          <AnimatedText delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "calc(var(--text-body) * 1.15)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
              }}>
                We're based in Los Angeles and we work directly with the business owners and operators we serve — not through an account manager, not through an offshore team.
              </p>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "calc(var(--text-body) * 1.15)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
              }}>
                Every workflow we build starts with understanding how your business actually works. We map your real processes, find what's worth automating, and build systems tailored to your operations.
              </p>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "calc(var(--text-body) * 1.15)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
              }}>
                Once a workflow is live, we don't disappear. We monitor everything we deploy and stay accountable for its performance. If something breaks, we fix it.
              </p>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "calc(var(--text-body) * 1.15)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
              }}>
                AI has expanded what automation can do — workflows that once required rigid rules can now handle judgment calls, read documents, write responses, and make routing decisions. For businesses that move early, the advantage compounds fast. That's why Numbers exists.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .why-layout {
            grid-template-columns: 1fr !important;
            gap: var(--space-8) !important;
          }
        }
      `}</style>
    </section>
  )
}
