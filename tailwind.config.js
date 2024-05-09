/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black" : "#19191B",
        "white" : "#E9EAF5",
        "default-base" : "#EF701B",
        "default-accent" : "#4D2B97",
      }
    },
  },
  plugins: [],
}