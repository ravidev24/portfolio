import Section from './Section'
import SectionHeader from './SectionHeader'
import CardGrid from './CardGrid'
import HighlightCard from './HighlightCard'
import { technicalSkills } from '../data/portfolio'

export default function Skills() {
  const doubled = [...technicalSkills, ...technicalSkills]

  return (
    <Section id="skills" variant="cyan">
      <SectionHeader
        eyebrow="What I Work With"
        title="Technical Skills"
        subtitle="Technologies and tools I use to build full-stack, production-ready applications."
        index="05"
      />

      <CardGrid>
        <HighlightCard>
          <h3 className="mb-4 font-display text-lg font-semibold text-white">Core Technologies</h3>
          <div className="marquee-mask relative overflow-hidden">
            <div className="marquee-track flex gap-4 py-2">
              {doubled.map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="skill-pill-green shrink-0 rounded-xl border px-5 py-2.5 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </HighlightCard>

        <HighlightCard>
          <h3 className="mb-4 font-display text-lg font-semibold text-white">Tools & Frameworks</h3>
          <div className="marquee-mask relative overflow-hidden">
            <div className="marquee-track-reverse flex gap-4 py-2">
              {[...doubled].reverse().map((skill, index) => (
                <span
                  key={`rev-${skill}-${index}`}
                  className="skill-pill-cyan shrink-0 rounded-xl border px-5 py-2.5 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </HighlightCard>
      </CardGrid>
    </Section>
  )
}
