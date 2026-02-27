'use client'
import { useState } from 'react'
import { questions } from '@/lib/questions'
import type { QuestionnaireAnswers } from '@/lib/types'

interface Props {
  onComplete: (answers: QuestionnaireAnswers) => void
}

export default function Questionnaire({ onComplete }: Props) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Partial<QuestionnaireAnswers>>({})
  const question = questions[step]

  function select(value: string) {
    const updated = { ...answers, [question.id]: value }
    setAnswers(updated)
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      onComplete(updated as QuestionnaireAnswers)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-1 mb-4">
        {questions.map((_, i) => (
          <div key={i} className={`h-2 flex-1 rounded-full transition-colors ${i <= step ? 'bg-burgundy' : 'bg-inkbrown/20'}`} />
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm text-inkbrown/60 mb-1">Question {step + 1} of {questions.length}</p>
        <h2 className="text-2xl font-bold text-inkbrown mb-1">{question.prompt}</h2>
        <p className="text-inkbrown/70 italic">{question.subtext}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {question.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => select(opt.value)}
            className="p-4 border-2 border-inkbrown/20 rounded-lg text-left hover:border-burgundy hover:bg-burgundy/5 transition-all group"
          >
            <div className="font-semibold text-inkbrown group-hover:text-burgundy">{opt.label}</div>
            <div className="text-sm text-inkbrown/60 mt-1">{opt.description}</div>
          </button>
        ))}
      </div>

      {step > 0 && (
        <button onClick={() => setStep(step - 1)} className="text-sm text-inkbrown/50 hover:text-inkbrown transition-colors">
          ← Back
        </button>
      )}
    </div>
  )
}
