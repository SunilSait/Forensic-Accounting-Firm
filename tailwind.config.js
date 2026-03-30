/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#254984',
          light: '#3a6ac2',
          dark: '#172d52',
        },
        dark: {
          DEFAULT: '#0B1120',
          light: '#1E293B',
          darker: '#060A14',
        },
        gold: {
          DEFAULT: '#254984',
          light: '#3a6ac2',
          dark: '#172d52',
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
