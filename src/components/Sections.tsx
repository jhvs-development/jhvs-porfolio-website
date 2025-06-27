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
    <main className="relative flex flex-col justify-center items-center gap-1">
      <section id="hero" className="flex">
        <HeroSection data={personalInfo} />
      </section>
      <div className="section-separator" />
      <section id="experience" className="flex">
        <ExperienceSection data={experience} />
      </section>
      <div className="section-separator" />
      <section id="services" className="flex">
        <ServicesSection data={services} />
      </section>
      <div className="section-separator" />
      <section id="tech-stack" className="flex">
        <TechStackSection data={techStack.techStack} />
      </section>
      <div className="section-separator" />
      <section id="projects" className="flex">
        <ProjectsSection data={projects} />
      </section>
      <div className="section-separator" />
      <section id="contact" className="flex">
        <ContactSection data={personalInfo} />
      </section>
    </main>
  )
}
