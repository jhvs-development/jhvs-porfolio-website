'use client'

import { ProjectsData } from '@/types'
import { useState } from 'react'
import { CategoryFilter } from './_components/projects/CategoryFilter'
import { ProjectsGrid } from './_components/projects/ProjectsGrid'
import { ProjectsHeader } from './_components/projects/ProjectsHeader'

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
        <ProjectsHeader onToggleCollapse={() => setIsCollapsed(!isCollapsed)} />

        {/* Collapsed state */}
        {isCollapsed && (
          <div className="text-gray-500 text-6xl md:text-7xl lg:text-8xl font-mono mb-24">
            ...
          </div>
        )}

        {/* Projects Content - Only show when not collapsed */}
        {!isCollapsed && (
          <>
            <CategoryFilter
              categories={data.categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            <ProjectsGrid projects={filteredProjects} />
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
