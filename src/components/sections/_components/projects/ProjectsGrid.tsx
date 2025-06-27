import { Project } from '@/types'
import { ProjectCard } from './ProjectCard'

interface ProjectsGridProps {
  projects: Project[]
}

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-10 w-full max-w-6xl">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}
