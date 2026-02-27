export default function Home() {
  return (
    <div className="text-center space-y-8 py-12">
      <div>
        <h1 className="text-5xl font-bold text-inkbrown mb-4">⚔️ Renaissance<br/>Persona Generator</h1>
        <p className="text-xl text-inkbrown/70 max-w-lg mx-auto">
          Answer five whimsical questions and discover thy true Renaissance Faire identity.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <a href="/generate"
          className="px-8 py-4 bg-burgundy text-parchment text-lg font-semibold rounded-xl hover:bg-burgundy/80 transition-colors shadow-md">
          ✨ Begin Thy Journey
        </a>
        <a href="/archive" className="text-inkbrown/60 hover:text-inkbrown transition-colors text-sm">
          📜 View Thy Archive
        </a>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-8 text-sm text-inkbrown/60">
        <div className="p-4 bg-white/40 rounded-lg">
          <div className="text-2xl mb-2">🎭</div>
          <div>5 whimsical questions shape thy destiny</div>
        </div>
        <div className="p-4 bg-white/40 rounded-lg">
          <div className="text-2xl mb-2">🛡️</div>
          <div>AI-crafted backstory and heraldic crest</div>
        </div>
        <div className="p-4 bg-white/40 rounded-lg">
          <div className="text-2xl mb-2">📜</div>
          <div>Archive and share thy personas</div>
        </div>
      </div>
    </div>
  )
}
