'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from './ui/AnimatedCounter'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
      style={{ background: 'var(--dark)' }}
    >
      {/* Background gradient orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,168,76,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium tracking-widest uppercase mb-8"
          style={{ borderColor: 'var(--border)', color: 'var(--gold)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gold)' }} />
          Proposta de Assessoria de Marketing
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="gold-gradient">Estratégia Digital</span>
          <br />
          <span className="text-white">para RGV Serrano</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Uma estratégia baseada em dados reais do mercado imobiliário de Indaiatuba,
          benchmarks do setor e cases comprovados do mercado brasileiro.
        </motion.p>

        {/* Hero stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto"
        >
          {[
            { value: 264, prefix: 'R$', suffix: 'bi', label: 'VGV Brasil 2025' },
            { value: 6400000000, prefix: 'R$', suffix: 'bi', label: 'VGV Indaiatuba', display: '6,4bi' },
            { value: 3, prefix: '', suffix: '°', label: 'Melhor cidade BR' },
          ].map((item, i) => (
            <div
              key={i}
              className="card p-5 flex flex-col items-center gap-1"
            >
              <div className="text-2xl md:text-3xl font-bold gold-gradient">
                {item.display ? (
                  <span style={{ color: 'var(--gold)' }}>{item.prefix}{item.display}</span>
                ) : (
                  <>
                    {item.prefix}
                    <AnimatedCounter value={item.value} />
                    {item.suffix}
                  </>
                )}
              </div>
              <div className="text-xs text-gray-400 text-center">{item.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <a
            href="#diagnostico"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Ver análise completa
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
