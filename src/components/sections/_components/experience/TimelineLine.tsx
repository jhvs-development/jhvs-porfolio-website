'use client'

interface TimelineLineProps {
  className?: string
}

export const TimelineLine = ({ className = '' }: TimelineLineProps) => {
  return (
    <div className={`w-1 h-full relative ${className}`}>
      {/* Main vertical line - solid and visible */}
      <div
        className="w-full h-full rounded-full"
        style={{
          background:
            'linear-gradient(180deg, #3B82F6 0%, #1E40AF 50%, #3B82F6 100%)',
          boxShadow:
            '0 0 8px rgba(59, 130, 246, 0.6), 0 0 16px rgba(59, 130, 246, 0.4), 0 0 24px rgba(59, 130, 246, 0.2)',
        }}
      />
    </div>
  )
}
