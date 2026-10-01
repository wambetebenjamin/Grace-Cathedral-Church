/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.js'],
  theme: {
    extend: {
      colors: {
        // Deep navy blue (primary)
        royal: {
          50: '#f1f5f9',
          100: '#e1eaf2',
          200: '#c3d5e5',
          300: '#97b8d3',
          400: '#6695ba',
          500: '#45779f',
          600: '#2f5e84',
          700: '#274c6b',
          800: '#1e3a53',
          900: '#16293b',
          950: '#0e1c29',
        },
        // Muted burgundy (accent)
        gold: {
          50: '#faf4f5',
          100: '#f3e4e7',
          200: '#e6c8ce',
          300: '#d3a2ac',
          400: '#bc7c8a',
          500: '#a25a6c',
          600: '#874354',
          700: '#6f3646',
          800: '#592b38',
          900: '#45222c',
        },
      },
      fontFamily: {
        heading: [
          'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif',
        ],
        body: [
          'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 12px 40px -14px rgba(22, 41, 59, 0.18)',
        gold: '0 8px 24px -12px rgba(22, 41, 59, 0.28)',
      },
    },
  },
  plugins: [],
};
