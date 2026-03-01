'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Questionnaire from '@/components/Questionnaire'
import type { QuestionnaireAnswers } from '@/lib/types'

export default function GeneratePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleComplete(answers: QuestionnaireAnswers) {
    setLoading(true)
    setError('')
    try {
      sessionStorage.setItem('renfest_answers', JSON.stringify(answers))
      router.push('/persona')
    } catch (e) {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <div className="text-5xl animate-spin">⚔️</div>
        <p className="text-xl text-inkbrown">Consulting the oracle...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-serif font-bold text-inkbrown">Thy Questionnaire</h1>
        <p className="text-inkbrown/50 text-sm mt-1 italic">Answer truly, and the oracle shall divine thy fate</p>
      </div>

      <div className="parchment-card rounded-2xl p-8 carved-border border-inkbrown/30">
        {error && <p className="text-red-600 text-center mb-4 text-sm">{error}</p>}
        <Questionnaire onComplete={handleComplete} />
      </div>
    </div>
  )
}
