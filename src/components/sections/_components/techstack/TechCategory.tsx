import { TechItem } from '@/types'

interface TechCategoryProps {
  category: string
  technologies: TechItem[]
  index: number
}

// External link arrow icon component
const ExternalLinkIcon = () => (
  <svg
    className="w-4 h-4 text-gray-400 group-hover:text-primary-blue transition-colors duration-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

export const TechCategory = ({ category, technologies, index }: TechCategoryProps) => {
  return (
    <div
      className="code-block glow hover:scale-105 transition-all duration-300 fade-in p-8"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col gap-6 h-full">
        <h4 className="text-lg md:text-xl font-bold text-primary-blue capitalize text-center">
          {category}
        </h4>
        <div className="flex flex-col gap-4">
          {technologies.map((tech: TechItem, idx: number) => (
            <a
              key={idx}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 p-4 bg-border-color/20 rounded-lg hover:bg-primary-blue/10 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <span className="text-gray-300 font-mono text-sm md:text-base truncate">
                    {tech.name}
                  </span>
                  <ExternalLinkIcon />
                </div>
                <span className="text-xs text-gray-400 font-mono flex-shrink-0 ml-2">
                  {tech.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-600 rounded-full">
                <div
                  className="h-full bg-primary-blue rounded-full transition-all duration-300"
                  style={{ width: `${tech.level}%` }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
