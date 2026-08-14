# Xflow social templates

Concept-matched social graphic templates for xflow.co.za, triangulated per the Cold-Call
Concept Demo Module spec (Section 7.6) — each concept is modeled on a real reference company,
not an invented aesthetic. Companion to the `triangulated-concepts` site redesign branch,
which uses the same three references.

- **onyx** — direct-rival concept. Ref: **Umdla Civils & Plumbing** (umdla.co.za), a real
  Cape Town-region contractor doing near-identical work (civils, plumbing, bulk water meter
  installation). Emotion: loss aversion / competitive urgency. Dark, sharp, present-tense —
  chevron/momentum motif, icy-blue accent on near-black.
- **delta** — municipality/government-trust concept. Ref: **City of Cape Town Water and
  Sanitation** (capetown.gov.za) — xflow's actual municipal jurisdiction. Emotion: trust,
  institutional strength. Borrows the *trust cues* (formal hierarchy, restrained institutional
  color, letterhead-style rule) — not the site's actual dated UX.
- **cove** — sector-leader concept. Ref: **CSV Construction** (csvconstruction.com), a real
  Western Cape top-5 civil engineering contractor one tier above xflow. Emotion: ambition,
  aspiration, the future. Elevated, generous whitespace, horizon-gradient motif.

None of the three impersonate their reference company — no borrowed logos, names used as
Xflow's own, or fabricated claims about them. All copy uses only facts already documented on
xflow's own site (service categories, "Quality · Trust · Innovation").

## Structure

```
social/
├── templates/     6 self-contained HTML files (3 concepts x square/banner)
├── exports/       rendered PNGs (regenerate with render.js, not hand-edited)
├── render.js      Playwright script that screenshots each template at its exact pixel size
└── README.md      this file
```

Formats:
- `*-square.html` — 1080x1080 (Instagram / Facebook square post)
- `*-banner.html` — 1200x630 (LinkedIn / link-preview / OG banner)

## Editable slots

Each template has two placeholder text blocks marked with `REPLACE:` comments in the CSS/markup:
a `.headline` element and a `.subhead` element. Swap that text per post — the placeholder copy
in each file (e.g. "Built to be first on site", "Infrastructure built to a municipal standard",
"Engineered for what Cape Town builds next") is an example matching that concept's emotional
register, not a fixed final post.

## Regenerating exports

```bash
cd social
npm install playwright   # first time only, from repo root
npx playwright install chromium   # first time only
node render.js
```

Output PNGs land in `social/exports/`, named `{concept}-{format}.png`.
