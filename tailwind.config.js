/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
       
        Passion: [`"Passion One"`, `serif`], // Add more as needed
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },

    },
  },
  plugins: [],
}