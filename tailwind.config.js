/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Adjust for your file structure
  theme: {
    extend: {
      keyframes: {
        infiniteSlide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },

      boxShadow: {
        'l-2xl': '-10px 0 20px rgba(0, 0, 0, 0.25)', // Left shadow
        'r-2xl': '10px 0 20px rgba(0, 0, 0, 0.25)',  // Right shadow
      },

      animation: {
        infiniteSlide: 'infiniteSlide 10s linear infinite',
      },
    },
  },
  plugins: [],
};