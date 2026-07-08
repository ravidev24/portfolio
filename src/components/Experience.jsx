import Section from './Section'
import SectionHeader from './SectionHeader'
import CardGrid from './CardGrid'
import HighlightCard from './HighlightCard'
import { experience } from '../data/portfolio'

export default function Experience() {
  const job = experience[0]

  return (
    <Section id="experience" variant="violet">
      <SectionHeader
        eyebrow="Professional Journey"
        title="My Experience"
        subtitle="Hands-on experience in software development — from REST APIs and CMS platforms to real-time workflow systems."
        index="06"
      />

      <CardGrid>
        <HighlightCard>
          <div className="flex h-full flex-col justify-center">
            <span className="font-display text-5xl font-bold text-accent/20">{job.number}</span>
            <h3 className="mt-2 font-display text-2xl font-semibold text-white">{job.role}</h3>
            <p className="mt-2 text-base text-cyan">{job.company}</p>
            <span className="mt-4 w-fit rounded-full border border-border bg-accent/10 px-4 py-1.5 text-sm text-muted">
              {job.period}
            </span>
          </div>
        </HighlightCard>

        <HighlightCard>
          <p className="text-base leading-relaxed text-muted">{job.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="tag-green rounded-full px-3 py-1 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </HighlightCard>
      </CardGrid>
    </Section>
  )
}
