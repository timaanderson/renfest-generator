'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import PersonaProfile from '@/components/PersonaProfile'
import OraclesChamber from '@/components/OraclesChamber'
import { generatePersona, buildCrest } from '@/lib/generate'
import type { Persona, QuestionnaireAnswers } from '@/lib/types'

export default function PersonaPage() {
  const router = useRouter()
  const [persona, setPersona] = useState<Persona | null>(null)
  const [answers, setAnswers] = useState<QuestionnaireAnswers | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  async function generate(ans: QuestionnaireAnswers) {
    setLoading(true)
    setError('')
    try {
      const result = await generatePersona(ans)
      const crest = buildCrest(ans)
      setPersona({
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        answers: ans,
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
    const parsed = JSON.parse(raw) as QuestionnaireAnswers
    setAnswers(parsed)
    generate(parsed)
  }, [])

  if (loading && answers) {
    return <OraclesChamber answers={answers} />
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="text-6xl animate-pulse">🔮</div>
        <p className="text-xl text-inkbrown">The oracle divines thy persona...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <p className="text-red-600 font-bold">{error}</p>
        <a href="/generate" className="text-burgundy hover:underline">← Try again</a>
      </div>
    )
  }

  if (!persona) return null

  const archetype = persona.answers.archetype.toLowerCase()

  return (
    <div className={`-mx-4 -mt-8 px-4 pt-8 pb-8 bg-archetype-${archetype}`}>
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
