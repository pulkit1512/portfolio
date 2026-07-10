"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile, achievements } from "@/lib/resume";

const NeuralScene = dynamic(() => import("./neural-scene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-line border-t-iris" />
    </div>
  ),
});

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 md:pt-28"
    >
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" />
      <div className="container-x grid w-full items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            <span className="font-mono text-xs text-muted">
              {profile.tagline}
            </span>
          </motion.div>

          <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
            {["Building", "neural", "systems"].map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.05 * i }}
                className="mr-3 inline-block"
              >
                {w === "neural" ? (
                  <em className="not-italic text-gradient">{w}</em>
                ) : (
                  w
                )}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="inline-block text-muted"
            >
              that think, reason, ship.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            I&apos;m {profile.name} — an AI/ML engineer studying Artificial
            Intelligence at SVNIT, Surat. I work on RLHF, machine-learning
            algorithms, and web integration, turning models like Gradient
            Descent and Logistic Regression into real, shippable products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-iris-gradient px-6 py-3 text-sm font-semibold text-black shadow-glow transition-transform hover:scale-[1.03]"
            >
              View selected work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/Pulkit_Sharma_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-white/20 hover:text-[var(--fg)]"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-white/20 hover:text-[var(--fg)]"
            >
              <Mail className="h-4 w-4" /> Get in touch
            </a>
          </motion.div>

          {/* Real resume stats */}
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="mt-12 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line sm:grid-cols-4"
          >
            {achievements.map((a) => (
              <div key={a.label} className="bg-soft px-4 py-5">
                <dt className="font-mono text-2xl font-semibold text-gradient">
                  {a.value}
                </dt>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                  {a.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right column — 3D neural network panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="relative hidden aspect-square w-full lg:block"
        >
          <div className="glass absolute inset-0 overflow-hidden rounded-3xl shadow-card">
            {/* window chrome */}
            <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between border-b border-line bg-black/20 px-5 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs text-muted">
                ~/pulkit/model.pt
              </span>
            </div>

            <NeuralScene />

            {/* HUD overlays */}
            <div className="pointer-events-none absolute left-4 top-14 rounded-lg border border-line bg-black/40 px-3 py-1.5 font-mono text-[11px] text-cyan-soft backdrop-blur">
              forward · t=0.142s
            </div>
            <div className="pointer-events-none absolute right-4 top-14 rounded-lg border border-line bg-black/40 px-3 py-1.5 font-mono text-[11px] text-muted backdrop-blur">
              loss · 0.0271
            </div>
            <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-line bg-black/40 px-3 py-1.5 font-mono text-[11px] text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              online · Surat, IN
            </div>
            <div className="pointer-events-none absolute bottom-4 right-4 rounded-lg border border-line bg-black/40 px-3 py-1.5 font-mono text-[11px] text-muted backdrop-blur">
              UTC+5:30
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
