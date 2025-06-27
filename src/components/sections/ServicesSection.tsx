'use client'

import { ServicesData } from '@/types'
import { useState } from 'react'
import { ServicesGrid } from './_components/services/ServicesGrid'
import { ServicesHeader } from './_components/services/ServicesHeader'

interface ServicesSectionProps {
  data: ServicesData
}

export const ServicesSection = ({ data }: ServicesSectionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <section
      id="services"
      className="flex items-center justify-center relative min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full"
    >
      <div className="flex flex-col items-center max-w-7xl w-full gap-6 sm:gap-8">
        <ServicesHeader onToggleCollapse={() => setIsCollapsed(!isCollapsed)} />

        {/* Collapsed state */}
        {isCollapsed && (
          <div className="text-gray-500 text-6xl md:text-7xl lg:text-8xl font-mono">
            ...
          </div>
        )}

        {/* Services Grid - Only show when not collapsed */}
        {!isCollapsed && <ServicesGrid services={data.services} />}

        <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono">
          <span className="text-primary-blue">&#125;;</span>
        </div>
      </div>
    </section>
  )
}
