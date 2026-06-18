import { useEffect, useRef, useState } from 'react'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import FloatingNavbar from './components/FloatingNavbar'
import HomeSection from './components/HomeSection'
import MobileMenu from './components/MobileMenu'
import ProjectModal from './components/ProjectModal'
import ProjectsSection from './components/ProjectsSection'
import WelcomeSection from './components/WelcomeSection'
import useCountUp from './hooks/useCountUp'
import useInView from './hooks/useInView'
import useIsMobile from './hooks/useIsMobile'
import { PROJECTS } from './portfolioData'

function App() {
  const [showNavbar, setShowNavbar] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const isMobile = useIsMobile(768)

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const homeInView = useInView(homeRef)
  const aboutInView = useInView(aboutRef)
  const projectsInView = useInView(projectsRef)
  const contactInView = useInView(contactRef)

  const projectsCount = useCountUp(4, 2000, aboutInView)
  const satisfactionCount = useCountUp(95, 2000, aboutInView)
  const yearsCount = useCountUp(2, 2000, aboutInView)

  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false)
    }
  }, [isMobile])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      setShowNavbar(scrollY > windowHeight * 0.8)

      const sections = document.querySelectorAll('section[data-section-index]')
      let currentSectionIndex = 0

      sections.forEach((section) => {
        const sectionIndex = Number(section.dataset.sectionIndex)
        const rect = section.getBoundingClientRect()

        if (rect.top < window.innerHeight * 0.3) {
          currentSectionIndex = sectionIndex
        }
      })

      setActiveSection(currentSectionIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getSectionStyle = (sectionIndex) => {
    const scale = 1 - Math.abs(activeSection - sectionIndex) * 0.05
    const opacity = 1 - Math.abs(activeSection - sectionIndex) * 0.2

    return {
      transform: `scale(${Math.max(0.9, scale)})`,
      opacity: Math.max(0.6, opacity),
      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
    }
  }

  const fadeInUp = (isInView) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(40px)',
    transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
  })

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/cv.pdf')
      if (!response.ok) throw new Error('Download failed')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Nauval_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch {
      const link = document.createElement('a')
      link.href = '/cv.pdf'
      link.download = 'Nauval_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <>
      {showNavbar && (
        <FloatingNavbar
          activeSection={activeSection}
          isMobile={isMobile}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={() => setMobileMenuOpen((currentValue) => !currentValue)}
        />
      )}

      {mobileMenuOpen && isMobile && <MobileMenu activeSection={activeSection} onClose={() => setMobileMenuOpen(false)} />}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <WelcomeSection getSectionStyle={getSectionStyle} />
      <HomeSection
        sectionRef={homeRef}
        isInView={homeInView}
        getSectionStyle={getSectionStyle}
        onContactClick={handleContactClick}
        onDownloadResume={handleDownloadResume}
        fadeInUp={fadeInUp}
      />
      <AboutSection
        sectionRef={aboutRef}
        isInView={aboutInView}
        getSectionStyle={getSectionStyle}
        fadeInUp={fadeInUp}
        stats={{ projectsCount, satisfactionCount, yearsCount }}
      />
      <ProjectsSection
        sectionRef={projectsRef}
        isInView={projectsInView}
        getSectionStyle={getSectionStyle}
        fadeInUp={fadeInUp}
        onSelectImage={setSelectedImage}
        projects={PROJECTS}
      />
      <ContactSection
        sectionRef={contactRef}
        isInView={contactInView}
        getSectionStyle={getSectionStyle}
        fadeInUp={fadeInUp}
      />

      {selectedImage && <ProjectModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </>
  )
}

export default App
