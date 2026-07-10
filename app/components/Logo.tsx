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
      <div className="relative">
        <Image
          src="/the1.png"
          alt="Trojan Integrated Solutions Logo"
          width={40}
          height={40}
          priority
          className="rounded-lg shadow-md"
        />
      </div>
      {showWordmark && (
        <span className={`font-black leading-tight tracking-tight text-sm ${textColor}`}>
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
