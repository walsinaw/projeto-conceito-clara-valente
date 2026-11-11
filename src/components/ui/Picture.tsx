type Props = {
  arquivo: string // nome base gerado por `npm run images` (ex.: 'hero')
  alt: string
  className?: string
  priority?: boolean // true só para a foto do topo (carrega na hora)
  sizes?: string
}

// Imagem webp responsiva: o navegador escolhe 480px ou 800px conforme a tela.
export function Picture({ arquivo, alt, className = '', priority = false, sizes = '(max-width: 768px) 100vw, 480px' }: Props) {
  return (
    <img
      src={`/img/${arquivo}-800.webp`}
      srcSet={`/img/${arquivo}-480.webp 480w, /img/${arquivo}-800.webp 800w`}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  )
}
