import { useEffect, useState } from 'react'
import { contato, marca, menu, menuBotao, menuBotaoCurto } from '../content'

// Menu fixo no topo, no mesmo esquema do site da WAW:
// na abertura da página é uma barra larga e transparente com o logo completo;
// ao rolar, a própria barra encolhe e vira uma pílula de vidro com o monograma
// (largura, altura, margem, cantos e fundo animam juntos).
// No celular, o menu abre em tela cheia.
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 768px)')
    const onResize = () => mq.matches && setOpen(false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onResize)
    }
  }, [])

  // Trava a rolagem da página enquanto o menu do celular está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const pilula = scrolled && !open

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={`nav-barra mx-auto flex items-center ${
          pilula
            ? 'mt-3 h-[60px] w-[calc(100%-24px)] max-w-[1160px] rounded-[40px] border-papel/70 bg-papel/70 pr-1.5 pl-4 shadow-[0_10px_30px_-18px_rgba(38,53,42,0.5)] backdrop-blur-xl backdrop-saturate-150 md:mt-[18px] md:h-[68px] md:max-w-[1000px] md:pr-2.5 md:pl-6'
            : 'mt-0 h-[84px] w-full max-w-[1160px] rounded-none border-transparent bg-transparent px-5 md:h-[96px] md:px-8'
        } border`}
      >
        <a
          href="#inicio"
          onClick={() => setOpen(false)}
          aria-label={`${marca.nome}, ir para o início`}
          className={`nav-logo relative mr-auto block h-14 ${pilula ? 'w-11' : 'w-[175px] md:w-[215px]'}`}
        >
          <img
            src="/img/logo-nome-escuro.png"
            alt=""
            className={`nav-troca absolute top-1/2 left-0 max-w-none -translate-y-1/2 h-12 md:h-[58px] ${pilula ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            src="/img/logo-simbolo-escuro.png"
            alt=""
            className={`nav-troca absolute top-1/2 left-0 h-9 max-w-none -translate-y-1/2 ${pilula ? 'opacity-100' : 'opacity-0'}`}
          />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className={`nav-links flex text-[16px] text-tinta ${pilula ? 'mr-5 gap-6' : 'mr-9 gap-8'}`}>
            {menu.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="nav-sublinha relative">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={contato.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center rounded-full bg-musgo px-4 text-[15px] text-papel transition-colors duration-300 hover:bg-musgo-escuro md:px-5"
        >
          <span className="md:hidden">{menuBotaoCurto}</span>
          <span className="hidden md:inline">{menuBotao}</span>
        </a>

        <button
          type="button"
          className="relative ml-2 size-10 md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-celular"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`nav-x absolute right-2 left-2 h-px bg-musgo-escuro ${open ? 'top-[19.5px] rotate-45' : 'top-4'}`} />
          <span className={`nav-x absolute right-2 left-2 h-px bg-musgo-escuro ${open ? 'top-[19.5px] -rotate-45' : 'top-6'}`} />
        </button>
      </div>

      {/* Menu do celular em tela cheia (fica atrás da barra do topo) */}
      <nav
        id="menu-celular"
        aria-label="Menu do celular"
        className={`nav-tela fixed inset-0 -z-10 flex flex-col justify-center gap-1 bg-papel px-7 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {menu.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
            className={`nav-tela-link font-serif text-[40px] leading-[1.25] font-normal text-musgo-escuro ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
          >
            {item.label}
          </a>
        ))}
        <p className="mt-8 text-[15px] text-cinza">
          {contato.whatsappExibicao}
          <br />
          {contato.instagramUsuario}
        </p>
      </nav>
    </header>
  )
}
