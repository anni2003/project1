/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        wiggle: 'fade 1s ease-in-out infinite',
      },
      colors:{
        'Off Black Hex':'#1a1b1f',
        'Pale Yellow Hex':'#f0ece7'
      },
      fontFamily: {
        'sans': ['Montserrat','sans-serif' ],
        'serif': [ 'DM Serif Display','serif' ],
 
      },
    },
  },
  plugins: [],
}

// npx tailwindcss -i ./docs/input.css -o ./docs/output.css --watch