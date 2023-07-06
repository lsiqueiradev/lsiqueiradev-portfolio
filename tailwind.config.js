/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        success: {
          light: '#D7FFE0',
          dark: '#018C0F',
        },
        gray: {
          100: '#D9D9D9',
          200: '#CCCCCC',
          300: '#A7A7A7',
          400: '#EBEAED',
          600: '#797979',
          700: '#363636',
          800: '#222222',
          900: '#141414',
          950: '#191919'
        },
        blue: {
          900: '#42446E'
        },
        gradient: ['#13B0F5', '#E70FAA'],
      },
    },
  },
  plugins: [],
}
