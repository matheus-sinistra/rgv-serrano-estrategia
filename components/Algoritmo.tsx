'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts'
import FadeUp from './ui/FadeUp'
import SectionLabel from './ui/SectionLabel'
import { algorithmStats, formatComparison, contentStrategyData, algorithmKeyFacts } from '@/lib/data'

export default function Algoritmo() {
  return (
    <section id="algoritmo" className="py-24 px-6" style={{ background: 'var(--dark)' }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <SectionLabel className="mb-4">O Algoritmo</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              3 sinais que o Instagram prioriza
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Em 2025, o algoritmo favorece quem entende o jogo. O conteúdo criado
              vale mais que o orçamento: 56% do resultado de uma campanha vem da qualidade do conteúdo.
            </p>
          </div>
        </FadeUp>

        {/* 3 signals */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {algorithmStats.map((s, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="card p-6 h-full" style={{ borderColor: `${s.color}33` }}>
                <div className="text-sm font-semibold mb-4" style={{ color: s.color }}>{s.signal}</div>
                <div className="flex gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-white">{s.engagementRate}</div>
                    <div className="text-xs text-gray-500">Eng. rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{s.ctr}</div>
                    <div className="text-xs text-gray-500">CTR</div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{s.detail}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Key facts */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {algorithmKeyFacts.map((f, i) => (
              <div key={i} className="card p-5 text-center">
                <div className="text-2xl mb-2">{f.icon}</div>
                <div className="text-2xl font-bold mb-2" style={{ color: 'var(--gold)' }}>{f.stat}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{f.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Format comparison */}
          <FadeUp delay={0.1}>
            <div className="card p-6">
              <div className="text-sm font-medium text-gray-300 mb-1">Engajamento por formato</div>
              <div className="text-xs text-gray-500 mb-6">Taxa média no Instagram 2025</div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={formatComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="format" tick={{ fill: '#6B7280', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#6B7280', fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                  <Tooltip
                    contentStyle={{ background: '#111118', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 8 }}
                    formatter={(v) => [`${v}%`, 'Engajamento']}
                    labelStyle={{ color: '#E5E7EB' }}
                    itemStyle={{ color: '#C9A84C' }}
                  />
                  <Bar dataKey="engagement" radius={[4, 4, 0, 0]}>
                    {formatComparison.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={entry.format === 'Carrossel' ? '#C9A84C' : entry.format === 'Reels' ? '#A07830' : '#1A1A24'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </FadeUp>

          {/* Content mix */}
          <FadeUp delay={0.2}>
            <div className="card p-6">
              <div className="text-sm font-medium text-gray-300 mb-1">Mix de conteúdo ideal</div>
              <div className="text-xs text-gray-500 mb-6">Regra 80/20 dos top performers</div>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={contentStrategyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    dataKey="percentage"
                    isAnimationActive={true}
                  >
                    {contentStrategyData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ background: '#111118', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 8 }}
                    formatter={(v) => [`${v}%`, '']}
                    labelStyle={{ color: '#E5E7EB' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-2 mt-2">
                {contentStrategyData.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: item.color }} />
                    <span className="text-gray-400">{item.category}</span>
                    <span className="ml-auto font-medium text-white">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Posting frequency table */}
        <FadeUp delay={0.3}>
          <div className="card p-6 mt-8">
            <div className="text-sm font-medium text-gray-300 mb-4">Frequência ideal de publicação</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-gray-500 border-b" style={{ borderColor: 'var(--border)' }}>
                    <th className="pb-3 font-medium">Formato</th>
                    <th className="pb-3 font-medium">Frequência mínima</th>
                    <th className="pb-3 font-medium">Objetivo</th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: 'var(--border)' }}>
                  {[
                    ['Feed (carrossel/estático)', '3x / semana', 'Autoridade e salvamentos'],
                    ['Reels', '2–3x / semana', 'Alcance e descoberta'],
                    ['Stories', 'Diário', 'Manutenção de relacionamento'],
                  ].map(([format, freq, goal], i) => (
                    <tr key={i}>
                      <td className="py-3 text-white">{format}</td>
                      <td className="py-3" style={{ color: 'var(--gold)' }}>{freq}</td>
                      <td className="py-3 text-gray-400">{goal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
