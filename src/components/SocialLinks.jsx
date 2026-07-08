import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { profile } from '../data/portfolio'

export default function SocialLinks({ className = '', buttonClassName = '' }) {
  const buttonClass =
    buttonClassName ||
    'rounded-xl border border-border p-3 text-muted transition hover:border-accent-light hover:text-white'

  return (
    <div className={className}>
      {profile.social.github && (
        <a
          href={profile.social.github}
          target="_blank"
          rel="noreferrer"
          className={buttonClass}
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
          className={buttonClass}
          aria-label="LinkedIn"
        >
          <FaLinkedin size={18} />
        </a>
      )}
      {profile.social.whatsapp && (
        <a
          href={profile.social.whatsapp}
          target="_blank"
          rel="noreferrer"
          className={buttonClass}
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={18} />
        </a>
      )}
    </div>
  )
}
