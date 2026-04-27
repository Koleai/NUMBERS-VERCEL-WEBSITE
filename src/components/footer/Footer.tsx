"use client"

const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#how-it-works" },
  { label: "Why Numbers", href: "#why-numbers" },
  { label: "Book a Free Audit", href: "#contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
        paddingBlock: "var(--space-8)",
      }}
    >
      <style>{`
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-6);
          flex-wrap: wrap;
        }
        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2) var(--space-6);
          list-style: none;
          margin: 0;
          padding: 0;
        }
        @media (max-width: 767px) {
          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="container">
        <div className="footer-inner">
          {/* Wordmark */}
          <div style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "0.875rem",
            color: "var(--color-text-muted)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}>
            Numbers
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="footer-links">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-xs)",
                      color: "var(--color-text-faint)",
                      textDecoration: "none",
                      letterSpacing: "0.02em",
                      transition: "color var(--duration-fast) ease-out",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)" }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-faint)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.625rem",
            letterSpacing: "0.08em",
            color: "var(--color-text-faint)",
            whiteSpace: "nowrap",
          }}>
            © 2026 Numbers.
          </div>
        </div>
      </div>
    </footer>
  )
}
