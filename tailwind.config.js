/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': { 'max': '376px' }
    },
    container: {
      center: true,
      screens: {
        '2xl': '1920px',
      }
    },
    extend: {},
  },
  plugins: [],
}