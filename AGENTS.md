# Parcoach / 亲导

PNPM + Turborepo monorepo (stock `create-turbo` starter scaffold). Project vision: open-source practical family-education content/resources for parents coaching their own kids (家庭教育). All 100% TypeScript, React 19, Next.js 16.

- apps/web — main Next.js app (port 3100)
- apps/docs — Next.js docs app (port 3001)
- packages/ui — `@repo/ui`, shared React component library
- packages/eslint-config — `@repo/eslint-config` (base / next-js / react-internal)
- packages/typescript-config — `@repo/typescript-config` (base / nextjs / react-library)

## Dev environment

- packageManager: pnpm@9.0.0, node >=18
- Install deps: `pnpm install` (workspace globs in pnpm-workspace.yaml: `apps/*`, `packages/*`)
- `.npmrc` is intentionally empty.

## Build & test

All root scripts delegate to Turbo:

- `pnpm dev` — `turbo run dev` (dev servers are persistent, caching disabled)
- `pnpm build` — `turbo run build`, outputs to `.next/`
- `pnpm lint` — `turbo run lint`. Every app/package runs `eslint --max-warnings 0` (warnings fail CI-style lint)
- `pnpm check-types` — `turbo run check-types`. Apps run `next typegen && tsc --noEmit`
- `pnpm format` — `prettier --write "**/*.{ts,tsx,md}"`
- Single package: `pnpm --filter web build` / `pnpm --filter docs dev` etc.

There is NO test framework, no test scripts, and no `.github/` CI workflows anywhere in the repo (only node_modules-matched noise). Do not invent a `pnpm test`.

## Conventions

- TypeScript strict mode everywhere (`strict: true`, `noUncheckedIndexedAccess` — index access returns `T | undefined`, handle accordingly); module system is NodeNext.
- ESLint flat config (`eslint.config.js`) extending `@repo/eslint-config`; shared config uses `typescript-eslint` recommended + `eslint-config-prettier` + `eslint-plugin-turbo` (`turbo/no-undeclared-env-vars` is a warn).
- Shared packages referenced via `workspace:*` deps (e.g. `@repo/ui: "workspace:*"`).
- `packages/ui` exports components via `"./*": "./src/*.tsx"` in its `exports` map — new shared components go in `packages/ui/src/`.
- Formatting is Prettier-driven; prefer matching existing style over reformatting.

## Pitfalls

- **No tests configured** — commit/verify via `pnpm lint` + `pnpm check-types` + `pnpm build`.
- **Dev ports are fixed**: web = 3100, docs = 3001. If one is busy, Next fails to start — check before assuming a broken build.
- `next build` on Next 16 generates `.next/` (gitignored) and runs `typegen`; a stale `next-env.d.ts` can mask type errors — rely on `check-types`.
- README.md is still the generic Turborepo starter text, not a project doc; don't treat it as source of truth for conventions.
