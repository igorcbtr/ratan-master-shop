# Ratan Master — Woven for living

Ratan Master is a responsive storefront landing page for handmade rattan planters. It uses a warm cream-and-brown brand palette, an editorial layout, CSS product placeholders, and lightweight vanilla JavaScript.

## Run locally

The site has no build step. Start a local HTTP server from the repository root:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>. Serving the project over HTTP is recommended so local assets and the favicon behave as they will in production.

## Project structure

```text
index.html       # Storefront sections, product cards, reviews, and contact form
css/main.css     # Design tokens, responsive layout, and component styles
js/main.js       # Menu, smooth scrolling, reveal animation, and validation
assets/images/   # Brand logo, favicon, and product photography
```

## Content and visual customization

- Product photography is stored in `assets/images/products/` and is used by the hero, collection cards, and story section. Use descriptive `alt` text, explicit dimensions, and `loading="lazy"` for below-the-fold images when adding more photos.
- Edit product names, prices, reviews, contact details, and Russian interface copy in `index.html`.
- Adjust the visual system in `:root` inside `css/main.css`. Key tokens include `--ink`, `--paper`, `--cream`, `--moss`, `--clay`, and `--logo-paper`.
- Keep `assets/images/ratan-master-logo.jpg` as the source brand mark and `assets/images/ratan-master-favicon.png` as the local favicon. Update both deliberately if the brand artwork changes.
- The contact area uses direct `tel:` and `mailto:` links. The phone link opens the dialer on supported devices, while the email link opens a new message addressed to `ianagaitur071@gmail.com` with a prepared subject and greeting. Social links for Facebook, Instagram, and TikTok open in a new tab.

## Accessibility and responsive behavior

The page includes semantic sections and articles, labeled navigation and menu controls, visible keyboard focus states, Escape-to-close navigation, inline form errors, live status feedback, telephone and email links, and reduced-motion support. The layout is mobile-first and collapses to a single column below `760px`.

## Development workflow

1. Create a short kebab-case branch from `main`, such as `fix/mobile-menu`.
2. Make focused changes and preserve the existing static-site structure.
3. Run the local preview at both mobile and desktop widths.
4. Before opening a pull request, run `node --check js/main.js`, parse or validate `index.html`, and run `git diff --check`.
5. Use concise English Conventional Commit messages, such as `fix: improve mobile navigation`.
6. Open a pull request with a short summary, screenshots for visual changes, and the checks that passed. Address review feedback before merging.

## Deployment

This is a static site and can be deployed to GitHub Pages, Netlify, Vercel, or another static host without a build pipeline. Preserve the relative `css/`, `js/`, and `assets/` paths and configure `index.html` as the root document. For GitHub Pages, publish from the selected branch and repository root.

## Contributing

Keep changes scoped to the requested feature, preserve keyboard and mobile behavior, and avoid committing generated files or secrets. Update this README when the setup, deployment, or content-editing workflow changes.

## Repository

<https://github.com/igorcbtr/ratan-master-shop>

## License

MIT
