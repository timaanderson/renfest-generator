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
        <header className="bg-[#0e0b1a] border-b border-purple-900/50 shadow-md">
          <div className="max-w-[1536px] mx-auto px-6 py-3 flex items-center justify-between">
            <Link href="/" className="font-serif font-bold text-lg tracking-wide text-purple-200 hover:text-gold transition-colors">
              ⚔️ RenFest Persona
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/generate" className="text-purple-200/70 hover:text-purple-200 transition-colors">
                Generate
              </Link>
              <Link href="/archive" className="text-purple-200/70 hover:text-purple-200 transition-colors">
                Archive
              </Link>
            </nav>
          </div>
        </header>
        <main className="max-w-[1536px] mx-auto px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
