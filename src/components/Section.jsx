import { useEffect, useRef } from 'react'
import clsx from 'clsx'

export default function Section({
  id,
  children,
  className = '',
  variant = 'default',
}) {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    const glow = glowRef.current
    if (!section || !content) return

    let rafId = 0

    const updateParallax = () => {
      const rect = section.getBoundingClientRect()
      const viewHeight = window.innerHeight
      const centerOffset = rect.top + rect.height / 2 - viewHeight / 2
      const progress = 1 - Math.min(Math.max((centerOffset + viewHeight * 0.5) / (viewHeight + rect.height), 0), 1)

      const contentShift = (progress - 0.5) * -28
      const glowShift = (progress - 0.5) * -56

      content.style.setProperty('--section-parallax', `${contentShift}px`)
      if (glow) {
        glow.style.setProperty('--glow-parallax', `${glowShift}px`)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        section.classList.toggle('is-visible', entry.isIntersecting)
        if (entry.isIntersecting) updateParallax()
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(section)

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateParallax)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    updateParallax()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={clsx(
        'section-padding scroll-section relative w-full',
        `section-bg-${variant}`,
        className,
      )}
    >
      <div
        ref={glowRef}
        className="section-bg-glow parallax-glow pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      />
      <div
        ref={contentRef}
        className="section-parallax-content relative z-10 mx-auto w-full max-w-[1400px]"
      >
        {children}
      </div>
    </section>
  )
}
