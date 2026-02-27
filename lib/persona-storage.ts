'use client'
import type { Persona } from './types'

const KEY = 'renfest_personas'

export function loadPersonas(): Persona[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]')
  } catch {
    return []
  }
}

export function savePersona(persona: Persona): void {
  const all = loadPersonas()
  all.unshift(persona)
  localStorage.setItem(KEY, JSON.stringify(all.slice(0, 50)))
}

export function deletePersona(id: string): void {
  const all = loadPersonas().filter(p => p.id !== id)
  localStorage.setItem(KEY, JSON.stringify(all))
}

export function exportPersona(persona: Persona): void {
  const blob = new Blob([JSON.stringify(persona, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${persona.name.replace(/\s+/g, '_')}.json`
  a.click()
  URL.revokeObjectURL(url)
}
