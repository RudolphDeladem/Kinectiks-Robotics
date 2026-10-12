# Kinectiks Robotics website

Static site built with [Astro](https://astro.build). Requires Node 22.12+.

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the production build
```

- `src/pages/` – one file per route (`index.astro` is Home).
- `src/layouts/Base.astro` – page shell: meta tags, header, footer, scroll reveal.
- `src/components/` – shared Header, Footer, Logo.
- `src/styles/global.css` – design tokens (colours, type, spacing) and shared styles.
- `src/data/site.ts` – navigation, contact details.
- `src/assets/` – official logo and photography (optimised at build time).
- `legacy/original-index.html` – the previous single-page site, kept for reference.
