import LogoLoop from './LogoLoop'
import { profile, SECTION_BASE_STYLE, TOOL_ITEMS } from '../portfolioData'

export default function HomeSection({ sectionRef, isInView, getSectionStyle, onContactClick, onDownloadResume, fadeInUp }) {
  return (
    <section
      ref={sectionRef}
      id="home"
      data-section-index="1"
      style={{
        ...SECTION_BASE_STYLE,
        ...getSectionStyle(1),
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        <div style={fadeInUp(isInView)}>
          <p style={{ fontSize: 'clamp(16px, 4vw, 20px)', color: '#888', marginBottom: '10px' }}>Hello .</p>
          <h1 style={{ fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 'bold', marginBottom: '20px' }}>I'm Nauval</h1>
          <h2 style={{ fontSize: 'clamp(24px, 5vw, 40px)', fontWeight: 'bold', marginBottom: '30px', color: '#888' }} />

          <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <p style={{ margin: 0, maxWidth: '520px', color: '#aaa', lineHeight: 1.8 }}>
              Web designer and developer from Yogyakarta. I create custom websites to help businesses do better online.
            </p>

            <button
              type="button"
              style={{ padding: '12px 30px', backgroundColor: '#FF6B6B', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', transition: 'all 0.3s ease' }}
              onClick={onContactClick}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              Contact Me
            </button>

            <button
              type="button"
              style={{ padding: '12px 30px', backgroundColor: 'transparent', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
              onClick={onDownloadResume}
            >
              My resume
            </button>
          </div>

          <p style={{ fontSize: 'clamp(16px, 4vw, 20px)', color: '#888', marginBottom: '5px' }}>My Tools</p>
          <div style={{ marginTop: '10px', overflow: 'hidden', paddingRight: '20px', display: 'flex', alignItems: 'center', height: '80px' }}>
            <LogoLoop
              logos={TOOL_ITEMS}
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

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1000px' }}>
          <img
            src={profile}
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
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(80px) scale(1.05)'
              e.currentTarget.style.filter = 'drop-shadow(0 30px 60px rgba(255, 107, 107, 1)) drop-shadow(0 0 100px rgba(255, 107, 107, 0.7))'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotateY(-15deg) rotateX(5deg) translateZ(50px)'
              e.currentTarget.style.filter = 'drop-shadow(0 20px 40px rgba(255, 107, 107, 0.8)) drop-shadow(0 0 60px rgba(255, 107, 107, 0.5))'
            }}
          />
        </div>
      </div>
    </section>
  )
}
