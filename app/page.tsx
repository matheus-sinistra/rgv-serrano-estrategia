import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Diagnostico from '@/components/Diagnostico'
import Mercado from '@/components/Mercado'
import Indaiatuba from '@/components/Indaiatuba'
import Algoritmo from '@/components/Algoritmo'
import Referencias from '@/components/Referencias'
import Estrategia from '@/components/Estrategia'
import Assessoria from '@/components/Assessoria'
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
      </main>
      <Footer />
    </>
  )
}
