// Ramo de folhas em traço fino, decorativo (inspirado nas artes da marca).
// A cor vem de `text-*` no className.
export function Ramo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* caule */}
      <path d="M44 298C52 250 50 210 62 168C74 126 70 82 92 40C98 28 104 18 112 8" />
      {/* folhas: contorno + nervura */}
      <path d="M50 252C30 246 14 228 10 206C30 210 46 226 50 252Z" />
      <path d="M50 252C40 236 28 222 14 210" />
      <path d="M54 226C66 206 86 196 108 198C100 218 80 230 54 226Z" />
      <path d="M54 226C70 216 86 206 104 200" />
      <path d="M60 176C42 166 30 146 30 122C48 132 60 150 60 176Z" />
      <path d="M60 176C52 158 42 142 32 126" />
      <path d="M66 146C78 126 98 116 122 118C112 138 92 150 66 146Z" />
      <path d="M66 146C82 136 100 126 118 120" />
      <path d="M78 92C62 80 54 60 58 38C74 50 82 68 78 92Z" />
      <path d="M78 92C72 74 66 58 60 42" />
      <path d="M90 62C104 46 120 40 136 44C126 60 110 68 90 62Z" />
      <path d="M90 62C104 54 118 48 132 46" />
    </svg>
  )
}
