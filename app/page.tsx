import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Diagnostico from '@/components/Diagnostico'
import Mercado from '@/components/Mercado'
import Indaiatuba from '@/components/Indaiatuba'
import Algoritmo from '@/components/Algoritmo'
import Referencias from '@/components/Referencias'
import Estrategia from '@/components/Estrategia'
import Assessoria from '@/components/Assessoria'
import Atribuicoes from '@/components/Atribuicoes'
import Investimento from '@/components/Investimento'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Diagnostico />
        <Mercado />
        <Indaiatuba />
        <Algoritmo />
        <Referencias />
        <Estrategia />
        <Assessoria />
        <Atribuicoes />
        <Investimento />
      </main>
      <Footer />
    </>
  )
}
