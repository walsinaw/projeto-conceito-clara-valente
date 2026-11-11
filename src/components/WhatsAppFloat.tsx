import { contato } from '../content'
import { WhatsAppIcon } from './ui/WhatsAppIcon'

export function WhatsAppFloat() {
  return (
    <a
      href={contato.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-musgo text-papel shadow-[0_14px_28px_-10px_rgba(38,53,42,0.6)] ring-1 ring-papel/30 transition-colors hover:bg-musgo-escuro md:right-7 md:bottom-7 md:size-[60px]"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
