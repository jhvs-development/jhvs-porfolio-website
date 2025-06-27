'use client'

import { useEffect, useState } from 'react'
import { Logo } from './Logo'

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = [
        'hero',
        'experience',
        'services',
        'tech-stack',
        'projects',
        'contact',
      ]
      const navHeight = 80
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= navHeight + 20 && rect.bottom >= navHeight + 20
        }
        return false
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80 // Approximate height of the navigation bar
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border-color'
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-center w-full">
        <div className="flex items-center justify-between max-w-6xl w-full">
          {/* Logo */}
          <Logo onClick={() => scrollToSection('hero')} />
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'experience', label: 'Experience' },
              { id: 'services', label: 'Services' },
              { id: 'tech-stack', label: 'Tech Stack' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-mono text-base transition-colors duration-300 hover:text-primary-blue px-6 py-3 rounded-lg ${
                  activeSection === item.id
                    ? 'text-primary-blue bg-primary-blue/10'
                    : 'text-gray-400 hover:bg-gray-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary-blue p-3 rounded-lg hover:bg-primary-blue/10 transition-all duration-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
