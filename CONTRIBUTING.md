# Contributing

Keep changes small, documented, and easy to verify.

## Branch And Commit Hygiene

- Use Conventional Commits such as `feat:`, `fix:`, `refactor:`, `style:`, and `chore:`.
- Keep commits focused around one complete behaviour or cleanup.
- Do not commit generated output, local caches, or test artifacts.
- Do not revert unrelated work you did not make.

## Before Editing

- Read [Architecture](docs/architecture.md) before changing app structure.
- Read [Styling and design tokens](docs/styling.md) before changing visual primitives or global CSS.
- For Next.js 16 framework behaviour, read the relevant local guide in `node_modules/next/dist/docs/`.

## Verification

Run the checks that match the change:

```bash
npm run format:check
npm run docs:check
npm run lint
npm run build
npm run check
```

Use `npm run test:e2e` for browser-facing changes and `npm run lint:unused` after cleanup or dependency changes.

## Documentation

Update documentation in the same change when scripts, project structure, conventions, or workflows change. Keep
human-facing docs in English under `docs/`.
