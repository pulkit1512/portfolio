"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader, Reveal } from "../primitives";
import {
  CNNDiagram,
  ResNetDiagram,
  RNNDiagram,
  LSTMDiagram,
  TransformerDiagram,
  ViTDiagram,
} from "./diagrams";
import { NeuralStudioFeatures } from "./feature-cards";

type Arch = {
  id: string;
  index: string;
  tag: string;
  title: string;
  formula: string;
  blurb: string;
  meta: string;
  accent: string; // hex used for glow / formula / meta dot
  Diagram: () => JSX.Element;
};

const architectures: Arch[] = [
  {
    id: "cnn",
    index: "01",
    tag: "Convolution",
    title: "Convolutional Network",
    formula: "conv(x, W) + b",
    blurb:
      "Local receptive fields and weight sharing build a hierarchy of feature maps. Still the right answer when the input is pixels.",
    meta: "spatial · translation-invariant",
    accent: "#7dd3fc",
    Diagram: CNNDiagram,
  },
  {
    id: "resnet",
    index: "02",
    tag: "Residual",
    title: "Residual Network",
    formula: "y = F(x) + x",
    blurb:
      "Identity shortcuts let gradients skip layers, so depth can grow without the signal vanishing. Depth became free.",
    meta: "skip-connections · very deep",
    accent: "#a78bfa",
    Diagram: ResNetDiagram,
  },
  {
    id: "rnn",
    index: "03",
    tag: "RNN",
    title: "Recurrence over time",
    formula: "hₜ = tanh(Wₓxₜ + Uhₜ₋₁ + b)",
    blurb:
      "A single recurrent cell processes sequential information by passing hidden states through time, enabling the model to capture temporal dependencies.",
    meta: "sequential · shared weights",
    accent: "#6ee7b7",
    Diagram: RNNDiagram,
  },
  {
    id: "lstm",
    index: "04",
    tag: "Recurrence",
    title: "Long Short-Term Memory",
    formula: "Cₜ = fₜ·Cₜ₋₁ + iₜ·C̃ₜ",
    blurb:
      "Forget, input, output. Add a carry line and long-range dependencies in sequences suddenly become tractable.",
    meta: "gated · sequential memory",
    accent: "#f0abfc",
    Diagram: LSTMDiagram,
  },
  {
    id: "transformer",
    index: "05",
    tag: "Attention",
    title: "Transformer",
    formula: "softmax(QKᵀ/√dₖ)·V",
    blurb:
      "Attention + FFN + residual + norm, repeated N times. Every token queries every other token — the block that ate the world.",
    meta: "parallel · Vaswani et al., 2017",
    accent: "#a78bfa",
    Diagram: TransformerDiagram,
  },
  {
    id: "vit",
    index: "06",
    tag: "Vision",
    title: "Vision Transformer",
    formula: "patch → embed → +pos",
    blurb:
      "Cut the image into patches, treat them as tokens, and let self-attention do the rest. Convolution-free vision at scale.",
    meta: "patchify · global-attention",
    accent: "#7dd3fc",
    Diagram: ViTDiagram,
  },
];

export function NeuralStudio() {
  return (
    <Section id="neural-studio">
      <div className="container-x">
        <SectionHeader
          eyebrow="Neural Studio"
          title="The architectures I think in."
          description="A visual index of the model families I work with — from the humble CNN to the transformer block that reshaped the field. Every diagram is drawn from scratch."
        />

        {/* Two large feature cards — self-attention + MLP — above the grid. */}
        <div className="mt-14">
          <NeuralStudioFeatures />
        </div>

        {/* Existing architecture index grid. */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {architectures.map((a, i) => (
            <Reveal key={a.id} delay={0.05 * (i % 2)}>
              <ArchCard arch={a} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ArchCard({ arch }: { arch: Arch }) {
  const [hover, setHover] = useState(false);
  const Diagram = arch.Diagram;

  return (
    <motion.article
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl card-surface p-6 shadow-card transition-colors duration-500 hover:border-white/15 md:p-7"
    >
      {/* accent glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(38rem 20rem at 85% -10%, ${arch.accent}22, transparent 60%)`,
        }}
      />
      {/* top accent line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(to right, transparent, ${arch.accent}, transparent)`,
        }}
      />

      {/* header */}
      <div className="relative flex items-center justify-between">
        <span className="mono-label">
          {arch.index} · {arch.tag}
        </span>
        <span
          className="font-mono text-xs"
          style={{ color: arch.accent }}
        >
          {arch.formula}
        </span>
      </div>

      {/* title + blurb */}
      <h3 className="relative mt-4 text-2xl font-semibold tracking-tight">
        {arch.title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted">
        {arch.blurb}
      </p>

      {/* diagram stage */}
      <div className="relative mt-5 flex-1">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-black/25">
          <div className="bg-grid absolute inset-0 opacity-40" />
          <motion.div
            className="relative h-full w-full p-4"
            animate={{ scale: hover ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
          >
            <Diagram />
          </motion.div>
        </div>
      </div>

      {/* meta pill */}
      <div className="relative mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-muted">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: arch.accent }}
        />
        {arch.meta}
      </div>
    </motion.article>
  );
}
