# Lavish Junk Removal — Design System

A complete brand & UI system for **Lavish Junk Removal**, a modern, premium junk-removal service operating across the **Lower Mainland, British Columbia** (North Vancouver, Vancouver, West Vancouver, Burnaby, Coquitlam, Port Moody, and surrounding areas).

The brand sits deliberately outside the "neon-truck-and-thumbs-up" junk-removal cliché. Visually it borrows from luxury-service / boutique-hospitality languages: a near-black canvas, a single gold accent, serif headlines, generous whitespace, and crisp 1px gold borders. The goal is to feel **trustworthy, expensive, and unmistakably local** — a service you'd recommend to a homeowner clearing a heritage North Van bungalow as readily as to a property manager finishing an estate sale.

## Sources

- **Production website (GitHub):** [Suxyy10kBAL/lavish-junk-removal](https://github.com/Suxyy10kBAL/lavish-junk-removal) — static multi-page site (`index.html`, `services.html`, `pricing.html`, `contact.html`). Files imported into this project root for reference. Open the repo for the latest copy.
- **Brand logo:** `assets/lavish-logo.png` (also retained as `assets/lavish-logo-original.png`). Black serif "LAVISH" wordmark, gold "JUNK REMOVAL" caps, and a black-and-gold dump-truck illustration.
- **Business voice:** lifted directly from the marketing copy on the production site.

## Project context

- **Single product:** marketing website (`ui_kits/website/`). Lavish operates the site only — there's no app or dashboard. The site's primary job is converting a visitor into a phone call, text message, or estimate-form submission.
- **Three CTAs everywhere:** *Get Free Estimate* (gold primary, links to the estimate form), *Call Now* (outline, `tel:+17789384235`), *Text a Photo* (outline, `sms:`). The mobile bottom bar permanently surfaces *Call Now* + *Get Estimate*.
- **Service-line copy** is short and concrete: "Same-Day & Next-Day Available", "We Load Everything", "No Hidden Fees", "Upfront Pricing".

---

## Content fundamentals

**Voice:** professional, friendly, plain-spoken. Reassuring rather than salesy. Reads like a small-business owner who has been doing this for years and respects your time.

**Person:** mixed — `we` for the team, `you/your` for the customer. Never `I`. Sentences are direct: *"We confirm the price before any work begins."* not *"Pricing is confirmed prior to commencement of services."*

**Casing:** **Title Case** for headings, eyebrows, and CTAs (`Fast, Professional Junk Removal Made Simple` / `Get Free Estimate` / `What We Remove`). **Sentence case** for body copy and form labels (`Tell us about the items`).

**Tone words to lean into:** *fast, professional, upfront, friendly, local, careful, stress-free, fair, reliable.* The word **"lavish"** itself is used sparingly in copy — it's expressed through visual treatment, not adjectives.

**Word ceilings:**
- H1: ≤ 8 words ("Fast, Professional Junk Removal Made Simple")
- Card title: 2–4 words ("Furniture Removal", "Upfront Pricing")
- Body paragraph: ≤ 2 sentences in most surfaces; ≤ 3 in dense ones (pricing).
- Eyebrow: 2–4 words, UPPERCASE.

**Punctuation conventions:**
- En dashes (`–`) for price ranges: `$75–100`.
- Em dashes (`—`) for emphasis: `"We're local, professional, and treat every property with respect."`
- Trailing `.` on body sentences; **no** trailing period on card titles or CTAs.
- Ampersands inside short labels: `Washers & Dryers`, `How It Works`.

**Emoji & symbols:** no emoji. The only non-Latin glyphs in the production copy are:
- `★` for review stars (rendered in gold, `&#9733;`)
- `›` in breadcrumbs (rendered as a faint white separator)
- `⚠` for the hazardous-materials note (gold)
- `✓` for in-list check marks (rendered in gold via CSS pseudo-elements)

**Tone examples (verbatim, use as reference):**
- > Lavish Junk Removal helps homeowners, renters, businesses, and property managers remove unwanted junk quickly, safely, and stress-free — with upfront pricing and no hidden fees.
- > Three easy steps and the junk is gone.
- > Final price confirmed before work starts. What we quote is what you pay.
- > We're mindful of walls, floors, and landscaping during every removal.
- > We're local, professional, and treat every property with respect.
- > We remove almost anything — here's a partial list of accepted items.

**Avoid:** marketing fluff ("revolutionary"), industry jargon ("haulage solutions"), exclamation marks, all-caps headlines outside of eyebrows and CTAs.

---

## Visual foundations

### Palette
A **two-color brand** anchored on near-black + a single warm gold, with light/dark surface variants. Color usage is restrained — gold is a privilege, not a default.

| Token | Hex | Role |
|---|---|---|
| `--gold` | `#C5A14A` | Primary accent, icon stroke, CTA gradient start, focus ring |
| `--gold-deep` | `#A98735` | Hover / pressed gold; logo wordmark |
| `--gold-light` | `#E0BF6F` | Gradient stop, highlights |
| `--bg` | `#0F0F10` | Dark sections, hero, pricing, contact |
| `--bg-card` | `#1A1A1E` | Dark cards (pricing, contact, form) |
| `--surface` | `#FFFFFF` | Light sections (how-it-works, services, reviews) |
| `--surface-off` | `#F8F8F9` | Alternating light section bg ("muted") |
| `--text` / `--text-dim` | `#18181B` / `#52525B` | Body on light |
| `--text-light` / `--text-muted` | `#F2F2F2` / `#A1A1AA` | Body on dark |
| `--green` `#2E7D32` / `--amber` `#E0A030` | | Guarantee strip / "extra cost" warnings only |

**Section rhythm.** Pages alternate `--bg` (dark) → `--surface` (white) → `--surface-off` (off-white) → `--bg` to create a vertical reading cadence; never two dark sections in a row.

### Typography
Two webfonts, both Google Fonts:

- **Headings — Playfair Display, weight 700/800.** Carries the "lavish" feeling. Used for the hero `<h1>`, all `.section-title` blocks, pricing card titles, CTA banner h2, page-hero h1, and the wordmark `Lavish`. Tight leading (1.12–1.2).
- **UI / Body — Inter, weights 400/500/600/700/800.** Used for everything else: body, eyebrows, CTAs, navigation, form labels, cards.

Sizes are mostly fluid `clamp()` so the hero scales from 2.1rem (mobile) up to 3.8rem (large desktop). Body is `1rem / 1.65`. Eyebrows are `0.78rem`, **uppercase, `letter-spacing: 0.13em`**, gold. **Eyebrows always sit above a serif title** — that pairing is the system's signature.

> **Substitution note:** The production site loads Inter + Playfair Display from Google Fonts; no `.ttf` files are checked in. This design system loads them the same way via `@import` in `colors_and_type.css`. If you ever need offline copies, download the families from Google Fonts and drop into `fonts/`. *No substitutions have been made — the fonts the site uses are the fonts here.*

### Spacing & rhythm
- **Section padding:** `5.5rem` top + bottom (88px) on desktop, `3.75rem` on mobile. This is the dominant white-space token.
- **Container:** `min(100% - 2rem, 1160px)` — wide-ish, comfortably centered.
- **Grids:** `gap` of `1.15–1.5rem` between cards. The card-grid breakpoints step **4 → 2 → 1** column at 1080px and 768px.
- **Card padding:** `1.5rem` for small cards, `2rem 1.65rem` for pricing cards, `2.25rem 2rem` for forms.

### Corner radii
- `--radius` `14px` — default card. Soft but not pillowy.
- `--radius-sm` `10px` — inputs, small badges.
- `--radius-xs` `6px` — nav-link hover hit area.
- **Pills (`999px`)** — every CTA button, every tag, every badge. Pills are core to the look.

### Borders & dividers
- Light surfaces: `1px solid #E5E7EB` cards.
- Dark surfaces: `1px solid rgba(255,255,255,0.10)` cards.
- **Gold-tinted border `rgba(197,161,74,0.20–0.50)`** for trust badges, pricing cards, contact tiles, and any element that wants to whisper "premium". Border-color usually intensifies on hover.
- **3px gold left-border** on service cards is the brand's strongest one-element signature. Don't borrow it for non-service surfaces.

### Shadows / elevation
- Light cards default to a flat-ish `0 2px 8px rgba(0,0,0,.06)`.
- Cards lift to `0 8px 24px rgba(0,0,0,.08)` on hover, paired with `translateY(-3px)`.
- The featured pricing card and form get `0 20px 48px rgba(0,0,0,.13/.22)` on dark.
- **Gold glow** `0 6px 18px rgba(197,161,74,.32)` is reserved for the primary CTA gradient and intensifies on hover.

### Backgrounds & motifs
- **Hero / dark sections** carry a single radial `rgba(197,161,74,.07)` glow off-center — almost invisible but warms the void.
- **Pricing-intro panel** uses `rgba(255,255,255,.04)` on the dark bg with a gold-tinted border — a soft "inset card" look.
- **CTA banner** uses a subtle two-stop `linear-gradient(135deg, #0d0d10, #171510)` (charcoal → warm charcoal) with gold-rule top/bottom borders.
- No textures, no photos as backgrounds, no patterns. Photography (when present) lives inside framed media wells with a 14px radius and a `rgba(197,161,74,0.2)` 1px border.

### Motion
- Single transition token: `0.18s ease` on `transform`, `box-shadow`, `background-color`, `border-color`.
- Hover signature: `translateY(-1px)` (buttons) / `translateY(-3px)` (cards) + shadow lift.
- Active/pressed: `translateY(0)`.
- No bounces, springs, or scroll-linked animations. The site is intentionally still.

### Hover & press states
- **Gold button:** gradient shifts from `gold → gold-light` (default) to `gold-deep → gold` (hover); shadow strengthens. Press resets translation.
- **Outline button on dark:** border opacity ramps `0.42 → 0.7`.
- **Nav link:** background `rgba(197,161,74,0.07)` + text `gold-deep`.
- **Active nav link:** gold underline (2px) sits below the label.
- **Tags / area chips:** border becomes gold, label becomes gold-deep.

### Focus rings
Form inputs use `outline: 2px solid rgba(197,161,74,.65); outline-offset: 1px` and drop the border color to transparent under focus. Always visible — accessibility-first.

### Transparency & blur
- The sticky header is `rgba(255,255,255,0.97)` with `backdrop-filter: blur(10px)` — the **only** place blur is used.
- Light overlays on dark (`rgba(255,255,255,0.04–0.08)`) for nested panels (pricing intro, "Not Sure?" strip, mobile call button).

### Imagery direction
- Hero media well is reserved for a **photograph of the truck or crew**, framed in 4:3 with the gold-tinted border. The repo currently uses the logo image as a placeholder — replace with real photos when shooting.
- Imagery should be **warm-tinted** (slight gold/amber cast in post) so it sits naturally beside the gold accents. Avoid cool blue/teal grades.
- No b&w. No grain. No heavy filters.

### Layout rules
- Header is **sticky, 76px min-height** on desktop, with a hamburger collapse below 1080px.
- Mobile gets a **fixed bottom action bar** with `Call Now` + `Get Estimate`. Page content is padded `74px` at the bottom to clear it.
- Section heads use either a centered `section-head-center` (3 stacked lines: eyebrow / serif title / lead) or a left-aligned `section-head` variant.

---

## Iconography

The production site uses **inline feather-style SVG icons** drawn directly into HTML — no icon font, no sprite, no CDN. Specs:

- **Stroke-only**, never filled.
- **Stroke width `1.8` or `2`** (1.8 for service cards, 2 for trust badges, why-cards, and form/CTA icons).
- `stroke-linecap="round"` + `stroke-linejoin="round"`.
- Colored via `currentColor` so they inherit `--gold` from their wrapper.
- Sized **16–24px** in-place; **36–48px** in icon tiles (with a gold-tinted square background, `rgba(197,161,74,0.1)` fill + `0.25` border, 10–12px radius).
- The mark in the brand logo is a **black-and-gold dump truck illustration** (see `assets/lavish-logo.png`); it is a one-off, not part of the icon system.

**Glyph repertoire seen in production** (Feather/Lucide equivalents, all hand-inlined): `home`, `clock`, `check`, `shield`, `truck` (box-with-handle proxy), `dollar-sign`, `users`, `package`, `tool`, `refresh-cw`, `message-square`, `monitor`, `building`, `phone`, `mail`, `map-pin`, `file-text`.

**Recommended usage going forward:**
- Inline SVG is the canonical pattern. Keep new icons in the same feather aesthetic — `1.8`–`2` stroke, rounded joins, 24×24 viewBox.
- If you need to introduce a CDN icon set for velocity, **Lucide** (the maintained fork of Feather) is the closest visual match.
- **No emoji.** No Material/filled-style icons. No two-tone or duotone treatments.

The logo PNG lives at `assets/lavish-logo.png`. A wordmark fallback (Playfair "Lavish" + Inter "Junk Removal") is implemented in markup as a `.logo` flex group so the brand is always readable even before the image loads.

---

## Files in this design system

```
.
├── README.md                  ← you are here
├── SKILL.md                   ← Agent-Skill manifest (for download/reuse)
├── colors_and_type.css        ← brand tokens & semantic type classes
├── assets/
│   ├── lavish-logo.png        ← primary logo (truck + wordmark on white)
│   └── lavish-logo-original.png
├── preview/                   ← Design System tab cards (~20 files)
├── ui_kits/
│   └── website/               ← website UI kit (recreated from production)
│       ├── README.md
│       ├── index.html         ← interactive click-thru of homepage
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── HowItWorks.jsx
│       ├── WhyChoose.jsx
│       ├── Services.jsx
│       ├── Reviews.jsx
│       ├── Areas.jsx
│       ├── CtaBanner.jsx
│       ├── Footer.jsx
│       ├── MobileBar.jsx
│       └── icons.jsx          ← shared SVG icon components
├── index.html  · contact.html  · pricing.html  · services.html  · script.js  · styles.css
│       └─ original production source (imported from the GitHub repo, kept for reference)
```

**To extend:** drop new component files inside `ui_kits/website/`, follow the icon stroke spec, and use the CSS tokens in `colors_and_type.css`. The Design System tab will pick up any new card you `register_assets` into `preview/`.

---

## A note on what's missing

- **Photography.** The brand is dressed for premium imagery but has none yet. Until real truck/crew shots arrive, hero and inner-page media wells will be empty or use the logo as a placeholder.
- **Map graphic.** The "Areas Served" section is pill chips only — there's space for a styled service-area map but it has not been designed.
- **Social cards.** Open Graph / Twitter card images haven't been produced.
- **Favicon.** Not yet in the repo.

