# Independent Triangulated Concepts (Onyx / Delta / Cove)

This branch replaces the shared switcher/concept approach (`triangulated-concepts`
branch, `styles.css` + `switcher.js` + `xflow-*.html`) with **three fully
independent site builds**, each in its own top-level folder with its own
HTML/CSS/JS and no shared code between them.

## Why

The switcher approach ("1 base + variables") kept reading as "one site, 3 color
themes" even after structural patches (DOM reordering, mobile nav fixes). The
fix was true build isolation: three separate agent instances, each given only
a neutral facts document (real company facts, contact details, page list — no
design direction) plus its own real triangulation target to research
independently, with no visibility into the other two concepts or the prior
repo/PR history.

## Folders

- **`onyx/`** — rival/urgency lens, researched against **Umdla Civils &
  Plumbing** (direct regional competitor). Dark theme, hard-claim hero,
  evidence strip, flat numbered specialism list.
- **`delta/`** — municipal/institutional lens, researched against the
  **City of Cape Town Water & Sanitation** department. Light paper theme,
  ink-navy serif headings, breadcrumb trails, real spec/client tables.
- **`cove/`** — aspirational/sector-leader lens, researched against
  **CSV Construction**. Full-bleed photo hero, navy stat-strip band,
  divisional card-grid structure.

Same underlying company facts and real photos across all three — but
genuinely different information architecture, not a palette swap. E.g. the
same six water-metering technologies render as stacked numbered rows (Onyx),
a list + comparison table (Delta), and a 2-column card grid (Cove).

## Status

Draft — for visual review before deciding which direction(s) to carry
forward into the client pitch.
