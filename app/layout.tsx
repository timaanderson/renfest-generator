import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Renaissance Persona Generator',
  description: 'Discover thy medieval alter ego',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-burgundy text-parchment shadow-md">
          <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-serif font-bold text-lg tracking-wide hover:text-gold transition-colors">
              ⚔️ RenFest Persona
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/generate" className="text-parchment/80 hover:text-parchment transition-colors">
                Generate
              </Link>
              <Link href="/archive" className="text-parchment/80 hover:text-parchment transition-colors">
                Archive
              </Link>
            </nav>
          </div>
        </header>
        <main className="max-w-3xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
