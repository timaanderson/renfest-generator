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
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
