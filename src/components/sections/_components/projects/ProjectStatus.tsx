interface ProjectStatusProps {
  status: 'ongoing' | 'completed'
  featured?: boolean
}

export const ProjectStatus = ({ status, featured }: ProjectStatusProps) => {
  return (
    <>
      {/* Status Badge - Top Left */}
      <div
        className={`absolute rounded-full text-xs font-bold shadow-lg backdrop-blur-sm ${
          status === 'ongoing'
            ? 'bg-emerald-500/90 text-white border border-emerald-400/60'
            : 'bg-blue-500/90 text-white border border-blue-400/60'
        }`}
        style={{ top: '16px', left: '16px', padding: '8px 12px' }}
      >
        {status.toUpperCase()}
      </div>

      {/* Featured Badge - Top Right */}
      {featured && (
        <div
          className="absolute bg-amber-500/90 text-white rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border border-amber-400/60"
          style={{ top: '16px', right: '16px', padding: '8px 12px' }}
        >
          FEATURED
        </div>
      )}
    </>
  )
}
