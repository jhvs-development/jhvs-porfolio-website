import { Project } from '@/types'
import Image from 'next/image'

interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      className={`code-block glow hover:scale-105 transition-all duration-300 fade-in flex flex-col ${
        project.featured ? 'border-2 border-primary-blue' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image */}
      <div className="relative mb-8 overflow-hidden rounded-lg">
        <div className="w-full min-h-48 max-h-64 bg-gradient-to-br from-primary-blue/20 to-secondary-blue/20 flex items-center justify-center">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} - Project Screenshot`}
              width={500}
              height={280}
              quality={95}
              priority={project.featured}
              className="w-full h-full object-contain bg-white/5 rounded"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <span className="text-5xl">🚀</span>
          )}
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-primary-blue text-background px-4 py-2 rounded-full text-xs font-bold">
            FEATURED
          </div>
        )}
        <div
          className={`absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-bold ${
            project.status === 'ongoing'
              ? 'bg-accent-green text-background'
              : 'bg-gray-600 text-white'
          }`}
        >
          {project.status.toUpperCase()}
        </div>
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-grow gap-4">
        <div className="flex flex-col gap-2">
          <h4 className="text-md md:text-lg font-bold text-primary-blue">
            {project.title}
          </h4>
          <p className="text-gray-300 leading-relaxed text-md">
            {project.description}
          </p>
        </div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="flex flex-col gap-4">
            <h5 className="text-primary-blue font-semibold text-lg">
              Key Features:
            </h5>
            <ul className="flex flex-col gap-3">
              {project.highlights.slice(0, 3).map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-gray-400 text-xs"
                >
                  <span className="text-primary-blue mr-3 mt-0.5 flex-shrink-0">
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
              className="px-4 py-2 text-sm bg-border-color/30 text-gray-300 rounded-full hover:bg-primary-blue/20 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-4 py-2 text-sm bg-border-color/30 text-gray-400 rounded-full">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-auto">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-primary-blue text-background text-center py-4 px-6 rounded hover:bg-secondary-blue transition-colors duration-300 font-semibold"
            >
              Live Demo
            </a>
          )}
          {project.links.github && !project.links.private && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-primary-blue text-primary-blue text-center py-4 px-6 rounded hover:bg-primary-blue hover:text-background transition-colors duration-300 font-semibold"
            >
              GitHub
            </a>
          )}
          {project.links.discontinued && (
            <div className="flex-1 border border-gray-600 text-gray-400 text-center py-3 px-4 rounded font-semibold">
              Discontinued
            </div>
          )}
          {project.links.private && (
            <div className="flex-1 border border-gray-600 text-gray-400 text-center py-3 px-4 rounded font-semibold">
              Private Repo
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
