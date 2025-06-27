'use client'

interface LogoProps {
  onClick?: () => void
  className?: string
}

export const Logo = ({ onClick, className = '' }: LogoProps) => {
  return (
    <div
      className={`text-xl md:text-2xl font-bold cursor-pointer transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-primary-blue/10 ${className}`}
      onClick={onClick}
    >
      <span className="text-primary-blue">&lt;</span>
      <span className="text-foreground mx-1">JHVS</span>
      <span className="text-primary-blue">/&gt;</span>
    </div>
  )
}
