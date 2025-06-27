'use client'

import { useState } from 'react'
import { ServicesData } from '@/types'

interface ServicesSectionProps {
  data: ServicesData
}

export const ServicesSection = ({ data }: ServicesSectionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <section
      id="services"
      className="flex items-center justify-center relative min-h-screen"
    >
      <div className="flex flex-col items-center max-w-7xl gap-8">
        <div className="flex flex-col items-center text-center gap-1 w-full">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold cursor-pointer hover:text-primary-blue transition-colors"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="text-primary-blue">function</span> services(){' '}
            <span className="text-primary-blue">&#123;</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-7xl leading-relaxed">
            /* Full-stack development services to bring your ideas to life */
          </p>
        </div>

        {/* Collapsed state */}
        {isCollapsed && (
          <div className="text-gray-500 text-6xl md:text-7xl lg:text-8xl font-mono">
            ...
          </div>
        )}

        {/* Services Grid - Only show when not collapsed */}
        {!isCollapsed && (
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {data.services.map((service, index) => (
              <div
                key={service.id}
                className="code-block glow hover:scale-105 transition-all duration-300 fade-in p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col gap-6 h-full">
                  <div className="text-primary-blue text-4xl text-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary-blue text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 flex-grow text-md">
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-1">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-400 text-md gap-2"
                      >
                        <span className="text-primary-blue mr-3 mt-0.5 flex-shrink-0">
                          ▸
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono">
          <span className="text-primary-blue">&#125;;</span>
        </div>
      </div>
    </section>
  )
}
