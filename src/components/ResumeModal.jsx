import { HiDownload, HiX } from 'react-icons/hi'
import { profile } from '../data/portfolio'

export default function ResumeModal({ open, onClose }) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-surface"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <p className="font-display text-lg font-semibold text-white">Resume — {profile.name}</p>
            <p className="mt-1 text-xs text-muted">Open to opportunities — any location preferred</p>
          </div>
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
              onClick={onClose}
              className="rounded-lg border border-border p-2 text-white transition hover:border-accent-light"
              aria-label="Close resume viewer"
            >
              <HiX size={20} />
            </button>
          </div>
        </div>
        <iframe src={profile.resumeUrl} title="Resume full view" className="h-full w-full bg-white" />
      </div>
    </div>
  )
}
