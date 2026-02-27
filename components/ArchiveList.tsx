'use client'
import { useEffect, useState } from 'react'
import CrestSvg from './CrestSvg'
import { loadPersonas, deletePersona, exportPersona } from '@/lib/persona-storage'
import type { Persona } from '@/lib/types'

export default function ArchiveList() {
  const [personas, setPersonas] = useState<Persona[]>([])

  useEffect(() => {
    setPersonas(loadPersonas())
  }, [])

  function handleDelete(id: string) {
    deletePersona(id)
    setPersonas(prev => prev.filter(p => p.id !== id))
  }

  if (personas.length === 0) {
    return (
      <div className="text-center py-16 text-inkbrown/50">
        <p className="text-4xl mb-4">📜</p>
        <p className="text-lg">Thy archive is empty.</p>
        <a href="/generate" className="text-burgundy hover:underline mt-2 inline-block">
          Generate thy first persona →
        </a>
      </div>
    )
  }

  return (
    <div className="grid gap-4">
      {personas.map(persona => (
        <div key={persona.id} className="bg-white/60 border border-inkbrown/20 rounded-xl p-4 flex items-start gap-4 shadow-sm">
          <CrestSvg crest={persona.crest} size={64} />
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-inkbrown">{persona.name}</h3>
            <p className="text-burgundy text-sm italic">{persona.title}</p>
            <p className="text-inkbrown/60 text-sm mt-1 line-clamp-2">{persona.backstory}</p>
            <p className="text-inkbrown/40 text-xs mt-1">{new Date(persona.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="flex flex-col gap-2">
            <button onClick={() => exportPersona(persona)}
              className="text-xs px-2 py-1 border border-inkbrown/20 rounded hover:bg-inkbrown/5">
              📥 Export
            </button>
            <button onClick={() => handleDelete(persona.id)}
              className="text-xs px-2 py-1 border border-red-200 text-red-600 rounded hover:bg-red-50">
              🗑️ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
