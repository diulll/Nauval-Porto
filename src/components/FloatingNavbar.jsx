import GooeyNav from './GooeyNav'
import { GLASS_NAV_STYLE, NAV_ITEMS } from '../portfolioData'

export default function FloatingNavbar({ activeSection, isMobile, mobileMenuOpen, onToggleMobileMenu }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        pointerEvents: 'none',
      }}
    >
      <nav style={GLASS_NAV_STYLE}>
        {!isMobile ? (
          <GooeyNav
            items={NAV_ITEMS}
            particleCount={10}
            particleDistances={[55, 6]}
            particleR={65}
            initialActiveIndex={Math.max(0, activeSection - 1)}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        ) : (
          <button
            type="button"
            onClick={onToggleMobileMenu}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              fontSize: '14px',
              zIndex: 1001,
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        )}
      </nav>
    </div>
  )
}
