import { contato, ondeAtendo } from '../content'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { IconBadge } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionTitle } from './ui/SectionTitle'

export function OndeAtendo() {
  const { endereco } = ondeAtendo
  const query = encodeURIComponent(endereco.busca)
  const mapaEmbed = `https://www.google.com/maps?q=${query}&output=embed`
  const mapaLink = `https://www.google.com/maps/search/?api=1&query=${query}`

  return (
    <section id="onde-atendo" className="bg-salvia-clara py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionTitle eyebrow={ondeAtendo.rotulo} className="mb-12">
            {ondeAtendo.titulo}
          </SectionTitle>
        </Reveal>
        <Reveal from="zoom" className="grid overflow-hidden rounded-[28px] bg-linho md:grid-cols-[0.9fr_1.1fr]">
          <div className="p-7 md:p-10">
            <div className="flex items-start gap-4">
              <IconBadge name="local" />
              <address className="not-italic">
                <span className="block text-sm text-marrom">{ondeAtendo.consultorio}</span>
                <span className="mt-1 block font-serif text-[26px] leading-[1.15] font-normal text-musgo-escuro">
                  {endereco.linha1}
                  <br />
                  {endereco.linha2}
                </span>
                {endereco.cep && <span className="mt-2 block text-sm text-cinza">CEP {endereco.cep}</span>}
              </address>
            </div>

            <div className="mt-8 flex items-start gap-4">
              <IconBadge name="relogio" />
              <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1.5 pt-1 text-[15px]">
                {ondeAtendo.horarios.map((h) => (
                  <div key={h.dias} className="contents">
                    <dt className="text-cinza">{h.dias}</dt>
                    <dd className="text-tinta">{h.horas}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button href={contato.whatsappLink} external>
                {ondeAtendo.botao}
              </Button>
              <a
                href={mapaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-marrom underline decoration-marrom/40 underline-offset-4 hover:decoration-marrom"
              >
                {ondeAtendo.linkMapa}
              </a>
            </div>
          </div>
          <iframe
            src={mapaEmbed}
            title={`Mapa do consultório: ${endereco.busca}`}
            className="min-h-[320px] w-full border-0 [filter:grayscale(0.55)_sepia(0.15)] md:min-h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </Container>
    </section>
  )
}
