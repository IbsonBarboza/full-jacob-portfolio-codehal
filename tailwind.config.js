/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgColor: '#081b29',
        bgSecondColor: '#112e42',
        textColor: '#ededed',
        mainColor: '#00abf0',
      },
    },
  },
  plugins: [],
}