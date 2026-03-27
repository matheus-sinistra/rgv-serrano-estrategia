// ============================================================
// lib/data.ts — Dados centralizados RGV Serrano Estratégia
// ============================================================

export const clientData = {
  name: 'RGV Serrano Imóveis',
  instagram: '@rgv.imobiliaria',
  location: 'Indaiatuba, SP',
  currentFollowers: 3894,
  currentPosts: 490,
  currentFollowing: 2055,
  agents: 3,
  priceRange: 'A partir de R$ 1.020.000',
  serviceAreas: [
    'Indaiatuba', 'Itupeva', 'Salto', 'Elias Fausto',
    'Mogi Mirim', 'Araras', 'Guarujá', 'Itu',
    'Peruíbe', 'Piracicaba', 'São Paulo', 'Ubatuba', 'Valinhos',
  ],
}

// ——————————————————————————————————————————
// Mercado imobiliário Brasil 2025
// ——————————————————————————————————————————
export const brasilMarketStats = [
  { label: 'Unidades Lançadas (2025)', value: '453.005', suffix: '', detail: '+10,6% vs 2024' },
  { label: 'Unidades Vendidas', value: '426.260', suffix: '', detail: '+5,4% de crescimento' },
  { label: 'VGV Total', value: 'R$ 264,2bi', suffix: '', detail: '+3,5% vs ano anterior' },
  { label: 'Valorização FipeZap', value: '+6,52%', suffix: '', detail: '2ª maior em 11 anos' },
]

export const spMarketStats = [
  { label: 'Crescimento VGV', value: '+47%', detail: 'São Paulo estado' },
  { label: 'Unidades Lançadas', value: '+28%', detail: 'vs ano anterior' },
]

export const brasilGrowthData = [
  { year: '2021', vgv: 180 },
  { year: '2022', vgv: 210 },
  { year: '2023', vgv: 230 },
  { year: '2024', vgv: 255 },
  { year: '2025', vgv: 264 },
]

// ——————————————————————————————————————————
// Indaiatuba
// ——————————————————————————————————————————
export const indaiatubaStats = [
  { label: 'Preço médio m²', value: 'R$ 8.230', detail: 'Maior da região' },
  { label: 'VGV 2025', value: 'R$ 6,4bi', detail: 'vs R$ 5,5bi em 2024' },
  { label: 'Unidades vendidas', value: '13.338', detail: '+10% em 2025' },
  { label: 'Valorização regional', value: '+11,65%', detail: '2ª maior do Brasil' },
  { label: 'Ritmo de vendas', value: '1 a cada 39min', detail: 'Região Campinas' },
  { label: 'População', value: '269.657', detail: '+8,7% em 5 anos' },
]

export const indaiatubaRankings = [
  { position: '3°', scope: 'Brasil', title: 'Melhor cidade para viver', source: 'Revista Veja Negócios' },
  { position: '1°', scope: 'São Paulo', title: 'Melhor cidade do estado', source: 'Revista Veja Negócios' },
  { position: '6°', scope: 'Brasil', title: 'Índice de Progresso Social', source: 'IPS Brasil 2024' },
  { position: '1°', scope: 'Interior SP', title: 'Cidade mais segura do interior', source: 'Atlas da Violência' },
  { position: '10°', scope: 'Brasil', title: 'Município mais competitivo', source: 'IBGE Competitividade' },
]

export const indaiatubaDemographics = {
  population: '269.657',
  gdpPerCapita: 'R$ 110.518/ano',
  idh: '0,788 (alto)',
  growth5y: '+8,7%',
  buyerProfile: 'Classe média-alta, migrantes de SP, famílias e investidores',
  digitalProfile: 'Trabalhadores híbridos que pesquisam online antes de decidir',
}

export const regionalComparison = [
  { city: 'Indaiatuba', priceM2: 8230, highlight: true },
  { city: 'Campinas (centro)', priceM2: 9100, highlight: false },
  { city: 'Valinhos', priceM2: 7800, highlight: false },
  { city: 'Itu', priceM2: 6500, highlight: false },
  { city: 'Salto', priceM2: 5200, highlight: false },
  { city: 'Itupeva', priceM2: 5800, highlight: false },
]

// ——————————————————————————————————————————
// Instagram / Algoritmo
// ——————————————————————————————————————————
export const algorithmStats = [
  {
    signal: 'Reels',
    engagementRate: '1,23%',
    ctr: '3,8%',
    detail: '22% mais engajamento que posts estáticos',
    color: '#C9A84C',
  },
  {
    signal: 'Carrosséis',
    engagementRate: '4,1%',
    ctr: '2,9%',
    detail: 'Maior taxa de salvamentos, ideal para imóveis',
    color: '#A07830',
  },
  {
    signal: 'Stories',
    engagementRate: '2-5%',
    ctr: '1,5%',
    detail: 'Alcance de 2–5% dos seguidores ativos por dia',
    color: '#E8C96A',
  },
]

export const formatComparison = [
  { format: 'Carrossel', engagement: 4.1 },
  { format: 'Reels', engagement: 1.23 },
  { format: 'Stories', engagement: 3.5 },
  { format: 'Estático', engagement: 1.01 },
  { format: 'Média geral', engagement: 0.45 },
]

export const contentStrategyData = [
  { category: 'Educacional / Mercado', percentage: 40, color: '#C9A84C' },
  { category: 'Pessoal / Bastidores', percentage: 25, color: '#A07830' },
  { category: 'Imóveis em destaque', percentage: 20, color: '#E8C96A' },
  { category: 'Cases / Depoimentos', percentage: 15, color: '#6B7280' },
]

export const algorithmKeyFacts = [
  { stat: '31%', label: 'Imóveis com vídeo vendem mais rápido que sem vídeo', icon: '⚡' },
  { stat: '56%', label: 'Do resultado de uma campanha vem da qualidade do conteúdo', icon: '🎯' },
  { stat: '-78%', label: 'Probabilidade de qualificação se demorar mais de 5min para responder', icon: '⏱️' },
]

// ——————————————————————————————————————————
// Referências — Cases Brasil
// ——————————————————————————————————————————
export const brazilCases = [
  {
    name: 'Tamara Stief',
    handle: '@ta_ma_ra_s',
    followers: '372K',
    location: 'São Paulo, SP',
    niche: 'Médio-alto padrão: Pinheiros, Itaim Bibi, Vila Madalena',
    result: 'Faturamento dobrava todo mês no pico de crescimento',
    resultDetail: 'R$ 300 em impulsionamento → 100K visualizações → alto volume de leads',
    strategy: 'Autenticidade radical',
    strategyDetail: 'Vídeos sem roteiro, comenta defeitos abertamente, linguagem própria ("Oi Maramores!", "achadinho", "podrão pra reforma"). Posta 2–3 imóveis/semana. Marido filma e edita.',
    keyLesson: 'Identidade de voz única > produção perfeita. O público confia em quem é honesto sobre o produto.',
    tags: ['Reels', 'Sem script', 'Autenticidade'],
    color: '#C9A84C',
  },
  {
    name: 'Camila Giosa',
    handle: '@camilagiosa',
    followers: '70K',
    location: 'São Paulo, SP',
    niche: 'Alto padrão: Higienópolis, edifícios históricos',
    result: 'Viralizou com Edifício Prudência (370m², R$ 5,5M): vendeu apartamento + mobiliário',
    resultDetail: 'O mobiliário nem estava no anúncio: surgiu como proposta do interesse gerado pelo vídeo',
    strategy: 'Diferencial de formação',
    strategyDetail: 'Arquiteta que explica o valor histórico e arquitetônico de cada imóvel. Estética cinematográfica (namorado filma). Conteúdo que pessoas compartilham mesmo sem intenção de comprar.',
    keyLesson: 'Ter uma segunda expertise (arquitetura, design, urbanismo) diferencia radicalmente o conteúdo.',
    tags: ['Arquitetura', 'Cinematic', 'Viral orgânico'],
    color: '#A07830',
  },
  {
    name: 'Lucas Felt',
    handle: '@feltnegociosimobiliarios',
    followers: '140K IG · 250K TikTok',
    location: 'Alphaville, SP',
    niche: 'Luxo extremo: R$ 10M a R$ 50M',
    result: 'Vendeu a casa mais cara da história de Alphaville: R$ 50 milhões',
    resultDetail: 'Média de 4 casas de alto padrão vendidas por mês',
    strategy: 'Nicho geográfico + YouTube como conversor',
    strategyDetail: 'Especialização absoluta em Alphaville. Tours de mansões de celebridades (Thiago Nigro, Viih Tube, Michel Bastos) no YouTube. Instagram para audiência, YouTube fecha a venda.',
    keyLesson: 'Ser a referência de UM lugar específico vale mais que ser generalista em toda uma região.',
    tags: ['YouTube', 'Nicho geo', 'Luxo'],
    color: '#E8C96A',
  },
  {
    name: 'Guilherme Nogueira',
    handle: '@guilhermenogueirabh',
    followers: '389K IG · 273K TikTok',
    location: 'Belo Horizonte, MG',
    niche: 'Médio-alto · Dono de imobiliária',
    result: 'Mais de R$ 1 bilhão em vendas acumuladas · TikTok virou principal motor de leads',
    resultDetail: 'Caso documentado pelo Imobi Report: TikTok como canal primário de negócios para a BH Brokers',
    strategy: 'Dono de imobiliária que mostra os bastidores',
    strategyDetail: 'Posicionamento como "dono que educa": transparência sobre o mercado, bastidores da empresa, dados reais. Colunista de rádio. Embaixador de marcas do setor.',
    keyLesson: 'O dono visível vende mais do que a marca anônima. Humanizar a gestão gera confiança.',
    tags: ['TikTok', 'Autoridade', 'Dono visível'],
    color: '#8B7355',
  },
  {
    name: 'Ricardo Martins',
    handle: '@ricardomartinsbroker',
    followers: '900K IG · 2,6M TikTok',
    location: 'Nacional',
    niche: 'Alto padrão · Multi-plataforma',
    result: 'R$ 2,1 bilhões em vendas em 2022 · 100M+ visualizações orgânicas/mês',
    resultDetail: 'Tornou-se sócio da MyBroker (maior imobiliária do Brasil) com 20% de participação via presença digital',
    strategy: 'Lifestyle aspiracional + todas as plataformas',
    strategyDetail: 'Tour de imóveis de alto padrão + frases motivacionais + trends virais (ficou famoso vendendo apê de R$ 7M dançando Backstreet Boys). Instagram = posicionamento. TikTok = consciência. YouTube = conversão.',
    keyLesson: 'Quem domina múltiplas plataformas não depende do algoritmo de nenhuma delas.',
    tags: ['Multi-plataforma', 'Lifestyle', 'Viral'],
    color: '#6B5B3E',
  },
]

export const brazilStats = [
  {
    type: 'Airton Lavirri',
    stat: 'R$ 70M',
    description: 'em vendas em um único ano, 100% orgânico, sem tráfego pago. Método baseado em autoridade no Instagram.',
  },
  {
    type: 'Hederson Rocha',
    stat: '500K+',
    description: 'seguidores somados + R$ 12M em vendas em 2021 via redes sociais. Pioneiro em vídeos curtos para imóveis.',
  },
  {
    type: 'Meta Ads BR',
    stat: 'R$ 12,43',
    description: 'CPL médio no setor imobiliário, menor custo por lead entre todos os setores do Brasil.',
  },
  {
    type: 'Mercado BR',
    stat: '75%',
    description: 'dos corretores usam redes sociais profissionalmente. 39% dizem que é o canal de leads de maior qualidade.',
  },
]

export const cplData = [
  { market: 'Interior SP (pequeno)', cpl: 50 },
  { market: 'Indaiatuba (potencial)', cpl: 80 },
  { market: 'São Paulo Capital', cpl: 350 },
  { market: 'Rio de Janeiro', cpl: 400 },
]

// ——————————————————————————————————————————
// Estratégia — Ecossistema 5 perfis
// ——————————————————————————————————————————
export const ecosystem = [
  {
    account: '@rgv.imobiliaria',
    type: 'Conta Principal',
    role: 'Tours de imóveis, dados de mercado de Indaiatuba, provas sociais e portfólio da empresa',
    focus: 'Leads via autoridade de marca',
    angle: 'A empresa como referência do mercado local',
    color: '#C9A84C',
  },
  {
    account: 'Perfil do Dono',
    type: 'Liderança',
    role: 'Bastidores, visão de mercado, processo de compra, cases de clientes reais',
    focus: 'Leads via confiança e humanização',
    angle: 'Quem compra quer confiar em quem está por trás da empresa',
    color: '#A07830',
  },
  {
    account: 'Corretor 1',
    type: 'Agente',
    role: 'Conteúdo hiperlocal de Indaiatuba: bairros, escolas, infraestrutura, qualidade de vida',
    focus: 'Leads via posicionamento geográfico',
    angle: 'A pessoa que mais sabe sobre morar em Indaiatuba',
    color: '#E8C96A',
  },
  {
    account: 'Corretor 2',
    type: 'Agente',
    role: 'Educação financeira: simulações, financiamento, valorização, rentabilidade de imóvel',
    focus: 'Leads via educação e autoridade técnica',
    angle: 'Quem explica o que ninguém explica atrai quem está pesquisando',
    color: '#8B7355',
  },
  {
    account: 'Corretor 3',
    type: 'Agente',
    role: 'Depoimentos reais, processo de compra passo a passo, bastidores de visitas e negociações',
    focus: 'Leads via prova social e relacionamento',
    angle: 'Histórias reais de clientes geram identificação e convicção',
    color: '#6B5B3E',
  },
]

export const phases = [
  {
    phase: 'Fase 1',
    title: 'Fundação',
    duration: 'Mês 1',
    items: [
      'Corrigir bio com CTA e link WhatsApp',
      'Limpar lista de following',
      'Criar/otimizar perfis dos corretores',
      'Padronizar identidade visual',
      'Construir calendário de conteúdo 30 dias',
      'Criar templates de Reels para os corretores',
    ],
    color: '#C9A84C',
  },
  {
    phase: 'Fase 2',
    title: 'Crescimento',
    duration: 'Meses 2–3',
    items: [
      'Publicar 3x/semana + Stories diários',
      'Série de Reels: "Por que Indaiatuba?"',
      'Conteúdo de mercado com dados reais',
      'Ativar Meta Ads com orçamento teste',
      'Implementar processo de resposta rápida (<5min)',
      'Medir: alcance, salvamentos e DMs por post',
    ],
    color: '#A07830',
  },
  {
    phase: 'Fase 3',
    title: 'Consolidação',
    duration: 'Meses 4–6',
    items: [
      'Escalar formatos que mais convertem',
      'Aumentar budget de ads conforme CPL valida',
      'Produzir tours em vídeo para lançamentos',
      'Construir audiência para remarketing',
      'Relatório mensal com ROI por canal',
      'Ajuste contínuo baseado em dados',
    ],
    color: '#E8C96A',
  },
]

// ——————————————————————————————————————————
// Diagnóstico
// ——————————————————————————————————————————
export const diagnosisProblems = [
  {
    title: 'Baixa eficiência de crescimento',
    detail: '490 posts → 3.894 seguidores = ~8 seguidores por post. O benchmark saudável é 20–50.',
    severity: 'high',
  },
  {
    title: 'Bio sem CTA e com erros',
    detail: 'A bio atual tem erros gramaticais e não tem chamada para ação nem link de WhatsApp.',
    severity: 'high',
  },
  {
    title: 'Tática de follow/unfollow',
    detail: '2.055 seguindo indica uso de táticas de crescimento artificial já obsoletas.',
    severity: 'medium',
  },
  {
    title: 'Posicionamento genérico',
    detail: '"Compra, venda, locação, construção": não diferencia de nenhum concorrente.',
    severity: 'medium',
  },
  {
    title: 'Não usa o branding de Indaiatuba',
    detail: '3ª melhor cidade do Brasil para viver. Isso é um ativo enorme que o perfil ignora.',
    severity: 'high',
  },
]

export const diagnosisOpportunities = [
  {
    title: 'Posicionamento premium único',
    detail: 'Indaiatuba: 3ª melhor cidade do Brasil. Isso diferencia qualquer imóvel no feed.',
  },
  {
    title: 'Mercado aquecido',
    detail: '+10% em vendas, +11,65% de valorização: os dados vendem sozinhos.',
  },
  {
    title: 'Perfil do comprador ideal para redes',
    detail: 'Classe média-alta, digital e pesquisa online antes de qualquer decisão.',
  },
  {
    title: 'Equipe de 3 corretores = 4 perfis possíveis',
    detail: 'Ecossistema de contas que multiplica alcance sem aumentar custo.',
  },
]
