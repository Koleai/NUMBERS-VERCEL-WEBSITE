"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function NanoBananaVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 25 })
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 25 })

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function onMouseLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden="true"
      style={{
        perspective: "900px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        cursor: "none",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          position: "relative",
          width: "clamp(280px, 60vw, 600px)",
          height: "clamp(120px, 26vw, 260px)",
        }}
      >
        {/* Ambient glow behind device */}
        <div
          style={{
            position: "absolute",
            inset: "-60px -80px",
            background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(200,255,0,0.10) 0%, transparent 70%)",
            pointerEvents: "none",
            transform: "translateZ(-40px)",
            filter: "blur(8px)",
          }}
        />

        <svg
          width="100%"
          height="100%"
          viewBox="0 0 600 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: "drop-shadow(0 2px 80px rgba(200,255,0,0.14)) drop-shadow(0 24px 64px rgba(0,0,0,0.85))",
            overflow: "visible",
          }}
        >
          <defs>
            <linearGradient id="bodyGrad" x1="80" y1="210" x2="520" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1a1814" />
              <stop offset="40%" stopColor="#252320" />
              <stop offset="100%" stopColor="#1a1814" />
            </linearGradient>
            <linearGradient id="shineGrad" x1="80" y1="180" x2="520" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(237,235,229,0)" />
              <stop offset="45%" stopColor="rgba(237,235,229,0.06)" />
              <stop offset="100%" stopColor="rgba(237,235,229,0)" />
            </linearGradient>
            <linearGradient id="oledGrad" x1="140" y1="190" x2="480" y2="105" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(200,255,0,0)" />
              <stop offset="20%" stopColor="rgba(200,255,0,0.9)" />
              <stop offset="50%" stopColor="rgba(220,255,80,1)" />
              <stop offset="80%" stopColor="rgba(200,255,0,0.9)" />
              <stop offset="100%" stopColor="rgba(200,255,0,0)" />
            </linearGradient>
            <filter id="oledGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <clipPath id="deviceClip">
              <path d="M 80 210 Q 300 30 520 120" stroke="white" strokeWidth="68" strokeLinecap="round" fill="none" />
            </clipPath>
          </defs>

          {/* Device body — thick banana arc stroke */}
          <path
            d="M 80 210 Q 300 30 520 120"
            stroke="url(#bodyGrad)"
            strokeWidth="68"
            strokeLinecap="round"
            fill="none"
          />
          {/* Specular shine */}
          <path
            d="M 80 210 Q 300 30 520 120"
            stroke="url(#shineGrad)"
            strokeWidth="68"
            strokeLinecap="round"
            fill="none"
          />
          {/* Edge highlight — top rim */}
          <path
            d="M 80 210 Q 300 30 520 120"
            stroke="rgba(237,235,229,0.08)"
            strokeWidth="70"
            strokeLinecap="round"
            fill="none"
          />
          {/* Inner edge line */}
          <path
            d="M 80 210 Q 300 30 520 120"
            stroke="rgba(237,235,229,0.04)"
            strokeWidth="64"
            strokeLinecap="round"
            fill="none"
          />

          {/* OLED strip glow halo */}
          <path
            d="M 148 192 Q 296 44 472 118"
            stroke="rgba(200,255,0,0.18)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            filter="url(#oledGlow)"
          />
          {/* OLED strip line */}
          <path
            d="M 148 192 Q 296 44 472 118"
            stroke="url(#oledGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Left end-cap accent dot */}
          <circle cx="80" cy="210" r="7" fill="rgba(200,255,0,0.22)" />
          <circle cx="80" cy="210" r="3.5" fill="rgba(200,255,0,0.5)" />

          {/* Right end-cap accent dot */}
          <circle cx="520" cy="120" r="5.5" fill="rgba(200,255,0,0.16)" />
          <circle cx="520" cy="120" r="2.5" fill="rgba(200,255,0,0.4)" />

          {/* Label */}
          <text
            x="300"
            y="244"
            textAnchor="middle"
            fill="rgba(200,255,0,0.35)"
            fontSize="10"
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="0.22em"
            fontWeight="500"
          >
            NANO BANANA
          </text>
          <text
            x="300"
            y="256"
            textAnchor="middle"
            fill="rgba(237,235,229,0.12)"
            fontSize="7"
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="0.16em"
          >
            numbers.la / asset preview
          </text>
        </svg>

        {/* Floor shadow */}
        <div
          style={{
            position: "absolute",
            bottom: "-20px",
            left: "10%",
            right: "10%",
            height: "30px",
            background: "radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)",
            filter: "blur(12px)",
            transform: "translateZ(-60px)",
          }}
        />
      </motion.div>
    </motion.div>
  )
}
