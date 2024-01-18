/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff6363',
        'dark': '#333333',
        'mint': '#17d1c2',
      }
    },
  },
  plugins: [],
}

