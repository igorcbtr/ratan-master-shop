# Ratan — Woven for living

A responsive storefront landing page for a handmade rattan planter studio. The redesign uses a warm editorial layout, earthy palette, CSS-built product placeholders, and lightweight vanilla JavaScript.

## Run locally

There is no build step:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>. A static host such as GitHub Pages, Netlify, or Vercel can deploy the repository as-is.

## Structure

```text
index.html       # Storefront sections, product cards, reviews, and contact form
css/main.css     # Design tokens, responsive layout, and component styles
js/main.js       # Menu, smooth scrolling, reveal animation, and form validation
assets/images/   # Optional real product and studio images
```

## Customization

- Replace the CSS-built `.hero-art`, `.product-art`, and `.story-art` placeholders with `<img>` elements when photography is ready. Use descriptive `alt` text, explicit dimensions, and `loading="lazy"` for below-the-fold images.
- Edit product names, pricing, reviews, and contact details directly in `index.html`.
- Adjust the visual system in `:root` inside `css/main.css`; the main tokens are `--ink`, `--paper`, `--moss`, and `--clay`.
- The contact form currently validates in the browser and displays a no-reload success message. Connect the submit handler to a real endpoint before accepting orders.

## Accessibility

The page includes semantic sections and articles, labeled navigation and menu controls, keyboard focus states, Escape-to-close navigation, inline form errors, live status feedback, and reduced-motion support. Layout is mobile-first and collapses to a single column below `760px`.

## Workflow

Use focused English Conventional Commits, for example `feat: add new product card`. Test the page with a local HTTP server at mobile and desktop widths before deploying.

## Repository

<https://github.com/igorcbtr/ratan-master-shop>

## License

MIT
