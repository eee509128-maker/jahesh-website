# AGENTS.md - jahesh-website

## Overview
This is a static website built with Vike.js (client-side routing framework). The site consists of multiple page templates (untitled1–untitled37) sharing common assets in assets/.

## Key Facts
- Framework: Vike.js (server-side and client-side routing)
- Build: None - pure static site, no bundling/deployment step
- Pages: 37 page templates (untitled1–untitled37) in jahesh-website/untitledN/
- Shared Assets: assets/ contains CSS, fonts, images, and chunked JS
- Entry Point: assets/entries/entry-server-routing.BOO9J2wb.js (Vike router)
- Package Manager: No package.json - empty lockfile only
- Testing/CI: None configured

## Agent Instructions

### Adding a New Page
1. Create a new directory untitledN under jahesh-website/ (e.g., untitled38)
2. Add untitledN/index.html with standard HTML5 structure (includes Vike script and shared assets)
3. Add assets/entries/pages_untitledN.js with the page's JavaScript logic
4. Ensure the page follows the same naming convention as existing pages

### Running the Site
- Serve the jahesh-website directory via any static server (e.g., python -m http.server)
- No build step required - files are already static

### Important Conventions
- Page naming: Follow untitledN pattern (N increments sequentially)
- Asset consistency: All pages must reference the same assets/ paths; updates to shared CSS/fonts affect all pages
- Vike routing: The router (entry-server-routing.BOO9J2wb.js) handles navigation between pages - no server-side rendering
- No backend: This is a pure frontend site; no API, database, or server processes

### What to Avoid
- Don't modify package-lock.json (empty, no deps)
- Don't add custom build steps - the site is statically generated
- Don't expect testing frameworks or CI pipelines (none exist)

## Quick Reference
- Root: jahesh-website/
- Pages: jahesh-website/untitledN/index.html (N = 1..37)
- Shared assets: jahesh-website/assets/
- Router: jahesh-website/assets/entries/entry-server-routing.BOO9J2wb.js
- Per-page JS: jahesh-website/assets/entries/pages_untitledN.js

