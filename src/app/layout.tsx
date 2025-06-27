import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JHVS Development | Portfolio',
  description:
    'Professional portfolio of Jhordeym Santos - Full Stack JavaScript Developer specializing in React, Node.js, and modern web technologies. Building scalable applications with 5+ years of experience.',
  keywords: [
    'Full Stack Developer',
    'JavaScript',
    'React',
    'Node.js',
    'TypeScript',
    'Next.js',
    'Brazil Developer',
  ],
  authors: [{ name: 'Jhordeym Santos' }],
  openGraph: {
    title: 'JHVS Development | Portfolio',
    description:
      'Professional portfolio showcasing full-stack JavaScript development expertise',
    url: 'https://jhvsdevelopment.com',
    siteName: 'Jhvs Development',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jhvs Development Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JHVS Development | Portfolio',
    description:
      'Professional portfolio showcasing full-stack JavaScript development expertise',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-mono antialiased bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
