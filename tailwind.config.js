/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#2D4234',
      },
    },
    screens: {
      '4xl': { 'max': '1919px' },
      '3xl': { 'max': '1399px' },
      '2xl': { 'max': '1279px' },
      'xl': { 'max': '991px' },
      'lg': { 'max': '767px' },
      'md': { 'max': '576px' },
      'sm': { 'max': '380px' },
    }
  },
  plugins: [],
};
