export default function SectionHeader({ eyebrow, title, subtitle, index }) {
  return (
    <div className="section-header mb-10 md:mb-12">
      <div className="mb-4 flex items-center gap-4">
        {index && (
          <span className="index-badge flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border font-display text-sm font-bold">
            {index}
          </span>
        )}
        <div className="h-px flex-1 bg-linear-to-r from-accent/50 via-cyan/40 to-transparent" />
        {eyebrow && (
          <span className="eyebrow-text shrink-0 text-xs font-semibold tracking-[0.2em] uppercase">
            {eyebrow}
          </span>
        )}
      </div>
      <h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{subtitle}</p>}
    </div>
  )
}
