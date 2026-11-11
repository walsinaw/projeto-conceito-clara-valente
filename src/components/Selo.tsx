import { selo } from '../content'

// Selo fixo no canto inferior esquerdo: identifica o site como projeto conceito da WAW.
export function Selo() {
  return (
    <a
      href={selo.link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-4 z-30 rounded-full border border-linha bg-linho/90 px-4 py-2 text-[12px] text-cinza shadow-[0_10px_24px_-14px_rgba(38,53,42,0.5)] backdrop-blur-md transition-colors hover:text-musgo-escuro md:bottom-8 md:left-7 md:text-[13px]"
    >
      {selo.texto}
    </a>
  )
}
