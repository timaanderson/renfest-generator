'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import PersonaCard from '@/components/PersonaCard'
import { generatePersona, buildCrest } from '@/lib/generate'
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
      setPersona({
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        answers,
        crest: buildCrest(answers),
        ...result,
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

  if (loading) {
    return (
      <div className="text-center py-20 space-y-4">
        <div className="text-5xl animate-pulse">🔮</div>
        <p className="text-xl text-inkbrown">The oracle divines thy persona...</p>
        <p className="text-inkbrown/50 text-sm">Consulting ancient scrolls</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-20 space-y-4">
        <p className="text-red-600">{error}</p>
        <a href="/generate" className="text-burgundy hover:underline">← Try again</a>
      </div>
    )
  }

  if (!persona) return null

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-inkbrown text-center">Thy Persona Hath Been Revealed</h1>
      <PersonaCard
        persona={persona}
        onReroll={() => {
          const raw = sessionStorage.getItem('renfest_answers')
          if (raw) generate(JSON.parse(raw))
        }}
      />
    </div>
  )
}
