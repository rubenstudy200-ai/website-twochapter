# TWOCHAPTER — Website

Artistic-minimalist photography & film studio website for **TWOCHAPTER** (Bali).
Design direction: **Sun-Faded Editorial**. Built with hand-written HTML, CSS, and vanilla JS — no framework, no build step.

Reference for structure only: <https://www.gusmank.com/about-me/>. No personal claims, copy, or images from the reference site are used.

---

## 1. Run locally

Option A — open directly:

```
index.html
```

Option B — local server (recommended so relative paths and fonts behave consistently):

```powershell
# from this folder
python -m http.server 8080
# then open http://localhost:8080
```

No installation, npm, or build step is required. Google Fonts (Fraunces, Source Serif 4, Jost) load from the network; everything else is local.

---

## 2. File structure

```
TWOCHAPTER Website/
├─ index.html            Home — hero, studio intro, services, work, steps, quotes, journal, CTA
├─ portfolio.html        Album index — one cover per session, links to album pages
├─ portfolio-personal-01.html  Personal session album — 6 photos + lightbox
├─ portfolio-sports-01.html    Padel tournament album — 14 photos + lightbox
├─ portfolio-pocari-2026.html  POCARI SWEAT Run Lombok 2026 album — 21 photos + lightbox
├─ portfolio-mbm-2026.html     Maybank Marathon 2026 album — 12 photos + lightbox
├─ portfolio-sip-turtle-release.html  SIP turtle release album — 15 photos + lightbox
├─ info.html             Field notes, featured story, entry archive, location guides
├─ services.html         Six service blocks, add-ons, FAQ (<details>)
├─ about.html            About — story, "Five chapters" tabs, values, journal teaser, CTA
├─ reviews.html          Client reviews in an editorial grid + CTA
├─ contact.html          Contact form (client-side validation only)
├─ journal.html          Redirect to info.html (legacy URL)
├─ inquiry.html          Redirect to contact.html (legacy URL)
├─ DESIGN-BRIEF.md       Approved design brief, tokens, rationale, placeholder policy
├─ README.md             This file
└─ assets/
   ├─ css/style.css      All tokens, components, layout, responsive rules
   ├─ js/main.js         Header state, drawer, reveal, filters, lightbox, quotes, tabs, form validation
   └─ img/
      ├─ favicon.svg    Monogram favicon
      ├─ hero-texture.jpg  Home hero background (brand artwork)
      ├─ wordmark.png   Transparent TWOCHAPTER wordmark, used as the site logo (CSS mask, inherits header color)
      ├─ portfolio/     Portfolio photographs (personal, sports, pocari, mbm, turtle)
      ├─ services/      Service photographs (personal.jpg, couple.jpg, family.jpg, travel.jpg, sports.jpg, events.jpg)
      └─ team/          Team portrait (website-photo-01.jpg)
```

---

## 3. Design system (summary)

| Token | Value | Use |
|---|---|---|
| `--paper` | `#F7F4EE` | Primary background (warm ivory) |
| `--ink` | `#1B1917` | Primary text |
| `--muted` | `#6B6358` | Secondary text, captions (5.39:1) |
| `--brass` | `#8C6239` | Accents, links, numerals (4.88:1) |
| `--brass-soft` | `#A67C52` | Large decorative numerals only |
| `--line` | `#DCD5C9` | Hairline rules |
| `--line-strong` | `#8A8175` | Input borders |
| `--charcoal` | `#161513` | Dark sections, footer |

- **Fraunces** — display headings; **Source Serif 4** — body; **Jost** — labels, nav, metadata.
- 12-column asymmetric grid, zero border radius, no shadows, hairline dividers.
- Motion: 500–700 ms fade/translate reveals, respects `prefers-reduced-motion`.
- All content is readable without JavaScript (reveal styles are scoped to `.js`).

Full rationale is in `DESIGN-BRIEF.md`.

---

## 4. Interactive features

| Feature | Where | Notes |
|---|---|---|
| Sticky header (transparent → paper on scroll) | All pages | `assets/js/main.js` |
| Full-screen mobile drawer | All pages | `.nav-drawer`, focus trap, Esc, body scroll lock |
| Scroll reveals | All pages | IntersectionObserver; disabled under reduced motion |
| Portfolio filters | Home + Portfolio | `aria-pressed`, live region announces count; filtered grid reflows to 3 columns |
| Lightbox | Portfolio | Native `<dialog>`, arrow keys, Esc, caption, count, focus return |
| Testimonial rotator | Home | Manual only (no autoplay), counter updates |
| Five-chapter tabs | About | ARIA tablist, click + Arrow/Home/End, media tone + label update |
| Inquiry form | Inquiry | Inline errors, focus to first invalid field, demo success message, honeypot; `?session=couple` preselects the session type |

---

## 5. Placeholder inventory

Everything in `[BRACKETS]` (rendered in brass) is a placeholder. Tonal gradient blocks stand in for photographs.

### Global
- `[EMAIL]`, `[NUMBER]`, `[WHATSAPP]`, `[@handle]` — contact/social, footer and drawer
- `[Studio location]` — footer
- `©` year is generated automatically

### Home (`index.html`)
- Manifesto: `[STUDIO BIO]`
- Experiences: `From IDR [•••]` ×5
- Steps: `[X]` reply time
- Duo: `[NAME]` ×2, `[ROLE]` ×2, `[XX]` years
- Testimonials: `[Client name]`, `[year]` ×3
- Journal cards: `[Month Year]`, `[Journal title 01–03]`, excerpt placeholders

### About (`about.html`)
- Header: `Est. [YEAR]`
- Story: `[STUDIO DESCRIPTION]`, `[NAME]`, `[ROLE]`, `[HOW YOU MET…]`, `[BACKGROUND…]`
- Chapters: `[HOW TWOCHAPTER STARTED…]`, `[LOCATION]`, `[FAMILY OR HOME DETAIL…]`, `[BACKGROUND — training…]`, `[PLACES YOU TRAVEL…]`, `[A SMALL HUMAN DETAIL…]`
- Journal teasers: `[Journal title 01–03]`, `[Month Year]`
- CTA: `[X]` hours

### Portfolio (`portfolio.html`)
- 12 items with placeholder titles, categories, years, locations, and tonal media.
- All frames must be replaced with licensed photographs + real alt text.

### Services (`services.html`)
- `From IDR [•••]` ×5, bracketed durations/coverage/deliverables
- Add-ons: `IDR [•••]`
- FAQ: `[BOOKING WINDOW]`, `[TRAVEL POLICY]`, `[DELIVERY TIMELINE]`, `[DEPOSIT AND CANCELLATION POLICY]`

### Info (`info.html`)
- Featured: `[Journal title]`, `[Location]`, `[Standfirst]`, `[Month Year]`, `[X min read]`
- Archive: `[Journal title 01–06]`, `[Month Year]`, excerpts
- Field notes: `[Guide pending]` ×6, `[FREQUENCY]`

### Contact (`contact.html`)
- `[EMAIL]`, `[NUMBER]`, `[LOCATION]`, `[X]` response time
- `[HOLD POLICY]`

---

## 6. How to replace placeholders

1. **Text** — search for `[` in the HTML files. Replace the bracketed string (keep or remove the `.placeholder` span; it only colours the text brass).
2. **Photographs** — each slot is a `<div class="media …">` with `role="img"` and `aria-label`. Replace with:
   ```html
   <div class="media ratio-4x5" role="img" aria-label="Description of the actual photo">
     <img src="assets/img/uluwatu-couple.jpg" alt="" width="1200" height="1500" loading="lazy">
   </div>
   ```
   Keep the ratio class (`ratio-4x5`, `ratio-3x2`, `ratio-1x1`, `ratio-16x9`, `ratio-tall`) so the grid stays aligned. The `img` gets `alt=""` because the wrapper already carries the accessible label; or move the description to `alt` and drop `role="img"`.
3. **Portfolio items** — also update `data-title`, `data-meta`, `data-cat` (`couple|family|wedding|proposal`) and `data-tone` on each `.work-item`; captions and lightbox read from these attributes.
4. **Prices** — replace `IDR [•••]` with real amounts and keep the `From` prefix only if accurate.
5. **Form endpoint** — the form intentionally does not send anything. In `assets/js/main.js`, inside the submit handler, replace the demo message with a `fetch()` to your endpoint (Formspree, Basin, Netlify Forms, or your own API). Remove the demo note in `contact.html` once live.
6. **Social/contact links** — replace `href="#" aria-disabled="true"` with real URLs and remove `aria-disabled`; the JS only blocks clicks while that attribute is present.

---

## 7. Accessibility & performance checklist

- Colour pairs meet WCAG AA (see design brief).
- Visible focus ring (`2px` brass, `4px` offset) on all interactive elements.
- Drawer and lightbox: focus management, Esc to close, scroll lock, focus return.
- Skip link, landmarks, labelled sections, `aria-live` for filters and form status.
- Images are responsive (`max-width: 100%`) and slots use `aspect-ratio` to prevent layout shift.
- JS is ~6 KB uncompressed and fully optional for reading content.
- `prefers-reduced-motion` disables reveals and the scroll cue animation.

---

## 8. Known limitations / before launch

- All imagery is a tonal placeholder; no real photographs are included.
- Prices, package terms, bio, testimonials, press names, contact details are placeholders.
- Inquiry form has no backend; it validates client-side and shows a demo success message.
- Social links are intentionally inert.
- `favicon.svg` is a simple monogram; replace with the final brand mark if one exists.
- No CMS: content edits happen in HTML. If the studio needs self-serve editing later, migrate the same markup to Astro + a headless CMS without changing the design system.

---

## 9. Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). Uses `aspect-ratio`, `clamp()`, `:focus-visible`, native `<dialog>`, and `backdrop-filter`; all have graceful fallbacks in current versions. Internet Explorer is not supported.
