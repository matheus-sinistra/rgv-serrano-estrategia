'use client'

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar
} from 'recharts'
import FadeUp from './ui/FadeUp'
import SectionLabel from './ui/SectionLabel'
import StatCard from './ui/StatCard'
import { brasilMarketStats, spMarketStats, brasilGrowthData } from '@/lib/data'

export default function Mercado() {
  return (
    <section id="mercado" className="py-24 px-6" style={{ background: 'var(--dark)' }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <SectionLabel className="mb-4">Mercado Imobiliário</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              Brasil 2025: o setor está em alta
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              O contexto macroeconômico é favorável. Quem posicionar a marca agora
              captura a demanda crescente antes da concorrência.
            </p>
          </div>
        </FadeUp>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {brasilMarketStats.map((s, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <StatCard value={s.value} label={s.label} detail={s.detail} accent={i === 3} />
            </FadeUp>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* VGV Growth Chart */}
          <FadeUp delay={0.1}>
            <div className="card p-6">
              <div className="text-sm font-medium text-gray-300 mb-1">VGV Nacional (R$ bi)</div>
              <div className="text-xs text-gray-500 mb-6">Evolução 2021–2025</div>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={brasilGrowthData}>
                  <defs>
                    <linearGradient id="vgvGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C9A84C" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#C9A84C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="year" tick={{ fill: '#6B7280', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#6B7280', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: '#111118', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 8 }}
                    labelStyle={{ color: '#E5E7EB' }}
                    itemStyle={{ color: '#C9A84C' }}
                    formatter={(v) => [`R$ ${v}bi`, 'VGV']}
                  />
                  <Area
                    type="monotone"
                    dataKey="vgv"
                    stroke="#C9A84C"
                    strokeWidth={2}
                    fill="url(#vgvGrad)"
                    isAnimationActive={true}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </FadeUp>

          {/* SP highlights */}
          <FadeUp delay={0.2}>
            <div className="card p-6 flex flex-col gap-4">
              <div className="text-sm font-medium text-gray-300 mb-2">São Paulo em destaque</div>
              {spMarketStats.map((s, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'var(--dark-3)' }}>
                  <div className="text-3xl font-bold" style={{ color: 'var(--gold)' }}>{s.value}</div>
                  <div>
                    <div className="text-sm text-white font-medium">{s.label}</div>
                    <div className="text-xs text-gray-400">{s.detail}</div>
                  </div>
                </div>
              ))}
              <div className="mt-auto p-4 rounded-xl" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <div className="text-xs text-gray-300 leading-relaxed">
                  <span style={{ color: 'var(--gold)' }} className="font-semibold">FGTS e MCMV</span> impulsionam
                  45–50% das transações. O mercado de médio-alto padrão, onde a RGV atua,
                  se beneficia da valorização sem pressão de subsídios.
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
