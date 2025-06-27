'use client'

import { ExperienceItem } from '@/types'
import { TimelineDot } from './experience/TimelineDot'
import { ExperienceCard } from './experience/ExperienceCard'

interface TimelineItemProps {
  experience: ExperienceItem
  index: number
  isActive?: boolean
}

export const TimelineItem = ({
  experience,
  index,
  isActive = false,
}: TimelineItemProps) => {
  const isAlternate = index % 2 === 1

  return (
    <div className="relative w-full">
      {/* Desktop Layout - Grid with fixed center column */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:items-start">
        {/* Left side - Card (for even indices) or Empty space (for odd indices) */}
        <div className="flex justify-end">
          {!isAlternate && (
            <ExperienceCard
              experience={experience}
              className="max-w-sm w-full"
            />
          )}
        </div>

        {/* Center - Timeline dot (fixed width) */}
        <div className="flex justify-center items-start pt-8 relative z-30">
          <TimelineDot isActive={isActive} />
        </div>

        {/* Right side - Card (for odd indices) or Empty space (for even indices) */}
        <div className="flex justify-start">
          {isAlternate && (
            <ExperienceCard
              experience={experience}
              className="max-w-sm w-full"
            />
          )}
        </div>
      </div>

      {/* Mobile Layout - Single column with dot on left */}
      <div className="md:hidden flex items-start w-full gap-4">
        {/* Timeline dot */}
        <div className="flex-shrink-0 flex justify-center items-start pt-8 relative">
          <TimelineDot isActive={isActive} />
          {/* Mobile timeline line */}
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-primary-blue to-secondary-blue"></div>
        </div>

        {/* Card */}
        <div className="flex-1">
          <ExperienceCard experience={experience} className="w-full" />
        </div>
      </div>
    </div>
  )
}
