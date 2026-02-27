import type { CrestConfig } from '@/lib/types'

const SYMBOL_MAP: Record<string, string> = {
  Dragon: '🐉', Wolf: '🐺', Mushroom: '🍄',
  Moon: '🌙', Anvil: '⚒️', Lute: '🎵',
}

const SHIELD_SHAPES: Record<string, string> = {
  Knight:    'M 50 5 L 95 20 L 95 60 Q 95 90 50 98 Q 5 90 5 60 L 5 20 Z',
  Viking:    'M 50 5 L 95 15 L 85 75 L 50 98 L 15 75 L 5 15 Z',
  Wizard:    'M 50 5 L 95 25 L 75 95 L 25 95 L 5 25 Z',
  Rogue:     'M 50 5 L 90 30 L 90 65 L 50 98 L 10 65 L 10 30 Z',
  Bard:      'M 50 5 Q 95 5 95 50 Q 95 90 50 98 Q 5 90 5 50 Q 5 5 50 5 Z',
  Herbalist: 'M 50 5 L 90 25 L 90 70 Q 90 90 50 98 Q 10 90 10 70 L 10 25 Z',
}

interface Props {
  crest: CrestConfig
  size?: number
}

export default function CrestSvg({ crest, size = 120 }: Props) {
  const shape = SHIELD_SHAPES[crest.archetype] || SHIELD_SHAPES.Knight
  const symbol = SYMBOL_MAP[crest.symbol] || '⚔️'

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`shield-clip-${crest.archetype}`}>
          <path d={shape} />
        </clipPath>
      </defs>
      {/* Shield base */}
      <path d={shape} fill={crest.primaryColor} stroke={crest.secondaryColor} strokeWidth="3" />
      {/* Color band */}
      <rect x="0" y="40" width="100" height="25" fill={crest.secondaryColor} opacity="0.3"
        clipPath={`url(#shield-clip-${crest.archetype})`} />
      {/* Symbol */}
      <text x="50" y="60" textAnchor="middle" fontSize="28" dominantBaseline="middle">{symbol}</text>
      {/* Border */}
      <path d={shape} fill="none" stroke={crest.secondaryColor} strokeWidth="3" />
    </svg>
  )
}
