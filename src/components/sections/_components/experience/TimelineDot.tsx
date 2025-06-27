'use client'

interface TimelineDotProps {
  isActive?: boolean
  className?: string
}

export const TimelineDot = ({
  isActive = false,
  className = '',
}: TimelineDotProps) => {
  return (
    <div
      className={`relative w-6 h-6 bg-primary-blue rounded-full border-4 border-background shadow-lg z-20 ${className}`}
    >
      <div className="absolute inset-1 bg-background rounded-full" />
      {isActive && (
        <div className="absolute inset-2 bg-primary-blue rounded-full animate-pulse" />
      )}
    </div>
  )
}
