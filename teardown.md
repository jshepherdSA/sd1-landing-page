# Teardown — style direction

## References
| Source | Intent | How it's used |
|---|---|---|
| https://www.sd1.org | `[same-org]` | Brand cues only: logo, palette, fonts, voice. Do **not** copy page architecture. |
| Boone County Conveyance Report (PDF, Sept 2026) | `[same-org]` | Visual language for this campaign: cover wave, bold uppercase title lockup, callout boxes, blue-header tables. |

## sd1.org — brand cues extracted
- **Stack:** CivicPlus-style CMS (jQuery, Alpine.js). Not relevant to the build.
- **Fonts (Google Fonts):** Poppins (dominant, ~130 declarations), PT Sans and
  Open Sans secondary. → Poppins headings, Open Sans body.
- **Colors by frequency:** `#f5f8ff` (light surface), `#08294b` (navy),
  `#0098f7` (bright blue), `#313131` (text), `#254d98`, `#115091`, `#2f6d89`,
  `#2b8237` (green).
- **Logo:** circular "S" seal (navy/blue/green) + "SANITATION DISTRICT NO. 1 /
  NORTHERN KENTUCKY" wordmark; dark and reverse (white) versions both used.
- **Footer data:** 1045 Eaton Drive, Fort Wright, KY 41017 · 859-578-7450 ·
  info@sd1.org · Facebook, X/Twitter, Instagram, LinkedIn.

## Report PDF — visual patterns
- **Cover:** full-bleed photo (Bullittsville Pump Station) cut by a layered
  lime-over-navy wave; below it a stacked title — light "CENTRAL BOONE COUNTY",
  heavy condensed "SEWER PROJECT", lime rule, then subtitle caps.
- **Interior:** clean white pages, navy-blue numbered H2s, generous margins,
  single reading column.
- **Callouts:** pale blue boxes with small bold uppercase labels ("EXECUTIVE
  SUMMARY", "BOTTOM LINE").
- **Tables:** solid blue header row, white header text, pale-blue zebra body,
  bold blue row labels in first column.

## sd1.org — layout patterns reused (revision 2)
- Pale header, oversized logo seal hanging below the bar.
- Full-bleed hero photo with a navy rounded panel overlapping its bottom edge,
  holding ring-style circular icon links with green underline bars.
- Inner-page template: navy left sidebar + content panel, green breadcrumb.
- Section bands: navy with interlocking-circle texture, Oswald uppercase
  heading + one-line Poppins subtitle, centered.
- News cards (pale, shadowed, green rule), "View All News" button, footer
  with green-barred column heads.

## Page structure
1. Header (sd1.org style)
2. Hero photo + overlapping navy panel: title lockup + 4 ring links
3. Overview (copy + 2×2 stats) → Executive Summary band → two-up cards
   (overflows, gravity) → textured Options Summary band → two-up cards
   (maintenance, coverage) → Bottom Line split band
4. Textured "Read the Full Report" band with news-card report link
5. FAQ accordion (11 questions, doc order)
6. sd1.org-style footer
