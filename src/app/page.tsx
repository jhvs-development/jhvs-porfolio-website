import { Navigation } from '@/components/Navigation'
import { Sections } from '@/components/Sections'
import {
  getExperienceData,
  getPersonalData,
  getProjectsData,
  getServicesData,
} from '@/utils/data'

export default async function Home() {
  // Load all data server-side
  const personalInfo = await getPersonalData()
  const experience = await getExperienceData()
  const services = await getServicesData()
  const projects = await getProjectsData()

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Sections
        personalInfo={personalInfo}
        experience={experience}
        services={services}
        projects={projects}
      />
    </div>
  )
}
