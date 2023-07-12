/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2E2E2E',
        'secondary': '#4E4E4E',
        
    },
    boxShadow: {
      'btn':'1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px',
    },
    fontFamily: {
      'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      'sarpanch': ['Sarpanch', 'sans-serif'],
    },
  },

  plugins: [],
}
}