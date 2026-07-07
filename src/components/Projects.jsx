import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent-light">
              Projects
            </p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Selected work & experiments
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted">
            A few projects that reflect how I think about design, performance, and
            maintainable code.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group glass flex flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:border-accent/30"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="mt-2 inline-block rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-medium text-accent-light">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    className="rounded-lg border border-border p-2 text-muted transition hover:border-accent-light hover:text-white"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub size={16} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="rounded-lg border border-border p-2 text-muted transition hover:border-accent-light hover:text-white"
                    aria-label={`${project.title} live demo`}
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
