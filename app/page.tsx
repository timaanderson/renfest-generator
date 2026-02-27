import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-archetype-knight">
      {/* Decorative top line */}
      <div className="w-full max-w-md mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>

      <div className="text-center max-w-md space-y-6">
        <div className="text-6xl mb-2">⚜️</div>

        <div>
          <h1 className="text-4xl font-bold text-parchment leading-tight">
            Renaissance Persona<br />Generator
          </h1>
          <p className="text-parchment/50 text-sm mt-3 italic">
            Answer seven questions. Receive thy fate.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/generate"
            className="block w-full text-center py-4 bg-gold text-inkbrown font-bold text-lg rounded-xl hover:bg-gold/80 transition-colors shadow-glow-knight"
          >
            ⚔️ Begin Thy Journey
          </Link>

          <Link
            href="/archive"
            className="block w-full text-center py-3 border border-gold/30 text-parchment/60 text-sm rounded-xl hover:border-gold/60 hover:text-parchment/80 transition-colors"
          >
            📚 View Archive
          </Link>
        </div>

        <p className="text-parchment/25 text-xs">
          Powered by ancient scrolls and GPT-4o
        </p>
      </div>

      <div className="w-full max-w-md mt-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>
    </main>
  )
}
