import { comoFunciona } from '../content'
import { Container } from './ui/Container'
import { IconBadge } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionTitle } from './ui/SectionTitle'

// Seta em círculo verde-musgo entre um card e o próximo.
// Fica no meio do espaço entre os cards: à direita no computador, embaixo (girada) no celular.
function Seta() {
  return (
    <span
      className="absolute -bottom-[52px] left-1/2 z-10 grid size-12 -translate-x-1/2 rotate-90 place-items-center rounded-full bg-musgo text-salvia-clara md:top-1/2 md:-right-[52px] md:bottom-auto md:left-auto md:translate-x-0 md:-translate-y-1/2 md:rotate-0"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </span>
  )
}

export function ComoFunciona() {
  const total = comoFunciona.cards.length
  return (
    <section id="como-funciona" className="bg-salvia-clara py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionTitle eyebrow={comoFunciona.rotulo} text={comoFunciona.texto}>
            {comoFunciona.titulo}
          </SectionTitle>
        </Reveal>
        <ul className="grid gap-14 md:grid-cols-3">
          {comoFunciona.cards.map((card, i) => (
            <Reveal as="li" key={card.titulo} delay={i * 140} className="relative">
              <div className="group h-full rounded-[26px] rounded-tr-[64px] bg-linho px-8 pt-8 pb-9 card-hover hover:shadow-[0_24px_44px_-26px_rgba(38,53,42,0.45)]">
                <IconBadge name={card.icone} className="mb-7" />
                <h3 className="mb-3 text-[28px] text-musgo-escuro">{card.titulo}</h3>
                <p className="text-[15px]">{card.texto}</p>
              </div>
              {i < total - 1 && <Seta />}
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
