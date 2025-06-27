import { Project } from '@/types'
import Image from 'next/image'
import { ProjectStatus } from './ProjectStatus'

interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      className={`relative bg-background/80 backdrop-blur-sm border border-border-color/40 rounded-lg overflow-hidden transition-all duration-300 fade-in flex flex-col hover:border-primary-blue/50 hover:shadow-xl hover:shadow-primary-blue/20 ${
        project.featured
          ? 'border-primary-blue/60 shadow-lg shadow-primary-blue/10'
          : ''
      }`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <div className="w-full min-h-48 max-h-64 bg-gradient-to-br from-primary-blue/20 to-secondary-blue/20 flex items-center justify-center">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} - Project Screenshot`}
              width={500}
              height={280}
              quality={95}
              priority={project.featured}
              className="w-full h-full object-contain bg-white/5"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <span className="text-5xl">🚀</span>
          )}
        </div>

        {/* Status and Featured Badges */}
        <ProjectStatus status={project.status} featured={project.featured} />
      </div>

      {/* Project Content */}
      <div
        className="relative flex flex-col flex-grow gap-4"
        style={{
          padding: '16px',
          paddingBottom: '80px', // Add space for the fixed links section
        }}
      >
        <div className="flex flex-col gap-3">
          <h4 className="text-lg md:text-xl font-bold text-primary-blue">
            {project.title}
          </h4>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            {project.description}
          </p>
        </div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="flex flex-col gap-4">
            <h5 className="text-primary-blue font-semibold text-base">
              Key Features:
            </h5>
            <ul className="flex flex-col gap-3">
              {project.highlights.slice(0, 3).map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-400 text-sm"
                >
                  <span className="text-primary-blue mt-0.5 flex-shrink-0">
                    ▸
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-3">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-2 text-xs md:text-sm bg-border-color/30 text-gray-300 rounded-full hover:bg-primary-blue/20 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-2 text-xs md:text-sm bg-border-color/30 text-gray-400 rounded-full">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-3 p-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-primary-blue text-background text-center py-3 px-4 rounded-lg hover:bg-secondary-blue transition-colors duration-300 font-semibold text-sm"
            >
              Live Demo
            </a>
          )}
          {project.links.github && !project.links.private && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-primary-blue text-primary-blue text-center py-3 px-4 rounded-lg hover:bg-primary-blue hover:text-background transition-colors duration-300 font-semibold text-sm"
            >
              GitHub
            </a>
          )}
          {project.links.discontinued && (
            <div className="flex-1 border border-gray-600 text-gray-400 text-center py-3 px-4 rounded-lg font-semibold text-sm">
              Discontinued
            </div>
          )}
          {project.links.private && (
            <div className="flex-1 border border-gray-600 text-gray-400 text-center py-3 px-4 rounded-lg font-semibold text-sm">
              Private Repo
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
