"use client"

import { AnimatedText } from "@/components/ui/AnimatedText"
import { Badge } from "@/components/ui/Badge"

const INTEGRATIONS = [
  "Google Workspace",
  "Slack",
  "HubSpot",
  "Notion",
  "Stripe",
  "Shopify",
  "Airtable",
  "Postgres",
  "Pipedrive",
  "Xero",
  "Mailchimp",
  "Twilio",
  "Salesforce",
  "Zapier",
  "QuickBooks",
  "Typeform",
  "Linear",
  "GitHub",
  "Jira",
  "Intercom",
]

export function Stack() {
  return (
    <section
      aria-labelledby="stack-heading"
      style={{
        paddingBlock: "var(--space-section)",
        borderBottom: "1px solid var(--color-border)",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: var(--space-3);
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
        .marquee-item {
          padding: var(--space-2) var(--space-4);
          border: 1px solid var(--color-border);
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          letter-spacing: 0.06em;
          color: var(--color-text-muted);
          white-space: nowrap;
          flex-shrink: 0;
          text-transform: uppercase;
          transition: color 150ms ease-out, border-color 150ms ease-out;
        }
        .marquee-item:hover {
          color: var(--color-text-secondary);
          border-color: var(--color-border-strong);
        }
      `}</style>

      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: "var(--space-16)",
          alignItems: "center",
          marginBottom: "var(--space-12)",
        }}
        className="stack-header"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <AnimatedText delay={0}>
              <Badge>Powered by n8n</Badge>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2
                id="stack-heading"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "var(--text-h3)",
                  letterSpacing: "-0.04em",
                  color: "var(--color-text)",
                  lineHeight: 1.0,
                }}
              >
                Connects everything. Lives on your servers.
              </h2>
            </AnimatedText>
          </div>

          <AnimatedText delay={0.2}>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              maxWidth: "52ch",
            }}>
              n8n runs on your own infrastructure, not ours. Your data doesn&apos;t pass through third-party pipes. We chose it because it handles complex, multi-step workflows and keeps your data exactly where it belongs: with you.
            </p>
          </AnimatedText>
        </div>
      </div>

      {/* Full-bleed marquee */}
      <AnimatedText delay={0.3}>
        <div
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            paddingBlock: "var(--space-2)",
          }}
          aria-hidden="true"
        >
          <div className="marquee-track">
            {[...INTEGRATIONS, ...INTEGRATIONS].map((name, i) => (
              <span key={i} className="marquee-item">{name}</span>
            ))}
          </div>
        </div>
      </AnimatedText>

      <style>{`
        @media (max-width: 767px) {
          .stack-header {
            grid-template-columns: 1fr !important;
            gap: var(--space-8) !important;
          }
        }
      `}</style>
    </section>
  )
}
