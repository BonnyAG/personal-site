/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['Open Sans', 'sans-serif'],
      'title': ['Rubik Mono One', 'sans-serif'],
      'subtitle': ['Roboto Mono', 'monospace'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
