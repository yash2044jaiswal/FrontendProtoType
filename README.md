# Polaris Science Outreach Portal — React + Vite + Tailwind

Migration of the 43-screen Stitch export (`stitch_remix_of_polaris_science_outreach_portal`) into React 18, Vite 5, Tailwind 3.4 and React Router 6 (JavaScript/JSX).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build
npm run smoke      # renders all 43 routes server-side to catch JSX/import errors
```

## Demo sign-in (frontend-only, NOT real security)
Public screens are open. Everything under `/admin/*` needs the demo sign-in at `/admin/login`.
Click a role card (it fills the email) and press the sign-in button — any password works.

| Role | Email | Access |
|---|---|---|
| admin | sec.chief@ncpor.res.in (pre-selected) | everything |
| reviewer | dr.anand.cryo@ncpor.res.in | admin area except users / rights / analytics |
| contributor | s.verma@ncpor.res.in | same |
| editor | media.cell@ncpor.res.in | same |

Session lives in `sessionStorage`; "Sign Out" in the admin sidebar clears it. `/demo-index` lists every screen for presenters.

## How the migration works
* `src/pages/*.jsx` – one real JSX component per original `code.html` (class→className, style strings→objects, SVG attrs fixed, `<Link>` for internal links). No `dangerouslySetInnerHTML`.
* Each screen keeps its original `<style>` block and its original inline `<script>`; the script runs after mount via `src/lib/legacy.js` (`useLegacyPage`), and its globals, `document`/`window` listeners and intervals are removed on route change. Inline `onclick=` attributes became React `onClick` handlers calling those functions. Tabs, toggles, role pickers etc. therefore behave exactly as in the source, but they are still DOM-driven — not rewritten as React state.
* `tailwind.config.js` is the union of all 43 pages' inline configs. Fonts (Inter, Merriweather, Material Symbols) load from Google Fonts in `index.html`.
* `src/routes/routes.jsx` – central route table (lazy-loaded). `docs/ROUTE_MAP.md` – folder → component → route.
* `docs/original-screens/` – the original `screen.png` of each page for visual comparison; `docs/DESIGN.md` – original design tokens.

## Known limitations (please read)
1. **43 screens, not 39.** The ZIP contains 43 `code.html` files; all 43 are migrated.
2. **Not browser- or pixel-tested.** Verified: `npm install`, `npm run build`, and server-side render of all 43 routes with no warnings. Not verified: visual match, click-through of every control, mobile layouts, animation behaviour.
3. **Images are still remote.** 84 images point to `lh3.googleusercontent.com`, fonts to Google Fonts. They were not downloaded (no network access to those hosts while building), so the app needs internet and images are not local assets.
4. **No demo images/videos added.** The originals contain no `<video>`, and no media could be sourced/licensed offline, so no media manifest exists.
5. **238 links are inert.** The source had ~869 dead `#` links; 668 were auto-wired by label matching (heuristic — spot-check them), the rest have no matching screen. See `docs/LINK_AUDIT.md`. Buttons (non-`<a>`) were not auto-wired to routes.
6. There is no public "expeditions list" screen in the source, so generic "Expeditions" links go to `/expeditions/soe-01`.
7. Original page-transition/scroll/globe animations are the original CSS/JS carried over; unverified after route changes.
