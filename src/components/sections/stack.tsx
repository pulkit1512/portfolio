"use client";

import { Section, SectionHeader, Reveal, GlassCard } from "../primitives";
import { skillGroups } from "@/lib/resume";
import {
  Code2,
  Boxes,
  BrainCircuit,
  BarChart3,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  languages: Code2,
  frameworks: Boxes,
  ml: BrainCircuit,
  data: BarChart3,
  tools: Wrench,
};

export function Stack() {
  return (
    <Section id="stack">
      <div className="container-x">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Tools I reach for first."
          description="Read straight from my resume and grouped by discipline — languages, frameworks, machine learning, data science, and the tools that tie it together."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = icons[group.key] ?? Code2;
            return (
              <Reveal key={group.key} delay={0.05 * gi}>
                <GlassCard className="h-full p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 transition-colors group-hover:bg-white/10">
                        <Icon className="h-5 w-5 text-cyan-soft" />
                      </span>
                      <h3 className="font-semibold">{group.title}</h3>
                    </div>
                    <span className="font-mono text-xs text-muted">
                      {group.items.length}
                    </span>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 font-mono text-sm text-muted transition-colors group-hover:text-[var(--fg)]"
                      >
                        <span className="h-1 w-1 rounded-full bg-iris/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 border-t border-line pt-3">
                    <span className="font-mono text-[11px] text-muted">
                      {group.tag}
                    </span>
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
