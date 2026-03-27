import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Estratégia Digital — RGV Serrano Imóveis',
  description: 'Proposta de assessoria de marketing digital para RGV Serrano Imóveis. Estratégia baseada em dados para o mercado imobiliário de Indaiatuba.',
  openGraph: {
    title: 'Estratégia Digital — RGV Serrano Imóveis',
    description: 'Proposta de assessoria de marketing digital para RGV Serrano Imóveis.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
