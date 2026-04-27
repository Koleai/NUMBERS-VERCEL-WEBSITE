# Numbers — Website Brief

## Brand Overview

**Company:** Numbers  
**Category:** Business Automation Agency  
**Core Tool:** n8n (workflow automation platform)  
**Tagline (working):** "Work Less. Scale More."

---

## Business Context

Numbers is an automation agency that builds custom workflow automations using n8n, eliminating the manual, repetitive, non-revenue-generating tasks that slow businesses down. We free business owners and teams from operational drag so they can focus on growth.

### Sales Points (Priority Order)

1. **Save time** — Eliminate hours spent on manual, repetitive tasks
2. **Create efficiency** — Connect disconnected tools so data flows without human intervention
3. **Scale** — Remove operational bottlenecks so growth doesn't require proportional headcount

---

## Target Audience

### Primary: Growth-Stage SMB Owners / Operators
- 10–100 person companies
- Founder-led or ops-led
- Spending hours on: reporting, data entry, lead routing, invoice processing, follow-ups
- They feel: busy but not productive, overwhelmed, bottlenecked
- They want: to get their time back, to stop being the glue between their tools
- Language they use: "I spend so much time just moving data around", "we're manually doing things we shouldn't be", "I can't scale because everything runs through me"

### Secondary: Operations Managers at Mid-Market Companies
- 100–500 employees
- Responsible for process efficiency
- Already aware of automation; want an expert partner not a DIY tool

---

## Competitive Landscape

### What Competitors Do (and We Don't)

**Common competitor patterns:**
- Generic "automate anything" messaging without specificity
- Feature-list approaches (connect 500+ apps)
- Zapier/Make comparison angles
- Enterprise-only positioning
- Pricing confusion — unclear service model

**Competitor messaging themes:**
- "Stop doing manual work"
- "Save X hours per week"
- "Connect your apps in minutes"
- "Grow without growing headcount"
- "Turn your tools into a system"

**Where they fall short:**
- Template-heavy outcomes (generic ROI claims)
- No personality — feels like a software product, not a specialist partner
- Buried real-world outcomes
- No industry specificity

### How Numbers Differentiates

- **Specialist, not generalist** — Deep n8n expertise (not a wrapper around Zapier)
- **Outcomes-led** — We talk in hours recovered and revenue unlocked, not features
- **Boutique** — Small team, senior attention, bespoke builds
- **Business-first** — We learn your workflow before we touch a node
- **Honest** — We tell you what can and can't be automated, and why

---

## Unique Value Proposition

Numbers builds custom automations that take recurring, manual work off your plate — so you stop running operations and start running your business.

---

## Website Goals

1. **Primary CTA:** Book a free automation audit
2. **Secondary CTA:** See our work / case studies
3. **Trust Goal:** Establish credibility as a specialist (not a freelancer)
4. **Conversion Trigger:** Help the visitor self-identify ("yes, this is my problem")

---

## Page Structure

### Homepage

| Section | Purpose |
|---------|---------|
| Nav | Logo + links + "Book Audit" CTA |
| Hero | Big value prop + sub-headline + primary CTA |
| Social Proof Strip | Logos / client indicators / stat |
| Problem Section | Name the pain — the cost of manual work |
| Services / How We Help | What we automate + the outcome |
| How It Works | 3-step process: Audit → Build → Run |
| Case Study Teaser | One proof story with before/after numbers |
| Stack | n8n logo + integrations we support |
| Final CTA | Repeat offer — book the audit |
| Footer | Links, contact, legal |

---

## Voice & Tone

**Personality:** Direct, confident, grounded. No hype. No corporate speak.

**Formality:** Professional but conversational — talking to a smart business owner, not a corporation.

**Avoid:**
- "Streamline" (overused)
- "Optimize" (vague)
- "Unlock" (cliché)
- "Revolutionary" / "Game-changing"
- Exclamation points
- Passive voice

**Use:**
- Short, declarative sentences
- Specific numbers over vague claims
- "You" more than "we"
- Active voice throughout
- Questions that land in the reader's gut

---

## Design Direction

### Style: Dark Editorial Agency

Inspired by gopidge.com — premium, intentional, text-forward. Not a SaaS product template. Feels like a specialist partner, not a platform.

**Key design principles:**
- Dark luxury palette: near-black base (#0a0a0a–#111827), off-white text
- Single warm or electric accent (red `#DC2626` → consider amber `#F59E0B` or keep red)
- Large, confident typography at hero scale
- Asymmetric grid-breaking layouts — not a centered column stack
- Motion that clarifies hierarchy (scroll reveals, subtle entrances)
- Bento grid for services/features section
- No stock photos — abstract visuals, geometry, workflow diagrams

**Mood references:**
- gopidge.com (restraint, editorial)
- Linear.app (dark luxury B2B)
- Vercel.com (clean, confident)

### Typography (from design system)
- **Heading:** Satoshi (bold, geometric, premium)
- **Body:** General Sans (legible, modern)
- Hero heading: `clamp(3.5rem, 2rem + 7vw, 8rem)`
- Body: `clamp(1rem, 0.92rem + 0.4vw, 1.125rem)`

### Color Tokens
```css
:root {
  --color-bg: #0a0a0a;
  --color-surface: #111827;
  --color-surface-raised: #1f2937;
  --color-text: #f9fafb;
  --color-text-muted: #9ca3af;
  --color-accent: #DC2626;
  --color-accent-hover: #ef4444;
  --color-border: #1f2937;
}
```

### Animation
- Entrance: Y:20→0 + opacity:0→1, staggered 50ms per element
- Duration: 300ms ease-out-expo
- Spring physics where possible
- Respect `prefers-reduced-motion`
- No layout-bound property animations

---

## Content Strategy

### Numbers to Use (placeholders — confirm with client)
- "X hours saved per client per week" (need real data)
- "Built 100+ automations" (confirm)
- "Average 12 hours saved per week per client" (estimate to validate)

### Social Proof Approach
- Client logos (anonymized if needed at start)
- Specific before/after workflow stories
- Industry verticals served

### SEO Signals
- Primary: "n8n automation agency"
- Secondary: "business workflow automation", "automate business processes", "n8n consulting"
- Local (if applicable): "[City] automation agency"

---

## Technical Specs

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 + CSS custom properties
- **Animation:** Framer Motion
- **Fonts:** Satoshi + General Sans via Fontshare or self-hosted
- **Deployment:** Vercel
- **Forms:** Native form → Vercel Email or Resend
- **Analytics:** Vercel Analytics

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Homepage composition
│   └── globals.css         # Imports tokens + base
├── components/
│   ├── nav/
│   │   └── Nav.tsx
│   ├── hero/
│   │   ├── Hero.tsx
│   │   └── HeroVisual.tsx
│   ├── social-proof/
│   │   └── SocialProof.tsx
│   ├── services/
│   │   ├── Services.tsx
│   │   └── ServiceCard.tsx
│   ├── process/
│   │   └── Process.tsx
│   ├── cta/
│   │   └── CtaSection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       └── AnimatedText.tsx
├── hooks/
│   └── useReducedMotion.ts
├── lib/
│   └── animation.ts
└── styles/
    ├── tokens.css
    ├── typography.css
    └── global.css
```
