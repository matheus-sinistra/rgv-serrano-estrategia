'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import FadeUp from './ui/FadeUp'
import SectionLabel from './ui/SectionLabel'
import { indaiatubaStats, indaiatubaRankings, regionalComparison, indaiatubaDemographics } from '@/lib/data'

export default function Indaiatuba() {
  return (
    <section id="indaiatuba" className="py-24 px-6" style={{ background: 'var(--dark-2)' }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <SectionLabel className="mb-4">Indaiatuba</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              A cidade que se vende sozinha
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Quando o produto é excepcional, o marketing precisa apenas comunicá-lo.
              Indaiatuba entrega argumentos que nenhum copywriter inventaria.
            </p>
          </div>
        </FadeUp>

        {/* Rankings */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {indaiatubaRankings.map((r, i) => (
              <div key={i} className="card p-5 flex items-start gap-4">
                <div
                  className="text-3xl font-bold flex-shrink-0 w-14 text-center"
                  style={{ color: 'var(--gold)' }}
                >
                  {r.position}
                </div>
                <div>
                  <div className="text-xs font-medium mb-0.5" style={{ color: 'var(--gold)' }}>{r.scope}</div>
                  <div className="text-sm font-semibold text-white">{r.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{r.source}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {indaiatubaStats.map((s, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.06}>
              <div className="card p-5">
                <div className="text-2xl font-bold mb-1" style={{ color: 'var(--gold)' }}>{s.value}</div>
                <div className="text-sm text-white font-medium">{s.label}</div>
                <div className="text-xs text-gray-500 mt-1">{s.detail}</div>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Regional comparison chart */}
          <FadeUp delay={0.2}>
            <div className="card p-6">
              <div className="text-sm font-medium text-gray-300 mb-1">Comparativo regional: Preço m²</div>
              <div className="text-xs text-gray-500 mb-6">Cidades na área de atuação RGV</div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={regionalComparison} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                  <XAxis
                    type="number"
                    tick={{ fill: '#6B7280', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `R$${(v/1000).toFixed(1)}k`}
                  />
                  <YAxis
                    dataKey="city"
                    type="category"
                    tick={{ fill: '#9CA3AF', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    width={80}
                  />
                  <Tooltip
                    contentStyle={{ background: '#111118', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 8 }}
                    formatter={(v) => [`R$ ${typeof v === 'number' ? v.toLocaleString('pt-BR') : v}/m²`, '']}
                    labelStyle={{ color: '#E5E7EB' }}
                  />
                  <Bar dataKey="priceM2" radius={[0, 4, 4, 0]}>
                    {regionalComparison.map((entry, index) => (
                      <Cell key={index} fill={entry.highlight ? '#C9A84C' : '#1A1A24'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </FadeUp>

          {/* Demographics */}
          <FadeUp delay={0.3}>
            <div className="card p-6 flex flex-col gap-4">
              <div className="text-sm font-medium text-gray-300 mb-2">Perfil do comprador</div>
              {[
                { label: 'Perfil', value: indaiatubaDemographics.buyerProfile },
                { label: 'Comportamento digital', value: indaiatubaDemographics.digitalProfile },
                { label: 'PIB per capita', value: indaiatubaDemographics.gdpPerCapita },
                { label: 'IDH', value: indaiatubaDemographics.idh },
                { label: 'Crescimento pop.', value: indaiatubaDemographics.growth5y + ' em 5 anos' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="text-gray-500 w-36 flex-shrink-0">{item.label}</span>
                  <span className="text-gray-200">{item.value}</span>
                </div>
              ))}

              <div className="mt-2 p-4 rounded-xl" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--gold)' }}>
                  Este perfil demográfico é exatamente quem mais usa Instagram para
                  pesquisar imóveis antes de contatar um corretor.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
