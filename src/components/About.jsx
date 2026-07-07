import { about } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl" data-aos="fade-up">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent-light">
            About Me
          </p>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Building digital products with care
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {about.highlights.map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-6 transition hover:border-accent/30"
              >
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
