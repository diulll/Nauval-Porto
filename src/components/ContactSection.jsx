import { SECTION_BASE_STYLE, SOCIAL_LINKS } from '../portfolioData'

export default function ContactSection({ sectionRef, isInView, getSectionStyle, fadeInUp }) {
  return (
    <section
      ref={sectionRef}
      id="contact"
      data-section-index="4"
      style={{
        ...SECTION_BASE_STYLE,
        ...getSectionStyle(4),
      }}
    >
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center', ...fadeInUp(isInView) }}>
        <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 'bold', marginBottom: '30px' }}>I’m ready for new projects.</h2>
        <p style={{ fontSize: 'clamp(14px, 3vw, 18px)', color: '#aaa', marginBottom: '40px' }}>Don’t worry about reaching out if you’d like to discuss ideas or potential collaboration opportunities.</p>

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
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.transform = 'scale(0.95)'
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.transform = 'scale(1)'
          }}
        >
          Send me an email
        </a>

        <div style={{ marginTop: '60px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transition: 'all 0.3s ease', display: 'inline-block' }}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = 'scale(1.2)'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = 'scale(1)'
              }}
            >
              <img src={link.icon} alt={link.alt} width="28" height="28" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
