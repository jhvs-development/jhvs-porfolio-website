'use client'

import { TechStack } from '@/types'
import { useState } from 'react'
import { TechStackGrid } from './_components/techstack/TechStackGrid'
import { TechStackHeader } from './_components/techstack/TechStackHeader'

interface TechStackSectionProps {
  data: TechStack
}

export const TechStackSection = ({ data }: TechStackSectionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <section
      id="tech-stack"
      className="flex items-center justify-center relative min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full"
    >
      <div className="flex flex-col items-center max-w-7xl w-full gap-6 sm:gap-8">
        <TechStackHeader
          onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
        />

        {/* Collapsed state */}
        {isCollapsed && (
          <div className="text-gray-500 text-6xl md:text-7xl lg:text-8xl font-mono mb-24">
            ...
          </div>
        )}

        {/* Tech Stack Grid - Only show when not collapsed */}
        {!isCollapsed && <TechStackGrid data={data} />}

        <div className="text-primary-blue text-4xl md:text-5xl lg:text-6xl font-bold font-mono mt-16">
          <span className="text-primary-blue">&#125;;</span>
        </div>
      </div>
    </section>
  )
}
