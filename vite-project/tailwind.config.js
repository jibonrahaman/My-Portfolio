/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "first" : "#141b2a",
        "second" : "#262d3c",
        "third" : "#171E2D",
        "four" : "#1E2534",
        "five" : "#3D4452",
        "six" : "#3D4452",
        "seven" : "#333A49",
        "eight" : "#282f3d",
        "nine" : "#3d4453",
        "ten" : "#3D4452",
        "eleven" : "#373e4d",
        "twelve" : "#3d4453",
        "thirteen" : "#3d4453",
      }
    },
  },
  plugins: [],
}