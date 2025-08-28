/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a3d8f4',
        secondary: '#ffd7ba',
        blackBG: '#f9f9f9',
        favorite: '#d8bfd8'
      },
      fontFamily: {
        primary: ["Montserrat", "serif"],
        secondary: ["Nunito Sans", "serif"]
      },
      backgroundImage: {
        'starry-night': "radial-gradient(circle, #ffffff 1px, transparent 1px), #000000",
      },
    },
  },
  plugins: [],
}
