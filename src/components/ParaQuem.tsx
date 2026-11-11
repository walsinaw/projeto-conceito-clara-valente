import { contato, sobre } from '../content'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Eyebrow } from './ui/Eyebrow'
import { Icon } from './ui/Icon'
import { Picture } from './ui/Picture'
import { Reveal } from './ui/Reveal'

// Seção "Sobre mim" + para quem é o acompanhamento
export function ParaQuem() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <Container className="grid items-start gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16 lg:gap-20">
        <Reveal from="esquerda" className="mx-auto w-full max-w-[440px]">
          <div className="aspect-[5/6] overflow-hidden rounded-[28px] rounded-bl-[120px] bg-salvia-clara">
            <Picture arquivo={sobre.foto.arquivo} alt={sobre.foto.alt} className="size-full object-cover object-top" />
          </div>
          <figure className="mt-8 border-l border-marrom/40 pl-5">
            <blockquote className="font-serif text-[24px] leading-[1.25] font-normal text-marrom">
              “{sobre.citacao.texto}”
            </blockquote>
            <figcaption className="mt-2 text-sm text-cinza">{sobre.citacao.autor}</figcaption>
          </figure>
        </Reveal>

        <Reveal from="direita" delay={120}>
          <Eyebrow>{sobre.rotulo}</Eyebrow>
          <h2 className="mt-2 mb-7 text-[38px] text-musgo-escuro md:text-[52px]">{sobre.titulo}</h2>
          <div className="max-w-[560px] space-y-4">
            {sobre.texto.map((paragrafo) => (
              <p key={paragrafo}>{paragrafo}</p>
            ))}
          </div>

          {sobre.formacao.length > 0 && (
            <ul className="mt-6 space-y-1 text-[15px] text-tinta">
              {sobre.formacao.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          <div className="group mt-10 rounded-[26px] bg-linho p-7 card-hover hover:shadow-[0_24px_44px_-26px_rgba(38,53,42,0.45)] md:p-8">
            <h3 className="mb-5 text-[28px] text-musgo-escuro">{sobre.paraQuemTitulo}</h3>
            <ul className="grid gap-3.5">
              {sobre.lista.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[16px] text-tinta">
                  <Icon name="folha" className="mt-0.5 size-5 shrink-0 text-musgo" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Button href={contato.whatsappLink} external className="mt-8">
            {sobre.botao}
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
