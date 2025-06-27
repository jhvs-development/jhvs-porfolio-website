export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-background border-t border-border-color"
      style={{ padding: '16px 16px' }}
    >
      <div className="flex flex-col items-center gap-2">
        {/* Main Footer Content */}
        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div>
              <h3 className="text-md font-bold text-primary-blue font-mono mb-4">
                JHVS Development
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed max-w-md">
                Full-stack JavaScript developer specializing in modern web
                technologies. Building scalable applications with clean code and
                exceptional user experiences.
              </p>
            </div>
            <div className="text-xs text-gray-400 font-mono">
              <span className="text-primary-blue">const</span>{' '}
              <span className="text-white">location</span>{' '}
              <span className="text-primary-blue">=</span>{' '}
              <span className="text-accent-green">
                &quot;Portugal & Brazil&quot;
              </span>
              <span className="text-primary-blue">;</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold text-white font-mono">
              <span className="text-primary-blue">const</span>{' '}
              <span className="text-white">quickLinks</span>{' '}
              <span className="text-primary-blue">=</span>{' '}
              <span className="text-primary-blue">[</span>
            </h4>
            <nav>
              <a
                href="#hero"
                className="block text-gray-300 hover:text-primary-blue transition-colors font-mono"
              >
                <span className="text-xs text-accent-green">
                  &quot;Home&quot;
                </span>
              </a>
              <a
                href="#services"
                className="block text-gray-300 hover:text-primary-blue transition-colors font-mono"
              >
                <span className="text-xs text-accent-green">
                  &quot;Services&quot;
                </span>
              </a>
              <a
                href="#projects"
                className="block text-gray-300 hover:text-primary-blue transition-colors font-mono"
              >
                <span className="text-xs text-accent-green">
                  &quot;Projects&quot;
                </span>
              </a>
              <a
                href="#experience"
                className="block text-gray-300 hover:text-primary-blue transition-colors font-mono"
              >
                <span className="text-xs text-accent-green">
                  &quot;Experience&quot;
                </span>
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-primary-blue transition-colors font-mono"
              >
                <span className="text-xs text-accent-green">
                  &quot;Contact&quot;
                </span>
              </a>
            </nav>
            <div className="text-md text-primary-blue font-mono">];</div>
          </div>

          {/* Connect */}
          <div className="">
            <h4 className="text-md font-semibold text-white font-mono">
              <span className="text-primary-blue">const</span>{' '}
              <span className="text-white">socialMedia</span>{' '}
              <span className="text-primary-blue">=</span>{' '}
              <span className="text-primary-blue">&#123;</span>
            </h4>
            <div className="">
              <a
                href="mailto:contact@jhvsdevelopment.com"
                className="block text-xs text-gray-300 hover:text-primary-blue transition-colors font-mono group"
              >
                <span className="text-white">email:</span>{' '}
                <span className="text-accent-green group-hover:text-white">
                  &quot;📧&quot;
                </span>
              </a>
              <a
                href="https://github.com/jhordeym"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-gray-300 hover:text-primary-blue transition-colors font-mono group"
              >
                <span className="text-white">github:</span>{' '}
                <span className="text-accent-green group-hover:text-white">
                  &quot;🐱&quot;
                </span>
              </a>
              <a
                href="https://linkedin.com/in/jhordeym"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-gray-300 hover:text-primary-blue transition-colors font-mono group"
              >
                <span className="text-white">linkedin:</span>{' '}
                <span className="text-accent-green group-hover:text-white">
                  &quot;💼&quot;
                </span>
              </a>
            </div>
            <div className="text-primary-blue font-mono">&#125;;</div>
          </div>
        </div>

        {/* Bottom Footer - Centered */}
        <div className="text-center">
          <div className="text-xs text-gray-500 font-mono">
            <span className="text-primary-blue">// </span>
            Built with Next.js, TypeScript, Tailwind CSS & ❤️ by Jhordeym Santos
            🇧🇷🇵🇹
          </div>
          <div className="text-xs text-gray-500 font-mono">
            <span className="text-primary-blue">©</span>{' '}
            <span className="text-white">{currentYear}</span>{' '}
            <span className="text-accent-green">JHVS Development Ltda.</span>{' '}
            <span className="text-gray-400">All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
