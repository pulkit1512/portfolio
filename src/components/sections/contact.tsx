"use client";

import { useMemo, useState } from "react";
import { Section, SectionHeader, Reveal } from "../primitives";
import { profile } from "@/lib/resume";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const topics = ["Project inquiry", "Internship", "Collaboration", "Just saying hi"] as const;

/**
 * Contact section. No backend is wired, so the form composes a mailto: link to
 * Pulkit's real resume email. Every contact detail comes from the resume.
 */
export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<string>(topics[0]);
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const subject = `[${topic}] Portfolio message from ${name || "someone"}`;
    const body = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`;
    return `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [name, email, topic, message]);

  const valid = name.trim().length >= 2 && message.trim().length >= 10;

  return (
    <Section id="contact">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          {/* Left — pitch + channels */}
          <div>
            <SectionHeader
              eyebrow="Contact"
              title={
                <>
                  Let&apos;s build <br className="hidden sm:block" />
                  something useful.
                </>
              }
              description="Open to AI/ML internships, applied-ML collaborations, and interesting problems. I usually respond within a couple of days."
            />

            <div className="mt-9 flex flex-col gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center justify-between rounded-2xl card-surface p-5 transition-colors hover:border-white/15"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5">
                    <Mail className="h-5 w-5 text-cyan-soft" />
                  </span>
                  <div>
                    <p className="mono-label">Email</p>
                    <p className="mt-0.5 text-sm">{profile.email}</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5" />
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl card-surface p-5 transition-colors hover:border-white/15"
                >
                  <Github className="h-5 w-5" />
                  <p className="mono-label mt-4">GitHub</p>
                  <p className="mt-0.5 truncate font-mono text-sm">
                    @{profile.links.githubHandle}
                  </p>
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl card-surface p-5 transition-colors hover:border-white/15"
                >
                  <Linkedin className="h-5 w-5" />
                  <p className="mono-label mt-4">LinkedIn</p>
                  <p className="mt-0.5 truncate font-mono text-sm">
                    {profile.links.linkedinHandle}
                  </p>
                </a>
              </div>

              <p className="mt-1 font-mono text-xs text-muted">
                {profile.phone} · {profile.location}
              </p>
            </div>
          </div>

          {/* Right — message composer */}
          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-6 shadow-card sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" hint="Min 2 characters">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={50}
                    placeholder="Ada Lovelace"
                    className="input-field"
                  />
                </Field>
                <Field label="Email">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="you@example.com"
                    className="input-field"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <p className="mono-label mb-3">What&apos;s this about?</p>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTopic(t)}
                      className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-all ${
                        topic === t
                          ? "border-white/20 bg-iris-gradient text-black"
                          : "border-line text-muted hover:border-white/20 hover:text-[var(--fg)]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <Field
                  label="Message"
                  hint={`${message.length}/5000 · min 10 characters`}
                >
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={5000}
                    rows={5}
                    placeholder="Tell me what you're building or what you'd like to talk about."
                    className="input-field resize-none"
                  />
                </Field>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-[11px] text-muted">
                  Opens your mail client · never stored
                </p>
                <a
                  href={valid ? mailto : undefined}
                  aria-disabled={!valid}
                  onClick={(e) => {
                    if (!valid) e.preventDefault();
                  }}
                  className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                    valid
                      ? "bg-iris-gradient text-black shadow-glow hover:scale-[1.03]"
                      : "cursor-not-allowed border border-line text-muted"
                  }`}
                >
                  Send message
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mono-label">{label}</span>
      <div className="mt-2">{children}</div>
      {hint && (
        <span className="mt-1.5 block font-mono text-[11px] text-muted">
          {hint}
        </span>
      )}
    </label>
  );
}
