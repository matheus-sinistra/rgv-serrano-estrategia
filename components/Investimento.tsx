'use client'

import FadeUp from './ui/FadeUp'
import SectionLabel from './ui/SectionLabel'

const planoBase = [
  'Diagnóstico e posicionamento inicial',
  'Gestão de 2 perfis no Instagram (RGV + perfil pessoal)',
  'Calendário editorial mensal completo',
  'Roteiros prontos para gravação',
  'Gestão de anúncios Meta Ads (criação + otimização)',
  'Públicos personalizados e Lookalike Audience',
  'Configuração e monitoramento do Pixel Meta',
  'Relatório mensal com métricas e insights',
  'Reunião mensal de alinhamento estratégico',
]

const addonArtes = [
  'Até 20 artes por mês',
  'Posts para feed (carrossel e estático)',
  'Stories e templates de anúncio',
  'Edição e tratamento de fotos dos imóveis',
  'Identidade visual consistente em todos os formatos',
]

export default function Investimento() {
  return (
    <section id="investimento" className="py-24 px-6" style={{ background: 'var(--dark-2)' }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <SectionLabel className="mb-4">Investimento</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              Planos e valores
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Escolha o período que faz mais sentido para a sua operação.
              Quanto mais comprometimento, maior o resultado e menor o custo mensal.
            </p>
          </div>
        </FadeUp>

        {/* Plano Base */}
        <FadeUp delay={0.1}>
          <div className="mb-6">
            <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
              Assessoria: Plano Base
            </div>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {/* Mensal */}
          <FadeUp delay={0.15}>
            <div className="card p-8 h-full flex flex-col" style={{ borderColor: 'rgba(201,168,76,0.2)' }}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Mensal</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-bold text-white">
                      R$ 1.800
                      <span className="text-base font-normal text-gray-500">/mês</span>
                    </div>
                    <div className="text-sm text-gray-500 line-through">R$ 2.000</div>
                  </div>
                </div>
                <div
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold)' }}
                >
                  Flexível
                </div>
              </div>

              <div className="flex flex-col gap-3 flex-1 mb-8">
                {planoBase.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(201,168,76,0.15)' }}
                    >
                      <svg width="8" height="6" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l3 3L9 1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div
                className="text-xs text-gray-500 pt-4 border-t"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                Renovação mês a mês. Cancela com 30 dias de aviso.
              </div>
            </div>
          </FadeUp>

          {/* Trimestral */}
          <FadeUp delay={0.2}>
            <div
              className="card p-8 h-full flex flex-col relative overflow-hidden"
              style={{ borderColor: 'rgba(201,168,76,0.5)' }}
            >
              {/* Badge destaque */}
              <div
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: 'var(--gold)', color: '#0A0A0F' }}
              >
                Recomendado
              </div>

              {/* Brilho sutil no topo */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
              />

              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Trimestral</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-bold text-white">
                      R$ 4.500
                    </div>
                    <div className="text-sm text-gray-500 line-through">R$ 6.000</div>
                  </div>
                  <div className="text-sm mt-1" style={{ color: 'var(--gold)' }}>
                    R$ 1.500/mês (25% de desconto)
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 flex-1 mb-8">
                {planoBase.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(201,168,76,0.2)' }}
                    >
                      <svg width="8" height="6" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l3 3L9 1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div
                className="text-xs text-gray-500 pt-4 border-t"
                style={{ borderColor: 'rgba(201,168,76,0.15)' }}
              >
                Pagamento à vista. Comprometimento de 3 meses, tempo mínimo para ver resultados concretos.
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Add-on Artes */}
        <FadeUp delay={0.25}>
          <div className="mb-4">
            <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
              Add-on opcional: Pacote de Artes
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div
            className="card p-8"
            style={{ borderColor: 'rgba(201,168,76,0.2)' }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-2xl font-bold text-white mb-1">
                  + R$ 800<span className="text-base font-normal text-gray-500">/mês</span>
                </div>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  Criação de artes e edição de fotos realizada por uma empresa parceira especializada em conteúdo visual para o mercado imobiliário. Tudo entregue pronto para você aprovar.
                </p>
                <div
                  className="mt-4 inline-block px-3 py-1 rounded-full text-xs"
                  style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold)' }}
                >
                  Disponível nos dois planos
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {addonArtes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(201,168,76,0.15)' }}
                    >
                      <svg width="8" height="6" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l3 3L9 1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Nota verba */}
        <FadeUp delay={0.35}>
          <div
            className="p-6 rounded-xl border mt-6"
            style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <div className="text-sm font-semibold text-white mb-3">Sobre a verba de anúncios</div>
            <p className="text-sm text-gray-400 leading-relaxed">
              O custo dos anúncios pagos (Meta Ads) <span className="text-white">não está incluso</span> nos planos acima.
              Essa verba é investida diretamente por vocês no Meta, com total controle e transparência.
            </p>
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              Recomendamos iniciar com <span className="text-gray-300">R$ 1.000 a R$ 2.000/mês</span> em mídia para
              geração de leads qualificados no mercado de Indaiatuba.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
