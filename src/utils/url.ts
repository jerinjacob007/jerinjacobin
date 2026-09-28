// Prefix an internal path with the configured `base` (e.g. /jerinjacobin on
// GitHub Pages, / on a custom domain). Paths must start with "/".
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${base}${path}`;
