import { TechItem } from '@/types'

interface TechCategoryProps {
  category: string
  technologies: TechItem[]
  index: number
}

export const TechCategory = ({ category, technologies, index }: TechCategoryProps) => {
  return (
    <div
      className="slide-in-left flex flex-col space-y-6"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <h4 className="text-lg md:text-xl font-semibold text-primary-blue capitalize text-center">
        {category}:
      </h4>
      <div className="flex flex-col space-y-4">
        {technologies.map((tech: TechItem, idx: number) => (
          <div
            key={idx}
            className="flex items-center justify-between p-5 bg-border-color/20 rounded-lg hover:bg-primary-blue/10 transition-colors duration-300"
          >
            <span className="text-gray-300 font-mono text-sm md:text-base">
              {tech.name}
            </span>
            <div className="flex items-center space-x-3">
              <div className="w-20 h-2 bg-gray-600 rounded-full">
                <div
                  className="h-full bg-primary-blue rounded-full transition-all duration-300"
                  style={{ width: `${tech.level}%` }}
                />
              </div>
              <span className="text-xs text-gray-400 min-w-10 text-right">
                {tech.level}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
