export default function StatItem({ value, suffix, label }) {
  return (
    <div>
      <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#FF6B6B' }}>
        {value} <span style={{ color: '#FF6B6B' }}>{suffix}</span>
      </h3>
      <p style={{ fontSize: '14px', color: '#666' }}>{label}</p>
    </div>
  )
}
