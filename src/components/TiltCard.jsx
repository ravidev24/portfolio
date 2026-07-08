import { useRef } from 'react'

export default function TiltCard({ children, className = '' }) {
  const cardRef = useRef(null)

  const handleMove = (event) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateX = ((y - rect.height / 2) / rect.height) * -12
    const rotateY = ((x - rect.width / 2) / rect.width) * 12

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform =
      'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}
