import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowRight, HiEye, HiMail } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'
import CodingFrame from './CodingFrame'
import { useResume } from '../context/ResumeContext'
import { codeSnippets, media, profile } from '../data/portfolio'

export default function Hero() {
  const { openResume } = useResume()
  const roleSequence = profile.roles.flatMap((role) => [role, 1800]).slice(0, -1)

  return (
    <section
      id="home"
      className="section-bg-hero relative flex min-h-screen items-center overflow-x-hidden section-padding pt-32"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <div className="section-bg-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <ScrollReveal animation="fade-down" duration={900}>
          <h1 className="name-hero font-display text-[clamp(2.4rem,8vw,5rem)] font-extrabold">
            {profile.name}
          </h1>
        </ScrollReveal>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
          <div className="w-full">
            <ScrollReveal animation="fade-up" delay={150} duration={900}>
            <p className="font-display text-2xl font-semibold text-white md:text-3xl">
              {profile.headline}
              <span className="block text-gradient">{profile.headlineAccent}</span>
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={250} duration={900}>
            <div className="mt-6 flex min-h-[3.5rem] items-center gap-2">
              <TypeAnimation
                sequence={roleSequence}
                wrapper="span"
                className="role-highlight"
                speed={45}
                repeat={Infinity}
              />
              <span className="role-highlight animate-pulse text-cyan">|</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={350} duration={900}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              {profile.quote}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={450} duration={900}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="projects"
                smooth
                offset={-80}
                duration={600}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-surface transition hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30"
              >
                View Projects
                <HiArrowRight />
              </Link>
              <Link
                to="services"
                smooth
                offset={-80}
                duration={600}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-white transition hover:border-accent-light hover:bg-white/5"
              >
                Explore Services
              </Link>
              <button
                type="button"
                onClick={openResume}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-cyan/30 px-6 py-3.5 text-sm font-semibold text-cyan transition hover:border-cyan hover:bg-cyan/10"
              >
                <HiEye size={16} />
                Resume
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={550} duration={900}>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition hover:text-white"
            >
              <HiMail className="text-accent-light" />
              {profile.email}
            </a>
          </ScrollReveal>
          </div>

        <ScrollReveal animation="fade-left" delay={300} duration={1000}>
          <div className="card-3d relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="card-3d-inner section-panel !p-0 overflow-hidden">
              <CodingFrame
                src={media.fullstack}
                alt="Full stack development workspace"
                snippet={codeSnippets.hero}
                fileName="portfolio.js"
                aspect="aspect-[4/3]"
              />
              <div className="border-t border-white/10 bg-black/40 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-white">{profile.title}</p>
                <p className="text-xs text-muted">
                  {profile.company} · {profile.location}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
