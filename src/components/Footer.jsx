import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition hover:text-white"
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
              className="text-muted transition hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
