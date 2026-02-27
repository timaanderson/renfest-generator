import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import type { QuestionnaireAnswers } from '@/lib/types'

export async function POST(req: NextRequest) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  const answers: QuestionnaireAnswers = await req.json()

  const prompt = `You are a whimsical Renaissance Faire persona generator. Given a character profile, generate a persona as JSON.

Character profile:
- Archetype: ${answers.archetype}
- Crest symbol: ${answers.symbol}
- Greatest skill: ${answers.skill}
- Quest motivation: ${answers.motivation}
- Fatal flaw: ${answers.flaw}

Respond with ONLY valid JSON, no markdown, in this exact shape:
{
  "name": "Full persona name with title (e.g. Sir Reginald the Mushroom Knight)",
  "title": "Short punchy title only (e.g. The Mushroom Knight)",
  "backstory": "2-3 sentences. Fun, whimsical. Reference their symbol, skill, and motivation.",
  "trivia": "One hilariously inaccurate historical fact about their era. Keep it absurd."
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
