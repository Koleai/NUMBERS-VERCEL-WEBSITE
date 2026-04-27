# Numbers Website — Agent Technical Guide

## Next.js 16 Breaking Changes (Read Before Writing Code)

This project runs Next.js **16.2.3** with React **19**. Key differences from Next.js 14/15:

- App Router only — no `pages/` directory
- All components are **Server Components by default** — add `"use client"` at top of any file that uses: hooks, event handlers, browser APIs, Framer Motion, Three.js
- `next/font` is NOT used — fonts load via Fontshare `<link>` in `layout.tsx`
- Metadata is exported from `layout.tsx` using the `Metadata` type — not `<Head>` tags
- API routes live in `src/app/api/<route>/route.ts` and export named HTTP method functions (`GET`, `POST`, etc.)

Read `node_modules/next/dist/docs/` for version-specific API details before writing code.

---

## Component Patterns

### Styling approach
- Use **inline styles** (`style={{ ... }}`) with CSS custom properties (`var(--token-name)`)
- Tailwind utility classes exist but are minimal — prefer token-based inline styles
- CSS modules used only in `nav.module.css` — don't introduce new modules
- Responsive breakpoints handled via inline `<style>` tag at bottom of component (see Problem.tsx pattern)

```tsx
// Correct pattern
<div style={{ padding: "var(--space-8)", color: "var(--color-text)" }}>

// Wrong — don't hardcode values
<div style={{ padding: "32px", color: "#f9fafb" }}>
```

### AnimatedText wrapper
Every text element that should fade in on scroll gets wrapped:
```tsx
import { AnimatedText } from "@/components/ui/AnimatedText"

<AnimatedText delay={0.1}>
  <p>Content here</p>
</AnimatedText>
```
Delays stagger: 0, 0.1, 0.15, 0.2, 0.25... (seconds)

### Badge component
Section labels (small uppercase pills):
```tsx
import { Badge } from "@/components/ui/Badge"
<Badge>Section label text</Badge>
```

### Button component
```tsx
import { Button } from "@/components/ui/Button"

// Primary (red, CTA)
<Button href="#contact" variant="primary">Book a Free Audit →</Button>

// Secondary (ghost/outline)
<Button href="#services" variant="secondary">See how it works</Button>
```

### Responsive layout
```tsx
// Pattern used across all sections
<div
  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)" }}
  className="my-layout"
>
  {/* content */}
</div>

// At bottom of component file:
<style>{`
  @media (max-width: 767px) {
    .my-layout {
      grid-template-columns: 1fr !important;
    }
  }
`}</style>
```

---

## How to Add a New Section

1. Create directory: `src/components/<section-name>/`
2. Create component: `src/components/<section-name>/<ComponentName>.tsx`
3. Add `"use client"` at top (all sections use AnimatedText which requires client)
4. Use this section shell:

```tsx
"use client"

import { AnimatedText } from "@/components/ui/AnimatedText"
import { Badge } from "@/components/ui/Badge"

export function MySection() {
  return (
    <section
      id="my-section"
      aria-labelledby="my-section-heading"
      style={{
        paddingBlock: "var(--space-section)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container">
        <AnimatedText delay={0}>
          <Badge>Section label</Badge>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <h2 id="my-section-heading" style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "var(--text-h2)",
            letterSpacing: "-0.04em",
            color: "var(--color-text)",
            lineHeight: 1.0,
          }}>
            Section heading
          </h2>
        </AnimatedText>
      </div>
    </section>
  )
}
```

5. Import and add to `src/app/page.tsx`

---

## Design Constraints for Agents

- `--color-accent` (#DC2626 red) = CTAs and active states ONLY. Never use decoratively.
- All motion: check `useReducedMotion()` before animating. See `src/hooks/useReducedMotion.ts`.
- Hero section: `min-height: 100svh` — use `svh` not `vh`
- Section background alternates: `--color-bg` / `--color-surface` — maintain the alternation
- No new npm packages without checking existing deps first (Three.js, Framer Motion, Lucide, Radix already available)
- Contact form submits to `/api/contact` — do not change the API route without updating the form

---

## Key File Locations

| Task | File |
|------|------|
| Change page sections/order | `src/app/page.tsx` |
| Change design tokens | `src/styles/tokens.css` |
| Change global styles | `src/styles/global.css` |
| Change font imports | `src/app/layout.tsx` |
| Change site metadata/SEO | `src/app/layout.tsx` |
| Change contact form API | `src/app/api/contact/route.ts` |
| Change background animation | `src/components/ui/DottedSurface.tsx` |
| Change nav links | `src/components/nav/Nav.tsx` |
| Change footer links | `src/components/footer/Footer.tsx` |
