import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

export default function HighlightCard({ children, className = '', span = false }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2, rootMargin: '-30px 0px -15% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={clsx(
        'portfolio-card h-full w-full',
        inView && 'card-scroll-active',
        hovered && 'card-hover-active',
        className,
      )}
    >
      {children}
    </article>
  )
}
