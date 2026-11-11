import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'light'
  external?: boolean
  className?: string
}

const variants = {
  primary: 'bg-musgo text-papel hover:bg-musgo-escuro',
  ghost: 'border border-musgo text-musgo hover:bg-musgo hover:text-papel',
  light: 'bg-papel text-musgo-escuro hover:bg-salvia-clara',
}

// Botão em formato pílula. `external` abre em nova aba (WhatsApp, Hotmart...).
export function Button({ href, children, variant = 'primary', external = false, className = '' }: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-[15px] text-[15px] tracking-[0.01em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marrom ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
