import { PersonalInfo } from '@/types'

interface SocialLinksProps {
  data: PersonalInfo
}

export const SocialLinks = ({ data }: SocialLinksProps) => {
  return (
    <div className="code-block p-10">
      <h3 className="text-xl md:text-2xl font-bold text-primary-blue mb-4">
        <span className="text-gray-400">const</span> socialLinks ={' '}
        <span className="text-primary-blue">&#123;</span>
      </h3>
      <p className="text-gray-400 mb-10 text-lg">
        {'// Connect with me on these platforms'}
      </p>

      <div className="flex flex-col space-y-6 font-mono">
        <a
          href={data.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 hover:bg-primary-blue/10 p-4 rounded-lg transition-colors group"
        >
          <span className="text-gray-400">github:</span>
          <span className="text-accent-green">&quot;🐱&quot;</span>
          <span className="text-gray-400">=&gt;</span>
          <span className="text-primary-blue group-hover:text-white transition-colors">
            &quot;{data.personal.github}&quot;
          </span>
        </a>

        <a
          href={data.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 hover:bg-primary-blue/10 p-4 rounded-lg transition-colors group"
        >
          <span className="text-gray-400">linkedin:</span>
          <span className="text-accent-green">&quot;💼&quot;</span>
          <span className="text-gray-400">=&gt;</span>
          <span className="text-primary-blue group-hover:text-white transition-colors">
            &quot;{data.personal.linkedin}&quot;
          </span>
        </a>

        {data.personal.website && (
          <a
            href={data.personal.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 hover:bg-primary-blue/10 p-4 rounded-lg transition-colors group"
          >
            <span className="text-gray-400">website:</span>
            <span className="text-accent-green">&quot;🌐&quot;</span>
            <span className="text-gray-400">=&gt;</span>
            <span className="text-primary-blue group-hover:text-white transition-colors">
              &quot;{data.personal.website}&quot;
            </span>
          </a>
        )}
      </div>

      <div className="text-primary-blue text-xl md:text-2xl font-bold font-mono mt-8">
        <span className="text-primary-blue">&#125;;</span>
      </div>
    </div>
  )
}
