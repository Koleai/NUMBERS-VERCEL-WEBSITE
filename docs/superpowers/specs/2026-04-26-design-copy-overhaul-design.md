# Numbers Website — Design & Copy Overhaul

**Date:** 2026-04-26  
**Scope:** Option B — design fixes + copy rewrite + missing pieces + Claude setup files  
**Site:** numbers.la  
**Stack:** Next.js 16, React 19, TypeScript, Tailwind v4, Framer Motion, Three.js

---

## Problem Statement

Three issues making site underperform:

1. **Background animation** — DottedSurface Three.js particle grid too dense and bright; text illegible
2. **Typography scale** — Hero and heading sizes too large; layout feels unbalanced
3. **Copy** — Reads as AI-generated; too abstract; assumes reader knows what automation is

---

## Design Changes

### Background Animation (`DottedSurface.tsx`)

- Cut `AMOUNTX` from `40` → `20`
- Cut `AMOUNTY` from `60` → `30`
- Drop particle `opacity` from `0.8` → `0.25`
- Slow animation: `count += 0.1` → `count += 0.04`
- Result: calm, atmospheric — present but not competing with content

### Typography Scale (`tokens.css`)

- `--text-hero`: reduce ~30% — target `clamp(2.75rem, 4vw + 1rem, 5rem)`
- `--text-h2`: proportional reduction
- Keep letter-spacing (`-0.04em`) — character, not noise
- No changes to body, label, or small scales

### Font Documentation (`design-system/MASTER.md`)

- Update `--font-heading` reference from `Satoshi` → `Clash Display`
- Fontshare loads Clash Display 500/600/700 — align docs to reality
- No code change needed

---

## Page Structure

```
Nav
Hero                    ← full copy rewrite, reduced heading scale
Problem                 ← sharper pain points with real-life scenarios
Services                ← each outcome anchored to concrete example
Process                 ← light copy polish only
Why Numbers             ← add LA-based, post-launch monitoring, personal service
Stack                   ← no changes
CTA (NEW)               ← "Give us an hour." full-width dark section
Contact                 ← minor copy polish, structure unchanged
Footer                  ← no changes
```

SocialProof component removed from page — no real client data available.

---

## Copy Direction

**Voice:** Direct, human, conversational. Non-technical reader — assumes no knowledge of automation or n8n. Uses real-life scenarios they recognize. Punchy but not cold. Informative without dragging.

**Rules:**
- No jargon (no "n8n", "workflows", "nodes" in hero or problem sections)
- Every pain point maps to a scenario the reader has lived
- Every outcome maps to a concrete example of what changes
- LA-based agency — mention Los Angeles where natural
- Free audit is the single CTA — not "get started", not "contact us"

### Hero
- Badge: `Automation Agency · Los Angeles`
- Headline: Short, scenario-first. Reader should recognize themselves immediately.
- Sub-headline: What Numbers is + what we do in 2 sentences, plain language
- Primary CTA: `Book a Free Audit →`
- Secondary CTA: `See how it works`

### Problem Section
- Badge: `Sound familiar?`
- Headline: tension between growth and operational drag
- Pain points: 5 items, first-person scenarios, short sentences
  - Lead follow-up
  - Manual onboarding
  - Reporting taking hours
  - Tasks falling through because a person had to remember
  - Hiring to handle work that shouldn't need a human
- Closing line: reframe — not a people problem, a systems problem

### Services Section
- Badge: `What changes`
- Headline: results-focused, concrete
- 4 outcomes (Time, Revenue, Accuracy, Scale) each with:
  - Short headline
  - 2–3 sentence body with real scenario embedded
  - Example: Revenue outcome → lead comes in at 2am, gets follow-up instantly

### Process Section (How It Works)
- 3 steps: Audit → Build → Launch + Monitor
- Light polish on copy — structure and content largely solid
- Emphasize "we monitor after launch" as differentiator

### Why Numbers
- Add: LA-based
- Add: not offshore / not a template shop — custom to your SOPs
- Add: post-launch monitoring included
- Mirror the LinkedIn promise: give us an hour, if we can't show value, free audit anyway

### CTA Section (NEW)
- Full-width, dark surface (`--color-surface`)
- Headline: `Give us an hour.`
- Sub: Plain-language description of what happens in the audit — no commitment, no tech knowledge needed
- Single button: `Book a Free Audit →`
- Supporting line: `Free. No commitment. No tech knowledge needed.`

### Contact Section
- Minor polish: form intro copy more human
- Form fields unchanged

---

## Missing Pieces to Build

### CTA Section Component
- New file: `src/components/cta/CTA.tsx`
- Added to `page.tsx` between Stack and Contact
- Styled: dark surface, centered, editorial

### SocialProof
- Remove from `page.tsx` (component file kept, just not rendered)

---

## Claude Setup Files

### `CLAUDE.md` (project-level)
Full project context for agents:
- What Numbers is, who the customer is, what the site does
- Tech stack and versions
- Component map (which component = which section)
- Design system summary (key tokens, font names, spacing)
- Copy rules (voice, forbidden words, audience assumptions)
- Common agent tasks with file paths

### `AGENTS.md` (project-level)
Agent-specific technical instructions:
- Next.js 16 breaking changes relevant to this repo
- Component patterns (inline styles over Tailwind classes, AnimatedText wrapper, Badge/Button primitives)
- How to add a new section (file location, page.tsx import, semantic HTML pattern)
- Design constraints agents must respect (accent color rules, animation reduced-motion, font variables)

---

## Definition of Done

- [ ] DottedSurface particle count and speed reduced — text readable
- [ ] Hero heading visually balanced at desktop and mobile
- [ ] All copy sections rewritten in human, scenario-first voice
- [ ] CTA section built and in page.tsx
- [ ] SocialProof removed from page.tsx
- [ ] Font reference corrected in MASTER.md
- [ ] CLAUDE.md written with full project context
- [ ] AGENTS.md expanded with technical patterns
- [ ] Site builds without errors (`next build`)
- [ ] Dev server tested — all sections render, contact form submits
