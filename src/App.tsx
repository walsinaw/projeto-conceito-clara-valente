import { ComoFunciona } from './components/ComoFunciona'
import { CtaFinal } from './components/CtaFinal'
import { Depoimentos } from './components/Depoimentos'
import { Ebook } from './components/Ebook'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { OndeAtendo } from './components/OndeAtendo'
import { ParaQuem } from './components/ParaQuem'
import { Selo } from './components/Selo'
import { WhatsAppFloat } from './components/WhatsAppFloat'

// Ordem das seções da página.
// Para incluir uma seção nova (ex.: Palestras):
//   1. crie src/components/Palestras.tsx (use ComoFunciona.tsx como modelo) com <section id="palestras">
//   2. coloque os textos dela em src/content.ts
//   3. adicione <Palestras /> na posição desejada abaixo
//   4. se quiser no menu, inclua { label: 'Palestras', id: 'palestras' } em `menu` no content.ts
export default function App() {
  return (
    <>
      <Navbar />
      {/* overflow-x-clip: corta o que as animações de entrada lateral empurram pra fora da tela */}
      <main className="overflow-x-clip">
        <Hero />
        <ComoFunciona />
        <ParaQuem />
        <Depoimentos />
        <Ebook />
        <OndeAtendo />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Selo />
    </>
  )
}
