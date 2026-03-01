'use client'

import { useState } from 'react'
import ThemeFrame, { type ThemeFrameTheme } from '@/components/ThemeFrame'

const THEMES: { id: ThemeFrameTheme; label: string; bg: string }[] = [
  { id: 'knight', label: '⚔️ Knight', bg: 'bg-slate-900'   },
  { id: 'viking', label: '🪓 Viking', bg: 'bg-stone-900'   },
  { id: 'pirate', label: '☠️ Pirate', bg: 'bg-zinc-950'    },
  { id: 'fairy',  label: '🧚 Fairy',  bg: 'bg-emerald-950' },
  { id: 'royal',  label: '👑 Royal',  bg: 'bg-purple-950'  },
  { id: 'bard',   label: '🎵 Bard',   bg: 'bg-amber-950'   },
  { id: 'rogue',  label: '🗡️ Rogue',  bg: 'bg-red-950'     },
  { id: 'wizard', label: '🧙 Wizard', bg: 'bg-blue-950'    },
]

export default function ThemeDemoPage() {
  const [theme, setTheme] = useState<ThemeFrameTheme>('knight')
  const current = THEMES.find(t => t.id === theme)!

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center gap-8 transition-colors duration-700 ${current.bg}`}>
      <ThemeFrame theme={theme} />
      <h1 className="text-white text-2xl font-bold z-10 pointer-events-none select-none capitalize tracking-widest">
        {current.label}
      </h1>
      <div className="flex flex-wrap gap-2 justify-center z-10">
        {THEMES.map(t => (
          <button key={t.id} onClick={() => setTheme(t.id)}
            className={`px-4 py-2 rounded text-sm font-semibold transition-all pointer-events-auto ${
              theme === t.id
                ? 'bg-white text-black scale-105'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}>
            {t.label}
          </button>
        ))}
      </div>
      <p className="text-white/30 text-xs z-10 pointer-events-none">
        ThemeFrame Demo · click to switch
      </p>
    </main>
  )
}
