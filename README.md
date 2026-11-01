# Five Clues: World Race

A multiplayer country-guessing game created through AI-assisted development with OpenAI Codex.

Live game: https://five-clues-world.ishthefish369-2.chatgpt.site

## Gameplay

- 2–8 players join a room using a six-character room code. The host also plays.
- Each match has 10 rounds with different country entries.
- Five clues appear in order: food, history, geography, language, and capital.
- A new clue appears every 15 seconds.
- The first correct guess wins the round: 5 points at the first clue, then 4, 3, 2, or 1 as more clues appear.
- Wrong guesses trigger a five-second cooldown. Unanswered rounds award no points.
- Most points after 10 rounds wins; tied players share the win.

The content bank covers 197 country entries with 1,970 clue variants, including 591 regional food clues. The scope includes 193 UN member states, Palestine and Vatican City, plus separately labeled Kosovo and Taiwan. Food traditions can overlap across borders. Country clues rotate on rematches in the same room; capital clues can repeat.

## Main source files

- `app/page.tsx`: room creation/joining, game interface, guesses, scoreboard, and results.
- `app/api/game/route.ts`: server-side room actions and concurrency protection.
- `lib/game-engine.ts`: timed clue progression, answer normalization, scoring, and match rules.
- `data/countries.json`: complete clue bank, alternate country names, and reference links.
- `app/globals.css`: sunny theme, typography, responsive styling, and animations.
- `components/sunny-scene.tsx`: moving Earth/cloud background and scrolling behavior.
- `lib/music.ts`: original procedural music generated with the browser Web Audio API.
- `db/schema.ts`, `lib/game-db.ts`, and `drizzle/`: Cloudflare D1 schema, access, and migrations.
- `public/`: Earth images, fonts, favicon, and asset notices.
- `build/`, `scripts/`, and root configuration files: framework/runtime support.

## Technology

React, TypeScript, Vinext, Tailwind CSS, Cloudflare Workers, Cloudflare D1 (SQLite), and Drizzle migrations.

## Run locally

Requires Node.js 22.13 or newer and pnpm. The package.json specifies the pnpm version.

1. Open a terminal inside this folder.
2. Install dependencies: `pnpm install`.
3. Build once: `pnpm build`.
4. Initialize the local database with the migration command below.
5. Run `pnpm dev` and open the local address shown in the terminal.

```sh
pnpm exec wrangler d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_overjoyed_micromacro.sql
```

The multiplayer backend requires a Cloudflare-compatible runtime and a D1 binding named `DB`. GitHub Pages alone cannot run it. Uploading the source to GitHub does not automatically deploy the application.

To host outside the original Sites project, configure your own D1 database, apply the migration, and bind it as `DB`. No live player data or credentials are included.

## Upload to GitHub

Extract the ZIP, open the `five-clues-world` folder, and upload its contents to the repository root. `README.md`, `package.json`, `app/`, `data/`, and `public/` should appear directly in the repository. Do not upload node_modules or use the ZIP itself as a substitute for the source files.

## Export notes

Source snapshot: 13988a786cf5073fe9e7b84e0c6360841779fe91.

This export includes the game source, required UI components, assets, content bank, database migrations, package lockfile, and framework support. Installed dependencies, generated builds, Git history, local environment files, and unused starter UI/example components are excluded. Original framework setup notes are retained in STARTER.md. The original Sites manifest is included for source completeness; it does not grant access to the hosted project.
