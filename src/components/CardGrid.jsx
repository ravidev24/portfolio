import { Children, useState } from 'react'
import clsx from 'clsx'

export default function CardGrid({ children, className = '', interactive = false }) {
  const items = Children.toArray(children)

  if (!interactive) {
    return <div className={clsx('card-grid', className)}>{children}</div>
  }

  const [activeIndex, setActiveIndex] = useState(null)
  const isFocused = activeIndex !== null

  return (
    <div
      className={clsx('interactive-card-grid', isFocused && 'is-focused', className)}
      onMouseLeave={() => setActiveIndex(null)}
    >
      {items.map((child, index) => (
        <div
          key={index}
          className={clsx(
            'interactive-card-slot',
            !isFocused && 'slot-equal',
            isFocused && activeIndex === index && 'slot-expanded',
            isFocused && activeIndex !== index && 'slot-preview',
          )}
          onMouseEnter={() => setActiveIndex(index)}
        >
          <div className="interactive-card-inner">{child}</div>
        </div>
      ))}
    </div>
  )
}
