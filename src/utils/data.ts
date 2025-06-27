import experienceData from '@/data/experience.json'
import personalData from '@/data/personal.json'
import projectsData from '@/data/projects.json'
import servicesData from '@/data/services.json'
import techStackData from '@/data/techStack.json'
import {
  Experience,
  PersonalInfo,
  ProjectsData,
  ServicesData,
  TechStackData,
} from '@/types'

export async function getPersonalData(): Promise<PersonalInfo> {
  return personalData as PersonalInfo
}

export async function getExperienceData(): Promise<Experience> {
  return experienceData as Experience
}

export async function getServicesData(): Promise<ServicesData> {
  return servicesData as ServicesData
}

export async function getProjectsData(): Promise<ProjectsData> {
  return projectsData as ProjectsData
}

export async function getTechStackData(): Promise<TechStackData> {
  return techStackData as TechStackData
}
