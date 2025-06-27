'use client'

import { Experience } from '@/types'
import { TimelineItem } from './_components/experience/TimelineItem'
import { TimelineLine } from './_components/experience/TimelineLine'

interface ExperienceSectionProps {
  data: Experience
}

export const ExperienceSection = ({ data }: ExperienceSectionProps) => {
  return (
    <section
      id="experience"
      className="flex items-center justify-center relative min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            <span className="text-primary-blue">&lt;</span>
            Experience
            <span className="text-primary-blue">/&gt;</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed px-4">
            {'/* My professional journey in software development */'}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {/* Timeline Container - Fixed center column approach */}
          <div className="relative max-w-7xl mx-auto">
            {/* Timeline items with proper spacing */}
            <div className="flex flex-col">
              {data.experience.map((exp, index) => (
                <TimelineItem
                  key={exp.id}
                  experience={exp}
                  index={index}
                  isActive={exp.type === 'current'}
                />
              ))}
            </div>

            {/* Timeline vertical line - positioned absolutely to align with center column */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 hidden md:block">
              <TimelineLine />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
