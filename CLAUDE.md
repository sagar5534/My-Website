# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Sagar Patel. Built with **Astro** (static site generator) and styled with **Tailwind CSS v4** (via the `@tailwindcss/vite` plugin — no `tailwind.config.js`). Requires Node >= 22.12.0.

## Commands

```sh
# Dev server
npm run dev        # or: npx astro dev

# Build for production (outputs to dist/)
npm run build      # or: npx astro build

# Preview production build
npm run preview    # or: npx astro preview
```

## Deployment

- **Cloudflare Pages** — connected to GitHub repo. Pushes to `main`/`master` trigger automatic rebuild and deploy. No manual deploy steps needed.

## Architecture

The homepage (`src/pages/index.astro`) is a single-page layout composed of section components. A separate blog lives under `/blog`. Both projects and blog posts come from one content collection.

### Key files

| Path                          | Purpose                                                                |
| ----------------------------- | ---------------------------------------------------------------------- |
| `src/pages/index.astro`       | Homepage — assembles the section components below                      |
| `src/pages/blog.astro`        | Blog index listing                                                     |
| `src/pages/blog/[slug].astro` | Individual blog post page                                              |
| `src/layouts/BaseLayout.astro`| Shared HTML shell (head, fonts, global styles)                         |
| `src/components/`             | Section + UI components (Nav, Hero, Intro, Experience, Works, Connect, Footer, PostCard) |
| `src/content/posts/`          | Markdown for both projects and blog posts                              |
| `src/content.config.ts`       | Content collection schema (the `posts` collection)                     |
| `src/data/nav.ts`             | Single source of truth for nav/footer links                            |
| `src/styles/global.css`       | Global styles / Tailwind entry                                         |
| `astro.config.mjs`            | Astro config (registers the Tailwind Vite plugin)                      |
| `public/`                     | Static assets (favicons, etc.)                                         |

### Content collection (`posts`)

One unified `posts` collection backs both the Works section and the blog (see `src/content.config.ts`). Each Markdown file in `src/content/posts/` has frontmatter:

- `title` (required), `subtitle`, `date`, `image`
- `repo` — if a GitHub URL is present, the card links out to GitHub; otherwise it renders an internal `/blog/<slug>` page
- `type` — `"project"` or `"blog"` (default `"project"`), controls section grouping
- `featured` — surfaces the entry on the homepage grid
- `draft` — hidden everywhere when `true`

### Navigation

`src/data/nav.ts` is the single source of truth. `navLinks` feeds the `Nav` component; `footerLinks` extends it with extras (e.g. Blog). Homepage anchors are rooted as `/#…` so they work from sub-pages like `/blog`.

## Notes

- No test framework is set up in this project.
