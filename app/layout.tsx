import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Renaissance Persona Generator',
  description: 'Discover thy medieval alter ego',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
