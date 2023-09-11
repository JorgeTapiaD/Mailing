/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '112px' : '112px'
      },
      fontFamily: {
        custom: ['Barlow Semi Condensed', 'sans-serif']
      },
    },
  },
  plugins: [],
}

