# Development Workflow

## Setup

```bash
nvm use
npm install
npm run dev
```

The Node version is pinned in `.nvmrc`. Playwright starts or reuses a server on port `3000`.

## Daily Commands

```bash
npm run format
npm run docs:check
npm run lint
npm run build
npm run check
```

Run `npm run check` before opening a PR or handing off work. It runs formatting, documentation linting, ESLint,
and a production build.

## E2E And Analysis

```bash
npm run test:e2e
npm run lint:unused
npm run analyze
```

Use Playwright for browser smoke coverage, Knip for unused-code drift, and bundle analysis when dependency or
animation cost needs inspection.

## Pre-Commit

Husky and lint-staged run on commit:

- Staged JS, TS, JSX, and TSX files run ESLint with fixes and Prettier.
- Staged CSS, Markdown, JSON, config, and YAML files run Prettier.

If the hook modifies files, review the result before retrying the commit.
