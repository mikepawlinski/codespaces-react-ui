# Conference Speakers — Interview Exercise

This is a starter repo for a live front-end exercise. You'll build a UI card
component in about 45 minutes.

**Your task is described in [`TASK.md`](./TASK.md) — read it first.**

## Getting started

In Codespaces (or locally) this project uses **pnpm**:

```bash
pnpm install     # install dependencies
pnpm dev         # start the Vite dev server (http://localhost:5173)
pnpm test        # run the test suite once
```

Other scripts: `pnpm test:watch` (watch mode), `pnpm build`, `pnpm preview`.

## Where things live

- **Design tokens** (colors, spacing, typography): `src/index.css` — build against these.
- **Data**: `public/speakers.json`, fetched via the `useSpeakers()` hook in `src/hooks/useSpeakers.ts`, typed by `Speaker` in `src/types.ts`.
- **The component to build**: `src/components/SpeakerCard.tsx` (currently a stub).
- **Example test**: `src/components/SpeakerCard.test.tsx` — a template to copy.
- Cards are rendered from `src/App.tsx`.

## Stack

Vite 8 · React 19 + TypeScript · TanStack Query · Vitest + React Testing Library (jsdom) · plain CSS.

## Setup notes

- Package manager is **pnpm** (not npm/yarn).
- Data is fetched locally from `public/speakers.json` with **TanStack Query** (`useSpeakers()`) — a simulated delay and a "Simulate error" checkbox (hooked to the query key, so it refetches on change) make the Loading/Error states demonstrable. No real backend.
- No CSS framework or component library — plain CSS only, by design.
