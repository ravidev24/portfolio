import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface-elevated/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent-light">
            Skills
          </p>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Technologies I work with
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="glass glow-ring rounded-2xl p-6 transition hover:-translate-y-1"
            >
              <h3 className="mb-5 font-display text-lg font-semibold text-white">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-white/5 px-3 py-1.5 text-sm text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
