'use client'

interface TimelineLineProps {
  className?: string
}

export const TimelineLine = ({ className = '' }: TimelineLineProps) => {
  return (
    <div
      className={`w-0.5 h-full bg-gradient-to-b from-primary-blue via-secondary-blue to-primary-blue relative z-10 ${className}`}
    >
      {/* Optional: Add animated dots along the line */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-blue rounded-full opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-secondary-blue rounded-full opacity-40"></div>
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-blue rounded-full opacity-60"></div>
    </div>
  )
}
