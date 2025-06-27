import { Service } from '@/types'
import { ServiceCard } from './ServiceCard'

interface ServicesGridProps {
  services: Service[]
}

export const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 w-full max-w-6xl">
      {services.map((service, index) => (
        <ServiceCard 
          key={service.id} 
          service={service} 
          index={index} 
        />
      ))}
    </div>
  )
}
