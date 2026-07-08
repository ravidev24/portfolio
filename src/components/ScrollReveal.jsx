export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  className = '',
}) {
  return (
    <div
      className={className}
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-easing="ease-out-cubic"
    >
      {children}
    </div>
  )
}
