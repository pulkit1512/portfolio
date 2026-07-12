"use client";

import { motion } from "framer-motion";
import { Reveal } from "../primitives";
import { useTheme } from "../theme-provider";

/**
 * Neural Studio — two large feature cards that sit ABOVE the architecture grid.
 * They reuse the exact card chrome of `ArchCard` (accent glow, top line, hover
 * lift, card-surface, bordered viz stage with a faint grid) so the transition
 * into the existing 6-card grid is seamless. Every visual is hand-built with
 * SVG + Framer Motion — no external/reference assets are used.
 */

/* ============================ shared card shell ============================ */

function FeatureCard({
  index,
  tag,
  formula,
  title,
  description,
  accent,
  children,
}: {
  index: string;
  tag: string;
  formula: string;
  title: string;
  description: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl card-surface p-6 shadow-card transition-colors duration-500 hover:border-white/15 md:p-8"
    >
      {/* accent glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(40rem 22rem at 85% -10%, color-mix(in srgb, ${accent} 13%, transparent), transparent 60%)`,
        }}
      />
      {/* top accent line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(to right, transparent, ${accent}, transparent)`,
        }}
      />

      {/* header — eyebrow + formula */}
      <div className="relative flex items-center justify-between gap-4">
        <span className="mono-label">
          {index} · {tag}
        </span>
        <span className="font-mono text-xs" style={{ color: accent }}>
          {formula}
        </span>
      </div>

      {/* title + description */}
      <h3 className="relative mt-4 text-2xl font-semibold tracking-tight md:text-[28px]">
        {title}
      </h3>
      <p className="relative mt-2 max-w-xl text-sm leading-relaxed text-muted md:text-[15px]">
        {description}
      </p>

      {/* visualization stage */}
      <div className="relative mt-6 flex-1">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-[var(--nd-stage)] p-4 md:p-5">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative transition-transform duration-500 ease-out group-hover:scale-[1.01]">
            {children}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ===================== card 1 · self-attention matrix ===================== */

const TOKENS = [
  "The", "model", "learns", "to", "attend", "to",
  "every", "token", "in", "the", "long", "sequence",
];

// deterministic pseudo-random in [0,1) — keeps SSR/CSR output identical.
function hash(i: number, j: number) {
  const x = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

// attention weight: a soft diagonal band + a light attention "sink" on the
// first tokens + a touch of deterministic noise, so it reads like a real map.
function weight(i: number, j: number) {
  const sigma = 1.7;
  const diag = Math.exp(-((j - i) ** 2) / (2 * sigma * sigma));
  const sink = j <= 1 ? 0.16 : 0;
  const noise = hash(i, j) * 0.16;
  return Math.min(1, diag * 0.92 + sink + noise * 0.6 + 0.04);
}

// Theme-aware heat ramp. Dark: slate → purple → magenta (unchanged original).
// Light: pale lavender → violet → deep magenta, so low cells stay subtle and
// high cells read with strong contrast against the light panel (not inverted —
// each stop is picked for readability).
const HEAT_STOPS: Record<"dark" | "light", [number, number, number][]> = {
  dark: [
    [18, 22, 32],
    [124, 92, 168],
    [240, 171, 252],
  ],
  light: [
    [226, 228, 238],
    [150, 104, 205],
    [156, 26, 168],
  ],
};

function heat(v: number, theme: "dark" | "light") {
  const stops = HEAT_STOPS[theme];
  const t = Math.max(0, Math.min(1, v));
  let a: [number, number, number], b: [number, number, number], seg: number;
  if (t < 0.55) {
    a = stops[0];
    b = stops[1];
    seg = t / 0.55;
  } else {
    a = stops[1];
    b = stops[2];
    seg = (t - 0.55) / 0.45;
  }
  const c = a.map((av, k) => Math.round(av + (b[k] - av) * seg));
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
}

const MATRIX = TOKENS.map((_, i) => TOKENS.map((_, j) => weight(i, j)));

function AttentionMatrix() {
  const { theme } = useTheme();
  const n = TOKENS.length;
  const x0 = 46;
  const y0 = 4;
  const grid = 250;
  const cell = grid / n;
  const pad = 1.4;

  return (
    <svg
      viewBox="0 0 304 302"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Self-attention weight matrix over a 12-token sequence"
    >
      {/* cells */}
      {MATRIX.map((rowArr, i) =>
        rowArr.map((v, j) => (
          <rect
            key={`${i}-${j}`}
            x={x0 + j * cell + pad}
            y={y0 + i * cell + pad}
            width={cell - pad * 2}
            height={cell - pad * 2}
            rx={1.5}
            fill={heat(v, theme === "light" ? "light" : "dark")}
            opacity={(theme === "light" ? 0.5 : 0.35) + v * (theme === "light" ? 0.5 : 0.65)}
          />
        ))
      )}

      {/* row labels */}
      <g className="text-muted">
        {TOKENS.map((t, i) => (
          <text
            key={`r-${i}`}
            x={x0 - 5}
            y={y0 + i * cell + cell / 2}
            textAnchor="end"
            dominantBaseline="middle"
            fill="currentColor"
            className="font-mono"
            style={{ fontSize: 8 }}
            opacity={0.78}
          >
            {t}
          </text>
        ))}
      </g>

      {/* column labels (rotated) */}
      <g className="text-muted">
        {TOKENS.map((t, j) => {
          const cx = x0 + j * cell + cell / 2;
          const cy = y0 + grid + 8;
          return (
            <text
              key={`c-${j}`}
              x={cx}
              y={cy}
              textAnchor="end"
              fill="currentColor"
              className="font-mono"
              style={{ fontSize: 7.5 }}
              opacity={0.7}
              transform={`rotate(-45 ${cx} ${cy})`}
            >
              {t}
            </text>
          );
        })}
      </g>
    </svg>
  );
}

const QKV = [
  { label: "Queries", letter: "Q", color: "var(--nd-cyan)", word: "the" },
  { label: "Keys", letter: "K", color: "var(--nd-fuchsia)", word: "model" },
  { label: "Values", letter: "V", color: "var(--nd-mint)", word: "learns" },
];

function QKVPanels() {
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      {QKV.map((p) => (
        <div
          key={p.letter}
          className="rounded-xl border border-line bg-[var(--nd-stage)] px-4 py-3 transition-colors duration-500 group-hover:border-white/10"
        >
          <span className="mono-label">{p.label}</span>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span
              className="font-mono text-2xl font-semibold leading-none"
              style={{ color: p.color }}
            >
              {p.letter}
            </span>
            <span className="font-mono text-sm text-muted">
              → &ldquo;{p.word}&rdquo;
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ======================= card 2 · feed-forward (MLP) ====================== */

const YTOP = 70;
const YBOT = 250;
const nodeY = (n: number, k: number) =>
  n === 1 ? (YTOP + YBOT) / 2 : YTOP + (k * (YBOT - YTOP)) / (n - 1);

const MLP_LAYERS = [
  { label: "Input", x: 74, d: 4 },
  { label: "H1", x: 224, d: 7 },
  { label: "H2", x: 374, d: 6 },
  { label: "Output", x: 500, d: 3 },
];

const MLP_NODES = MLP_LAYERS.map((L) =>
  Array.from({ length: L.d }, (_, k) => ({ x: L.x, y: nodeY(L.d, k) }))
);

type Edge = { x1: number; y1: number; x2: number; y2: number };

const MLP_EDGES: Edge[] = [];
for (let l = 0; l < MLP_NODES.length - 1; l++) {
  for (const a of MLP_NODES[l]) {
    for (const b of MLP_NODES[l + 1]) {
      MLP_EDGES.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y });
    }
  }
}

// two highlighted forward paths (node index per layer)
const HL_PATHS = [
  [0, 1, 3, 1],
  [2, 4, 1, 0],
];
const HL_EDGES: Edge[] = [];
const ACTIVE = new Set<string>();
HL_PATHS.forEach((path) => {
  path.forEach((idx, li) => {
    ACTIVE.add(`${li}-${idx}`);
    if (li < path.length - 1) {
      const a = MLP_NODES[li][path[li]];
      const b = MLP_NODES[li + 1][path[li + 1]];
      HL_EDGES.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y });
    }
  });
});

function MLPDiagram() {
  return (
    <svg
      viewBox="0 0 560 300"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Feed-forward network with layer sizes 4, 7, 6 and 3"
    >
      {/* base mesh */}
      <g stroke="var(--nd-line-faint)" strokeWidth={0.6}>
        {MLP_EDGES.map((e, i) => (
          <line key={`e-${i}`} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} />
        ))}
      </g>

      {/* highlighted flowing paths */}
      <g stroke="var(--nd-cyan)" strokeWidth={1.1} strokeLinecap="round">
        {HL_EDGES.map((e, i) => (
          <motion.line
            key={`h-${i}`}
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            strokeDasharray="4 6"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -20 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
            opacity={0.85}
          />
        ))}
      </g>

      {/* nodes */}
      {MLP_NODES.map((layer, li) =>
        layer.map((nd, k) => {
          const active = ACTIVE.has(`${li}-${k}`);
          return (
            <g key={`n-${li}-${k}`}>
              <circle
                cx={nd.x}
                cy={nd.y}
                r={6.5}
                fill="var(--nd-node)"
                stroke={active ? "var(--nd-cyan)" : "var(--nd-line)"}
                strokeWidth={1.2}
              />
              <circle
                cx={nd.x}
                cy={nd.y}
                r={2.4}
                fill={
                  active
                    ? "var(--nd-cyan)"
                    : "color-mix(in srgb, var(--nd-cyan) 40%, transparent)"
                }
              />
            </g>
          );
        })
      )}

      {/* layer labels (top) */}
      <g className="text-muted" fill="currentColor" opacity={0.82}>
        {MLP_LAYERS.map((L) => (
          <text
            key={`l-${L.label}`}
            x={L.x}
            y={44}
            textAnchor="middle"
            className="font-mono"
            style={{ fontSize: 9, letterSpacing: 1 }}
          >
            {L.label.toUpperCase()}
          </text>
        ))}
      </g>

      {/* dimension labels (bottom) */}
      <g className="text-muted" fill="currentColor" opacity={0.6}>
        {MLP_LAYERS.map((L) => (
          <text
            key={`d-${L.label}`}
            x={L.x}
            y={278}
            textAnchor="middle"
            className="font-mono"
            style={{ fontSize: 9 }}
          >
            d={L.d}
          </text>
        ))}
      </g>
    </svg>
  );
}

/* ============================== exported row ============================== */

export function NeuralStudioFeatures() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Reveal>
        <FeatureCard
          index="01"
          tag="Self-Attention"
          formula="softmax(QKᵀ / √dₖ) · V"
          title="Scaled dot-product attention"
          description="Every token gets to query every other token. Heavy upfront — O(n²) — but parallelizable, and the inductive bias that unlocked LLMs."
          accent="var(--nd-iris)"
        >
          <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
            <div className="min-h-[240px] w-full md:min-h-[300px]">
              <AttentionMatrix />
            </div>
            <QKVPanels />
          </div>
        </FeatureCard>
      </Reveal>

      <Reveal delay={0.05}>
        <FeatureCard
          index="02"
          tag="MLP"
          formula="y = σ(Wx + b)"
          title="Feed-forward, the workhorse"
          description="Stacked linear + nonlinearity. Old, simple, and 60% of the FLOPs in every transformer block."
          accent="var(--nd-cyan)"
        >
          <div className="min-h-[240px] w-full md:min-h-[300px]">
            <MLPDiagram />
          </div>
        </FeatureCard>
      </Reveal>
    </div>
  );
}
