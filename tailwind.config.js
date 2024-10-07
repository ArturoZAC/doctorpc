/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins','sans-serif']
      },
      backgroundImage: {
        'imageLG': 'url(../images/netflix.jpg)',
        'imageXS': 'url(../images/movilbackground.jpg)'
      },
      boxShadow: {
        'fondo-white': '0px -5px 0px 0px rgb(255 255 255 / 40%),0px 5px 0px 0px rgb(255 255 255 / 40%);'
      }
    },
    screens: {
      'xs': '0px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

