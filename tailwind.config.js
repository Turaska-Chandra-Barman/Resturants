//import nextui laibray
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        'font-roboto': '"Roboto", "sans-serif"',
        lexend: '"Lexend", "sans-serif"',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
  plugins: [],
};
