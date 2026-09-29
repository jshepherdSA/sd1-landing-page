# Design system — SD1 Central Boone County Conveyance

Borrowed directly from sd1.org (fonts, colors, header, panels, icons, texture,
cards, buttons, footer) and from the "Central Boone County Sewer Project" report
PDF (callouts, comparison table, cover photo). Goal: read as an sd1.org page,
not a generic template.

## Brand
- **Client:** Sanitation District No. 1 of Northern Kentucky (SD1)
- **Voice / feel:** Public utility — plain-spoken, factual, community benefit first.

## Color (tokens in `app/globals.css`)
| Token | Hex | Source / use |
|---|---|---|
| `sd1-navy` | `#08294b` | sd1.org panels, sidebar, footer |
| `sd1-blue` | `#115091` | sd1.org headlines, buttons, table header |
| `sd1-royal` | `#254d98` | Button hover |
| `sd1-leaf` | `#3aaf4a` | sd1.org icon/underline-bar green. Decorative + on navy only |
| `sd1-green` | `#2b8237` | Text-safe green (breadcrumb, meta lines) |
| `sd1-mist` | `#f5f8ff` | sd1.org page bg, header bar, card fill |
| `sd1-report` | `#e6eef8` | Report callout / table-label fill |
| `sd1-ink` | `#313131` | Body text |
| `sd1-sky` | `#0098f7` | Focus rings only |

## Typography (as loaded on sd1.org)
- **Poppins** for everything (400 body, 500/600 UI + headlines, 700/800 rare).
- **Oswald 700 uppercase** for display headings ("NEWS & HIGHLIGHTS" style):
  H1, band headings, "By the Numbers", stat figures.
- Content headlines: Poppins 600, `sd1-blue`, ~28px, with a 50×4px green bar under.

## Signature components
- **Header:** `sd1-mist` bar 92px, logo image at native 120px height hanging
  below the bar (seal in white circle), Poppins 600 navy nav, soft drop shadow.
- **Hero:** header + full-bleed photo + overlapping navy rounded (10px) title
  panel = exactly 100svh; photo flexes to fill, `object-cover`.
- **Ring links:** white 5px ring → navy band → pale disc → green line icon;
  label white Poppins 600; 50×4px green bar under. Hover fills disc green.
- **Section layout:** full-width bands, centered `max-w-7xl` containers.
  Overview = copy left / uniform 2×2 stat grid right. Content pairs as
  two-up cards. No document-style sidebars or left-hugging text columns.
- **Stat tile:** identical navy tiles (fixed min-height), Oswald figure,
  50×4 green bar, caption in white/85.
- **Info card:** white, green 4px top rule, ring icon overlapping the top edge,
  blue Poppins title + green bar.
- **Report callout:** `sd1-report` box, small bold uppercase blue label
  ("Executive Summary", "Bottom Line"), no border.
- **Comparison table:** solid `sd1-blue` header, bold blue row labels on
  `sd1-report`, selected B2 column outlined in 4px green.
- **Textured band:** `bg-sd1-texture` = navy + sd1.org's interlocking-circle SVG.
- **Card:** sd1.org news card — `sd1-mist`, 10px radius, heavy soft shadow,
  green 4px rule between image and body, blue Poppins title.
- **Button:** sd1.org "View All News" — `sd1-blue` block, 6px radius, green
  boxed-chevron icon. Secondary link: text + short green bar that grows on hover.
- **FAQ accordion:** news-card styling; blue square chevron toggle; green 4px
  rule opens above the answer.
- **Footer:** textured navy, reverse seal logo, column heads with green bar,
  pale copyright strip.
