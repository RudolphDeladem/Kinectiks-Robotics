# Kinectiks Robotics website

Astro static site (Node 22.12+). See `README.md` for layout of `src/`.

- `npm run dev` serves at **http://localhost:4321** (not 3000).
- `npm run build` / `npm run preview` for the production build.
- `npm run test:e2e` runs the Playwright browser checks in `tests/` at desktop, tablet and mobile widths.
- Do not change `.github/workflows/` unless asked.

## Brand rules (apply to every design change)

- **Logo:** use the exact official logo in `src/assets/brand/kinectiks-logo.svg` via `src/components/Logo.astro`. Never redraw, recolour, crop or approximate it.
- **Colours:** orange, black and white. Cream is an optional neutral. No other brand hues.
- **Aesthetic:** premium, cinematic agricultural robotics.
- **Imagery:** high-quality African agricultural photography (see `src/assets/images/`). No generic stock that reads as non-African.
- **Craft:** strong typography, thoughtful spacing, responsive layouts, restrained animation that respects `prefers-reduced-motion`.
- **Navigation:** primary nav is exactly Home, About, Products, Team, News (`src/data/site.ts`). Contact Us is a separate header button, not a nav tab.
- **Content:** never invent product names, company statistics, achievements, team members, partners, testimonials or other unsupported claims. Use only content the team supplied; if something is missing, leave a clearly marked placeholder and ask.
- **Scope:** style and review **one page at a time**. Never redesign several pages in one pass.

## UI skills

Project skills live in `.claude/skills/` (from [dawitlabs/ui-skills](https://github.com/dawitlabs/ui-skills) and [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill), both MIT; see `.claude/skills/SOURCES.md`). The official `frontend-design` plugin and the `impeccable` plugin (pbakaus/impeccable) are enabled in `.claude/settings.json`. Impeccable's hooks run its design checker automatically after edits and at the end of each turn.

Setup facts these skills need (replaces running `/ui-init`):

- Dev server: `http://localhost:4321`. Wherever a skill says `localhost:3000`, use 4321.
- Framework: Astro. Pages are `src/pages/*.astro`; there is no `app/page.tsx`.
- Token home: `src/styles/global.css`.
- Playwright: installed (`@playwright/test`, `playwright.config.ts`). axe-core is not installed yet; `/a11y` adds it as a dev dependency when first used.
- Visual direction: no `DESIGN-BRIEF.md` yet. Create it with `/design-grill`, and keep it consistent with the brand rules above (the brand rules win on any conflict).
- Skills that say "every screen" or "the entire app" (`/uiux`, `/copy`, `/a11y`, `/animate`, `/tokens`): limit them to the one page under review.
- Ignore skill advice to use placeholder or stock photos (picsum, Unsplash) or generated images. Use the photography in `src/assets/images/`, or ask for more.
- Skill suggestions for specific fonts, palettes or component libraries are defaults only. The brand rules and `DESIGN-BRIEF.md` override them.
- Screenshots and scratch scripts go outside the repo (or in `test-results/`, which is ignored); do not commit them.

| Skill | Use for |
|-------|---------|
| `/design-grill` | Visual direction interview, writes `DESIGN-BRIEF.md` |
| `frontend-design` (plugin, auto) | Aesthetic direction, typography, distinctive layout |
| `/uiux` | Redesign and polish one page, verified visually |
| `/landing` | Home page story, section order, CTA hierarchy |
| `/uicolor` | Colour balance within the brand palette |
| `/tokens` | Colour, type and spacing tokens in `global.css` |
| `/animate` | Micro-interactions and restrained motion |
| `/copy` | Headlines, CTAs and UI strings (no invented claims) |
| `/a11y` | WCAG 2.1 AA audit and fixes |
| `/design-taste-frontend` | Anti-template design direction for landing pages and redesigns |
| `/redesign-existing-projects` | Audit and upgrade an existing page without breaking it |
| `/high-end-visual-design` | Premium agency-level finish: spacing, depth, motion |
| `/impeccable` (plugin) | 24 subcommands, e.g. `/impeccable critique`, `/impeccable audit`, `/impeccable polish` |
| `ui-design-principles` | Background reference, loaded automatically |
