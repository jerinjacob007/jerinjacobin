# jerinjacob.in

Personal portfolio and blog of **Jerin Jacob**, a full-stack developer and mechanical engineer from Kerala.

Built with [Astro](https://astro.build) (static HTML, zero JS by default) and [GSAP](https://gsap.com) for animation. Those are the only two dependencies.

## Develop

Requires Node.js `>=22.12.0` and pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static site in dist/
pnpm preview    # serve the production build
```

## Where things live

| Path | What |
| --- | --- |
| `src/data/profile.ts` | All personal details: bio, projects, skills, journey, socials (add your email here) |
| `src/data/blog/*.md` | Blog posts (Markdown + frontmatter, validated in `src/content.config.ts`) |
| `src/pages/` | Routes: `/`, `/projects/`, `/about/`, `/blog/`, `/blog/[id]/`, 404 |
| `src/scripts/animations.ts` | Every GSAP animation (hero, scroll reveals, pinned gallery, cursor, magnetic buttons) |
| `src/styles/global.css` | Design tokens and shared styles |

## Writing a new post

Create `src/data/blog/my-post.md`:

```md
---
title: 'My post'
description: 'One-line summary'
pubDate: 2026-10-01
tags: ['astro']
---

Content in **Markdown**.
```

It appears at `/blog/my-post/`. Set `draft: true` to hide it.

## Animations & accessibility

All motion is set up inside `gsap.matchMedia()`: visitors with `prefers-reduced-motion` get a static page, the pinned horizontal gallery only runs at ≥900px, and the custom cursor and magnetic buttons only run for fine pointers. If the animation script fails to load, a failsafe reveals all content after 3s.

## Deploy

`pnpm build` outputs plain static files to `dist/`. Deploy to Cloudflare Pages, Netlify, Vercel or GitHub Pages (build command `pnpm build`, output `dist`). Update `site` in `astro.config.mjs` if the domain changes.
