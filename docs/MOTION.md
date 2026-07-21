# VIM Motion Design System

## Easing

All transitions use ease-in-out: `cubic-bezier(0.4, 0, 0.2, 1)`
CSS variable: `var(--ease-vim)`
Tailwind utility: `ease-vim`

Rationale: Balanced, fluid motion — starts and ends gently, feels
premium and intentional. Applied consistently across all interactive
elements site-wide.

## Durations

- Fast (hover, small state changes): `150ms` — `var(--duration-fast)` / `duration-fast`
- Base (panels, drawers, filters): `250ms` — `var(--duration-base)` / `duration-base`
- Slow (page-level, lightbox): `350ms` — `var(--duration-slow)` / `duration-slow`

Both the CSS custom properties (`app/globals.css` `:root`) and the
Tailwind utilities (`tailwind.config.ts`) point at the same values —
the CSS variables are the single source of truth. Raw inline styles
(e.g. JS-driven transitions) should reference `var(--ease-vim)` and
`var(--duration-*)` directly rather than hardcoding the curve/timing.

## Never use

- `linear` — robotic
- `ease-in` only — abrupt stop
- `ease-out` only — abrupt start
- Any duration above 400ms — feels sluggish on mobile

## Documented exceptions

- `.reveal` (`app/globals.css`) — the page-load entrance fade-up uses
  `cubic-bezier(0.22, 1, 0.36, 1)` deliberately: it's a one-shot reveal
  on load, not an interactive transition, and wants a more dramatic
  decelerate-only settle rather than the balanced in-out curve.
- The mobile nav drawer's open (`250ms`) and close (`200ms`) keep
  different *durations* on purpose (close reads snappier) — both now
  share `var(--ease-vim)` for the curve itself.
