import { contato, depoimentos, marca, menu, ondeAtendo, rodape } from '../content'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Icon } from './ui/Icon'
import { Stars } from './ui/Stars'
import { WhatsAppIcon } from './ui/WhatsAppIcon'

function InstagramIcon({ className = 'size-[18px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

const tituloColuna = 'mb-4 font-serif text-[22px] font-normal text-papel'
const linkRodape = 'transition-colors hover:text-papel'

export function Footer() {
  const { endereco, horarios } = ondeAtendo
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-musgo-escuro text-[15px] text-salvia-clara/75">
      <Container className="grid gap-12 pt-16 pb-12 md:grid-cols-2 md:pt-20 lg:grid-cols-[1.4fr_0.8fr_1.1fr_1fr] lg:gap-10">
        {/* Marca */}
        <div className="max-w-[340px]">
          <img src="/img/logo-nome-claro.png" alt={`${marca.nome}, ${marca.profissao}`} className="h-[72px] w-auto" loading="lazy" />
          <p className="mt-6 text-[15px] text-salvia-clara/75">{rodape.frase}</p>
          {rodape.crn && <p className="mt-4 text-sm text-salvia">{rodape.crn}</p>}
          {depoimentos.google.link && (
            <a
              href={depoimentos.google.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-salvia/35 px-4 py-2 text-sm text-papel transition-colors hover:bg-papel/10"
            >
              <Stars />
              {rodape.avaliarGoogle}
            </a>
          )}
        </div>

        {/* Seções */}
        <nav aria-label="Rodapé">
          <h2 className={tituloColuna}>{rodape.colunas.secoes}</h2>
          <ul className="grid gap-2.5">
            {menu.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={linkRodape}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Atendimento */}
        <div>
          <h2 className={tituloColuna}>{rodape.colunas.atendimento}</h2>
          <p className="mb-4 text-salvia">{rodape.modalidades}</p>
          <address className="flex gap-2.5 not-italic">
            <Icon name="local" className="mt-0.5 size-[18px] shrink-0 text-salvia" />
            <span>
              {endereco.linha1}
              <br />
              {endereco.linha2}
              {endereco.cep && (
                <>
                  <br />
                  CEP {endereco.cep}
                </>
              )}
            </span>
          </address>
          <div className="mt-4 flex gap-2.5">
            <Icon name="relogio" className="mt-0.5 size-[18px] shrink-0 text-salvia" />
            <dl className="grid gap-1">
              {horarios.map((h) => (
                <div key={h.dias}>
                  <dt className="inline">{h.dias}: </dt>
                  <dd className="inline">{h.horas}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Contato e redes */}
        <div>
          <h2 className={tituloColuna}>{rodape.colunas.contato}</h2>
          <ul className="grid gap-3">
            <li>
              <a href={contato.whatsappLink} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2.5 ${linkRodape}`}>
                <WhatsAppIcon className="size-[18px] text-salvia" />
                {contato.whatsappExibicao}
              </a>
            </li>
            <li>
              <a href={contato.instagramLink} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2.5 ${linkRodape}`}>
                <InstagramIcon className="size-[18px] text-salvia" />
                {contato.instagramUsuario}
              </a>
            </li>
          </ul>
          <Button href={contato.whatsappLink} external variant="light" className="mt-6 !px-5 !py-3 !text-[14px]">
            {rodape.botao}
          </Button>
        </div>
      </Container>

      {/* Barra final */}
      <div className="border-t border-salvia/15">
        <Container className="flex flex-col gap-2 pt-6 pb-24 text-[13px] md:flex-row md:justify-between md:pb-6">
          <span>
            © {ano} {rodape.copyright}
          </span>
          {rodape.creditoLink ? (
            <a href={rodape.creditoLink} target="_blank" rel="noopener noreferrer" className="text-salvia hover:text-papel">
              {rodape.credito}
            </a>
          ) : (
            <span>{rodape.credito}</span>
          )}
        </Container>
      </div>
    </footer>
  )
}
