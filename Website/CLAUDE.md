# Claude Context — Griffin's Personal Website (three-js branch)

## Project Overview
Personal portfolio site for Griffin Yocum. **Vite** + React 18 + Three.js. Dev server: `npm run dev` from `Website/`. Opens at `http://localhost:5173`.

## Stack
- **React 18.3.1** via npm, Vite + `@vitejs/plugin-react` for JSX
- **Three.js 0.179.1** via npm, addons imported from `three/examples/jsm/`
- **Tailwind CSS** via CDN (configured in `index.html`), dark mode via `class`
- **Radix UI** — components and icons via npm (see UI Rules below)
- **Geist / Geist Mono** — loaded via Google Fonts, used via Tailwind (`font-sans` / `font-mono`)

## File Structure
```
Website/
├── index.html               # Vite entry — Tailwind CDN, Geist font
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx             # ReactDOM.createRoot
│   ├── app.jsx              # App, Hero, RetroMonitorScene, TechCard, TopBar
│   ├── sections.jsx         # ProjectsSection, ContactSection, CURRENT_PROJECTS
│   └── tweaks-panel.jsx     # Dev design panel
├── public/
│   ├── images/              # Static assets (headshot, project screenshots, thz/)
│   └── models/              # .glb 3D assets
└── CLAUDE.md                # This file
```

## three.js Local Reference
The full three.js source lives at `../three.js/three.js/` (git submodule).

**Always check here before writing Three.js code:**
- Source: `../three.js/three.js/src/`
- JSM addons (controls, postprocessing, loaders, etc.): `../three.js/three.js/examples/jsm/`
- Example HTML files: `../three.js/three.js/examples/*.html`

### Key addon paths to know
| Need | File |
|------|------|
| Orbit/scroll controls | `examples/jsm/controls/OrbitControls.js` |
| GLTF model loading | `examples/jsm/loaders/GLTFLoader.js` |
| Bloom/glow | `examples/jsm/postprocessing/UnrealBloomPass.js` |
| Composer pipeline | `examples/jsm/postprocessing/EffectComposer.js` |
| Outline effect | `examples/jsm/postprocessing/OutlinePass.js` |
| Film grain/CRT | `examples/jsm/postprocessing/FilmPass.js` |
| Drag interaction | `examples/jsm/controls/DragControls.js` |
| Custom shaders | `examples/jsm/shaders/` |

**Rule: Before writing any Three.js feature, read the relevant source file or example in the submodule. Do not guess at API shapes.**

## Current Projects (from sections.jsx CURRENT_PROJECTS)
1. **Terahertz MM Wave X-Ray Imaging System** — Hardware + Python + Arduino
2. **Scurvy: A Self-Hosted E2E Anti-Cheat** — Security + Systems
3. **GoalSense: ML Rocket League Replay Analysis** — ML + Web App
4. **Wake: A Social Media App** — Mobile + Social
5. **Cybooks: Ticket Marketplace for Students** — Marketplace + Product
6. **Friley Frights, a Labyrinth Horror Game** — Unity + C#

## Active Initiative: Scroll-Triggered Project Habitats
Each project gets a full-screen Three.js "habitat" — a themed 3D scene (like a theater set) that reveals as the user scrolls into that project, and transitions out as they scroll to the next. See plan below.

### Habitat Concept
- A fixed/sticky Three.js canvas behind the page content
- Each project defines its own scene: background geometry, lighting, ambient objects, color palette
- Scroll position drives which habitat is active and how far the "curtains" are open
- Curtain open/close = shader transition or geometry animation (not CSS)
- Each habitat has a unique vibe tied to the project's theme

### Proposed Project Themes (draft — confirm with Griffin before implementing)
| Project | Theme Idea |
|---------|-----------|
| Terahertz Imaging | Dark lab, scan-line grids, pulsing wave geometry |
| Scurvy Anti-Cheat | Binary rain, network graph nodes, red alert glow |
| GoalSense ML | Rocket arena overhead view, particle goal explosion |
| Wake Social App | Soft water ripple plane, warm sunrise gradient |
| Cybooks Marketplace | ISU campus geometry silhouettes, ticket confetti |
| Friley Frights | Dark maze corridors, flickering point lights |

## Architecture Rules
- **One Three.js file per habitat** — e.g. `scene-terahertz.jsx`, `scene-friley.jsx`
- **One shared scroll controller** — `habitat-controller.jsx` owns the IntersectionObserver/scroll math and tells each scene its `[0..1]` progress
- **Single shared renderer** — one `WebGLRenderer` passed to all scenes; never create multiple renderers
- **Cleanup on unmount** — every scene must dispose geometries, materials, textures, and cancel animation frames
- The HTML dynamic loader already handles multiple `.jsx` files — add new ones there

## UI Rules — Radix UI & Geist

### Radix UI Components
Always prefer Radix UI primitives for interactive elements. They are headless, accessible, and already in `package.json`.

**Installed component packages:**
- `@radix-ui/react-toolbar` — top nav bar
- `@radix-ui/react-tabs` — tabbed content / carousels
- `@radix-ui/react-tooltip` — hover tooltips
- `@radix-ui/react-hover-card` — rich hover cards

**Icons — use `@radix-ui/react-icons`:**
```bash
npm install @radix-ui/react-icons
```
Import individually to keep bundle small:
```jsx
import { GitHubLogoIcon, LinkedInLogoIcon, SunIcon, MoonIcon, DownloadIcon, ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
```
- Prefer Radix icons over inline SVGs for any standard UI icon (arrows, close, hamburger, social, etc.)
- Only write custom inline SVG when no suitable Radix icon exists
- Icon size default: `width={16} height={16}` — match surrounding text size

**When to add new Radix packages:** Check https://www.radix-ui.com/primitives before building any custom modal, dropdown, popover, dialog, checkbox, or slider — a Radix primitive almost certainly exists. Install with `npm install @radix-ui/react-<name>`.

### Geist Font
Loaded via Google Fonts in `index.html`. Use via Tailwind utilities:
- `font-sans` → Geist — body text, headings, UI labels
- `font-mono` → Geist Mono — code snippets, timestamps, terminal text, eyebrow labels, any monospaced display

**Rules:**
- Default to `font-sans` everywhere (it's the Tailwind base already set in `index.html`)
- Use `font-mono` for: eyebrow labels (`tracking-[0.3em]` style), tech stack names on the monitor, timestamps, any element that reads as "system/terminal"
- Never import or reference a different font family — Geist and Geist Mono are the only two fonts on this site

## Coding Rules
- No comments unless the WHY is non-obvious
- Ask before picking a Three.js technique if unsure — check the submodule examples first
- Confirm in browser after every non-trivial change before moving to the next
- Mobile performance matters — use `Math.min(devicePixelRatio, 2)`, avoid heavy postprocessing on mobile
- New npm packages: install with `npm install <pkg>` and import normally — no CDN additions

## Resolved Habitat Decisions
- No curtain mechanic — sets **rise from below on a mechanical lift** as user scrolls in
- Canvas is **fixed, middle 3/5ths of viewport** (top 20vh and bottom 20vh are clear)
- **Theater audience POV** — straight-on camera, slight elevation, looking at stage floor
- **One habitat active at a time** — no crossfade, no overlap
- **No scene outside the projects section** — canvas hidden; background is solid black (dark) or white (light)
- Each project section is **~150vh tall** (tweakable)
- Architecture for future: `habitat-controller.jsx` (scroll math) → `habitat-canvas.jsx` (fixed canvas) → per-project `scene-*.jsx` files
- Placeholder scenes first — themes and models decided per-project later
