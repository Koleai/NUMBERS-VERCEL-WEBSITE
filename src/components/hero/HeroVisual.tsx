"use client"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animation"

interface HeroVisualProps {
  delay?: number
}

export function HeroVisual({ delay = 0.4 }: HeroVisualProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden="true"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <svg
        width="100%"
        viewBox="0 0 480 165"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "600px" }}
      >
        {/* Background grid dots */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((col) =>
          [0, 1, 2, 3].map((row) => (
            <circle
              key={`dot-${col}-${row}`}
              cx={30 + col * 60}
              cy={20 + row * 48}
              r="1.2"
              fill="var(--color-border)"
            />
          ))
        )}

        {/* Section label */}
        <text
          x="240" y="16"
          textAnchor="middle"
          fill="var(--color-text-faint)"
          fontSize="8"
          fontFamily="var(--font-body)"
          letterSpacing="0.12em"
        >
          EXAMPLE AUTOMATION
        </text>

        {/* ── Connector lines (node right-edges to next node left-edges) ── */}
        {/* N1→N2: 93→117 */}
        <path d="M93,63 L113,63" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 2" />
        <polygon points="113,60.5 113,65.5 117,63" fill="var(--color-border-strong)" opacity="0.5" />
        {/* N2→N3: 183→207 */}
        <path d="M183,63 L203,63" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 2" />
        <polygon points="203,60.5 203,65.5 207,63" fill="var(--color-border-strong)" opacity="0.5" />
        {/* N3→N4: 273→297 */}
        <path d="M273,63 L293,63" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 2" />
        <polygon points="293,60.5 293,65.5 297,63" fill="var(--color-border-strong)" opacity="0.5" />
        {/* N4→N5: 363→387 */}
        <path d="M363,63 L383,63" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 2" />
        <polygon points="383,60.5 383,65.5 387,63" fill="var(--color-border-strong)" opacity="0.5" />

        {/* ── Animated pulse dots — staggered cascade ── */}
        <circle r="3" fill="var(--color-accent)">
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="0s" path="M93,63 L113,63" />
          <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="0s" />
        </circle>
        <circle r="3" fill="var(--color-accent)">
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.6s" path="M183,63 L203,63" />
          <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="0.6s" />
        </circle>
        <circle r="3" fill="var(--color-accent)">
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.2s" path="M273,63 L293,63" />
          <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
        </circle>
        <circle r="3" fill="var(--color-accent)">
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.8s" path="M363,63 L383,63" />
          <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="1.8s" />
        </circle>

        {/* ══════════════════════════════════════════════
            NODE 1 — Gmail  (x=27, cx=60)
        ══════════════════════════════════════════════ */}
        <rect x="27" y="30" width="66" height="66" rx="12"
          fill="rgba(234,67,53,0.07)" stroke="rgba(234,67,53,0.22)" strokeWidth="1" />

        {/* Gmail icon: white envelope + red M chevron */}
        <rect x="47" y="55" width="26" height="17" rx="2.5"
          fill="white" opacity="0.92" />
        <path d="M47,55 L60,66 L73,55"
          fill="none" stroke="#EA4335" strokeWidth="1.8" strokeLinejoin="round" />

        {/* "GMAIL" label inside node */}
        <text x="60" y="46" textAnchor="middle"
          fill="rgba(234,67,53,0.75)" fontSize="6"
          fontFamily="var(--font-body)" fontWeight="600" letterSpacing="0.08em">
          GMAIL
        </text>

        {/* Below-node description */}
        <text x="60" y="107" textAnchor="middle"
          fill="var(--color-text-secondary)" fontSize="9"
          fontFamily="var(--font-body)" fontWeight="500">
          Email arrives
        </text>
        <text x="60" y="119" textAnchor="middle"
          fill="var(--color-text-muted)" fontSize="8"
          fontFamily="var(--font-body)">
          with document
        </text>

        {/* ══════════════════════════════════════════════
            NODE 2 — AI Agent  (x=117, cx=150)
        ══════════════════════════════════════════════ */}
        <rect x="117" y="30" width="66" height="66" rx="12"
          fill="rgba(124,58,237,0.07)" stroke="rgba(124,58,237,0.22)" strokeWidth="1" />

        {/* 4-pointed sparkle / AI icon centered at (150, 63) */}
        <path
          d="M150,52 L152.5,60 L160,62.5 L152.5,65 L150,73 L147.5,65 L140,62.5 L147.5,60 Z"
          fill="none" stroke="rgba(167,139,250,0.85)" strokeWidth="1.6" strokeLinejoin="round"
        />
        <circle cx="150" cy="62.5" r="1.5" fill="rgba(167,139,250,0.85)" />

        <text x="150" y="46" textAnchor="middle"
          fill="rgba(167,139,250,0.75)" fontSize="6"
          fontFamily="var(--font-body)" fontWeight="600" letterSpacing="0.08em">
          AI AGENT
        </text>
        <text x="150" y="107" textAnchor="middle"
          fill="var(--color-text-secondary)" fontSize="9"
          fontFamily="var(--font-body)" fontWeight="500">
          AI reads &amp; sorts
        </text>
        <text x="150" y="119" textAnchor="middle"
          fill="var(--color-text-muted)" fontSize="8"
          fontFamily="var(--font-body)">
          extracts data
        </text>

        {/* ══════════════════════════════════════════════
            NODE 3 — Google Docs  (x=207, cx=240)
        ══════════════════════════════════════════════ */}
        <rect x="207" y="30" width="66" height="66" rx="12"
          fill="rgba(66,133,244,0.07)" stroke="rgba(66,133,244,0.22)" strokeWidth="1" />

        {/* Google Docs page: body + folded corner + lines */}
        <rect x="229" y="52" width="17" height="21" rx="2" fill="rgba(66,133,244,0.85)" />
        <path d="M241,52 L246,57 L241,57 Z" fill="rgba(30,79,184,0.9)" />
        <line x1="231.5" y1="62" x2="243.5" y2="62" stroke="white" strokeWidth="1.3" opacity="0.85" />
        <line x1="231.5" y1="66" x2="243.5" y2="66" stroke="white" strokeWidth="1.3" opacity="0.85" />
        <line x1="231.5" y1="70" x2="239" y2="70" stroke="white" strokeWidth="1.3" opacity="0.85" />

        <text x="240" y="46" textAnchor="middle"
          fill="rgba(66,133,244,0.75)" fontSize="6"
          fontFamily="var(--font-body)" fontWeight="600" letterSpacing="0.08em">
          GOOGLE DOCS
        </text>
        <text x="240" y="107" textAnchor="middle"
          fill="var(--color-text-secondary)" fontSize="9"
          fontFamily="var(--font-body)" fontWeight="500">
          Fills in client info
        </text>
        <text x="240" y="119" textAnchor="middle"
          fill="var(--color-text-muted)" fontSize="8"
          fontFamily="var(--font-body)">
          automatically
        </text>

        {/* ══════════════════════════════════════════════
            NODE 4 — PDF  (x=297, cx=330)
        ══════════════════════════════════════════════ */}
        <rect x="297" y="30" width="66" height="66" rx="12"
          fill="rgba(220,50,30,0.07)" stroke="rgba(220,50,30,0.22)" strokeWidth="1" />

        {/* PDF document: red page + fold + "PDF" text */}
        <rect x="319" y="52" width="17" height="21" rx="2" fill="rgba(220,50,30,0.85)" />
        <path d="M331,52 L336,57 L331,57 Z" fill="rgba(155,25,10,0.9)" />
        <text x="327.5" y="68" textAnchor="middle"
          fill="white" fontSize="5.5"
          fontFamily="var(--font-mono)" fontWeight="700" letterSpacing="0.04em">
          PDF
        </text>

        <text x="330" y="46" textAnchor="middle"
          fill="rgba(220,50,30,0.75)" fontSize="6"
          fontFamily="var(--font-body)" fontWeight="600" letterSpacing="0.08em">
          EXPORT
        </text>
        <text x="330" y="107" textAnchor="middle"
          fill="var(--color-text-secondary)" fontSize="9"
          fontFamily="var(--font-body)" fontWeight="500">
          Converts to PDF
        </text>
        <text x="330" y="119" textAnchor="middle"
          fill="var(--color-text-muted)" fontSize="8"
          fontFamily="var(--font-body)">
          ready to send
        </text>

        {/* ══════════════════════════════════════════════
            NODE 5 — Google Drive  (x=387, cx=420)
        ══════════════════════════════════════════════ */}
        <rect x="387" y="30" width="66" height="66" rx="12"
          fill="rgba(52,168,83,0.07)" stroke="rgba(52,168,83,0.22)" strokeWidth="1" />

        {/* Google Drive triangle: 3 coloured segments from centroid */}
        {/* Triangle vertices: (420,50), (433,73), (407,73) → centroid (420,65.3) */}
        <polygon points="420,50 407,73 420,65" fill="#FBBC04" opacity="0.85" />   {/* left / yellow */}
        <polygon points="420,50 420,65 433,73" fill="#4285F4" opacity="0.85" />   {/* right / blue  */}
        <polygon points="407,73 433,73 420,65" fill="#34A853" opacity="0.90" />   {/* bottom / green */}

        <text x="420" y="46" textAnchor="middle"
          fill="rgba(52,168,83,0.75)" fontSize="6"
          fontFamily="var(--font-body)" fontWeight="600" letterSpacing="0.08em">
          DRIVE
        </text>
        <text x="420" y="107" textAnchor="middle"
          fill="var(--color-text-secondary)" fontSize="9"
          fontFamily="var(--font-body)" fontWeight="500">
          Saves to folder
        </text>
        <text x="420" y="119" textAnchor="middle"
          fill="var(--color-text-muted)" fontSize="8"
          fontFamily="var(--font-body)">
          in Google Drive
        </text>

        {/* ── Live status pill ── */}
        <rect x="170" y="134" width="140" height="22" rx="11"
          fill="var(--color-surface-raised)" stroke="var(--color-border)" strokeWidth="1" />
        <circle cx="190" cy="145" r="3" fill="var(--color-success)">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="198" y="149"
          fill="var(--color-text-muted)" fontSize="8.5"
          fontFamily="var(--font-body)">
          Live · 2,847 runs today
        </text>
      </svg>
    </motion.div>
  )
}
