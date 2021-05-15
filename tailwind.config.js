
// Media: small device responsive to min-width 600px
// Media: med device responsive to min-width 768px
// Media: large device responsive to min-width 992px
// Media: x-large device responsive to min-width 1280px


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
      'white':'#FFFFFF',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
