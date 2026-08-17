# Pair exercise — Build a "Speaker" card component

**Time:** ~45 min, paired. You drive; we'll chat as you go.
**Stack:** React + TypeScript, plain CSS (no component library — we want your own layout and styling instincts). Use the CSS variables we give you.
**Data:** served through a small local **TanStack Query** hook we provide, `useSpeakers()` (in `src/hooks/useSpeakers.ts`), which fetches `public/speakers.json` — no real backend. Consume the hook and handle its `isLoading` / `isError` states. The hook has a simulated delay, and the app has a "Simulate error" checkbox (wired through the hook's query key) so you can exercise the Loading and Error states. The data shape is typed as `Speaker` in `src/types.ts`.

This is a normal slice of UI work: a designer has handed you a spec, and you're turning it into a real, robust component. Think out loud, ask us anything, treat us like teammates you'd pair with.

**Use AI however you normally would** — Copilot, Cursor, Claude, ChatGPT, whatever's in your workflow. We're not testing whether you can type React from memory; we're testing your judgment.

## What to build

A **card component** that displays a speaker (from `public/speakers.json`), plus the states a real card needs. Render a few of them in a simple grid.

### The card should show

- Avatar (initials in a coloured circle, derived from the name), name, job title
- A short track label (e.g. "Engineering", "Business", "Marketing")
- A couple of metadata bits (talk topic, keywords)
- A primary action button ("View profile") and a secondary action

### States we want to see (this is the real test)

- **Default / resting**
- **Hover** and **keyboard focus** (a card is interactive)
- **Loading** (before data is "ready" — a skeleton or similar)
- **Empty** (what if there are no speakers?)
- **Error / missing data** (e.g. a speaker with a missing field, like no topic yet)

Getting all the happy-path cards on screen is the easy 60%. The states above are where the real work lives — don't skip them to make things look done.

### Design system

This is our design system, already in place in **`src/index.css`** (primitives + semantic tokens: colours, spacing, radius, typography, elevation). **Reference these tokens rather than hardcoding values** — using them correctly is part of what we're assessing. Open `src/index.css` for the full list, or hit the **Design System** tab in the running app to see them rendered.

## The design spec

Our designer has given you the following requirements. **Build to this spec** — but treat it the way you'd treat any real handoff. We'll be around (playing the designer) if you want to talk anything through.

1. Card background: use `--card`. For "featured" speakers, use a new brand tint `#e8f0ff`.
2. Track shown as a small pill, using neutral grey shades from the palette (e.g. `--muted` background with `--muted-foreground` text) — the same neutral treatment for every track (Engineering / Business / Marketing).
3. Name in `--text-lg`, role in `--text-sm` `--muted-foreground`.
4. Metadata row uses `--subtle-foreground`.
5. Primary button: `--primary` bg, white text. Secondary: text-only link in `--primary`.
6. Card corners `--radius-lg`. Avatar is a perfect circle showing the person's initials in white (`--primary-foreground`) on an `--accent` fill.
7. On hover, the whole card lifts (`--shadow-md`) and the border turns `--primary`.
8. Inside the card, use a 10px gap between the avatar and the name/title block.

## Ground rules

- **Ask questions and speak up.** If part of the spec seems off, wrong, or like it'll cause problems, say so — how you handle a handoff is part of what we're looking at.
- **AI is allowed and encouraged** — but review its output. We care more about what you catch and correct than what you generate.
- No tests, no build config. Focus on the component and its states.
- Stuck? Say where. Going quiet is worse than "I'm not sure."

## Data

The speaker records live in **`public/speakers.json`**, typed as `Speaker` in **`src/types.ts`** — open either for the exact shape and the full list. You don't import the file directly; the `useSpeakers()` hook fetches it for you.

_(Note: there are no avatar images — derive an initials avatar from the speaker's name. `topic` can also be empty — handle it gracefully.)_
