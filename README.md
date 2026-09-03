# Chichi

A one-page site for a nightlife venue, built as a learning project.

No client behind it. I built it to practise the Next.js App Router and to see how far a single
scrolling page can carry a design before it needs real routing.

## What I was practising

- **App Router basics** — a single route composed from section components (`Hero`, `About`,
  `Events`, `Gallery`, `Contact`), with layout and metadata handled at the root.
- **Atmosphere over information.** A venue page has to feel like the place, so most of the work went
  into imagery, contrast and rhythm rather than dense copy.
- **A gallery that behaves** at different viewport sizes without shifting layout while images load.
- **Tailwind v4** with the CSS-first `@theme` configuration instead of a JS config file.

## Stack

Next.js · React · TypeScript · Tailwind CSS

## Running it

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.
