import { useState, useEffect, useRef } from 'react'
import BlurText from "./BlurText"
import GooeyNav from './components/GooeyNav'
import LogoLoop from './components/LogoLoop'
import { SiReact, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiLaravel, SiPhp, SiGithub } from 'react-icons/si'
import { FaLaptopCode, FaMobileAlt, FaFigma, FaImage } from 'react-icons/fa'
import './App.css'
const Halaman1 = '/Halaman1.png'
import profileImage from './assets/profileweb.png'
import project1Image from './assets/Project_1.png'
import project2Image from './assets/Project_2.png'
import project3Image from './assets/Project_3.png'
import project4Image from './assets/Project_4.png'
import project5Image from './assets/Project_5.png'
import project6Image from './assets/Project_6.png'

// Hook untuk menghitung angka dengan animasi
function useCountUp(target, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(progress * target));
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [shouldStart, target, duration]);

  return count;
}

// Hook untuk IntersectionObserver animation
function useInView(ref) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reset state berdasarkan visibility - animasi berjalan setiap kali elemen terlihat
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isInView;
}

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Navbar muncul setelah scroll melewati 80% dari tinggi viewport pertama
      const shouldShow = scrollY > windowHeight * 0.8;
      setShowNavbar(shouldShow);

      // Detect active section based on scroll position
      const sections = document.querySelectorAll('section');
      let currentSectionIndex = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // If section is visible in viewport, mark it as active
        if (rect.top < window.innerHeight * 0.3) {
          currentSectionIndex = index;
        }
      });

      setActiveSection(currentSectionIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const getAnimationStyle = (sectionIndex) => {
    const scale = 1 - Math.abs(activeSection - sectionIndex) * 0.05;
    const opacity = 1 - Math.abs(activeSection - sectionIndex) * 0.2;

    return {
      transform: `scale(${Math.max(0.9, scale)})`,
      opacity: Math.max(0.6, opacity),
      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
    };
  };

  return (
    <>
      {/* Navbar dengan GooeyNav */}
      {showNavbar && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '1000',
          pointerEvents: 'none'
        }}>
          <nav style={{
            backgroundColor: 'rgba(20, 20, 30, 0.4)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50px',
            padding: '4px 18px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
            boxShadow: '0 8px 32px 0 rgba(255, 107, 107, 0.3)',
            animation: 'slideDown 0.3s ease-out',
            pointerEvents: 'auto'
          }}>
          
          {/* Desktop GooeyNav */}
          <div style={{ display: window.innerWidth > 768 ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <GooeyNav
              items={navItems}
              particleCount={10}
              particleDistances={[55, 6]}
              particleR={65}
              initialActiveIndex={activeSection - 1}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: window.innerWidth <= 768 ? 'block' : 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              fontSize: '14px',
              zIndex: 1001
            }}
          >
            ☰
          </button>
          </nav>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && window.innerWidth <= 768 && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: '20px',
          right: '20px',
          backgroundColor: 'rgba(20, 20, 30, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '20px',
          zIndex: '999',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          animation: 'slideDown 0.3s ease-out'
        }}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: activeSection - 1 === index ? '#FF6B6B' : '#fff',
                textDecoration: 'none',
                fontSize: '16px',
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: activeSection - 1 === index ? 'rgba(255, 107, 107, 0.2)' : 'transparent',
                transition: 'all 0.3s',
                textAlign: 'center'
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

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

      {/* Section Welcome dengan Cursor Tracking */}
      <WelcomeSection activeSection={activeSection} getAnimationStyle={getAnimationStyle} />
      
      {/* Rest of sections */}
      <AppSections activeSection={activeSection} getAnimationStyle={getAnimationStyle} />
    </>
  )
}

function WelcomeSection({ activeSection, getAnimationStyle }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="welcome" 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#000',
        ...getAnimationStyle(0)
      }}
    >
      <img 
        src={Halaman1} 
        alt="background" 
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: '1',
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Overlay fade effect saat scroll */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          zIndex: '2',
          pointerEvents: 'none',
          opacity: Math.min(scrollY / 500, 0.7),
          transition: 'opacity 0.1s ease-out'
        }}
      />
      
      {/* Scroll Down Animation */}
      <style>{`
        @keyframes bounce-down {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(15px);
            opacity: 0.5;
          }
        }
        
        @keyframes fade-in-out {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        
        .scroll-down {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        
        .scroll-down-text {
          color: #FF6B6B;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 2px;
          animation: fade-in-out 2.5s ease-in-out infinite;
        }
        
        .scroll-down-arrow {
          color: #FF6B6B;
          font-size: 28px;
          animation: bounce-down 2.5s ease-in-out infinite;
        }
      `}</style>
      
      <div className="scroll-down" style={{ opacity: scrollY < 100 ? 1 : 0, transition: 'opacity 0.3s ease-out' }}>
        <span className="scroll-down-text">SCROLL</span>
        <div className="scroll-down-arrow">↓</div>
      </div>
    </section>
  );
}

function AppSections({ activeSection, getAnimationStyle }) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const homeInView = useInView(homeRef);
  const aboutInView = useInView(aboutRef);
  const projectsInView = useInView(projectsRef);
  const contactInView = useInView(contactRef);

  // State untuk popup services
  const [showWebDevPopup, setShowWebDevPopup] = useState(false);
  const [showAppDevPopup, setShowAppDevPopup] = useState(false);
  const [showUiUxPopup, setShowUiUxPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Count up animations
  const projectsCount = useCountUp(17, 2000, aboutInView);
  const satisfactionCount = useCountUp(95, 2000, aboutInView);
  const yearsCount = useCountUp(2, 2000, aboutInView);

  const fadeInUp = (isInView) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(40px)',
    transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
  });

  return (
    <>
      {/* Section 2: Home */}
      <section ref={homeRef} id="home" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '40px 20px', 
        backgroundColor: '#000', 
        color: '#fff',
        ...getAnimationStyle(1)
      }}>
        <div style={{ maxWidth: '1200px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {/* Left Content */}
          <div style={fadeInUp(homeInView)}>
            <p style={{ fontSize: 'clamp(16px, 4vw, 20px)', color: '#888', marginBottom: '10px' }}>Hello .</p>
            <h1 style={{ fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 'bold', marginBottom: '20px' }}>I'm Nauval</h1>
            <h2 style={{ fontSize: 'clamp(24px, 5vw, 40px)', fontWeight: 'bold', marginBottom: '30px', color: '#888' }}></h2>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>Web designer and developer from
Yogyakarta. I create custom websites to
help businesses do better online.
              <button 
                style={{ padding: '12px 30px', backgroundColor: '#FF6B6B', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', transition: 'all 0.3s ease' }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(0.95)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Contact Me
              </button>
              <button 
                style={{ padding: '12px 30px', backgroundColor: 'transparent', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(0.95)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              >
                My resume
              </button>
            </div>
            <p style={{ fontSize: 'clamp(16px, 4vw, 20px)', color: '#888', marginBottom: '5px' }}>My Tools</p>
            <div style={{ 
              marginTop: '10px',
              overflow: 'hidden',
              paddingRight: '20px',
              display: 'flex',
              alignItems: 'center',
              height: '80px'
            }}>
              <LogoLoop
                logos={[
                  { node: <SiHtml5 style={{ fontSize: '48px', color: '#E34C26' }} />, title: "HTML5", href: "https://html.spec.whatwg.org" },
                  { node: <SiCss3 style={{ fontSize: '48px', color: '#1572B6' }} />, title: "CSS3", href: "https://www.w3.org/Style/CSS" },
                  { node: <SiJavascript style={{ fontSize: '48px', color: '#F7DF1E' }} />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                  { node: <SiReact style={{ fontSize: '48px', color: '#3498DB' }} />, title: "React", href: "https://react.dev" },
                  { node: <SiLaravel style={{ fontSize: '48px', color: '#FF2D20' }} />, title: "Laravel", href: "https://laravel.com" },
                  { node: <SiPhp style={{ fontSize: '48px', color: '#777BB4' }} />, title: "PHP", href: "https://www.php.net" },
                  { node: <div style={{ display: 'flex', gap: '0px' }}><SiTailwindcss style={{ fontSize: '48px', color: '#06B6D4' }} /><div style={{ width: '48px', height: '48px', opacity: 0 }}></div></div>, title: "Tailwind CSS", href: "https://tailwindcss.com" }
                ]}
                speed={100}
                direction="left"
                logoHeight={48}
                gap={30}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#000000"
                ariaLabel="Technology tools"
              />
            </div>
          </div>

          {/* Right Content - Image placeholder */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1000px' }}>
            <img 
              src={profileImage} 
              alt="Profile" 
              style={{
                width: 'clamp(100px, 100%, 300px)',
                height: 'clamp(100px, 100%, 300px)',
                borderRadius: '50% 50% 0 0',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'drop-shadow(0 20px 40px rgba(255, 107, 107, 0.8)) drop-shadow(0 0 60px rgba(255, 107, 107, 0.5))',
                transform: 'rotateY(-15deg) rotateX(5deg) translateZ(50px)',
                transition: 'all 0.5s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(80px) scale(1.05)';
                e.target.style.filter = 'drop-shadow(0 30px 60px rgba(255, 107, 107, 1)) drop-shadow(0 0 100px rgba(255, 107, 107, 0.7))';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'rotateY(-15deg) rotateX(5deg) translateZ(50px)';
                e.target.style.filter = 'drop-shadow(0 20px 40px rgba(255, 107, 107, 0.8)) drop-shadow(0 0 60px rgba(255, 107, 107, 0.5))';
              }}
            />
          </div>
        </div>
      </section>

      {/* Section 3: About */}
      <section ref={aboutRef} id="about" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '40px 20px', 
        backgroundColor: '#000', 
        color: '#fff',
        ...getAnimationStyle(2)
      }}>
        <div style={{ maxWidth: '1200px', width: '100%', ...fadeInUp(aboutInView) }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            {/* Left Services */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ marginBottom: '30px', position: 'relative' }}>
                <div 
                  style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}
                  onMouseEnter={() => setShowWebDevPopup(true)}
                  onMouseLeave={() => setShowWebDevPopup(false)}
                >
                  <FaLaptopCode style={{ fontSize: '48px', color: '#FF6B6B' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Website Development</h3>
                </div>
                {showWebDevPopup && (
                  <div style={{
                    position: 'absolute',
                    top: '70px',
                    left: '0',
                    backgroundColor: 'rgba(20, 20, 30, 0.4)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '15px 20px',
                    maxWidth: '350px',
                    zIndex: 100,
                    boxShadow: '0 8px 32px 0 rgba(255, 107, 107, 0.3)',
                    animation: 'fadeIn 0.3s ease-in'
                  }}>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#FF6B6B', margin: 0 }}>
                      Building a solid website for your business. We create responsive, fast, and secure websites, ensuring your business is always accessible from anywhere, anytime
                    </p>
                  </div>
                )}
              </div>
              <div style={{ marginBottom: '30px', position: 'relative' }}>
                <div 
                  style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}
                  onMouseEnter={() => setShowAppDevPopup(true)}
                  onMouseLeave={() => setShowAppDevPopup(false)}
                >
                  <FaMobileAlt style={{ fontSize: '48px', color: '#FF6B6B' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>App Development</h3>
                </div>
                {showAppDevPopup && (
                  <div style={{
                    position: 'absolute',
                    top: '70px',
                    left: '0',
                    backgroundColor: 'rgba(20, 20, 30, 0.4)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '15px 20px',
                    maxWidth: '350px',
                    zIndex: 100,
                    boxShadow: '0 8px 32px 0 rgba(255, 107, 107, 0.3)',
                    animation: 'fadeIn 0.3s ease-in'
                  }}>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#FF6B6B', margin: 0 }}>
                      Turning innovative ideas into powerful mobile apps. We develop stable and intuitive iOS and Android apps, helping you connect with customers right at their fingertips
                    </p>
                  </div>
                )}
              </div>
              <div style={{ position: 'relative' }}>
                <div 
                  style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}
                  onMouseEnter={() => setShowUiUxPopup(true)}
                  onMouseLeave={() => setShowUiUxPopup(false)}
                >
                  <FaFigma style={{ fontSize: '48px', color: '#FF6B6B' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>UI / UX Designer</h3>
                </div>
                {showUiUxPopup && (
                  <div style={{
                    position: 'absolute',
                    top: '70px',
                    left: '0',
                    backgroundColor: 'rgba(20, 20, 30, 0.4)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '15px 20px',
                    maxWidth: '350px',
                    zIndex: 100,
                    boxShadow: '0 8px 32px 0 rgba(255, 107, 107, 0.3)',
                    animation: 'fadeIn 0.3s ease-in'
                  }}>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#FF6B6B', margin: 0 }}>
                      More than just aesthetics, we design experiences. Through in-depth research and user-friendly interface design, we ensure users feel at home and can easily interact with your digital products.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right About Content */}
            <div>
              <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 'bold', marginBottom: '30px' }}>About me</h2>
              <p style={{ fontSize: 'clamp(14px, 3vw, 16px)', lineHeight: '1.8', color: '#aaa', marginBottom: '40px' }}>
                I started my software journey from photography. Through that, I learned to love the process of creating from scratch. Since then, this has led me to software development as it fulfills my love for learning and building things.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '30px' }}>
                <div>
                  <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#FF6B6B' }}>{projectsCount} <span style={{ color: '#FF6B6B' }}>+</span></h3>
                  <p style={{ fontSize: '14px', color: '#666' }}>Completed Projects</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#FF6B6B' }}>{satisfactionCount} <span style={{ color: '#FF6B6B' }}>%</span></h3>
                  <p style={{ fontSize: '14px', color: '#666' }}>Client satisfaction</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#FF6B6B' }}>{yearsCount} <span style={{ color: '#FF6B6B' }}>+</span></h3>
                  <p style={{ fontSize: '14px', color: '#666' }}>Years of experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Projects */}
      <section ref={projectsRef} id="projects" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '40px 20px', 
        backgroundColor: '#000', 
        color: '#fff',
        ...getAnimationStyle(3)
      }}>
        <div style={{ maxWidth: '1200px', width: '100%', ...fadeInUp(projectsInView) }}>
          <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 'bold', marginBottom: '60px', textAlign: 'center' }}>Projects</h2>
          
          {/* Data Projects - Edit di sini untuk mengubah informasi project */}
          {(() => {
            const projectsData = [
              {
                id: 1,
                title: 'Old Calculator',
                description: 'A simple calculator web application',
                image: project1Image,
                githubLink: 'https://github.com/diulll/Old-calculator',
                websiteLink: 'https://old-calculator.vercel.app/'
              },
              {
                id: 2,
                title: 'Project 2',
                description: 'Project description goes here',
                image: project2Image,
                githubLink: 'https://github.com/diulll',
                websiteLink: null
              },
              {
                id: 3,
                title: 'Project 3',
                description: 'Project description goes here',
                image: project3Image,
                githubLink: 'https://github.com/diulll',
                websiteLink: null
              },
              {
                id: 4,
                title: 'Project 4',
                description: 'Project description goes here',
                image: project4Image,
                githubLink: 'https://github.com/diulll',
                websiteLink: null
              },
              {
                id: 5,
                title: 'Project 5',
                description: 'Project description goes here',
                image: project5Image,
                githubLink: 'https://github.com/diulll',
                websiteLink: null
              },
              {
                id: 6,
                title: 'Project 6',
                description: 'Project description goes here',
                image: project6Image,
                githubLink: 'https://github.com/diulll',
                websiteLink: null
              }
            ];

            return (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                {projectsData.map((projectData) => {
                  const cardRef = useRef(null);
                  const cardInView = useInView(cardRef);
                  const [isHovered, setIsHovered] = useState(false);
              
                  return (
                    <div 
                      key={projectData.id} 
                      ref={cardRef} 
                  style={{
                    backgroundColor: '#1a1a1a',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    minHeight: '300px',
                    transform: cardInView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                    opacity: cardInView ? 1 : 0,
                    boxShadow: cardInView ? '0 20px 40px rgba(255, 107, 107, 0.2)' : '0 10px 20px rgba(255, 107, 107, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(0.95)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 107, 107, 0.4)';
                    setIsHovered(true);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 107, 107, 0.2)';
                    setIsHovered(false);
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '200px',
                    backgroundColor: '#2a2a2a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666',
                    fontSize: '14px',
                    transition: 'all 0.6s ease',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={projectData.image} 
                      alt={projectData.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'all 0.3s ease',
                        filter: isHovered ? 'brightness(0.4)' : 'brightness(1)'
                      }} 
                    />
                    
                    {/* Overlay dengan icons */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '30px',
                      opacity: isHovered ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      pointerEvents: isHovered ? 'auto' : 'none'
                    }}>
                      <a
                        href={projectData.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '50px',
                          height: '50px',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '50%',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 107, 107, 0.8)';
                          e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        <SiGithub style={{ fontSize: '24px', color: 'white' }} />
                      </a>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (projectData.websiteLink) {
                            window.open(projectData.websiteLink, '_blank');
                          } else {
                            setSelectedImage(projectData.image);
                          }
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '50px',
                          height: '50px',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '50%',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 107, 107, 0.8)';
                          e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        <FaImage style={{ fontSize: '24px', color: 'white' }} />
                      </button>
                    </div>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{projectData.title}</h3>
                    <p style={{ fontSize: '14px', color: '#888' }}>{projectData.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          );
          })()}
        </div>
      </section>

      {/* Section 5: Contact */}
      <section ref={contactRef} id="contact" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '40px 20px', 
        backgroundColor: '#000', 
        color: '#fff',
        ...getAnimationStyle(4)
      }}>
        <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center', ...fadeInUp(contactInView) }}>
          <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 'bold', marginBottom: '30px' }}>Let's Work Together</h2>
          <p style={{ fontSize: 'clamp(14px, 3vw, 18px)', color: '#aaa', marginBottom: '40px' }}>I'm always interested in hearing about new projects and opportunities.</p>
          <a 
            href="mailto:badiulfikri24@gmail.com" 
            style={{
              display: 'inline-block',
              padding: '15px 40px',
              backgroundColor: '#FF6B6B',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(0.95)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            Send me an email
          </a>
          <div style={{ marginTop: '60px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://wa.me/6281239638514" target="_blank" rel="noopener noreferrer" style={{ transition: 'all 0.3s ease', display: 'inline-block' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
              <img src="https://cdn.simpleicons.org/whatsapp/888888" alt="Twitter" width="28" height="28" />
            </a>
            <a href="https://github.com/diulll" target="_blank" rel="noopener noreferrer" style={{ transition: 'all 0.3s ease', display: 'inline-block' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
              <img src="https://cdn.simpleicons.org/github/888888" alt="Github" width="28" height="28" />
            </a>
            <a href="https://www.instagram.com/diul.f/" target="_blank" rel="noopener noreferrer" style={{ transition: 'all 0.3s ease', display: 'inline-block' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
              <img src="https://cdn.simpleicons.org/instagram/888888" alt="Instagram" width="28" height="28" />
            </a>
          </div>
        </div>
      </section>

      {/* Modal untuk menampilkan gambar full size */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
            cursor: 'pointer',
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontSize: '24px',
              fontWeight: '400',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              zIndex: 10000,
              padding: '0',
              lineHeight: '0'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 107, 107, 0.8)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span style={{ marginTop: '-2px' }}>×</span>
          </button>
          <img
            src={selectedImage}
            alt="Project Full View"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 20px 60px rgba(255, 107, 107, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default App