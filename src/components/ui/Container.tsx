import type { ReactNode } from 'react'

// Largura máxima e margens laterais padrão do site.
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1160px] px-5 md:px-8 ${className}`}>{children}</div>
}
