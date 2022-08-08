/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      // to add opacity % -primary/10
      primary: '#2C3639',
      secondary: '#3F4E4F',
      trinary: '#76BA99',
      'font-Primary': '#ffffff',
      'font-Secondary': 'hsla(0,0%,100%,0.6)',
      'font-trinary': '#3385ff',
      black: '##000000',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
