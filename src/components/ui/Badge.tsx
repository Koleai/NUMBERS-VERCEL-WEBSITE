interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-mono)",
        fontSize: "0.625rem",
        fontWeight: 500,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--color-accent)",
        borderLeft: "2px solid var(--color-accent)",
        paddingLeft: "0.625rem",
        lineHeight: 1,
      }}
      className={className}
    >
      {children}
    </span>
  )
}
