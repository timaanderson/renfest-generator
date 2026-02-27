# Renaissance Persona Generator ⚔️

Answer five whimsical questions and receive an AI-generated Renaissance Faire persona — complete with a name, backstory, heraldic crest, and hilariously inaccurate historical trivia.

## Features
- 🎭 5-question themed questionnaire
- 🔮 GPT-4o generated persona (name, title, backstory, trivia)
- 🛡️ SVG heraldic crest based on your answers
- 🎲 Re-roll button to regenerate without re-doing the questionnaire
- 📜 Local archive (localStorage) — save, browse, export, delete

## Setup

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.local.example` to `.env.local` and add your OpenAI key:
   ```
   OPENAI_API_KEY=sk-...
   ```

3. Run the dev server:
   ```bash
   npm run dev
   ```

Visit http://localhost:3000
