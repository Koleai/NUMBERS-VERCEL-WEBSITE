"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import styles from "./nav.module.css"

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#how-it-works" },
  { label: "Why Us", href: "#why-numbers" },
  { label: "Contact", href: "#contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mountVariants = prefersReduced
    ? {}
    : { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.4, delay: 0 } } }

  return (
    <motion.nav
      aria-label="Main navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(8, 7, 6, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(160%)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        transition: "background-color 300ms ease-out, backdrop-filter 300ms ease-out, border-color 300ms ease-out",
      }}
      {...mountVariants}
    >
      <div style={{
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-padding)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "68px",
      }}>
        {/* Wordmark */}
        <a
          href="/"
          aria-label="Numbers — home"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "1.125rem",
            color: "var(--color-text)",
            textDecoration: "none",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Numbers
        </a>

        {/* Desktop links */}
        <ul
          className={styles.desktopLinks}
          style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", alignItems: "center", gap: "var(--space-8)" }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-small)",
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "color var(--duration-fast) ease-out",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)" }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)" }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={styles.desktopCta}>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "var(--text-small)",
              color: "var(--color-on-accent)",
              backgroundColor: "var(--color-accent)",
              padding: "9px 20px",
              borderRadius: "3px",
              textDecoration: "none",
              letterSpacing: "0.01em",
              transition: "background-color 150ms ease-out",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-accent-hover)" }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-accent)" }}
          >
            Free Audit →
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
