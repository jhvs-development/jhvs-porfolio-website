'use client'

import { TechItem, TechStack } from '@/types'
import { useState } from 'react'

interface TechStackSectionProps {
  data: TechStack
}

export const TechStackSection = ({ data }: TechStackSectionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <section
      id="tech-stack"
      className="flex items-center justify-center relative"
    >
      <div className="flex flex-col items-center max-w-7xl gap-8">
        <div className="flex flex-col items-center text-center gap-1 w-full">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold cursor-pointer hover:text-primary-blue transition-colors"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="text-primary-blue">const</span> techStack ={' '}
            <span className="text-primary-blue">&#123;</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-7xl leading-relaxed">
            /* Technologies and tools I use to build amazing applications */
          </p>
        </div>

        {/* Collapsed state */}
        {isCollapsed && (
          <div className="text-gray-500 text-6xl md:text-7xl lg:text-8xl font-mono mb-24">
            ...
          </div>
        )}

        {/* Tech Stack Grid - Only show when not collapsed */}
        {!isCollapsed && (
          <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-10 w-full max-w-6xl">
            {Object.entries(data).map(([category, technologies], index) => (
              <div
                key={category}
                className="slide-in-left flex flex-col space-y-6"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4 className="text-lg md:text-xl font-semibold text-primary-blue capitalize text-center">
                  {category}:
                </h4>
                <div className="flex flex-col space-y-4">
                  {technologies.map((tech: TechItem, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-5 bg-border-color/20 rounded-lg hover:bg-primary-blue/10 transition-colors duration-300"
                    >
                      <span className="text-gray-300 font-mono text-sm md:text-base">
                        {tech.name}
                      </span>
                      <div className="flex items-center space-x-3">
                        <div className="w-20 h-2 bg-gray-600 rounded-full">
                          <div
                            className="h-full bg-primary-blue rounded-full transition-all duration-300"
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-400 min-w-10 text-right">
                          {tech.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-primary-blue text-4xl md:text-5xl lg:text-6xl font-bold font-mono mt-16">
          <span className="text-primary-blue">&#125;;</span>
        </div>
      </div>
    </section>
  )
}
