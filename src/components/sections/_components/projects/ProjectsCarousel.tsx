'use client'

import { Project } from '@/types'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ProjectCard } from './ProjectCard'

interface ProjectsCarouselProps {
  projects: Project[]
}

// Arrow components
const LeftArrow = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
)

const RightArrow = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
)

export const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Calculate total pages (for desktop: 3 items per page)
  const itemsPerPage = 3
  const totalPages = Math.ceil(projects.length / itemsPerPage)

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % totalPages)
  }, [totalPages])

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + totalPages) % totalPages)
  }

  // Auto-scroll functionality (paused on hover)
  useEffect(() => {
    if (!isHovered && totalPages > 1) {
      const interval = setInterval(goToNext, 5000) // Change slide every 5 seconds
      return () => clearInterval(interval)
    }
  }, [isHovered, totalPages, goToNext])

  // Calculate transform for desktop carousel
  const translateX = -(currentIndex * 100)

  return (
    <div className="w-full max-w-6xl">
      {/* Mobile: Vertical List */}
      <div className="lg:hidden flex flex-col gap-8 px-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Desktop: Horizontal Carousel */}
      <div
        className="hidden lg:block relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Carousel Container */}
        <div className="overflow-hidden px-4 py-2">
          <div
            ref={scrollContainerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div key={pageIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-3 gap-6 px-2">
                  {projects
                    .slice(
                      pageIndex * itemsPerPage,
                      (pageIndex + 1) * itemsPerPage
                    )
                    .map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={pageIndex * itemsPerPage + index}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {totalPages > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-primary-blue/20 hover:bg-primary-blue/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-primary-blue/30"
              aria-label="Previous projects"
            >
              <LeftArrow />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-primary-blue/20 hover:bg-primary-blue/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-primary-blue/30"
              aria-label="Next projects"
            >
              <RightArrow />
            </button>
          </>
        )}

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-blue scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
