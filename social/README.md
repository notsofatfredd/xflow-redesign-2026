# Xflow social templates

Concept-matched social graphic templates for xflow.co.za, built to match the same 3 visual
concepts used in the `concept-switcher-treatment` site redesign branch:

- **flow** — the current/existing Xflow brand identity, carried forward as-is (teal + sand on
  paper/ink tones).
- **blueprint** — light, technical-drawing concept: faint engineering grid, navy linework,
  monospace used only for spec/data callouts, safety-orange accent chip.
- **ductile** — dark, industrial concept evoking cast/ductile iron pipe: charcoal background,
  copper accent, concentric-ring motif, heavier uppercase type.

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
in each file (e.g. "A new look for Xflow", "Engineered for what's next", "Built to move water
at scale") is an example, not a fixed final post.

## Regenerating exports

```bash
cd social
npm install playwright   # first time only, from repo root
npx playwright install chromium   # first time only
node render.js
```

Output PNGs land in `social/exports/`, named `{concept}-{format}.png`.
