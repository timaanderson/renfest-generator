import type { QuestionnaireAnswers, Persona, CrestConfig } from './types'
import { MANTLING } from './heraldry'

export function buildCrest(answers: QuestionnaireAnswers): CrestConfig {
  const m = MANTLING[answers.archetype]
  return {
    primaryColor: m.primary,
    secondaryColor: m.secondary,
    glowColor: m.glow,
    symbol: answers.symbol,
    archetype: answers.archetype,
  }
}

export async function generatePersona(
  answers: QuestionnaireAnswers
): Promise<Omit<Persona, 'id' | 'createdAt' | 'answers' | 'crest'>> {
  const res = await fetch('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(answers),
  })
  if (!res.ok) throw new Error('Generation failed')
  return res.json()
}
