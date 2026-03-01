export type Archetype = 'Knight' | 'Bard' | 'Wizard' | 'Rogue' | 'Viking' | 'Pirate' | 'Fairy' | 'Royal'
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
  nameHint?: string   // step 6 — optional preferred name/handle
  bioHint?: string    // step 7 — optional biography note
}

export interface PersonaStats {
  realm: string       // e.g. "The Sunken Marshes of Elderfen"
  weapon: string      // e.g. "A rusted falchion named 'Debts Unpaid'"
  allegiance: string  // e.g. "The Amber Council"
}

export interface Persona {
  id: string
  createdAt: string
  name: string
  title: string
  backstory: string
  trivia: string
  stats: PersonaStats
  answers: QuestionnaireAnswers
  crest: CrestConfig
}

export interface CrestConfig {
  primaryColor: string
  secondaryColor: string
  glowColor: string
  symbol: Symbol
  archetype: Archetype
}

export interface FestivalEntry {
  id: string
  name: string        // free-form festival name, e.g. "Texas Renaissance Festival"
  month: string       // e.g. "October"
  year: string        // e.g. "2024"
}
