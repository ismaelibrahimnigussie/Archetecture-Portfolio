# Hayleyesis Sisay | 3D Architectural Portfolio

A complete responsive portfolio website built from the supplied 33-page PDF.

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Start a local server. For example:
   - `python -m http.server 8000`
4. Visit `http://localhost:8000`.

You can also use the VS Code Live Server extension.

## What's included
- Responsive multi-section portfolio.
- Actual portrait cropped from page 2 of the source PDF.
- Optimized web images rendered from all 33 original PDF pages.
- Project case-study modals with original source sheets.
- Image zoom/lightbox, responsive navigation and scroll progress.
- A pointer-responsive, layered 3D-style effect on the hero portrait.
- Scroll reveal and GSAP entrance/parallax motion.
- Reduced-motion support.

## Important accuracy and 3D notes
The supplied PDF contains a small, circularly framed portrait photograph, not a clean transparent PNG, 3D scan or rigged character model. The hero uses a silhouette mask and restrained pointer tilt to hide most of the printed circle; the low-resolution source may still need a clean, high-resolution transparent PNG provided or approved by the architect for a natural cutout. It does not provide genuine 360-degree rotation. The tilt is disabled for reduced-motion preferences and on touch devices. To add true 360-degree character rotation, supply or commission a rigged GLB/GLTF likeness model and connect it to a Three.js character viewer. A placeholder model should not be presented as the real architect.

The source PDF's text is image-based, so the portfolio copy is transcribed from the visible source pages. Verify all dates, contact details and claims with the portfolio owner before publishing. Social links can be updated in `index.html`.

## Files
- `index.html`: page structure and content
- `styles.css`: visual system and responsive layouts
- `app.js`: project data, modals, navigation and motion
- `assets/hayleyesis-portrait.webp`: source portrait crop
- `assets/portfolio-pages/`: optimized original portfolio pages

## Deployment
Upload the extracted folder to a static host such as GitHub Pages, Netlify or Vercel. No build step is required. Google Fonts and GSAP are loaded from CDNs, so those enhancements require internet access. The core page and project images are local.
