import { NAV_ITEMS } from '../portfolioData'

export default function MobileMenu({ activeSection, onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '70px',
        left: '20px',
        right: '20px',
        backgroundColor: 'rgba(20, 20, 30, 0.9)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '20px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        animation: 'slideDown 0.3s ease-out',
      }}
    >
      {NAV_ITEMS.map((item, index) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onClose}
          style={{
            color: activeSection - 1 === index ? '#FF6B6B' : '#fff',
            textDecoration: 'none',
            fontSize: '16px',
            padding: '12px 16px',
            borderRadius: '8px',
            backgroundColor: activeSection - 1 === index ? 'rgba(255, 107, 107, 0.2)' : 'transparent',
            transition: 'all 0.3s',
            textAlign: 'center',
          }}
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}
