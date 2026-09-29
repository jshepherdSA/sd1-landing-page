# Backend & Compliance Checklist — SD1 Central Boone County Conveyance

Status key: [x] done · [~] pending (builds after homepage approval) · [ ] manual

## Auto-built by the skill (verify these rendered)

- [~] **Privacy Policy** — page at `/privacy`, linked in footer (link present; page pending)
- [~] **Accessibility Statement** — page at `/accessibility`, linked in footer (link present; page pending)
- [~] **Cookie Policy** — page at `/cookies`, linked in footer (link present; page pending)
- [~] **Cookie consent banner** — functional: blocks GA/GTM until consent,
      suppresses on decline, remembers choice
- [~] **llms.txt** — at site root, lists key pages + policies
- [~] **robots.txt** — allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot,
      Google-Extended) plus normal search crawlers
- [~] **sitemap.xml** — generated, referenced in robots.txt

## Manual setup (human does these in Google — skill cannot)

- [ ] **Google Analytics** — paste Measurement ID into the consent-gated config slot
- [ ] **Google Tag Manager** — paste GTM container ID (consent-gated)
- [ ] **Google Search Console** — verify property, submit sitemap.xml

## Notes for handoff
- sd1.org already runs GA (`G-RQPP962PDY`, `G-79EQP210CP`) and has its own
  `/privacy` and `/accessibility` pages. If this page is hosted on sd1.org,
  the footer policy links could point to those existing pages instead of new
  template pages — decision needed.
- Consent gating will be wired so GA/GTM only fire after consent. Do not add
  GA/GTM via a raw <script> tag that bypasses the consent gate.
