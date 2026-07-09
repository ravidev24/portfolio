import { FaBolt, FaCode, FaMobileAlt, FaServer } from 'react-icons/fa'
import Section from './Section'
import SectionHeader from './SectionHeader'
import CardGrid from './CardGrid'
import HighlightCard from './HighlightCard'
import { services } from '../data/portfolio'

const serviceIcons = {
  Engineering: FaCode,
  Backend: FaServer,
  Mobile: FaMobileAlt,
  'Real-Time': FaBolt,
}

const serviceAccents = {
  Engineering: 'from-accent/20 to-cyan/10',
  Backend: 'from-cyan/20 to-violet/10',
  Mobile: 'from-violet/20 to-accent/10',
  'Real-Time': 'from-emerald-500/20 to-cyan/10',
}

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
        {services.map((service) => {
          const Icon = serviceIcons[service.category] ?? FaCode
          const accent = serviceAccents[service.category] ?? 'from-accent/20 to-cyan/10'

          return (
            <HighlightCard key={service.title}>
              <div className="flex h-full flex-col">
                <div
                  className={`mb-5 flex items-center justify-between rounded-xl border border-border bg-linear-to-br ${accent} p-4`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-surface/60 text-accent-light">
                      <Icon size={20} />
                    </span>
                    <span className="text-xs font-semibold tracking-widest text-cyan uppercase">
                      {service.category}
                    </span>
                  </div>
                  <span className="font-display text-3xl font-bold text-white/10">{service.number}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">
                  {service.description}
                </p>
              </div>
            </HighlightCard>
          )
        })}
      </CardGrid>
    </Section>
  )
}
