/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Mono: "'Montserrat', sans-serif"

      },
      colors:{
        pro:'#F9A51A'
      }
    },
  },
  plugins: [require("daisyui")],
}

