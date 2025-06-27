'use client'

import { ExperienceItem } from '@/types'
import { useState } from 'react'

interface ExperienceCardProps {
  experience: ExperienceItem
  className?: string
}

export const ExperienceCard = ({
  experience,
  className = '',
}: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`max-w-md w-full ${className}`}>
      <div
        className="code-block glow hover:scale-105 transition-all duration-300 p-6 md:p-8 cursor-pointer"
        onClick={toggleExpanded}
      >
        <div className="flex flex-col gap-2">
          {/* Header - Always visible */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-bold text-primary-blue">
                {experience.role}
              </h3>
              <button className="text-primary-blue hover:text-secondary-blue transition-colors">
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <h4 className="text-sm text-gray-300">
              {experience.company} • {experience.location}
            </h4>
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-400 font-mono text-xs">
                {experience.period}
              </span>
              <span
                className={`text-xs px-3 py-1 rounded-full self-end ${
                  experience.type === 'current'
                    ? 'bg-accent-green/20 text-accent-green'
                    : 'bg-gray-600/20 text-gray-400'
                }`}
              >
                {experience.type === 'current' ? 'Current' : 'Past'}
              </span>
            </div>
          </div>

          {/* Expandable content */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col gap-2">
              <div className="border-t border-border-color/30"></div>
              <p className="text-gray-300 text-md">{experience.description}</p>

              {/* Highlights */}
              {experience.highlights && experience.highlights.length > 0 && (
                <div className="flex flex-col gap-4">
                  <h5 className="text-primary-blue font-semibold text-lg">
                    Key Achievements:
                  </h5>
                  <ul className="flex flex-col gap-3">
                    {experience.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-300 text-xs"
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
              <div className="flex flex-col gap-4">
                <h5 className="text-primary-blue font-semibold text-lg">
                  Technologies:
                </h5>
                <div className="flex flex-wrap gap-4">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block text-xs bg-primary-blue/20 text-primary-blue rounded-full border border-primary-blue/30 hover:bg-primary-blue/30 transition-colors font-medium"
                      style={{ padding: '4px 8px' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Click hint when collapsed */}
          {!isExpanded && (
            <div className="text-center">
              <span className="text-gray-500 text-sm">
                Click to expand details
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
