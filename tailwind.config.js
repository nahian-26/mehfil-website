/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        garnet: { DEFAULT: '#632640', deep: '#351522', dark: '#241219', light: '#78314F' },
        midnight: { DEFAULT: '#241219', deep: '#180B10', surface: '#2C151E' },
        teal: { DEFAULT: '#07544F', deep: '#063A37', dark: '#063A37', light: '#0B6E67' },
        gold: { DEFAULT: '#C69B60', muted: '#A9814E', light: '#D8B582' },
        porcelain: { DEFAULT: '#F3ECE3', soft: '#F8F3EC' },
        champagne: { DEFAULT: '#E7D8C4', muted: '#D5C3AC' },
        stone: { DEFAULT: '#B5A69A', dark: '#7A6C61' },
        peach: { DEFAULT: '#E7D8C4', light: '#F3ECE3' },
        ink: { DEFAULT: '#241219', deep: '#180B10', soft: '#351522' },
        warmwhite: '#FFF9F4'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
