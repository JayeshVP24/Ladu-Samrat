module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: "#FFF4ED",
        primary: "#FF6A00",
        secondary: "#FFC49A"
      }
    },
    fontFamily: {
      "source-sans-pro": ['"Source Sans Pro"', "sans-serif"],
      "montserrat": ["Montserrat", "sans-serif"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  mode: "jit",
  daisyui: {
    themes: false,
  },
}
