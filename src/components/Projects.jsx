import {
  FaCar,
  FaDatabase,
  FaExternalLinkAlt,
  FaProjectDiagram,
  FaQrcode,
} from 'react-icons/fa'
import Section from './Section'
import SectionHeader from './SectionHeader'
import CardGrid from './CardGrid'
import HighlightCard from './HighlightCard'
import { projects } from '../data/portfolio'

const projectIcons = {
  'CMS Platform': FaDatabase,
  'Approval Workflow Automation': FaProjectDiagram,
  'Chennai Parking System': FaCar,
  'Eloupra QR Scanner App': FaQrcode,
}

const projectAccents = {
  'CMS Platform': 'from-violet/25 via-accent/10 to-transparent',
  'Approval Workflow Automation': 'from-cyan/25 via-violet/10 to-transparent',
  'Chennai Parking System': 'from-accent/25 via-cyan/10 to-transparent',
  'Eloupra QR Scanner App': 'from-emerald-500/20 via-cyan/10 to-transparent',
}

const projectRows = []
for (let i = 0; i < projects.length; i += 2) {
  projectRows.push(projects.slice(i, i + 2))
}

function ProjectCard({ project, index }) {
  const Icon = projectIcons[project.title] ?? FaDatabase
  const accent = projectAccents[project.title] ?? 'from-accent/20 to-transparent'

  return (
    <HighlightCard>
      <article className="flex h-full flex-col">
        <div
          className={`project-card-banner mb-5 rounded-xl border border-border bg-linear-to-br ${accent} p-5`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-surface/70 text-accent-light">
                <Icon size={22} />
              </span>
              <div>
                <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-cyan uppercase">
                  Case Study {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display text-lg font-semibold text-white md:text-xl">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted md:text-base">{project.description}</p>

        <p className="mt-5 text-xs font-semibold tracking-wider text-muted uppercase">Tech Stack</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-green rounded-md px-2.5 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>

        {project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition hover:text-violet"
          >
            Live Demo
            <FaExternalLinkAlt size={12} />
          </a>
        )}
      </article>
    </HighlightCard>
  )
}

export default function Projects() {
  return (
    <Section id="projects" variant="emerald">
      <SectionHeader
        eyebrow="What I've Built"
        title="Featured Projects"
        subtitle="Hover or click a project — it expands in front while the other side stays visible with a soft blur."
        index="04"
      />

      <div className="flex flex-col gap-6 md:gap-8">
        {projectRows.map((row, rowIndex) => (
          <CardGrid key={rowIndex} interactive>
            {row.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={rowIndex * 2 + index}
              />
            ))}
          </CardGrid>
        ))}
      </div>
    </Section>
  )
}
