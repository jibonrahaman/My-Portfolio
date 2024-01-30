/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
      "container":"1320px"
      },
      colors:{
        "first" : "#141b2a",
        "second" : "#262d3c",
        "third" : "#171E2D",
        "four" : "#1E2534",
        "five" : "#171E2D",
        "six" : "#171E2D",
        "seven" : "#181f2e",
        "eight" : "#222938",
        "nine" : "#1d2433",
        "ten" : "#3D4452",
        "eleven" : "#373e4d",
        "twelve" : "#3d4453",
        "thirteen" : "#3d4453",
      },
      boxShadow:{
        'shadow':"",
        'online':"0 10px 15px -3px rgba(0,0,0,.1)",
 
        },
    },
  },
  plugins: [],
}