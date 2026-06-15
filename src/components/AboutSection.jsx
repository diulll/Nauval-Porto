import { useState } from 'react'
import { GLASS_PANEL_STYLE, SECTION_BASE_STYLE, SERVICES } from '../portfolioData'
import StatItem from './StatItem'

function ServiceItem({ service, isActive, onHover }) {
  const Icon = service.icon

  return (
    <div style={{ marginBottom: '30px', position: 'relative' }}>
      <div
        style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}
        onMouseEnter={() => onHover(service.id)}
        onMouseLeave={() => onHover(null)}
      >
        <Icon style={{ fontSize: '48px', color: '#FF6B6B' }} />
        <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{service.title}</h3>
      </div>

      {isActive && (
        <div style={{ ...GLASS_PANEL_STYLE, position: 'absolute', top: '70px', left: 0 }}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#FF6B6B', margin: 0 }}>{service.description}</p>
        </div>
      )}
    </div>
  )
}

export default function AboutSection({ sectionRef, isInView, getSectionStyle, fadeInUp, stats }) {
  const [activeServiceId, setActiveServiceId] = useState(null)

  return (
    <section
      ref={sectionRef}
      id="about"
      data-section-index="2"
      style={{
        ...SECTION_BASE_STYLE,
        ...getSectionStyle(2),
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%', ...fadeInUp(isInView) }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {SERVICES.map((service) => (
              <ServiceItem
                key={service.id}
                service={service}
                isActive={activeServiceId === service.id}
                onHover={setActiveServiceId}
              />
            ))}
          </div>

          <div>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 'bold', marginBottom: '30px' }}>About me</h2>
            <p style={{ fontSize: 'clamp(14px, 3vw, 16px)', lineHeight: '1.8', color: '#aaa', marginBottom: '40px' }}>
              I’m a beginner Front-End Developer who loves coding cool-looking and responsive websites. I enjoy experimenting with layouts, colors, and interactions to make each project feel unique. I’m still learning and exploring new tools and technologies, and every step I take helps me grow as a developer. I’m excited to keep improving my skills, build more meaningful projects, and become better with every challenge.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '30px' }}>
              <StatItem value={stats.projectsCount} suffix="+" label="Completed Projects" />
              <StatItem value={stats.satisfactionCount} suffix="%" label="Client satisfaction" />
              <StatItem value={stats.yearsCount} suffix="+" label="Years of experience" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
