import type { ReactNode } from 'react'

// Rótulo curto acima dos títulos.
export function Eyebrow({ children, className = 'text-marrom' }: { children: ReactNode; className?: string }) {
  return <p className={`font-serif text-[20px] leading-snug font-normal ${className}`}>{children}</p>
}
