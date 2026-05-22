# Institutional Website Template

Next.js 16 App Router template for institutional landing sites. Built with React 19, TypeScript, Tailwind CSS v4,
and Framer Motion.

> **Sections and routes are a starter menu, not a required scaffold.** Keep only what the design calls for and
> delete the rest. The conventions — token system, primitives, motion patterns, typed content layer — are
> prescriptive. The pages, UI and sections are not. See [Customization](docs/customization.md).

## Quick Start

```bash
nvm use
npm install
npm run dev
```

## Customize For a New Project

1. **Tokens** — edit `src/app/globals.css` (the `:root` block). Change accent colour, surface shades, and spacing.
2. **Logo** — replace `public/logo-mark.svg` and `public/logo-lockup.svg` with real assets.
3. **Content** — fill `src/lib/constants.ts`. All site copy, navigation, and data flow through this one file.
4. **Sections / routes** — keep what the design needs, delete the rest.

Full details in [docs/customization.md](docs/customization.md).

## Common Scripts

| Script                | Purpose                                                     |
| --------------------- | ----------------------------------------------------------- |
| `npm run dev`         | Start the local Next.js development server.                 |
| `npm run format`      | Format the workspace with Prettier.                         |
| `npm run docs:check`  | Validate Markdown documentation.                            |
| `npm run lint`        | Run ESLint.                                                 |
| `npm run build`       | Run a production build.                                     |
| `npm run check`       | Run format, docs, lint, and build checks.                   |
| `npm run test:e2e`    | Run the Playwright homepage smoke test.                     |
| `npm run lint:unused` | Scan for unused files, exports, and dependencies with Knip. |
| `npm run analyze`     | Build with bundle analyzer output enabled.                  |

## Documentation

- [Customization guide](docs/customization.md)
- [Development workflow](docs/development.md)
- [Architecture](docs/architecture.md)
- [Styling and design tokens](docs/styling.md)
- [Testing and quality checks](docs/testing.md)
- [Maintenance](docs/maintenance.md)
- [Contributing](CONTRIBUTING.md)
