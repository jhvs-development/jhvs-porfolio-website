'use client'

import { useEffect, useState } from 'react'

interface IntroTextProps {
  name: string
  title: string
}

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let currentIndex = 0

    const typeText = () => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex))
        currentIndex++
        setTimeout(typeText, Math.random() * 100 + 50) // Random typing speed between 50-150ms
      }
    }

    // Start typing after a brief delay
    const startTimeout = setTimeout(typeText, 500)

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearTimeout(startTimeout)
      clearInterval(cursorInterval)
    }
  }, [text])

  return (
    <span className="text-primary-blue text-lg md:text-xl font-mono">
      {displayedText}
      <span
        className={`inline-block w-2 h-5 bg-primary-blue ml-1 transition-opacity duration-100 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ animation: 'none' }}
      />
    </span>
  )
}

const JS_ELEMENTS = [
  '.',
  '+',
  '-',
  '*',
  '/',
  '=',
  '!',
  '?',
  ':',
  ';',
  '<',
  '>',
  '&',
  '|',
  '^',
  '%',
  '~',
  '$',
  '#',
  '@',
  '\\',
  '_',
  '`',
]

const MorphingDot = () => {
  const [currentElement, setCurrentElement] = useState('.')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElement(
        JS_ELEMENTS[Math.floor(Math.random() * JS_ELEMENTS.length)]
      )
    }, 800) // Change every 800ms

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className="text-primary-blue transition-all duration-300 ease-in-out transform hover:scale-110"
      style={{
        display: 'inline-block',
        minWidth: '0.5em',
        textAlign: 'center',
      }}
    >
      {currentElement}
    </span>
  )
}

export const IntroText = ({ name, title }: IntroTextProps) => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
      <TypewriterText text="// Welcome to my portfolio 👋🏻 " />
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
        <span className="text-foreground">{name}</span>
        <MorphingDot />
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-mono max-w-4xl mx-auto leading-relaxed">
        {title}
      </h2>
    </div>
  )
}
