import { HiDocumentText, HiX } from 'react-icons/hi'
import { profile } from '../data/portfolio'

export default function ResumeModal({ open, onClose }) {
  if (!open) return null

  const handlePrint = () => {
    const frame = document.getElementById('resume-frame')
    frame?.contentWindow?.print()
  }

  return (
    <div
      className="resume-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm md:p-6"
      onClick={onClose}
    >
      <div
        className="resume-modal-panel relative flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0a0f14] shadow-2xl shadow-black/60"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-[#060a0e] px-4 py-4 md:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent-light/30 bg-accent/15 text-accent-light">
              <HiDocumentText size={22} />
            </span>
            <div className="min-w-0">
              <p className="truncate font-display text-base font-semibold text-white md:text-lg">
                {profile.resumeFileName}
              </p>
              <p className="mt-0.5 text-[0.65rem] font-semibold tracking-[0.18em] text-accent-light uppercase md:text-xs">
                Open to any location
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="hidden rounded-lg border border-white/20 px-3 py-2 text-xs font-medium text-white transition hover:border-accent-light hover:bg-white/5 sm:inline-block md:text-sm"
            >
              Print
            </button>
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="rounded-lg border border-white/25 px-3 py-2 text-xs font-medium text-white transition hover:border-accent-light hover:bg-white/5 md:px-4 md:text-sm"
            >
              Print / Download PDF
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-xl text-white/80 transition hover:bg-white/10 hover:text-white"
              aria-label="Close resume viewer"
            >
              <HiX size={22} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden bg-white">
          <iframe
            id="resume-frame"
            src={`${profile.resumeUrl}#toolbar=0&navpanes=0`}
            title="Resume full view"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}
