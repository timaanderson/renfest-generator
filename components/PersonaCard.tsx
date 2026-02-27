'use client'
import CrestSvg from './CrestSvg'
import type { Persona } from '@/lib/types'
import { savePersona, exportPersona } from '@/lib/persona-storage'
import { useState } from 'react'

interface Props {
  persona: Persona
  onReroll: () => void
  showSave?: boolean
}

export default function PersonaCard({ persona, onReroll, showSave = true }: Props) {
  const [saved, setSaved] = useState(false)

  function handleSave() {
    savePersona(persona)
    setSaved(true)
  }

  return (
    <div className="bg-white/60 border-2 border-inkbrown/20 rounded-xl p-6 space-y-4 shadow-md">
      <div className="flex items-start gap-6">
        <CrestSvg crest={persona.crest} size={100} />
        <div>
          <h2 className="text-2xl font-bold text-inkbrown">{persona.name}</h2>
          <p className="text-burgundy font-medium italic">{persona.title}</p>
          <div className="flex gap-2 mt-2 flex-wrap text-xs">
            <span className="bg-parchment border border-inkbrown/20 px-2 py-1 rounded">{persona.answers.archetype}</span>
            <span className="bg-parchment border border-inkbrown/20 px-2 py-1 rounded">{persona.answers.skill}</span>
            <span className="bg-parchment border border-inkbrown/20 px-2 py-1 rounded">{persona.answers.motivation}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-inkbrown mb-1">📜 Backstory</h3>
        <p className="text-inkbrown/80 leading-relaxed">{persona.backstory}</p>
      </div>

      <div className="bg-gold/10 border border-gold/30 rounded-lg p-3">
        <h3 className="font-semibold text-inkbrown mb-1">📚 Historical Trivia</h3>
        <p className="text-inkbrown/80 italic text-sm">{persona.trivia}</p>
      </div>

      <div className="flex gap-3 pt-2 flex-wrap">
        <button onClick={onReroll}
          className="px-4 py-2 bg-forest text-parchment rounded-lg hover:bg-forest/80 transition-colors text-sm font-medium">
          🎲 Re-Roll
        </button>
        {showSave && !saved && (
          <button onClick={handleSave}
            className="px-4 py-2 bg-burgundy text-parchment rounded-lg hover:bg-burgundy/80 transition-colors text-sm font-medium">
            💾 Save to Archive
          </button>
        )}
        {saved && <span className="text-forest text-sm py-2">✓ Saved!</span>}
        <button onClick={() => exportPersona(persona)}
          className="px-4 py-2 border border-inkbrown/30 text-inkbrown rounded-lg hover:bg-inkbrown/5 transition-colors text-sm font-medium">
          📥 Export
        </button>
        <a href="/generate"
          className="px-4 py-2 border border-inkbrown/30 text-inkbrown rounded-lg hover:bg-inkbrown/5 transition-colors text-sm font-medium">
          ✨ New Persona
        </a>
      </div>
    </div>
  )
}
