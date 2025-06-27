'use client'

import { Experience } from '@/types'
import { TimelineLine } from './_components/experience/TimelineLine'
import { TimelineItem } from './_components/experience/TimelineItem'

interface ExperienceSectionProps {
  data: Experience
}

export const ExperienceSection = ({ data }: ExperienceSectionProps) => {
  return (
    <section
      id="experience"
      className="flex items-center justify-center relative min-h-screen"
    >
      <div className="flex flex-col max-w-7xl gap-8">
        <div className="flex flex-col items-center text-center gap-1 w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-primary-blue">&lt;</span>
            Experience
            <span className="text-primary-blue">/&gt;</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            /* My professional journey in software development */
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {/* Timeline Container - Fixed center column approach */}
          <div className="relative max-w-7xl mx-auto">
            {/* Timeline items with proper spacing */}
            <div className="flex flex-col space-y-16">
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
