import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center space-y-8 py-12">
      <div>
        <div className="text-5xl mb-4">⚜️</div>
        <h1 className="text-4xl font-serif font-bold text-purple-100 mb-3 leading-tight">
          Renaissance Persona<br />Generator
        </h1>
        <p className="text-purple-200/60 italic max-w-md mx-auto">
          Answer seven whimsical questions and discover thy true Renaissance Faire identity.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <Link
          href="/generate"
          className="px-8 py-4 bg-purple-700 text-purple-100 text-lg font-semibold rounded-xl hover:bg-purple-600 transition-colors shadow-md"
        >
          ✨ Begin Thy Journey
        </Link>
        <Link href="/archive" className="text-purple-200/50 hover:text-purple-200 transition-colors text-sm">
          📜 View Thy Archive
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4 text-sm text-purple-200/60">
        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="text-2xl mb-2">🎭</div>
          <div>Seven questions shape thy destiny</div>
        </div>
        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="text-2xl mb-2">🛡️</div>
          <div>AI-crafted backstory and heraldic crest</div>
        </div>
        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="text-2xl mb-2">📜</div>
          <div>Archive and share thy personas</div>
        </div>
      </div>
    </div>
  )
}
