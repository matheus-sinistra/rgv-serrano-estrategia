'use client'

import FadeUp from './ui/FadeUp'
import SectionLabel from './ui/SectionLabel'

const nossasAtribuicoes = [
  {
    title: 'Diagnóstico e Posicionamento',
    description: 'Auditoria completa do perfil atual, definição de identidade visual, tom de voz e posicionamento diferenciado no mercado de médio-alto padrão de Indaiatuba.',
  },
  {
    title: 'Calendário Editorial Mensal',
    description: 'Planejamento de todo o conteúdo do mês: temas, formatos, legendas, hashtags e datas de publicação. Tudo pronto para execução.',
  },
  {
    title: 'Roteiros prontos para gravação',
    description: 'Você não precisa saber o que falar. Entregamos roteiros detalhados para cada Reel e Story. Você só precisa aparecer na frente da câmera e gravar.',
  },
  {
    title: 'Gestão profissional de anúncios Meta Ads',
    description: 'Criação, configuração e otimização diária de campanhas no Instagram e Facebook. Segmentação por perfil de comprador, testes A/B de criativos e controle de CPL (custo por lead).',
  },
  {
    title: 'Públicos personalizados e Lookalike',
    description: 'Mapeamos quem visita seu perfil, quem se engaja com seu conteúdo e quem já entrou em contato. A partir disso criamos públicos semelhantes para alcançar novos compradores qualificados.',
  },
  {
    title: 'Pixel e rastreamento de conversões',
    description: 'Instalação e configuração do Pixel do Meta para rastrear cada lead gerado, medir o retorno real dos anúncios e alimentar os algoritmos de otimização.',
  },
  {
    title: 'Relatório mensal com insights',
    description: 'Todo mês você recebe um relatório claro com: alcance, leads gerados, custo por lead, melhores conteúdos e os próximos ajustes de estratégia.',
  },
]

const atribuicoesCliente = [
  {
    title: 'Gravar os conteúdos',
    description: 'Seguindo os roteiros que entregamos. Você aparece, grava, envia. Sem precisar pensar no que falar ou como editar.',
    tag: 'Simples',
  },
  {
    title: 'Fornecer acesso às contas',
    description: 'Instagram, Facebook e Meta Business Manager. Sem acesso, não conseguimos gerenciar nem veicular anúncios.',
    tag: 'Necessário',
  },
  {
    title: 'Informar sobre conta de anúncios',
    description: 'Já possui uma conta no Meta Ads? Se não, criamos junto com você no início do contrato.',
    tag: 'Necessário',
  },
  {
    title: 'Enviar fotos e materiais',
    description: 'Fotos dos imóveis, logo em alta resolução e outros materiais quando solicitado para criação de conteúdo.',
    tag: 'Quando solicitado',
  },
  {
    title: 'Bancar a verba de anúncios',
    description: 'O valor investido em mídia paga vai direto para o Meta, não passa por nós. Você decide quanto investir por mês.',
    tag: 'Direto ao Meta',
  },
  {
    title: 'Responder leads com agilidade',
    description: 'O conteúdo e os anúncios geram o contato. Quem fecha a venda é sua equipe. Meta: responder em menos de 5 minutos.',
    tag: 'Equipe comercial',
  },
]

export default function Atribuicoes() {
  return (
    <section id="atribuicoes" className="py-24 px-6" style={{ background: 'var(--dark)' }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <SectionLabel className="mb-4">Atribuições</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              Quem faz o quê
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Transparência total desde o início. Você sabe exatamente o que entregamos
              e o que precisamos de você para alcançar os resultados.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Nossa responsabilidade */}
          <FadeUp delay={0.1}>
            <div className="h-full">
              <div
                className="flex items-center gap-3 mb-6 pb-4 border-b"
                style={{ borderColor: 'rgba(201,168,76,0.3)' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(201,168,76,0.15)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1.5L10.5 6.5L16 7.3L12 11.2L12.9 16.5L8 14L3.1 16.5L4 11.2L0 7.3L5.5 6.5L8 1.5Z"
                      fill="#C9A84C" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: 'var(--gold)' }}>Nossa responsabilidade</div>
                  <div className="text-xs text-gray-500">O que entregamos mês a mês</div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {nossasAtribuicoes.map((item, i) => (
                  <FadeUp key={i} delay={0.15 + i * 0.05}>
                    <div className="card p-5" style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
                      <div className="flex items-start gap-3">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: 'rgba(201,168,76,0.2)' }}
                        >
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4l3 3L9 1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                          <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Responsabilidade do cliente */}
          <FadeUp delay={0.2}>
            <div className="h-full">
              <div
                className="flex items-center gap-3 mb-6 pb-4 border-b"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="5" r="3" stroke="#9CA3AF" strokeWidth="1.5" />
                    <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-300">Responsabilidade da RGV</div>
                  <div className="text-xs text-gray-500">O que precisamos de vocês</div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {atribuicoesCliente.map((item, i) => (
                  <FadeUp key={i} delay={0.25 + i * 0.05}>
                    <div className="card p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="text-sm font-semibold text-white">{item.title}</div>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{ background: 'rgba(255,255,255,0.06)', color: '#9CA3AF' }}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>

              {/* Nota verba */}
              <FadeUp delay={0.5}>
                <div
                  className="mt-4 p-4 rounded-xl border"
                  style={{ background: 'rgba(201,168,76,0.05)', borderColor: 'rgba(201,168,76,0.2)' }}
                >
                  <div className="flex items-start gap-2">
                    <span style={{ color: 'var(--gold)' }} className="text-sm mt-0.5">ℹ</span>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      <span className="text-white font-medium">Anúncios pagos são à parte.</span>{' '}
                      O valor da verba de mídia é investido diretamente no Meta por vocês, não está incluso nos planos.
                      Recomendamos mínimo de R$ 1.000/mês para campanhas de geração de leads.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
