/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS, JSX, TS, and TSX files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'yellow-gold': '#ffd11b',
        'm-blue': '#0066CC',
        'customGray': '#191918',
      },
      height:{
        "90":"90vh"
      },
      keyframes: {
        bounceY: {
          '0%, 100%': { transform: 'translateY(-0.25rem)' }, // -1
          '50%': { transform: 'translateY(0.25rem)' } // 1
        }
      },
      animation: {
        bounceY: 'bounceY 1.7s infinite', // Adjust the duration as needed
      },
    },
  },
  plugins: [],
};


