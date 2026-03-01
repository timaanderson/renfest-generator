'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { QuestionnaireAnswers } from '@/lib/types'

const GENERAL_PHRASES = [
  "Consulting the ancient scrolls...",
  "Aligning the celestial bodies...",
  "Dusting off the archives...",
  "Sealing thy fate...",
  "Whispering to the winds..."
]

const ARCHETYPE_PHRASES: Record<string, string[]> = {
  Knight: [
    "Polishing the plate armor...",
    "Feeding the warhorse...",
    "Tightening the sword belt...",
    "Reciting the code of honor..."
  ],
  Bard: [
    "Tuning the lute strings...",
    "Drafting the opening stanza...",
    "Testing the tavern acoustics...",
    "Seeking the perfect rhyme..."
  ],
  Wizard: [
    "Translating the ancient runes...",
    "Aligning the leylines...",
    "Sparking the arcane flame...",
    "Polishing the crystal ball..."
  ],
  Rogue: [
    "Sharpening the hidden daggers...",
    "Testing the lockpicks...",
    "Melting into the shadows...",
    "Counting the stolen coin..."
  ],
  Viking: [
    "Carving the runestones...",
    "Preparing the longship...",
    "Sharpening the battle-axe...",
    "Seeking the favor of Odin..."
  ],
  Pirate: [
    "Charting the forbidden waters...",
    "Polishing the cutlass...",
    "Bribing the harbormaster...",
    "Searching for the buried treasure..."
  ],
  Fairy: [
    "Weaving moonlight into threads...",
    "Gathering dew from spider silk...",
    "Whispering to the forest spirits...",
    "Brewing a pinch of wild magic..."
  ],
  Royal: [
    "Polishing the crown jewels...",
    "Drafting the royal decree...",
    "Preparing the throne room...",
    "Summoning the court herald..."
  ],
}

interface Props {
  answers: QuestionnaireAnswers
}

export default function OraclesChamber({ answers }: Props) {
  const [phraseIndex, setPhraseIndex] = useState(0)

  const archetypePhrases = ARCHETYPE_PHRASES[answers.archetype] || []
  const pool = [...archetypePhrases, ...GENERAL_PHRASES]

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % pool.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [pool.length])

  return (
    <div className="flex flex-col items-center justify-center py-20 min-h-[400px]">
      {/* Central pulsing crystal */}
      <div className="relative mb-12">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-32 h-32 border-4 border-dashed border-purple-500/40 rounded-full flex items-center justify-center"
        >
          <div className="w-24 h-24 border-2 border-purple-500/20 rounded-full flex items-center justify-center">
            <div className="text-5xl">🔮</div>
          </div>
        </motion.div>

        {/* Orbiting particles */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-gold/40 rounded-full"
            style={{ translateX: '-50%', translateY: '-50%' }}
            animate={{
              x: Math.cos(i * 120 * (Math.PI / 180)) * 60,
              y: Math.sin(i * 120 * (Math.PI / 180)) * 60,
              rotate: 360,
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="text-center h-12">
        <AnimatePresence mode="wait">
          <motion.p
            key={phraseIndex}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-serif italic text-purple-200/80"
          >
            {pool[phraseIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-8 w-48 h-1 bg-purple-900/40 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-purple-500/60 rounded-full"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <p className="mt-4 text-xs text-purple-200/40 uppercase tracking-[0.2em] font-bold">
        Divining thy true nature
      </p>
    </div>
  )
}
