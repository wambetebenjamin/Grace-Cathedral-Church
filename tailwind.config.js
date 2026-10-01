/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.js'],
  theme: {
    extend: {
      colors: {
        // Deep Royal Purple scale anchored on #4B0082
        royal: {
          50: '#f6f2fb',
          100: '#ede4f7',
          200: '#d9c8ef',
          300: '#bda2e3',
          400: '#9d6fd2',
          500: '#7f49b8',
          600: '#65309b',
          700: '#4B0082',
          800: '#3d016a',
          900: '#2f0153',
          950: '#200138',
        },
        // Gold scale anchored on #FFD700
        gold: {
          50: '#fffbe6',
          100: '#fff4bf',
          200: '#ffe880',
          300: '#ffdd4d',
          400: '#FFD700',
          500: '#e6c200',
          600: '#c9a800',
          700: '#a88600',
          800: '#876800',
          900: '#6b5200',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'Times New Roman', 'serif'],
        body: ['var(--font-lato)', 'system-ui', 'Segoe UI', 'sans-serif'],
        signature: ['var(--font-signature)', 'cursive'],
      },
      boxShadow: {
        soft: '0 12px 40px -14px rgba(75, 0, 130, 0.22)',
        gold: '0 10px 32px -10px rgba(255, 200, 0, 0.55)',
      },
    },
  },
  plugins: [],
};
