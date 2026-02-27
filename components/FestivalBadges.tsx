'use client'
import { useState, useEffect } from 'react'
import { loadFestivals, addFestival, removeFestival } from '@/lib/festival-storage'
import type { FestivalEntry } from '@/lib/types'

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

const CURRENT_YEAR = new Date().getFullYear()
const YEARS = Array.from({ length: 20 }, (_, i) => String(CURRENT_YEAR - i))

export default function FestivalBadges() {
  const [festivals, setFestivals] = useState<FestivalEntry[]>([])
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')
  const [month, setMonth] = useState(MONTHS[new Date().getMonth()])
  const [year, setYear] = useState(String(CURRENT_YEAR))

  useEffect(() => {
    setFestivals(loadFestivals())
  }, [])

  function handleAdd() {
    if (!name.trim()) return
    const entry = addFestival({ name: name.trim(), month, year })
    setFestivals(prev => [entry, ...prev])
    setName('')
    setShowModal(false)
  }

  function handleRemove(id: string) {
    removeFestival(id)
    setFestivals(prev => prev.filter(f => f.id !== id))
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs uppercase tracking-widest text-gold/70 font-semibold">
          Festival Attendance
        </h3>
        <button
          onClick={() => setShowModal(true)}
          className="text-xs text-gold/60 hover:text-gold transition-colors border border-gold/30 rounded px-2 py-1"
        >
          + Add
        </button>
      </div>

      {festivals.length === 0 ? (
        <p className="text-xs text-parchment/30 italic">No festivals logged yet...</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {festivals.map((f) => (
            <div
              key={f.id}
              className="group relative flex items-center gap-1.5 text-xs bg-gold/10 border border-gold/25 rounded-full px-3 py-1.5"
            >
              <span className="text-gold">⚜</span>
              <span className="text-parchment/80">{f.name}</span>
              <span className="text-parchment/40">·</span>
              <span className="text-parchment/50">{f.month} {f.year}</span>
              <button
                onClick={() => handleRemove(f.id)}
                className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-parchment/30 hover:text-red-400 text-xs"
                title="Remove"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add Festival Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-inkbrown border border-gold/30 rounded-xl p-6 space-y-4 shadow-2xl">
            <h4 className="text-lg font-bold text-parchment">Log a Festival</h4>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-parchment/60 uppercase tracking-wide block mb-1">
                  Festival Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Texas Renaissance Festival"
                  className="w-full px-3 py-2 bg-black/30 border border-gold/20 rounded-lg text-parchment placeholder-parchment/30 text-sm focus:border-gold/60 focus:outline-none"
                  onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                  autoFocus
                />
              </div>

              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-xs text-parchment/60 uppercase tracking-wide block mb-1">Month</label>
                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-full px-3 py-2 bg-black/30 border border-gold/20 rounded-lg text-parchment text-sm focus:border-gold/60 focus:outline-none"
                  >
                    {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div className="w-24">
                  <label className="text-xs text-parchment/60 uppercase tracking-wide block mb-1">Year</label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-3 py-2 bg-black/30 border border-gold/20 rounded-lg text-parchment text-sm focus:border-gold/60 focus:outline-none"
                  >
                    {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-1">
              <button
                onClick={handleAdd}
                disabled={!name.trim()}
                className="flex-1 py-2.5 bg-gold text-inkbrown font-semibold rounded-lg text-sm hover:bg-gold/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Add Festival
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2.5 border border-gold/20 text-parchment/60 rounded-lg text-sm hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
