/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green: {
          '500': '#07847E',
          '800': '#00B37E'
        },
        blue:{
          '300': '#282843',
        },
        white: {
          '300': '#E1E1E6'
        }
      }
    },
  },
  plugins: [],
}