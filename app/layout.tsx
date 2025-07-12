import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '3D Teams',
  description: 'A platform for creating and sharing 3D teams',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
