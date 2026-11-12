# Ratan - Handmade Rattan Flower Pots

Landing page for handmade woven flower pots made of rattan.

## Project Structure

```
ratan-master-webpage/
├── .gitignore
├── index.html              # Main page (all sections in one file)
├── css/
│   ├── main.css            # Variables, reset, base styles, component imports
│   └── components/
│       ├── header.css      # Header and navigation
│       ├── hero.css        # Hero section
│       ├── catalog.css     # Product catalog
│       ├── testimonials.css# Reviews section
│       ├── contact.css     # Contacts and form
│       └── footer.css      # Footer
├── js/
│   └── main.js             # Mobile menu, smooth scroll, form handling
├── assets/
│   ├── images/             # Product photos (add here)
│   └── fonts/              # Fonts (optional)
└── README.md               # This file
```

## How to Run Locally

### Option 1: Open file in browser (simplest)
1. Copy the `ratan-master-webpage` folder to your computer.
2. Double-click `index.html` - it will open in your default browser.
3. The site is ready.

### Option 2: Via Live Server in VS Code (recommended for development)
1. Open the `ratan-master-webpage` folder in VS Code.
2. Install the **Live Server** extension (Ritwick Dey) if not installed.
3. Click **Go Live** in the bottom panel of VS Code or right-click `index.html` → **Open with Live Server**.
4. The site will open at `http://127.0.0.1:5500` (or similar).
5. Pages auto-reload on save.

### Option 3: Via Python local server
If Python is installed:
```bash
cd /Users/igorcibotaru/Desktop/ratan-master-webpage
python3 -m http.server 8000
```
Then open in browser: `http://localhost:8000`

## Color Palette (beige / natural)

Configured in `css/main.css` via CSS variables:

- `--color-bg` - page background (`#faf9f5`, warm beige)
- `--color-text-dark` - main text (`#3e2e22`, dark brown)
- `--color-text-muted` - secondary text (`#6b5b4c`)
- `--color-text-light` - light text (`#8a7d6b`)
- `--color-accent` - accent color (`#bc6c25`, rattan/clay color)
- `--color-border` - borders and separators (`#e7e5e0`)

When you have product photos, send them and I will select exact colors to match the images.

## Responsiveness

Built with **mobile first** approach:
- Base styles - for mobile devices (single column, hamburger menu).
- `@media (min-width: 768px)` - tablets and up (two columns, horizontal menu).
- `@media (min-width: 1024px)` - desktop (three columns in catalog and reviews).

## How to Edit Easily

- **Texts** - all in `index.html`, each section marked with comments.
- **Products** - duplicate the `.catalog-card` block in the Catalog section.
- **Colors** - edit variables in `:root` in `css/main.css`.
- **Component styles** - each block in its own file in `css/components/` (e.g., `hero.css` handles only the hero section).
- **Images** - put in `assets/images/` and substitute the path instead of `.hero-placeholder` / `.catalog-image`.

## Tech Stack

- HTML5
- Tailwind CSS (via CDN, can switch to npm version later)
- CSS3 (variables, media queries, mobile first)
- JavaScript (vanilla, no libraries)
- Google Fonts (Inter)

## License

MIT