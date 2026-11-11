// Ícones de traço fino, no estilo das artes da marca.
export type IconName = 'plano' | 'conversa' | 'prato' | 'folha' | 'lupa' | 'relogio' | 'local'

const paths: Record<IconName, React.ReactNode> = {
  plano: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
      <path d="M9 3.5v2h6v-2M8.5 10h7M8.5 13.5h7M8.5 17h4" />
    </>
  ),
  conversa: (
    <>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 4v-4h0A2.5 2.5 0 0 1 4 13.5Z" />
      <path d="M8.5 9h7M8.5 12h4.5" />
    </>
  ),
  prato: (
    <>
      <circle cx="12" cy="12" r="6.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M2.5 4v5a1.5 1.5 0 0 0 1.5 1.5V20M4 4v4M21.5 4c-1.5 1-2 3-2 5.5h2V20" />
    </>
  ),
  folha: (
    <>
      <path d="M5 19C5 10 10 5 20 4c0 9-5 15-13 15Z" />
      <path d="M5 19c3-4 6-7 10-10" />
    </>
  ),
  lupa: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 5 5" />
    </>
  ),
  relogio: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  local: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
}

export function Icon({ name, className = 'size-6' }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

// Ícone dentro de um círculo verde-musgo (como a lupa das artes do Instagram)
export function IconBadge({ name, className = '' }: { name: IconName; className?: string }) {
  return (
    <span className={`grid size-12 shrink-0 place-items-center rounded-full bg-musgo text-salvia-clara transition-colors duration-[450ms] group-hover:bg-marrom ${className}`}>
      <Icon name={name} className="size-[22px]" />
    </span>
  )
}
