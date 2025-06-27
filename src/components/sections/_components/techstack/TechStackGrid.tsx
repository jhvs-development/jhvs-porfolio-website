import { TechStack } from '@/types'
import { TechCategory } from './TechCategory'

interface TechStackGridProps {
  data: TechStack
}

export const TechStackGrid = ({ data }: TechStackGridProps) => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-6xl">
      {Object.entries(data).map(([category, technologies], index) => (
        <TechCategory
          key={category}
          category={category}
          technologies={technologies}
          index={index}
        />
      ))}
    </div>
  )
}
