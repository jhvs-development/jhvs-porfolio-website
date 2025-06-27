import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  index: number
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div
      className="code-block glow hover:scale-105 transition-all duration-300 fade-in p-8"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col gap-6 h-full">
        <div className="text-primary-blue text-4xl text-center">
          {service.icon}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-primary-blue text-center">
          {service.title}
        </h3>
        <p className="text-gray-300 flex-grow text-md">
          {service.description}
        </p>
        <ul className="flex flex-col gap-1">
          {service.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start text-gray-400 text-md gap-2"
            >
              <span className="text-primary-blue mr-3 mt-0.5 flex-shrink-0">
                ▸
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
