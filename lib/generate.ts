import type { QuestionnaireAnswers, Persona, CrestConfig } from './types'

const CREST_COLORS: Record<string, { primary: string; secondary: string }> = {
  Knight:    { primary: '#6b1a2a', secondary: '#c9a84c' },
  Bard:      { primary: '#4a2070', secondary: '#c9a84c' },
  Wizard:    { primary: '#1a3a6b', secondary: '#7ecdc8' },
  Rogue:     { primary: '#1a1a1a', secondary: '#6b1a2a' },
  Viking:    { primary: '#2d5a27', secondary: '#c9a84c' },
  Herbalist: { primary: '#2d5a27', secondary: '#f4e4bc' },
}

export function buildCrest(answers: QuestionnaireAnswers): CrestConfig {
  const colors = CREST_COLORS[answers.archetype] || { primary: '#6b1a2a', secondary: '#c9a84c' }
  return {
    primaryColor: colors.primary,
    secondaryColor: colors.secondary,
    symbol: answers.symbol,
    archetype: answers.archetype,
  }
}

export async function generatePersona(answers: QuestionnaireAnswers): Promise<Omit<Persona, 'id' | 'createdAt' | 'answers' | 'crest'>> {
  const res = await fetch('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(answers),
  })
  if (!res.ok) throw new Error('Generation failed')
  return res.json()
}
