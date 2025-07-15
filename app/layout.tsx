import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '3D Teams - Professional 3D Modeling & Web Design Services',
  description: 'Transform your ideas into stunning 3D models and immersive web experiences. Expert services in 3D modeling, interactive web design, and AR/VR development.',
  keywords: 'Gaurav Upadhyay, 3D modeling, web design, AR/VR, Three.js, WebGL, interactive design, 3D visualization',
  authors: [{ name: '3D Teams', url: 'https://3d-teams.vercel.app' }],
  creator: 'Gaurav Upadhyay',
  publisher: '3D Teams',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.png',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://3d-teams.vercel.app',
    title: '3D Teams - Professional 3D Modeling & Web Design Services',
    description: 'Transform your ideas into stunning 3D models and immersive web experiences.',
    siteName: '3D Teams',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: '3D Teams Preview'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D Teams - Professional 3D Modeling & Web Design Services',
    description: 'Transform your ideas into stunning 3D models and immersive web experiences.',
    images: ['/og-image.png'],
    creator: '@3dteams',
    site: '@3dteams',
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
      <head>
        <link rel="canonical" href="https://3dteams.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "3D Teams",
              "url": "https://3dteams.com",
              "logo": "https://3dteams.com/logo.png",
              "description": "Professional 3D modeling and web design services",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://twitter.com/3dteams",
                "https://linkedin.com/company/3dteams",
                "https://github.com/3dteams"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
