'use client'

import { PersonalInfo } from '@/types'
import { CTAButtons } from './_components/hero/CTAButtons'
import { IntroText } from './_components/hero/IntroText'
import { ProfileImage } from './_components/hero/ProfileImage'
import { ScrollIndicator } from './_components/hero/ScrollIndicator'
import { StatsGrid } from './_components/hero/StatsGrid'

interface HeroSectionProps {
  data: PersonalInfo
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    <section className="flex items-center justify-center relative min-h-screen">
      <div className="flex flex-col justify-center items-center gap-8 max-w-7xl fade-in">
        {/* Profile Image + Intro Text */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          <ProfileImage 
            name={data.personal.name} 
            imageSrc="/pp_wedding.jpeg" 
          />
          <IntroText 
            name={data.personal.name} 
            title={data.personal.title} 
          />
        </div>

        {/* Bio */}
        <p className="text-md md:text-sm text-gray-400 max-w-6xl whitespace-pre-line text-center">
          {data.personal.bio}
        </p>

        {/* Stats */}
        <StatsGrid stats={data.stats} />

        {/* CTA Buttons */}
        <CTAButtons />

        {/* Scroll indicator */}
        <ScrollIndicator />
      </div>
    </section>
  )
}
