export type Archetype = 'Knight' | 'Bard' | 'Wizard' | 'Rogue' | 'Viking' | 'Herbalist'
export type Symbol = 'Dragon' | 'Wolf' | 'Mushroom' | 'Moon' | 'Anvil' | 'Lute'
export type Skill = 'Combat' | 'Storytelling' | 'Brewing' | 'Healing' | 'Bargaining' | 'Baking'
export type Motivation = 'Glory' | 'Fortune' | 'Love' | 'Curiosity' | 'Prophecy' | 'Hunger'
export type Flaw = 'Pride' | 'Napping' | 'Squirrels' | 'Overconfidence' | 'Hoarding' | 'Directions'

export interface QuestionnaireAnswers {
  archetype: Archetype
  symbol: Symbol
  skill: Skill
  motivation: Motivation
  flaw: Flaw
}

export interface Persona {
  id: string
  createdAt: string
  name: string
  title: string
  backstory: string
  trivia: string
  answers: QuestionnaireAnswers
  crest: CrestConfig
}

export interface CrestConfig {
  primaryColor: string
  secondaryColor: string
  symbol: Symbol
  archetype: Archetype
}
