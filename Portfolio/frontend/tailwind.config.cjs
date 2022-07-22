/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: { colors: {
    "primary": "#CAE7DF",
    "secondary": "#7D3780",
  }, animation: {
    "spin-slow": "spin 5s linear infinite",
  },
    
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
          animation: {
            wiggle: 'wiggle 1s ease-in-out infinite',
          }
        }}

    },
  },
  plugins: [],
});
