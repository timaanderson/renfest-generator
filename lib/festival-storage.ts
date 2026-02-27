'use client'
import type { FestivalEntry } from './types'

const KEY = 'renfest_festivals_global'

export function loadFestivals(): FestivalEntry[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]')
  } catch {
    return []
  }
}

export function addFestival(entry: Omit<FestivalEntry, 'id'>): FestivalEntry {
  const all = loadFestivals()
  const newEntry: FestivalEntry = { id: crypto.randomUUID(), ...entry }
  all.unshift(newEntry)
  localStorage.setItem(KEY, JSON.stringify(all.slice(0, 50)))
  return newEntry
}

export function removeFestival(id: string): void {
  const all = loadFestivals().filter(f => f.id !== id)
  localStorage.setItem(KEY, JSON.stringify(all))
}
