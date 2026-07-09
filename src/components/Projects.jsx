import { FaExternalLinkAlt } from 'react-icons/fa'
import Section from './Section'
import SectionHeader from './SectionHeader'
import CardGrid from './CardGrid'
import HighlightCard from './HighlightCard'
import { projects } from '../data/portfolio'
const projectRows = []
for (let i = 0; i < projects.length; i += 2) {
  projectRows.push(projects.slice(i, i + 2))
}

function ProjectCard({ project }) {
  return (
    <HighlightCard>
      <div className="flex h-full flex-col">
        <div className="relative mb-5 overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className="aspect-video w-full object-cover transition duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-surface/50 via-transparent to-transparent" />
        </div>
        <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">
          {project.description}
        </p>

        <p className="mt-4 text-xs font-semibold tracking-wider text-muted uppercase">
          Created With:
        </p>
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
      </div>
    </HighlightCard>
  )
}

export default function Projects() {
  return (
    <Section id="projects" variant="emerald">
      <SectionHeader
        eyebrow="What I've Built"
        title="My Projects"
        subtitle="A collection of real-world applications built across the full stack."
        index="04"
      />

      <div className="flex flex-col gap-6 md:gap-8">
        {projectRows.map((row, rowIndex) => (
          <CardGrid key={rowIndex} interactive>
            {row.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </CardGrid>
        ))}
      </div>
    </Section>
  )
}
