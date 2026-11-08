# Experibyte Design System (current state)

Documented from the live code in `src/styles.css`, `src/PageContent.jsx`, `src/SiteChrome.jsx`, `src/TemplatesPage.jsx`, `public/legacy.js`. This describes what the site does today, not an ideal. Later CSS overrides win, so values below are the effective ones unless marked otherwise.

Use this file as the reference for any new route (for example the coffee copy page). Match the tokens, type scale, spacing and motion here before inventing new ones.

---

## 1. Colour

| Token | Value | Use |
|---|---|---|
| `--paper` | `#FFFFFF` | Page background, most sections |
| `--ink` | `#0A0D1F` | Body text, headings, header nav, borders on buttons |
| `--blue` | `#2B4BFF` | Accent: `em` in headings, primary button, motion section and contact section backgrounds |
| `--muted` | `#4D5675` | Supporting paragraphs and micro labels (final override) |
| `--line` | `#DCE2F0` | Dividers, FAQ and industry borders |
| Card border | `#E1E6F2` | Process cards, pricing tabs, trust icons |
| Pill track | `#E9EDF7` | Pricing tab container background |
| Templates hero | `#F4F3EE` | Warm off-white on `/templates/` hero only |
| AI accent | `#FF6B3D` | Only the `.ai-spark` graphic, with a dark drop shadow `#141A3A` |
| Header glass | `rgba(255,255,255,.88)` + `blur(16px)` | Fixed header |

Section backgrounds alternate between white and the blue block: the motion story and the contact section are full blue with white text. Everything else is white.

Light and dark themes are not implemented. Do not add dark mode without asking.

---

## 2. Typography

**Font families (as written in CSS):**
- Body and labels: `Poppins, Arial, sans-serif`. Loaded from Google Fonts (400, 500, 600, 700).
- Headings (`h1`, `h2`, `h3`, `.motion-line`): `-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif`. The first heading rule uses this order; a later rule puts "SF Pro Display" first and lists Manrope. On a typical Windows machine none of the system fonts are installed, so headings fall back to Arial. Manrope is referenced but not loaded from Google Fonts, so do not rely on it.
- `JetBrains Mono` is loaded in `index.html` but not used by any rule I found.
- Stat numbers (`.hero-stats strong`, `.price`) use the heading stack.

**Heading scale (effective):**

| Element | Desktop | Notes |
|---|---|---|
| Hero `h1` | `clamp(70px, 8.8vw, 140px)` | line-height `.97`, letter-spacing `-.065em`, weight 800 |
| Section `h2` | `clamp(38px, 4.1vw, 64px)` to `clamp(48px, 6vw, 88px)` | Depends on section. Most section headings sit near `clamp(40px, 5.2vw, 78px)`. Weight 800 |
| Contact `h2` | `clamp(60px, 9vw, 138px)` | line-height 1, letter-spacing `-.065em` |
| Templates `h1` | `clamp(48px, 7.2vw, 100px)` | line-height `.98`, letter-spacing `-.075em` |
| Card/feature title | 15px | FAQ questions, weight 600, line-height 1.5 |

Headings use `em` for the accent phrase. `em` is set to normal style and blue on templates pages (`font-style: normal; color: var(--blue)`). On other pages, check the section rule before assuming blue.

**Labels (micro / eyebrow):**
- Size: 12px desktop, 11px at ≤900px, 10px at ≤540px.
- Weight 600, uppercase, `letter-spacing: .09em` to `.12em`, line-height 1.5 to 1.6.
- Display block, with 25px below (30px in the contact section).
- Colour: `--muted`. White inside the blue sections.
- Written as `EXPERIBYTE / TEMPLATE SHOP`, `01 / BUILD`, `THE PROCESS / 01`. Use the slash pattern for numbered labels.

**Body copy:**
- Section paragraphs: 16px, line-height 1.75, weight 500, colour `--muted`, max-width around 430–580px.
- Small text (footer legal, privacy note): 12px, line-height 1.65.
- Phone widths shrink section paragraphs (rule at ≤540px). Check the exact value before using it on a new page.

**Buttons and links:**
- `.btn`: 11px, weight 600, padding 14px, pill radius 40px, 1px border `#C8D0E5`, transition background .3s.
- `.btn-p`: blue fill, white text.
- `.btn-g` (ghost): white fill on hover.
- `.nav-cta`: 11px, weight 600, 1px ink border, pill, padding 12px 18px, with a 15px arrow SVG (`stroke 1.7`). Shrinks to 10px on phones.
- `.text-link`: inline link used in the FAQ.

---

## 3. Spacing and layout

**Global:**
- Horizontal gutter `--pad`: `5.2vw` by default, `6vw` at ≤900px, `8vw` at ≥1700px.
- Section padding `.section-pad`: `125px var(--pad)` on desktop, `85px var(--pad)` at ≤900px.
- Section heading block (`.section-heading`): flex, space-between, gap 50px, margin-bottom 65px. Stacks vertically at ≤540px with gap 24px.
- Body width: `overflow-x: clip`. No horizontal scroll.

**Header:**
- Fixed, 88px tall desktop, 72px at ≤900px.
- Logo (`/logo.png`) on the left. Nav links centred. "Get a quote" pill on the right. Hamburger `#menu` at small widths.
- Anchored links use `scroll-padding-top: 100px` and Lenis offset `-78`.

**Grids:**
- Services: 2 columns, gap `70px 35px`. Even cards offset down by 105px.
- Industries: 3 columns, gap `0 35px`.
- Trust: 3 columns, gap `50px 45px`.
- Templates catalogue: 3 columns, gap `48px 22px`.
- FAQ: `1fr 1.4fr`, gap 8vw.
- Design section: 2 columns, gap 8vw, centred.

**Cards:**
- Process card: radius 8px, 1px border `#E1E6F2`, padding `45px 55px` (reduced to 35px in later overrides), min-height 390px, subtle shadow `0 -8px 20px #141A3A03`.
- Template preview: radius 18px, aspect ratio 1.68, 1px border `#E5E8F0`.

**Breakpoints in use:** 380, 540, 600, 700, 900, 1100, 1199 (range), 1700 (min). Plus height queries at 740px and 780px. Desktop-first ordering is mixed, so test every breakpoint after a change.

---

## 4. Components

- **Header and footer** (`src/SiteChrome.jsx`): shared by all pages. Footer has Quick Links, Legal, and Business Enquiries columns, then "BACK TO TOP ↑" and the copyright line. Changes here affect every route.
- **Hero** (`.story`): a 390svh scroll story with a sticky 100svh stage (min-height 680px). The hero text fades out and the promise block fades in as you scroll. Mobile height is 330svh.
- **Stats** (`.hero-stats`): three columns of big number plus label.
- **Motion story** (`.motion-story`): blue, 240svh, sticky. Words slide in from ±35px as you scroll.
- **Pricing tabs** (`.tabs`): pill track `#E9EDF7`, padding 5px, buttons inside, active tab marked with class `on`.
- **FAQ** (`.faq-list details`): top border `#E1E6F2`, summary with a plus icon (`.faq-plus`), 24px vertical padding.
- **Industry cards** (`.industry-item`): top border `--line`, `summary` acts as the row, arrow on the right.
- **Contact form** (`ContactForm.jsx`, `form-status.css`): inputs 15px, placeholders white inside the blue contact section.
- **Template cards** (`TemplatesPage.jsx`): preview box with a "Template preview" label. Real preview content is still missing.

---

## 5. Imagery and graphics

- Logo is `public/logo.png` (header and footer). Favicon is `favicon-e.png`.
- Service illustrations are custom SVG/CSS art, not stock photos (`.service-art`, height 340px desktop, 290px at ≤1100px). The page comment says "six custom visual systems, not stock icon cards."
- A 3D object is drawn with three.js into `#three-stage`. It is hidden on phones, and reduced-motion users get the static version.
- Orange `.ai-spark` is the only warm accent. Use it sparingly.
- Share image: `public/share-image.jpg` (1200×630) for OG/Twitter.
- Unsplash/Freepik assets are not used on the site today.

---

## 6. Motion

**Libraries (loaded in `index.html`):** GSAP, ScrollTrigger, Lenis (smooth scroll), three.js. Loaded from `/vendor/`.

**Smooth scroll (Lenis):** `duration 1.1, lerp .095, smoothWheel true, syncTouch false`. Touch scrolling stays native.

**Reveal on enter (`[data-reveal]`):**
- Uses IntersectionObserver.
- Fades from opacity .55 and `translateY(18px)` to opacity 1 and `translateY(0)`.
- 650ms, `cubic-bezier(.22, 1, .36, 1)`.
- Mobile also animates `.motion-line span`, `.startup-steps article`, `.hero-stats > div`, `.hero-panel h1`.

**Scroll-scrubbed motion (GSAP):**
- Hero stage: `scrub .7`.
- Service art: parallax y ±18px, `scrub 1`.
- Motion words: `scrub .5`, slide ±35px.
- Design sheets: small rotation and `y` movement, `scrub 1`.
- Process cards: scale to .955 as the next card arrives (sticky, top 115px).
- Contact spark: rotates 100°.
- Progress bar `#progress` scales 0 to 1 across the page.

**Hover and interaction:**
- Buttons: background transition `.3s`.
- Header menu bars: transform and opacity `.2s`.
- Mobile floating art: `mobile-art-float` 6s ease-in-out infinite, ±10px.

**Fallbacks (must keep):**
- If GSAP fails to load, the body gets `no-animation` and content shows statically.
- `prefers-reduced-motion: reduce` disables all animation and transitions, and sets story heights to auto.
- Content must be readable with JavaScript off. The page is prerendered (`scripts/prerender.mjs`).

---

## 7. Page structure (home)

Order in `PageContent.jsx`:
1. Hero story (`#home`)
2. Services (`#services`), six service cards that link to their detail pages
3. Motion story (`#motion`)
4. Design to code (`#design-to-code`)
5. Starting from zero (`.startup`)
6. Process (`#process`), four sticky cards
7. Industries (`#industries`), 15 cards
8. Pricing (`#pricing`), tabs and cards
9. Trust (`#trust`), six cards
10. FAQ (`#faq`), 16 questions
11. Contact (`#contact`), blue section with form

**Layouts (November 2026 rebuild):** every page is composed by hand in `src/pages/` from the section designs in `src/ui/` (`Sections.jsx`, `Heroes.jsx`, `Closings.jsx`, `Visuals.jsx`), styled in `src/site.css`. Neighbouring sections never share a layout, and each page has one signature visual or interactive piece. Motion runs in React: `src/motion/MotionRoot.jsx` (Lenis, entrances, progress bar) and GSAP ScrollTrigger inside each section; the home 3D scene is `src/home/heroScene.js`. All of it switches off under reduced motion, and content is in the prerendered HTML without script. `public/legacy.js` and `public/vendor/` remain only for the `/v2` draft.

**No repeats:** if the home page already explains something, inner pages must not explain it again. That covers process steps, trust points, payment terms, the content dashboard, design to code, industries and the home FAQ questions. Inner pages add only what the home page does not have. Package prices are the one deliberate overlap, shown as a comparison table on `/pricing/`.

- `/services/`: list of services, "not sure what you need", useful pairings, build standards, technology.
- `/services/<slug>/`: `ServicePage.jsx`, with six pages driven by `content/services.js`.
- `/pricing/`: comparison tables, how to choose, what moves a quote, budget tips, questions.
- `/about/`: why we exist, the meaning of the name, pillars, questions we ask, direction.
- `/contact/`: form panel, contact details, what to include, enquiry types.
- `/faq/`: questions the home FAQ does not answer, from `content/faq.js`, with a topic menu.
- `/templates/`: `TemplatesPage.jsx`. Hero, catalogue (currently empty placeholders), CTA.
- `/privacy-policy/` and `/terms/`: `LegalPage.jsx`.

Inner pages use the blocks in `PageShell.jsx` and the styles in `pages.css`, which sets a calmer type scale under `.page`: `h1` `clamp(38px,5vw,72px)`, `h2` `clamp(28px,3.2vw,46px)`, body 16 to 17px, tinted sections `#F7F8FF`. Each route is prerendered to `dist/<path>/index.html` with its own title, description and canonical. To add a page, add it to `src/routes.jsx` and to `pages` in `scripts/seo.mjs`; prerendering and the sitemap pick it up from there.

---

## 8. Copy voice

- Short, direct sentences. Headlines use a full stop for rhythm: "One studio. Everything your business needs online."
- Honest pricing and FAQ answers. Avoid unverifiable claims ("guaranteed rankings").
- Use "we" for the studio. Do not add invented testimonials, client names or stats.

---

## 9. Known gaps (current site)

- Manrope and JetBrains Mono are referenced or loaded but not used consistently. Headings fall back to Arial on most machines.
- Heading sizes are overridden several times in `styles.css`. Consolidating the rules would be a clean-up task, not part of a new page.
- Templates page has no real products yet.
- Some copy and contact details are placeholders.

---

## Rules for new routes

1. Reuse `SiteHeader` and `SiteFooter`. Do not fork them.
2. Reuse the `.section-pad`, `.section-heading`, `.micro`, `.btn` and `[data-reveal]` patterns.
3. Use the tokens in section 1. Do not add new colours without a reason.
4. Keep all headings at the scale in section 2. Accent with `em`.
5. Keep reduced-motion and no-JS fallbacks working.
6. Add the route to `src/routes.js` and `pages` in `scripts/seo.mjs` (title, description), then rebuild `dist`.
7. Test at 390px, 900px and 1440px wide.
