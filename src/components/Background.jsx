import { profile } from '../data/portfolio'

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="portfolio-bg absolute inset-0" />
      <div className="portfolio-grid absolute inset-0 opacity-50" />
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/8 blur-[140px]" />
      <div className="absolute right-0 bottom-1/3 h-[350px] w-[350px] rounded-full bg-cyan/6 blur-[120px]" />
    </div>
  )
}
