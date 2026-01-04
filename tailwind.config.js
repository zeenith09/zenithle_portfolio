/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'retro-bg': {
          dark: '#000000',
          light: '#ffffff',
        },
        'retro-text': {
          dark: '#e0e0e0',
          light: '#1a1a1a',
        },
        'retro-purple': '#9333ea',
        'retro-blue': '#3b82f6',
        'retro-pink': '#ec4899',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
      },
    },
  },
  plugins: [],
}
