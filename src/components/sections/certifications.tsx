"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Section, SectionHeader, Reveal, GlassCard } from "../primitives";
import { certifications } from "@/lib/resume";
import { BadgeCheck, ExternalLink, X } from "lucide-react";

type Cert = (typeof certifications)[number];

/**
 * Certifications & Achievements — "Receipts".
 * Image credentials load from the local /certificates folder (copied from the
 * project's certificate/ folder). The Microsoft text-only credential renders as
 * a monogram card. Clicking an image card opens a lightbox.
 */
export function Certifications() {
  const [active, setActive] = useState<Cert | null>(null);
  const withImage = certifications.filter((c) => c.image);

  return (
    <Section id="certifications">
      <div className="container-x">
        <SectionHeader
          eyebrow="Certifications · Achievements"
          title="Receipts."
          description="Selected credentials and recognitions — every badge here is a real, locally-stored certificate, not a placeholder."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={0.05 * i}>
              <CertCard cert={cert} onOpen={() => cert.image && setActive(cert)} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && active.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl glass shadow-card"
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="mono-label">{active.issuer}</span>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted transition-colors hover:text-[var(--fg)]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="relative bg-black/30 p-4">
                <div className="relative mx-auto max-h-[70vh] w-full">
                  <Image
                    src={active.image}
                    alt={active.title}
                    width={1200}
                    height={900}
                    className="mx-auto h-auto max-h-[70vh] w-auto rounded-lg object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold">{active.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{active.description}</p>
                </div>
                {active.year && (
                  <span className="shrink-0 rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                    {active.year}
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function CertCard({ cert, onOpen }: { cert: Cert; onOpen: () => void }) {
  const hasImage = Boolean(cert.image);

  return (
    <GlassCard className="flex h-full flex-col p-0">
      {/* Preview */}
      <button
        onClick={onOpen}
        disabled={!hasImage}
        className={`group/preview relative block w-full overflow-hidden ${
          hasImage ? "cursor-zoom-in" : "cursor-default"
        }`}
      >
        {hasImage ? (
          <div
            className={`relative w-full overflow-hidden ${
              cert.ratio === "landscape" ? "aspect-[16/11]" : "aspect-[4/3]"
            } bg-black/40`}
          >
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={`transition-transform duration-500 group-hover/preview:scale-[1.04] ${
                cert.ratio === "landscape" ? "object-cover" : "object-contain p-3"
              }`}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/preview:opacity-100" />
            <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-black/50 px-2.5 py-1 font-mono text-[10px] text-muted opacity-0 backdrop-blur transition-opacity duration-500 group-hover/preview:opacity-100">
              <ExternalLink className="h-3 w-3" /> view
            </span>
          </div>
        ) : (
          <div className="grid aspect-[4/3] w-full place-items-center bg-black/30">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-iris-gradient text-lg font-bold text-black">
              {cert.issuer.slice(0, 2)}
            </span>
          </div>
        )}
      </button>

      {/* Meta */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <BadgeCheck className="h-4 w-4 text-cyan-soft" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
            {cert.year ? `Cert · ${cert.year}` : "Certification"}
          </span>
        </div>
        <h3 className="mt-2 font-semibold leading-snug">{cert.title}</h3>
        <p className="mt-1 font-mono text-xs text-iris/90">{cert.issuer}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {cert.description}
        </p>
      </div>
    </GlassCard>
  );
}
