// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH are set by the GitHub Pages workflow so the site can be
// served from https://jerinjacob007.github.io/jerinjacobin/. Locally, and on a
// custom domain, the site lives at the root.
// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://jerinjacob.in',
  base: process.env.BASE_PATH ?? '/',
});
