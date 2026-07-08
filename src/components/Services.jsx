import Section from './Section'
import SectionHeader from './SectionHeader'
import CardGrid from './CardGrid'
import HighlightCard from './HighlightCard'
import { services } from '../data/portfolio'

export default function Services() {
  return (
    <Section id="services" variant="cyan">
      <SectionHeader
        eyebrow="What I Do"
        title="My Services"
        subtitle="End-to-end digital solutions engineered for scale — built with precision, delivered with care."
        index="02"
      />

      <CardGrid>
        {services.map((service) => (
          <HighlightCard key={service.title}>
            <div className="flex h-full flex-col">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-cyan uppercase">
                  {service.category}
                </span>
                <span className="font-display text-3xl font-bold text-white/10">{service.number}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">
                {service.description}
              </p>
            </div>
          </HighlightCard>
        ))}
      </CardGrid>
    </Section>
  )
}
