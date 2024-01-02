/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn 1s ease-in',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }),
      
    },
  },
  plugins: [],
}

