interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium tracking-widest uppercase ${className}`}
      style={{ borderColor: 'var(--border)', color: 'var(--gold)' }}>
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gold)' }} />
      {children}
    </div>
  )
}
