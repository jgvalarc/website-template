# Customization Guide

Step-by-step guide for turning this template into a specific project. Work top to bottom.

## 1. Tokens — one block, one file

Open `src/app/globals.css`. Edit the `:root` block. Every visual decision flows from here.

### Accent colour

```css
--accent: #c7f23b; /* replace with your brand colour */
--accent-strong: #9dc42a; /* darker variant, used for hover/emphasis */
--accent-soft: rgba(199, 242, 59, 0.12); /* low-opacity tint */
--accent-light: #d6ff4a; /* lighter variant, used for button hover */
```

### Surfaces

```css
--surface-base: #1a1a1a; /* primary dark background */
--surface-raised: #242424; /* elevated cards on dark */
--surface-deep: #0d0d0d; /* deepest dark — footer, CTA */
--surface-inverse: #f2f2f0; /* primary light background */
--surface-inverse-raised: #e8e8e5; /* elevated cards on light */
```

### Fonts

The template ships with system stacks. To use custom fonts, load them in `src/app/layout.tsx` via
`next/font/google` (or self-host), add CSS variables to the `<html>` element, then reference them in `:root`:

```css
--font-display: var(--font-your-display-font), ui-sans-serif, sans-serif;
--font-body: var(--font-your-body-font), ui-sans-serif, sans-serif;
--font-mono: var(--font-your-mono-font), ui-monospace, monospace;
```

## 2. Logo

Replace the placeholder SVGs in `/public/`:

- `logo-mark.svg` — compact mark (used in compact contexts; currently 40×40)
- `logo-lockup.svg` — full lockup (used in nav and footer; currently 120×28)

The `Logo` component in `src/components/ui/Logo.tsx` reads these paths. Adjust `width` and `height` props if your
assets have different intrinsic dimensions.

## 3. Content — `src/lib/constants.ts`

This is the single source of truth for all copy, navigation, and structured data.

### Site metadata

```ts
SITE_NAME // displayed in titles, footer, nav
SITE_TAGLINE // subtitle / short descriptor
SITE_DESCRIPTION // used in <meta description> and hero lede
SITE_URL // set via NEXT_PUBLIC_SITE_URL env var
```

### Organisation info

```ts
ORG_INFO.name // legal/brand name
ORG_INFO.city // city (used in Hero and Contact section)
ORG_INFO.state // state abbreviation
ORG_INFO.district // neighbourhood (used in Hero badge)
ORG_INFO.address // street address
ORG_INFO.whatsappHref // WhatsApp deep-link URL
ORG_INFO.email // contact email
ORG_INFO.instagramHref
ORG_INFO.registration // professional registration or legal identifier
ORG_INFO.assessment // CTA block: name, duration, price, description
```

### Content arrays

Fill each exported array with real data. Type definitions act as the contract — the shape must match.

| Export            | Used by                 | Notes                                        |
| ----------------- | ----------------------- | -------------------------------------------- |
| `VALUE_PROPS`     | `About` section         | 4 bullet-point value propositions            |
| `STATS`           | `About` stats row       | 4 animated counters                          |
| `MARQUEE_ITEMS`   | `MarqueeBar`            | Repeating ticker labels                      |
| `SERVICES`        | `Services`, `/services` | Min 6 with `featured: true` for landing grid |
| `PROCESS_STEPS`   | `Process`, `/about`     | 4 phases (can adjust)                        |
| `PRINCIPLES`      | `/about`                | 4 non-negotiable principles                  |
| `HIGHLIGHTS`      | `Highlights` section    | 4 resources or equipment items               |
| `TEAM_MEMBERS`    | `Team` section          | Any count                                    |
| `TESTIMONIALS`    | `Testimonials` section  | 3 recommended                                |
| `PRICING_PLANS`   | `Pricing` section       | 3 tiers; mark one `featured: true`           |
| `FAQ_ITEMS`       | `FAQ` section           | 6 recommended                                |
| `NAV_LINKS`       | `Nav` component         | Anchor or route hrefs                        |
| `FOOTER_SECTIONS` | `Footer` component      | 3 columns of links                           |

## 4. What to keep, what to delete

Sections and routes are a **starter menu**. For each one, ask: does the design call for this? If not, delete it.

### Landing sections (`src/components/sections/`)

| Component          | Layout intent                               | Delete if…                                      |
| ------------------ | ------------------------------------------- | ----------------------------------------------- |
| `Hero.tsx`         | Full-height hero with headline and two CTAs | The design has a different first-screen pattern |
| `MarqueeBar.tsx`   | Infinite scrolling ticker of service labels | The design has no marquee or scrolling strip    |
| `About.tsx`        | Manifesto copy + 4 animated stats           | The design has no about/stats section           |
| `Services.tsx`     | Asymmetric 12-col grid of 6 featured items  | No featured service grid on landing             |
| `Process.tsx`      | 4-card process overview                     | No process or method section                    |
| `Highlights.tsx`   | 2-col image+specs cards for resources       | No equipment or resource showcase               |
| `Team.tsx`         | 4-col team member cards                     | No team section                                 |
| `Testimonials.tsx` | 3-col testimonial cards with stats          | No social proof section                         |
| `Pricing.tsx`      | 3-tier pricing with featured plan           | No pricing section                              |
| `FAQ.tsx`          | 2-col accordion FAQ                         | No FAQ section                                  |
| `Contact.tsx`      | Address + map placeholder with two CTAs     | No map or address section                       |
| `CTAPoster.tsx`    | Full-bleed accent CTA with outline headline | No poster CTA                                   |

When you delete a section component, also remove its export from `src/lib/constants.ts` and its import from
`src/app/page.tsx`.

### Subpage routes (`src/app/`)

| Route       | Purpose                    | Delete if…                              |
| ----------- | -------------------------- | --------------------------------------- |
| `/about`    | Process / method deep-dive | All process content fits on the landing |
| `/services` | Full service catalogue     | All services fit in the landing grid    |
| `/contact`  | Standalone contact form    | The contact form is embedded on landing |

When you delete a route directory, remove the corresponding entries from `NAV_LINKS`, `FOOTER_SECTIONS`, and
`src/app/sitemap.ts`.

## 5. Robots and indexing

`src/app/robots.ts` disallows all crawlers by default (template safety). Flip it when the site is ready to go
live:

```ts
rules: { userAgent: '*', allow: '/' },
```

Also update `metadata.robots` in `src/app/layout.tsx`:

```ts
robots: { index: true, follow: true },
```

## 6. Verify

```bash
npm run check     # format + docs + lint + build
npm run test:e2e  # browser smoke test
```
