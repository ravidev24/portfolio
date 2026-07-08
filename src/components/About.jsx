import Section from './Section'
import SectionHeader from './SectionHeader'
import CardGrid from './CardGrid'
import HighlightCard from './HighlightCard'
import { about, stats } from '../data/portfolio'

export default function About() {
  return (
    <Section id="about" variant="emerald">
      <SectionHeader eyebrow={about.eyebrow} title={about.title} index="01" />

      <CardGrid>
        <HighlightCard>
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={about.image}
              alt="Developer at work"
              className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-accent/15 via-transparent to-cyan/10" />
          </div>
        </HighlightCard>

        <HighlightCard>
          <div className="flex h-full flex-col justify-center space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted md:text-lg">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              {['Laravel', 'MERN Stack', 'React Native', 'Redis', 'WebSockets'].map((tag) => (
                <span key={tag} className="tag-green rounded-full px-4 py-1.5 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </HighlightCard>
      </CardGrid>

      <CardGrid className="mt-8">
        {stats.map((item) => (
          <HighlightCard key={item.label}>
            <div className="flex h-full flex-col items-center justify-center py-4 text-center md:py-6">
              <p className="stat-value font-display text-5xl font-extrabold text-gradient md:text-6xl">
                {item.value}
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-white md:text-xl">
                {item.label}
              </p>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          </HighlightCard>
        ))}
      </CardGrid>
    </Section>
  )
}
