"use client";

import { Section, SectionHeader, Reveal } from "../primitives";
import { Briefcase } from "lucide-react";

/**
 * Experience section — intentionally EMPTY per instructions.
 * Only the layout + a reserved timeline placeholder is shown until real
 * experience details are provided by Pulkit. No content is invented here.
 */
export function Experience() {
  return (
    <Section id="experience">
      <div className="container-x">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've worked."
          description="This timeline is reserved for professional experience. It will be populated with roles, timelines, and impact once the details are finalised."
        />

        <div className="relative mt-14">
          {/* vertical spine */}
          <span className="absolute left-4 top-2 bottom-2 hidden w-px bg-gradient-to-b from-line via-line to-transparent sm:block" />

          <div className="flex flex-col gap-5">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={0.06 * i}>
                <div className="relative flex items-center gap-5 rounded-2xl border border-dashed border-line p-6 transition-colors hover:border-white/20 sm:pl-14">
                  <span className="absolute left-2.5 hidden h-3 w-3 rounded-full border-2 border-[var(--bg)] bg-white/10 sm:block" />
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.03]">
                    <Briefcase className="h-5 w-5 text-muted" />
                  </span>
                  <div className="flex-1">
                    <div className="h-3 w-1/3 rounded-full bg-white/[0.06]" />
                    <div className="mt-2.5 h-3 w-1/4 rounded-full bg-white/[0.04]" />
                  </div>
                  <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                    Coming soon
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-8 text-center font-mono text-xs text-muted">
              Experience details to be added.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
