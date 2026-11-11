import { contato, hero } from '../content'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Eyebrow } from './ui/Eyebrow'
import { IconBadge } from './ui/Icon'
import { Picture } from './ui/Picture'
import { Ramo } from './ui/Ramo'
import { Stars } from './ui/Stars'
import { WhatsAppIcon } from './ui/WhatsAppIcon'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <Container className="grid items-center gap-12 pt-32 pb-16 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:pt-40 md:pb-24 lg:gap-16">
        <div className="entrada">
          <Eyebrow>{hero.rotulo}</Eyebrow>
          <h1 className="mt-4 mb-8 text-[40px] text-musgo-escuro sm:text-[54px] lg:text-[64px]">
            <span className="block">{hero.titulo}</span>
            {/* Faixa verde-musgo, como nas artes da marca.
                text-balance divide a faixa em linhas de tamanho parecido */}
            <span className="mt-3 block leading-[1.32] text-balance">
              <span className="bg-musgo px-3 text-salvia [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                {hero.destaque}
              </span>
            </span>
          </h1>
          <p className="mb-9 max-w-[500px] text-[17px] md:text-lg">{hero.texto}</p>
          <div className="flex flex-wrap gap-3">
            <Button href={contato.whatsappLink} external>
              <WhatsAppIcon />
              {hero.botaoPrincipal}
            </Button>
            <Button href={`#${hero.botaoSecundario.id}`} variant="ghost">
              {hero.botaoSecundario.label}
            </Button>
          </div>
          {hero.avaliacao && (
            <p className="mt-9 flex items-center gap-3 text-[15px]">
              <Stars className="text-marrom" />
              <span>{hero.avaliacao}</span>
            </p>
          )}
        </div>

        <div className="entrada-2 relative isolate mx-auto w-full max-w-[440px]">
          <Ramo className="absolute -right-8 -bottom-6 -z-10 h-[300px] text-musgo/45 md:-right-16 md:h-[380px]" />
          <div className="aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[24px] bg-salvia-clara">
            <Picture arquivo={hero.foto.arquivo} alt={hero.foto.alt} priority className="size-full object-cover" />
          </div>
          <div className="absolute bottom-10 -left-2 flex items-center gap-3.5 rounded-[22px] rounded-tl-[44px] bg-linho py-3.5 pr-6 pl-3.5 shadow-[0_20px_40px_-24px_rgba(38,53,42,0.45)] md:-left-10">
            <IconBadge name="folha" />
            <div className="leading-tight">
              <span className="block font-serif text-[19px] font-normal text-musgo-escuro">{hero.etiqueta.titulo}</span>
              <span className="text-[14px] text-cinza">{hero.etiqueta.texto}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
