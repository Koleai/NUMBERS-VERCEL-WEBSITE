"use client"

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: "primary" | "secondary"
  className?: string
  type?: "button" | "submit"
  disabled?: boolean
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement
    if (variant === "primary") {
      el.style.backgroundColor = "var(--color-accent-hover)"
      el.style.transform = "translateY(-1px)"
    } else {
      el.style.color = "var(--color-text)"
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement
    if (variant === "primary") {
      el.style.backgroundColor = "var(--color-accent)"
      el.style.transform = "translateY(0)"
    } else {
      el.style.color = "var(--color-text-secondary)"
    }
  }

  const primaryStyle: React.CSSProperties = {
    display: "inline-block",
    backgroundColor: "var(--color-accent)",
    color: "var(--color-on-accent)",
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: "var(--text-small)",
    letterSpacing: "0.01em",
    padding: "14px 28px",
    borderRadius: "3px",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background-color 150ms ease-out, transform 150ms ease-out",
    textDecoration: "none",
    lineHeight: 1,
  }

  const secondaryStyle: React.CSSProperties = {
    display: "inline-block",
    backgroundColor: "transparent",
    color: "var(--color-text-secondary)",
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    fontSize: "var(--text-small)",
    letterSpacing: "0.01em",
    padding: "14px 0",
    borderRadius: 0,
    border: "none",
    borderBottom: "1px solid var(--color-border-strong)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "color 150ms ease-out",
    textDecoration: "none",
    lineHeight: 1,
  }

  const style = variant === "primary" ? primaryStyle : secondaryStyle

  const pointerEvents: React.CSSProperties = disabled ? { pointerEvents: "none" } : {}

  if (href) {
    return (
      <a
        href={href}
        className={className}
        style={{ ...style, ...pointerEvents }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      className={className}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}
