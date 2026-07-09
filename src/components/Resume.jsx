import { useState } from 'react'
import { HiDownload, HiEye, HiX } from 'react-icons/hi'
import Section from './Section'
import SectionHeader from './SectionHeader'
import HighlightCard from './HighlightCard'
import { profile } from '../data/portfolio'

export default function Resume() {
  const [viewerOpen, setViewerOpen] = useState(false)

  return (
    <Section id="resume" variant="cyan">
      <SectionHeader
        eyebrow="Resume"
        title="My Resume"
        subtitle="View or download my full-stack developer resume — Chennai based, available for opportunities."
        index="07"
      />

      <HighlightCard>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setViewerOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-accent-light"
            >
              <HiEye size={18} />
              View Resume
            </button>
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-white transition hover:border-accent-light hover:bg-white/5"
            >
              <HiDownload size={18} />
              Download PDF
            </a>
          </div>

          <div className="resume-preview hidden overflow-hidden rounded-xl border border-border md:block">
            <iframe
              src={`${profile.resumeUrl}#toolbar=0&navpanes=0`}
              title="Resume preview"
              className="h-[520px] w-full bg-white"
            />
          </div>
        </div>
      </HighlightCard>

      {viewerOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setViewerOpen(false)}
        >
          <div
            className="relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-surface"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <p className="font-display text-lg font-semibold text-white">Resume — {profile.name}</p>
              <div className="flex items-center gap-3">
                <a
                  href={profile.resumeUrl}
                  download={profile.resumeFileName}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-white transition hover:border-accent-light"
                >
                  <HiDownload size={16} />
                  Download
                </a>
                <button
                  type="button"
                  onClick={() => setViewerOpen(false)}
                  className="rounded-lg border border-border p-2 text-white transition hover:border-accent-light"
                  aria-label="Close resume viewer"
                >
                  <HiX size={20} />
                </button>
              </div>
            </div>
            <iframe
              src={profile.resumeUrl}
              title="Resume full view"
              className="h-full w-full bg-white"
            />
          </div>
        </div>
      )}
    </Section>
  )
}
