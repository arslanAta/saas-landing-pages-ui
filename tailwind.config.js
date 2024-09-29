/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#54BD95",
        secondary:"#A6A6A6",
        footer:"#161C28"
      },
      container:{
        center:true
      }
    },
  },
  plugins: [],
}