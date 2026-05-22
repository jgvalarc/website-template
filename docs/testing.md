# Testing And Quality Checks

## Required Before Handoff

```bash
npm run check
```

`npm run check` runs format, docs lint, ESLint, and a production build. It must stay green.

## Browser Coverage

```bash
npm run test:e2e
```

The Playwright suite is a homepage smoke test that verifies core landmarks render. Add more coverage when a
change affects navigation, critical CTA visibility, responsive layout, or production-only rendering.

## Dead Code And Dependencies

```bash
npm run lint:unused
```

Run Knip after dependency changes, file moves, large refactors, or cleanup passes.

## Bundle Analysis

```bash
npm run analyze
```

Use bundle analysis when adding client dependencies, expanding animation behaviour, or investigating performance
cost.

## Audit Expectations

Run `npm audit --audit-level=moderate` during dependency maintenance. If the only finding is a known transitive
advisory with no non-breaking upgrade path, document it in the handoff instead of forcing a breaking downgrade.
