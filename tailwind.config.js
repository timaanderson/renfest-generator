/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#f4e4bc',
        inkbrown: '#3b1f0a',
        burgundy: '#6b1a2a',
        forest: '#2d5a27',
        gold: '#c9a84c',
        arcane: '#1a3a6b',
        shadow: '#1a1a1a',
        bardpurple: '#4a2070',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
      boxShadow: {
        'glow-knight': '0 0 30px rgba(107,26,42,0.6), 0 0 60px rgba(107,26,42,0.3)',
        'glow-bard': '0 0 30px rgba(74,32,112,0.6), 0 0 60px rgba(74,32,112,0.3)',
        'glow-wizard': '0 0 30px rgba(26,58,107,0.6), 0 0 60px rgba(26,58,107,0.3)',
        'glow-rogue': '0 0 30px rgba(40,40,40,0.8), 0 0 60px rgba(20,20,20,0.5)',
        'glow-viking': '0 0 30px rgba(45,90,39,0.6), 0 0 60px rgba(45,90,39,0.3)',
        'glow-fairy': '0 0 30px rgba(58,107,26,0.6), 0 0 60px rgba(58,107,26,0.3)',
      },
    },
  },
  plugins: [],
}
