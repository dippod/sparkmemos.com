# Repository Guidelines

## Project Structure & Module Organization
- Next.js App Router lives in `app/[lang]/(main)` with localized routes (home, blog, privacy, terms); shared layout in `app/layout.tsx` and global styles in `app/globals.css` (Tailwind v4 inline theme).
- Reusable UI sits in `components/`; utilities in `lib/`; configuration/constants in `constants/` and `dictionaries/` for copy and metadata; static assets in `public/` and `images/`.
- Content for the blog is source-controlled under `blog/` (categories, tags, posts) and processed via Velite (`velite.config.ts`).

## Build, Test, and Development Commands
- `npm run dev` — start the local dev server at `localhost:3000` (use `/en/...` for the default locale).
- `npm run lint` — run ESLint with Next.js + TypeScript rules; fix warnings before pushing.
- `npm run build` — production build; matches what deploy uses.
- `npm run preview` — bundle with `@opennextjs/cloudflare` and preview the Cloudflare Worker locally.
- `npm run deploy` / `npm run upload` — build through OpenNext and push artifacts to Cloudflare; requires Wrangler auth.
- `npm run cf-typegen` — regenerate `cloudflare-env.d.ts` from Wrangler for typed bindings.

## Coding Style & Naming Conventions
- TypeScript-first; use functional components and named exports. Prefer 2-space indentation, semicolons, and `@/` absolute imports.
- Components and React files use PascalCase (`Header.tsx`, `LanguageSwitcherClient.tsx`); helper functions camelCase; constants UPPER_SNAKE when appropriate.
- Favor Tailwind utilities; rely on design tokens defined in `app/globals.css` and keep class strings readable (group by layout/typography/state).
- Keep content schemas and MDX/YAML fields aligned with `velite.config.ts` (validate locale keys for `en/zh/es/de/fr/it/ja/ko`).

## Testing Guidelines
- No automated test suite yet; linting is the required gate. Run `npm run lint` and spot-check key pages in `npm run dev`.
- When touching content or schemas, confirm Velite builds cleanly (server start will fail fast on invalid frontmatter) and verify blog routes render for at least the default locale.
- If you add tests, follow Jest/Playwright-style naming and place them adjacent to the feature or under a new `__tests__` folder.

## Commit & Pull Request Guidelines
- Follow Conventional Commits as seen in history (`feat:`, `fix:`, `chore:`, `docs:`). Keep subjects imperative and focused.
- PRs should include: concise summary, linked issue/task (if any), before/after screenshots for UI changes, and manual verification steps with commands run.
- Ensure i18n coverage: update dictionaries when adding user-facing copy and avoid hardcoding locale-specific strings.
- Confirm preview/deploy steps are reproducible (note any `.env.local` or `wrangler.jsonc` changes without committing secrets).
