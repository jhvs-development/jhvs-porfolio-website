import { PersonalInfo } from '@/types'

interface ContactInfoProps {
  data: PersonalInfo
}

export const ContactInfo = ({ data }: ContactInfoProps) => {
  return (
    <div className="code-block glow hover:scale-105 transition-all duration-300 p-8">
      <h3 className="text-xl md:text-2xl font-bold mb-4 font-mono">
        <span className="text-primary-blue">const</span>{' '}
        <span className="text-white">contactInfo</span>{' '}
        <span className="text-primary-blue">=</span>{' '}
        <span className="text-primary-blue">&#123;</span>
      </h3>
      <p className="text-gray-400 mb-8 text-lg font-mono">
        {'// Available communication channels'}
      </p>

      <div className="flex flex-col space-y-6 font-mono">
        <div className="flex items-center space-x-4">
          <span className="text-white">email:</span>
          <span className="text-accent-green">&quot;📧&quot;</span>
          <span className="text-primary-blue">=&gt;</span>
          <a
            href={`mailto:${data.personal.email}`}
            className="text-accent-green hover:text-white transition-colors"
          >
            &quot;{data.personal.email}&quot;
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-white">phone:</span>
          <span className="text-accent-green">&quot;📱&quot;</span>
          <span className="text-primary-blue">=&gt;</span>
          <a
            href={`tel:${data.personal.phone}`}
            className="text-accent-green hover:text-white transition-colors"
          >
            &quot;{data.personal.phone}&quot;
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-white">location:</span>
          <span className="text-accent-green">&quot;📍&quot;</span>
          <span className="text-primary-blue">=&gt;</span>
          <span className="text-accent-green">
            &quot;{data.personal.location}&quot;
          </span>
        </div>
      </div>

      <div className="text-xl md:text-2xl font-bold font-mono mt-8">
        <span className="text-primary-blue">&#125;;</span>
      </div>
    </div>
  )
}
