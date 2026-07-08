import Section from './Section'
import SectionHeader from './SectionHeader'
import CardGrid from './CardGrid'
import HighlightCard from './HighlightCard'
import { media } from '../data/portfolio'

export default function Showcase() {
  return (
    <Section id="showcase" variant="violet">
      <SectionHeader
        eyebrow="Work in Action"
        title="Development Showcase"
        subtitle="A glimpse into the development process — building, testing, and shipping production-ready software."
        index="03"
      />

      <CardGrid>
        <HighlightCard>
          <div className="relative overflow-hidden rounded-xl">
            <video
              src={media.review}
              autoPlay
              muted
              loop
              playsInline
              className="aspect-video w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-surface/60 via-transparent to-transparent" />
          </div>
        </HighlightCard>

        <HighlightCard>
          <div className="flex h-full flex-col justify-center">
            <p className="font-display text-2xl font-semibold text-white md:text-3xl">
              Code. Build. Deploy.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Full stack development across web and mobile — from API architecture to polished
              interfaces.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
                Laravel & React.js enterprise apps
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                Real-time systems with Redis & WebSockets
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                React Native mobile integrations
              </li>
            </ul>
          </div>
        </HighlightCard>
      </CardGrid>
    </Section>
  )
}
