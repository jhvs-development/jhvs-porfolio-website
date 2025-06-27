'use client'

import { ProjectsData } from '@/types'
import Image from 'next/image'
import { useState } from 'react'

interface ProjectsSectionProps {
  data: ProjectsData
}

export const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isCollapsed, setIsCollapsed] = useState(false)

  const filteredProjects =
    activeCategory === 'all'
      ? data.projects
      : data.projects.filter(project => project.category === activeCategory)

  return (
    <section
      id="projects"
      className="flex items-center justify-center relative"
    >
      <div className="flex flex-col items-center max-w-7xl gap-8">
        <div className="flex flex-col items-center text-center gap-1 w-full">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold cursor-pointer hover:text-primary-blue transition-colors"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="text-primary-blue">const</span> projects ={' '}
            <span className="text-primary-blue">[</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            A collection of projects showcasing my skills and creativity
          </p>
        </div>

        {/* Collapsed state */}
        {isCollapsed && (
          <div className="text-gray-500 text-6xl md:text-7xl lg:text-8xl font-mono mb-24">
            ...
          </div>
        )}

        {/* Projects Content - Only show when not collapsed */}
        {!isCollapsed && (
          <>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-6 mb-20 w-full max-w-4xl">
              <button
                onClick={() => setActiveCategory('all')}
                className={`inline-block rounded-full font-mono text-sm md:text-base transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-primary-blue text-background'
                    : 'bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-background'
                }`}
                style={{ padding: '4px 8px' }}
              >
                All
              </button>
              {data.categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`inline-block rounded-full font-mono text-sm md:text-base transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary-blue text-background'
                      : 'bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-background'
                  }`}
                  style={{ padding: '4px 8px' }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-10 w-full max-w-6xl">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`code-block glow hover:scale-105 transition-all duration-300 fade-in flex flex-col ${
                    project.featured ? 'border-2 border-primary-blue' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative mb-8 overflow-hidden rounded-lg">
                    <div className="w-full h-52 bg-gradient-to-br from-primary-blue/20 to-secondary-blue/20 flex items-center justify-center">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} - Project Screenshot`}
                          width={400}
                          height={208}
                          className="w-full h-full object-cover"
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
                          {project.highlights
                            .slice(0, 3)
                            .map((highlight, idx) => (
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
              ))}
            </div>
          </>
        )}

        {/* Closing bracket */}
        <div className="flex justify-center mt-16">
          <span className="text-primary-blue text-4xl md:text-5xl lg:text-6xl font-bold font-mono">
            ];
          </span>
        </div>
      </div>
    </section>
  )
}
