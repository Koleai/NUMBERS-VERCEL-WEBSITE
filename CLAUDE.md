# Numbers Website — Claude Project Instructions

## What This Project Is

**numbers.la** — marketing site for Numbers, an n8n automation agency based in Los Angeles.

**What Numbers does:** Builds custom automated workflows (with and without AI) for SMB owners and ops teams. Core use case: eliminating repetitive manual work (data entry, lead follow-up, onboarding, reporting, customer follow-ups).

**Customer:** Non-technical business owners and operators (10–100 person companies). They don't know what n8n is. They know they're wasting time on manual work.

---

## Tech Stack

- **Framework:** Next.js 16.2.3 (App Router) — see AGENTS.md for breaking changes
- **UI:** React 19, TypeScript
- **Styling:** Tailwind v4 + CSS custom properties (design tokens)
- **Animation:** Framer Motion (page-level), Three.js (DottedSurface background)
- **Fonts:** Fontshare — Clash Display (headings, 500/600/700) + General Sans (body, 400/500)
- **Icons:** Lucide React
- **Hosting:** Vercel (numbers.la)

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              ← page composition (imports all sections)
│   ├── layout.tsx            ← root layout, metadata, font imports
│   ├── globals.css           ← imports tokens + typography + global
│   └── api/contact/route.ts  ← contact form POST handler
├── components/
│   ├── nav/Nav.tsx           ← fixed top nav, scroll-aware backdrop
│   ├── hero/
│   │   ├── Hero.tsx          ← hero section (copy + CTAs)
│   │   ├── HeroVisual.tsx    ← 3D visual (Three.js)
│   │   └── NanoBananaVisual.tsx ← SVG banana device illustration
│   ├── problem/Problem.tsx   ← pain point ledger list
│   ├── services/
│   │   ├── Services.tsx      ← 4-outcome section
│   │   └── ServiceCard.tsx   ← 3D tilt card (CSS perspective)
│   ├── process/Process.tsx   ← 3-step how it works
│   ├── why/Why.tsx           ← why Numbers, sticky label layout
│   ├── stack/Stack.tsx       ← integration logos marquee
│   ├── cta/CTA.tsx           ← "Give us an hour" full-width CTA
│   ├── contact/ContactForm.tsx ← contact form + API call
│   ├── footer/Footer.tsx     ← minimal footer with links
│   └── ui/
│       ├── AnimatedText.tsx  ← fade-in wrapper (Framer Motion)
│       ├── Badge.tsx         ← section label badge
│       ├── Button.tsx        ← primary/secondary variants
│       ├── DottedSurface.tsx ← Three.js animated particle background
│       └── Particles.tsx     ← (unused, keep for reference)
├── hooks/
│   └── useReducedMotion.ts   ← respects prefers-reduced-motion
├── lib/
│   ├── animation.ts          ← shared Framer Motion variants
│   └── utils.ts              ← utility helpers
└── styles/
    ├── tokens.css            ← ALL design tokens (colors, type, spacing)
    ├── typography.css        ← base typographic styles
    └── global.css            ← reset, layout utilities, 3D helpers
```

---

## Design System

**Colors (dark palette):**
- Background: `#0a0a0a` (`--color-bg`)
- Surface: `#111827` (`--color-surface`)
- Text: `#f9fafb` (`--color-text`)
- Text secondary: `#d1d5db` (`--color-text-secondary`)
- Accent: `#DC2626` (`--color-accent`) — CTAs ONLY, never decorative

**Fonts:**
- Heading: `Clash Display` — `var(--font-heading)`
- Body: `General Sans` — `var(--font-body)`
- Mono: `JetBrains Mono` — `var(--font-mono)` (labels, stats, technical)

**Spacing:** Use `--space-*` tokens only. Never hardcode px values.

**Animation:** All motion uses `AnimatedText` wrapper or Framer Motion variants from `lib/animation.ts`. Always check `useReducedMotion()` before animating.

---

## Copy Rules

**Voice:** Direct, human, conversational. Non-technical reader — no jargon.

**Never use:**
- "streamline", "optimize", "unlock", "game-changing", "revolutionary"
- Exclamation points
- "workflows" or "n8n" in hero, problem, or CTA sections
- Passive voice

**Always use:**
- Real scenarios ("A lead comes in on Friday night...")
- Short declarative sentences
- "you" more than "we"
- Specific outcomes over vague claims

**Audience assumption:** Reader runs a 10–100 person business. Has never heard of automation tools. Knows they're wasting time but hasn't thought about the solution. Needs context, not jargon.

---

## Common Agent Tasks

### Add a new section
1. Create `src/components/<section-name>/<ComponentName>.tsx`
2. Import and add `<ComponentName />` to `src/app/page.tsx`
3. Use `<AnimatedText>` wrapper for scroll reveals
4. Use `<Badge>` for section labels
5. Use `className="container"` div for max-width + padding
6. Use `paddingBlock: "var(--space-section)"` for vertical rhythm

### Change copy
- Copy lives inline in each component as constants (e.g., `PAIN_POINTS`, `OUTCOMES`, `STEPS`)
- Do NOT extract copy to separate files — keep it in the component

### Change colors or spacing
- Edit `src/styles/tokens.css` only
- Never hardcode colors or spacing in component files

### Check what's in each section
- See component map above

---

## Design Constraints

- Accent color (`--color-accent`) = CTA buttons and active states ONLY
- No stock images — abstract visuals, SVG, geometry
- No component should exceed 800 lines
- Every section needs `aria-labelledby` with a matching `id` on the heading
- Reduced motion: wrap all Framer Motion usage with `useReducedMotion()` check
