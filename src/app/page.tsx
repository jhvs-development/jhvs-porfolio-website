import { Navigation } from '@/components/Navigation'
import { Sections } from '@/components/Sections'
import {
  getExperienceData,
  getPersonalData,
  getProjectsData,
  getServicesData,
  getTechStackData,
} from '@/utils/data'

export default async function Home() {
  // Load all data server-side
  const personalInfo = await getPersonalData()
  const experience = await getExperienceData()
  const services = await getServicesData()
  const projects = await getProjectsData()
  const techStack = await getTechStackData()

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Sections
        experience={experience}
        personalInfo={personalInfo}
        projects={projects}
        services={services}
        techStack={techStack}
      />
    </div>
  )
}
