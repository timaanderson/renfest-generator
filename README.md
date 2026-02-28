# Renaissance Persona Generator ⚔️

Answer a series of whimsical questions and receive an AI-generated Renaissance Faire persona — complete with a name, title, backstory, heraldic crest, archetype silhouette, and hilariously inaccurate historical trivia.

## Features

- 🎭 **7-step questionnaire** — archetype, symbol, skill, motivation, flaw, optional name hint and bio hint
- 🌑 **Archetype-themed UI** — dark, immersive backgrounds per archetype (Knight, Bard, Wizard, Rogue, Viking, Herbalist)
- 🔮 **GPT-4o persona generation** — name, title, backstory, trivia, stat block
- 🛡️ **3-layer SVG heraldic crests** — shield shape, device, and mantling per archetype
- 🧙 **Character silhouettes** — archetype-specific illustrated silhouette on the profile card
- 📊 **Stat pills** — Cunning, Valor, Charm, Wisdom displayed on the profile
- 🎪 **Festival badges** — archetype-specific badge set
- 🎲 **Re-roll** — regenerate persona without re-doing the questionnaire
- 📜 **Local archive** — save, browse, and delete past personas (localStorage)
- 🖼️ **PNG export** — download your profile card as a 600×600 image

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

## Archetypes

| Archetype | Vibe |
|---|---|
| ⚔️ Knight | Noble, Honorable |
| 🎵 Bard | Musical, Whimsical |
| 🔮 Wizard | Arcane, Scholarly |
| 🗡️ Rogue | Cunning, Shadowy |
| 🪓 Viking | Fierce, Grounded |
| 🌿 Herbalist | Earthy, Calm |
