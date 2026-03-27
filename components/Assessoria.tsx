import FadeUp from './ui/FadeUp'
import SectionLabel from './ui/SectionLabel'

const services = [
  {
    title: 'Diagnóstico e Posicionamento',
    description: 'Análise profunda do perfil atual, definição de posicionamento diferenciado e identidade visual padronizada.',
    icon: '🔍',
  },
  {
    title: 'Calendário Editorial',
    description: 'Planejamento mensal com temas, formatos, legendas e hashtags para todos os perfis do ecossistema.',
    icon: '📅',
  },
  {
    title: 'Produção de Conteúdo',
    description: 'Criação de roteiros para Reels, templates de carrossel, scripts de Stories e briefings para gravações.',
    icon: '🎬',
  },
  {
    title: 'Gestão de Anúncios',
    description: 'Criação, otimização e relatório mensal de campanhas Meta Ads com foco em CPL e qualidade de lead.',
    icon: '📊',
  },
  {
    title: 'Treinamento da Equipe',
    description: 'Capacitação dos corretores para produção de conteúdo autêntico, resposta rápida e conversão via DM.',
    icon: '🎓',
  },
  {
    title: 'Análise e Relatório',
    description: 'Relatório mensal com métricas, insights e ajustes de estratégia baseados em dados reais.',
    icon: '📈',
  },
]

const differentials = [
  'Estratégia baseada em dados, não em feeling',
  'Foco em geração de leads qualificados, não apenas seguidores',
  'Conhecimento profundo do mercado imobiliário de Indaiatuba',
  'Benchmarks internacionais aplicados à realidade local',
  'Ecossistema de contas para multiplicar alcance sem multiplicar custo',
  'Processo claro de qualificação e conversão via WhatsApp',
]

export default function Assessoria() {
  return (
    <section id="assessoria" className="py-24 px-6" style={{ background: 'var(--dark-2)' }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <SectionLabel className="mb-4">Assessoria</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              O que entregamos
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Uma assessoria de marketing digital especializada no mercado imobiliário
              de médio-alto padrão. Do diagnóstico ao resultado.
            </p>
          </div>
        </FadeUp>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((s, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="card p-6 h-full">
                <div className="text-3xl mb-4">{s.icon}</div>
                <div className="text-base font-semibold text-white mb-2">{s.title}</div>
                <p className="text-sm text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Differentials */}
        <FadeUp delay={0.2}>
          <div className="card p-8" style={{ borderColor: 'rgba(201,168,76,0.3)' }}>
            <div className="text-lg font-bold text-white mb-6">Por que esta assessoria?</div>
            <div className="grid md:grid-cols-2 gap-3">
              {differentials.map((d, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(201,168,76,0.2)' }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3L9 1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-sm text-gray-300">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
