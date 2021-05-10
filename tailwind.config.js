module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': 'black',
      'base-blue': '#1B75BC',
      'gray': '#D7D4CF',
      'dark-blue':'#104F7F',
    }
    // extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
