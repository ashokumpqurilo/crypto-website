/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#2458a5'
      },
      container:{
        padding:{
          DEFAULT: '2rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '14rem',
        }
      },
      backgroundImage:{
        'colorful':'url("./src/assets/color_border.jpg")',
      }
    },
  },
  plugins: [],
}

