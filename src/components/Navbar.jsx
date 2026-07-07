import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import clsx from 'clsx'
import { navLinks, profile } from '../data/portfolio'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer font-display text-xl font-bold tracking-tight"
        >
          {profile.name}
          <span className="text-accent-light">.</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                spy
                smooth
                offset={-80}
                duration={500}
                activeClass="text-white"
                className="cursor-pointer text-sm font-medium text-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="contact"
          smooth
          offset={-80}
          duration={500}
          className="hidden cursor-pointer rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-light md:inline-flex"
        >
          Hire Me
        </Link>

        <button
          type="button"
          className="text-2xl text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-border md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  spy
                  smooth
                  offset={-80}
                  duration={500}
                  onClick={() => setOpen(false)}
                  className="block cursor-pointer rounded-lg px-3 py-3 text-base font-medium text-muted transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="contact"
                smooth
                offset={-80}
                duration={500}
                onClick={() => setOpen(false)}
                className="block cursor-pointer rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
