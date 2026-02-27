import type { Archetype, Symbol, Skill, Motivation, Flaw } from './types'

export interface Question<T extends string> {
  id: string
  prompt: string
  subtext: string
  options: { value: T; label: string; description: string }[]
}

export const questions = [
  {
    id: 'archetype',
    prompt: 'What manner of soul art thou?',
    subtext: 'Choose the path that calls to thine heart',
    options: [
      { value: 'Knight',    label: '⚔️ Knight',    description: 'A warrior of honour and steel' },
      { value: 'Bard',      label: '🎵 Bard',      description: 'A weaver of tales and melodies' },
      { value: 'Wizard',    label: '🔮 Wizard',    description: 'A seeker of arcane mysteries' },
      { value: 'Rogue',     label: '🗡️ Rogue',     description: 'A shadow of cunning and coin' },
      { value: 'Viking',    label: '🪓 Viking',    description: 'A bold explorer of distant shores' },
      { value: 'Herbalist', label: '🌿 Herbalist', description: 'A keeper of forest remedies' },
    ],
  } as Question<Archetype>,
  {
    id: 'symbol',
    prompt: 'What doth thy family crest display?',
    subtext: 'This symbol shall define thine heraldry',
    options: [
      { value: 'Dragon',   label: '🐉 Dragon',  description: 'Mighty and feared by all' },
      { value: 'Wolf',     label: '🐺 Wolf',    description: 'Loyal and fierce in battle' },
      { value: 'Mushroom', label: '🍄 Mushroom', description: 'Unusual but fiercely cherished' },
      { value: 'Moon',     label: '🌙 Moon',    description: 'Mysterious and wise' },
      { value: 'Anvil',    label: '⚒️ Anvil',   description: 'Sturdy and dependable' },
      { value: 'Lute',     label: '🎸 Lute',    description: 'Joyful and ever creative' },
    ],
  } as Question<Symbol>,
  {
    id: 'skill',
    prompt: 'In what art dost thou most excel?',
    subtext: 'Thy greatest gift to the realm',
    options: [
      { value: 'Combat',       label: '⚔️ Combat',       description: 'Thou hast mighty arms' },
      { value: 'Storytelling', label: '📜 Storytelling', description: 'Words flow like fine wine' },
      { value: 'Brewing',      label: '🍺 Brewing',      description: 'Thy ale is legendary' },
      { value: 'Healing',      label: '💊 Healing',      description: 'Thou mendest wounds with care' },
      { value: 'Bargaining',   label: '💰 Bargaining',   description: 'None out-negotiates thee' },
      { value: 'Baking',       label: '🥧 Baking',       description: 'Thy meat pies are renown' },
    ],
  } as Question<Skill>,
  {
    id: 'motivation',
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
  } as Question<Motivation>,
  {
    id: 'flaw',
    prompt: 'What doth betray thee most?',
    subtext: 'Even the greatest heroes have weaknesses',
    options: [
      { value: 'Pride',          label: '👑 Pride',             description: 'Canst not resist a challenge' },
      { value: 'Napping',        label: '😴 Napping',           description: 'Power naps at inopportune moments' },
      { value: 'Squirrels',      label: '🐿️ Squirrels',        description: 'Focus is... a challenge' },
      { value: 'Overconfidence', label: '💪 Overconfidence',    description: 'What could possibly go wrong?' },
      { value: 'Hoarding',       label: '📦 Hoarding',          description: 'Canst not discard a single trinket' },
      { value: 'Directions',     label: '🗺️ Terrible Directions', description: 'Lost in familiar forests' },
    ],
  } as Question<Flaw>,
] as const
