# Claude Context — Griffin's Personal Website (three-js branch)

## Project Overview
Static personal portfolio site for Griffin Yocum. No bundler — React 18 + Three.js loaded via CDN ESM, JSX transpiled by Babel Standalone in-browser. Python `http.server` is the dev server.

## Stack
- **React 18.3.1** + Babel Standalone (browser JSX transpilation)
- **Three.js 0.179.1** via `esm.sh` CDN, GLTFLoader addon loaded separately
- **Tailwind CSS** via CDN, dark mode enabled
- **Radix UI** (Toolbar, Tabs, Tooltip, HoverCard) via CDN
- **No bundler, no npm, no build step** — everything is `<script type="module">` or fetched dynamically

## File Structure
```
Website/
├── Personal Site.html   # Entry point — loads React, Three.js, Radix, fetches JSX files
├── app.jsx              # Main App, Hero, RetroMonitorScene, TechCard, TopBar
├── sections.jsx         # ProjectsSection, ContactSection, AboutSection, CURRENT_PROJECTS
├── tweaks-panel.jsx     # Design-system dev panel (sliders, toggles, color pickers)
├── images/              # Static assets, headshot, project screenshots
│   └── thz/             # Terahertz project images
├── models/              # .glb 3D assets (retro monitor currently)
└── CLAUDE.md            # This file
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

## Coding Rules
- No comments unless the WHY is non-obvious
- No TypeScript, no bundler changes, no npm installs — CDN only
- Ask before picking a Three.js technique if unsure — check the submodule examples first
- Confirm in browser after every non-trivial change before moving to the next
- Mobile performance matters — use `Math.min(devicePixelRatio, 2)`, avoid heavy postprocessing on mobile

## Questions to Resolve Before Building
- [ ] What should the "curtain" mechanic look like exactly? (geometry wipe, shader dissolve, physical drape mesh?)
- [ ] Does the habitat canvas sit behind all content, or only behind the project section?
- [ ] Should habitats pause/suspend when not in view for perf?
- [ ] Any specific 3D models Griffin wants to source per project?
- [ ] Dark/light mode behavior for habitats?
