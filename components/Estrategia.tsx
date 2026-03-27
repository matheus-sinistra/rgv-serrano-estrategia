import FadeUp from './ui/FadeUp'
import SectionLabel from './ui/SectionLabel'
import { ecosystem, phases } from '@/lib/data'

export default function Estrategia() {
  return (
    <section id="estrategia" className="py-24 px-6" style={{ background: 'var(--dark)' }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <SectionLabel className="mb-4">Estratégia</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              Ecossistema de 5 perfis
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Todos os perfis têm o mesmo objetivo: gerar leads qualificados.
              O que muda é o ângulo de entrada: cada conta atrai um momento diferente da jornada do comprador.
            </p>
          </div>
        </FadeUp>

        {/* Ecosystem */}
        <div className="grid md:grid-cols-5 gap-4 mb-20">
          {ecosystem.map((e, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div
                className="card p-5 h-full flex flex-col gap-3"
                style={{ borderColor: `${e.color}40` }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="text-xs font-semibold px-2 py-0.5 rounded"
                    style={{ background: `${e.color}20`, color: e.color }}
                  >
                    {e.type}
                  </div>
                </div>
                <div className="text-sm font-bold text-white">{e.account}</div>
                <div className="text-xs text-gray-400 leading-relaxed flex-1">{e.role}</div>
                <div className="border-t pt-3" style={{ borderColor: `${e.color}20` }}>
                  <div className="text-xs font-semibold mb-1" style={{ color: e.color }}>Geração de leads via</div>
                  <div className="text-xs text-gray-300">{e.focus.replace('Leads via ', '')}</div>
                </div>
                <div className="text-xs text-gray-500 italic leading-relaxed">{e.angle}</div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Phases */}
        <FadeUp delay={0.1}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Plano de execução em 3 fases</h3>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((phase, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.1}>
              <div className="card p-6 h-full flex flex-col" style={{ borderColor: `${phase.color}30` }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs font-semibold" style={{ color: phase.color }}>{phase.phase}</div>
                    <div className="text-lg font-bold text-white">{phase.title}</div>
                  </div>
                  <div
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ background: `${phase.color}20`, color: phase.color }}
                  >
                    {phase.duration}
                  </div>
                </div>
                <ul className="flex flex-col gap-2.5 flex-1">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: phase.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* KPIs */}
        <FadeUp delay={0.3}>
          <div className="card p-6 mt-10">
            <div className="text-sm font-medium text-gray-300 mb-4">Métricas de sucesso: o que acompanhar</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { metric: 'Alcance por formato', detail: 'Qual formato entrega mais alcance orgânico' },
                { metric: 'Salvamentos', detail: 'Indica intenção de compra, métrica mais valiosa' },
                { metric: 'DMs gerados por post', detail: 'Conversão direta de conteúdo' },
                { metric: 'Tempo de resposta', detail: 'Meta: <5 minutos para não perder o lead' },
              ].map((kpi, i) => (
                <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--dark-3)' }}>
                  <div className="text-sm font-semibold text-white mb-1">{kpi.metric}</div>
                  <div className="text-xs text-gray-500">{kpi.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
