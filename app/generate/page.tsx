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
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-inkbrown">
        <div className="text-5xl animate-spin">⚔️</div>
        <p className="text-xl text-parchment">Consulting the oracle...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-inkbrown flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-parchment">Thy Questionnaire</h1>
          <p className="text-parchment/50 text-sm mt-1 italic">Answer truly, and the oracle shall divine thy fate</p>
        </div>

        {/* Parchment card */}
        <div className="parchment-card rounded-2xl p-8 carved-border border-inkbrown/30">
          {error && <p className="text-red-600 text-center mb-4 text-sm">{error}</p>}
          <Questionnaire onComplete={handleComplete} />
        </div>
      </div>
    </div>
  )
}
