import { PersonalInfo } from '@/types'

interface ContactInfoProps {
  data: PersonalInfo
}

export const ContactInfo = ({ data }: ContactInfoProps) => {
  return (
    <div className="code-block p-10">
      <h3 className="text-xl md:text-2xl font-bold text-primary-blue mb-4">
        <span className="text-gray-400">const</span> contactInfo ={' '}
        <span className="text-primary-blue">&#123;</span>
      </h3>
      <p className="text-gray-400 mb-10 text-lg">
        {'// Available communication channels'}
      </p>

      <div className="flex flex-col space-y-6 font-mono">
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">email:</span>
          <span className="text-accent-green">&quot;📧&quot;</span>
          <span className="text-gray-400">=&gt;</span>
          <a
            href={`mailto:${data.personal.email}`}
            className="text-primary-blue hover:text-white transition-colors"
          >
            &quot;{data.personal.email}&quot;
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-gray-400">phone:</span>
          <span className="text-accent-green">&quot;📱&quot;</span>
          <span className="text-gray-400">=&gt;</span>
          <a
            href={`tel:${data.personal.phone}`}
            className="text-primary-blue hover:text-white transition-colors"
          >
            &quot;{data.personal.phone}&quot;
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-gray-400">location:</span>
          <span className="text-accent-green">&quot;📍&quot;</span>
          <span className="text-gray-400">=&gt;</span>
          <span className="text-gray-300">
            &quot;{data.personal.location}&quot;
          </span>
        </div>
      </div>

      <div className="text-primary-blue text-xl md:text-2xl font-bold font-mono mt-8">
        <span className="text-primary-blue">&#125;;</span>
      </div>
    </div>
  )
}
