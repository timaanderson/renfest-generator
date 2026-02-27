'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import PersonaProfile from '@/components/PersonaProfile'
import { generatePersona, buildCrest } from '@/lib/generate'
import { MANTLING } from '@/lib/heraldry'
import type { Persona, QuestionnaireAnswers } from '@/lib/types'

export default function PersonaPage() {
  const router = useRouter()
  const [persona, setPersona] = useState<Persona | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  async function generate(answers: QuestionnaireAnswers) {
    setLoading(true)
    setError('')
    try {
      const result = await generatePersona(answers)
      const crest = buildCrest(answers)
      setPersona({
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        answers,
        crest,
        name: result.name,
        title: result.title,
        backstory: result.backstory,
        trivia: result.trivia,
        stats: result.stats,
      })
    } catch (e) {
      setError('The oracle is unavailable. Check your OPENAI_API_KEY.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const raw = sessionStorage.getItem('renfest_answers')
    if (!raw) { router.push('/generate'); return }
    generate(JSON.parse(raw))
  }, [])

  const archetype = persona?.answers.archetype.toLowerCase() ?? 'knight'

  if (loading) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center gap-6 bg-archetype-${archetype}`}
      >
        <div className="text-6xl animate-pulse">🔮</div>
        <p className="text-xl text-parchment">The oracle divines thy persona...</p>
        <p className="text-parchment/40 text-sm">Consulting ancient scrolls</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-red-400">{error}</p>
        <a href="/generate" className="text-gold hover:underline">← Try again</a>
      </div>
    )
  }

  if (!persona) return null

  return (
    <div className={`min-h-screen bg-archetype-${archetype} py-8 px-4`}>
      <div className="max-w-lg mx-auto">
        <PersonaProfile
          persona={persona}
          onReroll={() => {
            const raw = sessionStorage.getItem('renfest_answers')
            if (raw) generate(JSON.parse(raw))
          }}
        />
      </div>
    </div>
  )
}
