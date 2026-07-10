type LogoProps = {
  variant?: 'dark' | 'light'
  className?: string
  showWordmark?: boolean
}

export default function Logo({ variant = 'dark', className = '', showWordmark = true }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 3 L34 8 V19 C34 27.5 28.5 33.8 20 37 C11.5 33.8 6 27.5 6 19 V8 Z"
          fill={variant === 'light' ? 'rgba(255,255,255,0.06)' : '#0f1e38'}
          stroke="#c8322c"
          strokeWidth="1.6"
        />
        <path
          d="M20 11c1.6 2 2.6 3.4 2.6 5.2 0 1.1-.6 2-1.5 2.4 1.7-.2 3-1.6 3-3.4 0-1.1-.4-2-.9-2.8 2.3 1.6 3.8 4.3 3.8 7.1 0 3.7-3 6.7-6.9 6.7s-6.9-3-6.9-6.7c0-2.9 1.6-5.5 3.9-7.1-.4.7-.6 1.4-.6 2.2 0 1 .4 1.9 1.1 2.5-.4-.5-.6-1.1-.6-1.8 0-1.7 1.2-3.1 3-4.3z"
          fill="#b8934c"
        />
      </svg>
      {showWordmark && (
        <span className={`font-bold leading-tight tracking-tight ${textColor}`}>
          Trojan
          <br />
          Integrated
          <br />
          Solutions
        </span>
      )}
    </div>
  )
}
