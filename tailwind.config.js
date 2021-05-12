
// Media: small device responsive to min-width 600px
// Media: med device responsive to min-width 768px
// Media: small device responsive to min-width 992px


module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'black': '#000000',
      'base-blue': '#1B75BC',
      'gray': '#EDEDED',
      'dark-blue':'#104F7F',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
