import Image from 'next/image'

type LogoProps = {
  variant?: 'dark' | 'light'
  className?: string
  showWordmark?: boolean
}

export default function Logo({ variant = 'dark', className = '', showWordmark = true }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/the1.png"
        alt="Trojan Integrated Solutions Logo"
        width={40}
        height={40}
        priority
      />
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
