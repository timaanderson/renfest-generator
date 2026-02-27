import type { CrestConfig } from '@/lib/types'
import { CHARGE_PATHS, MANTLING } from '@/lib/heraldry'

const SHIELD_SHAPES: Record<string, string> = {
  Knight:    'M 50 5 L 95 20 L 95 60 Q 95 90 50 98 Q 5 90 5 60 L 5 20 Z',
  Viking:    'M 50 5 L 95 15 L 85 75 L 50 98 L 15 75 L 5 15 Z',
  Wizard:    'M 50 5 L 95 25 L 75 95 L 25 95 L 5 25 Z',
  Rogue:     'M 50 5 L 90 30 L 90 65 L 50 98 L 10 65 L 10 30 Z',
  Bard:      'M 50 5 Q 95 5 95 50 Q 95 90 50 98 Q 5 90 5 50 Q 5 5 50 5 Z',
  Herbalist: 'M 50 5 L 90 25 L 90 70 Q 90 90 50 98 Q 10 90 10 70 L 10 25 Z',
}

function FieldDef({ archetype }: { archetype: string }) {
  switch (archetype) {
    case 'Knight': return (
      <pattern id="field-knight" patternUnits="userSpaceOnUse" width={16} height={16} patternTransform="rotate(45)">
        <rect width={16} height={16} fill="#6b1a2a"/>
        <rect width={8} height={16} fill="#5a1522" opacity={0.6}/>
      </pattern>
    )
    case 'Bard': return (
      <pattern id="field-bard" patternUnits="userSpaceOnUse" width={20} height={20}>
        <rect width={20} height={20} fill="#4a2070"/>
        <circle cx={10} cy={10} r={3} fill="#3d195e" opacity={0.5}/>
      </pattern>
    )
    case 'Wizard': return (
      <pattern id="field-wizard" patternUnits="userSpaceOnUse" width={24} height={24}>
        <rect width={24} height={24} fill="#1a3a6b"/>
        <circle cx={4} cy={4} r={1.5} fill="#7ecdc8" opacity={0.4}/>
        <circle cx={14} cy={14} r={1} fill="#7ecdc8" opacity={0.3}/>
        <circle cx={20} cy={6} r={1} fill="#7ecdc8" opacity={0.25}/>
      </pattern>
    )
    case 'Rogue': return (
      <pattern id="field-rogue" patternUnits="userSpaceOnUse" width={12} height={12} patternTransform="rotate(30)">
        <rect width={12} height={12} fill="#1a1a1a"/>
        <rect x={0} y={0} width={6} height={12} fill="#111111"/>
      </pattern>
    )
    case 'Viking': return (
      <pattern id="field-viking" patternUnits="userSpaceOnUse" width={18} height={18}>
        <rect width={18} height={18} fill="#2d5a27"/>
        <line x1={0} y1={9} x2={18} y2={9} stroke="#245022" strokeWidth={2} opacity={0.5}/>
        <line x1={9} y1={0} x2={9} y2={18} stroke="#245022" strokeWidth={2} opacity={0.5}/>
      </pattern>
    )
    default: return ( // Herbalist
      <pattern id="field-herbalist" patternUnits="userSpaceOnUse" width={20} height={20}>
        <rect width={20} height={20} fill="#3a6b1a"/>
        <circle cx={10} cy={10} r={4} fill="#2d5514" opacity={0.4}/>
        <circle cx={0} cy={0} r={2} fill="#2d5514" opacity={0.3}/>
      </pattern>
    )
  }
}

function MantlingLines({ primary, secondary }: { primary: string; secondary: string }) {
  return (
    <g opacity={0.7}>
      {/* Left mantling curl */}
      <path d="M 12,22 C -5,15 -8,45 5,55 C 0,40 4,28 12,22 Z"
        fill={primary} stroke={secondary} strokeWidth={0.5} />
      <path d="M 10,22 C -8,18 -12,50 2,62 C -4,48 -2,32 10,22 Z"
        fill={secondary} stroke={primary} strokeWidth={0.3} opacity={0.5} />
      {/* Right mantling curl */}
      <path d="M 88,22 C 105,15 108,45 95,55 C 100,40 96,28 88,22 Z"
        fill={primary} stroke={secondary} strokeWidth={0.5} />
      <path d="M 90,22 C 108,18 112,50 98,62 C 104,48 102,32 90,22 Z"
        fill={secondary} stroke={primary} strokeWidth={0.3} opacity={0.5} />
    </g>
  )
}

interface Props {
  crest: CrestConfig
  size?: number
  glowing?: boolean
}

export default function CrestSvg({ crest, size = 140, glowing = false }: Props) {
  const shape = SHIELD_SHAPES[crest.archetype] || SHIELD_SHAPES.Knight
  const chargePath = CHARGE_PATHS[crest.symbol as keyof typeof CHARGE_PATHS]
  const fieldId = `field-${crest.archetype.toLowerCase()}`
  const clipId = `shield-clip-${crest.archetype}-${crest.symbol}`

  return (
    <div
      style={glowing && crest.glowColor ? { filter: `drop-shadow(0 0 12px ${crest.glowColor}) drop-shadow(0 0 24px ${crest.glowColor})` } : {}}
    >
      <svg
        width={size}
        height={size}
        viewBox="-15 0 130 108"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <FieldDef archetype={crest.archetype} />
          <clipPath id={clipId}>
            <path d={shape} />
          </clipPath>
        </defs>

        {/* Layer 2: Mantling (behind shield) */}
        <MantlingLines
          primary={crest.primaryColor}
          secondary={crest.secondaryColor}
        />

        {/* Layer 0: Field pattern */}
        <path d={shape} fill={`url(#${fieldId})`} />

        {/* Dividing line across middle of shield */}
        <line x1={5} y1={50} x2={95} y2={50}
          stroke={crest.secondaryColor} strokeWidth={1.5} opacity={0.4}
          clipPath={`url(#${clipId})`} />

        {/* Layer 1: Heraldic charge */}
        <g clipPath={`url(#${clipId})`}>
          <path d={chargePath} fill={crest.secondaryColor} opacity={0.9} />
        </g>

        {/* Shield border */}
        <path d={shape} fill="none" stroke={crest.secondaryColor} strokeWidth={2.5} />

        {/* Inner border shadow */}
        <path d={shape} fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth={1} opacity={0.5}
          transform="scale(0.92) translate(4,4)" />
      </svg>
    </div>
  )
}
