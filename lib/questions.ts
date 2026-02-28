import type { Archetype, Symbol, Skill, Motivation, Flaw } from './types'

export interface ChoiceQuestion<T extends string> {
  id: string
  kind: 'choice'
  prompt: string
  subtext: string
  options: { value: T; label: string; description: string }[]
}

export interface TextQuestion {
  id: 'nameHint' | 'bioHint'
  kind: 'text'
  prompt: string
  subtext: string
  placeholder: string
  optional: true
}

export type AnyQuestion = ChoiceQuestion<string> | TextQuestion

export const questions: AnyQuestion[] = [
  {
    id: 'archetype',
    kind: 'choice',
    prompt: 'What manner of soul art thou?',
    subtext: 'Choose the path that calls to thine heart',
    options: [
      { value: 'Knight',  label: '⚔️ Knight',  description: 'A warrior of honour and steel' },
      { value: 'Bard',    label: '🎵 Bard',    description: 'A weaver of tales and melodies' },
      { value: 'Wizard',  label: '🔮 Wizard',  description: 'A seeker of arcane mysteries' },
      { value: 'Rogue',   label: '🗡️ Rogue',   description: 'A shadow of cunning and coin' },
      { value: 'Viking',  label: '🪓 Viking',  description: 'A bold explorer of distant shores' },
      { value: 'Fairy',   label: '🧚 Fairy',   description: 'A creature of the enchanted forest' },
    ],
  } as ChoiceQuestion<Archetype>,
  {
    id: 'symbol',
    kind: 'choice',
    prompt: 'What doth thy family crest display?',
    subtext: 'This symbol shall define thine heraldry',
    options: [
      { value: 'Dragon',   label: '🐉 Dragon',   description: 'Mighty and feared by all' },
      { value: 'Wolf',     label: '🐺 Wolf',     description: 'Loyal and fierce in battle' },
      { value: 'Mushroom', label: '🍄 Mushroom', description: 'Unusual but fiercely cherished' },
      { value: 'Moon',     label: '🌙 Moon',     description: 'Mysterious and wise' },
      { value: 'Anvil',    label: '⚒️ Anvil',    description: 'Sturdy and dependable' },
      { value: 'Lute',     label: '🎸 Lute',     description: 'Joyful and ever creative' },
    ],
  } as ChoiceQuestion<Symbol>,
  {
    id: 'skill',
    kind: 'choice',
    prompt: 'In what art dost thou most excel?',
    subtext: 'Thy greatest gift to the realm',
    options: [
      { value: 'Combat',       label: '⚔️ Combat',          description: 'Thou hast mighty arms' },
      { value: 'Storytelling', label: '📜 Storytelling',    description: 'Words flow like fine wine' },
      { value: 'Brewing',      label: '🍺 Brewing',         description: 'Thy ale is legendary' },
      { value: 'Healing',      label: '💊 Healing',         description: 'Thou mendest wounds with care' },
      { value: 'Bargaining',   label: '💰 Bargaining',      description: 'None out-negotiates thee' },
      { value: 'Baking',       label: '🥧 Baking',          description: 'Thy meat pies are renown' },
    ],
  } as ChoiceQuestion<Skill>,
  {
    id: 'motivation',
    kind: 'choice',
    prompt: 'What brought thee to the faire?',
    subtext: 'Every hero hath a reason',
    options: [
      { value: 'Glory',     label: '🏆 Glory',     description: 'To be sung in legends' },
      { value: 'Fortune',   label: '💰 Fortune',   description: 'Coin, always coin' },
      { value: 'Love',      label: '💘 Love',      description: 'A hopeless romantic' },
      { value: 'Curiosity', label: '🔍 Curiosity', description: 'Thou must see everything' },
      { value: 'Prophecy',  label: '⭐ Prophecy',  description: 'The stars demanded it' },
      { value: 'Hunger',    label: '🍗 Hunger',    description: 'Honestly, the turkey legs' },
    ],
  } as ChoiceQuestion<Motivation>,
  {
    id: 'flaw',
    kind: 'choice',
    prompt: 'What doth betray thee most?',
    subtext: 'Even the greatest heroes have weaknesses',
    options: [
      { value: 'Pride',          label: '👑 Pride',               description: 'Canst not resist a challenge' },
      { value: 'Napping',        label: '😴 Napping',             description: 'Power naps at inopportune moments' },
      { value: 'Squirrels',      label: '🐿️ Squirrels',          description: 'Focus is... a challenge' },
      { value: 'Overconfidence', label: '💪 Overconfidence',      description: 'What could possibly go wrong?' },
      { value: 'Hoarding',       label: '📦 Hoarding',            description: 'Canst not discard a single trinket' },
      { value: 'Directions',     label: '🗺️ Terrible Directions', description: 'Lost in familiar forests' },
    ],
  } as ChoiceQuestion<Flaw>,
  {
    id: 'nameHint',
    kind: 'text',
    prompt: 'A name echoes in the wind...',
    subtext: 'Dost thou carry a name or title the oracle should weave in?',
    placeholder: 'e.g. "Lady Bramblewood" or "goes by Pip"',
    optional: true,
  },
  {
    id: 'bioHint',
    kind: 'text',
    prompt: 'What tales shall be told of thee?',
    subtext: 'Any detail the bard should include in thy legend? (completely optional)',
    placeholder: 'e.g. "loves cats", "has a wooden leg", "once bested three knights"',
    optional: true,
  },
]
