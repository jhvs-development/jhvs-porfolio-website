interface ServicesHeaderProps {
  onToggleCollapse: () => void
}

export const ServicesHeader = ({ onToggleCollapse }: ServicesHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-1 w-full">
      <h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold cursor-pointer hover:text-primary-blue transition-colors"
        onClick={onToggleCollapse}
      >
        <span className="text-primary-blue">function</span> services(){' '}
        <span className="text-primary-blue">&#123;</span>
      </h2>
      <p className="text-gray-400 text-lg md:text-xl max-w-7xl leading-relaxed">
        {
          '/* Full-stack development services to bring your ideas to life */'
        }
      </p>
    </div>
  )
}
