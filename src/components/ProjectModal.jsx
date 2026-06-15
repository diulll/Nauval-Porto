export default function ProjectModal({ image, onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px',
        cursor: 'pointer',
        animation: 'fadeIn 0.3s ease',
      }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
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
          padding: 0,
          lineHeight: 0,
        }}
        onMouseEnter={(event) => {
          event.currentTarget.style.backgroundColor = 'rgba(255, 107, 107, 0.8)'
          event.currentTarget.style.transform = 'scale(1.1)'
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
          event.currentTarget.style.transform = 'scale(1)'
        }}
      >
        <span style={{ marginTop: '-2px' }}>×</span>
      </button>

      <img
        src={image}
        alt="Project Full View"
        style={{
          maxWidth: '90%',
          maxHeight: '90%',
          objectFit: 'contain',
          borderRadius: '8px',
          boxShadow: '0 20px 60px rgba(255, 107, 107, 0.3)',
        }}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  )
}
