/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      black: '#52525b',
      gray: '#9ca3af',
      white: '#f5f5f4'
    },
    screens: {
      sm: '465px',
      md: '768px',
      lg: '1024px',
      xl: '1640px'
    },
    extend: {}
  },
  plugins: []
};
