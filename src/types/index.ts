// Personal Information Types
export interface PersonalInfo {
  personal: {
    name: string
    fullName: string
    title: string
    location: string
    bio: string
    tagline: string
    avatar: string
    email: string
    phone: string
    github: string
    linkedin: string
    website: string
  }
  stats: Stat[]
}

export interface Stat {
  number: string
  label: string
}

// Experience Types
export interface Experience {
  experience: ExperienceItem[]
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  type: 'current' | 'past'
  description: string
  highlights: string[]
  technologies: string[]
}

// Services Types
export interface ServicesData {
  services: Service[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  technologies: string[]
}

// Tech Stack Types
export interface TechStackData {
  techStack: TechStack
}

export interface TechStack {
  frontend: TechItem[]
  backend: TechItem[]
  database: TechItem[]
  devops: TechItem[]
  tools: TechItem[]
}

export interface TechItem {
  name: string
  level: number
  category: string
}

// Projects Types
export interface ProjectsData {
  projects: Project[]
  categories: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  status: 'ongoing' | 'completed'
  featured: boolean
  technologies: string[]
  highlights: string[]
  links: {
    live?: string
    github?: string
    private?: boolean
    discontinued?: boolean
  }
}

// Component Props Types
export interface HeroSectionProps {
  personalInfo: PersonalInfo['personal']
  stats: Stat[]
}

export interface AboutSectionProps {
  personalInfo: PersonalInfo['personal']
  stats: Stat[]
}

export interface ExperienceSectionProps {
  experience: ExperienceItem[]
}

export interface ServicesSectionProps {
  services: Service[]
}

export interface ProjectsSectionProps {
  projects: Project[]
  categories: string[]
}

export interface ContactSectionProps {
  personalInfo: PersonalInfo['personal']
}

// Navigation Types
export interface NavItem {
  id: string
  label: string
  href: string
}

// Animation Types
export interface FloatingCodeElement {
  id: string
  text: string
  x: number
  y: number
  delay: number
}
