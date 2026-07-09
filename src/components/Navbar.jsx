import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { HiEye, HiMenuAlt3, HiX } from 'react-icons/hi'
import clsx from 'clsx'
import { navLinks } from '../data/portfolio'
import { useResume } from '../context/ResumeContext'

export default function Navbar() {
  const { openResume } = useResume()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleResumeClick = () => {
    setOpen(false)
    openResume()
  }

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border bg-surface/90 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          to="home"
          smooth
          duration={600}
          offset={-80}
          spy
          onSetActive={setActiveSection}
          className="cursor-pointer font-display text-xl font-bold text-white transition hover:text-accent-light"
        >
          Portfolio
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                spy
                smooth
                offset={-80}
                duration={600}
                onSetActive={setActiveSection}
                className={clsx(
                  'nav-link cursor-pointer rounded-lg px-3.5 py-2 text-sm font-medium transition',
                  activeSection === link.id
                    ? 'nav-active text-white'
                    : 'text-muted hover:text-white',
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={openResume}
              className="cursor-pointer rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition hover:text-white"
            >
              Resume
            </button>
          </li>
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={openResume}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-white transition hover:border-accent-light hover:bg-white/5"
          >
            <HiEye size={16} />
            Resume
          </button>
          <Link
            to="contact"
            smooth
            offset={-80}
            duration={600}
            className="cursor-pointer rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-surface transition hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="shrink-0 rounded-lg border border-border p-2 text-xl text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-surface/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  spy
                  smooth
                  offset={-80}
                  duration={600}
                  onSetActive={setActiveSection}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    'block cursor-pointer rounded-lg px-3 py-3 text-base font-medium transition',
                    activeSection === link.id
                      ? 'bg-accent/15 text-white'
                      : 'text-muted hover:bg-white/5 hover:text-white',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={handleResumeClick}
                className="block w-full cursor-pointer rounded-lg px-3 py-3 text-left text-base font-medium text-muted transition hover:bg-white/5 hover:text-white"
              >
                Resume
              </button>
            </li>
            <li className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleResumeClick}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold text-white"
              >
                <HiEye size={16} />
                View Resume
              </button>
              <Link
                to="contact"
                smooth
                offset={-80}
                duration={600}
                onClick={() => setOpen(false)}
                className="block cursor-pointer rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-surface"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
