"use client";

import Image from "next/image";
import { Section, SectionHeader, Reveal, GlassCard } from "../primitives";
import { projects } from "@/lib/resume";
import { ArrowUpRight, BrainCircuit, Globe, Lock, Github } from "lucide-react";

const domainIcon: Record<string, typeof BrainCircuit> = {
  "Machine Learning": BrainCircuit,
  "Deep Learning": BrainCircuit,
  NLP: BrainCircuit,
  "Web Platform": Globe,
};

/**
 * Projects — populated from the two projects on Pulkit's resume.
 * Content (titles, bullets, stacks, links) is verbatim from resume.ts.
 */
export function Projects() {
  return (
    <Section id="projects">
      <div className="container-x">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work."
          description="Real builds — machine-learning models and full-stack products — with the write-ups, screenshots, and links where they're public."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => {
            const Icon = domainIcon[p.domain] ?? BrainCircuit;
            const isLive = Boolean(p.link);
            const hasRepo = Boolean(p.repo);

            return (
              <Reveal key={p.slug} delay={0.06 * i}>
                <GlassCard className="group h-full overflow-hidden">
                  <div className="flex h-full flex-col">
                    {/* Screenshot preview */}
                    {p.image ? (
                      <a
                        {...(isLive
                          ? { href: p.link, target: "_blank", rel: "noreferrer" }
                          : { "aria-hidden": true, tabIndex: -1 })}
                        className={`relative block aspect-[16/9] w-full overflow-hidden border-b border-line bg-white/[0.02] ${
                          isLive ? "cursor-pointer" : ""
                        }`}
                      >
                        <Image
                          src={p.image}
                          alt={p.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 via-transparent to-transparent" />
                      </a>
                    ) : null}

                    <div className="flex flex-1 flex-col p-7">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5">
                          <Icon className="h-5 w-5 text-cyan-soft" />
                        </span>
                        <div>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                            {String(i + 1).padStart(2, "0")} · {p.domain}
                          </span>
                          <h3 className="text-lg font-semibold leading-snug">
                            {p.title}
                          </h3>
                        </div>
                      </div>
                      <span
                        className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
                          isLive
                            ? "border-mint/40 text-mint"
                            : "border-line text-muted"
                        }`}
                      >
                        {isLive ? (
                          <>
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
                            </span>
                            Live
                          </>
                        ) : hasRepo ? (
                          <>
                            <Github className="h-3 w-3" /> Source
                          </>
                        ) : (
                          <>
                            <Lock className="h-3 w-3" /> Private
                          </>
                        )}
                      </span>
                    </div>

                    <p className="mt-5 text-[15px] leading-relaxed text-muted">
                      {p.tagline}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-5 space-y-2.5">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-iris/70" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Footer: stack + period + link affordance */}
                    <div className="mt-6 flex flex-1 flex-col justify-end">
                      <div className="flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted transition-colors group-hover:text-[var(--fg)]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
                        <span className="font-mono text-[11px] text-muted">
                          {p.period}
                        </span>
                        <div className="flex items-center gap-4">
                          {hasRepo ? (
                            <a
                              href={p.repo}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-[var(--fg)]"
                            >
                              <Github className="h-3.5 w-3.5" />
                              Code
                            </a>
                          ) : null}
                          {isLive ? (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 font-mono text-xs text-cyan-soft transition-colors hover:text-[var(--fg)]"
                            >
                              Visit site
                              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                          ) : !hasRepo ? (
                            <span className="font-mono text-[11px] text-muted">
                              source private
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
