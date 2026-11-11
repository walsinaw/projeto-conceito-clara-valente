import type { ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'

type Props = {
  eyebrow: string
  children: ReactNode
  text?: string
  dark?: boolean
  className?: string
}

// Cabeçalho centralizado das seções (rótulo + h2 + texto opcional).
export function SectionTitle({ eyebrow, children, text, dark = false, className = 'mb-12 md:mb-14' }: Props) {
  return (
    <div className={`mx-auto max-w-[640px] text-center ${className}`}>
      <Eyebrow className={dark ? 'text-areia' : 'text-marrom'}>{eyebrow}</Eyebrow>
      <h2 className={`mt-2 mb-4 text-[38px] md:text-[52px] ${dark ? 'text-papel' : 'text-musgo-escuro'}`}>{children}</h2>
      {text && <p className={dark ? 'text-salvia-clara/80' : ''}>{text}</p>}
    </div>
  )
}
