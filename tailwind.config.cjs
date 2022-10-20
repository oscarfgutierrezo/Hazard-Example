module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          300: '#a3a2aa',
          500: '#7e7d83',
          700: '#424346',
          900: '#2d2c2e',
        },
        pink: '#d955f8 ',
        orange: '#ebaf6f',
        purple: '#605fe9',
        blue: '#6c8ce2',
        lightpurple: '#ebf2fe'  
      },
    },
  },
  plugins: [],
}
