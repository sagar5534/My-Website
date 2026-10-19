# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Sagar Patel. Built with **Astro 7** (static site generator) and styled with **Tailwind CSS v4** (via the `@tailwindcss/vite` plugin - no `tailwind.config.js`). Requires Node >= 22.12.0.

## Commands

```sh
# Dev server
npm run dev        # or: npx astro dev

# Build for production (outputs to dist/)
npm run build      # or: npx astro build

# Preview production build
npm run preview    # or: npx astro preview

# Build and deploy to Cloudflare
npm run deploy     # astro build && wrangler deploy
```

## Deployment

- **Cloudflare Workers static assets**, configured in `wrangler.jsonc` (serves `./dist`). `npm run deploy` builds and deploys with Wrangler.
- Install scripts are allow-listed in `package.json` (`allowScripts`); approve new ones with `npm approve-scripts <pkg>`.

## Architecture

The homepage (`src/pages/index.astro`) is a single-page layout composed of section components. A separate blog lives under `/blog`. Both projects and blog posts come from one content collection.

### Key files

| Path                          | Purpose                                                                |
| ----------------------------- | ---------------------------------------------------------------------- |
| `src/pages/index.astro`       | Homepage - assembles the section components below; hero role rotation script |
| `src/pages/blog.astro`        | Projects & Writing index (`#projects`, `#writing`)                     |
| `src/pages/blog/[slug].astro` | Individual post page (own top bar instead of the site nav)             |
| `src/layouts/BaseLayout.astro`| Shared HTML shell (head, fonts, global styles)                         |
| `src/components/`             | Section + UI components (Nav, Hero, Intro, Experience, Works, Connect, Footer, PostCard, Icon) |
| `src/components/Icon.astro`   | Inline SVG icons (no icon font); add new glyphs here                   |
| `src/lib/spring.ts`           | Interruptible critically-damped spring (mobile menu, nav indicator)    |
| `src/lib/transitions.ts`      | Shared view-transition names (card cover <-> post hero)                |
| `src/content/posts/`          | Markdown for both projects and blog posts                              |
| `src/content.config.ts`       | Content collection schema (the `posts` collection)                     |
| `src/data/nav.ts`             | Single source of truth for nav/footer links                            |
| `src/styles/global.css`       | Tailwind entry, semantic colour tokens (light + dark), type scale, shared component classes |
| `astro.config.mjs`            | Astro config (registers the Tailwind Vite plugin)                      |
| `public/`                     | Static assets (favicons, etc.)                                         |

### Content collection (`posts`)

One unified `posts` collection backs both the Projects section and the blog (see `src/content.config.ts`). Each Markdown file in `src/content/posts/` has frontmatter:

- `title` (required), `subtitle`, `date`, `image`
- `repo` - if a GitHub URL is present, the card links out to GitHub; otherwise it renders an internal `/blog/<slug>` page
- `type` - `"project"` or `"blog"` (default `"project"`), controls section grouping
- `featured` - surfaces the entry on the homepage grid
- `draft` - hidden everywhere when `true`

### Design system

- **Colour:** use the semantic tokens only (`canvas`, `surface`, `fill`, `ink`, `ink-muted`, `ink-faint`, `line`, `inverse`, `deep`...). Each has light and dark values on `:root` in `global.css`; never hard-code shades in components.
- **Type:** fluid `rem` tokens with size-specific tracking (`text-hero-display`, `text-headline-lg`, `text-title`, `text-body-md`, `text-ui`, `text-caption`). System font for UI/body; Archivo only for display type.
- **Shared classes:** `.material` (translucent nav surface), `.press` (press feedback), `.card` (project card lift/press), `.reveal` (scroll-driven reveal).
- **Motion:** respect `prefers-reduced-motion` (and `prefers-reduced-transparency` / `prefers-contrast` for materials). Page transitions use native cross-document View Transitions, not Astro's client router, so page scripts keep their normal lifecycle.

### Navigation

`src/data/nav.ts` is the single source of truth. `navLinks` feeds the `Nav` component; `footerLinks` extends it with extras (e.g. Writing). Homepage anchors are rooted as `/#…` so they work from sub-pages like `/blog`.

## Notes

- No test framework is set up in this project.
