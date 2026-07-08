import { HiMail } from 'react-icons/hi'
import { profile } from '../data/portfolio'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()}{' '}
          <span className="name-highlight font-semibold">{profile.name}</span>.  All rights reserved.
        </p>

        <div className="flex flex-col items-center gap-3 sm:items-end">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-white"
          >
            <HiMail className="text-accent-light" />
            {profile.email}
          </a>
          <SocialLinks
            className="flex gap-4"
            buttonClassName="text-muted transition hover:text-accent-light"
          />
        </div>
      </div>
    </footer>
  )
}
