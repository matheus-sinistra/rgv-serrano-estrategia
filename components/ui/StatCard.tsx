interface StatCardProps {
  value: string
  label: string
  detail?: string
  accent?: boolean
  className?: string
}

export default function StatCard({ value, label, detail, accent = false, className = '' }: StatCardProps) {
  return (
    <div
      className={`card p-6 flex flex-col gap-2 ${className}`}
      style={accent ? { borderColor: 'var(--gold)', borderWidth: '1px' } : {}}
    >
      <div
        className="text-3xl font-bold"
        style={{ color: accent ? 'var(--gold)' : '#E5E7EB' }}
      >
        {value}
      </div>
      <div className="text-sm font-medium text-gray-300">{label}</div>
      {detail && <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{detail}</div>}
    </div>
  )
}
