# sybra-website

Marketing site and documentation for [Sybra](https://github.com/automaat/sybra) — local-first multi-agent orchestration for your desktop.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

## Stack

- **Astro 6** — static site generator
- **Starlight 0.38** — docs framework
- **Tailwind CSS v4** — landing page styles
- **Space Grotesk + Inter** — typography
- **Cloudflare Pages** — hosting

## Development

```bash
npm install
npm run dev       # dev server at localhost:4321
npm run build     # production build
npm run preview   # preview production build
npm run lint      # oxlint
npm run check     # astro type-check
```

## Deployment

Pushes to `production` branch trigger a Cloudflare Pages deploy via GitHub Actions.

To promote `main` → `production`, run the **Promote to production** workflow manually from the Actions tab.

## Structure

```
src/
  pages/index.astro          # landing page
  styles/landing.css         # landing page styles + theme vars
  styles/starlight.css       # Starlight accent + font overrides
  components/ThemeProvider.astro  # syncs dark/light toggle with docs
  content/docs/              # MDX documentation pages
public/
  favicon.svg                # S lettermark logo
.github/workflows/
  ci.yml                     # lint + build on every PR
  deploy.yml                 # deploy on push to production
  promote.yml                # manual main → production promotion
```
