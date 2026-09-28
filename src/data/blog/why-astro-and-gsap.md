---
title: 'Why I rebuilt my portfolio with Astro and GSAP'
description: 'Picking a framework for a fast personal site: SolidJS vs SvelteKit vs Astro, and why zero JavaScript by default won.'
pubDate: 2026-09-28
tags: ['astro', 'gsap', 'performance', 'web']
---

Every developer eventually rebuilds their portfolio. This time I wanted two things that usually fight each other: **a site that loads instantly** and **a site that feels alive**.

## The shortlist: Solid, SvelteKit or Astro?

I've shipped React and Next.js products for years and recently built [Fast Image Annotator](https://github.com/jerinjacob007/fast-image-annotator) with Svelte 5, so all three were on the table:

- **SolidJS** has the fastest runtime of the bunch: fine-grained reactivity, no virtual DOM.
- **SvelteKit** is nearly as fast, with a friendlier ecosystem and a great developer experience.
- **Astro** takes a different approach: it ships **zero JavaScript by default** and only hydrates the "islands" that actually need interactivity.

For an interactive app, I'd pick Solid or SvelteKit. But a portfolio and a blog are mostly _content_. What makes content sites feel fast in real life isn't how quickly a framework re-renders. It's how little JavaScript the browser has to download, parse and run before you can read. Astro wins that game by default.

## Minimal tools, on purpose

The whole site runs on two dependencies:

```json
{
  "dependencies": {
    "astro": "^7.3.5",
    "gsap": "^3.15.0"
  }
}
```

Blog posts are plain Markdown files in a [content collection](https://docs.astro.build/en/guides/content-collections/). Astro validates the frontmatter with a schema, turns each file into a static page at build time, and the output is just HTML and CSS that any CDN can serve.

```ts
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});
```

## Where the motion comes from

For the "alive" part, I chose **GSAP** over Three.js. A 3D scene is gorgeous, but it's heavy, and a portfolio should be about the work. GSAP gives me:

- **SplitText** for the character-by-character hero and line-by-line headings.
- **ScrollTrigger** for the pinned horizontal project gallery, the scroll-driven gear (a nod to my mechanical engineering roots) and the timeline on the about page.
- `gsap.matchMedia()` so every animation respects `prefers-reduced-motion`, and the heavy effects only run on larger screens.

The animation script is loaded once as a small module, and with Astro's client router the page transitions stay smooth without turning the site into a single-page app.

## What's next

I'll use this blog to write about the things I build: [Getaix](https://getaix.com), the App Inventor ecosystem, no-code tooling and whatever experiment I'm hooked on next.

Thanks for reading. See you in the next post.
