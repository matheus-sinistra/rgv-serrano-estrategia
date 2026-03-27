import FadeUp from './ui/FadeUp'
import SectionLabel from './ui/SectionLabel'
import { diagnosisProblems, diagnosisOpportunities, clientData } from '@/lib/data'

export default function Diagnostico() {
  return (
    <section id="diagnostico" className="py-24 px-6" style={{ background: 'var(--dark-2)' }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <SectionLabel className="mb-4">Diagnóstico</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              Onde a RGV está hoje
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Uma análise honesta do perfil atual para identificar as oportunidades de maior impacto.
            </p>
          </div>
        </FadeUp>

        {/* Current metrics */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-3 gap-4 mb-16 max-w-lg mx-auto">
            {[
              { value: clientData.currentFollowers.toLocaleString('pt-BR'), label: 'Seguidores' },
              { value: clientData.currentPosts.toString(), label: 'Posts' },
              { value: clientData.currentFollowing.toLocaleString('pt-BR'), label: 'Seguindo' },
            ].map((item) => (
              <div key={item.label} className="card p-4 text-center">
                <div className="text-2xl font-bold" style={{ color: 'var(--gold)' }}>{item.value}</div>
                <div className="text-xs text-gray-400 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <div>
            <FadeUp delay={0.1}>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="text-red-400">●</span> Problemas identificados
              </h3>
            </FadeUp>
            <div className="flex flex-col gap-4">
              {diagnosisProblems.map((p, i) => (
                <FadeUp key={i} delay={0.1 + i * 0.05}>
                  <div className="card p-5">
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: p.severity === 'high' ? '#ef4444' : '#f59e0b' }}
                      />
                      <div>
                        <div className="font-medium text-white text-sm mb-1">{p.title}</div>
                        <div className="text-xs text-gray-400 leading-relaxed">{p.detail}</div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Opportunities */}
          <div>
            <FadeUp delay={0.2}>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span style={{ color: 'var(--gold)' }}>●</span> Oportunidades imediatas
              </h3>
            </FadeUp>
            <div className="flex flex-col gap-4">
              {diagnosisOpportunities.map((o, i) => (
                <FadeUp key={i} delay={0.2 + i * 0.05}>
                  <div className="card p-5" style={{ borderColor: 'rgba(201,168,76,0.25)' }}>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
                      <div>
                        <div className="font-medium text-white text-sm mb-1">{o.title}</div>
                        <div className="text-xs text-gray-400 leading-relaxed">{o.detail}</div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
