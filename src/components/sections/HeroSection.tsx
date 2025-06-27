'use client'

import { PersonalInfo } from '@/types'
import Image from 'next/image'

interface HeroSectionProps {
  data: PersonalInfo
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    <section className="flex items-center justify-center relative min-h-screen">
      <div className="flex flex-col justify-center items-center gap-8 max-w-7xl fade-in">
        {/* Profile Image + Intro Text */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-primary-blue/30 hover:border-primary-blue transition-all duration-300 shadow-lg hover:shadow-primary-blue/25">
              <Image
                src="/pp_wedding.jpeg"
                alt={`${data.personal.name} - Profile Picture`}
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Decorative code brackets around image */}
            <div className="absolute -top-2 -left-2 text-primary-blue text-2xl md:text-3xl font-mono">
              &#123;
            </div>
            <div className="absolute -bottom-2 -right-2 text-primary-blue text-2xl md:text-3xl font-mono">
              &#125;
            </div>
          </div>

          {/* Intro Text */}
          <div className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
            <span className="text-primary-blue text-lg md:text-xl font-mono">
              {'// Welcome to my portfolio 👋🏻'}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="text-foreground">{data.personal.name}</span>
              <span className="text-primary-blue">.</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-mono max-w-4xl mx-auto leading-relaxed">
              {data.personal.title}
            </h2>{' '}
          </div>
        </div>

        {/* Bio */}
        <p className="text-md md:text-sm text-gray-400 max-w-6xl whitespace-pre-line text-center">
          {data.personal.bio}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap md:gap-12">
          {data.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center slide-in-left min-w-24"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-blue font-mono">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        {/* CTA Buttons */}
        <div className="flex justify-center sm:flex-row gap-8">
          <a href="#projects" className="btn primary">
            View My Work
          </a>
          <a href="#contact" className="btn secondary">
            Get In Touch
          </a>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-blue rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
