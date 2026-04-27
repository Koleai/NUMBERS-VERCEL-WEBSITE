"use client"

import { useId } from "react"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  copy: string
  large?: boolean
}

// 5×5 grid of rotations: rows = rotateX (20→-20), cols = rotateY (-10→10)
const ROTATIONS = [
  [20, -10], [20, -5], [20, 0], [20, 5], [20, 10],
  [10, -10], [10, -5], [10, 0], [10, 5], [10, 10],
  [0,  -10], [0,  -5], [0,  0], [0,  5], [0,  10],
  [-10,-10], [-10,-5], [-10,0], [-10,5], [-10,10],
  [-20,-10], [-20,-5], [-20,0], [-20,5], [-20,10],
]

export function ServiceCard({ icon: Icon, title, copy, large = false }: ServiceCardProps) {
  const rawId = useId()
  const uid = rawId.replace(/:/g, "-")

  const trackerRules = ROTATIONS.map(([rx, ry], i) =>
    `#sc-${uid} .tr-${i + 1}:hover ~ .sc-card { transform: perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg); transition: 125ms ease-in-out; }`
  ).join("\n")

  const baseCSS = `
    #sc-${uid} {
      position: relative;
      width: 100%;
      height: 100%;
    }
    #sc-${uid} .sc-canvas {
      perspective: 800px;
      position: absolute;
      inset: 0;
      z-index: 10;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 1fr);
    }
    #sc-${uid} .tracker {
      position: relative;
      z-index: 10;
    }
    #sc-${uid} .tracker:hover {
      cursor: pointer;
    }
    #sc-${uid} .sc-card {
      position: absolute;
      inset: 0;
      z-index: 0;
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      padding: ${large ? "var(--space-8)" : "var(--space-6)"};
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: linear-gradient(135deg, #0d0020 0%, #3b0764 45%, #6d28d9 80%, #a78bfa 100%);
      transition: 700ms;
      overflow: hidden;
    }
    #sc-${uid} .sc-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #0d0020 0%, #3b0764 45%, #6d28d9 80%, #a78bfa 100%);
      filter: blur(2rem);
      opacity: 0.35;
      z-index: -1;
      transition: 200ms;
    }
    #sc-${uid} .tracker:hover ~ .sc-card {
      transition: 300ms;
      filter: brightness(1.15);
    }
    #sc-${uid} .sc-card-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      pointer-events: none;
    }
  `

  return (
    <>
      <style>{baseCSS + "\n" + trackerRules}</style>
      <div
        id={`sc-${uid}`}
        style={{ position: "relative", width: "100%", height: "100%", minHeight: large ? "220px" : "180px" }}
      >
        {/* 5×5 tracker grid */}
        <div className="sc-canvas">
          {Array.from({ length: 25 }, (_, i) => (
            <div key={i} className={`tracker tr-${i + 1}`} />
          ))}
        </div>

        {/* The actual card */}
        <div className="sc-card">
          <div className="sc-card-content">
            {/* Icon */}
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "rgba(167, 139, 250, 0.15)",
              border: "1px solid rgba(167, 139, 250, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <Icon size={20} color="rgba(196, 181, 253, 0.9)" strokeWidth={1.5} />
            </div>

            {/* Text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: large ? "var(--text-h3)" : "var(--text-h4)",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}>
                {title}
              </h3>
              <p style={{
                fontSize: "var(--text-body)",
                color: "rgba(196, 181, 253, 0.7)",
                lineHeight: 1.65,
              }}>
                {copy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
