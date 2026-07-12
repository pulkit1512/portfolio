"use client";

/**
 * Neural Studio diagrams — six hand-built figures, one per required
 * architecture (CNN · ResNet · RNN · LSTM · Transformer · ViT).
 * All original SVG / CSS, no external assets or copied artwork.
 */

import { motion } from "framer-motion";

/* Deterministic pseudo-random so SSR and client render identically. */
const rand = (a: number, b: number) => {
  const s = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
  return s - Math.floor(s);
};

/**
 * Theme-aware palette — resolves to the dark values in dark mode (identical to
 * the original hex) and to darker, saturated ink in light mode via the
 * `--nd-*` CSS variables (see globals.css). SVG `fill`/`stroke`/`stop-color`
 * all accept `var(--…)`, so every diagram adapts to the theme automatically.
 */
const C = {
  cyan: "var(--nd-cyan)",
  iris: "var(--nd-iris)",
  fuchsia: "var(--nd-fuchsia)",
  mint: "var(--nd-mint)",
  muted: "var(--muted)",
};

/* Unicode subscripts for time-step labels (h₁ … x₅). */
const SUB = ["₁", "₂", "₃", "₄", "₅"];

/* Shared arrowhead marker set (unique ids so multiple diagrams can coexist). */
function Arrow({ id, color = C.muted }: { id: string; color?: string }) {
  return (
    <marker
      id={id}
      markerWidth="7"
      markerHeight="7"
      refX="5"
      refY="2.5"
      orient="auto"
    >
      <path d="M0,0 L5,2.5 L0,5 Z" fill={color} />
    </marker>
  );
}

/* ---------------------------------------------------------------- 01 · CNN */

function FeatureTile({ id }: { id: number }) {
  const P = 7;
  const angle = rand(id, 3) * Math.PI;
  const ca = Math.cos(angle);
  const sa = Math.sin(angle);
  const freq = 0.9 + rand(id, 9) * 0.8;
  const phase = rand(id, 5) * 6;
  return (
    <div
      className="grid overflow-hidden rounded-md border border-line"
      style={{ gridTemplateColumns: `repeat(${P}, 1fr)`, aspectRatio: "1" }}
    >
      {Array.from({ length: P * P }, (_, k) => {
        const x = k % P;
        const y = Math.floor(k / P);
        const v =
          Math.sin((x * ca + y * sa) * freq + phase) +
          (rand(id + x, y) - 0.5) * 0.6;
        let bg: string;
        if (v > 0.35)
          bg = `rgba(125,211,252,${(0.25 + 0.5 * Math.min(1, v)).toFixed(2)})`;
        else if (v < -0.35)
          bg = `rgba(240,171,252,${(0.25 + 0.5 * Math.min(1, -v)).toFixed(2)})`;
        else bg = "rgba(8,10,16,0.9)";
        return <div key={k} style={{ background: bg }} />;
      })}
    </div>
  );
}

export function CNNDiagram() {
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
        <span>learned filters</span>
        <span>feature maps · 15ch</span>
      </div>
      <div className="grid grid-cols-5 gap-2.5">
        {Array.from({ length: 15 }, (_, i) => (
          <FeatureTile key={i} id={i + 1} />
        ))}
      </div>
      <div className="flex items-center gap-2 font-mono text-[9px] text-muted">
        <span
          className="inline-block h-2 w-2 rounded-[2px]"
          style={{ background: "var(--nd-cyan)" }}
        />
        activation +
        <span
          className="inline-block h-2 w-2 rounded-[2px]"
          style={{ background: "var(--nd-fuchsia)" }}
        />
        activation −
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- 02 · RESNET */

export function ResNetDiagram() {
  const y = 172;
  return (
    <svg viewBox="0 0 480 250" className="h-full w-full">
      <defs>
        <Arrow id="rn-arrow" />
        <linearGradient id="rn-skip" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={C.cyan} stopOpacity="0.12" />
          <stop offset="0.5" stopColor={C.cyan} stopOpacity="0.9" />
          <stop offset="1" stopColor={C.cyan} stopOpacity="0.12" />
        </linearGradient>
      </defs>

      {/* main path */}
      <line
        x1={40}
        y1={y}
        x2={445}
        y2={y}
        stroke="var(--nd-line-faint)"
        strokeWidth={2}
      />

      {/* input */}
      <circle cx={40} cy={y} r={7} fill="var(--nd-node)" stroke={C.iris} />
      <text
        x={40}
        y={y + 26}
        textAnchor="middle"
        fill={C.muted}
        fontFamily="monospace"
        fontSize="11"
      >
        x
      </text>

      {/* weight layer 1 */}
      <rect
        x={92}
        y={y - 24}
        width={94}
        height={48}
        rx={10}
        fill="color-mix(in srgb, var(--nd-iris) 12%, transparent)"
        stroke={C.iris}
        strokeOpacity={0.5}
      />
      <text
        x={139}
        y={y - 2}
        textAnchor="middle"
        fill="currentColor"
        fontFamily="monospace"
        fontSize="11"
      >
        weight
      </text>
      <text
        x={139}
        y={y + 13}
        textAnchor="middle"
        fill={C.muted}
        fontFamily="monospace"
        fontSize="9"
      >
        3×3 conv
      </text>

      {/* relu */}
      <text
        x={215}
        y={y - 7}
        textAnchor="middle"
        fill={C.mint}
        fontFamily="monospace"
        fontSize="10"
      >
        relu
      </text>

      {/* weight layer 2 */}
      <rect
        x={243}
        y={y - 24}
        width={94}
        height={48}
        rx={10}
        fill="color-mix(in srgb, var(--nd-iris) 12%, transparent)"
        stroke={C.iris}
        strokeOpacity={0.5}
      />
      <text
        x={290}
        y={y - 2}
        textAnchor="middle"
        fill="currentColor"
        fontFamily="monospace"
        fontSize="11"
      >
        weight
      </text>
      <text
        x={290}
        y={y + 13}
        textAnchor="middle"
        fill={C.muted}
        fontFamily="monospace"
        fontSize="9"
      >
        3×3 conv
      </text>

      {/* add node */}
      <circle
        cx={394}
        cy={y}
        r={15}
        fill="var(--nd-node)"
        stroke={C.fuchsia}
        strokeWidth={1.4}
      />
      <text x={394} y={y + 6} textAnchor="middle" fill="currentColor" fontSize="17">
        +
      </text>

      {/* output */}
      <line
        x1={409}
        y1={y}
        x2={452}
        y2={y}
        stroke={C.muted}
        markerEnd="url(#rn-arrow)"
      />
      <text
        x={462}
        y={y + 5}
        textAnchor="middle"
        fill={C.fuchsia}
        fontFamily="monospace"
        fontSize="11"
      >
        y
      </text>

      {/* connecting arrows */}
      <line
        x1={48}
        y1={y}
        x2={90}
        y2={y}
        stroke={C.muted}
        strokeOpacity={0.55}
        markerEnd="url(#rn-arrow)"
      />
      <line
        x1={188}
        y1={y}
        x2={241}
        y2={y}
        stroke={C.muted}
        strokeOpacity={0.55}
        markerEnd="url(#rn-arrow)"
      />
      <line
        x1={339}
        y1={y}
        x2={377}
        y2={y}
        stroke={C.muted}
        strokeOpacity={0.55}
        markerEnd="url(#rn-arrow)"
      />

      {/* skip / identity connection */}
      <path
        d={`M40 ${y - 9} C 40 62, 394 62, 394 ${y - 16}`}
        fill="none"
        stroke="url(#rn-skip)"
        strokeWidth={2}
        strokeDasharray="5 5"
      />
      <text
        x={217}
        y={54}
        textAnchor="middle"
        fill={C.cyan}
        fontFamily="monospace"
        fontSize="10"
      >
        identity · skip connection
      </text>

      {/* pulse travelling along the skip */}
      <motion.circle
        r={4}
        fill={C.cyan}
        animate={{
          cx: [40, 95, 217, 339, 394],
          cy: [y - 9, 103, 84, 100, y - 16],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ---------------------------------------------------------------- 03 · RNN */

/**
 * A single recurrent cell unrolled across five time-steps. Each hidden state
 * hₜ receives the input xₜ from below, emits the output yₜ upward, and passes
 * its state to the next step along an animated recurrence link. Rebuilt from
 * the reference as responsive SVG — no external asset used.
 */
export function RNNDiagram() {
  const N = 5;
  const cy = 132;
  const half = 23;
  const xs = Array.from({ length: N }, (_, k) => 60 + k * 100);

  return (
    <svg viewBox="0 0 520 260" className="h-full w-full">
      <defs>
        <Arrow id="rnn-arrow" color={C.muted} />
        <Arrow id="rnn-flow" color={C.cyan} />
      </defs>

      {/* recurrence links between consecutive cells (hidden state through time) */}
      {xs.slice(0, -1).map((x, i) => (
        <motion.line
          key={`rec-${i}`}
          x1={x + half}
          y1={cy}
          x2={xs[i + 1] - half - 6}
          y2={cy}
          stroke={C.cyan}
          strokeOpacity={0.7}
          strokeWidth={1.4}
          strokeDasharray="5 6"
          markerEnd="url(#rnn-flow)"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -22 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {xs.map((x, k) => (
        <g key={`cell-${k}`}>
          {/* input xₜ → cell */}
          <line
            x1={x}
            y1={cy + half + 46}
            x2={x}
            y2={cy + half + 6}
            stroke={C.muted}
            strokeOpacity={0.6}
            markerEnd="url(#rnn-arrow)"
          />
          <text
            x={x}
            y={cy + half + 62}
            textAnchor="middle"
            fill={C.muted}
            fontFamily="monospace"
            fontSize="11"
          >
            x{SUB[k]}
          </text>

          {/* cell → output yₜ */}
          <line
            x1={x}
            y1={cy - half - 6}
            x2={x}
            y2={cy - half - 44}
            stroke={C.muted}
            strokeOpacity={0.6}
            markerEnd="url(#rnn-arrow)"
          />
          <text
            x={x}
            y={cy - half - 52}
            textAnchor="middle"
            fill={C.muted}
            fontFamily="monospace"
            fontSize="11"
          >
            y{SUB[k]}
          </text>

          {/* hidden-state cell */}
          <rect
            x={x - half}
            y={cy - half}
            width={half * 2}
            height={half * 2}
            rx={10}
            fill="var(--nd-node)"
            stroke={C.cyan}
            strokeWidth={1.4}
          />
          <text
            x={x}
            y={cy + 5}
            textAnchor="middle"
            fill="currentColor"
            fontFamily="monospace"
            fontSize="14"
          >
            h{SUB[k]}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ---------------------------------------------------------------- 04 · LSTM */

function Gate({
  x,
  label,
  glyph,
  color,
}: {
  x: number;
  label: string;
  glyph: string;
  color: string;
}) {
  const cy = 150;
  return (
    <g>
      <circle cx={x} cy={cy} r={22} fill="var(--nd-node)" stroke={color} strokeWidth={1.4} />
      <text x={x} y={cy + 5} textAnchor="middle" fill="currentColor" fontSize="14">
        {glyph}
      </text>
      <text
        x={x}
        y={cy + 42}
        textAnchor="middle"
        fill={C.muted}
        fontFamily="monospace"
        fontSize="10"
      >
        {label}
      </text>
    </g>
  );
}

function Op({ x, glyph }: { x: number; glyph: string }) {
  return (
    <g>
      <circle cx={x} cy={104} r={11} fill="var(--nd-node)" stroke="var(--nd-line-strong)" />
      <text x={x} y={109} textAnchor="middle" fill="currentColor" fontSize="13">
        {glyph}
      </text>
    </g>
  );
}

/**
 * LSTM cell — the cyan cell-state rail (Cₜ₋₁ → Cₜ) carries a × forget gate and
 * a + input add; the fuchsia hidden-state rail (hₜ₋₁ → hₜ) runs below. Four
 * gates (fₜ, iₜ, gₜ, oₜ) sit on vertical stems between the two rails. Rebuilt
 * from the reference as responsive SVG.
 */
export function LSTMDiagram() {
  const gates = [150, 220, 290, 360];
  return (
    <svg viewBox="0 0 500 260" className="h-full w-full">
      {/* title */}
      <text
        x={250}
        y={26}
        textAnchor="middle"
        fill={C.muted}
        fontFamily="monospace"
        fontSize="12"
        letterSpacing="4"
      >
        LSTM · CELL
      </text>

      {/* cell boundary */}
      <rect
        x={95}
        y={70}
        width={310}
        height={150}
        rx={22}
        fill="none"
        stroke="var(--nd-line)"
        strokeDasharray="5 5"
      />

      {/* vertical stems linking the two rails through each gate */}
      {gates.map((x, i) => (
        <line
          key={`stem-${i}`}
          x1={x}
          y1={104}
          x2={x}
          y2={210}
          stroke="var(--nd-line)"
          strokeDasharray={i === 1 || i === 2 ? "3 3" : undefined}
        />
      ))}

      {/* cell-state rail (top, cyan) */}
      <line x1={20} y1={104} x2={480} y2={104} stroke={C.cyan} strokeWidth={2} strokeOpacity={0.85} />
      <text x={18} y={96} fill={C.muted} fontFamily="monospace" fontSize="11">
        Cₜ₋₁
      </text>
      <text x={468} y={96} textAnchor="end" fill={C.cyan} fontFamily="monospace" fontSize="11">
        Cₜ
      </text>

      {/* hidden-state rail (bottom, fuchsia) */}
      <line x1={20} y1={210} x2={480} y2={210} stroke={C.fuchsia} strokeWidth={2} strokeOpacity={0.8} />
      <text x={18} y={228} fill={C.muted} fontFamily="monospace" fontSize="11">
        hₜ₋₁
      </text>
      <text x={468} y={228} textAnchor="end" fill={C.fuchsia} fontFamily="monospace" fontSize="11">
        hₜ
      </text>

      {/* pulse riding the cell-state rail */}
      <motion.circle
        cy={104}
        r={3.5}
        fill={C.cyan}
        animate={{ cx: [20, 480] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "linear" }}
      />

      {/* operators on the cell-state rail */}
      <Op x={150} glyph="×" />
      <Op x={325} glyph="+" />

      {/* gates */}
      <Gate x={150} label="fₜ" glyph="σ" color={C.iris} />
      <Gate x={220} label="iₜ" glyph="σ" color={C.cyan} />
      <Gate x={290} label="gₜ" glyph="tanh" color={C.cyan} />
      <Gate x={360} label="oₜ" glyph="σ" color={C.iris} />
    </svg>
  );
}

/* ---------------------------------------------------------------- 05 · TRANSFORMER */

function TBlock({
  title,
  sub,
  tint,
}: {
  title: string;
  sub: string;
  tint?: "iris" | "cyan";
}) {
  const accent =
    tint === "iris" ? "var(--nd-iris)" : tint === "cyan" ? "var(--nd-cyan)" : null;
  const style = accent
    ? {
        borderColor: `color-mix(in srgb, ${accent} 45%, transparent)`,
        background: `color-mix(in srgb, ${accent} 10%, transparent)`,
      }
    : { borderColor: "var(--line)", background: "var(--nd-stage)" };
  return (
    <div
      className="relative z-10 rounded-lg border px-4 py-2.5 text-center"
      style={style}
    >
      <div className="font-mono text-[13px] text-[var(--fg)]">{title}</div>
      <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-muted">
        {sub}
      </div>
    </div>
  );
}

export function TransformerDiagram() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
        Transformer · Encoder Block
      </span>
      <div className="relative w-full max-w-[260px]">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--nd-line-faint)]" />
        <div className="relative flex flex-col gap-2.5">
          <TBlock title="Multi-Head Attn" sub="h=12 · d=64" tint="iris" />
          <TBlock title="Add & Norm" sub="residual" />
          <TBlock title="Feed Forward" sub="MLP · d_ff=2048" tint="cyan" />
          <TBlock title="Add & Norm" sub="residual" />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1 font-mono text-[11px] text-muted">
        <span>× N</span>
        <motion.span
          style={{ color: "var(--nd-cyan)" }}
          animate={{ y: [0, 3, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          ▾
        </motion.span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- 06 · VISION TRANSFORMER */

/* patch tints reused for the matching token, so patch → token mapping reads. */
const VIT_TINTS = [
  C.cyan,
  C.iris,
  C.fuchsia,
  C.mint,
  C.cyan,
  C.iris,
  C.fuchsia,
  C.mint,
  C.cyan,
];

export function ViTDiagram() {
  const img = { x: 34, y: 66, size: 120 };
  const cell = img.size / 3;
  const tokenY = 168;
  const tokenSize = 20;
  const tokenGap = 5;
  const tokenStartX = 214;

  return (
    <svg viewBox="0 0 480 250" className="h-full w-full">
      <defs>
        <Arrow id="vit-arrow" color={C.muted} />
      </defs>

      {/* source image split into patches */}
      {VIT_TINTS.map((tint, k) => {
        const cx = k % 3;
        const cy = Math.floor(k / 3);
        return (
          <rect
            key={k}
            x={img.x + cx * cell}
            y={img.y + cy * cell}
            width={cell - 2}
            height={cell - 2}
            rx={3}
            fill={tint}
            fillOpacity={0.16 + rand(k, 2) * 0.32}
            stroke={tint}
            strokeOpacity={0.5}
          />
        );
      })}
      <text
        x={img.x + img.size / 2}
        y={img.y - 12}
        textAnchor="middle"
        fill={C.muted}
        fontFamily="monospace"
        fontSize="10"
      >
        image · 3×3 patches
      </text>

      {/* projection arrow */}
      <line
        x1={img.x + img.size + 8}
        y1={img.y + img.size / 2}
        x2={tokenStartX - 10}
        y2={tokenY}
        stroke={C.muted}
        strokeOpacity={0.6}
        strokeDasharray="4 4"
        markerEnd="url(#vit-arrow)"
      />
      <text
        x={186}
        y={112}
        textAnchor="middle"
        fill={C.muted}
        fontFamily="monospace"
        fontSize="9"
      >
        linear
      </text>
      <text
        x={186}
        y={124}
        textAnchor="middle"
        fill={C.muted}
        fontFamily="monospace"
        fontSize="9"
      >
        proj.
      </text>

      {/* [CLS] + patch-token sequence */}
      {/* [CLS] token */}
      <rect
        x={tokenStartX}
        y={tokenY - tokenSize / 2}
        width={tokenSize}
        height={tokenSize}
        rx={4}
        fill="none"
        stroke={C.mint}
        strokeWidth={1.4}
      />
      <text
        x={tokenStartX + tokenSize / 2}
        y={tokenY + 3.5}
        textAnchor="middle"
        fill={C.mint}
        fontFamily="monospace"
        fontSize="8"
      >
        cls
      </text>

      {VIT_TINTS.map((tint, k) => {
        const x = tokenStartX + (k + 1) * (tokenSize + tokenGap);
        return (
          <motion.rect
            key={k}
            x={x}
            y={tokenY - tokenSize / 2}
            width={tokenSize}
            height={tokenSize}
            rx={4}
            fill={tint}
            fillOpacity={0.2}
            stroke={tint}
            strokeOpacity={0.7}
            animate={{ opacity: [0.55, 1, 0.55] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: k * 0.12,
            }}
          />
        );
      })}

      {/* positional-embedding row */}
      {Array.from({ length: 10 }, (_, k) => {
        const x = tokenStartX + k * (tokenSize + tokenGap) + tokenSize / 2;
        return (
          <text
            key={k}
            x={x}
            y={tokenY + tokenSize / 2 + 16}
            textAnchor="middle"
            fill={C.muted}
            fontFamily="monospace"
            fontSize="8"
          >
            +{k}
          </text>
        );
      })}
      <text
        x={tokenStartX}
        y={tokenY - tokenSize / 2 - 10}
        fill={C.muted}
        fontFamily="monospace"
        fontSize="9"
      >
        tokens + positional embedding → transformer encoder
      </text>
    </svg>
  );
}
