# Current Project Status

> Portfolio for **Pulkit Sharma** — B.Tech Artificial Intelligence @ SVNIT, Surat.
> Built with Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion + GSAP + Three.js.
> **All personal content comes only from the resume** (`public/Pulkit_Sharma_Resume.pdf`).
> Design quality mirrors the reference screenshots in `reference images/` (original implementation, no copied assets/text).
> Certificate images come only from the local `certifiate/` folder (copied into `public/certificates/`).

_Last updated: 2026-07-12 (clean root URL for Home; theme-aware Neural Studio diagrams for light mode; sequential Neural Studio numbering)_

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

### Session 2026-07-12 (Neural Studio — two large feature cards added on top)
**Goal.** Per a new reference image (`update_neural_studio/update_1.png`), add two premium feature cards to the **top** of the Neural Studio section — above the existing 6-card architecture grid — without redesigning anything else. New section order: heading → **[Self-Attention | MLP]** → CNN, ResNet, EfficientNet, LSTM, Transformer, ViT (all existing content untouched).

**New component created:**
- **`src/components/neural-studio/feature-cards.tsx`** — exports `NeuralStudioFeatures` (the responsive 2-up row) plus internal building blocks:
  - `FeatureCard` — the shared card shell. Reuses the **exact chrome of `ArchCard`** (`card-surface`, `rounded-3xl`, `shadow-card`, hover `y:-6` spring lift, radial accent glow + top accent line on hover, bordered `bg-black/25` viz stage with a faint `bg-grid`) so the two new cards read as the same family as the grid below. Header = `mono-label` eyebrow (`NN · TAG`) left + accent-coloured mono formula right; large title (`text-2xl md:text-[28px]`); muted description.
  - `AttentionMatrix` — a hand-built **SVG** 12×12 self-attention heatmap over a token sequence ("The model learns to attend to every token in the long sequence"). Weights are a **deterministic** soft-diagonal band + attention sink + hashed noise (no `Math.random` → SSR/CSR identical, no hydration mismatch), colour-mapped dark-slate → purple → magenta. Right-aligned row labels + rotated (-45°) column labels, all in `font-mono`/`text-muted`.
  - `QKVPanels` — three stacked bordered panels (Queries/Keys/Values) with big accent letters **Q** (`#7dd3fc`), **K** (`#f0abfc`), **V** (`#6ee7b7`) and `→ "the/model/learns"`.
  - `MLPDiagram` — a hand-built **SVG** feed-forward net, layers d=4·7·6·3, full faint mesh + two highlighted cyan forward paths with a light `strokeDashoffset` flow (6 animated lines only), ring nodes with active cyan centres, `INPUT/H1/H2/OUTPUT` labels on top and `d=…` labels on the bottom. Card 1 formula `softmax(QKᵀ / √dₖ) · V`; Card 2 formula `y = σ(Wx + b)`.
- **Card 1 accent** iris `#a78bfa`, **Card 2 accent** cyan `#7dd3fc` — both already in the palette; nothing new introduced.

**Files modified:**
- `src/components/neural-studio/neural-studio.tsx` — imported `NeuralStudioFeatures`; rendered it in a `mt-14` block **between** the `SectionHeader` and the architecture grid; changed the grid's top margin `mt-14 → mt-6` so the gap between the feature row and the grid matches the intra-grid `gap-6` rhythm (seamless transition). No architecture data or `ArchCard` markup changed.
- `PROJECT_PROGRESS.md` — this entry.

**Responsiveness:** `NeuralStudioFeatures` is `grid gap-6 lg:grid-cols-2` → two cards side-by-side on desktop, stacked on tablet/mobile. Inside Card 1, the matrix + Q/K/V is `md:grid-cols-[1.4fr_1fr]` → side-by-side on ≥md, stacked (matrix over Q/K/V) below. Both SVGs use `viewBox` + `preserveAspectRatio` with `h-full w-full` and a `min-h-[240px] md:min-h-[300px]` stage, so they scale fluidly.

**Performance:** visuals are static SVG except the single `group-hover` viz scale and 6 lightweight `strokeDashoffset` lines on the MLP (consistent with the existing animated diagrams). No canvas/WebGL, no new dependency, deterministic data computed once at module scope. First Load JS **156 → 158 kB**, page `/` **68.8 → 70.6 kB**.

**Verified:** clean `next build` (4/4 static pages, no type/lint errors); `next start` HTTP 200; byte-offset check confirms render order **heading → Self-Attention → MLP → CNN → …**; all six existing architecture cards still present in the served HTML.

## Remaining Tasks (current)
- **New project dates** — AI vs Real Image Classifier & Similar GOT Character have no `period` (none supplied; none invented).
- **Optional browser QA** — confirm the Neural Studio diagrams in **light mode** on a real browser (the fix was verified via build + CSS-variable inspection; a visual pass across all 8 cards is still worthwhile). Also spot-check that `color-mix()` renders on the target browsers (used for hover glows / a few tints; modern-browser feature with graceful degradation).
- Optional: favicon / OG image; optional GSAP scroll effect (installed, unused).

> **Note (2026-07-12):** the Experience section was **removed** at Pulkit's request — the prior "keep Experience empty until provided" item no longer applies.

## Session 2026-07-12 (LSTM rebuild · EfficientNet→RNN · remove Experience · add Home nav)
Scope was strictly limited to the four requested changes; no other section, animation, color, spacing, typography, or layout was touched. References studied from `update_neural_studio/replace_lstm.png` and `rnn_image.png` (recreated as vector SVG — images never used directly). Clean `next build` (4/4 static pages, no type/lint errors) + `next start` HTTP-200 smoke test with byte-offset ordering + section-id checks.

**Files modified**
- `src/components/neural-studio/diagrams.tsx`
  - **LSTM diagram rebuilt** (`LSTMDiagram`, Task 1): faithful recreation of `replace_lstm.png` — `LSTM · CELL` title, dashed cell boundary, **cyan** cell-state rail (`Cₜ₋₁ → Cₜ`) carrying the `×` forget and `+` input operators, **fuchsia** hidden-state rail (`hₜ₋₁ → hₜ`), four gates on vertical stems: `fₜ` (σ, iris), `iₜ` (σ, cyan), `gₜ` (tanh, cyan), `oₜ` (σ, iris), and the existing cyan pulse riding the top rail. Rail-to-rail stems (dashed for the inner two) now connect both rails cleanly; `+` repositioned to x=325 (between `gₜ` and `oₜ`) per the reference. Only the visualization changed — the LSTM **card title, blurb, formula, index, styling, padding, animations, hover** are all untouched (card data lives in `neural-studio.tsx` and was not edited for LSTM).
  - **`EfficientNetDiagram` removed; `RNNDiagram` added** (Task 2): a single recurrent cell unrolled across 5 time-steps — rounded cyan hidden cells `h₁…h₅`, `xₜ` input arrows from below, `yₜ` output arrows above, and animated dashed **recurrence links** (`strokeDashoffset` flow) passing state left→right. Deterministic layout, responsive `viewBox`. Added a `SUB` subscript helper; updated the module header comment (EfficientNet → RNN).
- `src/components/neural-studio/neural-studio.tsx`
  - Import swapped `EfficientNetDiagram → RNNDiagram`.
  - The `efficientnet` architecture entry (slot 03) replaced by the **RNN** card: `index:"03"`, `tag:"RNN"`, `title:"Recurrence over time"`, `formula:"hₜ = tanh(Wₓxₜ + Uhₜ₋₁ + b)"`, the provided description, `meta:"sequential · shared weights"`, accent `#6ee7b7` (kept the slot's mint accent), `Diagram: RNNDiagram`. Card order preserved: CNN · ResNet · **RNN** · LSTM · Transformer · ViT. `ArchCard` shell (styling/animation/hover/spacing) unchanged, so the RNN card matches every other Neural Studio card.
- `src/app/page.tsx` (Task 3): removed the `Experience` import and `<Experience />` render — sections below (Stack → Certifications → Contact) flow up naturally; no empty gap.
- `src/lib/resume.ts` (Tasks 3 + 4): `navItems` — removed `{ Experience → #experience }`; **added `{ Home → #home }` as the first item**. `#home` targets the existing Hero `id="home"`, so the navbar's existing `IntersectionObserver` now highlights **Home** as active while the Hero is in view (no navbar code change needed — it maps over `navItems`, and smooth scroll + the layout-animated active pill apply identically).

**Files deleted**
- `src/components/sections/experience.tsx` — the Experience section component (and its placeholder timeline) removed entirely. Verified no remaining `Experience`/`#experience`/`EfficientNet` references in `src/` (except unrelated prose in the résumé summary).

**Verification**
- `next build` clean (4/4 static pages, no type/lint errors); First Load JS 157 kB.
- `next start` HTTP 200. Byte-offset order confirmed **CNN → ResNet → RNN (Recurrence over time) → LSTM → Transformer → ViT**; `RNN` + `hₜ = tanh` present, `EfficientNet`/`compound scaling` absent. `id="experience"` count **0**; all remaining ids present (`home, about, projects, neural-studio, stack, certifications, contact`). Nav shows **Home** first (desktop + mobile), no Experience link.

## Session 2026-07-12 (clean Home URL · light-mode diagram contrast · sequential numbering)
Three targeted fixes only; no redesign, and no change to animations, spacing, typography, layout, responsiveness, hover effects, or section order. **Dark mode is byte-for-byte unchanged** (verified: the new `--nd-*` dark values equal the original hard-coded colors). Clean `next build` + `next start` HTTP-200 smoke tests.

**1 · Remove `#home` from the URL** — `src/components/navbar.tsx`
- Added a `handleNav(e, href)` click handler. For `href === "#home"` it calls `e.preventDefault()`, `window.scrollTo({ top: 0, behavior: "smooth" })`, sets the active item, and **`history.replaceState(null, "", pathname + search)`** so the address bar stays the clean root URL (`/`) — never `/#home`. All other links keep their normal hash behaviour, so browser back/forward still works. Wired onto the brand logo, every desktop nav link, and every mobile nav link (the mobile handler also closes the menu). Active highlighting is preserved (the existing `IntersectionObserver` still lights up Home when the Hero is in view). Imported `type MouseEvent` from React for the handler signature.

**2 · Fix Neural Studio diagrams in light mode (light theme only)** — `src/app/globals.css`, `src/components/neural-studio/diagrams.tsx`, `feature-cards.tsx`, `neural-studio.tsx`
- Introduced a **theme-aware diagram palette** as CSS variables in `globals.css`: `--nd-stage`, `--nd-cyan`, `--nd-iris`, `--nd-fuchsia`, `--nd-mint`, `--nd-node`, `--nd-line`, `--nd-line-faint`, `--nd-line-strong`. Dark values are identical to the originals; the `.light` overrides use **darker, saturated ink** (cyan `#0e7490`, iris `#6d28d9`, fuchsia `#a21caf`, mint `#047857`), dark translucent lines (`rgba(10,12,20,·)`), a near-white node fill (`#ffffff`) so nodes read as hollow rings, and a light stage (`rgba(10,12,20,.035)`). Not an inversion — each element got a purpose-picked accessible hue.
- `diagrams.tsx`: the shared `C` palette now points at `var(--nd-*)`; replaced every hard-coded `rgba(255,255,255,·)` line, `#0a0c12` node fill, iris tint, CNN tile border, Transformer spine, and the `× N` accent with theme variables/`color-mix`. Refactored `TBlock` (Transformer) to theme-aware inline styles so its blocks stay visible on light cards. CNN feature-map tiles keep their self-contained dark mini-canvas (high-contrast in both themes) by design. Applies to **all** cards: ResNet, RNN, LSTM, Transformer, ViT (SVG) + CNN.
- `feature-cards.tsx` (Self-Attention + Feed-Forward/MLP): stage bg → `var(--nd-stage)`; MLP mesh/nodes/paths and Q/K/V accents → theme variables; hover glow uses `color-mix`. The **attention heatmap** now has a theme-aware ramp (`useTheme()`): dark = original slate→purple→magenta; light = pale-lavender→violet→deep-magenta with a raised opacity floor so low cells stay subtle but structure is legible. (`theme` defaults to `dark` on server + first client paint → no hydration mismatch; re-renders to light after mount.)
- `neural-studio.tsx`: `ArchCard` diagram stage → `var(--nd-stage)`; hover glow switched from `${accent}22` hex-alpha to `color-mix(in srgb, ${accent} 13%, transparent)` so accents can be theme variables; each architecture's `accent` is now a `var(--nd-*)` (so the header **equation**, top line, and meta dot are readable in both themes).

**3 · Fix Neural Studio numbering** — `src/components/neural-studio/neural-studio.tsx`
- Renumbered the architecture grid so the whole section is sequential across all 8 cards (feature cards keep 01–02): CNN `01→03`, ResNet `02→04`, RNN `03→05`, LSTM `04→06`, Transformer `05→07`, ViT `06→08`. Final order verified in served HTML: **01 Self-Attention · 02 MLP · 03 Convolution · 04 Residual · 05 RNN · 06 Recurrence(LSTM) · 07 Attention(Transformer) · 08 Vision(ViT)** — no duplicates, no skips. (Projects-section eyebrows are a separate, untouched numbering.)

**Verification**
- `next build` clean (no type/lint errors); First Load JS 158 kB.
- CSS inspection: dark `--nd-*` equal the original hex/rgba (dark unchanged); `.light` overrides present and darker/saturated.
- Served-HTML check: sequential 01–08 Neural Studio numbering; `handleNav` + `history.replaceState` present in the navbar bundle.
- Not done here (no browser/GPU in this env): a live visual pass of light mode and a click-test of the Home URL behaviour — recommended as manual QA.
