/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,md,mdx}",
    './node_modules/preline/preline.js',

  ],
  safelist: [
    // Add the classes you want to safelist
    {
      pattern: /text-(red|green|blue|yellow|purple|pink|indigo|gray)-(900|800|700|600|500|400|300|200|100|50)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /border-(red|green|blue|yellow|purple|pink|indigo|gray)-(900|800|700|600|500|400|300|200|100|50)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /bg-(red|green|blue|yellow|purple|pink|indigo|gray)-(900|800|700|600|500|400|300|200|100|50)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /ring-(red|green|blue|yellow|purple|pink|indigo|gray)-(900|800|700|600|500|400|300|200|100|50)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    // Add more patterns as needed
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      fontSize: {
        sm: '14px',
        input: '15px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        
      },
      colors: {
        blue: {
          '50': '#E0E9F8',
          '100': '#A3BEEB',
          '200': '#709AE0',
          '300': '#477DD7',
          '400': '#3C76D4',
          '500': '#326FD2',
          '600': '#2D64BD',
          '700': '#2859A8',
          '800': '#214889',
          '900': '#1C3D74',
        },
        gray: {
          '50': '#F5F6F7',
          '100': '#EBEDF1',
          '200': '#D3D8DE',
          '300': '#BAC1CB',
          '400': '#828FA1',
          '500': '#64748B',
          '600': '#5A687D',
          '700': '#37404C',
          '800': '#323A46',
          '900': '#232931',
        },
        red: {
          '50': '#FDE8E8',
          '100': '#F4B7B7',
          '200': '#EB8383',
          '300': '#E66565',
          '400': '#E14646',
          '500': '#DE3131',
          '600': '#C82C2C',
          '700': '#B22727',
          '800': '#851D1D',
          '900': '#4E1111',
        },
        green: {
          '50': '#C8E3DA',
          '100': '#9DCDBD',
          '200': '#63AF95',
          '300': '#3C9B7B',
          '400': '#238F6B',
          '500': '#0B825A',
          '600': '#096F4D',
          '700': '#086244',
          '800': '#07553B',
          '900': '#053A28',
        },
        purple: {
          '50': '#E8E5F6',
          '100': '#C1BBE6',
          '200': '#9B90D6',
          '300': '#8476CD',
          '400': '#7465C6',
          '500': '#6554C0',
          '600': '#5B4CAD',
          '700': '#4C3F90',
          '800': '#3D3273',
          '900': '#28224D',
        },
        yellow: {
          '50': '#FDECCE',
          '100': '#FBD89D',
          '200': '#FACA79',
          '300': '#F8B648',
          '400': '#F6A823',
          '500': '#F59E0B',
          '600': '#DD8E0A',
          '700': '#C47E09',
          '800': '#935F07',
          '900': '#4A2F03',
        },
        white: "#FFFFFF",
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

