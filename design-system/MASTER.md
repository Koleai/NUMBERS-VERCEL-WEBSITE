# Numbers Agency — Design System Master

> Source of Truth for all visual, layout, and interaction decisions.
> Page-specific overrides live in `design-system/pages/`.

---

## Style Direction

**Style Name:** Dark Editorial Agency  
**Mood:** Premium, intentional, text-forward, architectural  
**References:** gopidge.com restraint / Linear.app dark luxury / Vercel.com confidence  
**Anti-pattern:** SaaS product template, centered-column blob hero, default Tailwind card grids

**Required qualities (must hit 4+):**
- [x] Clear hierarchy through scale contrast
- [x] Intentional rhythm in spacing
- [x] Depth through dark surfaces, subtle borders, and elevation
- [x] Typography with character (Clash Display large + General Sans body)
- [x] Color used semantically (accent = action only)
- [x] Hover/focus/active states designed, not default
- [x] Grid-breaking editorial layout in hero + bento services
- [x] Motion that clarifies flow

---

## Color Palette

```css
:root {
  /* Base */
  --color-bg:            #0a0a0a;
  --color-surface:       #111827;
  --color-surface-raised:#1f2937;
  --color-surface-glass: rgba(255, 255, 255, 0.04);

  /* Text */
  --color-text:          #f9fafb;
  --color-text-secondary:#d1d5db;
  --color-text-muted:    #9ca3af;
  --color-text-faint:    #4b5563;

  /* Accent — CTA only, use sparingly */
  --color-accent:        #DC2626;
  --color-accent-hover:  #ef4444;
  --color-accent-muted:  rgba(220, 38, 38, 0.12);

  /* Structure */
  --color-border:        rgba(255, 255, 255, 0.08);
  --color-border-strong: rgba(255, 255, 255, 0.16);

  /* Semantic */
  --color-success:       #22c55e;
  --color-warning:       #f59e0b;
}
```

**Rules:**
- Accent (`#DC2626`) used ONLY for primary CTAs and active states — never decoratively
- Never use more than one accent color
- Dark surfaces use rgba borders, not solid borders
- Text hierarchy: `--color-text` > `--color-text-secondary` > `--color-text-muted`

---

## Typography

### Font Stack
```css
/* Heading: Clash Display — geometric, editorial */
--font-heading: 'Clash Display', system-ui, sans-serif;

/* Body: General Sans — legible, modern */
--font-body: 'General Sans', system-ui, sans-serif;

/* Mono: used for technical labels, stats */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale
```css
:root {
  /* Fluid scaling */
  --text-hero:   clamp(3.5rem, 2rem + 7vw, 8rem);
  --text-h1:     clamp(2.5rem, 1.5rem + 4vw, 5rem);
  --text-h2:     clamp(2rem, 1rem + 3vw, 3.5rem);
  --text-h3:     clamp(1.375rem, 1rem + 1.5vw, 2rem);
  --text-h4:     clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
  --text-body:   clamp(1rem, 0.92rem + 0.4vw, 1.125rem);
  --text-small:  0.875rem;
  --text-xs:     0.75rem;
  --text-label:  0.6875rem; /* uppercase tracking for badges */
}
```

### Font Loading (Fontshare)
```html
<link rel="preconnect" href="https://api.fontshare.com">
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@700,500&f[]=general-sans@400,500&display=swap" rel="stylesheet">
```

### Rules
- Hero heading: `font-weight: 700`, `letter-spacing: -0.03em`
- Section headings: `font-weight: 700`, `letter-spacing: -0.02em`
- Body: `font-weight: 400`, `line-height: 1.65`
- Labels/badges: `font-weight: 500`, `letter-spacing: 0.08em`, `text-transform: uppercase`
- Max line-length: `60ch` for body, `20ch` for hero

---

## Spacing System

```css
:root {
  --space-1:   0.25rem;   /*  4px */
  --space-2:   0.5rem;    /*  8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */
  --space-section: clamp(5rem, 3rem + 6vw, 10rem);
}
```

---

## Layout

```css
:root {
  --container-max: 1200px;
  --container-padding: clamp(1.5rem, 4vw, 5rem);
  --grid-cols: 12;
  --grid-gap: clamp(1rem, 2vw, 2rem);
}
```

**Grid rules:**
- 12-column grid on desktop
- Services use bento grid: asymmetric 2/3 + 1/3 or 1/2 + 1/2 + 1/1 stagger
- No uniform padding everywhere — rhythm varies by section hierarchy
- Hero bleeds to edge at mobile, contained at desktop

---

## Animation

```css
:root {
  --duration-fast:   150ms;
  --duration-normal: 300ms;
  --duration-slow:   500ms;
  --ease-out-expo:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:         cubic-bezier(0.4, 0, 1, 1);
  --ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

**Animation rules:**
- Entrance: `translateY(20px) → 0` + `opacity: 0 → 1`
- Duration: `300ms` with `ease-out-expo`
- Stagger: `50ms` per element in a sequence
- Spring press: `scale(0.97) → scale(1.0)` on button/card press
- Exit: `200ms` (shorter than enter)
- ALL motion: respect `prefers-reduced-motion` with `@media (prefers-reduced-motion: reduce)`
- Never animate: `width`, `height`, `top`, `left`, `margin`, `padding`
- Always animate: `transform`, `opacity`, `clip-path`

---

## Component Conventions

### Button (Primary)
```
bg: --color-accent
text: white
hover: --color-accent-hover + scale(1.02)
active: scale(0.97)
border-radius: 6px
padding: 14px 28px
font: General Sans 500
font-size: --text-small (0.875rem)
letter-spacing: 0.02em
```

### Button (Secondary)
```
bg: transparent
border: 1px solid --color-border-strong
text: --color-text-secondary
hover: bg --color-surface-raised
```

### Badge / Label
```
bg: --color-surface-raised
border: 1px solid --color-border
text: --color-text-muted
font: 0.6875rem uppercase 500 tracking-widest
border-radius: 100px
padding: 6px 14px
```

### Cards (Bento)
```
bg: --color-surface
border: 1px solid --color-border
border-radius: 12px
padding: 2rem
hover: border-color --color-border-strong, translateY(-2px)
transition: 200ms ease-out-expo
```

---

## Breakpoints

| Name | Value |
|------|-------|
| Mobile | 375px |
| Tablet | 768px |
| Desktop | 1024px |
| Wide | 1440px |

Mobile-first: design mobile at 375px, scale up.

---

## Accessibility Standards

- Minimum contrast: 4.5:1 body, 3:1 large text
- All interactive elements keyboard-navigable
- Focus rings: 2px solid `--color-accent`, 2px offset
- No color-only meaning
- `aria-label` on all icon-only controls
- `prefers-reduced-motion` applied globally

---

## Section-Specific Overrides

See `design-system/pages/` for page-specific rules.

Current pages:
- `homepage.md` — Hero, Services, Process, CTA sections
