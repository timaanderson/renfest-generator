import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Renaissance Persona Generator',
  description: 'Discover thy faire persona',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="bg-burgundy text-parchment py-3 px-6 flex items-center justify-between shadow-md">
          <a href="/" className="text-2xl font-bold tracking-wide">⚔️ RenFest Persona</a>
          <nav className="flex gap-6 text-sm">
            <a href="/generate" className="hover:text-gold transition-colors">Generate</a>
            <a href="/archive" className="hover:text-gold transition-colors">Archive</a>
          </nav>
        </header>
        <main className="max-w-3xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
