/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4A843',
          light: '#E8C97A',
          dark: '#B8922E',
        },
        dark: {
          DEFAULT: '#0B1120',
          light: '#1E293B',
          darker: '#060A14',
        },
        gold: {
          DEFAULT: '#D4A843',
          light: '#E8C97A',
          dark: '#B8922E',
        },
        teal: {
          DEFAULT: '#14B8A6',
          light: '#2DD4BF',
        },
        darkLight: '#1E293B',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
