"use client"
import { AnimatedText } from "@/components/ui/AnimatedText"

const LOGO_COUNT = 6

export function SocialProof() {
  return (
    <section
      aria-label="Social proof"
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        paddingBlock: "var(--space-12)",
        position: "relative",
      }}
    >
      <style>{`
        .social-proof-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
          align-items: center;
        }
        @media (max-width: 767px) {
          .social-proof-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        background: "var(--glow-section)",
        pointerEvents: "none",
      }} />
      <div className="container">
        <div className="social-proof-grid">

          {/* Stat — left on desktop, first on mobile */}
          <AnimatedText delay={0}>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(4rem, 3rem + 5vw, 8rem)",
                  color: "var(--color-text)",
                  lineHeight: 1,
                }}
              >
                12+
              </div>

              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "var(--text-h3)",
                  color: "var(--color-text)",
                  marginTop: "var(--space-2)",
                }}
              >
                hours recovered per client, per week.
              </div>

              <div
                style={{
                  fontSize: "var(--text-small)",
                  color: "var(--color-text-muted)",
                  marginTop: "var(--space-2)",
                }}
              >
                On average across our active clients
              </div>
            </div>
          </AnimatedText>

          {/* Logo strip — right on desktop, second on mobile */}
          <AnimatedText delay={0.1}>
            <ul
              role="list"
              style={{
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "var(--space-4)",
              }}
            >
              {Array.from({ length: LOGO_COUNT }).map((_, i) => (
                <li key={i}>
                  <div
                    aria-hidden="true"
                    style={{
                      height: "40px",
                      background: "var(--color-surface-raised)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                    }}
                  />
                </li>
              ))}
            </ul>
          </AnimatedText>

        </div>
      </div>
    </section>
  )
}
