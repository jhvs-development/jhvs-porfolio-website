'use client'

import { PersonalInfo } from '@/types'
import { useState } from 'react'
import { ContactForm } from './_components/contact/ContactForm'
import { ContactInfo } from './_components/contact/ContactInfo'
import { SocialLinks } from './_components/contact/SocialLinks'

interface ContactSectionProps {
  data: PersonalInfo
}

export const ContactSection = ({ data }: ContactSectionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <section id="contact" className="flex items-center justify-center relative">
      <div className="flex flex-col items-center max-w-7xl gap-8">
        <div className="flex flex-col items-center text-center gap-1 w-full">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold cursor-pointer hover:text-white transition-colors"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="text-primary-blue">async</span>{' '}
            <span className="text-white">getInTouch</span>
            <span className="text-primary-blue">(</span>
            <span className="text-accent-green">client</span>
            <span className="text-primary-blue">);</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            Ready to start your next project? Let&apos;s establish a connection
            and build something amazing together.
          </p>
        </div>

        {/* Collapsed state */}
        {isCollapsed && (
          <div className="text-gray-500 text-6xl md:text-7xl lg:text-8xl font-mono mb-24">
            ...
          </div>
        )}

        {/* Contact Content - Only show when not collapsed */}
        {!isCollapsed && (
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 w-full max-w-5xl">
            {/* Contact Info */}
            <div className="flex flex-col gap-10">
              <ContactInfo data={data} />
              <SocialLinks data={data} />
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        )}

        {/* Return statement */}
        <div className="flex justify-center items-center space-x-4 mt-16">
          <p>
            <span className="text-primary-blue text-xl md:text-2xl font-mono">
              return
            </span>
            <span> </span>
            <span className="text-white text-xl md:text-2xl font-mono">
              client.connect
            </span>
            <span className="text-primary-blue text-xl md:text-2xl font-mono">
              ();
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
