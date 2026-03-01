import type { Archetype, Symbol } from './types'

// ── Field patterns (Layer 0) ─────────────────────────────────────────────────
// Each returns a <defs> + fill pattern element string for use in SVG
export const FIELD_PATTERNS: Record<Archetype, { id: string; patternEl: string; fill: string }> = {
  Knight: {
    id: 'field-knight',
    patternEl: `<pattern id="field-knight" patternUnits="userSpaceOnUse" width="16" height="16" patternTransform="rotate(45)">
      <rect width="16" height="16" fill="#6b1a2a"/>
      <rect width="8" height="16" fill="#5a1522" opacity="0.6"/>
    </pattern>`,
    fill: 'url(#field-knight)',
  },
  Bard: {
    id: 'field-bard',
    patternEl: `<pattern id="field-bard" patternUnits="userSpaceOnUse" width="20" height="20">
      <rect width="20" height="20" fill="#4a2070"/>
      <circle cx="10" cy="10" r="3" fill="#3d195e" opacity="0.5"/>
    </pattern>`,
    fill: 'url(#field-bard)',
  },
  Wizard: {
    id: 'field-wizard',
    patternEl: `<pattern id="field-wizard" patternUnits="userSpaceOnUse" width="24" height="24">
      <rect width="24" height="24" fill="#1a3a6b"/>
      <circle cx="4" cy="4" r="1.5" fill="#7ecdc8" opacity="0.4"/>
      <circle cx="14" cy="14" r="1" fill="#7ecdc8" opacity="0.3"/>
      <circle cx="20" cy="6" r="1" fill="#7ecdc8" opacity="0.25"/>
    </pattern>`,
    fill: 'url(#field-wizard)',
  },
  Rogue: {
    id: 'field-rogue',
    patternEl: `<pattern id="field-rogue" patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(30)">
      <rect width="12" height="12" fill="#1a1a1a"/>
      <rect x="0" y="0" width="6" height="12" fill="#111111"/>
    </pattern>`,
    fill: 'url(#field-rogue)',
  },
  Viking: {
    id: 'field-viking',
    patternEl: `<pattern id="field-viking" patternUnits="userSpaceOnUse" width="18" height="18">
      <rect width="18" height="18" fill="#2d5a27"/>
      <line x1="0" y1="9" x2="18" y2="9" stroke="#245022" strokeWidth="2" opacity="0.5"/>
      <line x1="9" y1="0" x2="9" y2="18" stroke="#245022" strokeWidth="2" opacity="0.5"/>
    </pattern>`,
    fill: 'url(#field-viking)',
  },
  Pirate: {
    id: 'field-pirate',
    patternEl: `<pattern id="field-pirate" patternUnits="userSpaceOnUse" width="20" height="20">
      <rect width="20" height="20" fill="#1a2a3a"/>
      <line x1="0" y1="0" x2="20" y2="20" stroke="#141e28" stroke-width="2" opacity="0.7"/>
      <line x1="20" y1="0" x2="0" y2="20" stroke="#141e28" stroke-width="2" opacity="0.7"/>
    </pattern>`,
    fill: 'url(#field-pirate)',
  },
  Fairy: {
    id: 'field-fairy',
    patternEl: `<pattern id="field-fairy" patternUnits="userSpaceOnUse" width="24" height="24">
      <rect width="24" height="24" fill="#1a3d2b"/>
      <circle cx="6"  cy="6"  r="1.5" fill="#b8f0d4" opacity="0.25"/>
      <circle cx="18" cy="18" r="1"   fill="#b8f0d4" opacity="0.2"/>
      <circle cx="18" cy="6"  r="1"   fill="#b8f0d4" opacity="0.15"/>
      <circle cx="6"  cy="18" r="1.5" fill="#b8f0d4" opacity="0.2"/>
    </pattern>`,
    fill: 'url(#field-fairy)',
  },
  Royal: {
    id: 'field-royal',
    patternEl: `<pattern id="field-royal" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
      <rect width="20" height="20" fill="#3d0d5e"/>
      <rect width="10" height="20" fill="#2e0a47" opacity="0.6"/>
    </pattern>`,
    fill: 'url(#field-royal)',
  },
}

// ── Heraldic charge paths (Layer 1) ──────────────────────────────────────────
// viewBox 0 0 100 100. These are simplified heraldic interpretations.
export const CHARGE_PATHS: Record<Symbol, string> = {
  Dragon:
    'M50,18 C42,18 35,22 32,30 L24,28 L28,38 L20,42 L30,46 L28,58 L50,52 L72,58 L70,46 L80,42 L72,38 L76,28 L68,30 C65,22 58,18 50,18 Z M50,52 L44,72 L40,82 L50,76 L60,82 L56,72 Z M32,30 L18,20 L25,35 Z M68,30 L82,20 L75,35 Z',
  Wolf:
    'M50,14 C42,14 36,18 34,26 L28,22 L30,36 L22,42 L34,44 L32,56 C36,66 44,70 50,70 C56,70 64,66 68,56 L66,44 L78,42 L70,36 L72,22 L66,26 C64,18 58,14 50,14 Z M40,36 C40,32 43,30 46,32 C44,34 42,36 40,36 Z M60,36 C60,32 57,30 54,32 C56,34 58,36 60,36 Z M46,50 C46,54 54,54 54,50 L54,46 L46,46 Z',
  Mushroom:
    'M50,72 L45,42 C32,36 22,44 22,54 C22,70 34,78 50,78 C66,78 78,70 78,54 C78,44 68,36 55,42 Z M44,78 L42,94 L58,94 L56,78 Z M46,60 C44,58 44,54 46,52 L54,52 C56,54 56,58 54,60 Z',
  Moon:
    'M52,14 C34,14 18,30 18,50 C18,70 34,86 52,86 C40,76 32,64 32,50 C32,36 40,24 52,14 Z M58,18 L62,30 L57,27 Z M64,32 L68,44 L63,41 Z M66,50 L68,62 L63,59 Z',
  Anvil:
    'M28,74 L72,74 L72,80 L28,80 Z M33,50 L67,50 L72,74 L28,74 Z M38,30 L62,30 L67,50 L33,50 Z M44,20 L56,20 L62,30 L38,30 Z M47,12 L53,12 L56,20 L44,20 Z',
  Lute:
    'M50,22 L44,28 L40,55 C36,70 40,86 50,89 C60,86 64,70 60,55 L56,28 Z M44,28 L50,20 L56,28 Z M42,62 L58,62 L58,66 L42,66 Z M49,22 L51,22 L51,58 L49,58 Z M47,32 L53,32 M47,38 L53,38 M47,44 L53,44',
}

// ── Mantling colors (Layer 2 config) ─────────────────────────────────────────
export const MANTLING: Record<Archetype, {
  primary: string
  secondary: string
  glow: string
  bgGradient: string
}> = {
  Knight:    {
    primary: '#6b1a2a', secondary: '#c9a84c',
    glow: 'rgba(107,26,42,0.7)',
    bgGradient: 'radial-gradient(ellipse at top, #3d0d14 0%, #1a0508 55%, #0d0202 100%)',
  },
  Bard:      {
    primary: '#4a2070', secondary: '#c9a84c',
    glow: 'rgba(74,32,112,0.7)',
    bgGradient: 'radial-gradient(ellipse at top, #2a1040 0%, #160824 55%, #0a0512 100%)',
  },
  Wizard:    {
    primary: '#1a3a6b', secondary: '#7ecdc8',
    glow: 'rgba(26,58,107,0.7)',
    bgGradient: 'radial-gradient(ellipse at top, #0d1f3d 0%, #060e1f 55%, #020408 100%)',
  },
  Rogue:     {
    primary: '#1a1a1a', secondary: '#6b1a2a',
    glow: 'rgba(30,30,30,0.9)',
    bgGradient: 'radial-gradient(ellipse at top, #111111 0%, #0a0a0a 55%, #050505 100%)',
  },
  Viking:    {
    primary: '#2d5a27', secondary: '#c9a84c',
    glow: 'rgba(45,90,39,0.7)',
    bgGradient: 'radial-gradient(ellipse at top, #122214 0%, #080f09 55%, #030503 100%)',
  },
  Pirate: {
    primary: '#1a2a3a', secondary: '#c9a84c',
    glow: 'rgba(26,42,58,0.8)',
    bgGradient: 'radial-gradient(ellipse at top, #0d1a24 0%, #080e14 55%, #030608 100%)',
  },
  Fairy: {
    primary: '#1a3d2b', secondary: '#b8f0d4',
    glow: 'rgba(26,61,43,0.7)',
    bgGradient: 'radial-gradient(ellipse at top, #0d2416 0%, #081410 55%, #030805 100%)',
  },
  Royal: {
    primary: '#3d0d5e', secondary: '#c9a84c',
    glow: 'rgba(61,13,94,0.7)',
    bgGradient: 'radial-gradient(ellipse at top, #2a1040 0%, #160828 55%, #0a0515 100%)',
  },
}

// ── Silhouette paths (viewBox 0 0 100 155) ───────────────────────────────────
// Each returns an array of path `d` strings; all filled with currentColor.
export const SILHOUETTES: Record<Archetype, string[]> = {
  Knight: [
    // helmet dome
    'M50,4 C37,4 32,12 32,24 C32,28 34,32 36,34 L32,36 L68,36 L64,34 C66,32 68,28 68,24 C68,12 63,4 50,4 Z',
    // visor bar
    'M30,27 L70,27 L70,33 L30,33 Z',
    // breastplate
    'M20,36 L80,36 L77,90 L23,90 Z',
    // left pauldron
    'M8,40 L26,40 L24,78 L6,78 Z',
    // right pauldron + sword
    'M74,40 L92,40 L94,78 L76,78 Z',
    // left leg
    'M23,90 L47,90 L46,152 L20,152 Z',
    // right leg
    'M53,90 L77,90 L80,152 L54,152 Z',
  ],
  Bard: [
    // hat brim
    'M18,24 L82,24 L78,30 L22,30 Z',
    // hat crown
    'M30,6 L70,6 L74,24 L26,24 Z',
    // feather
    'M72,8 L84,2 L88,12 L74,18 Z',
    // head
    'M38,32 C38,44 44,52 50,52 C56,52 62,44 62,32 C62,20 56,14 50,14 C44,14 38,20 38,32 Z',
    // coat body
    'M26,52 L74,52 L72,108 L28,108 Z',
    // left leg
    'M28,108 L50,108 L50,152 L26,152 Z',
    // right leg
    'M50,108 L72,108 L74,152 L50,152 Z',
  ],
  Wizard: [
    // hat (tall triangle)
    'M50,2 L34,46 L66,46 Z',
    // hat brim
    'M24,44 L76,44 L74,52 L26,52 Z',
    // head
    'M38,54 C38,66 44,74 50,74 C56,74 62,66 62,54 C62,42 56,36 50,36 C44,36 38,42 38,54 Z',
    // robes (wide flare at base)
    'M16,74 L84,74 L90,152 L10,152 Z',
    // staff
    'M80,14 L84,14 L84,152 L80,152 Z',
    // staff orb
    'M82,10 C78,10 74,7 74,3 C74,-1 78,-4 82,-4 C86,-4 90,-1 90,3 C90,7 86,10 82,10 Z',
  ],
  Rogue: [
    // hood shadow
    'M34,6 L66,6 L72,28 L28,28 Z',
    // hood inner (dark face void)
    'M38,14 L62,14 L66,28 L34,28 Z',
    // body (crouched, lower center of gravity)
    'M24,56 L76,56 L74,100 L26,100 Z',
    // wide shoulders
    'M20,56 L36,52 L36,64 L20,68 Z',
    'M80,56 L64,52 L64,64 L80,68 Z',
    // neck/lower face visible
    'M42,28 L58,28 L60,56 L40,56 Z',
    // left leg (bent/crouched)
    'M26,100 L48,100 L50,148 L24,148 Z',
    // right leg
    'M52,100 L74,100 L76,148 L50,148 Z',
    // dagger left
    'M4,54 L10,48 L16,58 L10,64 Z',
    // dagger right
    'M96,54 L90,48 L84,58 L90,64 Z',
  ],
  Viking: [
    // helmet dome
    'M32,30 L50,8 L68,30 Z',
    // left horn
    'M30,22 L20,8 L38,20 Z',
    // right horn
    'M70,22 L80,8 L62,20 Z',
    // helmet rim
    'M28,30 L72,30 L70,38 L30,38 Z',
    // massive torso/chest
    'M18,38 L82,38 L84,96 L16,96 Z',
    // left arm (out wide)
    'M4,44 L20,44 L18,80 L4,76 Z',
    // axe handle (right, raised)
    'M84,12 L88,12 L88,96 L84,96 Z',
    // axe head
    'M82,12 L96,6 L98,24 L84,28 Z',
    // left leg
    'M16,96 L46,96 L44,152 L14,152 Z',
    // right leg
    'M54,96 L84,96 L86,152 L56,152 Z',
  ],
  Pirate: [
    // tricorn hat brim
    'M14,28 L86,28 L82,34 L18,34 Z',
    // hat peak center
    'M42,8 L58,8 L62,28 L38,28 Z',
    // hat peak left
    'M24,10 L42,8 L38,28 L18,28 Z',
    // hat peak right
    'M58,8 L76,10 L82,28 L62,28 Z',
    // head
    'M38,36 C38,48 44,56 50,56 C56,56 62,48 62,36 C62,24 56,18 50,18 C44,18 38,24 38,36 Z',
    // coat body
    'M18,56 L82,56 L80,110 L20,110 Z',
    // left leg
    'M20,110 L48,110 L46,152 L18,152 Z',
    // right leg
    'M52,110 L80,110 L82,152 L52,152 Z',
    // cutlass blade
    'M82,58 L96,52 L98,62 L84,72 Z',
    // cutlass handle
    'M80,72 L84,72 L84,100 L80,100 Z',
  ],
  Fairy: [
    // left wing top
    'M22,32 C8,20 6,52 18,62 C24,67 32,62 36,56 L28,48 Z',
    // left wing bottom
    'M14,64 C4,76 10,94 24,90 C30,88 34,80 30,70 L20,68 Z',
    // right wing top
    'M78,32 C92,20 94,52 82,62 C76,67 68,62 64,56 L72,48 Z',
    // right wing bottom
    'M86,64 C96,76 90,94 76,90 C70,88 66,80 70,70 L80,68 Z',
    // head
    'M38,32 C38,44 44,52 50,52 C56,52 62,44 62,32 C62,20 56,14 50,14 C44,14 38,20 38,32 Z',
    // dress body
    'M36,52 L64,52 L68,104 L32,104 Z',
    // left leg
    'M32,104 L50,104 L50,134 L30,134 Z',
    // right leg
    'M50,104 L68,104 L70,134 L50,134 Z',
    // flower crown
    'M40,12 L44,4 L50,8 L56,4 L60,12 L50,14 Z',
  ],
  Royal: [
    // crown – 5 pointed tines
    'M34,30 L36,14 L42,24 L46,10 L50,20 L54,10 L58,24 L64,14 L66,30 Z',
    // crown band
    'M30,30 L70,30 L68,38 L32,38 Z',
    // head
    'M38,40 C38,52 44,60 50,60 C56,60 62,52 62,40 C62,30 56,26 50,26 C44,26 38,30 38,40 Z',
    // grand flowing robe body
    'M12,60 L88,60 L84,118 L16,118 Z',
    // ermine hem trim
    'M16,118 L84,118 L88,134 L12,134 Z',
    // left robe hem
    'M12,134 L46,134 L44,152 L10,152 Z',
    // right robe hem
    'M54,134 L88,134 L90,152 L56,152 Z',
    // scepter staff
    'M78,26 L82,26 L82,112 L78,112 Z',
    // scepter orb
    'M80,22 C76,22 72,18 72,14 C72,10 76,6 80,6 C84,6 88,10 88,14 C88,18 84,22 80,22 Z',
  ],
}
