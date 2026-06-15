import { useRef, useState } from 'react'
import { FaGlobe } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import { ACTION_BUTTON_STYLE, PROJECT_CARD_STYLE } from '../portfolioData'
import useInView from '../hooks/useInView'

export default function ProjectCard({ project, onSelectImage }) {
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      ref={cardRef}
      style={{
        ...PROJECT_CARD_STYLE,
        transform: cardInView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        opacity: cardInView ? 1 : 0,
        boxShadow: cardInView ? '0 20px 40px rgba(255, 107, 107, 0.2)' : '0 10px 20px rgba(255, 107, 107, 0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(0.95)'
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 107, 107, 0.4)'
        setIsHovered(true)
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 107, 107, 0.2)'
        setIsHovered(false)
      }}
    >
      <div
        style={{
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
          position: 'relative',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'all 0.3s ease',
            filter: isHovered ? 'brightness(0.4)' : 'brightness(1)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: isHovered ? 'auto' : 'none',
          }}
        >
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            style={ACTION_BUTTON_STYLE}
            onMouseEnter={(event) => {
              event.currentTarget.style.backgroundColor = 'rgba(255, 107, 107, 0.8)'
              event.currentTarget.style.transform = 'scale(1.1)'
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
              event.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <SiGithub style={{ fontSize: '24px', color: 'white' }} />
          </a>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              if (project.websiteLink) {
                window.open(project.websiteLink, '_blank', 'noopener,noreferrer')
              } else {
                onSelectImage(project.image)
              }
            }}
            style={ACTION_BUTTON_STYLE}
            onMouseEnter={(event) => {
              event.currentTarget.style.backgroundColor = 'rgba(255, 107, 107, 0.8)'
              event.currentTarget.style.transform = 'scale(1.1)'
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
              event.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <FaGlobe style={{ fontSize: '24px', color: 'white' }} />
          </button>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{project.title}</h3>
        <p style={{ fontSize: '14px', color: '#888' }}>{project.description}</p>
      </div>
    </div>
  )
}
