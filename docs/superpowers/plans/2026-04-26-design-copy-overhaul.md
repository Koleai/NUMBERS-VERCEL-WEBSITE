# Design & Copy Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix background animation legibility, reduce heading scale, rewrite all copy in human/scenario-first voice, build missing CTA section, remove SocialProof placeholder, and write comprehensive Claude setup files.

**Architecture:** Surface-level edits to existing components — no structural changes to layout or routing. One new component (CTA). Copy lives inline in each component as constants at top of file. Design tokens changed in `tokens.css` only — no component-level font-size overrides.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind v4, Framer Motion, Three.js, Fontshare (Clash Display + General Sans)

**Note on testing:** These are visual/copy changes. No unit tests apply. Each task verification step is: run `npm run dev`, open `http://localhost:3000`, visually confirm change. Build check is `npm run build` — zero errors = pass.

---

## File Map

| File | Change |
|------|--------|
| `src/components/ui/DottedSurface.tsx` | Reduce particle count + opacity + animation speed |
| `src/styles/tokens.css` | Reduce `--text-hero`, `--text-h2` |
| `design-system/MASTER.md` | Correct font name Satoshi → Clash Display |
| `src/app/page.tsx` | Remove SocialProof import + usage; add CTA |
| `src/components/hero/Hero.tsx` | Full copy rewrite |
| `src/components/problem/Problem.tsx` | Copy rewrite — pain points + headlines |
| `src/components/services/Services.tsx` | Copy rewrite — outcomes with scenarios |
| `src/components/process/Process.tsx` | Light copy polish |
| `src/components/why/Why.tsx` | Copy rewrite — LA, monitored, personal |
| `src/components/cta/CTA.tsx` | NEW — full-width "Give us an hour" section |
| `src/components/contact/ContactForm.tsx` | Minor intro copy polish |
| `CLAUDE.md` | Full project context for agents |
| `AGENTS.md` | Technical patterns for agents |

---

## Task 1: Fix DottedSurface Animation

**Files:**
- Modify: `src/components/ui/DottedSurface.tsx`

- [ ] **Step 1: Open the file and find the three constants to change**

Look for these lines near the top of the `useEffect`:
```typescript
const SEPARATION = 150;
const AMOUNTX = 40;
const AMOUNTY = 60;
```

And find the particle material creation:
```typescript
const material = new THREE.PointsMaterial({
  size: 8,
  vertexColors: true,
  transparent: true,
  opacity: 0.8,
  sizeAttenuation: true,
});
```

And find the animation counter increment:
```typescript
count += 0.1;
```

- [ ] **Step 2: Apply all three changes**

Change particle grid dimensions:
```typescript
const AMOUNTX = 20;  // was 40
const AMOUNTY = 30;  // was 60
```

Change particle opacity:
```typescript
const material = new THREE.PointsMaterial({
  size: 8,
  vertexColors: true,
  transparent: true,
  opacity: 0.25,       // was 0.8
  sizeAttenuation: true,
});
```

Change animation speed:
```typescript
count += 0.04;  // was 0.1
```

- [ ] **Step 3: Verify visually**

```bash
npm run dev
```

Open `http://localhost:3000`. Background animation should be calm and atmospheric — present but not competing with text. Hero headline should be clearly readable.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/DottedSurface.tsx
git commit -m "fix: reduce particle density and opacity on DottedSurface for legibility"
```

---

## Task 2: Reduce Typography Scale

**Files:**
- Modify: `src/styles/tokens.css`

- [ ] **Step 1: Open tokens.css and find the text scale block**

Look for `--text-hero` and nearby heading size variables. They will look something like:
```css
--text-hero:  clamp(4.5rem, 3rem + 5vw, 8rem);
--text-h1:    clamp(2.5rem, 2rem + 2.5vw, 4rem);
--text-h2:    clamp(2rem, 1.5rem + 2vw, 3rem);
```

- [ ] **Step 2: Replace with reduced scale**

```css
--text-hero:  clamp(2.75rem, 2rem + 3vw, 4.5rem);
--text-h1:    clamp(2rem, 1.5rem + 2vw, 3.25rem);
--text-h2:    clamp(1.75rem, 1.25rem + 1.5vw, 2.5rem);
```

Keep `--text-h3`, `--text-h4`, body sizes, and label sizes unchanged.

- [ ] **Step 3: Verify visually**

```bash
npm run dev
```

Open `http://localhost:3000`. Hero heading should feel confident but not overwhelming. Scroll through all sections — headings should have clear hierarchy without dominating layout.

- [ ] **Step 4: Commit**

```bash
git add src/styles/tokens.css
git commit -m "fix: reduce hero and h2 type scale for better visual balance"
```

---

## Task 3: Correct Font Name in Design System Doc

**Files:**
- Modify: `design-system/MASTER.md`

- [ ] **Step 1: Find the font stack block**

```markdown
### Font Stack
```css
/* Heading: Satoshi — geometric, premium */
--font-heading: 'Satoshi', system-ui, sans-serif;
```

- [ ] **Step 2: Replace with correct font**

```markdown
### Font Stack
```css
/* Heading: Clash Display — geometric, editorial */
--font-heading: 'Clash Display', system-ui, sans-serif;

/* Body: General Sans — legible, modern */
--font-body: 'General Sans', system-ui, sans-serif;
```

Also update any reference to `Satoshi` elsewhere in the doc.

- [ ] **Step 3: Commit**

```bash
git add design-system/MASTER.md
git commit -m "docs: correct font-heading name from Satoshi to Clash Display"
```

---

## Task 4: Remove SocialProof from Page

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Remove SocialProof import and usage**

Remove this import:
```typescript
import { SocialProof } from "@/components/social-proof/SocialProof"
```

Remove this JSX usage (wherever it appears between Hero and Problem):
```tsx
<SocialProof />
```

- [ ] **Step 2: Verify page renders without errors**

```bash
npm run dev
```

Open `http://localhost:3000`. Hero should flow directly into Problem section with no gap or broken component.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "chore: remove SocialProof from page (no real client data available)"
```

---

## Task 5: Rewrite Hero Copy

**Files:**
- Modify: `src/components/hero/Hero.tsx`

- [ ] **Step 1: Replace all copy strings in Hero.tsx**

Find the Badge content and replace:
```tsx
<Badge>Automation Agency · Los Angeles</Badge>
```

Find the `<h1>` content and replace:
```tsx
<h1 id="hero-heading" ...>
  Stop doing by hand what your business can run on its own.
</h1>
```

Find the sub-headline `<p>` and replace:
```tsx
<p ...>
  Numbers is an automation agency based in Los Angeles. We build custom
  workflows that handle the repetitive work your team keeps doing manually —
  so your people can focus on the work that actually grows the business.
</p>
```

Keep both CTA buttons exactly as-is (`Book a Free Audit →` and `See how it works`).

- [ ] **Step 2: Verify visually**

```bash
npm run dev
```

Check: headline is direct and recognizable, sub-headline explains what Numbers is in plain language, no jargon.

- [ ] **Step 3: Commit**

```bash
git add src/components/hero/Hero.tsx
git commit -m "copy: rewrite hero headline and sub-headline in human voice"
```

---

## Task 6: Rewrite Problem Section Copy

**Files:**
- Modify: `src/components/problem/Problem.tsx`

- [ ] **Step 1: Replace PAIN_POINTS array**

Find the `PAIN_POINTS` constant at the top of the file and replace entirely:

```typescript
const PAIN_POINTS = [
  "Your team is manually following up with every new lead — or not following up at all because no one had time to get to it.",
  "Every new client kicks off the same onboarding process. Someone has to remember to run it, set up the right tools, and send the right emails. Sometimes they forget.",
  "Your weekly report takes two hours to pull together. The data exists — it just lives in five different places and someone has to move it by hand.",
  "A task gets missed. Not because your team is careless, but because it depended on a person remembering at the right moment.",
  "You're hiring to handle the growth. But a significant portion of what you're paying for is work a system could handle automatically.",
]
```

- [ ] **Step 2: Replace section headline**

Find the `<h2>` in the Problem component and replace:
```tsx
<h2 id="problem-heading" ...>
  Your business is growing. But the manual work is growing with it.
</h2>
```

Find the section intro `<p>` (right column of the header) and replace:
```tsx
<p ...>
  Most businesses reach a point where the day-to-day work of running things
  becomes its own full-time job. Here&apos;s what that usually looks like.
</p>
```

- [ ] **Step 3: Replace closing italic line**

Find the final row italic paragraph and replace:
```tsx
<p ...>
  None of this is a people problem. It&apos;s a systems problem — and it&apos;s fixable.
</p>
```

- [ ] **Step 4: Verify visually**

```bash
npm run dev
```

Scroll to Problem section. Pain points should read as real scenarios — specific enough that a business owner recognizes them.

- [ ] **Step 5: Commit**

```bash
git add src/components/problem/Problem.tsx
git commit -m "copy: rewrite problem section with scenario-based pain points"
```

---

## Task 7: Rewrite Services Section Copy

**Files:**
- Modify: `src/components/services/Services.tsx`

- [ ] **Step 1: Replace OUTCOMES array**

Find the `OUTCOMES` constant at the top of `Services.tsx` and replace entirely:

```typescript
const OUTCOMES = [
  {
    label: "Time",
    headline: "Your team gets their hours back.",
    body: "Think about everything your team does each week that doesn't actually require a human. Data entry, status updates, follow-up emails, recurring reports. Automate those touchpoints and those hours go back to the work that moves your business — not the work that just maintains it.",
  },
  {
    label: "Revenue",
    headline: "Your pipeline stops leaking.",
    body: "A lead comes in on a Friday night. Without automation, it sits until Monday. With it, they receive a personalized follow-up within minutes — while you're at dinner. The deals that used to slip through because of timing start closing instead.",
  },
  {
    label: "Accuracy",
    headline: "Human error leaves the equation.",
    body: "Most business mistakes aren't careless — they happen because someone had to manually move data from one place to another and got something wrong. When a system handles those touchpoints, the margin for error disappears entirely.",
  },
  {
    label: "Scale",
    headline: "You grow without the workload growing with you.",
    body: "With manual processes, every new client adds more to your team's plate. With automation, onboarding your fiftieth client takes the same effort as onboarding your first. You build capacity without building headcount.",
  },
]
```

- [ ] **Step 2: Replace section headline and intro**

Find the `<h2>` and replace:
```tsx
<h2 id="services-heading" ...>
  When the repetitive work runs itself, here&apos;s what you get back.
</h2>
```

Find the intro `<p>` in the header grid and replace:
```tsx
<p ...>
  Automation isn&apos;t just about saving time. It changes what your business
  is capable of — and what your team has to spend their energy on.
</p>
```

- [ ] **Step 3: Verify visually**

```bash
npm run dev
```

Each outcome card should have a concrete scenario embedded in the body copy. No outcome should feel abstract.

- [ ] **Step 4: Commit**

```bash
git add src/components/services/Services.tsx
git commit -m "copy: rewrite services outcomes with concrete scenarios"
```

---

## Task 8: Polish Process Section Copy

**Files:**
- Modify: `src/components/process/Process.tsx`

- [ ] **Step 1: Open Process.tsx and find the steps data**

Look for a constant (likely `STEPS` or similar) with 3 items. Each has a label, headline, and body.

- [ ] **Step 2: Rewrite step copy**

Replace the step content with:

```typescript
// Step 1
label: "01 — Audit"
headline: "We learn how your business actually runs."
body: "Not the org chart version — the real one. Where the spreadsheets live, what your team does between tools, and where time disappears. We map all of it in a free 60-minute session."

// Step 2
label: "02 — Build"
headline: "We design and build the workflows."
body: "Every automation we build is custom to your process. We handle the technical setup, test thoroughly before anything goes live, and walk you through how it works."

// Step 3
label: "03 — Launch & Monitor"
headline: "We deploy — and we stay."
body: "Once live, we monitor every workflow we build. We track performance, catch issues before they affect your business, and adjust as your needs change."
```

- [ ] **Step 3: Verify visually**

```bash
npm run dev
```

Scroll to Process section. Step 3 should make clear that monitoring is included post-launch — a key differentiator.

- [ ] **Step 4: Commit**

```bash
git add src/components/process/Process.tsx
git commit -m "copy: polish process steps — emphasize post-launch monitoring"
```

---

## Task 9: Rewrite Why Numbers Copy

**Files:**
- Modify: `src/components/why/Why.tsx`

- [ ] **Step 1: Find and replace the section headline**

```tsx
<h2 id="why-heading" ...>
  Built for your business. Not a template with your logo on it.
</h2>
```

- [ ] **Step 2: Find and replace the body copy paragraphs**

The Why section has multiple `<p>` elements in the right column. Replace them all with:

```tsx
<p style={{ fontFamily: "var(--font-body)", fontSize: "calc(var(--text-body) * 1.15)", color: "var(--color-text-secondary)", lineHeight: 1.75 }}>
  We&apos;re based in Los Angeles and we work directly with the business
  owners and operators we serve — not through an account manager, not through
  an offshore team.
</p>
<p style={{ fontFamily: "var(--font-body)", fontSize: "calc(var(--text-body) * 1.15)", color: "var(--color-text-secondary)", lineHeight: 1.75 }}>
  Every workflow we build starts with understanding how your business
  actually works. We map your real processes, find what&apos;s worth
  automating, and build systems tailored to your operations.
</p>
<p style={{ fontFamily: "var(--font-body)", fontSize: "calc(var(--text-body) * 1.15)", color: "var(--color-text-secondary)", lineHeight: 1.75 }}>
  Once a workflow is live, we don&apos;t disappear. We monitor everything
  we deploy and stay accountable for its performance. If something breaks,
  we fix it.
</p>
<p style={{ fontFamily: "var(--font-body)", fontSize: "calc(var(--text-body) * 1.15)", color: "var(--color-text-secondary)", lineHeight: 1.75 }}>
  AI has expanded what automation can do — workflows that once required
  rigid rules can now handle judgment calls, read documents, write responses,
  and make routing decisions. For businesses that move early, the advantage
  compounds fast. That&apos;s why Numbers exists.
</p>
```

- [ ] **Step 3: Verify visually**

```bash
npm run dev
```

Why section should now include: LA-based, direct service (not offshore), custom (not template), post-launch monitoring, AI capability.

- [ ] **Step 4: Commit**

```bash
git add src/components/why/Why.tsx
git commit -m "copy: rewrite Why Numbers — add LA, monitoring, custom-not-template angles"
```

---

## Task 10: Build CTA Section

**Files:**
- Create: `src/components/cta/CTA.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create CTA.tsx**

```tsx
"use client"

import { AnimatedText } from "@/components/ui/AnimatedText"
import { Button } from "@/components/ui/Button"

export function CTA() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      style={{
        paddingBlock: "var(--space-section)",
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        textAlign: "center",
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: "640px",
            marginInline: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-8)",
            alignItems: "center",
          }}
        >
          <AnimatedText delay={0}>
            <h2
              id="cta-heading"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "var(--text-h1)",
                letterSpacing: "-0.04em",
                color: "var(--color-text)",
                lineHeight: 1.0,
              }}
            >
              Give us an hour.
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <p
              style={{
                fontSize: "var(--text-body)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                maxWidth: "44ch",
              }}
            >
              We&apos;ll walk through your business, identify what can be
              automated, and show you exactly what changes. No technical
              knowledge required. No commitment expected.
            </p>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <Button href="#contact" variant="primary">
              Book a Free Audit →
            </Button>
          </AnimatedText>

          <AnimatedText delay={0.25}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-label)",
                letterSpacing: "0.08em",
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
              }}
            >
              Free · No commitment · No tech knowledge needed
            </p>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add CTA to page.tsx**

Add import at top of `page.tsx`:
```typescript
import { CTA } from "@/components/cta/CTA"
```

Add `<CTA />` between `<Stack />` and `<ContactForm />`:
```tsx
<Stack />
<CTA />
<ContactForm />
```

- [ ] **Step 3: Verify visually**

```bash
npm run dev
```

Scroll past Stack. CTA section should appear: dark surface, large "Give us an hour." headline, body copy, red button, mono supporting line.

- [ ] **Step 4: Commit**

```bash
git add src/components/cta/CTA.tsx src/app/page.tsx
git commit -m "feat: add CTA section between Stack and Contact"
```

---

## Task 11: Polish Contact Section Intro

**Files:**
- Modify: `src/components/contact/ContactForm.tsx`

- [ ] **Step 1: Find the Contact section headline and intro copy**

Look for the section `<h2>` and intro paragraph above the form fields.

- [ ] **Step 2: Replace headline and intro**

```tsx
// Headline
<h2 id="contact-heading" ...>
  Let&apos;s talk about your business.
</h2>

// Intro paragraph (if present above form)
<p ...>
  Tell us a bit about where your team is losing time. If we think we can
  help, we&apos;ll set up a free 60-minute audit — no commitment required.
</p>
```

Keep all form fields, labels, placeholders, and submit button exactly as-is.

- [ ] **Step 3: Verify visually**

```bash
npm run dev
```

Contact section intro should feel like a natural extension of the CTA above it — warm, direct, low-friction.

- [ ] **Step 4: Commit**

```bash
git add src/components/contact/ContactForm.tsx
git commit -m "copy: polish contact section headline and intro"
```

---

## Task 12: Write Project CLAUDE.md

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Replace CLAUDE.md entirely**

```markdown
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
```

- [ ] **Step 2: Verify file saved correctly**

```bash
head -5 CLAUDE.md
```

Expected: first line is `# Numbers Website — Claude Project Instructions`

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: write comprehensive CLAUDE.md for agent context"
```

---

## Task 13: Expand AGENTS.md

**Files:**
- Modify: `AGENTS.md`

- [ ] **Step 1: Replace AGENTS.md content**

```markdown
# Numbers Website — Agent Technical Guide

## Next.js 16 Breaking Changes (Read Before Writing Code)

This project runs Next.js **16.2.3** with React **19**. Key differences from Next.js 14/15 that affect this codebase:

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
```

- [ ] **Step 2: Verify**

```bash
head -3 AGENTS.md
```

Expected: `# Numbers Website — Agent Technical Guide`

- [ ] **Step 3: Commit**

```bash
git add AGENTS.md
git commit -m "docs: expand AGENTS.md with component patterns and technical guide"
```

---

## Task 14: Final Build Verification

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: Build completes with zero errors. Warnings are acceptable.

- [ ] **Step 2: Smoke test dev server**

```bash
npm run dev
```

Open `http://localhost:3000` and verify:
- [ ] Background animation calm, text clearly readable
- [ ] Hero heading balanced in size, copy direct and human
- [ ] Problem section: 5 scenario-based pain points visible
- [ ] Services: 4 outcome cards with scenario copy
- [ ] Process: 3 steps, step 3 mentions monitoring
- [ ] Why Numbers: mentions LA, monitoring, custom
- [ ] Stack marquee scrolling
- [ ] CTA section visible: "Give us an hour." headline + button
- [ ] Contact form renders, all fields present
- [ ] Footer renders with links
- [ ] No broken imports, no console errors

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: final smoke test passed — design and copy overhaul complete"
```

---

## Execution Order

Tasks must run in this order — each builds on the previous:

```
1  → DottedSurface fix (no dependencies)
2  → Typography scale (no dependencies)
3  → Font doc fix (no dependencies)
4  → Remove SocialProof (before adding CTA to page.tsx)
5  → Hero copy
6  → Problem copy
7  → Services copy
8  → Process copy
9  → Why copy
10 → Build + add CTA section
11 → Contact polish
12 → CLAUDE.md
13 → AGENTS.md
14 → Final build + smoke test
```

Tasks 1–3 can run in parallel. Tasks 5–9 can run in parallel. Tasks 12–13 can run in parallel.
