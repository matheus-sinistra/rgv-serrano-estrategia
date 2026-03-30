'use client'

import { useEffect, useState } from 'react'

const navItems = [
  { href: '#diagnostico', label: 'Diagnóstico' },
  { href: '#mercado', label: 'Mercado' },
  { href: '#indaiatuba', label: 'Indaiatuba' },
  { href: '#algoritmo', label: 'Algoritmo' },
  { href: '#referencias', label: 'Referências' },
  { href: '#estrategia', label: 'Estratégia' },
  { href: '#assessoria', label: 'Assessoria' },
  { href: '#atribuicoes', label: 'Atribuições' },
  { href: '#investimento', label: 'Investimento' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="text-sm font-semibold tracking-wider" style={{ color: 'var(--gold)' }}>
          RGV SERRANO
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-wider text-gray-400 hover:text-white transition-colors"
              style={{ textTransform: 'uppercase' }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="w-5 h-px bg-gray-300 block transition-all" style={menuOpen ? { transform: 'rotate(45deg) translate(2px,2px)' } : {}} />
          <span className="w-5 h-px bg-gray-300 block transition-all" style={menuOpen ? { opacity: 0 } : {}} />
          <span className="w-5 h-px bg-gray-300 block transition-all" style={menuOpen ? { transform: 'rotate(-45deg) translate(2px,-2px)' } : {}} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ background: 'rgba(10,10,15,0.98)' }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-300 py-2 border-b"
              style={{ borderColor: 'var(--border)' }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
