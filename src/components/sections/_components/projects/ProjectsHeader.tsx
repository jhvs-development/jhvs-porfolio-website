interface ProjectsHeaderProps {
  onToggleCollapse: () => void
}

export const ProjectsHeader = ({ onToggleCollapse }: ProjectsHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-1 w-full">
      <h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold cursor-pointer hover:text-primary-blue transition-colors"
        onClick={onToggleCollapse}
      >
        <span className="text-primary-blue">const</span> projects ={' '}
        <span className="text-primary-blue">[</span>
      </h2>
      <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
        A collection of projects showcasing my skills and creativity
      </p>
    </div>
  )
}
