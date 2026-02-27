import { forwardRef } from 'react'
import CrestSvg from './CrestSvg'
import type { Persona } from '@/lib/types'
import { MANTLING } from '@/lib/heraldry'

interface Props {
  persona: Persona
}

const PersonaExportCard = forwardRef<HTMLDivElement, Props>(({ persona }, ref) => {
  const m = MANTLING[persona.answers.archetype]

  return (
    <div
      ref={ref}
      className="export-card-root"
    >
      <div
        style={{
          width: 600,
          height: 600,
          background: m.bgGradient,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
          gap: 20,
          fontFamily: 'Georgia, serif',
          color: '#f4e4bc',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Corner decorations */}
        {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              ...Object.fromEntries(pos.split(' ').map(p => {
                const [side, val] = p.split('-')
                return [side, `${val}px`]
              })),
              fontSize: 24,
              opacity: 0.4,
              color: m.secondary,
            }}
          >
            ✦
          </div>
        ))}

        {/* Outer border */}
        <div
          style={{
            position: 'absolute',
            inset: 16,
            border: `1px solid ${m.secondary}40`,
            borderRadius: 8,
          }}
        />

        {/* Crest */}
        <CrestSvg crest={persona.crest} size={180} glowing />

        {/* Name */}
        <div style={{ textAlign: 'center', maxWidth: 460 }}>
          <h1 style={{ fontSize: 28, fontWeight: 'bold', margin: 0, lineHeight: 1.2, color: '#f4e4bc' }}>
            {persona.name}
          </h1>
          <p style={{ fontSize: 16, color: m.secondary, margin: '6px 0 0', fontStyle: 'italic' }}>
            {persona.title}
          </p>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { icon: '🏰', label: persona.stats.realm },
            { icon: '⚔️', label: persona.stats.weapon },
          ].map(({ icon, label }) => (
            <div
              key={label}
              style={{
                fontSize: 11,
                color: `${m.secondary}cc`,
                border: `1px solid ${m.secondary}40`,
                borderRadius: 20,
                padding: '4px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                maxWidth: 200,
                textAlign: 'center',
              }}
            >
              <span>{icon}</span>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Archetype badge */}
        <div
          style={{
            fontSize: 12,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: `${m.secondary}99`,
            marginTop: 4,
          }}
        >
          {persona.answers.archetype} · {persona.answers.symbol}
        </div>

        {/* Watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            fontSize: 10,
            color: `${m.secondary}50`,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Ren Faire Persona Generator
        </div>
      </div>
    </div>
  )
})

PersonaExportCard.displayName = 'PersonaExportCard'
export default PersonaExportCard
