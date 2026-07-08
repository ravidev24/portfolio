import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import Section from './Section'
import SectionHeader from './SectionHeader'
import CardGrid from './CardGrid'
import HighlightCard from './HighlightCard'
import SocialLinks from './SocialLinks'
import { profile } from '../data/portfolio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 700))
    toast.success('Message sent successfully!')
    setForm({ name: '', email: '', message: '' })
    setLoading(false)
  }

  return (
    <Section id="contact" variant="cyan">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#151d28',
            color: '#fff',
            border: '1px solid rgba(16, 185, 129, 0.2)',
          },
        }}
      />

      <SectionHeader eyebrow="Contact" title="Get In Touch" index="07" />

      <CardGrid>
        <HighlightCard>
          <div className="flex h-full flex-col justify-center space-y-5">
            <p className="text-base leading-relaxed text-muted">
              Have a project in mind or want to collaborate? Reach out — I&apos;ll reply as soon as
              possible.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-accent/10 p-4 transition hover:border-accent-light"
            >
              <HiMail className="text-xl text-accent-light" />
              <span className="text-sm text-white">{profile.email}</span>
            </a>

            <a
              href={profile.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-emerald-500/10 p-4 transition hover:border-emerald-400"
            >
              <FaWhatsapp className="text-xl text-emerald-400" />
              <span className="text-sm text-white">WhatsApp: {profile.phoneDisplay}</span>
            </a>

            <div className="flex items-center gap-3 rounded-xl border border-border p-4">
              <HiLocationMarker className="text-xl text-cyan" />
              <span className="text-sm text-muted">{profile.location}</span>
            </div>

            <SocialLinks className="flex gap-3 pt-2" />
          </div>
        </HighlightCard>

        <HighlightCard>
          <form onSubmit={handleSubmit} className="flex h-full flex-col space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-white outline-none transition focus:border-accent-light"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-white outline-none transition focus:border-accent-light"
                  placeholder={profile.email}
                />
              </div>
            </div>

            <div className="flex-1">
              <label htmlFor="message" className="mb-2 block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-white outline-none transition focus:border-accent-light"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-surface transition hover:bg-accent-light disabled:opacity-70"
            >
              <HiPaperAirplane />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </HighlightCard>
      </CardGrid>
    </Section>
  )
}
