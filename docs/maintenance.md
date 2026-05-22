# Maintenance

Keep maintenance changes small, intentional, and easy to verify.

## Dependency Updates

- Prefer small dependency batches over broad upgrades.
- Run `npm run check` after updates.
- Run `npm run test:e2e` when browser behaviour could change.
- Run `npm run lint:unused` after removing or replacing packages.
- Run `npm run analyze` when adding client-facing packages.

## Next.js Updates

This project uses Next.js 16. Before changing framework-sensitive code, read the relevant local docs in
`node_modules/next/dist/docs/`.

## Cleanup Rules

- Remove generated artifacts from source control.
- Keep `.gitignore` aligned with tool output folders.
- Prefer deleting unused files over documenting dead paths.

## Documentation Maintenance

Update docs in the same change when behaviour, scripts, conventions, or project structure change. Keep README
concise and move details to focused docs under `docs/`.
