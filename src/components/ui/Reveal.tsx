import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number // em ms, para escalonar cards
  from?: 'baixo' | 'esquerda' | 'direita' | 'zoom' // de onde o elemento entra
  as?: 'div' | 'li' // use 'li' dentro de listas (<ul>)
}

const origem = { baixo: '', esquerda: 'reveal-esquerda', direita: 'reveal-direita', zoom: 'reveal-zoom' }

// Aparece com fade + movimento suave quando entra na tela ao descer a página (uma vez só).
export function Reveal({ children, className = '', delay = 0, from = 'baixo', as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${origem[from]} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
