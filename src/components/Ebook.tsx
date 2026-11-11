import { contato, ebooks } from '../content'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Icon } from './ui/Icon'
import { Ramo } from './ui/Ramo'
import { Reveal } from './ui/Reveal'
import { SectionTitle } from './ui/SectionTitle'

const capas = {
  musgo: { fundo: 'bg-musgo', texto: 'text-papel', ramo: 'text-salvia/70' },
  marrom: { fundo: 'bg-marrom', texto: 'text-papel', ramo: 'text-areia/70' },
}

// Capa desenhada em código (troque por uma imagem real da capa quando tiver)
function Capa({ linha1, linha2, cor }: { linha1: string; linha2: string; cor: keyof typeof capas }) {
  const c = capas[cor]
  return (
    <div
      className={`relative flex aspect-[3/4] w-[150px] shrink-0 flex-col justify-end overflow-hidden rounded-[6px_14px_14px_6px] p-5 shadow-[10px_14px_0_rgba(38,53,42,0.12)] transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:-rotate-2 sm:w-[170px] ${c.fundo} ${c.texto}`}
      aria-hidden="true"
    >
      <Ramo className={`absolute -top-4 -right-6 h-[150px] ${c.ramo}`} />
      <span className="relative font-serif text-[27px] leading-[0.95] font-normal">{linha1}</span>
      <span className="relative mt-1 font-serif text-[16px] leading-tight font-normal">{linha2}</span>
      <span className="relative mt-4 text-[10px] tracking-[0.08em] opacity-80">{ebooks.autoraCapa}</span>
    </div>
  )
}

export function Ebook() {
  return (
    <section id="ebooks" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionTitle eyebrow={ebooks.rotulo} text={ebooks.texto}>
            {ebooks.titulo}
          </SectionTitle>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          {ebooks.itens.map((item, i) => (
            <Reveal key={item.titulo} delay={i * 120}>
              <article className="group flex h-full flex-col gap-7 rounded-[28px] bg-linho p-7 card-hover hover:shadow-[0_28px_50px_-28px_rgba(38,53,42,0.45)] sm:flex-row sm:items-start md:p-9">
                <Capa {...item.capa} />
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-3 text-[30px] text-musgo-escuro">{item.titulo}</h3>
                  <p className="mb-5 text-[15px]">{item.texto}</p>
                  <ul className="mb-7 grid gap-2.5 text-[15px] text-tinta">
                    {item.lista.map((li) => (
                      <li key={li} className="flex items-start gap-2.5">
                        <Icon name="folha" className={`mt-0.5 size-[18px] shrink-0 ${item.capa.cor === 'marrom' ? 'text-marrom' : 'text-musgo'}`} />
                        {li}
                      </li>
                    ))}
                  </ul>
                  {/* Sem link de venda, o botão leva ao WhatsApp */}
                  <Button href={item.link || contato.whatsappLink} external className={`mt-auto self-start ${item.capa.cor === 'marrom' ? '!bg-marrom hover:!bg-[#573a28]' : ''}`}>
                    {item.botao}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
