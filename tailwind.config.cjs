/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['12px', '16px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['32px', '40px'],
      '3xl': ['48px', '56px'],
    },
    extend: {
      opacity: {
        '15': '.15',
      },
      colors: {
        black: '#0B0E16',
        white: '#F4F6FF',
        gray: {
          300: '#B1B4BD',
          500: '#91949D',
          700: '#BD0029',
        },
        red: {
          300: '#BB2E57',
          500: '#af183e',
          700: '#300219',
        },
      },
    },
  },
  plugins: [],
}
