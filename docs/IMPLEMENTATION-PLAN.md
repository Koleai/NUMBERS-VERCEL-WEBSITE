# Numbers Website — Implementation Plan

## Overview

Building the Numbers automation agency marketing website using Next.js 15 (App Router) deployed on Vercel. Design: dark editorial agency style. Stack: TypeScript, Tailwind CSS, Framer Motion.

## Architecture Decisions

- **Single-page marketing site** with anchor navigation
- **App Router** — each section is a server component, motion handled client-side
- **CSS custom properties** for design tokens (not Tailwind config overrides)
- **Framer Motion** for scroll-triggered entrances and spring interactions
- **Fontshare** for Satoshi + General Sans font delivery

## Reference Files

- `docs/WEBSITE-BRIEF.md` — full brief, audience, voice, competitive context
- `docs/HOMEPAGE-COPY.md` — all section copy with headline options and annotations
- `design-system/MASTER.md` — colors, typography, spacing, animation tokens

---

## Tasks

### Task 1: Global Styles & Design Tokens

**Files to create/modify:**
- `src/styles/tokens.css` — all CSS custom properties from MASTER.md
- `src/styles/typography.css` — font-face declarations, type scale, body defaults
- `src/styles/global.css` — resets, base element styles
- `src/app/globals.css` — imports all above

**Spec:**
- All colors as CSS custom properties from MASTER.md
- Fluid type scale using `clamp()` values from MASTER.md
- Satoshi + General Sans loaded via Fontshare preconnect
- `prefers-reduced-motion` global override: `transition: none !important`
- Dark background (#0a0a0a) as html/body default
- No Tailwind overrides — tokens live in CSS, Tailwind utility classes reference them

**Test:** `pnpm dev` renders a dark page with correct font stack

---

### Task 2: Root Layout & Metadata

**Files to create/modify:**
- `src/app/layout.tsx`

**Spec:**
- Font preconnect to Fontshare in `<head>`
- Vercel Analytics + Speed Insights imported
- SEO metadata: title "Numbers — n8n Automation Agency", meta description from HOMEPAGE-COPY.md
- OG tags: type website, title, description
- `lang="en"`, `viewport` correct (no user-scale disable)
- Dark background body class

**Test:** `pnpm build` succeeds, metadata renders in `<head>`

---

### Task 3: Nav Component

**Files to create:**
- `src/components/nav/Nav.tsx`

**Spec:**
- Fixed top nav, transparent → `surface/80` backdrop-blur on scroll (20px threshold)
- Logo: "Numbers" wordmark in Satoshi 700
- Links: Services | How It Works | Contact — anchor links to sections
- CTA button: "Get A Free Consultation →" — `--color-accent` bg, white text, anchors to `#contact`
- Mobile: hamburger toggle, full-screen overlay menu
- `aria-label="Main navigation"` on `<nav>`
- Keyboard-navigable, focus rings visible

**Animation:**
- Nav fades in on mount (opacity 0→1, 300ms)
- Mobile menu: slide down + fade (200ms ease-out-expo)

---

### Task 4: Hero Section

**Files to create:**
- `src/components/hero/Hero.tsx`
- `src/components/hero/HeroVisual.tsx`

**Spec:**

Hero.tsx:
- Badge/label above: `n8n Automation Agency` in badge component
- Headline: "Your business runs fine. You shouldn't have to run it manually." — `--text-hero` size, Satoshi 700, letter-spacing -0.03em
- Sub-headline: from HOMEPAGE-COPY.md — General Sans, `--text-body` * 1.25, `--color-text-secondary`
- Primary CTA: "Get A Free Consultation →" button — anchors to `#contact`
- Secondary CTA: "See How It Works" text link — anchors to `#how-it-works`
- Min-height: `100svh`, centered vertically
- Max line-length: `18ch` on headline, `52ch` on sub

HeroVisual.tsx (right side or bg):
- Abstract geometric SVG or CSS animation — NOT a stock photo
- Could be: animated workflow graph nodes, or minimal geometric shapes
- Dark, subtle — must not distract from headline

**Animation (Framer Motion):**
- Badge: fade in first (delay: 0)
- Headline: fade + slide up (delay: 100ms)
- Sub: fade + slide up (delay: 200ms)
- CTA: fade + slide up (delay: 350ms)
- Visual: fade in (delay: 400ms)
- All: `y: 20 → 0`, `opacity: 0 → 1`, `duration: 0.6`, `ease: [0.16, 1, 0.3, 1]`

---

### Task 5: Social Proof Strip

**Files to create:**
- `src/components/social-proof/SocialProof.tsx`

**Spec:**
- Dark surface (`--color-surface`) strip, full-width
- Layout: stat left, logo strip right (on desktop), stacked on mobile
- Stat: "12+ hours recovered per client, per week." — large Satoshi 700
- Label below stat: "On average across our active clients"
- Logo placeholders: 5–6 client logo slots (gray/muted, no color) — use placeholder divs initially
- `role="list"` for logo strip

**Animation:** Fade in on scroll entry (Framer Motion `whileInView`)

---

### Task 6: Problem Section

**Files to create:**
- `src/components/problem/Problem.tsx`

**Spec:**
- Section label badge: `Why you're here`
- Headline: from HOMEPAGE-COPY.md
- Body paragraph: 2 paragraphs from HOMEPAGE-COPY.md
- 3 pain point cards below: Reporting, Lead Routing, Operations
- Layout: headline + body left, cards staggered right (desktop); stacked (mobile)
- `id="problem"` for anchor nav

**Animation:** Staggered card entrances (50ms per card delay)

---

### Task 7: Services Section (Bento Grid)

**Files to create:**
- `src/components/services/Services.tsx`
- `src/components/services/ServiceCard.tsx`

**Spec:**

Services.tsx:
- Section label: `What we automate`
- Headline: from HOMEPAGE-COPY.md
- Bento grid: 6 cards in asymmetric layout
  - Desktop: 2-col with 1 large card (2/3 width) + 1 normal + 4 normal
  - Mobile: single column
- `id="services"` for anchor nav

ServiceCard.tsx:
- `--color-surface` bg, `--color-border` border, 12px radius
- Icon slot (SVG icon per service)
- Card title + copy from HOMEPAGE-COPY.md
- Hover: `translateY(-2px)`, border brightens to `--color-border-strong`
- Transition: 200ms ease-out-expo

**Icons (use Lucide React):**
- Sales: `ArrowUpRight`
- Reporting: `BarChart2`
- Onboarding: `UserCheck`
- Operations: `Zap`
- E-commerce: `ShoppingBag`
- Custom: `Wrench`

---

### Task 8: How It Works Section

**Files to create:**
- `src/components/process/Process.tsx`

**Spec:**
- Section label: `The process`
- Headline: from HOMEPAGE-COPY.md
- 3 steps: Audit, Build, Run
- Layout: horizontal steps on desktop (with connecting line), stacked on mobile
- Each step: number label (`01`, `02`, `03` in monospace), step name, body copy
- `id="how-it-works"` for anchor nav

**Animation:** Steps reveal left-to-right with 100ms stagger

---

### Task 9: Stack Section

**Files to create:**
- `src/components/stack/Stack.tsx`

**Spec:**
- Section label: `Powered by n8n`
- Headline + sub-copy from HOMEPAGE-COPY.md
- n8n logo prominent
- Integration list: scrolling marquee of integration names (text-based, no logos required initially)
- Marquee: CSS animation, pauses on hover, respects reduced-motion (stops)

---

### Task 10: Contact Form Section

**Files to create:**
- `src/components/contact/ContactForm.tsx`

**Spec:**
- `id="contact"` — all CTA buttons on the page anchor here
- Full-width section, `--color-surface` bg
- Headline: "Tell us what's eating your time."
- Sub-copy from HOMEPAGE-COPY.md
- Form fields: Name (required), Email (required), Company (optional), textarea "What's taking up your time?" (required)
- Submit button: "Book My Free Consultation →" — `--color-accent` bg
- Supporting line: "Or email us at hello@numbersamounts.com"
- Success state: replace form with a confirmation message on submit
- Client component (`"use client"`) with React state for form handling
- Form submission: `mailto:` action or `fetch` to a `/api/contact` route (stub the route — no real email sending needed yet)
- Centered layout, max-width 640px
- Input styles: `--color-surface-raised` bg, `--color-border` border, focus ring `--color-accent`

---

### Task 12: Footer

**Files to create:**
- `src/components/footer/Footer.tsx`

**Spec:**
- `--color-surface` bg, top border `--color-border`
- Left: "Numbers" wordmark + tagline "Work less. Scale more."
- Center: nav links (Services, How It Works, Contact, Privacy, Terms)
- Right: © 2025 Numbers
- Responsive: stacks on mobile

---

### Task 13: Page Composition & Reusable UI

**Files to create/modify:**
- `src/app/page.tsx` — composes all sections in order
- `src/components/ui/Button.tsx` — primary + secondary variants
- `src/components/ui/Badge.tsx` — section label component
- `src/components/ui/AnimatedText.tsx` — Framer Motion text reveal wrapper
- `src/hooks/useReducedMotion.ts` — `prefers-reduced-motion` hook
- `src/lib/animation.ts` — shared Framer Motion variants

**page.tsx section order:**
```tsx
<Nav />
<Hero />
<SocialProof />
<Problem />
<Services />
<Process />
<Stack />
<ContactForm />
<Footer />
```

---

### Task 14: Vercel Configuration

**Files to create/modify:**
- `vercel.json` — headers for HSTS, CSP, X-Frame-Options, Referrer-Policy
- `.env.local` — placeholder for contact form env vars
- `next.config.ts` — image domains, font optimization

**Security headers:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

---

## Execution Order

Tasks can be done in this order (each builds on previous):

1. → Task 1 (tokens)
2. → Task 2 (layout)
3. → Task 13 partial (Button, Badge, AnimatedText, useReducedMotion, animation lib)
4. → Task 3 (Nav)
5. → Task 4 (Hero)
6. → Task 5 (SocialProof)
7. → Task 6 (Problem)
8. → Task 7 (Services)
9. → Task 8 (Process)
10. → Task 9 (Stack)
11. → Task 10 (ContactForm)
12. → Task 11 (Footer)
13. → Task 12 final (page.tsx composition)
14. → Task 13 (Vercel config)

## Packages to Install

```bash
pnpm add framer-motion lucide-react
pnpm add -D @types/node
```

## Definition of Done

- `pnpm build` passes with zero errors
- No TypeScript errors (`pnpm tsc --noEmit`)
- All sections visible and copy-accurate to HOMEPAGE-COPY.md
- Responsive at 375px, 768px, 1024px, 1440px
- `prefers-reduced-motion` disables all Framer Motion animations
- All interactive elements have visible focus rings
- Nav anchor links scroll to correct sections
- CTA button opens a calendar link (or mailto as placeholder)
