<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the
relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Institutional Website Template — Agent Handoff

First-read instruction file for agentic workers. Keep rules operational and focused on preventing bad implementation
choices.

## Project Context

This is a reusable institutional-site template. It ships with example sections, routes, and placeholder content.
**Sections and routes are a starter menu, not a required scaffold.** When working on a derived project, keep only
what the design calls for and delete the rest. The conventions below are what's prescriptive.

## Canonical Docs

- [README](README.md) — project index and quick start
- [Customization guide](docs/customization.md) — what to keep, change, or delete per project
- [Contributing](CONTRIBUTING.md)
- [Development workflow](docs/development.md)
- [Architecture](docs/architecture.md)
- [Styling and design tokens](docs/styling.md)
- [Testing and quality checks](docs/testing.md)
- [Maintenance](docs/maintenance.md)

## Required Rules

- This repository uses **Next.js 16**. Before changing App Router, layout, metadata, font, or CSS behaviour, read
  the matching guide in `node_modules/next/dist/docs/`.
- Keep landing sections as server components by default. Add `'use client'` only when a component needs hooks,
  browser APIs, event handlers, or Framer Motion primitives.
- `src/app/globals.css` is the only executable global stylesheet. All design tokens live in its `:root` block.
- Prefer semantic Tailwind token utilities (`bg-surface`, `text-accent`, `text-copy`, `border-line`) over raw
  values or inline styles.
- Run `npm run check` before handoff. Add `npm run test:e2e`, `npm run lint:unused`, or `npm run analyze` when the
  change touches browser behaviour, cleanup, dependencies, or performance.
- Follow Conventional Commits and avoid committing generated artifacts.

## Template Usage Rules

- **Example sections** (`Hero`, `MarqueeBar`, `About`, `Services`, `Process`, `Highlights`, `Team`,
  `Testimonials`, `Pricing`, `FAQ`, `Contact`, `CTAPoster`) and **example routes** (`/about`, `/services`,
  `/contact`) are shipped as a starting menu. Delete any that the design doesn't call for.
- **Typed content layer** (`src/lib/constants.ts`) is prescriptive in structure. All site copy, navigation, and
  data should flow through it. The exported names and types are the contract; replace placeholder values with real
  content.
- **Token system** (`src/app/globals.css`) is prescriptive. Edit the `:root` block to retheme; do not scatter raw
  colour values across components.
