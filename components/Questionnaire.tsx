'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { questions } from '@/lib/questions'
import type { QuestionnaireAnswers } from '@/lib/types'
import type { ChoiceQuestion, TextQuestion } from '@/lib/questions'

interface Props {
  onComplete: (answers: QuestionnaireAnswers) => void
}

export default function Questionnaire({ onComplete }: Props) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Partial<QuestionnaireAnswers>>({})
  const [textValue, setTextValue] = useState('')
  const question = questions[step]

  function handleChoice(value: string) {
    const updated = { ...answers, [question.id]: value }
    setAnswers(updated)
    setTextValue('')
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      onComplete(updated as QuestionnaireAnswers)
    }
  }

  function handleTextContinue(skip = false) {
    const updated: Partial<QuestionnaireAnswers> = { ...answers }
    if (!skip && textValue.trim()) {
      (updated as any)[question.id] = textValue.trim()
    }
    setAnswers(updated)
    setTextValue('')
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      onComplete(updated as QuestionnaireAnswers)
    }
  }

  function goBack() {
    setStep(step - 1)
    setTextValue('')
  }

  const isLast = step === questions.length - 1
  const progressPct = ((step) / questions.length) * 100

  return (
    <div className="relative overflow-hidden min-h-[380px] flex flex-col">
      {/* Progress bar */}
      <div className="flex gap-1.5 mb-6">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
              i <= step ? 'bg-burgundy' : 'bg-inkbrown/10'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-1 flex flex-col"
        >
          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-widest text-inkbrown/40 font-bold mb-1">
              Step {step + 1} of {questions.length}
              {question.kind === 'text' && (
                <span className="ml-2 normal-case opacity-70">— optional</span>
              )}
            </p>
            <h2 className="text-2xl font-serif font-bold text-inkbrown mb-1">{question.prompt}</h2>
            <p className="text-inkbrown/60 italic text-sm">{question.subtext}</p>
          </div>

          {question.kind === 'choice' ? (
            <div className="grid grid-cols-2 gap-3">
              {(question as ChoiceQuestion<string>).options.map((opt, idx) => (
                <motion.button
                  key={opt.value}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleChoice(opt.value)}
                  className="p-4 border-2 border-inkbrown/20 rounded-lg text-left hover:border-burgundy hover:bg-burgundy/5 transition-all group"
                >
                  <div className="font-semibold text-inkbrown group-hover:text-burgundy">{opt.label}</div>
                  <div className="text-sm text-inkbrown/60 mt-1">{opt.description}</div>
                </motion.button>
              ))}
            </div>
          ) : (
            /* Text input step */
            <div className="space-y-4">
              <textarea
                className="w-full p-4 border-2 border-inkbrown/20 rounded-lg bg-parchment/60 text-inkbrown placeholder-inkbrown/40 focus:border-burgundy focus:outline-none resize-none text-sm leading-relaxed"
                rows={3}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                placeholder={(question as TextQuestion).placeholder}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleTextContinue(false)
                  }
                }}
              />
              <div className="flex gap-3">
                <button
                  onClick={() => handleTextContinue(false)}
                  className="flex-1 py-3 bg-burgundy text-parchment rounded-lg hover:bg-burgundy/80 transition-colors font-medium text-sm"
                >
                  {isLast ? '✨ Reveal My Fate' : 'Continue →'}
                </button>
                <button
                  onClick={() => handleTextContinue(true)}
                  className="px-6 py-3 border border-inkbrown/30 text-inkbrown/60 rounded-lg hover:bg-inkbrown/5 transition-colors text-sm"
                >
                  Skip
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-auto pt-4">
        {step > 0 && (
          <button onClick={goBack} className="text-sm text-inkbrown/40 hover:text-inkbrown transition-colors">
            ← Back
          </button>
        )}
      </div>
    </div>
  )
}
