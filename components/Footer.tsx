export default function Footer() {
  return (
    <footer
      className="py-12 px-6 text-center"
      style={{ background: 'var(--dark)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-sm font-semibold mb-2" style={{ color: 'var(--gold)' }}>
          RGV SERRANO IMÓVEIS
        </div>
        <div className="text-xs text-gray-500 mb-6">@rgv.imobiliaria · Indaiatuba, SP</div>
        <div className="text-xs text-gray-600">
          Estratégia digital preparada com dados de mercado de 2025.
          Todos os dados são de fontes públicas e benchmarks do setor.
        </div>
      </div>
    </footer>
  )
}
