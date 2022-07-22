module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 5px 14px 0px rgba(0,0,0,0.29)',
      },
      colors: {
        'white-wompi': '#FAFCFF',
        'blue-wompi' : '#333E6E'
      },
      screens: {
        'tm': '930px',
        'smm': '376px',
      },
    },
  },
  plugins: [],
}