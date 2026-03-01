import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import type { QuestionnaireAnswers } from '@/lib/types'

export async function POST(req: NextRequest) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  const answers: QuestionnaireAnswers = await req.json()

  const VIBE_DESCRIPTIONS: Record<string, string> = {
    Noble:    'serious, deeply in-character, treats the faire as a genuine historical event',
    Fool:     'goofy, here for laughs and turkey legs, never misses a chance for a joke',
    Mead:     'there primarily for the mead hall — boisterous, loud, and perpetually thirsty',
    Vixen:    'provocative and magnetic, dressed to be admired, knows exactly the effect they have',
    Showman:  'theatrical and dramatic, treats every moment as a performance for an audience',
    Wanderer: 'wide-eyed first-timer, overwhelmed with delight, has no idea what is going on',
  }

  const vibeDesc = VIBE_DESCRIPTIONS[answers.vibe] ?? answers.vibe
  const nameHintLine = answers.nameHint
    ? `- Preferred name/handle: "${answers.nameHint}" — work this into the persona name`
    : ''
  const bioHintLine = answers.bioHint
    ? `- Biography note: "${answers.bioHint}" — weave this into the backstory`
    : ''

  const prompt = `You are a whimsical Renaissance Faire persona generator. Given a character profile, generate a full persona as JSON.

Character profile:
- Archetype: ${answers.archetype}
- Crest symbol: ${answers.symbol}
- Greatest skill: ${answers.skill}
- Quest motivation: ${answers.motivation}
- Fatal flaw: ${answers.flaw}
- Personality / vibe: ${vibeDesc}
${nameHintLine}
${bioHintLine}

The "personality / vibe" line is key — let it shape the tone of the backstory, trivia, and name. A Mead Pilgrim's backstory should smell faintly of ale; a Showman's should have a whiff of theatre.

Respond with ONLY valid JSON, no markdown, in this exact shape:
{
  "name": "Full persona name with honorific (e.g. Sir Reginald the Mushroom Knight)",
  "title": "Short punchy title only (e.g. The Mushroom Knight)",
  "backstory": "2-3 sentences. Whimsical but rich. Reference their symbol, skill, motivation, and any bio hint.",
  "trivia": "One hilariously inaccurate historical fact about their era. Keep it absurd.",
  "stats": {
    "realm": "A specific invented realm name (e.g. The Amber Marshes of Veldrath)",
    "weapon": "A specific weapon with a colorful name (e.g. A chipped claymore called 'Last Resort')",
    "allegiance": "A specific faction or order they belong to (e.g. The Order of the Gilded Turnip)"
  }
}`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    response_format: { type: 'json_object' },
    temperature: 1.0,
  })

  const data = JSON.parse(completion.choices[0].message.content || '{}')
  return NextResponse.json(data)
}
