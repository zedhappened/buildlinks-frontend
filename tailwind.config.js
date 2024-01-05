/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        alfaSlabOne: ['"Alfa Slab One"', "sans-serif"],
        merriweather: ['"Merriweather"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
      },
      colors: {
        primary: '#D01F25',
        primaryHover: '#A0181C',
        secondary: '#505050',
        secondaryHover: '#333333',
        accent: '#FFC100',
        neutral: '#EEF0F2',
      }
    },
  },
  plugins: [],
}

