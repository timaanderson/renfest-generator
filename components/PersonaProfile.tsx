'use client'
import { useRef, useState, useCallback } from 'react'
import { toPng } from 'html-to-image'
import CrestSvg from './CrestSvg'
import FestivalBadges from './FestivalBadges'
import PersonaExportCard from './PersonaExportCard'
import ArchetypeBorder from './ArchetypeBorder'
import { savePersona } from '@/lib/persona-storage'
import { MANTLING, SILHOUETTES } from '@/lib/heraldry'
import type { Persona } from '@/lib/types'

interface Props {
  persona: Persona
  onReroll: () => void
  showSave?: boolean
}

function ArchetypeSilhouette({ archetype, color }: { archetype: string; color: string }) {
  const paths = SILHOUETTES[archetype as keyof typeof SILHOUETTES] || SILHOUETTES.Knight
  return (
    <svg
      viewBox="0 0 100 155"
      width="100"
      height="155"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color, opacity: 0.85 }}
    >
      {paths.map((d, i) => (
        <path key={i} d={d} fill="currentColor" />
      ))}
    </svg>
  )
}

export default function PersonaProfile({ persona, onReroll, showSave = true }: Props) {
  const exportRef = useRef<HTMLDivElement>(null)
  const [saved, setSaved] = useState(false)
  const [exporting, setExporting] = useState(false)
  const archLC = persona.answers.archetype.toLowerCase()
  const m = MANTLING[persona.answers.archetype as keyof typeof MANTLING]

  function handleSave() {
    savePersona(persona)
    setSaved(true)
  }

  const handleExport = useCallback(async () => {
    if (!exportRef.current) return
    setExporting(true)
    try {
      const dataUrl = await toPng(exportRef.current, {
        pixelRatio: 1,
        width: 600,
        height: 600,
      })
      const a = document.createElement('a')
      a.href = dataUrl
      a.download = `${persona.name.replace(/\s+/g, '_')}_persona.png`
      a.click()
    } catch (e) {
      console.error('Export failed:', e)
    } finally {
      setExporting(false)
    }
  }, [persona])

  return (
    <>
      {/* Hidden export card for PNG capture */}
      <PersonaExportCard ref={exportRef} persona={persona} />

      {/* Main profile card */}
      <div
        className={`relative rounded-2xl overflow-hidden shadow-2xl bg-archetype-${archLC}`}
        style={{ borderColor: `${m.secondary}40`, borderWidth: 1, borderStyle: 'solid' }}
      >
        {/* Archetype decorative border overlay */}
        <ArchetypeBorder archetype={persona.answers.archetype} m={m} />

        {/* ── Hero section: Crest + Silhouette ─────────────────────────── */}
        <div
          className="relative flex items-end justify-center gap-8 px-8 pt-10 pb-6"
          style={{ background: `linear-gradient(to bottom, ${m.primary}30, transparent)` }}
        >
          {/* Decorative top border line */}
          <div
            className="absolute top-0 left-8 right-8 h-px"
            style={{ background: `linear-gradient(to right, transparent, ${m.secondary}60, transparent)` }}
          />

          {/* Silhouette (left of crest) */}
          <div className="flex-shrink-0 opacity-70">
            <ArchetypeSilhouette archetype={persona.answers.archetype} color={m.secondary} />
          </div>

          {/* Crest (center, elevated) */}
          <div className="flex-shrink-0 -mb-2">
            <CrestSvg crest={persona.crest} size={160} glowing />
          </div>

          {/* Right side: archetype label + symbol */}
          <div className="flex-shrink-0 text-right opacity-70 pb-4">
            <div className="text-xs uppercase tracking-widest" style={{ color: m.secondary }}>
              {persona.answers.archetype}
            </div>
            <div className="text-xs mt-1" style={{ color: `${m.secondary}80` }}>
              {persona.answers.symbol} · {persona.answers.skill}
            </div>
          </div>
        </div>

        {/* ── Name + Title ──────────────────────────────────────────────── */}
        <div className="text-center px-6 pb-4">
          <h1 className="text-3xl font-bold text-parchment leading-tight">{persona.name}</h1>
          <p className="text-sm italic mt-1" style={{ color: m.secondary }}>
            {persona.title}
          </p>
        </div>

        {/* ── Stat pills ────────────────────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-2 px-6 pb-5">
          {[
            { icon: '🏰', value: persona.stats.realm },
            { icon: '⚔️', value: persona.stats.weapon },
            { icon: '🏛️', value: persona.stats.allegiance },
          ].map(({ icon, value }) => (
            <div
              key={value}
              className="stat-pill text-parchment/80"
              style={{ borderColor: `${m.secondary}40`, color: `${m.secondary}cc` }}
            >
              <span>{icon}</span>
              <span className="text-parchment/80">{value}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="px-8">
          <div className="h-px" style={{ background: `linear-gradient(to right, transparent, ${m.secondary}40, transparent)` }} />
        </div>

        {/* ── Festival Attendance ───────────────────────────────────────── */}
        <div className="px-6 py-5">
          <FestivalBadges />
        </div>

        {/* Divider */}
        <div className="px-8">
          <div className="h-px" style={{ background: `linear-gradient(to right, transparent, ${m.secondary}40, transparent)` }} />
        </div>

        {/* ── Biography ─────────────────────────────────────────────────── */}
        <div className="px-6 py-5 space-y-4">
          <h3
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: `${m.secondary}80` }}
          >
            📜 Biography
          </h3>
          <p className="text-parchment/85 leading-relaxed text-sm">{persona.backstory}</p>

          <div
            className="rounded-lg p-4 text-sm"
            style={{ background: `${m.primary}30`, borderColor: `${m.secondary}25`, borderWidth: 1, borderStyle: 'solid' }}
          >
            <h3
              className="text-xs uppercase tracking-widest font-semibold mb-2"
              style={{ color: `${m.secondary}80` }}
            >
              📚 Historical Trivia
            </h3>
            <p className="text-parchment/70 italic">{persona.trivia}</p>
          </div>
        </div>

        {/* ── Action buttons ────────────────────────────────────────────── */}
        <div className="px-6 pb-6 flex flex-wrap gap-3">
          <button
            onClick={onReroll}
            className="px-5 py-2.5 font-medium text-sm rounded-lg transition-colors"
            style={{ background: m.primary, color: m.secondary }}
          >
            🎲 Re-Roll
          </button>

          {showSave && !saved && (
            <button
              onClick={handleSave}
              className="px-5 py-2.5 font-medium text-sm rounded-lg transition-colors"
              style={{ background: `${m.secondary}20`, color: m.secondary, borderColor: `${m.secondary}40`, borderWidth: 1, borderStyle: 'solid' }}
            >
              💾 Save
            </button>
          )}
          {saved && (
            <span className="py-2.5 text-sm" style={{ color: m.secondary }}>✓ Saved</span>
          )}

          <button
            onClick={handleExport}
            disabled={exporting}
            className="px-5 py-2.5 font-medium text-sm rounded-lg transition-colors disabled:opacity-50"
            style={{ background: `${m.secondary}15`, color: `${m.secondary}cc`, borderColor: `${m.secondary}30`, borderWidth: 1, borderStyle: 'solid' }}
          >
            {exporting ? 'Exporting...' : '🖼️ Export PNG'}
          </button>

          <a
            href="/generate"
            className="px-5 py-2.5 font-medium text-sm rounded-lg transition-colors"
            style={{ color: 'rgba(244,228,188,0.4)', borderColor: 'rgba(244,228,188,0.15)', borderWidth: 1, borderStyle: 'solid' }}
          >
            ✨ New Persona
          </a>
        </div>
      </div>
    </>
  )
}
