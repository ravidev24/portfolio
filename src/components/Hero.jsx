import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden section-padding pt-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-glow absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        <div className="animate-pulse-glow absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-highlight/15 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div data-aos="fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {profile.availability}
          </div>

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-light">
            Hello, I&apos;m
          </p>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {profile.name}
            <span className="text-gradient">.</span>
          </h1>

          <div className="mt-4 min-h-[2.5rem] text-xl text-muted md:text-2xl">
            <TypeAnimation
              sequence={[
                profile.title,
                2000,
                'UI Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="projects"
              smooth
              offset={-80}
              duration={500}
              className="cursor-pointer rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30"
            >
              View My Work
            </Link>

            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-white transition hover:border-accent-light hover:bg-white/5"
            >
              <HiDownload />
              Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border p-3 text-muted transition hover:border-accent-light hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
            )}
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border p-3 text-muted transition hover:border-accent-light hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            )}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="glow-ring animate-float relative aspect-square overflow-hidden rounded-3xl border border-border bg-surface-elevated">
            <div className="absolute inset-0 bg-linear-to-br from-accent/20 via-transparent to-highlight/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-full border border-border bg-surface-card text-4xl font-bold text-gradient">
                {profile.name.charAt(0)}
              </div>
              <p className="font-display text-2xl font-bold">{profile.name}</p>
              <p className="mt-1 text-sm text-muted">{profile.title}</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted">
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="about"
        smooth
        offset={-80}
        duration={500}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 cursor-pointer text-muted transition hover:text-white md:block"
        aria-label="Scroll to about"
      >
        <HiArrowDown className="animate-bounce text-2xl" />
      </Link>
    </section>
  )
}
