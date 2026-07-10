"use client";

import { Github, Linkedin } from "lucide-react";
import { navItems, profile } from "@/lib/resume";

export function Footer() {
  return (
    <footer className="relative border-t border-line py-16">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-iris-gradient text-sm font-bold text-black">
                {profile.initials}
              </span>
              <div>
                <p className="font-semibold">{profile.name}</p>
                <p className="font-mono text-xs text-muted">
                  {profile.role} · {profile.location}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Building neural systems and full-stack products. Designed and
              built from the resume up — no templates, no filler.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <p className="mono-label mb-4">Sitemap</p>
            <ul className="space-y-3">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-muted transition-colors hover:text-[var(--fg)]"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere */}
          <div>
            <p className="mono-label mb-4">Elsewhere</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-[var(--fg)]"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-[var(--fg)]"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Status */}
          <div>
            <p className="mono-label mb-4">Status</p>
            <div className="card-surface rounded-xl p-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                </span>
                <span className="text-sm">Open to opportunities</span>
              </div>
              <p className="mt-2 font-mono text-[11px] text-muted">
                B.Tech AI · 2024–2028 · SVNIT
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {profile.name.toLowerCase()}
          </p>
          <p className="font-mono text-xs text-muted">
            Built with Next.js · Tailwind · Framer Motion · Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
