export function Stars({ className = 'text-areia' }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} role="img" aria-label="5 estrelas">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="size-3.5" aria-hidden="true">
          <path d="M10 1.8l2.4 5 5.4.6-4 3.7 1.1 5.4L10 13.8l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6Z" />
        </svg>
      ))}
    </span>
  )
}
