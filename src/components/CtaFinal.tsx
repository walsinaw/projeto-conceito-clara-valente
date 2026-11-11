import { contato, ctaFinal } from '../content'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Ramo } from './ui/Ramo'
import { Reveal } from './ui/Reveal'
import { WhatsAppIcon } from './ui/WhatsAppIcon'

export function CtaFinal() {
  return (
    <section id="agendar" className="py-16 md:py-24">
      <Container>
        <Reveal from="zoom" className="relative isolate overflow-hidden rounded-[32px] rounded-tl-[110px] bg-musgo px-7 py-16 text-center md:px-16 md:py-24">
          <Ramo className="absolute -bottom-10 -left-6 -z-10 h-[260px] text-salvia/35 md:left-6 md:h-[340px]" />
          <Ramo className="absolute -top-12 -right-8 -z-10 h-[220px] rotate-180 text-salvia/25 md:right-8 md:h-[300px]" />
          <h2 className="mx-auto mb-5 max-w-[680px] text-[40px] text-papel md:text-[60px]">{ctaFinal.titulo}</h2>
          <p className="mx-auto mb-9 max-w-[460px] text-salvia-clara/85">{ctaFinal.texto}</p>
          <Button href={contato.whatsappLink} external variant="light">
            <WhatsAppIcon />
            {ctaFinal.botao}
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
