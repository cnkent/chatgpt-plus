/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background': {
          'base': '#181818',
          'fraint': '#242424',
          'subtitle': '#313535',
          'muted': '#464e4e',
          'emphasis': '#5d6565'
        }
      }
    },
  },
  plugins: [],
}

