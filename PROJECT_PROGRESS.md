# Current Project Status

> Portfolio for **Pulkit Sharma** — B.Tech Artificial Intelligence @ SVNIT, Surat.
> Built with Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion + GSAP + Three.js.
> **All personal content comes only from the resume** (`public/Pulkit_Sharma_Resume.pdf`).
> Design quality mirrors the reference screenshots in `reference images/` (original implementation, no copied assets/text).
> Certificate images come only from the local `certifiate/` folder (copied into `public/certificates/`).

_Last updated: 2026-07-12 (performance pass: pause off-screen Three.js loop + AVIF images; added 2 projects + repo links; fixed navbar→section scroll-offset gap)_

---

## Completed

### Sections / Pages
- **Root page** (`src/app/page.tsx`) — assembles every section in nav order: Hero → Marquee → About → Projects → Neural Studio → Experience → Stack → Certifications → Contact → Footer.
- **Navbar** — glass, scroll-aware, active-section highlight (IntersectionObserver), animated pill, theme toggle, "Available" badge, responsive mobile menu.
- **Hero** — animated headline, resume-based intro, CTAs (View work / Download CV / Get in touch), real resume stat tiles (LeetCode 280+, GFG 100+, JEE 99.31%, CGPA 7.03), 3D Three.js neural network panel with HUD overlays.
- **Marquee** — infinite tech-skill ticker drawn from resume skills.
- **About** — narrative, education card (SVNIT, CGPA 7.03, JEE highlights), GELU activation SVG chart, Positions of Responsibility grid (3 from resume) + north-star quote card.
- **Neural Studio** — **[REBUILT 2026-07-10]** reference-grade **2-column grid of 6 large cards** (was a selector+single-stage; matches `reference images/` Neural Studio layout). One card per required architecture (CNN, ResNet, EfficientNet, LSTM, Transformer, ViT); each card = index·tag, accent-tinted formula, title, blurb, embedded animated SVG/CSS diagram panel (grid bg), meta pill. Per-architecture accent glow + top-line on hover, spring lift, diagram scale-on-hover, Framer reveal. All 6 diagrams are original & hand-built (3 kept: CNN feature-maps, LSTM gates, Transformer encoder block; 3 new: ResNet skip-connection w/ travelling pulse, EfficientNet compound-scaling meters, ViT patchify→tokens+positional-embedding).
- **Projects** — now **five** cards with screenshot previews: *AI vs Real Image Classifier* (deep-learning AI-image detector, **live** on Render + GitHub), *Similar GOT Character* (NLP t-SNE dialogue similarity, **live** on Streamlit + GitHub), *AI Match Predictor* (IPL predictive-analytics engine, ML, GitHub), *MindSettler* (web, **live** mindsettler-taupe.vercel.app), and *MaskDetect* (face-mask CNN classifier, Deep Learning, GitHub). Each card shows a 16:9 screenshot, resume bullets/stack, and live/source/repo affordances. Status pill now shows **Live** (green) / **Source** (has public repo) / **Private** — no longer a misleading lock on repos that are public. **[UPDATED 2026-07-12: 2 new projects added; GitHub repos added to AI Match Predictor & MaskDetect]**
- **Experience** — layout + reserved timeline placeholder only (INTENTIONALLY EMPTY per instructions). **[NEW]**
- **Stack** — 5 skill groups from resume (Languages, Frameworks, ML, Data Science, Tools) as glass cards. **[NEW: page wired]**
- **Certifications ("Receipts")** — cards for LeetCode 100-Days badge, LeetCode 50-Days badge, GWOC '26 certificate (local images) + Microsoft "Discover Data Analysis" (text credential). Click-to-zoom lightbox. **[NEW]**
- **Contact ("Let's build something useful")** — email/GitHub/LinkedIn cards from resume + message composer that builds a `mailto:` (name, email, topic chips, message, validation). **[NEW]**
- **Footer** — brand, sitemap, social links, status card, copyright.

### Components created
- `ThemeProvider` (dark/light with localStorage persistence).
- Primitives: `Reveal`, `Stagger`, `StaggerItem`, `SectionHeader`, `GlassCard`, `Section`.
- `NeuralScene` (react-three-fiber 3D network with pulses).
- Six original architecture diagrams in `neural-studio/diagrams.tsx` (`CNNDiagram`, `ResNetDiagram`, `EfficientNetDiagram`, `LSTMDiagram`, `TransformerDiagram`, `ViTDiagram`) + a shared `Arrow` marker helper.

### Animations completed
- Scroll-reveal (Framer `useInView`) across all sections.
- Hero staggered entrance; layout-animated nav pill and Neural Studio active bar.
- 3D neural scene: pointer-reactive rotation, node pulsing, edge signal particles.
- Animated SVG diagrams (path-draw + scale on view).
- Marquee loop; certification lightbox spring transition.
- `prefers-reduced-motion` respected in `globals.css`.

### Responsive work completed
- All sections use `container-x` + responsive grids (mobile → lg breakpoints).
- Navbar collapses to mobile menu < lg; 3D panel hidden < lg.
- Contact/Certifications/Experience grids reflow at sm/md/lg.

### Assets connected
- Resume PDF served at `/Pulkit_Sharma_Resume.pdf` (Hero "Download CV").
- Certificate images: `public/certificates/leetcode-100-days.png`, `leetcode-50-days.png`, `gwoc-2026.jpeg` (copied from local `certifiate/` folder; mapping visually verified).
- Project screenshots in `public/assets/projects/`: `ai-match-predictor.png`, `mindsettler.png`, `maskdetect.png`, and **[NEW 2026-07-12]** `ai-vs-real-image-classifier.png` (from `project_image/ai-vs-real-image-classification.png`), `similar-got-character.png` (from `project_image/similar-got-character.png`). All local — no remote/placeholder images. Both new images verified serving HTTP 200 through the Next image optimizer.

### Verification
- `npx next build` — **passes** (compiled, type-checked, 4/4 static pages, no errors).
- `npx next start` smoke test — HTTP 200; all 8 section ids present; "Pulkit Sharma" in served HTML.

---

## Files Created
- `src/app/page.tsx` — root page assembling all sections.
- `src/components/sections/certifications.tsx` — Certifications section + lightbox.
- `src/components/sections/experience.tsx` — empty Experience placeholder.
- `src/components/sections/contact.tsx` — Contact section + mailto composer.
- `PROJECT_PROGRESS.md` — this progress file.

## Files Modified
### Session 2026-07-12 (2 new projects + scroll-offset fix)
- `src/lib/resume.ts` — prepended two new projects to the `projects` array: **AI vs Real Image Classifier** (live Render demo + GitHub repo, 10-item stack) and **Similar GOT Character** (live Streamlit demo + GitHub repo, NLP/t-SNE). Added GitHub `repo` links to the existing **AI Match Predictor** and **MaskDetect** entries (previously empty). New projects have `period: ""` (no dates on record — none invented).
- `src/components/sections/projects.tsx` — added `NLP` to the `domainIcon` map; the status pill now renders **Live** / **Source** (public repo, no lock) / **Private** so projects with a public GitHub no longer show a contradictory "Private" lock. No layout/typography changes.
- `src/app/globals.css` — `scroll-padding-top: 90px` → `1.25rem`. The old value stacked with `Section`'s `scroll-mt-24` **and** the section's top padding, landing nav clicks ~200px below the navbar. Now a single small offset; the navbar floats over each section's empty top padding.
- `src/components/primitives.tsx` — `Section` wrapper: removed the stacking `scroll-mt-24`; padding `py-24 md:py-32` → `pt-24 pb-24 md:pb-32` (lighter top, taller bottom) so nav landings sit a balanced ~40px below the navbar while between-section rhythm is preserved. Applies uniformly to About, Projects, Neural Studio, Experience, Stack, Certifications, Contact (all use `Section`).

### Earlier
- `src/app/globals.css` — added `.input-field` component utility (+ light-mode variant) for contact form inputs.
- `src/components/neural-studio/diagrams.tsx` — **[REBUILT 2026-07-10]** full rewrite. Now exports exactly the 6 required architecture diagrams (`CNNDiagram`, `ResNetDiagram`, `EfficientNetDiagram`, `LSTMDiagram`, `TransformerDiagram`, `ViTDiagram`). Removed the mismatched generic set (Attention/MLP/RNN/GradientField/TokenStream) left half-done by the prior session. Added ResNet, EfficientNet, ViT from scratch; kept & lightly polished CNN/LSTM/Transformer. Fixed a non-existent `fuchsia-soft` Tailwind class (now inline rgba).
- `src/components/neural-studio/neural-studio.tsx` — **[REBUILT 2026-07-10]** switched from selector+single-stage to the reference 2-column card grid; each card is an `ArchCard` with per-architecture accent, hover glow/lift, and its embedded diagram.

> **Fixed a broken build inherited from the prior session:** `neural-studio.tsx` imported `ResNetDiagram`/`EfficientNetDiagram`/`ViTDiagram` which `diagrams.tsx` no longer exported (TS2724/TS2305). Resolved by the rewrite above.

### Files that already existed (from a prior session, read & verified — not modified)
- Config: `package.json`, `tailwind.config.ts`, `tsconfig.json`, `next.config.mjs`, `postcss.config.mjs`, `.eslintrc.json`.
- `src/app/layout.tsx`, `src/lib/resume.ts` (single source of truth, matches resume), `src/lib/utils.ts`.
- `src/components/`: `navbar.tsx`, `theme-provider.tsx`, `marquee.tsx`, `footer.tsx`, `primitives.tsx`, `hero/hero.tsx`, `hero/neural-scene.tsx`, `neural-studio/neural-studio.tsx`, `neural-studio/diagrams.tsx`, `sections/about.tsx`, `sections/projects.tsx`, `sections/stack.tsx`.

---

## Remaining Tasks
- **Experience content** — kept EMPTY by Pulkit's decision (2026-07-10). Resume lists "AI Response Evaluator — Soul AI"; do NOT add until Pulkit provides/approves it.
- **Projects dates** — the two new projects (AI vs Real Image Classifier, Similar GOT Character) have no `period` (empty) because no dates were provided; supply dates to fill the card footer if wanted.
- Optional: browser visual QA of the new scroll-offset landing (dark + light) across all 7 nav sections to confirm the ~40px gap feels balanced on every viewport.
- Optional polish passes: cross-check every section against reference screenshots for spacing/typography parity; add GSAP-driven scroll effect if desired (GSAP is installed but not yet used).
- Optional: favicon / OG image.
- Optional: light-mode visual QA across all sections.

### Resolved decisions (2026-07-10)
- **Projects:** populate from the two resume projects — DONE.
- **Experience:** keep empty for now — HONORED.
- **Contact:** keep `mailto:` (no backend) — HONORED.
- **Nav label:** "Certifications" (instead of reference's "Writing") — kept.

---

## Current Architecture
```
D:/portfolio
├─ Claude_Code_Portfolio_Master_Instructions_v2.md   (project spec)
├─ PROJECT_PROGRESS.md                                (this file)
├─ Pulkit_Resume-2.pdf                                (source resume, root copy)
├─ certifiate/                                        (LOCAL cert source images)
│   ├─ download.png            → LeetCode 100 Days badge
│   ├─ download (1).png        → LeetCode 50 Days badge
│   └─ gwoc_certificate.jpeg   → GWOC '26 certificate
├─ reference images/                                  (15 design reference screenshots)
├─ public/
│   ├─ Pulkit_Sharma_Resume.pdf
│   ├─ assets/                 (empty)
│   └─ certificates/           (cert images used by the app)
├─ next.config.mjs · tailwind.config.ts · tsconfig.json · postcss.config.mjs · .eslintrc.json
└─ src/
    ├─ app/
    │   ├─ layout.tsx          (fonts, metadata, ThemeProvider, aurora bg)
    │   ├─ page.tsx            (assembles all sections)      ← created
    │   └─ globals.css         (design tokens, glass, utilities)
    ├─ lib/
    │   ├─ resume.ts           (SINGLE SOURCE OF TRUTH — all resume data + navItems + certifications)
    │   └─ utils.ts            (cn helper)
    └─ components/
        ├─ navbar.tsx · footer.tsx · marquee.tsx · theme-provider.tsx · primitives.tsx
        ├─ hero/               (hero.tsx, neural-scene.tsx)
        ├─ neural-studio/      (neural-studio.tsx, diagrams.tsx)
        └─ sections/           (about, projects, experience, stack, certifications, contact)
```
Key conventions: all data flows from `src/lib/resume.ts`; visual primitives shared via `components/primitives.tsx`; design tokens/utilities in `globals.css` + `tailwind.config.ts`.

---

## Design Decisions
- **Palette / language:** deep ink background with iris→cyan→fuchsia gradient accents, glassmorphism, faint grid, aurora radial glow — matched to the reference screenshots but implemented originally.
- **Type:** Space Grotesk (display/sans) + JetBrains Mono (labels/code) via `next/font`.
- **Dark-first** with a working light theme toggle (persisted).
- **Neural Studio** kept as a rich interactive selector + animated SVG stage (not a basic accordion), per spec — 6 required architectures.
- **Certifications** use only local images; Microsoft credential (text-only on resume, no image) rendered as a monogram card with no fake image.
- **Contact form** has no backend, so it composes a `mailto:` to the resume email rather than inventing an API — honest behavior, clearly labeled.
- **Projects & Experience** intentionally empty (placeholder layouts) until real content is provided — no invented content.
- Accessibility: reduced-motion support, semantic landmarks, aria labels on icon buttons, keyboard-focus styles on inputs.

---

## Pending Questions
_All initial questions were answered on 2026-07-10 (see Resolved decisions above). Open items:_
1. **Experience:** Still empty by request. Send the details (or say "use the Soul AI role from my resume") whenever you want it populated.
2. **Projects images/repos:** If you have screenshots or GitHub repo links for AI Match Predictor / MindSettler, share them and I'll add visual previews + source links.

---

## Last Working State
The site now renders end-to-end. This session: (1) created the missing `src/app/page.tsx`, Certifications, Experience (empty), and Contact sections + `.input-field` utility; (2) after Pulkit's answers, **populated the Projects section** from the two resume projects and added a `projects` export to `resume.ts`. Verified a clean `next build` (4/4 static pages, no type/lint errors) and an HTTP-200 runtime smoke test with all 8 section ids present.

Files touched this session: created `src/app/page.tsx`, `src/components/sections/{certifications,experience,contact}.tsx`, `PROJECT_PROGRESS.md`; modified `src/app/globals.css`, `src/lib/resume.ts` (added `projects`), `src/components/sections/projects.tsx` (placeholder → real cards).

## Next Immediate Task
**Neural Studio is done** (reference-grade card grid, 6 required architectures, original animated diagrams, clean build). Suggested next steps, in priority order:
1. **Visual QA of Neural Studio** against `reference images/` in the browser (dark + light) — check each of the 6 diagram panels fits its `aspect-[16/10]` box without clipping (esp. ViT token row width and EfficientNet coefficient labels near the right edge); nudge SVG viewBox/positions if any overflow.
2. Optional: add a subtle GSAP scroll effect somewhere (GSAP installed, still unused).
3. Still waiting on Pulkit for **project links** (live/GitHub URLs for AI Match Predictor & MaskDetect — `link`/`repo` in `resume.ts` empty and ready) and confirmation of **MaskDetect metadata** (derived from its screenshot, not the resume).
4. Do **not** invent Experience content — stays EMPTY until Pulkit provides it.

### Session 2026-07-10 (Neural Studio rebuild)
- Discovered the project was in a **broken mid-refactor state**: the prior session had begun pivoting Neural Studio toward the reference's card-grid layout — it rewrote `diagrams.tsx` with generic concept diagrams (Self-Attention/MLP/RNN/Optimization/Decoding) but left `neural-studio.tsx` importing the 6 architecture diagrams, so `next build`/`tsc` failed (missing `ResNetDiagram`/`EfficientNetDiagram`/`ViTDiagram`).
- **Resumed and completed that pivot correctly**, honoring the Master Instructions' required 6 architectures: rewrote `diagrams.tsx` (6 original architecture diagrams) and `neural-studio.tsx` (reference 2-col card grid with per-arch accent, hover glow/lift, embedded animated diagrams).
- New diagrams: ResNet (identity skip arc + travelling signal pulse), EfficientNet (animated compound-scaling depth/width/resolution meters with baseline ticks), ViT (3×3 patchify → [CLS]+patch-token sequence with positional-embedding row, patch/token color-mapped). Kept CNN (feature-map bank), LSTM (gated cell + cell-state pulse), Transformer (encoder-block stack).
- Verified: `tsc --noEmit` clean, `next build` passes (4/4 static pages, no type/lint errors), HTTP-200 runtime, all 6 architecture titles present in served HTML.

### Session 2026-07-10 (screenshots + MaskDetect)
- Copied 3 project screenshots from `project_image/` → `public/assets/projects/{ai-match-predictor,mindsettler,maskdetect}.png`.
- `resume.ts`: added `image`/`imageAlt`/`repo` fields to projects; refined AI Match Predictor tagline (IPL engine); **added MaskDetect** as a third project (Deep Learning) with content derived from its screenshot.
- `projects.tsx`: added 16:9 `next/image` preview per card, hover zoom, gradient overlay; refactored footer to explicit `Visit site` + `Code` (GitHub) action links (supports live + repo together); switched card wrapper from full-anchor to div to avoid nested-anchor issues.
- Verified: clean `next build` (4/4 static pages), HTTP-200 smoke test, all 3 project titles in HTML, all 3 screenshots serve 200 via the image optimizer.

### Session 2026-07-12 (2 new projects + navbar scroll-offset fix)
- **Projects (added 2):** prepended *AI vs Real Image Classifier* (TensorFlow/Keras CNN + transfer learning, FastAPI, React/TS, live on Render + GitHub) and *Similar GOT Character* (Word2Vec/TF-IDF + t-SNE dialogue similarity, live on Streamlit + GitHub) to `projects` in `resume.ts`. Both use the existing card style/animations — no new components.
- **Projects (updated 2):** added GitHub `repo` links to *AI Match Predictor* (`AI-Match-Predictor`) and *MaskDetect* (`face_mask_detection_using_cnn`). Descriptions/UI otherwise untouched, per instructions.
- **Images:** copied `project_image/ai-vs-real-image-classification.png` → `public/assets/projects/ai-vs-real-image-classifier.png` and `project_image/similar-got-character.png` → `public/assets/projects/similar-got-character.png`. Auto-matched by title. Local only; no placeholders/remote images.
- **Card badge:** `projects.tsx` status pill now distinguishes **Live** / **Source** (public repo) / **Private**, so the two updated projects don't show a contradictory "Private" lock. Added `NLP` to `domainIcon`.
- **Layout fix (scroll offset):** the navbar→section gap was caused by three stacked offsets — `html scroll-padding-top: 90px` + `Section scroll-mt-24` (96px) + the section's own `py-24/32` top padding — landing nav clicks ~200px+ below the navbar. Fixed by using a **single** small offset (`scroll-padding-top: 1.25rem`), removing `scroll-mt-24` from `Section`, and rebalancing its padding to `pt-24 pb-24 md:pb-32`. Nav links now land the section header a balanced ~40px below the navbar across all 7 sections (About, Projects, Neural Studio, Experience, Stack, Certifications, Contact — all share `Section`). No global padding slash; between-section rhythm preserved via the taller bottom padding.
- Verified: clean `next build` (4/4 static pages, no type/lint errors), HTTP-200 smoke test — all **5** project titles in served HTML, both new screenshots serve 200 via the image optimizer, and all four GitHub repo URLs present in the HTML.

### Session 2026-07-12 (performance / smoothness pass — no visual changes)
**Diagnosis.** Profiling the components (not just the recent diff) showed the dominant continuous cost was the Hero's **Three.js scene running its render loop even when scrolled off-screen**. `NeuralScene`'s two `useFrame` callbacks (network rotation + per-node scaling, and 60 particles whose positions are rewritten into a GPU buffer every frame at up to 2× DPR) ran at full `requestAnimationFrame` regardless of scroll position or tab visibility — so every other section (Projects, Neural Studio, …) was competing with a full WebGL frame budget while you scrolled. The large source screenshots were **not** a scroll-lag cause: Next's optimizer already downscales per-device and serves WebP, so the client never downloads the ~1.9 MB PNGs.

**Optimizations made (UI visually identical):**
- **`src/components/hero/neural-scene.tsx` — pause the WebGL loop off-screen.** Wrapped the `<Canvas>` in a ref'd container and drive `frameloop` from an `IntersectionObserver` (`rootMargin: 120px`) **plus** `document.visibilitychange`: `frameloop="always"` only while the hero is on screen and the tab is visible, otherwise `"never"` (zero rAF, zero GPU work). The r3f clock only advances on rendered frames, so the animation resumes seamlessly and looks identical whenever it's actually in view. This is the primary smoothness fix — it frees the frame budget for scrolling/hover/nav everywhere else on the page (checklist items 5, 8, 9). Already-good: `NeuralScene` was already `dynamic(..., { ssr: false })` (lazy, client-only), so no extra lazy-loading was needed (item 7).
- **`next.config.mjs` — enable AVIF then WebP** (`images.formats`). The ~1900px source screenshots now ship as tiny per-device AVIF/WebP variants (verified: the 1.86 MB `similar-got-character.png` is delivered as **31.7 KB AVIF** / 42 KB WebP, negotiated by `Accept`). No new dependency; rendered result identical (items 6, 16–18).

**Checked and intentionally left as-is (already correct, or changing them would alter visuals):**
- **Project / certification images** already use `next/image` correctly with `fill` + accurate `sizes` (`(min-width:1024px) 50vw, 100vw` for the 2-col project grid; `(max-width:768px) 100vw, 33vw` for the 3-col cert grid) and are lazy by default (below the fold → no `priority`, which is correct) (items 17, 18). Source PNGs (~1900px) are a sensible master size and are downscaled by the optimizer, so no re-encode/resize was needed and none was done (no `sharp`/tool dependency added).
- **Navbar** uses one passive scroll listener (only flips a boolean; React bails out on unchanged state → no re-render storm) and a single `IntersectionObserver` for active-section highlighting — not per-scroll animation work (items 4, 10, 13, 15).
- **`Reveal` / `Stagger`** use `useInView({ once: true })` — each entrance animation fires once and then stops; observers are lightweight and passive (item 12).
- **Neural Studio SVG diagrams** contain `repeat: Infinity` Framer Motion loops, but they animate a handful of SVG attributes (cheap, GPU-friendly) and are core to the section's design. Gating them per-viewport would require threading paused state through 6 distinct diagrams and risk visible re-animation on scroll-back, so they were left intact to keep the UI **visually identical** (the heavy continuous cost — WebGL — was the one that mattered and is now gated).
- **Marquee** is a pure CSS transform keyframe (GPU-composited, negligible cost) — unchanged.
- **No new dependencies** were introduced this or last session; First Load JS is unchanged at **156 kB** (item 19).

**Verified:** clean `next build` (4/4 static pages, no type/lint errors); `next start` smoke test HTTP 200; AVIF/WebP content-negotiation confirmed via `curl` Accept headers; hero animation still runs while the hero is in view and freezes when scrolled away. Scrolling, hover (project/arch cards), and nav-link jumps remain smooth with the WebGL loop no longer contending for frames off-screen.
