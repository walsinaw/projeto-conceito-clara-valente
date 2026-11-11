import { depoimentos } from '../content'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'
import { SectionTitle } from './ui/SectionTitle'
import { Stars } from './ui/Stars'

export function Depoimentos() {
  const { google } = depoimentos
  return (
    <section id="depoimentos" className="bg-musgo-escuro py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionTitle eyebrow={depoimentos.rotulo} dark>
            {depoimentos.titulo}
          </SectionTitle>
        </Reveal>
        <ul className="grid gap-5 md:grid-cols-3">
          {depoimentos.itens.map((item, i) => (
            <Reveal as="li" key={i} delay={i * 140}>
                <figure className="flex h-full flex-col justify-between rounded-[26px] bg-musgo px-7 py-8 card-hover hover:bg-[#435c48] hover:shadow-[0_24px_44px_-24px_rgba(0,0,0,0.55)]">
                  <div>
                    <Stars />
                    <blockquote className="mt-5 mb-7 font-serif text-[21px] leading-[1.4] font-normal text-papel">
                      “{item.texto}”
                    </blockquote>
                  </div>
                  <figcaption className="text-[13px] text-salvia">{item.fonte}</figcaption>
                </figure>
            </Reveal>
          ))}
        </ul>
        {google.nota && (
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[15px] text-salvia-clara">
          <span className="font-serif text-[40px] leading-none font-normal text-papel">{google.nota}</span>
          <Stars />
          <span>{google.texto}</span>
          {google.link && (
            <a
              href={google.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-salvia/60 px-5 py-2.5 text-papel transition-colors hover:bg-papel hover:text-musgo-escuro"
            >
              {google.linkTexto}
            </a>
          )}
        </div>
        )}
      </Container>
    </section>
  )
}
