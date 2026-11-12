# Ratan landing page

Responsive, mobile-first landing page for a handmade rattan flower pot shop. The page uses semantic HTML, component-scoped CSS, and dependency-free JavaScript.

## Stack

- HTML5 and vanilla JavaScript
- CSS3 with custom properties and split component stylesheets
- Tailwind CSS CDN utilities (kept intentionally minimal)
- Inter from Google Fonts

## Run locally

No build step is required. Serve the repository over HTTP so local assets behave like production:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>. VS Code Live Server works as well. Opening `index.html` directly is acceptable for a quick preview, but an HTTP server is recommended.

## Project structure

```text
index.html
css/
  main.css                 # Tokens, reset, shared utilities, imports
  components/              # Header, hero, catalog, reviews, contact, footer
js/main.js                 # Navigation, scroll effects, validation, form feedback
assets/images/             # Product images
assets/fonts/              # Optional self-hosted fonts
```

## Customization

- **Copy and content:** edit the labeled sections in `index.html`.
- **Colors and spacing:** update variables in `css/main.css`.
- **Section styles:** keep changes in the matching file under `css/components/`.
- **Product images:** replace the marked placeholder `<div>` elements with images in `assets/images/`. Use meaningful `alt` text, explicit `width`/`height`, and `loading="lazy"` for catalog images. Keep the hero image eager because it is above the fold.
- **Form delivery:** `js/main.js` currently validates locally and shows a no-reload success state. Connect the submit handler to a backend or form provider before accepting real orders.

## Accessibility and responsive behavior

The page includes labeled navigation controls, keyboard-friendly focus styles, semantic `article` cards, inline validation messages, `aria-live` form feedback, Escape-to-close navigation, and reduced-motion support. Layout breakpoints are mobile-first, with tablet styles at `768px` and desktop styles at `1024px`.

## Deployment

This is a static site and can be deployed to GitHub Pages, Netlify, Vercel, or any static web host. Upload the repository contents, preserve the relative `css/`, `js/`, and `assets/` paths, and configure the host to serve `index.html` as the root document.

## Development workflow

1. Create a feature branch from `main`.
2. Make focused changes in the existing component structure.
3. Run a local HTTP server and check mobile and desktop layouts.
4. Validate keyboard navigation, form errors, reduced-motion behavior, and the menu at narrow widths.
5. Use short English Conventional Commit messages such as `fix: improve mobile navigation`.

## Repository

<https://github.com/igorcbtr/ratan-master-shop>

## License

MIT
