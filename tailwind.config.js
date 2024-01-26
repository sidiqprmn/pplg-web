/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/components/**/*.{jsx,tsx}',
    './src/pages/**/*.{jsx,tsx}',
    './src/layouts/**/*.{jsx,tsx}',
    './src/views/**/*.{jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0093BD',
      },
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '576px' },
        // => @media (max-width: 576px) { ... }
      },
      fontFamily: {
        'pinyon-script': ['Alex Brush', 'cursive'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
