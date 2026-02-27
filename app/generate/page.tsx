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
      <div className="text-center py-20">
        <div className="text-4xl mb-4 animate-spin">⚔️</div>
        <p className="text-xl text-inkbrown">Consulting the oracle...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-inkbrown text-center">Thy Questionnaire</h1>
      {error && <p className="text-red-600 text-center">{error}</p>}
      <Questionnaire onComplete={handleComplete} />
    </div>
  )
}
