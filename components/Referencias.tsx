'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import FadeUp from './ui/FadeUp'
import SectionLabel from './ui/SectionLabel'
import { brazilCases, brazilStats, cplData } from '@/lib/data'

export default function Referencias() {
  return (
    <section id="referencias" className="py-24 px-6" style={{ background: 'var(--dark-2)' }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <SectionLabel className="mb-4">Referências do Brasil</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              Quem já provou que funciona aqui
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Corretores e imobiliárias brasileiros reais, com estratégias reais,
              resultados documentados e o que a RGV pode aprender de cada um.
            </p>
          </div>
        </FadeUp>

        {/* Cases grid */}
        <div className="flex flex-col gap-6 mb-16">
          {brazilCases.map((c, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="card p-6 md:p-8" style={{ borderColor: `${c.color}30` }}>
                <div className="grid md:grid-cols-[1fr_1fr_1fr] gap-6">
                  {/* Identity */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                        style={{ background: `${c.color}20`, color: c.color }}
                      >
                        {c.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-bold text-white">{c.name}</div>
                        <a
                          href={`https://instagram.com/${c.handle.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs hover:underline"
                          style={{ color: c.color }}
                        >
                          {c.handle.startsWith('@') ? c.handle : `@${c.handle}`}
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {c.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: `${c.color}15`, color: c.color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">
                      <span className="block">{c.followers} seguidores</span>
                      <span className="block">{c.location}</span>
                      <span className="block mt-1 text-gray-400">{c.niche}</span>
                    </div>
                  </div>

                  {/* Strategy */}
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: c.color }}>
                      Estratégia: {c.strategy}
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">{c.strategyDetail}</p>
                  </div>

                  {/* Results + Lesson */}
                  <div className="flex flex-col gap-3">
                    <div className="rounded-xl p-4" style={{ background: 'var(--dark-3)' }}>
                      <div className="text-xs text-gray-500 mb-1">Resultado</div>
                      <div className="text-sm font-semibold text-white">{c.result}</div>
                      <div className="text-xs text-gray-400 mt-1">{c.resultDetail}</div>
                    </div>
                    <div className="rounded-xl p-4" style={{ background: `${c.color}0D`, border: `1px solid ${c.color}25` }}>
                      <div className="text-xs font-semibold mb-1" style={{ color: c.color }}>O que a RGV pode aplicar</div>
                      <p className="text-xs text-gray-300 leading-relaxed">{c.keyLesson}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {brazilStats.map((s, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="card p-5 h-full">
                <div className="text-xs text-gray-500 mb-2">{s.type}</div>
                <div className="text-2xl font-bold mb-2" style={{ color: 'var(--gold)' }}>{s.stat}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CPL chart */}
        <FadeUp delay={0.2}>
          <div className="card p-6">
            <div className="text-sm font-medium text-gray-300 mb-1">Custo Por Lead (CPL) estimado: Meta Ads imobiliário</div>
            <div className="text-xs text-gray-500 mb-6">Por mercado no Brasil (R$): Indaiatuba tem CPL competitivo</div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={cplData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                <XAxis
                  type="number"
                  tick={{ fill: '#6B7280', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `R$${v}`}
                />
                <YAxis
                  dataKey="market"
                  type="category"
                  tick={{ fill: '#9CA3AF', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  width={140}
                />
                <Tooltip
                  contentStyle={{ background: '#111118', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 8, color: '#E5E7EB' }}
                  formatter={(v) => [`R$ ${v}`, 'CPL estimado']}
                  labelStyle={{ color: '#E5E7EB' }}
                  itemStyle={{ color: '#C9A84C' }}
                />
                <Bar dataKey="cpl" radius={[0, 4, 4, 0]}>
                  {cplData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.market.includes('Indaiatuba') ? '#C9A84C' : '#1A1A24'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 rounded-lg text-xs text-gray-400" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
              Indaiatuba tem potencial de CPL entre R$ 50–80, muito abaixo das capitais. Leads de alta qualidade a custo baixo.
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
