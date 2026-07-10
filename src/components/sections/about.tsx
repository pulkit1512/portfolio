"use client";

import { Section, SectionHeader, Reveal, GlassCard } from "../primitives";
import { education, positions } from "@/lib/resume";
import { GraduationCap, Sparkles } from "lucide-react";

/* A small original activation-curve chart (GELU-like) for texture. */
function ActivationCurve() {
  const w = 320;
  const h = 120;
  const pts: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const x = (i / 60) * 6 - 3; // -3..3
    const gelu = 0.5 * x * (1 + Math.tanh(0.7978845608 * (x + 0.044715 * x ** 3)));
    const px = (i / 60) * w;
    const py = h - ((gelu + 1) / 5) * h - 8;
    pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
      <defs>
        <linearGradient id="gelu" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
      </defs>
      <line
        x1="0"
        y1={h - 20}
        x2={w}
        y2={h - 20}
        stroke="currentColor"
        strokeOpacity="0.1"
      />
      <polyline
        points={pts.join(" ")}
        fill="none"
        stroke="url(#gelu)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function About() {
  return (
    <Section id="about">
      <div className="container-x">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              Engineer who treats <br className="hidden sm:block" />
              <span className="text-muted">models like software.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: narrative + education + activation card */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted">
                I&apos;m a Bachelor of Technology student in Artificial
                Intelligence at SVNIT, Surat. I&apos;ve worked on
                Reinforcement Learning from Human Feedback, data analysis, and
                web integration — and I care about evaluation and shipping as
                much as state-of-the-art.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5">
                    <GraduationCap className="h-5 w-5 text-cyan-soft" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-semibold">{education.shortName}</h3>
                      <span className="font-mono text-xs text-muted">
                        {education.span}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {education.degree}
                    </p>
                    <p className="mt-1 text-sm">
                      CGPA{" "}
                      <span className="font-mono text-gradient">
                        {education.cgpa}
                      </span>{" "}
                      · {education.location}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {education.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-iris" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.1}>
              <GlassCard className="p-6" interactive={false}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="mono-label">Default activation</span>
                  <span className="mono-label text-cyan-soft">GELU</span>
                </div>
                <p className="mb-3 font-mono text-xs text-muted">
                  f(x) = gelu(x)
                </p>
                <ActivationCurve />
              </GlassCard>
            </Reveal>
          </div>

          {/* Right: positions of responsibility grid */}
          <div>
            <Reveal>
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-iris" />
                <span className="mono-label">Positions of responsibility</span>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {positions.map((p, i) => (
                <Reveal key={p.org} delay={0.05 * i}>
                  <GlassCard className="h-full p-6">
                    <span className="font-mono text-xs text-muted">
                      0{i + 1}
                    </span>
                    <h4 className="mt-3 font-semibold leading-snug">
                      {p.title}
                    </h4>
                    <p className="mt-1 font-mono text-xs text-iris/90">
                      {p.org}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {p.detail}
                    </p>
                  </GlassCard>
                </Reveal>
              ))}
              <Reveal delay={0.15}>
                <GlassCard
                  className="flex h-full flex-col justify-between p-6"
                  interactive={false}
                >
                  <p className="text-sm leading-relaxed text-muted">
                    &ldquo;A model that ships on Tuesday beats a model that
                    benchmarks on Friday.&rdquo;
                  </p>
                  <p className="mt-4 font-mono text-xs text-muted">
                    — engineering north star
                  </p>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
