# Copilot Instructions for Luminart Design Studio Website

## Project Overview
Static HTML website for an interior design studio (Luminart Design Studio / DJ's Custom Interiors). Single-page marketing site with portfolio showcase, pricing, and contact sections. Hosted at `luminartdesignstudio.com`.

## Architecture

### File Structure
- **`home.html`** - Main (and only) page; contains all sections via anchor links (`#services`, `#portfolio`, `#pricing`, `#contact`)
- **`css/home.css`** - Custom styles layered on top of Tailwind CSS
- **`js/home-ai.js`** - Refactored ES6 class-based portfolio section manager (preferred)
- **`js/home.js`** - Legacy jQuery version (kept for reference, not used)
- **`js/nav.js`** - Mobile navigation toggle handler
- **`icons/sprite.svg`** - SVG sprite sheet for icons (email, phone, instagram, thumbtack, residential, commercial, consultation)

### CSS Strategy
Uses **Tailwind CSS via CDN** (`tailwindcss/2.2.19`) for utility classes combined with custom CSS in `home.css`. Custom styles handle:
- `.header-gradient` - Navigation bar gradient
- `.portfolio-*` classes - Expandable portfolio section styling
- `.mouse-hand` - Cursor pointer indicator

### JavaScript Patterns
- jQuery 3.7.1 loaded via Google CDN
- Portfolio sections use **show/hide toggle pattern** with animated scroll-to-section
- `SectionManager` class in `home-ai.js` is the modern implementation; follow this pattern for new interactive features

## Key Conventions

### Image Assets
```
/img/                    # Root images (hero, thumbnails, logo)
/img/Portfolio/          # High-quality portfolio images
/img/Website/            # Organized by category (Accent Walls/, Bedrooms/, etc.)
/img/Collages/           # Composite images
```
- Logo: `LuminArt_Logo_3_med.png` (navigation), `LuminArt_Logo_3.png` (full size)
- Use descriptive alt text for SEO (see existing examples in portfolio section)

### SVG Icons
Reference icons via sprite: `<use href="/icons/sprite.svg#iconname"></use>`
Available icons: `residential`, `commercial`, `consultation`, `email`, `phone`, `instagram`, `thumbtack`

### SEO Requirements
- JSON-LD schema markup in `<head>` for local business (InteriorDesignStudio)
- Service areas: Seattle metro (Sammamish, Issaquah, Bothell, Kirkland, Bellevue, Lynnwood, Auburn, Renton, Maple Valley)
- Maintain `sitemap.xml` and `robots.txt` when adding pages
- Use semantic HTML and descriptive alt attributes

## Development Notes

### Running Locally
No build step required. Serve with any static server:
```bash
python3 -m http.server 8000
# or
npx serve .
```

### Adding Portfolio Items
1. Add thumbnail to `/img/` and full images to `/img/Portfolio/`
2. Create index card in portfolio grid (copy existing `*IndexDiv` pattern)
3. Create expandable section (copy existing `*Sect` pattern)
4. Register in `SectionManager` by adding to `sections` array in `home-ai.js`

### Backup Files
- `home-backup.html` and `home-aadi.html` are working backups - do not delete
