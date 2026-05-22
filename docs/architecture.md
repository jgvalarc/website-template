# Architecture

The app uses Next.js App Router with `src/app` as the route entrypoint and reusable UI split under `src/components`.

## Application Shape

- `src/app/layout.tsx` — global metadata, analytics, and the `Nav` / `Footer` shell.
- `src/app/page.tsx` — landing page; assembles section components in order.
- `src/components/sections` — page sections (opt-in; delete what the design doesn't need).
- `src/components/forms` — multi-field form components for the contact route.
- `src/components/layout` — cross-page layout pieces: `Nav` and `Footer`.
- `src/components/ui` — reusable primitives: `Button`, `Container`, `Logo`, animation wrappers, etc.
- `src/lib/constants.ts` — single source of truth for all site copy, navigation data, and content arrays.
- `src/hooks` — small client-side hooks (`useScrolled`, `useCounter`).

## Shipped Routes

| Route       | File                        | Purpose                    |
| ----------- | --------------------------- | -------------------------- |
| `/`         | `src/app/page.tsx`          | Landing page               |
| `/about`    | `src/app/about/page.tsx`    | Process / method deep-dive |
| `/services` | `src/app/services/page.tsx` | Full service catalogue     |
| `/contact`  | `src/app/contact/page.tsx`  | Contact form               |

These routes are **examples**. Add, rename, or delete them based on what the design requires.

## Server And Client Components

Prefer server components for landing sections. Add `'use client'` only when a component directly needs hooks,
browser APIs, event handlers, or Framer Motion primitives. Use small client islands for interactive or animated
behaviour instead of promoting entire static sections to client components.

## Content Layer

All site copy lives in `src/lib/constants.ts`. Components import only the constants they need. Adding a new
content type means adding a TypeScript type and a typed export — the type is the contract that keeps content
structured across the project.

## Next.js 16 Rule

Before changing App Router, layout, metadata, font, or CSS behaviour, read the matching local guide in
`node_modules/next/dist/docs/`. This repository uses Next.js 16, and older conventions can be wrong.
