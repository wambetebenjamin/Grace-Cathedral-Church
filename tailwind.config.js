/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.js'],
  theme: {
    extend: {
      colors: {
        // Modern midnight-indigo foundation
        royal: {
          50: '#f5f7ff', 100: '#e8ecff', 200: '#cbd5ff', 300: '#a7b5ff',
          400: '#8192ff', 500: '#6373f4', 600: '#4d5cda', 700: '#3946ad',
          800: '#252d6e', 900: '#171b42', 950: '#0b0d24',
        },
        // Warm coral accent for energy and contrast
        gold: {
          50: '#fff7f3', 100: '#ffe9df', 200: '#ffd0bd', 300: '#ffb092',
          400: '#ff8b6b', 500: '#f66b4f', 600: '#dc4f38', 700: '#b63b2b',
          800: '#8f3027', 900: '#702b26',
        },
      },
      fontFamily: {
        heading: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 55px -18px rgba(23, 27, 66, 0.22)',
        gold: '0 12px 30px -12px rgba(246, 107, 79, 0.45)',
      },
    },
  },
  plugins: [],
};
