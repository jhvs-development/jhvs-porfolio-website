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

      {/* Electric pulse animation */}
      <div
        className="absolute w-full rounded-full"
        style={{
          height: '20px',
          background:
            'linear-gradient(180deg, transparent 0%, #60A5FA 25%, #FFFFFF 50%, #60A5FA 75%, transparent 100%)',
          boxShadow:
            '0 0 12px rgba(96, 165, 250, 0.9), 0 0 24px rgba(96, 165, 250, 0.7)',
          animation: 'electricPulse 3s ease-in-out infinite',
          opacity: 0.8,
        }}
      />

      <style jsx>{`
        @keyframes electricPulse {
          0% {
            top: 100%;
            opacity: 0;
            transform: scaleY(0.5);
          }
          10% {
            opacity: 0.8;
            transform: scaleY(1);
          }
          90% {
            opacity: 0.8;
            transform: scaleY(1);
          }
          100% {
            top: -20px;
            opacity: 0;
            transform: scaleY(0.5);
          }
        }
      `}</style>
    </div>
  )
}
