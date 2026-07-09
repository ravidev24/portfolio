import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ResumeProvider } from './context/ResumeContext'
import Background from './components/Background'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 80,
      once: true,
      easing: 'ease-out-cubic',
    })

    const handleLoad = () => AOS.refresh()
    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <ResumeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <Background />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Showcase />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ResumeProvider>
  )
}
