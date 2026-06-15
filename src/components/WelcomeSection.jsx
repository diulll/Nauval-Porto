import { useEffect, useState } from 'react'
import { HERO_BACKGROUND } from '../portfolioData'

export default function WelcomeSection({ getSectionStyle }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="welcome"
      data-section-index="0"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#000',
        ...getSectionStyle(0),
      }}
    >
      <img
        src={HERO_BACKGROUND}
        alt="background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 1,
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          zIndex: 2,
          pointerEvents: 'none',
          opacity: Math.min(scrollY / 500, 0.7),
          transition: 'opacity 0.1s ease-out',
        }}
      />

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
  )
}
