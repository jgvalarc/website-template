# Styling And Design Tokens

Styling is Tailwind-first, with global token ownership in `src/app/globals.css`.

## Global CSS Ownership

`src/app/globals.css` is the only executable global stylesheet. Keep these concerns there:

- Tailwind v4 `@import` and `@theme inline` mappings
- Design tokens in `:root`
- Base styles in `@layer base`
- Custom utilities and surface classes in `@layer utilities`
- Animation keyframes

Do not create a second global stylesheet at the project root.

## Rethemeing — One Block to Edit

All brand colours, font stacks, and spacing live in the `:root` block at the top of `globals.css`. To retheme:

1. Edit the surface tokens (`--surface-base`, `--surface-inverse`, `--surface-deep`, etc.).
2. Edit the accent tokens (`--accent`, `--accent-strong`, `--accent-soft`, `--accent-light`).
3. Edit the font stacks (`--font-display`, `--font-body`, `--font-mono`).
4. The `@theme inline` block maps these into Tailwind utilities — no changes needed there.

See [docs/customization.md](customization.md) for a step-by-step guide.

## Token Usage

Prefer semantic utilities over raw values:

- Surfaces: `bg-surface`, `bg-surface-raised`, `bg-surface-deep`, `bg-surface-inverse`
- Accent: `text-accent`, `bg-accent`, `hover:bg-accent-light`, `text-accent-strong`
- Text: `text-copy`, `text-muted`, `text-dim`
- Borders: `border-line`, `border-line-accent`
- Spacing: `py-section`, `py-section-tight`
- Typography: `font-display`, `font-body`, `font-mono`

If a colour, spacing value, or repeated visual pattern appears more than once, promote it to a token, shared
class, or component prop.

## Mobile-First Responsivity

Author every layout mobile-first: base styles target the smallest screen, and larger screens
layer on enhancements.

- In components, write the base (unprefixed) utility for mobile, then widen with Tailwind's
  min-width prefixes (`sm:`, `md:`, `lg:`, `xl:`). For example: `grid-cols-1 md:grid-cols-2`.
- Do **not** use `max-*` variants or `@media (max-width: …)` to walk a desktop layout back down.
  In `globals.css`, scale **up** with `@media (min-width: …)`.
- Section padding is the canonical example. The `--section-py` token is `--space-8` on mobile and
  scales to `--space-9` at `≥760px`. Both the `.section-py` class and the `py-section` Tailwind
  utility resolve to it, so every section breathes less on small screens automatically.
- Prefer fluid type and spacing (`clamp(...)`) over breakpoint-specific font sizes where practical.
- Validate new layouts at a 360px width first, then widen.

## Surface Context Classes

Sections switch between two surfaces using utility classes:

- `.surface-default` — dark surface (`--surface-base` background, light text)
- `.surface-inverse` — light surface (`--surface-inverse` background, dark text)
- `.surface-deep` — deepest dark (`--surface-deep` background, light text)

Child utilities (`.lede`, `.hairline`, `.index`, `.btn-ghost`) adapt automatically via CSS cascade when inside a
`.surface-inverse` parent.

## Inline Style Exceptions

Avoid raw hex values, raw `rgba(...)`, and static `style={{ ... }}` in components. Allowed exceptions:

- Complex CSS backgrounds or gradients that cannot be expressed as a utility
- SVG geometry or path data
- Runtime values that cannot reasonably be expressed as a token
