/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',

  ],
  safelist: [
    // Add the classes you want to safelist
    {
      pattern: /text-(red|green|blue|yellow|purple|pink|indigo|gray)-(600|500|400|300|200|100)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /border-(red|green|blue|yellow|purple|pink|indigo|gray)-(600|500|400|300|200|100)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    // Add more patterns as needed
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

