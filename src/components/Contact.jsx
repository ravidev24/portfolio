import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi'
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

    await new Promise((resolve) => setTimeout(resolve, 800))

    toast.success('Message sent! I will get back to you soon.')
    setForm({ name: '', email: '', message: '' })
    setLoading(false)
  }

  return (
    <section id="contact" className="section-padding bg-surface-elevated/50">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#16161f',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.08)',
          },
        }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent-light">
            Contact
          </p>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-muted">
            Have a project in mind or want to collaborate? Send a message and I&apos;ll
            reply as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:border-accent/30"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent-light">
                <HiMail size={22} />
              </span>
              <div>
                <p className="text-sm text-muted">Email</p>
                <p className="font-medium text-white">{profile.email}</p>
              </div>
            </a>

            <div className="glass flex items-center gap-4 rounded-2xl p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-highlight/20 text-highlight">
                <HiLocationMarker size={22} />
              </span>
              <div>
                <p className="text-sm text-muted">Location</p>
                <p className="font-medium text-white">{profile.location}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-6 md:p-8">
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
                placeholder="you@example.com"
              />
            </div>

            <div>
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
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
            >
              <HiPaperAirplane />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
