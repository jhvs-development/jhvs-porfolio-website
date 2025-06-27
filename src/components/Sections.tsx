'use client'

import {
  Experience,
  PersonalInfo,
  ProjectsData,
  ServicesData,
  TechStackData,
} from '@/types'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ServicesSection } from './sections/ServicesSection'
import { TechStackSection } from './sections/TechStackSection'
import { SectionSeparator } from './SectionSeparator'

interface SectionsProps {
  personalInfo: PersonalInfo
  experience: Experience
  services: ServicesData
  projects: ProjectsData
  techStack: TechStackData
}

export const Sections = ({
  personalInfo,
  experience,
  services,
  projects,
  techStack,
}: SectionsProps) => {
  return (
    <main className="relative flex flex-col justify-center items-center gap-1 overflow-x-hidden">
      <section id="hero" className="flex w-full justify-center">
        <HeroSection data={personalInfo} />
      </section>
      <SectionSeparator />
      <section
        id="experience"
        className="flex max-w-full lg:!max-w-4/5 justify-center"
      >
        <ExperienceSection data={experience} />
      </section>
      <SectionSeparator />
      <section
        id="services"
        className="flex max-w-full lg:!max-w-4/5 justify-center"
      >
        <ServicesSection data={services} />
      </section>
      <SectionSeparator />
      <section
        id="tech-stack"
        className="flex max-w-full lg:!max-w-4/5 justify-center"
      >
        <TechStackSection data={techStack.techStack} />
      </section>
      <SectionSeparator />
      <section
        id="projects"
        className="flex max-w-full lg:!max-w-4/5 justify-center"
      >
        <ProjectsSection data={projects} />
      </section>
      <SectionSeparator />
      <section
        id="contact"
        className="flex max-w-full lg:!max-w-4/5 justify-center"
      >
        <ContactSection data={personalInfo} />
      </section>
    </main>
  )
}
