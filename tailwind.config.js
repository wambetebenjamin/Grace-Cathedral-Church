/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        md: '0 12px 32px -14px rgba(15, 23, 42, 0.18)',
      },
    },
  },
  plugins: [],
};
