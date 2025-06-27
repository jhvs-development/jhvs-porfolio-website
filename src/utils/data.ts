import { PersonalInfo, Experience, ServicesData, ProjectsData } from '@/types'
import personalData from '@/data/personal.json'
import experienceData from '@/data/experience.json'
import servicesData from '@/data/services.json'
import projectsData from '@/data/projects.json'

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
